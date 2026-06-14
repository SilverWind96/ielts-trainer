// ============================================================================
// IELTS TRAINER — Router (Page Registry & Navigation)
// ============================================================================
import { $, $$ } from './utils.js';

const pageRenderers = {};

export function registerPage(id, renderFn) {
  pageRenderers[id] = renderFn;
}

export function renderPage(pageId) {
  const renderer = pageRenderers[pageId];
  if (renderer) renderer();
}

export function navigateTo(pageId) {
  // Update nav
  $$('.nav-item').forEach(n => n.classList.remove('active'));
  const active = $(`.nav-item[data-page="${pageId}"]`);
  if (active) active.classList.add('active');

  // Update pages
  $$('.page').forEach(p => p.classList.remove('active'));
  const page = $(`#page-${pageId}`);
  if (page) {
    page.classList.add('active');
    // Render page content
    renderPage(pageId);
  }

  // Close mobile menu
  $('#sidebar').classList.remove('open');
  $('#sidebar-overlay').classList.remove('show');
  $('#mobile-menu-toggle').classList.remove('active');

  // Scroll to top
  $('#main-content').scrollTop = 0;
}

export function initNav() {
  const navItems = $$('.nav-item', $('#sidebar-nav'));
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      navigateTo(page);
    });
  });

  // Mobile menu
  const toggle = $('#mobile-menu-toggle');
  const overlay = $('#sidebar-overlay');
  const sidebar = $('#sidebar');
  
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
    toggle.classList.toggle('active');
  });
  
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    toggle.classList.remove('active');
  });
}
