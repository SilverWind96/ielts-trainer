// ============================================================================
// IELTS TRAINER — Study Plan Page
// ============================================================================
import { WEEKS } from '../data.js';
import { state, saveState } from '../state.js';
import { $, $$, formatMinutes } from '../utils.js';
import { getWeekProgress } from '../progress.js';
import { toggleTask, openTaskModal } from '../modal.js';
import { registerPage } from '../router.js';

function renderStudyPlan() {
  const page = $('#page-study-plan');

  page.innerHTML = `
    <div class="page-header">
      <div class="page-header-content">
        <h2 class="page-title">8-Week Study Plan</h2>
        <p class="page-subtitle">Your structured path from foundation to exam mastery</p>
      </div>
    </div>

    <div class="week-selector">
      <div class="week-phases">
        ${['foundation', 'skill-building', 'exam-mastery'].map(phase => {
          const phaseWeeks = WEEKS.filter(w => w.phase === phase);
          const phaseLabel = phase === 'foundation' ? '🧱 Foundation' : phase === 'skill-building' ? '⚡ Skill Building' : '🏆 Exam Mastery';
          return `
            <div class="phase-section">
              <h4 class="phase-heading">${phaseLabel}</h4>
              <div class="week-tabs">
                ${phaseWeeks.map(w => {
                  const wp = getWeekProgress(w.id);
                  return `
                    <button class="week-tab ${w.id === state.currentWeek ? 'active' : ''} ${wp.pct === 100 ? 'completed' : wp.pct > 0 ? 'in-progress' : ''}" data-week="${w.id}">
                      <span class="week-tab-num">W${w.id}</span>
                      <div class="week-tab-bar"><div class="week-tab-bar-fill" style="width:${wp.pct}%"></div></div>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="week-content" id="week-content"></div>
  `;

  // Event: week tabs
  $$('.week-tab', page).forEach(tab => {
    tab.addEventListener('click', () => {
      state.currentWeek = parseInt(tab.dataset.week);
      saveState();
      renderStudyPlan();
    });
  });

  renderWeekContent();
}

function renderWeekContent() {
  const container = $('#week-content');
  const week = WEEKS.find(w => w.id === state.currentWeek);
  if (!week) return;

  const weekProg = getWeekProgress(week.id);

  container.innerHTML = `
    <div class="week-detail-card card">
      <div class="week-detail-header">
        <div>
          <h3 class="week-detail-title">Week ${week.id}: ${week.title}</h3>
          <p class="week-detail-summary">${week.summary}</p>
        </div>
        <div class="week-detail-progress">
          <div class="circular-progress" data-pct="${weekProg.pct}">
            <svg viewBox="0 0 80 80">
              <circle class="cp-bg" cx="40" cy="40" r="34" />
              <circle class="cp-fill" cx="40" cy="40" r="34" style="stroke-dasharray: ${2 * Math.PI * 34}; stroke-dashoffset: ${2 * Math.PI * 34 - (weekProg.pct / 100) * 2 * Math.PI * 34}" />
            </svg>
            <span class="cp-text">${weekProg.pct}%</span>
          </div>
        </div>
      </div>

      <div class="days-list">
        ${week.days.map(d => {
          const dayCompleted = d.tasks.filter(t => state.completedTasks.includes(t.id)).length;
          const dayTotal = d.tasks.length;
          const dayMinutes = d.tasks.reduce((sum, t) => sum + t.minutes, 0);
          return `
            <div class="day-card">
              <div class="day-card-header" data-day-toggle="w${week.id}d${d.day}">
                <div class="day-card-info">
                  <span class="day-number">Day ${d.day}</span>
                  <span class="day-name">${d.label}</span>
                </div>
                <div class="day-card-meta">
                  <span class="day-duration">⏱️ ${formatMinutes(dayMinutes)}</span>
                  <span class="day-count ${dayCompleted === dayTotal && dayTotal > 0 ? 'all-done' : ''}">${dayCompleted}/${dayTotal}</span>
                  <span class="day-chevron">▾</span>
                </div>
              </div>
              <div class="day-card-body open" id="day-body-w${week.id}d${d.day}">
                ${d.tasks.map(t => `
                  <div class="task-item ${state.completedTasks.includes(t.id) ? 'completed' : ''}" data-task-id="${t.id}">
                    <label class="custom-checkbox">
                      <input type="checkbox" ${state.completedTasks.includes(t.id) ? 'checked' : ''} data-task="${t.id}">
                      <span class="checkmark"></span>
                    </label>
                    <div class="task-info">
                      <span class="task-title">${t.title}</span>
                      <div class="task-meta">
                        <span class="skill-badge skill-${t.skill}">${t.skill}</span>
                        <span class="task-duration">⏱️ ${formatMinutes(t.minutes)}</span>
                      </div>
                    </div>
                    <button class="task-expand-btn" data-task-id="${t.id}" title="View details">ℹ️</button>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Event listeners
  $$('[data-day-toggle]', container).forEach(header => {
    header.addEventListener('click', () => {
      const bodyId = header.dataset.dayToggle;
      const body = $(`#day-body-${bodyId}`);
      if (body) body.classList.toggle('open');
      header.querySelector('.day-chevron').classList.toggle('rotated');
    });
  });

  $$('.task-item input[type="checkbox"]', container).forEach(cb => {
    cb.addEventListener('change', (e) => {
      toggleTask(e.target.dataset.task, e.target.checked);
    });
  });

  $$('.task-expand-btn', container).forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openTaskModal(btn.dataset.taskId);
    });
  });

  $$('.task-item', container).forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.type === 'checkbox' || e.target.classList.contains('checkmark') || e.target.classList.contains('task-expand-btn')) return;
      openTaskModal(item.dataset.taskId);
    });
  });
}

registerPage('study-plan', renderStudyPlan);
export { renderStudyPlan };
