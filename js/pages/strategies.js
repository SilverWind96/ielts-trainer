// ============================================================================
// IELTS TRAINER — Strategies Page
// ============================================================================
import { STRATEGIES } from '../data.js';
import { state, saveState } from '../state.js';
import { $, $$ } from '../utils.js';
import { registerPage } from '../router.js';

function renderStrategies() {
  const page = $('#page-strategies');
  const skillKeys = Object.keys(STRATEGIES);

  page.innerHTML = `
    <div class="page-header">
      <div class="page-header-content">
        <h2 class="page-title">Exam Strategies</h2>
        <p class="page-subtitle">Expert techniques for every skill — study, practice, succeed</p>
      </div>
    </div>

    <div class="strategy-tabs" id="strategy-tabs">
      ${skillKeys.map(key => {
        const s = STRATEGIES[key];
        return `
          <button class="strategy-tab ${key === state.activeStrategyTab ? 'active' : ''}" data-skill="${key}">
            <span class="strategy-tab-icon">${s.icon}</span>
            <span class="strategy-tab-label">${s.title}</span>
          </button>
        `;
      }).join('')}
    </div>

    <div class="strategy-content" id="strategy-content"></div>
  `;

  // Tab events
  $$('.strategy-tab', page).forEach(tab => {
    tab.addEventListener('click', () => {
      state.activeStrategyTab = tab.dataset.skill;
      saveState();
      $$('.strategy-tab', page).forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderStrategyContent();
    });
  });

  renderStrategyContent();
}

function renderStrategyContent() {
  const container = $('#strategy-content');
  const skill = STRATEGIES[state.activeStrategyTab];
  if (!skill) return;

  container.innerHTML = `
    <div class="strategy-detail">
      <div class="accordion-list">
        ${skill.techniques.map((tech, i) => `
          <div class="accordion-item" data-index="${i}">
            <div class="accordion-header" data-accordion="${i}">
              <div class="accordion-title">
                <span class="accordion-number">${String(i + 1).padStart(2, '0')}</span>
                <span>${tech.title}</span>
              </div>
              <span class="accordion-chevron">▾</span>
            </div>
            <div class="accordion-body ${i === 0 ? 'open' : ''}" id="accordion-body-${i}">
              <p class="accordion-content">${tech.content}</p>
              <div class="tips-list">
                <h4 class="tips-heading">💡 Tips:</h4>
                <ul>
                  ${tech.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      ${skill.vocabularyLists ? `
        <div class="card strategy-vocab-card">
          <div class="card-header"><h3>📝 Key Vocabulary</h3></div>
          <div class="strategy-vocab-lists">
            ${Object.entries(skill.vocabularyLists).map(([key, list]) => `
              <div class="strategy-vocab-group">
                <h4>${list.title}</h4>
                ${Object.entries(list).filter(([k]) => k !== 'title').map(([category, words]) => `
                  <div class="strategy-vocab-category">
                    <span class="strategy-vocab-cat-label">${category.charAt(0).toUpperCase() + category.slice(1)}:</span>
                    <div class="strategy-vocab-words">
                      ${(Array.isArray(words) ? words : [words]).map(w => `<span class="strategy-vocab-word">${w}</span>`).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="card common-mistakes-card">
        <div class="card-header"><h3>⚠️ Common Mistakes</h3></div>
        <ul class="mistakes-list">
          ${skill.commonMistakes.map(m => `<li class="mistake-item">❌ ${m}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  // Accordion events
  $$('[data-accordion]', container).forEach(header => {
    header.addEventListener('click', () => {
      const idx = header.dataset.accordion;
      const body = $(`#accordion-body-${idx}`);
      const isOpen = body.classList.contains('open');
      
      // Close all
      $$('.accordion-body', container).forEach(b => b.classList.remove('open'));
      $$('.accordion-chevron', container).forEach(c => c.classList.remove('rotated'));
      
      // Toggle current
      if (!isOpen) {
        body.classList.add('open');
        header.querySelector('.accordion-chevron').classList.add('rotated');
      }
    });
  });

  // Set first accordion chevron as rotated
  const firstChevron = $('.accordion-chevron', container);
  if (firstChevron) firstChevron.classList.add('rotated');
}

registerPage('strategies', renderStrategies);
export { renderStrategies };
