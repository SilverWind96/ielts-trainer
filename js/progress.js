// ============================================================================
// IELTS TRAINER — Progress Calculations
// ============================================================================
import { WEEKS } from './data.js';
import { state } from './state.js';
import { $ } from './utils.js';

export function getTotalTasks() {
  let total = 0;
  WEEKS.forEach(w => w.days.forEach(d => total += d.tasks.length));
  return total;
}

export function getWeekProgress(weekId) {
  const week = WEEKS.find(w => w.id === weekId);
  if (!week) return { completed: 0, total: 0, pct: 0 };
  let total = 0, completed = 0;
  week.days.forEach(d => {
    d.tasks.forEach(t => {
      total++;
      if (state.completedTasks.includes(t.id)) completed++;
    });
  });
  return { completed, total, pct: total > 0 ? Math.round(completed / total * 100) : 0 };
}

export function getPhaseProgress(phase) {
  const weeks = WEEKS.filter(w => w.phase === phase);
  let total = 0, completed = 0;
  weeks.forEach(w => w.days.forEach(d => {
    d.tasks.forEach(t => {
      total++;
      if (state.completedTasks.includes(t.id)) completed++;
    });
  }));
  return { completed, total, pct: total > 0 ? Math.round(completed / total * 100) : 0 };
}

export function getSkillProgress(skill) {
  let total = 0, completed = 0;
  WEEKS.forEach(w => w.days.forEach(d => {
    d.tasks.forEach(t => {
      if (t.skill === skill) {
        total++;
        if (state.completedTasks.includes(t.id)) completed++;
      }
    });
  }));
  return { completed, total, pct: total > 0 ? Math.round(completed / total * 100) : 0 };
}

export function getOverallProgress() {
  const total = getTotalTasks();
  const completed = state.completedTasks.length;
  return { completed, total, pct: total > 0 ? Math.round(completed / total * 100) : 0 };
}

export function getTotalStudyMinutes() {
  let total = 0;
  WEEKS.forEach(w => w.days.forEach(d => {
    d.tasks.forEach(t => {
      if (state.completedTasks.includes(t.id)) total += t.minutes;
    });
  }));
  return total;
}

export function getCurrentStreak() {
  // Calculate consecutive days with at least one completed task
  const tasksByDay = {};
  WEEKS.forEach(w => w.days.forEach(d => {
    d.tasks.forEach(t => {
      const dayKey = `w${w.id}d${d.day}`;
      if (!tasksByDay[dayKey]) tasksByDay[dayKey] = { total: 0, done: 0 };
      tasksByDay[dayKey].total++;
      if (state.completedTasks.includes(t.id)) tasksByDay[dayKey].done++;
    });
  }));
  
  let streak = 0;
  const dayKeys = Object.keys(tasksByDay);
  // Count from current week backwards
  for (let i = dayKeys.length - 1; i >= 0; i--) {
    if (tasksByDay[dayKeys[i]].done > 0) streak++;
    else break;
  }
  return streak;
}

export function updateSidebarProgress() {
  const { completed, total, pct } = getOverallProgress();
  const ring = $('#sidebar-ring');
  const text = $('#sidebar-progress-text');
  const detail = $('#sidebar-progress-detail');
  
  if (ring) {
    const circumference = 2 * Math.PI * 26;
    ring.style.strokeDasharray = `${circumference}`;
    ring.style.strokeDashoffset = `${circumference - (pct / 100) * circumference}`;
  }
  if (text) text.textContent = `${pct}%`;
  if (detail) detail.textContent = `${completed} / ${total} tasks`;
}
