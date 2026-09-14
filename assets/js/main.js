/* ============================================================
   Shared UI: header, footer, dropdown, mobile menu, search
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

/* ---------- helpers ---------- */
function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

/* ------------------------------------------------------------
   "Logged in" user — static site, so read from localStorage.
   ------------------------------------------------------------ */
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

/* ---------- header ---------- */
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
      <a href="${l.href}"
         class="block py-2 md:py-0 text-white hover:underline ${active ? 'font-semibold underline underline-offset-4' : ''}">
        ${l.label}
      </a></li>`;
  }).join('');

  const userMenu = isLoggedIn
    ? `
      <li><a href="user/info.html"><i class="fas fa-user"></i> My Info</a></li>
      <li><a href="user/progress.html"><i class="fas fa-chart-line"></i> My Progress</a></li>
      ${user.role === 'admin' ? '<li><a href="dashboard.html"><i class="fas fa-edit"></i> Dashboard</a></li>' : ''}
      <li><a href="#" id="logout-link"><i class="fas fa-sign-out-alt"></i> Log Out</a></li>`
    : `<li><a href="login.html"><i class="fas fa-sign-in-alt"></i> Log In</a></li>`;

  mount.innerHTML = `
  <header class="bg-gray-900 text-white p-4 relative z-50">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center gap-2">
        <a href="index.html" class="text-xl font-bold tracking-tight">${SITE.brand}</a>
      </div>

      <button id="nav-toggle" class="md:hidden p-2" aria-label="Toggle menu" aria-expanded="false">
        <span class="hamburger-box"><span class="hamburger-inner"></span></span>
      </button>

      <nav id="nav-collapse"
           class="hidden md:block absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none">
        <ul class="flex flex-col md:flex-row md:items-center md:gap-6">
          ${links}
          <li class="dropdown" id="tl-dropdown-user">
            <a href="#" class="dropdown-toggle flex items-center gap-1 py-2 md:py-0 text-white hover:underline"
               aria-haspopup="true" aria-expanded="false">
              <span>${escapeHtml(user.username)}</span>
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

/* ---------- footer ---------- */
function renderFooter() {
  const mount = document.getElementById('site-footer');
  if (!mount) return;
  mount.innerHTML = `
  <footer class="bg-gray-900 text-white p-5 mt-8">
    <div class="container mx-auto text-center text-sm text-gray-300">
      <p>&copy; ${new Date().getFullYear()} ${SITE.brand}. All rights reserved.</p>
    </div>
  </footer>`;
}

/* ---------- wire up interactions ---------- */
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

/* ---------- featured projects on home page ---------- */
function renderFeatured() {
  const mount = document.getElementById('featured-mount');
  if (!mount || typeof PROJECTS === 'undefined') return;

  const featured = PROJECTS.slice(0, 3);

  mount.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      ${featured.map(p => `
        <a href="portfolio.html?id=${p.id}" class="project-card bg-white rounded-lg shadow-md overflow-hidden">
          <img src="${escapeHtml(p.thumbnail)}" alt="${escapeHtml(p.title)}"
               class="project-image" loading="lazy">
          <div class="p-4">
            <h3 class="text-lg font-semibold text-center text-gray-900">${escapeHtml(p.title)}</h3>
          </div>
        </a>`).join('')}
    </div>`;
}

/* ---------- init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  wireNav();
});