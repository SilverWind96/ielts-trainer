// ============================================================================
// IELTS TRAINER — Vocabulary Page
// ============================================================================
import { VOCABULARY } from '../data.js';
import { state, saveState } from '../state.js';
import { $, $$, showToast } from '../utils.js';
import { updateSidebarProgress } from '../progress.js';
import { registerPage, navigateTo } from '../router.js';

function renderVocabulary() {
  const page = $('#page-vocabulary');

  // Get unique sublists and topics
  const sublists = [...new Set(VOCABULARY.map(v => v.sublist))].sort((a, b) => a - b);
  const topics = [...new Set(VOCABULARY.flatMap(v => v.topics))].sort();

  // Filter vocabulary
  let filtered = [...VOCABULARY];
  if (state.vocabSublistFilter > 0) {
    filtered = filtered.filter(v => v.sublist === state.vocabSublistFilter);
  }
  if (state.vocabTopicFilter !== 'all') {
    filtered = filtered.filter(v => v.topics.includes(state.vocabTopicFilter));
  }

  const learnedCount = filtered.filter(v => state.vocabLearned.includes(v.word)).length;

  page.innerHTML = `
    <div class="page-header">
      <div class="page-header-content">
        <h2 class="page-title">Academic Vocabulary</h2>
        <p class="page-subtitle">Master the Academic Word List — essential for Band 7+</p>
      </div>
      <div class="vocab-stats">
        <button class="btn btn-primary btn-sm" id="btn-vocab-practice-go" style="margin-right: 12px;">🎴 Practice Vocab</button>
        <span class="vocab-stat">📖 ${filtered.length} words</span>
        <span class="vocab-stat learned">✅ ${learnedCount} learned</span>
      </div>
    </div>

    <div class="filter-bar">
      <div class="filter-group">
        <label class="filter-label">Sublist:</label>
        <select class="filter-select" id="vocab-sublist-filter">
          <option value="0" ${state.vocabSublistFilter === 0 ? 'selected' : ''}>All Sublists</option>
          ${sublists.map(s => `<option value="${s}" ${state.vocabSublistFilter === s ? 'selected' : ''}>Sublist ${s}</option>`).join('')}
        </select>
      </div>
      <div class="filter-group">
        <label class="filter-label">Topic:</label>
        <select class="filter-select" id="vocab-topic-filter">
          <option value="all" ${state.vocabTopicFilter === 'all' ? 'selected' : ''}>All Topics</option>
          ${topics.map(t => `<option value="${t}" ${state.vocabTopicFilter === t ? 'selected' : ''}>${t.charAt(0).toUpperCase() + t.slice(1)}</option>`).join('')}
        </select>
      </div>
      <div class="filter-group">
        <button class="btn btn-sm btn-outline" id="vocab-show-learned">
          ${state.vocabShowLearned ? '👁️ Show All' : '👁️‍🗨️ Hide Learned'}
        </button>
      </div>
    </div>

    <div class="vocab-grid" id="vocab-grid">
      ${filtered.map((v, i) => {
        const isLearned = state.vocabLearned.includes(v.word);
        return `
          <div class="vocab-card ${isLearned ? 'learned' : ''}" data-word="${v.word}" style="animation-delay: ${Math.min(i * 30, 500)}ms">
            <div class="vocab-card-inner">
              <div class="vocab-card-front">
                <div class="vocab-card-top">
                  <span class="vocab-sublist">AWL ${v.sublist}</span>
                  <button class="vocab-learn-btn ${isLearned ? 'active' : ''}" data-word="${v.word}" title="${isLearned ? 'Unmark' : 'Mark as learned'}">
                    ${isLearned ? '✅' : '○'}
                  </button>
                </div>
                <h4 class="vocab-word">${v.word}</h4>
                <p class="vocab-definition">${v.definition}</p>
                <div class="vocab-topics">
                  ${v.topics.map(t => `<span class="vocab-topic-tag">${t}</span>`).join('')}
                </div>
                <span class="vocab-flip-hint">Click to see example →</span>
              </div>
              <div class="vocab-card-back">
                <div class="vocab-card-top">
                  <span class="vocab-sublist">AWL ${v.sublist}</span>
                  <button class="vocab-learn-btn ${isLearned ? 'active' : ''}" data-word="${v.word}" title="${isLearned ? 'Unmark' : 'Mark as learned'}">
                    ${isLearned ? '✅' : '○'}
                  </button>
                </div>
                <h4 class="vocab-word">${v.word}</h4>
                <div class="vocab-example">
                  <span class="vocab-example-label">Example:</span>
                  <p>"${v.example}"</p>
                </div>
                <div class="vocab-collocations">
                  <span class="vocab-collocations-label">Collocations:</span>
                  <div class="collocation-tags">
                    ${v.collocations.map(c => `<span class="collocation-tag">${c}</span>`).join('')}
                  </div>
                </div>
                <span class="vocab-flip-hint">← Click to go back</span>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Event listeners
  $('#btn-vocab-practice-go', page).addEventListener('click', () => {
    navigateTo('vocab-practice');
  });

  $('#vocab-sublist-filter', page).addEventListener('change', (e) => {
    state.vocabSublistFilter = parseInt(e.target.value);
    saveState();
    renderVocabulary();
  });

  $('#vocab-topic-filter', page).addEventListener('change', (e) => {
    state.vocabTopicFilter = e.target.value;
    saveState();
    renderVocabulary();
  });

  // Vocab card flip
  $$('.vocab-card', page).forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('vocab-learn-btn') || e.target.closest('.vocab-learn-btn')) return;
      card.classList.toggle('flipped');
    });
  });

  // Learn buttons
  $$('.vocab-learn-btn', page).forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const word = btn.dataset.word;
      if (state.vocabLearned.includes(word)) {
        state.vocabLearned = state.vocabLearned.filter(w => w !== word);
      } else {
        state.vocabLearned.push(word);
        showToast(`"${word}" marked as learned! 📖`, 'success');
      }
      saveState();
      updateSidebarProgress();
      renderVocabulary();
    });
  });
}

registerPage('vocabulary', renderVocabulary);
export { renderVocabulary };
