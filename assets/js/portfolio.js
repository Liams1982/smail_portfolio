/* ============================================================
   Portfolio page — grid + single-project detail view
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const mount = document.getElementById('portfolio-mount');
  if (!mount) return;

  const id = new URLSearchParams(location.search).get('id');
  if (id) renderDetail(Number(id));
  else renderGrid();

  wireLightbox();
});

function renderGrid() {
  const mount = document.getElementById('portfolio-mount');
  document.title = 'Portfolio — Smail Lotmani';

  if (!PROJECTS.length) {
    mount.innerHTML = '<p class="text-center text-gray-700">No projects found.</p>';
    return;
  }

  mount.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      ${PROJECTS.map(p => `
        <a href="portfolio.html?id=${p.id}"
           class="project-card bg-white rounded-lg shadow-md overflow-hidden">
          <img src="${escapeHtml(p.thumbnail)}" alt="${escapeHtml(p.title)}"
               class="project-image" loading="lazy">
          <div class="p-4">
            <h2 class="text-lg font-semibold text-center text-gray-900">${escapeHtml(p.title)}</h2>
          </div>
        </a>`).join('')}
    </div>`;
}

function renderDetail(id) {
  const mount = document.getElementById('portfolio-mount');
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    document.title = 'Not found — Smail Lotmani';
    mount.innerHTML = `
      <div class="bg-white p-8 rounded-lg shadow-md text-center max-w-lg mx-auto">
        <i class="fas fa-search text-4xl text-gray-300 mb-4"></i>
        <p class="text-gray-700 mb-6">Project not found.</p>
        <a href="portfolio.html" class="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800">
          <i class="fas fa-arrow-left mr-2"></i>Back to Portfolio
        </a>
      </div>`;
    return;
  }

  document.title = `${project.title} — Smail Lotmani`;

  const photos = (project.photos || []).filter(Boolean);
  const videos = (project.videos || []).filter(Boolean);

  const photosBlock = photos.length ? `
    <h2 class="text-lg font-semibold mb-3 text-gray-900">Photos</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      ${photos.map(src => `
        <img src="${escapeHtml(src)}" alt="${escapeHtml(project.title)} photo"
             class="gallery-image w-full h-48 object-cover rounded shadow-sm"
             data-full="${escapeHtml(src)}" loading="lazy">`).join('')}
    </div>` : '';

  const videosBlock = videos.length ? `
    <h2 class="text-lg font-semibold mb-3 text-gray-900">Videos</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      ${videos.map(src => `
        <iframe class="video-frame" src="${escapeHtml(src)}"
                title="Project video" loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>`).join('')}
    </div>` : '';

  mount.innerHTML = `
    <article class="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h1 class="text-2xl md:text-3xl font-bold mb-2 text-gray-900">${escapeHtml(project.title)}</h1>
      <p class="text-gray-500 text-sm mb-6">
        <i class="far fa-calendar-alt mr-1"></i>${escapeHtml(project.createdAt)}
      </p>

      <p class="text-gray-700 mb-8 leading-relaxed whitespace-pre-line">${escapeHtml(project.description)}</p>

      ${photosBlock}
      ${videosBlock}

      <a href="portfolio.html"
         class="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800">
        <i class="fas fa-arrow-left mr-2"></i>Back to Portfolio
      </a>
    </article>`;
}

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