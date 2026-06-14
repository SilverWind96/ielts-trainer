// ============================================================================
// IELTS TRAINER — Main Application Entry Point
// ============================================================================
import { initNav } from './router.js';
import { initModal } from './modal.js';
import { updateSidebarProgress } from './progress.js';
import { initAuth } from './auth.js';

// Import pages to register them with the router registry
import './pages/dashboard.js';
import './pages/study-plan.js';
import './pages/vocabulary.js';
import './pages/vocab-practice.js';
import './pages/strategies.js';
import './pages/resources.js';

import { renderDashboard } from './pages/dashboard.js';

// ============================================================================
// Initialize Application
// ============================================================================
function init() {
  initNav();
  initModal();
  initAuth();
  updateSidebarProgress();
  renderDashboard();
}

document.addEventListener('DOMContentLoaded', init);
