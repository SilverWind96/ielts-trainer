// ============================================================================
// IELTS TRAINER — Resources Page
// ============================================================================
import { RESOURCES } from '../data.js';
import { state, saveState } from '../state.js';
import { $, $$ } from '../utils.js';
import { registerPage } from '../router.js';

function renderResources() {
  const page = $('#page-resources');

  const types = [...new Set(RESOURCES.map(r => r.type))];
  const skills = [...new Set(RESOURCES.flatMap(r => r.skills))];

  let filtered = [...RESOURCES];
  if (state.resourceTypeFilter !== 'all') {
    filtered = filtered.filter(r => r.type === state.resourceTypeFilter);
  }
  if (state.resourceSkillFilter !== 'all') {
    filtered = filtered.filter(r => r.skills.includes(state.resourceSkillFilter));
  }

  const typeIcons = {
    website: '🌐',
    youtube: '📺',
    book: '📕',
    app: '📱',
    podcast: '🎙️'
  };

  page.innerHTML = `
    <div class="page-header">
      <div class="page-header-content">
        <h2 class="page-title">Learning Resources</h2>
        <p class="page-subtitle">Curated collection of the best IELTS preparation materials</p>
      </div>
    </div>

    <div class="filter-bar">
      <div class="filter-group">
        <label class="filter-label">Type:</label>
        <div class="filter-pills" id="resource-type-pills">
          <button class="filter-pill ${state.resourceTypeFilter === 'all' ? 'active' : ''}" data-type="all">All</button>
          ${types.map(t => `
            <button class="filter-pill ${state.resourceTypeFilter === t ? 'active' : ''}" data-type="${t}">
              ${typeIcons[t] || '📄'} ${t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          `).join('')}
        </div>
      </div>
      <div class="filter-group">
        <label class="filter-label">Skill:</label>
        <div class="filter-pills" id="resource-skill-pills">
          <button class="filter-pill ${state.resourceSkillFilter === 'all' ? 'active' : ''}" data-skill="all">All</button>
          ${skills.map(s => `
            <button class="filter-pill ${state.resourceSkillFilter === s ? 'active' : ''}" data-skill="${s}">
              ${s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="resources-count">${filtered.length} resource${filtered.length !== 1 ? 's' : ''} found</div>

    <div class="resources-grid">
      ${filtered.map((r, i) => `
        <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="resource-card" style="animation-delay: ${Math.min(i * 40, 600)}ms">
          <div class="resource-card-top">
            <span class="resource-type-icon">${typeIcons[r.type] || '📄'}</span>
            <span class="resource-type-label">${r.type}</span>
            ${r.free ? '<span class="resource-free-badge">Free</span>' : ''}
          </div>
          <h4 class="resource-name">${r.name}</h4>
          <p class="resource-description">${r.description}</p>
          <div class="resource-skills">
            ${r.skills.map(s => `<span class="skill-badge skill-${s}">${s}</span>`).join('')}
          </div>
          <span class="resource-link">Visit →</span>
        </a>
      `).join('')}
    </div>
  `;

  // Filter events
  $$('#resource-type-pills .filter-pill', page).forEach(pill => {
    pill.addEventListener('click', () => {
      state.resourceTypeFilter = pill.dataset.type;
      saveState();
      renderResources();
    });
  });

  $$('#resource-skill-pills .filter-pill', page).forEach(pill => {
    pill.addEventListener('click', () => {
      state.resourceSkillFilter = pill.dataset.skill;
      saveState();
      renderResources();
    });
  });
}

registerPage('resources', renderResources);
export { renderResources };
