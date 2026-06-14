// ============================================================================
// IELTS TRAINER — Writing Academy Page (Beginner-friendly)
// ============================================================================
import { state, saveState } from '../state.js';
import { $, $$, showToast } from '../utils.js';
import { registerPage } from '../router.js';

// Lessons Data
const LESSONS = [
  {
    id: 'sentence-structure',
    title: 'Module 1: Sentence Building',
    subtitle: 'Move from simple to compound & complex sentences',
    description: 'Learn how to connect ideas logically. IELTS examiners look for a mix of simple, compound, and complex structures to grant Band 6.0+.',
    lessonHtml: `
      <div class="lesson-section">
        <h4>1. Simple Sentences</h4>
        <p>A simple sentence contains just one independent clause (a single subject + verb):</p>
        <div class="example-box border-rose">
          <span class="text-rose">Simple:</span> "Air pollution is rising in cities."
        </div>
        <p>Writing only simple sentences makes your writing sound repetitive and limits your grammar score to Band 5.0 or below.</p>
      </div>
      <div class="lesson-section">
        <h4>2. Compound Sentences</h4>
        <p>Connect two independent clauses of equal importance using a coordinating conjunction (FANBOYS: <strong>F</strong>or, <strong>A</strong>nd, <strong>N</strong>or, <strong>B</strong>ut, <strong>O</strong>r, <strong>Y</strong>et, <strong>S</strong>o):</p>
        <div class="example-box border-indigo">
          <span class="text-indigo">Compound:</span> "Air pollution is rising in cities, <strong>and</strong> more people are experiencing respiratory illnesses."
        </div>
      </div>
      <div class="lesson-section">
        <h4>3. Complex Sentences</h4>
        <p>Connect an independent clause with a dependent clause using a subordinating conjunction (e.g. <em>although, because, while, since, whereas, which</em>). This is the key to high grammar scores!</p>
        <div class="example-box border-emerald">
          <span class="text-emerald">Complex:</span> "<strong>Although</strong> raising taxes can be unpopular, it provides vital funds for public transit."
        </div>
      </div>
    `,
    exercise: {
      prompt: "Combine these two simple sentences into a single <strong>Complex sentence</strong> using the word 'because' or 'since':<br><br><em>'Air pollution is rising in cities.'</em> and <em>'More people are driving private cars.'</em>",
      placeholder: "Type your combined sentence here...",
      checkFn: (text) => {
        const cleaned = text.toLowerCase().trim();
        if (cleaned.length < 15) return { success: false, feedback: "Please write a full combined sentence!" };
        const hasBecause = cleaned.includes('because') || cleaned.includes('since');
        const hasAir = cleaned.includes('pollution') || cleaned.includes('air');
        const hasCar = cleaned.includes('car') || cleaned.includes('drive') || cleaned.includes('driving');
        
        if (!hasBecause) {
          return { success: false, feedback: "💡 Hint: Make sure to use the subordinating conjunction 'because' or 'since' to join the clauses." };
        }
        if (!hasAir || !hasCar) {
          return { success: false, feedback: "💡 Hint: Make sure to include both ideas: air pollution and private cars." };
        }
        return {
          success: true,
          feedback: `🎉 <strong>Excellent job!</strong> You successfully created a complex sentence.<br><br>
                     <strong>Model Answers:</strong><br>
                     • <em>"Air pollution is rising in cities because more people are driving private cars."</em><br>
                     • <em>"Since more people are driving private cars, air pollution is rising in cities."</em>`
        };
      }
    }
  },
  {
    id: 'peel-paragraph',
    title: 'Module 2: Paragraphing (PEEL)',
    subtitle: 'Structure your arguments logically',
    description: 'Learn the PEEL method to write coherent body paragraphs that IELTS examiners can easily follow.',
    lessonHtml: `
      <div class="lesson-section">
        <h4>The PEEL Structure</h4>
        <p>Every body paragraph in IELTS Task 2 should follow this 4-step structure:</p>
        <ul class="peel-expl">
          <li><strong>P - Point:</strong> State the main argument of the paragraph (Topic sentence).</li>
          <li><strong>E - Explanation:</strong> Explain your point in more detail (Why or how does this happen?).</li>
          <li><strong>E - Example:</strong> Provide evidence or a specific scenario to illustrate your point.</li>
          <li><strong>L - Link:</strong> Connect the paragraph back to your thesis statement or prompt question.</li>
        </ul>
      </div>
    `,
    exercise: {
      prompt: "Arrange these 4 sentences in the correct order to form a perfect <strong>PEEL paragraph</strong> about the benefits of online learning. Click on the cards in order.",
      isJumbled: true,
      jumbledSentences: [
        { id: 'E', text: 'This flexibility allows students to study at their own pace and balance education with job commitments.', type: 'Explanation' },
        { id: 'L', text: 'Therefore, online classrooms make higher education more accessible to a wider demographic.', type: 'Link' },
        { id: 'P', text: 'Firstly, distance education offers unparalleled convenience for working professionals.', type: 'Point' },
        { id: 'Ex', text: 'For instance, virtual courses let employees study late at night after completing their shifts.', type: 'Example' }
      ],
      correctOrder: ['P', 'E', 'Ex', 'L']
    }
  },
  {
    id: 'paraphrasing',
    title: 'Module 3: Introduction Paraphrasing',
    subtitle: 'Learn to restate the essay prompt in your own words',
    description: 'Your essay introduction must always paraphrase the prompt. Copying it word-for-word will result in zero score for those sentences.',
    lessonHtml: `
      <div class="lesson-section">
        <h4>Techniques for Paraphrasing</h4>
        <p>To paraphrase effectively, combine these two techniques:</p>
        <ul>
          <li><strong>Use Synonyms:</strong> Replace key words with similar words (e.g. <em>young people</em> → <em>adolescents</em> / <em>important</em> → <em>crucial</em>).</li>
          <li><strong>Change Sentence Structure:</strong> Convert active voice to passive voice, or change verbs into nouns (e.g., <em>"to protect the environment"</em> → <em>"the protection of the environment"</em>).</li>
        </ul>
      </div>
    `,
    exercise: {
      prompt: "Paraphrase this IELTS writing prompt:<br><br><em>'Governments should make public transport free.'</em><br><br><strong>Synonym hints:</strong> Governments → local authorities / public transport → transit systems / free → zero-fare or free of charge.",
      placeholder: "Type your paraphrased sentence...",
      checkFn: (text) => {
        const cleaned = text.toLowerCase().trim();
        if (cleaned.length < 15) return { success: false, feedback: "Please write a full paraphrased sentence!" };
        const copiedTooMuch = cleaned.includes('should make public transport free');
        
        if (copiedTooMuch) {
          return { success: false, feedback: "⚠️ Warning: You copied the phrase 'should make public transport free' exactly. Try to substitute words like 'provide zero-fare transit' or 'eliminate fares'." };
        }
        
        const hasSynonym = cleaned.includes('authorities') || cleaned.includes('government') || cleaned.includes('transit') || cleaned.includes('transport') || cleaned.includes('free') || cleaned.includes('charge') || cleaned.includes('fare');
        if (!hasSynonym) {
          return { success: false, feedback: "💡 Hint: Try to incorporate some of the synonym hints to replace the original wording." };
        }
        return {
          success: true,
          feedback: `🎉 <strong>Nice work!</strong> You avoided copying the prompt verbatim. This is how you earn vocabulary points.<br><br>
                     <strong>Model Answers:</strong><br>
                     • <em>"Local authorities should provide public transit systems free of charge."</em><br>
                     • <em>"Fares for public transport networks ought to be completely eliminated by the government."</em>`
        };
      }
    }
  }
];

const SANDBOX_PROMPTS = [
  {
    title: "Prompt 1: Technology & Communication",
    text: "Some people believe that school children should spend more time playing sports, while others think they should study academic subjects. Discuss both views."
  },
  {
    title: "Prompt 2: Rapid Urbanization",
    text: "In many countries, cities are growing very fast. What are the problems associated with this, and how can they be solved?"
  },
  {
    title: "Prompt 3: Media & News Access",
    text: "In the modern world, news is available 24 hours a day. Is this a positive or negative development?"
  }
];

const TRANSITION_PHRASES = [
  { text: "On the one hand,", desc: "Introduce the first perspective" },
  { text: "On the other hand,", desc: "Introduce the contrasting perspective" },
  { text: "Furthermore,", desc: "Add supporting details" },
  { text: "For instance,", desc: "Provide an example" },
  { text: "Consequently,", desc: "Explain the result" },
  { text: "To conclude,", desc: "Introduce summary" }
];

// Local state
let activeTab = 'lessons'; // 'lessons', 'sandbox'
let currentLessonIndex = 0;
let userAnswers = {}; // { lessonId: answer }
let jumbledSelection = []; // Used for Module 2 PEEL game order

let timerSeconds = 40 * 60; // 40 minutes
let timerInterval = null;
let timerRunning = false;

function renderWritingAcademy() {
  const page = $('#page-writing-academy');
  if (!page) return;

  page.innerHTML = `
    <div class="page-header">
      <div class="page-header-content">
        <h2 class="page-title">IELTS Writing Academy</h2>
        <p class="page-subtitle">Learn IELTS writing step-by-step, designed specifically for absolute beginners</p>
      </div>
    </div>

    <div class="strategy-tabs">
      <button class="strategy-tab ${activeTab === 'lessons' ? 'active' : ''}" id="tab-lessons">
        <span class="strategy-tab-icon">🎓</span>
        <span class="strategy-tab-label">Step-by-Step Lessons</span>
      </button>
      <button class="strategy-tab ${activeTab === 'sandbox' ? 'active' : ''}" id="tab-sandbox">
        <span class="strategy-tab-icon">✍️</span>
        <span class="strategy-tab-label">Free Practice Sandbox</span>
      </button>
    </div>

    <div class="writing-academy-content" id="writing-academy-container">
      ${activeTab === 'lessons' ? renderLessonsLayout() : renderSandboxLayout()}
    </div>
  `;

  // Bind top tabs
  $('#tab-lessons').addEventListener('click', () => {
    activeTab = 'lessons';
    renderWritingAcademy();
  });
  $('#tab-sandbox').addEventListener('click', () => {
    activeTab = 'sandbox';
    renderWritingAcademy();
  });

  if (activeTab === 'lessons') {
    bindLessonsEvents();
  } else {
    bindSandboxEvents();
  }
}

// ============================================================================
// 1. Lessons Renderer & Event Binder
// ============================================================================
function renderLessonsLayout() {
  const lesson = LESSONS[currentLessonIndex];
  const isLast = currentLessonIndex === LESSONS.length - 1;
  const isFirst = currentLessonIndex === 0;

  return `
    <div class="lessons-main-grid">
      <!-- Lesson Navigation Sidebar -->
      <div class="card lessons-sidebar">
        <h3 class="lessons-sidebar-title">Modules</h3>
        <div class="lessons-sidebar-list">
          ${LESSONS.map((l, i) => `
            <button class="lesson-sidebar-item ${i === currentLessonIndex ? 'active' : ''} ${state.vocabLearned.includes(`lesson_${l.id}`) ? 'completed' : ''}" data-index="${i}">
              <span class="lesson-sidebar-num">${i + 1}</span>
              <div>
                <span class="lesson-sidebar-name">${l.title}</span>
                <span class="lesson-sidebar-status">${state.vocabLearned.includes(`lesson_${l.id}`) ? 'Completed ✓' : 'In Progress'}</span>
              </div>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Main Lesson Area -->
      <div class="lesson-workspace-card">
        <div class="card lesson-content-card">
          <div class="card-header">
            <h3>${lesson.title}</h3>
            <span class="lesson-badge">${lesson.subtitle}</span>
          </div>
          <p class="lesson-desc">${lesson.description}</p>
          <hr class="lesson-divider" />
          <div class="lesson-body">
            ${lesson.lessonHtml}
          </div>
        </div>

        <!-- Exercise Panel -->
        <div class="card exercise-card">
          <div class="card-header">
            <h3>📝 Quick Exercise</h3>
          </div>
          <p class="exercise-prompt">${lesson.exercise.prompt}</p>

          ${lesson.exercise.isJumbled ? renderJumbledGame(lesson.exercise) : `
            <textarea class="exercise-textarea" id="exercise-input" placeholder="${lesson.exercise.placeholder}">${userAnswers[lesson.id] || ''}</textarea>
            <div class="exercise-actions">
              <button class="btn btn-primary" id="btn-exercise-check">Check & Get Feedback</button>
            </div>
          `}
          
          <div class="exercise-feedback-box hidden" id="exercise-feedback"></div>
        </div>

        <div class="lesson-workspace-navigation">
          <button class="btn btn-outline" id="btn-lesson-prev" ${isFirst ? 'disabled' : ''}>← Previous Module</button>
          <button class="btn btn-primary" id="btn-lesson-next" ${isLast ? 'disabled' : ''}>Next Module →</button>
        </div>
      </div>
    </div>
  `;
}

function renderJumbledGame(exercise) {
  return `
    <div class="jumbled-game-container">
      <div class="jumbled-cards" id="jumbled-pool">
        ${exercise.jumbledSentences.map(s => `
          <button class="jumbled-card" data-sentence-id="${s.id}" id="jumbled-card-${s.id}">
            <span class="jumbled-card-badge">${s.type}</span>
            <p class="jumbled-card-text">${s.text}</p>
          </button>
        `).join('')}
      </div>

      <div class="peel-slots-row">
        <div class="peel-slot" data-slot="P"><span class="slot-letter">P</span><span class="slot-label">Point</span><div class="slot-content" id="slot-P"></div></div>
        <div class="peel-slot" data-slot="E"><span class="slot-letter">E</span><span class="slot-label">Explanation</span><div class="slot-content" id="slot-E"></div></div>
        <div class="peel-slot" data-slot="Ex"><span class="slot-letter">E</span><span class="slot-label">Example</span><div class="slot-content" id="slot-Ex"></div></div>
        <div class="peel-slot" data-slot="L"><span class="slot-letter">L</span><span class="slot-label">Link</span><div class="slot-content" id="slot-L"></div></div>
      </div>

      <div class="exercise-actions">
        <button class="btn btn-outline" id="btn-peel-reset" style="margin-right: 12px;">Reset</button>
        <button class="btn btn-primary" id="btn-peel-check" disabled>Check Order</button>
      </div>
    </div>
  `;
}

function bindLessonsEvents() {
  const lesson = LESSONS[currentLessonIndex];

  // Sidebar items
  $$('.lesson-sidebar-item').forEach(item => {
    item.addEventListener('click', () => {
      currentLessonIndex = parseInt(item.dataset.index);
      jumbledSelection = [];
      renderWritingAcademy();
    });
  });

  // Prev / Next button
  const prevBtn = $('#btn-lesson-prev');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentLessonIndex > 0) {
        currentLessonIndex--;
        jumbledSelection = [];
        renderWritingAcademy();
      }
    });
  }

  const nextBtn = $('#btn-lesson-next');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentLessonIndex < LESSONS.length - 1) {
        currentLessonIndex++;
        jumbledSelection = [];
        renderWritingAcademy();
      }
    });
  }

  // Handle standard textbox exercises
  if (!lesson.exercise.isJumbled) {
    const input = $('#exercise-input');
    const checkBtn = $('#btn-exercise-check');
    const feedback = $('#exercise-feedback');

    if (input) {
      input.addEventListener('input', () => {
        userAnswers[lesson.id] = input.value;
      });
    }

    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        const text = input.value;
        const res = lesson.exercise.checkFn(text);
        
        feedback.innerHTML = res.feedback;
        feedback.className = `exercise-feedback-box ${res.success ? 'success' : 'warning'}`;
        feedback.classList.remove('hidden');

        if (res.success) {
          markLessonCompleted(lesson.id);
        }
      });
    }
  } else {
    // Handle jumbled sentence reordering game
    const checkBtn = $('#btn-peel-check');
    const resetBtn = $('#btn-peel-reset');
    const feedback = $('#exercise-feedback');

    $$('.jumbled-card').forEach(card => {
      card.addEventListener('click', () => {
        const sId = card.dataset.sentenceId;
        if (jumbledSelection.includes(sId)) return;

        jumbledSelection.push(sId);
        card.classList.add('selected');

        // Place sentence in the next available slot
        const slotKey = jumbledSelection.length === 1 ? 'P' : jumbledSelection.length === 2 ? 'E' : jumbledSelection.length === 3 ? 'Ex' : 'L';
        const slot = $(`#slot-${slotKey}`);
        if (slot) {
          const sentenceObj = lesson.exercise.jumbledSentences.find(s => s.id === sId);
          slot.innerHTML = `<span class="slot-text">${sentenceObj.text}</span>`;
        }

        if (jumbledSelection.length === 4) {
          checkBtn.disabled = false;
        }
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        jumbledSelection = [];
        checkBtn.disabled = true;
        feedback.classList.add('hidden');
        $$('.jumbled-card').forEach(c => c.classList.remove('selected'));
        ['P', 'E', 'Ex', 'L'].forEach(k => {
          const slot = $(`#slot-${k}`);
          if (slot) slot.innerHTML = '';
        });
      });
    }

    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        const orderMatches = jumbledSelection.every((val, index) => val === lesson.exercise.correctOrder[index]);
        if (orderMatches) {
          feedback.innerHTML = `🎉 <strong>Perfect!</strong> You correctly structured the PEEL paragraph.<br>
                                 • <strong>Point:</strong> First, distance education offers convenience.<br>
                                 • <strong>Explanation:</strong> This flexibility allows pacing.<br>
                                 • <strong>Example:</strong> For instance, virtual courses let employees study late.<br>
                                 • <strong>Link:</strong> Therefore, online classrooms make higher ed accessible.`;
          feedback.className = "exercise-feedback-box success";
          markLessonCompleted(lesson.id);
        } else {
          feedback.innerHTML = `❌ <strong>Not quite!</strong> Review the definition of PEEL. Make sure the Point (Topic sentence) comes first, followed by the Explanation, then Example, and finally the concluding Link sentence. Click 'Reset' to try again.`;
          feedback.className = "exercise-feedback-box warning";
        }
        feedback.classList.remove('hidden');
      });
    }
  }
}

function markLessonCompleted(lessonId) {
  const key = `lesson_${lessonId}`;
  if (!state.vocabLearned.includes(key)) {
    state.vocabLearned.push(key);
    saveState();
    updateModulesProgress();
  }
}

function updateModulesProgress() {
  const sidebarItems = $$('.lesson-sidebar-item');
  sidebarItems.forEach(item => {
    const idx = parseInt(item.dataset.index);
    const l = LESSONS[idx];
    if (state.vocabLearned.includes(`lesson_${l.id}`)) {
      item.classList.add('completed');
      item.querySelector('.lesson-sidebar-status').textContent = 'Completed ✓';
    }
  });
}

// ============================================================================
// 2. Sandbox Renderer & Event Binder
// ============================================================================
function renderSandboxLayout() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  const timerStr = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return `
    <div class="sandbox-main-grid">
      <!-- Left side: Essay Prompts & Editor -->
      <div class="sandbox-workspace">
        <div class="card sandbox-prompt-card">
          <div class="card-header">
            <h3>✍️ Select Essay Prompt</h3>
          </div>
          <div class="sandbox-prompt-select-row">
            <select class="filter-select" id="sandbox-prompt-select" style="width:100%; max-width: 320px;">
              ${SANDBOX_PROMPTS.map((p, i) => `<option value="${i}">${p.title}</option>`).join('')}
            </select>
          </div>
          <div class="selected-prompt-box">
            <p id="selected-prompt-text">${SANDBOX_PROMPTS[0].text}</p>
          </div>
        </div>

        <div class="card sandbox-editor-card">
          <div class="editor-header">
            <div class="editor-timer">
              ⏱️ Time Remaining: <strong id="sandbox-timer-label" class="${timerSeconds < 300 ? 'text-rose' : ''}">${timerStr}</strong>
              <button class="btn btn-sm btn-outline btn-timer-toggle" id="btn-timer-toggle">${timerRunning ? 'Pause' : 'Start'}</button>
            </div>
            <div class="editor-word-count">
              Words: <strong id="word-count-label">0</strong> / 250 (minimum)
            </div>
          </div>
          <textarea class="sandbox-textarea" id="sandbox-input" placeholder="Begin typing your essay introduction here..."></textarea>
          
          <div class="chip-bank">
            <span class="chip-bank-label">Tap to insert transition:</span>
            <div class="chips-list">
              ${TRANSITION_PHRASES.map(p => `
                <button class="phrase-chip" data-text="${p.text} " title="${p.desc}">${p.text}</button>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Right side: Guided Writing Templates & Checklist -->
      <div class="sandbox-guides-side">
        <!-- Guided Templates -->
        <div class="card guide-card">
          <div class="card-header"><h3>💡 Guided Essay Template</h3></div>
          <div class="guide-tabs" id="guide-tabs">
            <button class="guide-tab active" data-guide="intro">Intro</button>
            <button class="guide-tab" data-guide="body1">Body 1</button>
            <button class="guide-tab" data-guide="body2">Body 2</button>
            <button class="guide-tab" data-guide="conclusion">Concl</button>
          </div>
          <div class="guide-content-box" id="guide-content">
            <!-- Render Intro Guide by default -->
            ${renderIntroGuide()}
          </div>
        </div>

        <!-- Evaluation checklist -->
        <div class="card checklist-card">
          <div class="card-header"><h3>🔎 Self-Evaluation Checklist</h3></div>
          <div class="checklist-items">
            <label class="checklist-item">
              <input type="checkbox" class="eval-cb">
              <span>Task Achievement: Paraphrased prompt & gave clear opinion.</span>
            </label>
            <label class="checklist-item">
              <input type="checkbox" class="eval-cb">
              <span>Coherence: Used logical paragraphs & transitions (e.g. Furthermore).</span>
            </label>
            <label class="checklist-item">
              <input type="checkbox" class="eval-cb">
              <span>Lexical Range: Used synonyms; avoided repeating prompt words.</span>
            </label>
            <label class="checklist-item">
              <input type="checkbox" class="eval-cb">
              <span>Accuracy: Checked simple grammar & spelling mistakes.</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderIntroGuide() {
  return `
    <h4>Introduction Structure (35-50 words)</h4>
    <ol class="guide-list">
      <li><strong>Sentence 1: Paraphrase Prompt</strong><br>
          Rewrite the prompt question using synonyms.<br>
          <em>Example: "It is argued that zero-fare public transit is highly beneficial..."</em>
      </li>
      <li><strong>Sentence 2: Thesis Statement</strong><br>
          State your main argument or opinion.<br>
          <em>Example: "In my opinion, this provides massive environmental advantages..."</em>
      </li>
    </ol>
  `;
}

function renderBody1Guide() {
  return `
    <h4>Body Paragraph 1 (PEEL: 80-100 words)</h4>
    <ol class="guide-list">
      <li><strong>P - Point:</strong> Start with a clear topic sentence.<br>
          <em>Example: "To begin with, free public transport dramatically cuts urban pollution."</em>
      </li>
      <li><strong>E - Explanation:</strong> Explain *why* this is true.<br>
          <em>Example: "Because citizens do not have to pay, they will opt for buses instead of cars..."</em>
      </li>
      <li><strong>E - Example:</strong> Give a clear scenario.<br>
          <em>Example: "For example, cities like Tallinn recorded a major dip in traffic..."</em>
      </li>
      <li><strong>L - Link:</strong> Wrap it back.<br>
          <em>Example: "Therefore, zero-fare transit serves as a powerful ecological tool."</em>
      </li>
    </ol>
  `;
}

function renderBody2Guide() {
  return `
    <h4>Body Paragraph 2 (PEEL: 80-100 words)</h4>
    <ol class="guide-list">
      <li><strong>P - Point:</strong> Start with the second argument.<br>
          <em>Example: "Additionally, free transit provides significant economic relief."</em>
      </li>
      <li><strong>E - Explanation:</strong> Elaborate the financial benefit.<br>
          <em>Example: "Low-income workers spend less on commuting, raising disposable income..."</em>
      </li>
      <li><strong>E - Example:</strong> Provide evidence.<br>
          <em>Example: "Studies show free travel increases access to employment zones."</em>
      </li>
      <li><strong>L - Link:</strong> Wrap it back.<br>
          <em>Example: "Hence, this policy supports financial mobility for all."</em>
      </li>
    </ol>
  `;
}

function renderConclusionGuide() {
  return `
    <h4>Conclusion Paragraph (30-40 words)</h4>
    <ol class="guide-list">
      <li><strong>Sentence 1: Summary of main points</strong><br>
          Summarize your Body 1 and Body 2 points briefly.<br>
          <em>Example: "In conclusion, although transit networks incur expenses, they reduce emissions and support low-income families..."</em>
      </li>
      <li><strong>Sentence 2: Final opinion restated</strong><br>
          Give a final concluding forecast or warning.<br>
          <em>Example: "Thus, the advantages of zero-fare policies outweigh the costs."</em>
      </li>
    </ol>
  `;
}

function bindSandboxEvents() {
  const promptSelect = $('#sandbox-prompt-select');
  const promptText = $('#selected-prompt-text');
  const input = $('#sandbox-input');
  const wordCountLabel = $('#word-count-label');
  const timerLabel = $('#sandbox-timer-label');
  const timerToggle = $('#btn-timer-toggle');

  // Change essay prompts
  if (promptSelect) {
    promptSelect.addEventListener('change', (e) => {
      const idx = parseInt(e.target.value);
      promptText.textContent = SANDBOX_PROMPTS[idx].text;
    });
  }

  // Word count calculator
  if (input) {
    input.addEventListener('input', () => {
      const text = input.value.trim();
      const count = text === '' ? 0 : text.split(/\s+/).length;
      wordCountLabel.textContent = count;
      if (count >= 250) {
        wordCountLabel.className = 'text-emerald';
      } else {
        wordCountLabel.className = '';
      }
    });
  }

  // Insert transition chips
  $$('.phrase-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      if (!input) return;
      const textToInsert = chip.dataset.text;
      const startPos = input.selectionStart;
      const endPos = input.selectionEnd;
      
      const currentVal = input.value;
      input.value = currentVal.substring(0, startPos) + textToInsert + currentVal.substring(endPos);
      
      // Put cursor right after the inserted text
      input.focus();
      input.selectionStart = startPos + textToInsert.length;
      input.selectionEnd = startPos + textToInsert.length;

      // Trigger word count refresh
      input.dispatchEvent(new Event('input'));
    });
  });

  // Timer Toggle (Play/Pause)
  if (timerToggle) {
    timerToggle.addEventListener('click', () => {
      if (timerRunning) {
        // Pause timer
        clearInterval(timerInterval);
        timerRunning = false;
        timerToggle.textContent = 'Start';
      } else {
        // Start timer
        timerRunning = true;
        timerToggle.textContent = 'Pause';
        timerInterval = setInterval(() => {
          if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            timerRunning = false;
            timerToggle.textContent = 'Start';
            showToast("⏰ Writing Sandbox time is up! Check your essay word count.", 'info');
            return;
          }
          timerSeconds--;
          const minutes = Math.floor(timerSeconds / 60);
          const seconds = timerSeconds % 60;
          timerLabel.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
          
          if (timerSeconds < 300) {
            timerLabel.classList.add('text-rose');
          }
        }, 1000);
      }
    });
  }

  // Guide Tabs Switching
  $$('.guide-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.guide-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const guide = tab.dataset.guide;
      const container = $('#guide-content');
      if (guide === 'intro') container.innerHTML = renderIntroGuide();
      else if (guide === 'body1') container.innerHTML = renderBody1Guide();
      else if (guide === 'body2') container.innerHTML = renderBody2Guide();
      else if (guide === 'conclusion') container.innerHTML = renderConclusionGuide();
    });
  });
}

// Register page
registerPage('writing-academy', renderWritingAcademy);
export { renderWritingAcademy };
