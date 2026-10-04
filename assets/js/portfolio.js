/* ============================================================
   Portfolio page - grid view + single-project detail
   Handles both remote video embeds (YouTube) and local MP4s.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const mount = document.getElementById('portfolio-mount');
  if (!mount) return;

  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const q = (params.get('q') || '').toLowerCase().trim();

  if (id) renderDetail(Number(id));
  else renderGrid(q);

  wireLightbox();
});

function projectThumbHtml(p, imgClass) {
  if (p.thumbnail) {
    return `<img src="${escapeHtml(p.thumbnail)}" alt="${escapeHtml(p.title)}"
                 class="${imgClass}" loading="lazy"
                 onerror="this.outerHTML='&lt;div class=\\'project-placeholder\\'&gt;&lt;i class=\\'fas fa-microchip\\'&gt;&lt;/i&gt;&lt;/div&gt;'">`;
  }
  return `<div class="project-placeholder"><i class="fas fa-microchip"></i></div>`;
}

function galleryImageHtml(src, alt) {
  return `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}"
               class="gallery-image w-full h-56 object-cover"
               data-full="${escapeHtml(src)}" loading="lazy"
               onerror="this.style.display='none'">`;
}

function videoHtml(src) {
  if (/^https?:\/\//i.test(src)) {
    return `<iframe class="video-frame" src="${escapeHtml(src)}"
              title="Project video" loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>`;
  }
  return `<video class="video-frame" controls preload="metadata" playsinline>
            <source src="${escapeHtml(src)}" type="video/mp4">
            Your browser does not support the video tag.
          </video>`;
}

/* ---------- Grid ---------- */
function renderGrid(query) {
  const mount = document.getElementById('portfolio-mount');
  document.title = 'Portfolio - Smail Lotmani';

  let list = PROJECTS;
  if (query) {
    list = PROJECTS.filter(p => {
      const hay = [
        p.title, p.org, p.description,
        ...(p.skills || []), ...(p.keywords || [])
      ].join(' ').toLowerCase();
      return hay.includes(query);
    });
  }

  if (!list.length) {
    mount.innerHTML = `
      <div class="card p-10 text-center max-w-lg mx-auto">
        <i class="fas fa-search text-4xl mb-4" style="color: var(--text-muted);"></i>
        <p style="color: var(--text-soft);" class="mb-6">No projects match your search.</p>
        <a href="portfolio.html" class="btn btn-outline">
          <i class="fas fa-arrow-left"></i> Show all projects
        </a>
      </div>`;
    return;
  }

  const header = query
    ? `<p class="mb-6 text-sm" style="color: var(--text-muted);">Showing ${list.length} result${list.length === 1 ? '' : 's'} for “${escapeHtml(query)}”</p>`
    : '';

  mount.innerHTML = header + `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      ${list.map(p => `
        <a href="portfolio.html?id=${p.id}" class="project-card card">
          ${projectThumbHtml(p, 'project-image')}
          <div class="p-5">
            <p class="label mb-2">${escapeHtml(p.period)}</p>
            <h2 class="project-title text-lg leading-snug mb-2">${escapeHtml(p.title)}</h2>
            ${p.org ? `<p class="text-sm mb-3" style="color: var(--text-muted);">${escapeHtml(p.org)}</p>` : ''}
            <div>${(p.skills || []).slice(0, 4).map(s => `<span class="tag">${escapeHtml(s)}</span>`).join('')}</div>
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
        <i class="fas fa-search text-4xl mb-4" style="color: var(--text-muted);"></i>
        <p style="color: var(--text-soft);" class="mb-6">Project not found.</p>
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
        ${photos.map((src, i) => galleryImageHtml(src, `${project.title} photo ${i + 1}`)).join('')}
      </div>
    </div>` : '';

  const videosBlock = videos.length ? `
    <div class="mb-8">
      <p class="label mb-3">Videos</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${videos.map(src => videoHtml(src)).join('')}
      </div>
    </div>` : '';

  const linkBlock = project.link ? `
    <a href="${escapeHtml(project.link)}" target="_blank" rel="noopener" class="btn btn-primary mb-8">
      <i class="fas fa-external-link-alt"></i> View Project
    </a>` : '';

  const descHtml = escapeHtml(project.description)
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/\n/g, '<br>');

  mount.innerHTML = `
    <article class="card p-7 md:p-10 max-w-3xl mx-auto">
      <a href="portfolio.html" class="link-accent text-sm mb-6 inline-flex items-center gap-1">
        <i class="fas fa-arrow-left"></i> All projects
      </a>
      <p class="label mb-3 mt-4">${escapeHtml(project.period)}</p>
      <h1 class="section-title mb-2">${escapeHtml(project.title)}</h1>
      ${project.org ? `<p class="mb-6" style="color: var(--text-muted);">${escapeHtml(project.org)}</p>` : '<div class="mb-6"></div>'}
      ${linkBlock}
      <div class="leading-relaxed mb-8" style="color: var(--text-soft);">
        <p class="mb-4">${descHtml}</p>
      </div>
      ${skillsBlock}
      ${keywordsBlock}
      ${photosBlock}
      ${videosBlock}
    </article>`;
}

/* ---------- Lightbox ---------- */
function wireLightbox() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  if (!modal || !modalImg) return;

  document.addEventListener('click', e => {
    const img = e.target.closest('.gallery-image');
    if (img && img.dataset.full) {
      modalImg.src = img.dataset.full;
      modalImg.alt = img.alt || '';
      modal.classList.add('open');
      document.body.classList.add('modal-open');
    }
  });

  modal.querySelector('.modal-close')?.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('open');
      document.body.classList.remove('modal-open');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
      document.body.classList.remove('modal-open');
    }
  });
}
