/* ============================================================
   Shared UI - header, footer, dropdown, mobile menu, search
   Also renders About sections on the home page.
   ============================================================ */

const SITE = {
  brand: 'Smail Lotmani',
  tagline: 'Embedded Systems Engineer',
  nav: [
    { label: 'Home',       href: 'index.html' },
    { label: 'Portfolio',  href: 'portfolio.html' },
    { label: 'Experience', href: 'index.html#experience' },
    { label: 'Skills',     href: 'index.html#skills' },
    { label: 'Contact',    href: 'index.html#contact' }
  ]
};

function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

/* ---------- Header ---------- */
function renderNav() {
  const mount = document.getElementById('site-nav');
  if (!mount) return;

  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const links = SITE.nav.map(l => {
    const target = l.href.split('#')[0].toLowerCase();
    const active = target === page && !l.href.includes('#');
    return `<li>
      <a href="${l.href}" class="nav-link ${active ? 'active' : ''}">${l.label}</a>
    </li>`;
  }).join('');

  mount.innerHTML = `
  <header class="site-header">
    <div class="container mx-auto max-w-6xl px-5 py-4 flex justify-between items-center">
      <div>
        <a href="index.html" class="brand block leading-tight">${SITE.brand}</a>
        <span class="brand-tag">${SITE.tagline}</span>
      </div>

      <button id="nav-toggle" class="md:hidden p-2" aria-label="Toggle menu" aria-expanded="false">
        <span class="hamburger-box"><span class="hamburger-inner"></span></span>
      </button>

      <nav id="nav-collapse"
           class="hidden md:block absolute md:static top-full left-0 w-full md:w-auto border-b md:border-0 px-5 md:px-0 py-4 md:py-0 shadow-md md:shadow-none"
           style="border-color: var(--line);">
        <ul class="flex flex-col md:flex-row md:items-center md:gap-7">
          ${links}
          <li class="md:ml-4 mt-3 md:mt-0">
            <input id="tl-spotlight" class="tl-nav-spotlight" type="search"
                   placeholder="Search projects…">
          </li>
        </ul>
      </nav>
    </div>
  </header>`;
}

/* ---------- Footer ---------- */
function renderFooter() {
  const mount = document.getElementById('site-footer');
  if (!mount) return;
  mount.innerHTML = `
  <footer class="site-footer">
    <div class="container mx-auto max-w-6xl text-center">
      <p>&copy; ${new Date().getFullYear()} ${SITE.brand} &middot; Embedded Systems &amp; Firmware</p>
    </div>
  </footer>`;
}

/* ---------- Nav interactions ---------- */
function wireNav() {
  const toggle = document.getElementById('nav-toggle');
  const collapse = document.getElementById('nav-collapse');

  if (toggle && collapse) {
    toggle.addEventListener('click', () => {
      const open = collapse.classList.toggle('hidden') === false;
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.addEventListener('click', e => {
    if (!e.target.closest('#nav-toggle') && !e.target.closest('#nav-collapse')) {
      if (collapse && window.innerWidth < 768) {
        collapse.classList.add('hidden');
        toggle?.setAttribute('aria-expanded', 'false');
      }
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && collapse) {
      collapse.classList.add('hidden');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  });

  /* Simple client-side project search → portfolio page */
  document.getElementById('tl-spotlight')?.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && this.value.trim().length >= 2) {
      location.href = 'portfolio.html?q=' + encodeURIComponent(this.value.trim());
    }
  });
}

/* ---------- Featured projects ---------- */
function projectThumbHtml(p, imgClass) {
  if (p.thumbnail) {
    return `<img src="${escapeHtml(p.thumbnail)}" alt="${escapeHtml(p.title)}"
                 class="${imgClass}" loading="lazy"
                 onerror="this.outerHTML='&lt;div class=\\'project-placeholder\\'&gt;&lt;i class=\\'fas fa-microchip\\'&gt;&lt;/i&gt;&lt;/div&gt;'">`;
  }
  return `<div class="project-placeholder"><i class="fas fa-microchip"></i></div>`;
}

function renderFeatured() {
  const mount = document.getElementById('featured-mount');
  if (!mount || typeof PROJECTS === 'undefined') return;

  const featured = PROJECTS.filter(p => p.featured).slice(0, 4);

  mount.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      ${featured.map(p => `
        <a href="portfolio.html?id=${p.id}" class="project-card card">
          ${projectThumbHtml(p, 'project-image')}
          <div class="p-5">
            <p class="label mb-2">${escapeHtml(p.period)}</p>
            <h3 class="project-title text-lg leading-snug mb-2">${escapeHtml(p.title)}</h3>
            <div>${(p.skills || []).slice(0, 3).map(s => `<span class="tag">${escapeHtml(s)}</span>`).join('')}</div>
          </div>
        </a>`).join('')}
    </div>`;
}

/* ---------- Experience ---------- */
function renderExperience() {
  const mount = document.getElementById('experience-mount');
  if (!mount || typeof EXPERIENCE === 'undefined') return;

  mount.innerHTML = EXPERIENCE.map(e => `
    <div class="exp-item flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
      <div>
        <p class="exp-role">${escapeHtml(e.role)}</p>
        <p class="exp-meta">${escapeHtml(e.company)} &middot; ${escapeHtml(e.location)}</p>
      </div>
      <p class="label shrink-0">${escapeHtml(e.period)}</p>
    </div>
  `).join('');
}

/* ---------- Skills ---------- */
function renderSkills() {
  const mount = document.getElementById('skills-mount');
  if (!mount || typeof SKILL_GROUPS === 'undefined') return;

  mount.innerHTML = SKILL_GROUPS.map(g => `
    <div class="skill-card">
      <p class="label mb-4">${escapeHtml(g.title)}</p>
      <div>${g.items.map(i => `<span class="tag">${escapeHtml(i)}</span>`).join('')}</div>
    </div>
  `).join('');
}

/* ---------- Education ---------- */
function renderEducation() {
  const mount = document.getElementById('education-mount');
  if (!mount || typeof EDUCATION === 'undefined') return;

  mount.innerHTML = EDUCATION.map(e => `
    <div>
      <p class="font-semibold text-lg" style="color: var(--text); font-family: 'Space Grotesk', sans-serif;">${escapeHtml(e.degree)}</p>
      <p class="text-sm mb-4" style="color: var(--text-soft);">${escapeHtml(e.school)} &middot; ${escapeHtml(e.period)}</p>
      <ul class="space-y-2 text-sm list-disc pl-5" style="color: var(--text-soft);">
        ${e.notes.map(n => `<li>${escapeHtml(n)}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

/* ---------- Languages ---------- */
function renderLanguages() {
  const mount = document.getElementById('languages-mount');
  if (!mount || typeof LANGUAGES === 'undefined') return;

  mount.innerHTML = LANGUAGES.map(l => `
    <div class="flex justify-between items-center pb-2" style="border-bottom: 1px solid var(--line);">
      <span style="color: var(--text);">${escapeHtml(l.name)}</span>
      <span class="label">${escapeHtml(l.level)}</span>
    </div>
  `).join('');
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  wireNav();
});
