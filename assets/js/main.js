/* ============================================================
   Shared UI — header, footer, dropdown, mobile menu, search
   ============================================================ */

const SITE = {
  brand: 'Smail Lotmani',
  nav: [
    { label: 'Home',      href: 'index.html' },
    { label: 'Portfolio', href: 'portfolio.html' },
    { label: 'About',     href: 'index.html#about' },
    { label: 'Contact',   href: 'index.html#contact' }
  ]
};

function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function getCurrentUser() {
  try {
    const raw = localStorage.getItem('sl_user');
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return { username: 'Guest', role: 'guest' };
}
function roleLabel(role) {
  return { admin: 'Admin', user: 'User' }[role] || 'Guest';
}

/* ---------- Header ---------- */
function renderNav() {
  const mount = document.getElementById('site-nav');
  if (!mount) return;

  const user = getCurrentUser();
  const isLoggedIn = user.role !== 'guest';
  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const links = SITE.nav.map(l => {
    const target = l.href.split('#')[0].toLowerCase();
    const active = target === page;
    return `<li>
      <a href="${l.href}" class="nav-link ${active ? 'active' : ''}">${l.label}</a>
    </li>`;
  }).join('');

  const userMenu = isLoggedIn
    ? `
      <li><a href="user/info.html"><i class="fas fa-user"></i> My Info</a></li>
      <li><a href="#" id="logout-link"><i class="fas fa-sign-out-alt"></i> Log Out</a></li>`
    : `<li><a href="login.html"><i class="fas fa-sign-in-alt"></i> Log In</a></li>`;

  mount.innerHTML = `
  <header class="site-header">
    <div class="container mx-auto max-w-6xl px-5 py-4 flex justify-between items-center">
      <a href="index.html" class="brand">${SITE.brand}</a>

      <button id="nav-toggle" class="md:hidden p-2" aria-label="Toggle menu" aria-expanded="false">
        <span class="hamburger-box"><span class="hamburger-inner"></span></span>
      </button>

      <nav id="nav-collapse"
           class="hidden md:block absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent border-b md:border-0 border-[#e7e5e4] px-5 md:px-0 py-4 md:py-0 shadow-md md:shadow-none">
        <ul class="flex flex-col md:flex-row md:items-center md:gap-7">
          ${links}
          <li class="dropdown mt-4 md:mt-0" id="tl-dropdown-user">
            <a href="#" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
              ${escapeHtml(user.username)}
              <i class="fas fa-caret-down text-xs"></i>
            </a>
            <ul class="dropdown-menu">${userMenu}</ul>
          </li>
          <li class="md:ml-4 mt-3 md:mt-0">
            <input id="tl-spotlight" class="tl-nav-spotlight" type="search"
                   placeholder="Search projects">
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
      <p>&copy; ${new Date().getFullYear()} ${SITE.brand}. All rights reserved.</p>
    </div>
  </footer>`;
}

/* ---------- Wire up interactions ---------- */
function wireNav() {
  const toggle = document.getElementById('nav-toggle');
  const collapse = document.getElementById('nav-collapse');

  if (toggle && collapse) {
    toggle.addEventListener('click', () => {
      const open = collapse.classList.toggle('hidden') === false;
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('.dropdown-toggle').forEach(t => {
    t.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const menu = t.nextElementSibling;
      const open = menu.classList.toggle('open');
      t.setAttribute('aria-expanded', String(open));
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu.open')
        .forEach(m => m.classList.remove('open'));
    }
    if (!e.target.closest('#nav-toggle') && !e.target.closest('#nav-collapse')) {
      if (collapse && window.innerWidth < 768) {
        collapse.classList.add('hidden');
        toggle?.setAttribute('aria-expanded', 'false');
      }
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.dropdown-menu.open')
        .forEach(m => m.classList.remove('open'));
    }
  });

  document.getElementById('tl-spotlight')?.addEventListener('input', function () {
    if (this.value.length >= 2) console.log('Search for:', this.value);
  });

  document.getElementById('logout-link')?.addEventListener('click', e => {
    e.preventDefault();
    localStorage.removeItem('sl_user');
    location.reload();
  });
}

/* ---------- Featured projects on home page ---------- */
function projectThumbHtml(p, imgClass) {
  if (p.thumbnail) {
    return `<img src="${escapeHtml(p.thumbnail)}" alt="${escapeHtml(p.title)}"
                 class="${imgClass}" loading="lazy">`;
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
            <div>${(p.skills || []).slice(0,3).map(s => `<span class="tag">${escapeHtml(s)}</span>`).join('')}</div>
          </div>
        </a>`).join('')}
    </div>`;
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  wireNav();
});