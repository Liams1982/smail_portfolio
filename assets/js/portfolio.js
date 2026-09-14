/* ============================================================
   Portfolio page - grid view + single-project detail
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const mount = document.getElementById('portfolio-mount');
  if (!mount) return;

  const id = new URLSearchParams(location.search).get('id');
  if (id) renderDetail(Number(id));
  else renderGrid();

  wireLightbox();
});

function projectThumbHtml(p, imgClass) {
  if (p.thumbnail) {
    return `<img src="${escapeHtml(p.thumbnail)}" alt="${escapeHtml(p.title)}"
                 class="${imgClass}" loading="lazy">`;
  }
  return `<div class="project-placeholder"><i class="fas fa-microchip"></i></div>`;
}

/* ---------- Grid ---------- */
function renderGrid() {
  const mount = document.getElementById('portfolio-mount');
  document.title = 'Portfolio - Smail Lotmani';

  if (!PROJECTS.length) {
    mount.innerHTML = '<p class="text-center text-gray-500">No projects found.</p>';
    return;
  }

  mount.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      ${PROJECTS.map(p => `
        <a href="portfolio.html?id=${p.id}" class="project-card card">
          ${projectThumbHtml(p, 'project-image')}
          <div class="p-5">
            <p class="label mb-2">${escapeHtml(p.period)}</p>
            <h2 class="project-title text-lg leading-snug mb-2">${escapeHtml(p.title)}</h2>
            ${p.org ? `<p class="text-sm text-gray-500 mb-3">${escapeHtml(p.org)}</p>` : ''}
            <div>${(p.skills || []).slice(0,4).map(s => `<span class="tag">${escapeHtml(s)}</span>`).join('')}</div>
          </div>
        </a>`).join('')}
    </div>`;
}

/* ---------- Detail ---------- */
function renderDetail(id) {
  const mount = document.getElementById('portfolio-mount');
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    document.title = 'Not found - Smail Lotmani';
    mount.innerHTML = `
      <div class="card p-10 text-center max-w-lg mx-auto">
        <i class="fas fa-search text-4xl text-gray-300 mb-4"></i>
        <p class="text-gray-600 mb-6">Project not found.</p>
        <a href="portfolio.html" class="btn btn-outline">
          <i class="fas fa-arrow-left"></i> Back to Portfolio
        </a>
      </div>`;
    return;
  }

  document.title = `${project.title} - Smail Lotmani`;

  const photos = (project.photos || []).filter(Boolean);
  const videos = (project.videos || []).filter(Boolean);
  const skills = (project.skills || []);
  const keywords = (project.keywords || []);

  const skillsBlock = skills.length ? `
    <div class="mb-8">
      <p class="label mb-3">Skills</p>
      <div>${skills.map(s => `<span class="tag tag-accent">${escapeHtml(s)}</span>`).join('')}</div>
    </div>` : '';

  const keywordsBlock = keywords.length ? `
    <div class="mb-8">
      <p class="label mb-3">Keywords</p>
      <div>${keywords.map(k => `<span class="tag">${escapeHtml(k)}</span>`).join('')}</div>
    </div>` : '';

  const photosBlock = photos.length ? `
    <div class="mb-8">
      <p class="label mb-3">Photos</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${photos.map(src => `
          <img src="${escapeHtml(src)}" alt="${escapeHtml(project.title)} photo"
               class="gallery-image w-full h-56 object-cover"
               data-full="${escapeHtml(src)}" loading="lazy">`).join('')}
      </div>
    </div>` : '';

  const videosBlock = videos.length ? `
    <div class="mb-8">
      <p class="label mb-3">Videos</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${videos.map(src => `
          <iframe class="video-frame" src="${escapeHtml(src)}"
                  title="Project video" loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>`).join('')}
      </div>
    </div>` : '';

  const linkBlock = project.link ? `
    <a href="${escapeHtml(project.link)}" target="_blank" rel="noopener" class="btn btn-primary mb-8">
      <i class="fas fa-external-link-alt"></i> View Project
    </a>` : '';

  mount.innerHTML = `
    <article class="card p-7 md:p-10 max-w-3xl mx-auto">
      <p class="label mb-3">${escapeHtml(project.period)}</p>
      <h1 class="display text-3xl md:text-4xl mb-3">${escapeHtml(project.title)}</h1>
      ${project.org ? `<p class="text-gray-500 mb-8">${escapeHtml(project.org)}</p>` : '<div class="mb-6"></div>'}

      <p class="text-gray-700 mb-8 leading-relaxed whitespace-pre-line">${escapeHtml(project.description)}</p>

      ${linkBlock}
      ${skillsBlock}
      ${keywordsBlock}
      ${photosBlock}
      ${videosBlock}

      <a href="portfolio.html" class="btn btn-ghost">
        <i class="fas fa-arrow-left"></i> Back to Portfolio
      </a>
    </article>`;
}

/* ---------- Lightbox ---------- */
function wireLightbox() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  if (!modal || !modalImg) return;

  const close = () => {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
    modalImg.src = '';
  };

  document.addEventListener('click', e => {
    const thumb = e.target.closest('.gallery-image');
    if (thumb) {
      modalImg.src = thumb.dataset.full;
      modalImg.alt = thumb.alt;
      modal.classList.add('open');
      document.body.classList.add('modal-open');
      return;
    }
    if (e.target === modal || e.target.closest('.modal-close')) close();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
  });
}