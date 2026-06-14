// ============================================================================
// IELTS TRAINER — Vocabulary Practice Page (Quizlet-like)
// ============================================================================
import { VOCABULARY } from '../data.js';
import { state, saveState } from '../state.js';
import { $, $$, showToast } from '../utils.js';
import { updateSidebarProgress } from '../progress.js';
import { registerPage } from '../router.js';

// Local practice session state
let practiceState = {
  mode: 'select', // 'select', 'flashcards', 'quiz', 'write', 'match'
  pool: [],       // Current filtered list of words
  filterSublist: 0,
  filterPoolType: 'all', // 'all', 'unlearned', 'learned'
  
  // Flashcards state
  flashcards: {
    currentIndex: 0,
    flipped: false,
    stillLearning: [],
    mastered: []
  },

  // Quiz state
  quiz: {
    currentIndex: 0,
    score: 0,
    questions: [], // Array of { word, choices: [], correctIndex, userAnswerIndex: null }
  },

  // Write state
  write: {
    currentIndex: 0,
    score: 0,
    showHint: false,
    correctList: [],
    incorrectList: []
  },

  // Match state
  match: {
    cards: [], // Array of { id, type: 'word'|'def', text, matchId, selected: false, matched: false }
    selectedId: null,
    startTime: null,
    timerInterval: null,
    currentTime: 0,
    bestTime: null
  }
};

function renderVocabPractice() {
  const page = $('#page-vocab-practice');
  if (practiceState.mode === 'select') {
    renderSelectScreen(page);
  } else if (practiceState.mode === 'flashcards') {
    renderFlashcardScreen(page);
  } else if (practiceState.mode === 'quiz') {
    renderQuizScreen(page);
  } else if (practiceState.mode === 'write') {
    renderWriteScreen(page);
  } else if (practiceState.mode === 'match') {
    renderMatchScreen(page);
  }
}

// ============================================================================
// 1. Selection Screen
// ============================================================================
function renderSelectScreen(page) {
  // Get list of available sublists
  const sublists = [...new Set(VOCABULARY.map(v => v.sublist))].sort((a, b) => a - b);

  // Apply filters to calculate potential card pool size
  let filtered = filterVocabulary();

  page.innerHTML = `
    <div class="page-header">
      <div class="page-header-content">
        <h2 class="page-title">Vocab Practice Arena</h2>
        <p class="page-subtitle">Interactive study modes to master academic vocabulary faster</p>
      </div>
    </div>

    <div class="practice-setup-grid">
      <!-- Configuration Panel -->
      <div class="card setup-card">
        <div class="card-header"><h3>⚙️ Setup Study Pool</h3></div>
        <div class="setup-form">
          <div class="setup-group">
            <label class="setup-label">Select Sublist:</label>
            <select class="setup-select" id="practice-sublist-select">
              <option value="0" ${practiceState.filterSublist === 0 ? 'selected' : ''}>All AWL Sublists</option>
              ${sublists.map(s => `<option value="${s}" ${practiceState.filterSublist === s ? 'selected' : ''}>Sublist ${s}</option>`).join('')}
            </select>
          </div>
          <div class="setup-group">
            <label class="setup-label">Target Words:</label>
            <select class="setup-select" id="practice-pool-select">
              <option value="all" ${practiceState.filterPoolType === 'all' ? 'selected' : ''}>All Words (${VOCABULARY.length})</option>
              <option value="unlearned" ${practiceState.filterPoolType === 'unlearned' ? 'selected' : ''}>Unlearned Only (${VOCABULARY.length - state.vocabLearned.length})</option>
              <option value="learned" ${practiceState.filterPoolType === 'learned' ? 'selected' : ''}>Learned Only (${state.vocabLearned.length})</option>
            </select>
          </div>
          <div class="pool-indicator">
            🎯 Target Pool size: <strong id="pool-size-label">${filtered.length} words</strong>
          </div>
        </div>
      </div>

      <!-- Mode Options -->
      <div class="modes-grid">
        <!-- Mode 1: Flashcards -->
        <button class="mode-card" data-mode="flashcards" ${filtered.length === 0 ? 'disabled' : ''}>
          <div class="mode-icon">🃏</div>
          <div class="mode-details">
            <h4>Flashcards</h4>
            <p>Familiarize yourself with terms, flip cards, and sort them into master piles.</p>
          </div>
          <span class="mode-action-pill">Start</span>
        </button>

        <!-- Mode 2: Multiple Choice -->
        <button class="mode-card" data-mode="quiz" ${filtered.length < 4 ? 'disabled' : ''}>
          <div class="mode-icon">🎯</div>
          <div class="mode-details">
            <h4>Quiz (Choice)</h4>
            <p>Select the correct definition out of 4 options. Build highscores.</p>
            ${state.vocabQuizHighScore > 0 ? `<div class="mode-highscore">🏆 High Score: ${state.vocabQuizHighScore}%</div>` : ''}
          </div>
          <span class="mode-action-pill">Start</span>
        </button>

        <!-- Mode 3: Write Mode -->
        <button class="mode-card" data-mode="write" ${filtered.length === 0 ? 'disabled' : ''}>
          <div class="mode-icon">✍️</div>
          <div class="mode-details">
            <h4>Write (Spelling)</h4>
            <p>Practice writing and spelling the words correctly based on definition hints.</p>
          </div>
          <span class="mode-action-pill">Start</span>
        </button>

        <!-- Mode 4: Match Game -->
        <button class="mode-card" data-mode="match" ${filtered.length < 4 ? 'disabled' : ''}>
          <div class="mode-icon">⚡</div>
          <div class="mode-details">
            <h4>Match Game</h4>
            <p>Time-based speed challenge. Pair words and definitions as quickly as possible!</p>
            ${state.vocabBestMatchTime ? `<div class="mode-highscore">⚡ Best Time: ${state.vocabBestMatchTime}s</div>` : ''}
          </div>
          <span class="mode-action-pill">Start</span>
        </button>
      </div>
    </div>
  `;

  // Add Event Listeners
  const sublistSelect = $('#practice-sublist-select', page);
  const poolSelect = $('#practice-pool-select', page);

  const updatePoolCount = () => {
    practiceState.filterSublist = parseInt(sublistSelect.value);
    practiceState.filterPoolType = poolSelect.value;
    const count = filterVocabulary().length;
    $('#pool-size-label').textContent = `${count} words`;
    
    // Enable/Disable mode cards based on pool size
    $$('.mode-card', page).forEach(card => {
      const mode = card.dataset.mode;
      if (mode === 'quiz' || mode === 'match') {
        card.disabled = count < 4;
      } else {
        card.disabled = count === 0;
      }
    });
  };

  sublistSelect.addEventListener('change', updatePoolCount);
  poolSelect.addEventListener('change', updatePoolCount);

  $$('.mode-card', page).forEach(card => {
    card.addEventListener('click', () => {
      const mode = card.dataset.mode;
      startPracticeMode(mode);
    });
  });
}

function filterVocabulary() {
  let pool = [...VOCABULARY];
  if (practiceState.filterSublist > 0) {
    pool = pool.filter(v => v.sublist === practiceState.filterSublist);
  }
  if (practiceState.filterPoolType === 'unlearned') {
    pool = pool.filter(v => !state.vocabLearned.includes(v.word));
  } else if (practiceState.filterPoolType === 'learned') {
    pool = pool.filter(v => state.vocabLearned.includes(v.word));
  }
  return pool;
}

function startPracticeMode(mode) {
  const pool = filterVocabulary();
  if (pool.length === 0) return;

  practiceState.mode = mode;
  practiceState.pool = pool;

  if (mode === 'flashcards') {
    practiceState.flashcards = {
      currentIndex: 0,
      flipped: false,
      stillLearning: [],
      mastered: []
    };
  } else if (mode === 'quiz') {
    // Generate questions (randomized from pool)
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const length = Math.min(10, shuffled.length); // Max 10 questions
    const selected = shuffled.slice(0, length);

    const questions = selected.map(v => {
      // Find 3 incorrect choices
      const incorrectChoices = VOCABULARY
        .filter(x => x.word !== v.word)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(x => x.definition);

      const choices = [v.definition, ...incorrectChoices].sort(() => 0.5 - Math.random());
      const correctIndex = choices.indexOf(v.definition);

      return {
        word: v.word,
        correctDefinition: v.definition,
        choices,
        correctIndex,
        userAnswerIndex: null
      };
    });

    practiceState.quiz = {
      currentIndex: 0,
      score: 0,
      questions
    };
  } else if (mode === 'write') {
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const length = Math.min(10, shuffled.length);
    practiceState.pool = shuffled.slice(0, length);
    practiceState.write = {
      currentIndex: 0,
      score: 0,
      showHint: false,
      correctList: [],
      incorrectList: []
    };
  } else if (mode === 'match') {
    // Select 4 random words
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const matchCount = Math.min(4, shuffled.length);
    const selected = shuffled.slice(0, matchCount);

    const cards = [];
    selected.forEach((v, index) => {
      cards.push({
        id: `word-${index}`,
        type: 'word',
        text: v.word,
        matchId: index,
        selected: false,
        matched: false
      });
      cards.push({
        id: `def-${index}`,
        type: 'def',
        text: v.definition,
        matchId: index,
        selected: false,
        matched: false
      });
    });

    // Shuffle cards
    practiceState.match = {
      cards: cards.sort(() => 0.5 - Math.random()),
      selectedId: null,
      startTime: Date.now(),
      currentTime: 0,
      bestTime: state.vocabBestMatchTime
    };

    // Start timer interval
    if (practiceState.match.timerInterval) clearInterval(practiceState.match.timerInterval);
    practiceState.match.timerInterval = setInterval(() => {
      practiceState.match.currentTime = parseFloat(((Date.now() - practiceState.match.startTime) / 1000).toFixed(1));
      const timerVal = $('#match-timer');
      if (timerVal) timerVal.textContent = `${practiceState.match.currentTime}s`;
    }, 100);
  }

  renderVocabPractice();
}

// ============================================================================
// 2. Flashcards Screen
// ============================================================================
function renderFlashcardScreen(page) {
  const f = practiceState.flashcards;
  const wordObj = practiceState.pool[f.currentIndex];
  const total = practiceState.pool.length;
  const progressPct = ((f.currentIndex) / total) * 100;

  if (f.currentIndex >= total) {
    // Show summary screen
    renderFlashcardSummary(page);
    return;
  }

  page.innerHTML = `
    <div class="page-header">
      <button class="btn btn-sm btn-outline btn-back" id="btn-practice-exit">↩ Back to Arena</button>
      <div class="vocab-stats">
        <span class="vocab-stat">Still Learning: <strong class="text-rose">${f.stillLearning.length}</strong></span>
        <span class="vocab-stat">Mastered: <strong class="text-emerald">${f.mastered.length}</strong></span>
      </div>
    </div>

    <div class="practice-stage">
      <div class="practice-progress-container">
        <div class="progress-bar"><div class="progress-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="progress-text">Card ${f.currentIndex + 1} of ${total}</span>
      </div>

      <div class="flashcard-deck">
        <div class="flashcard-interactive ${f.flipped ? 'flipped' : ''}" id="flashcard-box">
          <div class="flashcard-front">
            <span class="card-hint-top">Academic Vocabulary</span>
            <h3>${wordObj.word}</h3>
            <span class="card-instruction">Click card to reveal definition</span>
          </div>
          <div class="flashcard-back">
            <span class="card-hint-top">Definition & Context</span>
            <p class="card-definition">${wordObj.definition}</p>
            <div class="card-context">
              <strong>Example:</strong>
              <p>"${wordObj.example}"</p>
            </div>
            <span class="card-instruction">Click card to view word</span>
          </div>
        </div>
      </div>

      <div class="flashcard-controls">
        <button class="btn btn-outline-rose" id="btn-flash-still">Still learning ❌</button>
        <button class="btn btn-outline-success" id="btn-flash-master">Got it! ✅</button>
      </div>
    </div>
  `;

  // Attach events
  $('#btn-practice-exit').addEventListener('click', exitPractice);
  
  const box = $('#flashcard-box');
  box.addEventListener('click', () => {
    f.flipped = !f.flipped;
    box.classList.toggle('flipped');
  });

  $('#btn-flash-still').addEventListener('click', () => {
    f.stillLearning.push(wordObj.word);
    f.currentIndex++;
    f.flipped = false;
    renderVocabPractice();
  });

  $('#btn-flash-master').addEventListener('click', () => {
    // If not already in learned list, mark it
    if (!state.vocabLearned.includes(wordObj.word)) {
      state.vocabLearned.push(wordObj.word);
      saveState();
      updateSidebarProgress();
    }
    f.mastered.push(wordObj.word);
    f.currentIndex++;
    f.flipped = false;
    renderVocabPractice();
  });
}

function renderFlashcardSummary(page) {
  const f = practiceState.flashcards;
  page.innerHTML = `
    <div class="practice-result-card card">
      <div class="result-header">
        <div class="result-badge">🎉</div>
        <h3>Flashcards Finished!</h3>
        <p>You completed a study session with ${practiceState.pool.length} cards.</p>
      </div>
      
      <div class="result-stats">
        <div class="result-stat-box success">
          <span class="result-stat-value">${f.mastered.length}</span>
          <span class="result-stat-label">Mastered / Learned</span>
        </div>
        <div class="result-stat-box warning">
          <span class="result-stat-value">${f.stillLearning.length}</span>
          <span class="result-stat-label">Still Learning</span>
        </div>
      </div>

      <div class="result-actions">
        <button class="btn btn-primary" id="btn-result-retry">Restart Session</button>
        <button class="btn btn-outline" id="btn-result-exit">Back to Arena</button>
      </div>
    </div>
  `;

  $('#btn-result-retry').addEventListener('click', () => {
    startPracticeMode('flashcards');
  });
  $('#btn-result-exit').addEventListener('click', exitPractice);
}

// ============================================================================
// 3. Quiz (Multiple Choice) Screen
// ============================================================================
function renderQuizScreen(page) {
  const q = practiceState.quiz;
  const total = q.questions.length;

  if (q.currentIndex >= total) {
    renderQuizSummary(page);
    return;
  }

  const currentQ = q.questions[q.currentIndex];
  const progressPct = (q.currentIndex / total) * 100;

  page.innerHTML = `
    <div class="page-header">
      <button class="btn btn-sm btn-outline btn-back" id="btn-practice-exit">↩ Back to Arena</button>
      <div class="vocab-stats">
        <span class="vocab-stat">Score: <strong>${q.score}/${q.currentIndex}</strong></span>
      </div>
    </div>

    <div class="practice-stage">
      <div class="practice-progress-container">
        <div class="progress-bar"><div class="progress-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="progress-text">Question ${q.currentIndex + 1} of ${total}</span>
      </div>

      <div class="quiz-question-card card">
        <span class="question-header">What is the correct definition for:</span>
        <h3 class="question-word">${currentQ.word}</h3>
      </div>

      <div class="quiz-choices-grid" id="choices-grid">
        ${currentQ.choices.map((choice, index) => `
          <button class="quiz-choice-btn" data-index="${index}">
            <span class="choice-marker">${String.fromCharCode(65 + index)}</span>
            <span class="choice-text">${choice}</span>
          </button>
        `).join('')}
      </div>

      <div class="quiz-footer">
        <button class="btn btn-primary" id="btn-quiz-next" disabled>Next Question →</button>
      </div>
    </div>
  `;

  // Exit button
  $('#btn-practice-exit').addEventListener('click', exitPractice);

  const choicesContainer = $('#choices-grid');
  const nextBtn = $('#btn-quiz-next');

  $$('.quiz-choice-btn', choicesContainer).forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentQ.userAnswerIndex !== null) return; // Answered already

      const selectedIdx = parseInt(btn.dataset.index);
      currentQ.userAnswerIndex = selectedIdx;

      // Check answer
      const isCorrect = selectedIdx === currentQ.correctIndex;
      if (isCorrect) {
        btn.classList.add('correct');
        q.score++;
        showToast('Correct! Great job! 🎯', 'success');
      } else {
        btn.classList.add('incorrect');
        // Highlight correct
        const correctBtn = choicesContainer.querySelector(`[data-index="${currentQ.correctIndex}"]`);
        if (correctBtn) correctBtn.classList.add('correct');
        showToast('Not quite correct. 💡', 'info');
      }

      nextBtn.removeAttribute('disabled');
    });
  });

  nextBtn.addEventListener('click', () => {
    q.currentIndex++;
    renderVocabPractice();
  });
}

function renderQuizSummary(page) {
  const q = practiceState.quiz;
  const pct = Math.round((q.score / q.questions.length) * 100);

  // Save Highscore
  if (pct > state.vocabQuizHighScore) {
    state.vocabQuizHighScore = pct;
    saveState();
  }

  page.innerHTML = `
    <div class="practice-result-card card">
      <div class="result-header">
        <div class="result-badge">${pct >= 70 ? '🏆' : '📚'}</div>
        <h3>Quiz Finished!</h3>
        <p>You scored <strong>${q.score}/${q.questions.length}</strong> (${pct}%)</p>
      </div>
      
      <div class="result-stats">
        <div class="result-stat-box success">
          <span class="result-stat-value">${q.score}</span>
          <span class="result-stat-label">Correct</span>
        </div>
        <div class="result-stat-box info">
          <span class="result-stat-value">${state.vocabQuizHighScore}%</span>
          <span class="result-stat-label">All-time High Score</span>
        </div>
      </div>

      <div class="result-actions">
        <button class="btn btn-primary" id="btn-result-retry">Try Again</button>
        <button class="btn btn-outline" id="btn-result-exit">Back to Arena</button>
      </div>
    </div>
  `;

  $('#btn-result-retry').addEventListener('click', () => {
    startPracticeMode('quiz');
  });
  $('#btn-result-exit').addEventListener('click', exitPractice);
}

// ============================================================================
// 4. Write Mode (Spelling) Screen
// ============================================================================
function renderWriteScreen(page) {
  const w = practiceState.write;
  const total = practiceState.pool.length;

  if (w.currentIndex >= total) {
    renderWriteSummary(page);
    return;
  }

  const currentWord = practiceState.pool[w.currentIndex];
  const progressPct = (w.currentIndex / total) * 100;

  page.innerHTML = `
    <div class="page-header">
      <button class="btn btn-sm btn-outline btn-back" id="btn-practice-exit">↩ Back to Arena</button>
      <div class="vocab-stats">
        <span class="vocab-stat">Score: <strong>${w.score}/${w.currentIndex}</strong></span>
      </div>
    </div>

    <div class="practice-stage">
      <div class="practice-progress-container">
        <div class="progress-bar"><div class="progress-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="progress-text">Word ${w.currentIndex + 1} of ${total}</span>
      </div>

      <div class="quiz-question-card card">
        <span class="question-header">Type the vocabulary word matching this definition:</span>
        <p class="write-definition">${currentWord.definition}</p>
        
        <div class="vocab-topics" style="margin-top: 12px; justify-content: center;">
          ${currentWord.topics.map(t => `<span class="vocab-topic-tag">${t}</span>`).join('')}
        </div>

        ${w.showHint ? `
          <div class="write-hint-box">
            <span>Example:</span>
            <p>${currentWord.example.replace(new RegExp(currentWord.word, 'gi'), '_____')}</p>
          </div>
        ` : ''}
      </div>

      <div class="write-input-container">
        <input type="text" class="write-input" id="vocab-write-input" placeholder="Type answer here..." autofocus autocomplete="off">
        <div class="write-buttons">
          <button class="btn btn-outline" id="btn-write-hint" ${w.showHint ? 'disabled' : ''}>💡 Need a Hint?</button>
          <button class="btn btn-primary" id="btn-write-submit">Submit Answer</button>
        </div>
      </div>

      <div class="write-feedback-card card hide" id="write-feedback-box">
        <div class="feedback-indicator" id="feedback-indicator"></div>
        <div class="feedback-comparison">
          <div>
            <span class="comparison-label">Correct Word:</span>
            <strong class="correct-text" id="feedback-correct-word"></strong>
          </div>
          <div>
            <span class="comparison-label">Your Answer:</span>
            <strong class="incorrect-text" id="feedback-user-word"></strong>
          </div>
        </div>
        <button class="btn btn-primary" style="margin-top: 16px; margin-left: auto;" id="btn-write-next">Next Word →</button>
      </div>
    </div>
  `;

  // Back button
  $('#btn-practice-exit').addEventListener('click', exitPractice);

  const inputEl = $('#vocab-write-input');
  const submitBtn = $('#btn-write-submit');
  const hintBtn = $('#btn-write-hint');
  const feedbackBox = $('#write-feedback-box');
  const nextBtn = $('#btn-write-next');

  hintBtn.addEventListener('click', () => {
    w.showHint = true;
    renderVocabPractice();
  });

  const checkAnswer = () => {
    const userAns = inputEl.value.trim().toLowerCase();
    const correctAns = currentWord.word.trim().toLowerCase();

    if (!userAns) return;

    inputEl.disabled = true;
    submitBtn.disabled = true;
    hintBtn.disabled = true;

    const isCorrect = userAns === correctAns;
    
    // Setup feedback box
    feedbackBox.classList.remove('hide');
    const indicator = $('#feedback-indicator');
    const feedbackCorrect = $('#feedback-correct-word');
    const feedbackUser = $('#feedback-user-word');

    feedbackCorrect.textContent = currentWord.word;
    feedbackUser.textContent = inputEl.value;

    if (isCorrect) {
      w.score++;
      indicator.innerHTML = '<span class="text-emerald" style="font-size: 1.25rem; font-weight:700;">✅ Correct!</span>';
      showToast('Spelling correct! 🌟', 'success');
      w.correctList.push(currentWord.word);
    } else {
      indicator.innerHTML = '<span class="text-rose" style="font-size: 1.25rem; font-weight:700;">❌ Incorrect</span>';
      showToast('Incorrect spelling. 💡', 'info');
      w.incorrectList.push(currentWord.word);
    }

    nextBtn.addEventListener('click', () => {
      w.currentIndex++;
      w.showHint = false;
      renderVocabPractice();
    });
  };

  submitBtn.addEventListener('click', checkAnswer);
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkAnswer();
  });
}

function renderWriteSummary(page) {
  const w = practiceState.write;
  const pct = Math.round((w.score / practiceState.pool.length) * 100);

  page.innerHTML = `
    <div class="practice-result-card card">
      <div class="result-header">
        <div class="result-badge">${pct >= 70 ? '🎖️' : '✍️'}</div>
        <h3>Spelling Practice Done!</h3>
        <p>You correctly spelled <strong>${w.score}/${practiceState.pool.length}</strong> words.</p>
      </div>

      <div class="result-stats">
        <div class="result-stat-box success">
          <span class="result-stat-value">${w.correctList.length}</span>
          <span class="result-stat-label">Correct</span>
        </div>
        <div class="result-stat-box warning">
          <span class="result-stat-value">${w.incorrectList.length}</span>
          <span class="result-stat-label">Incorrect</span>
        </div>
      </div>

      <div class="result-actions">
        <button class="btn btn-primary" id="btn-result-retry">Try Again</button>
        <button class="btn btn-outline" id="btn-result-exit">Back to Arena</button>
      </div>
    </div>
  `;

  $('#btn-result-retry').addEventListener('click', () => {
    startPracticeMode('write');
  });
  $('#btn-result-exit').addEventListener('click', exitPractice);
}

// ============================================================================
// 5. Match Game Screen
// ============================================================================
function renderMatchScreen(page) {
  const m = practiceState.match;
  const isFinished = m.cards.every(c => c.matched);

  if (isFinished) {
    // Stop timer
    if (m.timerInterval) {
      clearInterval(m.timerInterval);
      m.timerInterval = null;
    }
    renderMatchSummary(page);
    return;
  }

  page.innerHTML = `
    <div class="page-header">
      <button class="btn btn-sm btn-outline btn-back" id="btn-practice-exit">↩ Exit Game</button>
      <div class="match-time-tracker">
        <span>⏱️ Time:</span>
        <strong id="match-timer" style="font-family: var(--font-mono); font-size: 1.15rem; color: var(--accent-cyan);">${m.currentTime}s</strong>
      </div>
    </div>

    <div class="practice-stage">
      <div class="match-game-instruction">
        <p>Match each <strong>word</strong> card with its matching <strong>definition</strong> card as quickly as you can!</p>
      </div>

      <div class="match-grid">
        ${m.cards.map((card) => {
          let cardClasses = 'match-card';
          if (card.selected) cardClasses += ' selected';
          if (card.matched) cardClasses += ' matched';
          if (card.type === 'def') cardClasses += ' def-card';

          return `
            <button class="${cardClasses}" data-id="${card.id}" ${card.matched ? 'disabled' : ''}>
              <span>${card.text}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Attach exit
  $('#btn-practice-exit').addEventListener('click', () => {
    if (m.timerInterval) {
      clearInterval(m.timerInterval);
      m.timerInterval = null;
    }
    exitPractice();
  });

  // Attach grid clicks
  $$('.match-card', page).forEach(cardBtn => {
    cardBtn.addEventListener('click', () => {
      const cardId = cardBtn.dataset.id;
      handleMatchCardClick(cardId);
    });
  });
}

function handleMatchCardClick(cardId) {
  const m = practiceState.match;
  const clickedCard = m.cards.find(c => c.id === cardId);

  if (!clickedCard || clickedCard.matched) return;

  // Case 1: First card selected
  if (m.selectedId === null) {
    m.selectedId = cardId;
    clickedCard.selected = true;
    renderVocabPractice();
    return;
  }

  // Case 2: Selected the exact same card (deselect it)
  if (m.selectedId === cardId) {
    clickedCard.selected = false;
    m.selectedId = null;
    renderVocabPractice();
    return;
  }

  // Case 3: Second card selected
  const firstCard = m.cards.find(c => c.id === m.selectedId);
  clickedCard.selected = true;

  renderVocabPractice(); // Render selected state briefly

  setTimeout(() => {
    // Check match
    if (firstCard.matchId === clickedCard.matchId && firstCard.type !== clickedCard.type) {
      // It's a MATCH!
      firstCard.matched = true;
      clickedCard.matched = true;
      firstCard.selected = false;
      clickedCard.selected = false;
      showToast('Match! ⚡', 'success');
    } else {
      // Mis-match! Flash incorrect state
      const firstBtn = $(`[data-id="${firstCard.id}"]`);
      const secondBtn = $(`[data-id="${clickedCard.id}"]`);
      if (firstBtn) firstBtn.classList.add('mismatch');
      if (secondBtn) secondBtn.classList.add('mismatch');
      
      showToast('No match. Try again!', 'info');

      // Reset selection after delay
      firstCard.selected = false;
      clickedCard.selected = false;
    }

    m.selectedId = null;
    renderVocabPractice();
  }, 350);
}

function renderMatchSummary(page) {
  const m = practiceState.match;
  const userTime = m.currentTime;
  let isNewBest = false;

  if (m.bestTime === null || userTime < m.bestTime) {
    m.bestTime = userTime;
    state.vocabBestMatchTime = userTime;
    saveState();
    isNewBest = true;
  }

  page.innerHTML = `
    <div class="practice-result-card card">
      <div class="result-header">
        <div class="result-badge">⚡</div>
        <h3>Matching Completed!</h3>
        <p>All items paired successfully in record time!</p>
      </div>

      <div class="result-stats">
        <div class="result-stat-box info">
          <span class="result-stat-value">${userTime}s</span>
          <span class="result-stat-label">Your Time</span>
        </div>
        <div class="result-stat-box success">
          <span class="result-stat-value">${m.bestTime}s</span>
          <span class="result-stat-label">Best Record</span>
        </div>
      </div>

      ${isNewBest ? `
        <div class="new-record-banner">
          🎉 New Personal Record! 🎉
        </div>
      ` : ''}

      <div class="result-actions">
        <button class="btn btn-primary" id="btn-result-retry">Play Again</button>
        <button class="btn btn-outline" id="btn-result-exit">Back to Arena</button>
      </div>
    </div>
  `;

  $('#btn-result-retry').addEventListener('click', () => {
    startPracticeMode('match');
  });
  $('#btn-result-exit').addEventListener('click', exitPractice);
}

// ============================================================================
// Helper Utilities
// ============================================================================
function exitPractice() {
  practiceState.mode = 'select';
  if (practiceState.match.timerInterval) {
    clearInterval(practiceState.match.timerInterval);
    practiceState.match.timerInterval = null;
  }
  renderVocabPractice();
}

registerPage('vocab-practice', renderVocabPractice);
export { renderVocabPractice };
