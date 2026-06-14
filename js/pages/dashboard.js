// ============================================================================
// IELTS TRAINER — Dashboard Page
// ============================================================================
import { WEEKS } from '../data.js';
import { state } from '../state.js';
import { $, $$, formatMinutes } from '../utils.js';
import { getOverallProgress, getWeekProgress, getSkillProgress, getPhaseProgress, getTotalStudyMinutes, getCurrentStreak } from '../progress.js';
import { toggleTask, openTaskModal } from '../modal.js';
import { registerPage, navigateTo } from '../router.js';

function renderDashboard() {
  const page = $('#page-dashboard');
  const { completed, total, pct } = getOverallProgress();
  const totalMinutes = getTotalStudyMinutes();
  const streak = getCurrentStreak();
  const vocabCount = state.vocabLearned.length;

  const currentWeekData = WEEKS.find(w => w.id === state.currentWeek) || WEEKS[0];
  const weekProg = getWeekProgress(state.currentWeek);

  page.innerHTML = `
    <div class="page-header">
      <div class="page-header-content">
        <h2 class="page-title">Dashboard</h2>
        <p class="page-subtitle">Welcome back! Here's your IELTS preparation overview.</p>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card stat-card-primary" id="stat-progress">
        <div class="stat-icon">📈</div>
        <div class="stat-content">
          <span class="stat-value" id="stat-pct">${pct}</span><span class="stat-unit">%</span>
          <span class="stat-label">Overall Progress</span>
        </div>
        <div class="stat-bar"><div class="stat-bar-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="stat-card stat-card-accent">
        <div class="stat-icon">⏱️</div>
        <div class="stat-content">
          <span class="stat-value" id="stat-hours">${Math.round(totalMinutes / 60)}</span><span class="stat-unit">hrs</span>
          <span class="stat-label">Study Time</span>
        </div>
      </div>
      <div class="stat-card stat-card-success">
        <div class="stat-icon">🔥</div>
        <div class="stat-content">
          <span class="stat-value" id="stat-streak">${streak}</span><span class="stat-unit">days</span>
          <span class="stat-label">Current Streak</span>
        </div>
      </div>
      <div class="stat-card stat-card-info">
        <div class="stat-icon">📖</div>
        <div class="stat-content">
          <span class="stat-value" id="stat-vocab">${vocabCount}</span><span class="stat-unit">words</span>
          <span class="stat-label">Vocab Learned</span>
        </div>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="card current-week-card">
        <div class="card-header">
          <h3>📅 Week ${currentWeekData.id}: ${currentWeekData.title}</h3>
          <span class="phase-badge phase-${currentWeekData.phase}">${currentWeekData.phaseLabel}</span>
        </div>
        <p class="card-description">${currentWeekData.summary}</p>
        <div class="week-progress-bar">
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width:${weekProg.pct}%"></div>
          </div>
          <span class="progress-text">${weekProg.completed}/${weekProg.total} tasks (${weekProg.pct}%)</span>
        </div>
        <div class="current-week-tasks">
          ${currentWeekData.days.map(d => `
            <div class="day-summary">
              <div class="day-summary-header">
                <span class="day-label">Day ${d.day} — ${d.label}</span>
                <span class="day-task-count">${d.tasks.filter(t => state.completedTasks.includes(t.id)).length}/${d.tasks.length}</span>
              </div>
              <div class="day-tasks-mini">
                ${d.tasks.map(t => `
                  <div class="task-mini ${state.completedTasks.includes(t.id) ? 'completed' : ''}" data-task-id="${t.id}">
                    <label class="custom-checkbox">
                      <input type="checkbox" ${state.completedTasks.includes(t.id) ? 'checked' : ''} data-task="${t.id}">
                      <span class="checkmark"></span>
                    </label>
                    <span class="task-mini-title">${t.title}</span>
                    <span class="skill-badge skill-${t.skill}">${t.skill}</span>
                    <span class="task-duration">${formatMinutes(t.minutes)}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
        <button class="btn btn-primary" id="btn-goto-plan">View Full Study Plan →</button>
      </div>

      <div class="dashboard-side">
        <div class="card skills-card">
          <div class="card-header"><h3>🎯 Skills Breakdown</h3></div>
          <div class="skills-list">
            ${['reading', 'writing', 'listening', 'speaking'].map(skill => {
              const sp = getSkillProgress(skill);
              return `
                <div class="skill-row">
                  <div class="skill-info">
                    <span class="skill-badge skill-${skill}">${skill.charAt(0).toUpperCase() + skill.slice(1)}</span>
                    <span class="skill-pct">${sp.pct}%</span>
                  </div>
                  <div class="progress-bar progress-bar-sm">
                    <div class="progress-bar-fill skill-fill-${skill}" style="width:${sp.pct}%"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="card phase-card">
          <div class="card-header"><h3>🏗️ Phase Progress</h3></div>
          <div class="phases-list">
            ${[
              { key: 'foundation', label: 'Foundation', weeks: '1-2', icon: '🧱' },
              { key: 'skill-building', label: 'Skill Building', weeks: '3-5', icon: '⚡' },
              { key: 'exam-mastery', label: 'Exam Mastery', weeks: '6-8', icon: '🏆' }
            ].map(p => {
              const pp = getPhaseProgress(p.key);
              return `
                <div class="phase-row">
                  <div class="phase-info">
                    <span class="phase-icon">${p.icon}</span>
                    <div>
                      <span class="phase-name">${p.label}</span>
                      <span class="phase-weeks">Weeks ${p.weeks}</span>
                    </div>
                  </div>
                  <div class="phase-progress-wrap">
                    <div class="progress-bar progress-bar-sm">
                      <div class="progress-bar-fill phase-fill-${p.key}" style="width:${pp.pct}%"></div>
                    </div>
                    <span class="phase-pct">${pp.pct}%</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="card quick-links-card">
          <div class="card-header"><h3>⚡ Quick Actions</h3></div>
          <div class="quick-links">
            <button class="quick-link-btn" data-action="vocab">📝 Practice Vocabulary</button>
            <button class="quick-link-btn" data-action="strategies">🧠 Review Strategies</button>
            <button class="quick-link-btn" data-action="resources">📚 Browse Resources</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Event listeners
  $$('.task-mini input[type="checkbox"]', page).forEach(cb => {
    cb.addEventListener('change', (e) => {
      toggleTask(e.target.dataset.task, e.target.checked);
    });
  });

  $$('.task-mini', page).forEach(t => {
    t.addEventListener('click', (e) => {
      if (e.target.type === 'checkbox' || e.target.classList.contains('checkmark')) return;
      openTaskModal(t.dataset.taskId);
    });
  });

  const gotoBtn = $('#btn-goto-plan', page);
  if (gotoBtn) gotoBtn.addEventListener('click', () => navigateTo('study-plan'));

  $$('.quick-link-btn', page).forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      navigateTo(action === 'vocab' ? 'vocab-practice' : action);
    });
  });
}

registerPage('dashboard', renderDashboard);
export { renderDashboard };
