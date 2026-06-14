// ============================================================================
// IELTS TRAINER — Task Modal & Toggle
// ============================================================================
import { WEEKS } from './data.js';
import { state, saveState } from './state.js';
import { $, $$, formatMinutes, showToast } from './utils.js';
import { updateSidebarProgress } from './progress.js';
import { renderPage } from './router.js';

export function toggleTask(taskId, completed) {
  if (completed) {
    if (!state.completedTasks.includes(taskId)) {
      state.completedTasks.push(taskId);
      showToast('Task completed! Keep going! 🎉', 'success');
    }
  } else {
    state.completedTasks = state.completedTasks.filter(id => id !== taskId);
  }
  saveState();
  updateSidebarProgress();

  // Re-render current page
  const activePage = $('.page.active');
  if (activePage) {
    const pageId = activePage.id.replace('page-', '');
    renderPage(pageId);
  }
}

export function findTaskById(taskId) {
  for (const week of WEEKS) {
    for (const day of week.days) {
      for (const task of day.tasks) {
        if (task.id === taskId) {
          return { task, day, week };
        }
      }
    }
  }
  return null;
}

export function openTaskModal(taskId) {
  const result = findTaskById(taskId);
  if (!result) return;
  const { task, day, week } = result;
  const isCompleted = state.completedTasks.includes(task.id);

  const overlay = $('#modal-overlay');
  const badge = $('#modal-skill-badge');
  const body = $('#modal-body');
  const footer = $('#modal-footer');

  badge.className = `modal-skill-badge skill-badge skill-${task.skill}`;
  badge.textContent = task.skill.charAt(0).toUpperCase() + task.skill.slice(1);

  body.innerHTML = `
    <h3 class="modal-title">${task.title}</h3>
    <div class="modal-meta">
      <span class="modal-meta-item">📅 Week ${week.id}, ${day.label}</span>
      <span class="modal-meta-item">⏱️ ${formatMinutes(task.minutes)}</span>
    </div>
    <div class="modal-description">
      <p>${task.description}</p>
    </div>
  `;

  footer.innerHTML = `
    <button class="btn ${isCompleted ? 'btn-outline' : 'btn-primary'}" id="modal-toggle-btn">
      ${isCompleted ? '↩️ Mark Incomplete' : '✅ Mark Complete'}
    </button>
  `;

  $('#modal-toggle-btn').addEventListener('click', () => {
    toggleTask(task.id, !isCompleted);
    closeModal();
  });

  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

export function closeModal() {
  $('#modal-overlay').classList.remove('show');
  document.body.style.overflow = '';
}

export function initModal() {
  $('#modal-close').addEventListener('click', closeModal);
  $('#modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}
