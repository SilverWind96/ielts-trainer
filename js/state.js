// ============================================================================
// IELTS TRAINER — State Management
// ============================================================================
const STATE_KEY = 'ielts_trainer_state';

function getDefaultState() {
  return {
    completedTasks: [],
    currentWeek: 1,
    vocabLearned: [],
    vocabSublistFilter: 0,
    vocabTopicFilter: 'all',
    vocabShowLearned: false,
    activeStrategyTab: 'reading',
    resourceTypeFilter: 'all',
    resourceSkillFilter: 'all',
    vocabBestMatchTime: null,
    vocabQuizHighScore: 0,
    vocabAccent: 'US',
    vocabAutoplay: false,
    user: null
  };
}

function loadState() {
  try {
    const activeUserStr = localStorage.getItem('ielts_trainer_active_user');
    const activeUser = activeUserStr ? JSON.parse(activeUserStr) : null;

    if (activeUser && activeUser.id) {
      const userSaved = localStorage.getItem(`${STATE_KEY}_${activeUser.id}`);
      if (userSaved) {
        const parsed = JSON.parse(userSaved);
        return { ...getDefaultState(), ...parsed, user: activeUser };
      }
      return { ...getDefaultState(), user: activeUser };
    }

    const saved = localStorage.getItem(STATE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...getDefaultState(), ...parsed, user: null };
    }
    return { ...getDefaultState(), user: null };
  } catch {
    return { ...getDefaultState(), user: null };
  }
}

export let state = loadState();

export function saveState() {
  if (state && state.user && state.user.id) {
    localStorage.setItem(`${STATE_KEY}_${state.user.id}`, JSON.stringify(state));
    localStorage.setItem('ielts_trainer_active_user', JSON.stringify(state.user));
  } else {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
    localStorage.removeItem('ielts_trainer_active_user');
  }
}
