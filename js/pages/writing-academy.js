// ============================================================================
// IELTS TRAINER — Writing Academy Page (Beginner-friendly)
// ============================================================================
import { state, saveState } from '../state.js';
import { $, $$, showToast } from '../utils.js';
import { registerPage } from '../router.js';
import { MODEL_ESSAYS, TASK1_ESSAYS } from './essays-db.js';

// Lessons Data (Task 2)
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
      <div class="lesson-section">
        <h4>💡 More Comparative Examples</h4>
        <p>Study how simple thoughts are built up into academic structures:</p>
        <table class="strategy-table" style="width: 100%; margin-top: 10px;">
          <thead>
            <tr>
              <th>Simple Sentence</th>
              <th>Compound Sentence</th>
              <th>Complex Sentence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>"Technology changes lives."</td>
              <td>"Technology changes lives, <strong>but</strong> it also isolates people."</td>
              <td>"<strong>While</strong> technology changes lives, it can also isolate individuals."</td>
            </tr>
            <tr>
              <td>"Tourism brings money."</td>
              <td>"Tourism brings money, <strong>and</strong> it creates local jobs."</td>
              <td>"<strong>Because</strong> tourism brings money, it creates local jobs."</td>
            </tr>
            <tr>
              <td>"Governments must act."</td>
              <td>"Governments must act, <strong>or</strong> climate change will worsen."</td>
              <td>"<strong>Unless</strong> governments act immediately, climate change will worsen."</td>
            </tr>
          </tbody>
        </table>
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
      <div class="lesson-section">
        <h4>💡 Full PEEL Paragraph Example</h4>
        <p>Look at how these four components blend together to make a strong argument:</p>
        <div class="card" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 16px; border-radius: 8px;">
          <p style="margin-bottom: 0; font-size: 0.9rem; line-height: 1.6;">
            <span style="color: #60a5fa; font-weight: bold;">[P - Point]</span> <em>"Firstly, distance education offers unparalleled convenience for working professionals."</em>
            <span style="color: #c084fc; font-weight: bold;">[E - Explanation]</span> <em>"This flexibility allows students to study at their own pace and balance education with job commitments."</em>
            <span style="color: #34d399; font-weight: bold;">[E - Example]</span> <em>"For instance, virtual courses let employees study late at night after completing their shifts."</em>
            <span style="color: #fb923c; font-weight: bold;">[L - Link]</span> <em>"Therefore, online classrooms make higher education more accessible to a wider demographic."</em>
          </p>
        </div>
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
      <div class="lesson-section">
        <h4>💡 Paraphrasing Examples Library</h4>
        <p>Review these examples to understand how to rewrite prompt statements effectively:</p>
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 10px;">
          <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 12px; border-radius: 6px;">
            <strong style="color: var(--accent-rose); font-size: 0.82rem; display: block; margin-bottom: 4px;">Original Prompt:</strong>
            <span style="font-size: 0.9rem; display: block; margin-bottom: 8px;">"Computers will replace teachers in the future."</span>
            <strong style="color: var(--accent-emerald); font-size: 0.82rem; display: block; margin-bottom: 4px;">Paraphrased Version:</strong>
            <span style="font-size: 0.9rem; font-style: italic;">"It is predicted that digital machines will eventually take the place of educators."</span>
          </div>
          
          <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 12px; border-radius: 6px;">
            <strong style="color: var(--accent-rose); font-size: 0.82rem; display: block; margin-bottom: 4px;">Original Prompt:</strong>
            <span style="font-size: 0.9rem; display: block; margin-bottom: 8px;">"Children are spending too much time playing video games."</span>
            <strong style="color: var(--accent-emerald); font-size: 0.82rem; display: block; margin-bottom: 4px;">Paraphrased Version:</strong>
            <span style="font-size: 0.9rem; font-style: italic;">"Young people are dedicating an excessive amount of hours to gaming consoles."</span>
          </div>
          
          <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 12px; border-radius: 6px;">
            <strong style="color: var(--accent-rose); font-size: 0.82rem; display: block; margin-bottom: 4px;">Original Prompt:</strong>
            <span style="font-size: 0.9rem; display: block; margin-bottom: 8px;">"Governments should raise taxes on fast food."</span>
            <strong style="color: var(--accent-emerald); font-size: 0.82rem; display: block; margin-bottom: 4px;">Paraphrased Version:</strong>
            <span style="font-size: 0.9rem; font-style: italic;">"Local authorities ought to increase taxation on unhealthy convenience meals."</span>
          </div>
        </div>
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

// Lessons Data (Task 1)
const TASK1_LESSONS = [
  {
    id: 'task1-structure',
    title: 'Module 1: Task 1 Report & Letter Structure',
    subtitle: 'Structuring reports and letters logically',
    description: 'Learn the correct structural framework for Academic Reports (Introduction, Overview, and Details) and General Training Letters (Salutation, Bullet Points, and Sign-off).',
    lessonHtml: `
      <div class="lesson-section">
        <h4>1. Academic Task 1: Report Structure</h4>
        <p>Your academic report must have three or four clear paragraphs:</p>
        <ul class="peel-expl">
          <li><strong>Introduction:</strong> Paraphrase the prompt (what, where, and when).</li>
          <li><strong>Overview:</strong> State the most prominent trends, differences, or stages. Do NOT include numbers here. This is the most important paragraph for Band 6.0+!</li>
          <li><strong>Details Paragraphs:</strong> Group details logically and describe specific data points and comparisons with numbers.</li>
        </ul>
      </div>
      <div class="lesson-section">
        <h4>2. General Training Task 1: Letter Structure</h4>
        <p>Letters must follow a clear structure based on the prompt's bullet points:</p>
        <ul class="peel-expl">
          <li><strong>Salutation:</strong> Formal (<em>Dear Mr. Smith</em>) or Informal (<em>Dear John</em>).</li>
          <li><strong>Opening Statement:</strong> State the purpose of the letter (e.g. <em>I am writing to...</em>).</li>
          <li><strong>Bullet Points (Body):</strong> Address all three prompt bullet points in detail.</li>
          <li><strong>Sign-off:</strong> Formal (<em>Yours sincerely</em>) or Informal (<em>Best regards</em>).</li>
        </ul>
      </div>
    `,
    exercise: {
      prompt: "Combine these two sentences into a single, cohesive <strong>Introduction statement</strong> for a report:<br><br><em>'The chart shows energy consumption.'</em> and <em>'The data covers five countries in 2024.'</em>",
      placeholder: "Type your paraphrased introduction here...",
      checkFn: (text) => {
        const cleaned = text.toLowerCase().trim();
        if (cleaned.length < 15) return { success: false, feedback: "Please write a full combined sentence!" };
        const hasCompares = cleaned.includes('compare') || cleaned.includes('illustrates') || cleaned.includes('shows') || cleaned.includes('comparison');
        const hasEnergy = cleaned.includes('energy') || cleaned.includes('electricity') || cleaned.includes('consumption') || cleaned.includes('consumed');
        const hasNations = cleaned.includes('countries') || cleaned.includes('nations') || cleaned.includes('2024');
        
        if (!hasCompares) {
          return { success: false, feedback: "💡 Hint: Start with a verb like 'compares', 'illustrates', or 'shows' to introduce the graphic." };
        }
        if (!hasEnergy || !hasNations) {
          return { success: false, feedback: "💡 Hint: Make sure to include what is being compared (energy consumption) and the scope (five nations in 2024)." };
        }
        return {
          success: true,
          feedback: `🎉 <strong>Excellent work!</strong> You successfully structured a Task 1 introduction.<br><br>
                     <strong>Model Answers:</strong><br>
                     • <em>"The bar chart compares the average electricity consumption per household across five different countries in 2024."</em><br>
                     • <em>"The chart illustrates household energy consumption patterns in five nations during the year 2024."</em>`
        };
      }
    }
  },
  {
    id: 'task1-trends',
    title: 'Module 2: Describing Trends & Data',
    subtitle: 'Master vocab for increases, decreases, and stability',
    description: 'IELTS Academic Task 1 requires precise language to describe trends. Avoid repeating "went up" or "went down". Use a mix of verbs, nouns, and adverbs.',
    lessonHtml: `
      <div class="lesson-section">
        <h4>Vocabulary for Trends</h4>
        <table class="strategy-table" style="width: 100%; margin-top: 10px;">
          <thead>
            <tr>
              <th>Trend</th>
              <th>Verbs</th>
              <th>Nouns</th>
              <th>Adverbs / Adjectives</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="color: var(--accent-emerald);">Increase ↑</td>
              <td>rise, climb, rocket, soar</td>
              <td>an upward trend, a growth</td>
              <td>dramatically, sharply, steadily</td>
            </tr>
            <tr>
              <td style="color: var(--accent-rose);">Decrease ↓</td>
              <td>plummet, drop, decline, plunge</td>
              <td>a fall, a reduction, a dip</td>
              <td>marginally, gradually, significantly</td>
            </tr>
            <tr>
              <td style="color: var(--accent-blue);">No Change →</td>
              <td>remain stable, flatten out</td>
              <td>stability, a plateau</td>
              <td>relatively, consistently</td>
            </tr>
            <tr>
              <td style="color: var(--accent-purple);">Fluctuation ~</td>
              <td>fluctuate, oscillate</td>
              <td>a fluctuation</td>
              <td>wildly, slightly</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="lesson-section">
        <h4>💡 Example Sentences</h4>
        <p>Combining trend verbs with adverbs enhances your grammatical rating:</p>
        <ul>
          <li><em>"Electric car sales <strong>rocketed dramatically</strong> between 2015 and 2025."</em></li>
          <li><em>"Diesel sales <strong>plummeted to just 20,000</strong> units, marking a <strong>significant decline</strong>."</em></li>
          <li><em>"Petrol sales <strong>fluctuated slightly</strong> but <strong>remained relatively stable</strong>."</em></li>
        </ul>
      </div>
    `,
    exercise: {
      prompt: "Identify the word that describes a <strong>rapid, large decrease</strong>. Options: plummeted, fluctuated, stabilized, climbed.",
      placeholder: "Type the correct word here...",
      checkFn: (text) => {
        const cleaned = text.toLowerCase().trim();
        if (cleaned === 'plummeted') {
          return {
            success: true,
            feedback: "🎉 <strong>Correct!</strong> 'Plummeted' means to fall or drop straight down at high speed. Other great words for rapid decreases are 'plunged' and 'slashed'."
          };
        }
        return {
          success: false,
          feedback: "💡 Hint: The word starts with 'p' and is listed in the lesson table under 'Decrease' (Verbs)."
        };
      }
    }
  },
  {
    id: 'task1-letter-tone',
    title: 'Module 3: Letter Tones & Salutations',
    subtitle: 'Aligning your writing with the target audience',
    description: 'For General Training Task 1, you must write a letter. The tone must be consistent: either completely formal (for landlords, employers, businesses) or completely informal (for close friends and family).',
    lessonHtml: `
      <div class="lesson-section">
        <h4>Tone Contrast Guide</h4>
        <table class="strategy-table" style="width: 100%; margin-top: 10px;">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Formal Letter</th>
              <th>Informal Letter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Audience</strong></td>
              <td>Manager, Landlord, Store Owner</td>
              <td>Friend, Colleague, Family Member</td>
            </tr>
            <tr>
              <td><strong>Salutation</strong></td>
              <td>Dear Mr. Smith, / Dear Sir or Madam,</td>
              <td>Dear Sarah, / Hi Mark,</td>
            </tr>
            <tr>
              <td><strong>Opening</strong></td>
              <td>"I am writing to inform you..."</td>
              <td>"I'm writing to let you know..."</td>
            </tr>
            <tr>
              <td><strong>Contractions</strong></td>
              <td>Do NOT use (<em>I am, do not</em>)</td>
              <td>Use them (<em>I'm, don't, we'd</em>)</td>
            </tr>
            <tr>
              <td><strong>Sign-off</strong></td>
              <td>Yours sincerely, / Yours faithfully,</td>
              <td>Best regards, / Warmly, / Love,</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    exercise: {
      prompt: "Determine if this sentence is <strong>Formal</strong> or <strong>Informal</strong>:<br><br><em>'Dear Mr. Davies, I am writing to formally request urgent repairs regarding a plumbing leak in my apartment.'</em>",
      placeholder: "Type 'Formal' or 'Informal'...",
      checkFn: (text) => {
        const cleaned = text.toLowerCase().trim();
        if (cleaned.includes('formal') && !cleaned.includes('informal')) {
          return {
            success: true,
            feedback: "🎉 <strong>Correct!</strong> This sentence uses a formal salutation ('Dear Mr. Davies'), avoids contractions ('I am writing'), and uses professional vocabulary ('formally request', 'urgent repairs')."
          };
        }
        return {
          success: false,
          feedback: "💡 Hint: Look at the salutation ('Dear Mr. Davies') and the lack of contractions like 'I'm'. Is it formal or informal?"
        };
      }
    }
  }
];

// Sandbox Prompts (Task 2)
const SANDBOX_PROMPTS = [
  {
    title: "Prompt 1: Technology & Sports",
    text: "Some people believe that school children should spend more time playing sports, while others think they should study academic subjects. Discuss both views."
  },
  {
    title: "Prompt 2: Rapid Urbanization",
    text: "In many countries, cities are growing very fast. What are the problems associated with this, and how can they be solved?"
  },
  {
    title: "Prompt 3: Media & News Access",
    text: "In the modern world, news is available 24 hours a day. Is this a positive or negative development?"
  },
  {
    title: "Prompt 4: Environmental Protection",
    text: "Some people think that climate change is the single most important problem facing the world today. Others think there are more urgent problems. Discuss both views."
  },
  {
    title: "Prompt 5: Career and Salaries",
    text: "In today's world, many people choose to change their career paths several times during their lives. What are the reasons for this, and is it a positive or negative development?"
  },
  {
    title: "Prompt 6: Art & Funding",
    text: "Some people believe that governments should fund public arts and music, while others believe this money should be spent on public services like health and education. Discuss both views."
  },
  {
    title: "Prompt 7: Global Languages",
    text: "Many languages are dying out every year. Some people think this is a natural process and not a problem, while others think it is a tragedy that must be stopped. Discuss both views."
  },
  {
    title: "Prompt 8: Over-reliance on Technology",
    text: "An increasing number of people are relying on smartphones and computers to perform basic tasks like writing, spelling, and calculating. What are the benefits and drawbacks of this development?"
  }
];

// Sandbox Prompts (Task 1)
const TASK1_SANDBOX_PROMPTS = [
  {
    title: "Prompt 1: Line Graph (Car Sales)",
    text: "The line graph shows the annual sales of electric, diesel, and petrol cars in a European country between 2015 and 2025. Summarize the information by selecting and reporting the main features, and make comparisons where relevant."
  },
  {
    title: "Prompt 2: Bar Chart (Electricity Consumption)",
    text: "The bar chart compares the average electricity consumption per household in five different countries in 2024. Summarize the information by selecting and reporting the main features, and make comparisons where relevant."
  },
  {
    title: "Prompt 3: Process Diagram (Brick Production)",
    text: "The diagram shows the stages in the process of manufacturing bricks for the building industry. Summarize the information by selecting and reporting the main features, and make comparisons where relevant."
  },
  {
    title: "Prompt 4: Formal Letter (Bathroom Leak)",
    text: "You are having problems with a plumbing leak in your rented apartment. Write a formal letter to your landlord complaining about this problem, asking for it to be repaired, and explaining how it affects you."
  },
  {
    title: "Prompt 5: Informal Letter (Moving House)",
    text: "You have recently moved to a new house in another town. Write a letter to an English-speaking friend. In your letter, explain why you moved, describe your new house, and invite your friend to visit you."
  }
];

// Transitions (Task 2)
const TRANSITION_PHRASES = [
  { text: "On the one hand,", desc: "Introduce the first perspective" },
  { text: "On the other hand,", desc: "Introduce the contrasting perspective" },
  { text: "Furthermore,", desc: "Add supporting details" },
  { text: "For instance,", desc: "Provide an example" },
  { text: "Consequently,", desc: "Explain the result" },
  { text: "To conclude,", desc: "Introduce summary" }
];

// Transitions (Task 1)
const TASK1_TRANSITIONS = [
  { text: "Overall, it is clear that", desc: "Start the overview paragraph" },
  { text: "Looking at the details,", desc: "Start details paragraph" },
  { text: "In contrast,", desc: "Introduce opposing trend/data" },
  { text: "Specifically,", desc: "Add precise data point detail" },
  { text: "To begin,", desc: "Start description/process" },
  { text: "I am writing to", desc: "State letter purpose" },
  { text: "Regarding", desc: "Introduce letter subject" },
  { text: "As a result,", desc: "Explain consequence" }
];

// SVG Graphic Helpers for Task 1
function getCarSalesGraphSVG() {
  return `
    <div class="task1-graphic-container" style="margin: 15px 0; display: flex; flex-direction: column; align-items: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; width: 100%;">
      <h4 style="margin-top: 0; margin-bottom: 12px; font-size: 0.9rem; color: var(--text-primary); text-align: center;">Car Sales in Europe (2015-2025)</h4>
      <svg viewBox="0 0 500 300" style="width: 100%; max-width: 450px; overflow: visible;">
        <!-- Gridlines -->
        <line x1="50" y1="50" x2="450" y2="50" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3,3" />
        <line x1="50" y1="100" x2="450" y2="100" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3,3" />
        <line x1="50" y1="155" x2="450" y2="155" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3,3" />
        <line x1="50" y1="210" x2="450" y2="210" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3,3" />
        <line x1="50" y1="260" x2="450" y2="260" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
        
        <!-- Y-Axis Labels -->
        <text x="40" y="55" fill="var(--text-tertiary)" font-size="10" text-anchor="end">200k</text>
        <text x="40" y="105" fill="var(--text-tertiary)" font-size="10" text-anchor="end">150k</text>
        <text x="40" y="160" fill="var(--text-tertiary)" font-size="10" text-anchor="end">100k</text>
        <text x="40" y="215" fill="var(--text-tertiary)" font-size="10" text-anchor="end">50k</text>
        <text x="40" y="265" fill="var(--text-tertiary)" font-size="10" text-anchor="end">0</text>
        
        <!-- X-Axis Labels -->
        <text x="50" y="280" fill="var(--text-tertiary)" font-size="10" text-anchor="middle">2015</text>
        <text x="130" y="280" fill="var(--text-tertiary)" font-size="10" text-anchor="middle">2017</text>
        <text x="210" y="280" fill="var(--text-tertiary)" font-size="10" text-anchor="middle">2019</text>
        <text x="290" y="280" fill="var(--text-tertiary)" font-size="10" text-anchor="middle">2021</text>
        <text x="370" y="280" fill="var(--text-tertiary)" font-size="10" text-anchor="middle">2023</text>
        <text x="450" y="280" fill="var(--text-tertiary)" font-size="10" text-anchor="middle">2025</text>
        
        <!-- Petrol line -->
        <path d="M 50 103 L 130 113 L 210 108 L 290 118 L 370 113 L 450 124" fill="none" stroke="var(--accent-blue)" stroke-width="3" stroke-linecap="round" />
        <circle cx="50" cy="103" r="4" fill="var(--accent-blue)" />
        <circle cx="130" cy="113" r="4" fill="var(--accent-blue)" />
        <circle cx="210" cy="108" r="4" fill="var(--accent-blue)" />
        <circle cx="290" cy="118" r="4" fill="var(--accent-blue)" />
        <circle cx="370" cy="113" r="4" fill="var(--accent-blue)" />
        <circle cx="450" cy="124" r="4" fill="var(--accent-blue)" />

        <!-- Diesel line -->
        <path d="M 50 155 L 130 166 L 210 181 L 290 202 L 370 223 L 450 239" fill="none" stroke="var(--accent-rose)" stroke-width="3" stroke-linecap="round" />
        <circle cx="50" cy="155" r="4" fill="var(--accent-rose)" />
        <circle cx="130" cy="166" r="4" fill="var(--accent-rose)" />
        <circle cx="210" cy="181" r="4" fill="var(--accent-rose)" />
        <circle cx="290" cy="202" r="4" fill="var(--accent-rose)" />
        <circle cx="370" cy="223" r="4" fill="var(--accent-rose)" />
        <circle cx="450" cy="239" r="4" fill="var(--accent-rose)" />

        <!-- Electric line -->
        <path d="M 50 250 L 130 244 L 210 234 L 290 208 L 370 134 L 450 71" fill="none" stroke="var(--accent-emerald)" stroke-width="3" stroke-linecap="round" />
        <circle cx="50" cy="250" r="4" fill="var(--accent-emerald)" />
        <circle cx="130" cy="244" r="4" fill="var(--accent-emerald)" />
        <circle cx="210" cy="234" r="4" fill="var(--accent-emerald)" />
        <circle cx="290" cy="208" r="4" fill="var(--accent-emerald)" />
        <circle cx="370" cy="134" r="4" fill="var(--accent-emerald)" />
        <circle cx="450" cy="71" r="4" fill="var(--accent-emerald)" />
      </svg>
      <!-- Legend -->
      <div style="display: flex; gap: 15px; margin-top: 10px; font-size: 0.76rem;">
        <span style="display: inline-flex; align-items: center; gap: 5px;"><span style="display: inline-block; width: 12px; height: 3px; background: var(--accent-blue);"></span> Petrol</span>
        <span style="display: inline-flex; align-items: center; gap: 5px;"><span style="display: inline-block; width: 12px; height: 3px; background: var(--accent-rose);"></span> Diesel</span>
        <span style="display: inline-flex; align-items: center; gap: 5px;"><span style="display: inline-block; width: 12px; height: 3px; background: var(--accent-emerald);"></span> Electric</span>
      </div>
    </div>
  `;
}

function getElectricityConsumptionBarSVG() {
  return `
    <div class="task1-graphic-container" style="margin: 15px 0; display: flex; flex-direction: column; align-items: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; width: 100%;">
      <h4 style="margin-top: 0; margin-bottom: 12px; font-size: 0.9rem; color: var(--text-primary); text-align: center;">Average Household Electricity Consumption (2024)</h4>
      <svg viewBox="0 0 500 300" style="width: 100%; max-width: 450px; overflow: visible;">
        <!-- Gridlines -->
        <line x1="50" y1="50" x2="450" y2="50" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3,3" />
        <line x1="50" y1="100" x2="450" y2="100" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3,3" />
        <line x1="50" y1="150" x2="450" y2="150" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3,3" />
        <line x1="50" y1="200" x2="450" y2="200" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3,3" />
        <line x1="50" y1="250" x2="450" y2="250" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />

        <!-- Y-Axis Labels -->
        <text x="40" y="55" fill="var(--text-tertiary)" font-size="10" text-anchor="end">15,000</text>
        <text x="40" y="105" fill="var(--text-tertiary)" font-size="10" text-anchor="end">10,000</text>
        <text x="40" y="155" fill="var(--text-tertiary)" font-size="10" text-anchor="end">7,500</text>
        <text x="40" y="205" fill="var(--text-tertiary)" font-size="10" text-anchor="end">5,000</text>
        <text x="40" y="255" fill="var(--text-tertiary)" font-size="10" text-anchor="end">0 kWh</text>

        <!-- X-Axis Countries -->
        <text x="90" y="270" fill="var(--text-secondary)" font-size="10" font-weight="600" text-anchor="middle">USA</text>
        <text x="170" y="270" fill="var(--text-secondary)" font-size="10" font-weight="600" text-anchor="middle">Germany</text>
        <text x="250" y="270" fill="var(--text-secondary)" font-size="10" font-weight="600" text-anchor="middle">Japan</text>
        <text x="330" y="270" fill="var(--text-secondary)" font-size="10" font-weight="600" text-anchor="middle">Brazil</text>
        <text x="410" y="270" fill="var(--text-secondary)" font-size="10" font-weight="600" text-anchor="middle">India</text>

        <!-- Bars -->
        <rect x="70" y="90" width="40" height="160" fill="url(#grad-blue)" rx="3" />
        <text x="90" y="80" fill="var(--text-primary)" font-size="10" font-weight="bold" text-anchor="middle">12,000</text>

        <rect x="150" y="163" width="40" height="87" fill="url(#grad-orange)" rx="3" />
        <text x="170" y="153" fill="var(--text-primary)" font-size="10" font-weight="bold" text-anchor="middle">6,500</text>

        <rect x="230" y="170" width="40" height="80" fill="url(#grad-purple)" rx="3" />
        <text x="250" y="160" fill="var(--text-primary)" font-size="10" font-weight="bold" text-anchor="middle">6,000</text>

        <rect x="310" y="190" width="40" height="60" fill="url(#grad-emerald)" rx="3" />
        <text x="330" y="180" fill="var(--text-primary)" font-size="10" font-weight="bold" text-anchor="middle">4,500</text>

        <rect x="390" y="210" width="40" height="40" fill="url(#grad-rose)" rx="3" />
        <text x="410" y="200" fill="var(--text-primary)" font-size="10" font-weight="bold" text-anchor="middle">3,000</text>

        <!-- Gradients Definitions -->
        <defs>
          <linearGradient id="grad-blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="100%" stop-color="#1d4ed8" />
          </linearGradient>
          <linearGradient id="grad-orange" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#f97316" />
            <stop offset="100%" stop-color="#c2410c" />
          </linearGradient>
          <linearGradient id="grad-purple" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#a855f7" />
            <stop offset="100%" stop-color="#7e22ce" />
          </linearGradient>
          <linearGradient id="grad-emerald" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#10b981" />
            <stop offset="100%" stop-color="#047857" />
          </linearGradient>
          <linearGradient id="grad-rose" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#f43f5e" />
            <stop offset="100%" stop-color="#be123c" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  `;
}

function getBrickProcessSVG() {
  return `
    <div class="task1-graphic-container" style="margin: 15px 0; display: flex; flex-direction: column; align-items: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; width: 100%;">
      <h4 style="margin-top: 0; margin-bottom: 12px; font-size: 0.9rem; color: var(--text-primary); text-align: center;">Brick Manufacturing Process Flow</h4>
      <svg viewBox="0 0 520 280" style="width: 100%; max-width: 480px; overflow: visible;">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.4)" />
          </marker>
        </defs>

        <!-- Step 1 -->
        <rect x="10" y="30" width="100" height="50" fill="rgba(255,255,255,0.03)" stroke="var(--accent-blue)" stroke-width="1.5" rx="5" />
        <text x="60" y="50" fill="var(--text-primary)" font-size="10" font-weight="bold" text-anchor="middle">1. Excavation</text>
        <text x="60" y="65" fill="var(--text-tertiary)" font-size="9" text-anchor="middle">Dig Clay from Earth</text>

        <line x1="110" y1="55" x2="140" y2="55" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" marker-end="url(#arrow)" />

        <!-- Step 2 -->
        <rect x="140" y="30" width="100" height="50" fill="rgba(255,255,255,0.03)" stroke="var(--accent-blue)" stroke-width="1.5" rx="5" />
        <text x="190" y="50" fill="var(--text-primary)" font-size="10" font-weight="bold" text-anchor="middle">2. Mixing</text>
        <text x="190" y="65" fill="var(--text-tertiary)" font-size="9" text-anchor="middle">+ Sand & Water</text>

        <line x1="240" y1="55" x2="270" y2="55" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" marker-end="url(#arrow)" />

        <!-- Step 3 -->
        <rect x="270" y="30" width="100" height="50" fill="rgba(255,255,255,0.03)" stroke="var(--accent-blue)" stroke-width="1.5" rx="5" />
        <text x="320" y="50" fill="var(--text-primary)" font-size="10" font-weight="bold" text-anchor="middle">3. Molding</text>
        <text x="320" y="65" fill="var(--text-tertiary)" font-size="9" text-anchor="middle">Mold or Wire Cut</text>

        <line x1="370" y1="55" x2="400" y2="55" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" marker-end="url(#arrow)" />

        <!-- Step 4 -->
        <rect x="400" y="30" width="110" height="50" fill="rgba(255,255,255,0.03)" stroke="var(--accent-purple)" stroke-width="1.5" rx="5" />
        <text x="455" y="50" fill="var(--text-primary)" font-size="10" font-weight="bold" text-anchor="middle">4. Drying Kiln</text>
        <text x="455" y="65" fill="var(--text-tertiary)" font-size="9" text-anchor="middle">24-48 Hours</text>

        <path d="M 455 80 L 455 120 L 410 120" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" marker-end="url(#arrow)" />

        <!-- Step 5 -->
        <rect x="300" y="95" width="110" height="50" fill="rgba(255,255,255,0.03)" stroke="var(--accent-rose)" stroke-width="1.5" rx="5" />
        <text x="355" y="112" fill="var(--text-primary)" font-size="10" font-weight="bold" text-anchor="middle">5. Firing Ovens</text>
        <text x="355" y="127" fill="var(--text-tertiary)" font-size="9" text-anchor="middle">High Temp: 1300°C</text>

        <line x1="300" y1="120" x2="270" y2="120" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" marker-end="url(#arrow)" />

        <!-- Step 6 -->
        <rect x="140" y="95" width="130" height="50" fill="rgba(255,255,255,0.03)" stroke="var(--accent-emerald)" stroke-width="1.5" rx="5" />
        <text x="205" y="112" fill="var(--text-primary)" font-size="10" font-weight="bold" text-anchor="middle">6. Cooling & Pallets</text>
        <text x="205" y="127" fill="var(--text-tertiary)" font-size="9" text-anchor="middle">24-72h Gradual Cool</text>

        <line x1="140" y1="120" x2="110" y2="120" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" marker-end="url(#arrow)" />

        <!-- Step 7 -->
        <rect x="10" y="95" width="100" height="50" fill="rgba(255,255,255,0.03)" stroke="var(--accent-emerald)" stroke-width="1.5" rx="5" />
        <text x="60" y="112" fill="var(--text-primary)" font-size="10" font-weight="bold" text-anchor="middle">7. Transport</text>
        <text x="60" y="127" fill="var(--text-tertiary)" font-size="9" text-anchor="middle">Ship to Distributors</text>
      </svg>
    </div>
  `;
}

function renderDynamicLineGraph(g) {
  const s1 = g.labels[0];
  const s2 = g.labels[1];
  const s3 = g.labels[2];
  
  return `
    <div class="task1-graphic-container" style="margin: 15px 0; display: flex; flex-direction: column; align-items: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; width: 100%;">
      <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary); margin-bottom: 10px;">Line Graph: ${s1}, ${s2}, and ${s3} (${g.years[0]}-${g.years[2]})</span>
      <svg viewBox="0 0 500 220" style="width: 100%; max-width: 500px; height: auto;">
        <!-- Gridlines -->
        <line x1="50" y1="30" x2="470" y2="30" stroke="rgba(255,255,255,0.05)" />
        <line x1="50" y1="70" x2="470" y2="70" stroke="rgba(255,255,255,0.05)" />
        <line x1="50" y1="110" x2="470" y2="110" stroke="rgba(255,255,255,0.05)" />
        <line x1="50" y1="150" x2="470" y2="150" stroke="rgba(255,255,255,0.05)" />
        
        <!-- Axes -->
        <line x1="50" y1="170" x2="470" y2="170" stroke="var(--text-secondary)" stroke-width="1.5" />
        <line x1="50" y1="30" x2="50" y2="170" stroke="var(--text-secondary)" stroke-width="1.5" />
        
        <!-- Y-Axis Labels -->
        <text x="40" y="35" fill="var(--text-tertiary)" font-size="9" text-anchor="end">150</text>
        <text x="40" y="75" fill="var(--text-tertiary)" font-size="9" text-anchor="end">100</text>
        <text x="40" y="115" fill="var(--text-tertiary)" font-size="9" text-anchor="end">50</text>
        <text x="40" y="155" fill="var(--text-tertiary)" font-size="9" text-anchor="end">20</text>
        <text x="40" y="175" fill="var(--text-tertiary)" font-size="9" text-anchor="end">0</text>
        
        <!-- X-Axis Labels -->
        <text x="50" y="188" fill="var(--text-secondary)" font-size="9" text-anchor="middle">${g.years[0]}</text>
        <text x="260" y="188" fill="var(--text-secondary)" font-size="9" text-anchor="middle">${g.years[1]}</text>
        <text x="470" y="188" fill="var(--text-secondary)" font-size="9" text-anchor="middle">${g.years[2]}</text>
        
        <!-- Line 1: Strong Increase (s1) -->
        <path d="M 50 150 L 260 90 L 470 30" fill="none" stroke="var(--accent-emerald)" stroke-width="3" />
        <circle cx="50" cy="150" r="4" fill="var(--accent-emerald)" />
        <circle cx="260" cy="90" r="4" fill="var(--accent-emerald)" />
        <circle cx="470" cy="30" r="4" fill="var(--accent-emerald)" />
        
        <!-- Line 2: Strong Decrease (s2) -->
        <path d="M 50 50 L 260 110 L 470 154" fill="none" stroke="var(--accent-rose)" stroke-width="3" />
        <circle cx="50" cy="50" r="4" fill="var(--accent-rose)" />
        <circle cx="260" cy="110" r="4" fill="var(--accent-rose)" />
        <circle cx="470" cy="154" r="4" fill="var(--accent-rose)" />
        
        <!-- Line 3: Flat/Fluctuating (s3) -->
        <path d="M 50 120 L 155 110 L 260 130 L 365 110 L 470 125" fill="none" stroke="var(--accent-blue)" stroke-width="3" />
        <circle cx="50" cy="120" r="4" fill="var(--accent-blue)" />
        <circle cx="260" cy="130" r="4" fill="var(--accent-blue)" />
        <circle cx="470" cy="125" r="4" fill="var(--accent-blue)" />
      </svg>
      <!-- Legend -->
      <div style="display: flex; gap: 15px; margin-top: 10px; font-size: 0.78rem;">
        <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 12px; height: 3px; background: var(--accent-emerald); display: inline-block;"></span> ${s1}</span>
        <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 12px; height: 3px; background: var(--accent-rose); display: inline-block;"></span> ${s2}</span>
        <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 12px; height: 3px; background: var(--accent-blue); display: inline-block;"></span> ${s3}</span>
      </div>
      <span style="font-size: 0.7rem; color: var(--text-tertiary); margin-top: 5px;">Y-axis unit: ${g.unit}</span>
    </div>
  `;
}

function renderDynamicBarChart(g) {
  return `
    <div class="task1-graphic-container" style="margin: 15px 0; display: flex; flex-direction: column; align-items: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; width: 100%;">
      <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary); margin-bottom: 10px;">Bar Chart: Comparative Distribution</span>
      <svg viewBox="0 0 500 220" style="width: 100%; max-width: 500px; height: auto;">
        <!-- Gridlines -->
        <line x1="50" y1="30" x2="470" y2="30" stroke="rgba(255,255,255,0.05)" />
        <line x1="50" y1="70" x2="470" y2="70" stroke="rgba(255,255,255,0.05)" />
        <line x1="50" y1="110" x2="470" y2="110" stroke="rgba(255,255,255,0.05)" />
        <line x1="50" y1="150" x2="470" y2="150" stroke="rgba(255,255,255,0.05)" />
        
        <!-- Axes -->
        <line x1="50" y1="170" x2="470" y2="170" stroke="var(--text-secondary)" stroke-width="1.5" />
        <line x1="50" y1="30" x2="50" y2="170" stroke="var(--text-secondary)" stroke-width="1.5" />
        
        <!-- Bars (5 items) -->
        <!-- Bar 1: Peak -->
        <rect x="75" y="40" width="45" height="130" fill="rgba(192, 132, 252, 0.15)" stroke="var(--accent-purple)" stroke-width="1.5" rx="3" />
        <text x="97" y="185" fill="var(--text-secondary)" font-size="8" text-anchor="middle">${g.labels[0]}</text>
        
        <!-- Bar 2 -->
        <rect x="155" y="80" width="45" height="90" fill="rgba(56, 189, 248, 0.15)" stroke="var(--accent-blue)" stroke-width="1.5" rx="3" />
        <text x="177" y="185" fill="var(--text-secondary)" font-size="8" text-anchor="middle">${g.labels[1]}</text>
        
        <!-- Bar 3 -->
        <rect x="235" y="90" width="45" height="80" fill="rgba(56, 189, 248, 0.15)" stroke="var(--accent-blue)" stroke-width="1.5" rx="3" />
        <text x="257" y="185" fill="var(--text-secondary)" font-size="8" text-anchor="middle">${g.labels[2]}</text>
        
        <!-- Bar 4 -->
        <rect x="315" y="115" width="45" height="55" fill="rgba(16, 185, 129, 0.15)" stroke="var(--accent-emerald)" stroke-width="1.5" rx="3" />
        <text x="337" y="185" fill="var(--text-secondary)" font-size="8" text-anchor="middle">${g.labels[3]}</text>
        
        <!-- Bar 5 -->
        <rect x="395" y="140" width="45" height="30" fill="rgba(244, 63, 94, 0.15)" stroke="var(--accent-rose)" stroke-width="1.5" rx="3" />
        <text x="417" y="185" fill="var(--text-secondary)" font-size="8" text-anchor="middle">${g.labels[4]}</text>
      </svg>
      <span style="font-size: 0.7rem; color: var(--text-tertiary); margin-top: 5px;">Y-axis unit: ${g.unit}</span>
    </div>
  `;
}

function renderDynamicPieChart(g) {
  const s1 = g.labels[0];
  const s2 = g.labels[1];
  const s3 = g.labels[2];
  const s4 = g.labels[3];
  const s5 = g.labels[4];
  
  return `
    <div class="task1-graphic-container" style="margin: 15px 0; display: flex; flex-direction: column; align-items: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; width: 100%;">
      <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary); margin-bottom: 12px;">Pie Charts: Sector Shares (${g.yr1} vs ${g.yr2})</span>
      <div style="display: flex; gap: 40px; justify-content: center; width: 100%; max-width: 400px; margin-bottom: 12px;">
        <!-- Pie 1 -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <strong style="font-size: 0.8rem; color: var(--text-secondary);">${g.yr1}</strong>
          <svg viewBox="0 0 100 100" style="width: 100px; height: 100px;">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="12" />
            <!-- s3 (35%) -->
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent-blue)" stroke-width="12" stroke-dasharray="88 251.2" stroke-dashoffset="0" transform="rotate(-90 50 50)" />
            <!-- s2 (25%) -->
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent-emerald)" stroke-width="12" stroke-dasharray="62.8 251.2" stroke-dashoffset="-88" transform="rotate(-90 50 50)" />
            <!-- s1 (15%) -->
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent-purple)" stroke-width="12" stroke-dasharray="37.7 251.2" stroke-dashoffset="-150.8" transform="rotate(-90 50 50)" />
            <!-- s4 (15%) -->
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent-rose)" stroke-width="12" stroke-dasharray="37.7 251.2" stroke-dashoffset="-188.5" transform="rotate(-90 50 50)" />
            <!-- s5 (10%) -->
            <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" stroke-width="12" stroke-dasharray="25 251.2" stroke-dashoffset="-226.2" transform="rotate(-90 50 50)" />
          </svg>
        </div>
        <!-- Pie 2 -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <strong style="font-size: 0.8rem; color: var(--text-secondary);">${g.yr2}</strong>
          <svg viewBox="0 0 100 100" style="width: 100px; height: 100px;">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="12" />
            <!-- s1 (30%) -->
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent-purple)" stroke-width="12" stroke-dasharray="75.3 251.2" stroke-dashoffset="0" transform="rotate(-90 50 50)" />
            <!-- s2 (28%) -->
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent-emerald)" stroke-width="12" stroke-dasharray="70.3 251.2" stroke-dashoffset="-75.3" transform="rotate(-90 50 50)" />
            <!-- s3 (12%) -->
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent-blue)" stroke-width="12" stroke-dasharray="30.1 251.2" stroke-dashoffset="-145.6" transform="rotate(-90 50 50)" />
            <!-- s4 (15%) -->
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent-rose)" stroke-width="12" stroke-dasharray="37.7 251.2" stroke-dashoffset="-175.7" transform="rotate(-90 50 50)" />
            <!-- s5 (15%) -->
            <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" stroke-width="12" stroke-dasharray="37.8 251.2" stroke-dashoffset="-213.4" transform="rotate(-90 50 50)" />
          </svg>
        </div>
      </div>
      <!-- Legend -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px 15px; font-size: 0.74rem; width: 100%; max-width: 380px;">
        <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 10px; height: 10px; background: var(--accent-purple); border-radius: 2px;"></span> ${s1}</span>
        <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 10px; height: 10px; background: var(--accent-emerald); border-radius: 2px;"></span> ${s2}</span>
        <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 10px; height: 10px; background: var(--accent-blue); border-radius: 2px;"></span> ${s3}</span>
        <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 10px; height: 10px; background: var(--accent-rose); border-radius: 2px;"></span> ${s4}</span>
        <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 10px; height: 10px; background: #f59e0b; border-radius: 2px;"></span> ${s5}</span>
      </div>
    </div>
  `;
}

function renderDynamicTable(g) {
  const getVal = (rowIdx, colName) => {
    const col = colName.toLowerCase();
    if (col.includes('journey') || col.includes('member') || col.includes('enrolled') || col.includes('attendee') || col.includes('visitor') || col.includes('fleet') || col.includes('waste') || col.includes('cups')) {
      return [ "2,500", "1,800", "1,200", "400" ][rowIdx];
    }
    if (col.includes('punctuality') || col.includes('rate') || col.includes('ratio') || col.includes('%') || col.includes('expectancy')) {
      return [ "92%", "88%", "78%", "45%" ][rowIdx];
    }
    if (col.includes('revenue') || col.includes('income') || col.includes('cost') || col.includes('fee') || col.includes('funding')) {
      return [ "$120k", "$85k", "$60k", "$15k" ][rowIdx];
    }
    return [ "850", "600", "450", "150" ][rowIdx];
  };

  return `
    <div class="task1-graphic-container" style="margin: 15px 0; display: flex; flex-direction: column; align-items: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; width: 100%;">
      <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary); margin-bottom: 10px;">Data Table: Comparative Overview</span>
      <table class="strategy-table" style="margin: 0; width: 100%;">
        <thead>
          <tr>
            <th>Group / Category</th>
            ${g.cols.map(c => `<th>${c}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${g.groups.map((group, rIdx) => `
            <tr>
              <td style="font-weight: 600; color: var(--text-primary);">${group}</td>
              ${g.cols.map(c => `<td>${getVal(rIdx, c)}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderDynamicProcessDiagram(g) {
  return `
    <div class="task1-graphic-container" style="margin: 15px 0; display: flex; flex-direction: column; align-items: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; width: 100%;">
      <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary); margin-bottom: 12px;">Process Flow Diagram</span>
      <div style="display: flex; flex-direction: column; gap: 8px; width: 100%; max-width: 450px;">
        ${g.steps.map((step, idx) => `
          <div style="display: flex; align-items: center; width: 100%;">
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--accent-purple); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: bold; flex-shrink: 0;">${idx + 1}</div>
            <div style="margin-left: 10px; flex-grow: 1; padding: 8px 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 6px; font-size: 0.8rem; color: var(--text-secondary); font-weight: 600;">
              ${step.charAt(0).toUpperCase() + step.slice(1)}
            </div>
          </div>
          ${idx < g.steps.length - 1 ? `
            <div style="padding-left: 10px; height: 15px; display: flex; align-items: center;">
              <div style="width: 2px; height: 100%; background: rgba(255,255,255,0.15);"></div>
            </div>
          ` : ''}
        `).join('')}
      </div>
    </div>
  `;
}

function renderDynamicMap(g) {
  return `
    <div class="task1-graphic-container" style="margin: 15px 0; display: flex; flex-direction: column; align-items: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; width: 100%;">
      <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary); margin-bottom: 12px;">Map Comparison: Before vs After Redevelopment</span>
      
      <div style="display: flex; gap: 20px; justify-content: center; width: 100%; max-width: 480px; margin-bottom: 12px;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <span style="font-size: 0.78rem; font-weight: 600; color: var(--text-secondary);">Original Layout</span>
          <div style="width: 100%; height: 120px; background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.1); border-radius: 6px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-size: 0.65rem;">
            <div style="position: absolute; left: 10px; top: 10px; width: 40%; height: 40px; background: rgba(52, 211, 153, 0.1); border: 1px solid var(--accent-emerald); display: flex; align-items: center; justify-content: center; color: var(--accent-emerald); text-align: center;">Green Fields</div>
            <div style="position: absolute; right: 10px; top: 10px; width: 40%; height: 40px; background: rgba(244, 63, 94, 0.1); border: 1px solid var(--accent-rose); display: flex; align-items: center; justify-content: center; color: var(--accent-rose); text-align: center;">Industrial Area</div>
            <div style="position: absolute; bottom: 10px; left: 10px; width: 88%; height: 20px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: var(--text-secondary);">Main Access Road</div>
          </div>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <span style="font-size: 0.78rem; font-weight: 600; color: var(--text-secondary);">Proposed Layout</span>
          <div style="width: 100%; height: 120px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-size: 0.65rem;">
            <div style="position: absolute; left: 10px; top: 10px; width: 40%; height: 40px; background: rgba(56, 189, 248, 0.1); border: 1px solid var(--accent-blue); display: flex; align-items: center; justify-content: center; color: var(--accent-blue); text-align: center;">Housing Estate</div>
            <div style="position: absolute; right: 10px; top: 10px; width: 40%; height: 40px; background: rgba(192, 132, 252, 0.1); border: 1px solid var(--accent-purple); display: flex; align-items: center; justify-content: center; color: var(--accent-purple); text-align: center;">Public Park</div>
            <div style="position: absolute; bottom: 10px; left: 10px; width: 88%; height: 20px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: var(--text-secondary); border-top: 2px solid var(--accent-emerald);">Pedestrian Walkway</div>
          </div>
        </div>
      </div>
      
      <div style="width: 100%; text-align: left;">
        <span style="font-size: 0.7rem; font-weight: 600; color: var(--text-tertiary); text-transform: uppercase;">Key Changes:</span>
        <ul style="margin: 4px 0 0 0; padding-left: 15px; font-size: 0.72rem; color: var(--text-secondary); line-height: 1.4;">
          ${g.changes.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

function getTask1GraphicHtml(essayOrIdOrIndex) {
  let essay = null;
  if (essayOrIdOrIndex && typeof essayOrIdOrIndex === 'object') {
    essay = essayOrIdOrIndex;
  } else {
    let id = '';
    const val = String(essayOrIdOrIndex);
    if (val === '0' || val === 'task1-essay-1') id = 'task1-essay-1';
    else if (val === '1' || val === 'task1-essay-16') id = 'task1-essay-16';
    else if (val === '2' || val === 'task1-essay-61') id = 'task1-essay-61';
    else if (val === '3' || val === 'task1-essay-81') id = 'task1-essay-81';
    else if (val === '4' || val === 'task1-essay-96') id = 'task1-essay-96';
    else id = val;
    
    essay = TASK1_ESSAYS.find(e => e.id === id);
  }

  if (essay && essay.graphicData) {
    const gd = essay.graphicData;
    if (gd.type === 'line') return renderDynamicLineGraph(gd);
    if (gd.type === 'bar') return renderDynamicBarChart(gd);
    if (gd.type === 'pie') return renderDynamicPieChart(gd);
    if (gd.type === 'table') return renderDynamicTable(gd);
    if (gd.type === 'diagram') return renderDynamicProcessDiagram(gd);
    if (gd.type === 'map') return renderDynamicMap(gd);
  }

  if (essay && essay.category === 'Letter') {
    const idNum = parseInt(essay.id.replace('task1-essay-', ''));
    if ((idNum >= 81 && idNum <= 90) || (essay.type && essay.type.includes('Formal'))) {
      return `
        <div style="margin: 12px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; display: flex; align-items: center; gap: 15px; width: 100%;">
          <span style="font-size: 2rem;">✉️</span>
          <div>
            <strong style="color: var(--accent-purple); font-size: 0.85rem; display: block;">Formal Letter Format Required</strong>
            <span style="font-size: 0.78rem; color: var(--text-secondary);">Structure: Salutation, Opening, 3 Bullet points details, Action requested, Sign-off (Yours sincerely).</span>
          </div>
        </div>
      `;
    } else if ((idNum >= 91 && idNum <= 95) || (essay.type && essay.type.includes('Semi-Formal'))) {
      return `
        <div style="margin: 12px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; display: flex; align-items: center; gap: 15px; width: 100%;">
          <span style="font-size: 2rem;">💼</span>
          <div>
            <strong style="color: var(--accent-blue); font-size: 0.85rem; display: block;">Semi-Formal Letter Format Required</strong>
            <span style="font-size: 0.78rem; color: var(--text-secondary);">Structure: Polite salutation (Dear Mr./Ms. Surname), clear work/context opening, detailed body, polite sign-off (Sincerely).</span>
          </div>
        </div>
      `;
    } else {
      return `
        <div style="margin: 12px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; display: flex; align-items: center; gap: 15px; width: 100%;">
          <span style="font-size: 2rem;">🏡</span>
          <div>
            <strong style="color: var(--accent-emerald); font-size: 0.85rem; display: block;">Informal Letter Format Required</strong>
            <span style="font-size: 0.78rem; color: var(--text-secondary);">Structure: Informal greeting (Hi [First Name]), friendly opening, conversational bullet details, warm sign-off (Best wishes).</span>
          </div>
        </div>
      `;
    }
  }

  return '';
}

// Local state
let currentTaskMode = 'task2'; // 'task1' or 'task2'
let activeTab = 'lessons'; // 'lessons', 'library', 'sandbox'
let currentLessonIndex = 0;
let currentEssayIndex = 0;
let currentSandboxPromptIndex = 0;
let isPeelHighlighted = false;
let userAnswers = {}; // { lessonId: answer }
let jumbledSelection = []; // Used for Module 2 PEEL game order

let filterCategory = 'all';
let filterType = 'all';
let sortBy = 'default';

let timerSeconds = 40 * 60; // 40 minutes default (Task 2)
let timerInterval = null;
let timerRunning = false;

function renderWritingAcademy() {
  const page = $('#page-writing-academy');
  if (!page) return;

  page.innerHTML = `
    <div class="page-header">
      <div class="page-header-content" style="display: flex; justify-content: space-between; align-items: center; width: 100%; flex-wrap: wrap; gap: var(--space-md);">
        <div>
          <h2 class="page-title">IELTS Writing Academy</h2>
          <p class="page-subtitle">Learn IELTS writing step-by-step, designed specifically for absolute beginners</p>
        </div>
        <!-- Task Mode Toggle Switcher -->
        <div class="task-mode-toggle-container">
          <button class="task-mode-btn ${currentTaskMode === 'task1' ? 'active' : ''}" id="btn-mode-task1">Task 1 (Reports & Letters)</button>
          <button class="task-mode-btn ${currentTaskMode === 'task2' ? 'active' : ''}" id="btn-mode-task2">Task 2 (Essays)</button>
        </div>
      </div>
    </div>

    <div class="strategy-tabs">
      <button class="strategy-tab ${activeTab === 'lessons' ? 'active' : ''}" id="tab-lessons">
        <span class="strategy-tab-icon">🎓</span>
        <span class="strategy-tab-label">${currentTaskMode === 'task1' ? 'Task 1 Lessons' : 'Step-by-Step Lessons'}</span>
      </button>
      <button class="strategy-tab ${activeTab === 'library' ? 'active' : ''}" id="tab-library">
        <span class="strategy-tab-icon">📚</span>
        <span class="strategy-tab-label">${currentTaskMode === 'task1' ? 'Model Answers Library' : 'Model Essays Library'}</span>
      </button>
      <button class="strategy-tab ${activeTab === 'sandbox' ? 'active' : ''}" id="tab-sandbox">
        <span class="strategy-tab-icon">✍️</span>
        <span class="strategy-tab-label">Practice Sandbox</span>
      </button>
    </div>

    <div class="writing-academy-content" id="writing-academy-container">
      ${activeTab === 'lessons' ? renderLessonsLayout() : activeTab === 'library' ? renderLibraryLayout() : renderSandboxLayout()}
    </div>
  `;

  // Bind Task Switchers
  const modeTask1Btn = $('#btn-mode-task1');
  const modeTask2Btn = $('#btn-mode-task2');

  if (modeTask1Btn) {
    modeTask1Btn.addEventListener('click', () => {
      if (currentTaskMode !== 'task1') {
        currentTaskMode = 'task1';
        currentLessonIndex = 0;
        currentEssayIndex = 0;
        currentSandboxPromptIndex = 0;
        filterCategory = 'all';
        filterType = 'all';
        if (!timerRunning) {
          timerSeconds = 20 * 60;
        }
        renderWritingAcademy();
      }
    });
  }

  if (modeTask2Btn) {
    modeTask2Btn.addEventListener('click', () => {
      if (currentTaskMode !== 'task2') {
        currentTaskMode = 'task2';
        currentLessonIndex = 0;
        currentEssayIndex = 0;
        currentSandboxPromptIndex = 0;
        filterCategory = 'all';
        filterType = 'all';
        if (!timerRunning) {
          timerSeconds = 40 * 60;
        }
        renderWritingAcademy();
      }
    });
  }

  // Bind top tabs
  $('#tab-lessons').addEventListener('click', () => {
    activeTab = 'lessons';
    renderWritingAcademy();
  });
  $('#tab-library').addEventListener('click', () => {
    activeTab = 'library';
    renderWritingAcademy();
  });
  $('#tab-sandbox').addEventListener('click', () => {
    activeTab = 'sandbox';
    renderWritingAcademy();
  });

  if (activeTab === 'lessons') {
    bindLessonsEvents();
  } else if (activeTab === 'library') {
    bindLibraryEvents();
  } else {
    bindSandboxEvents();
  }
}

// ============================================================================
// 1. Lessons Renderer & Event Binder
// ============================================================================
function renderLessonsLayout() {
  const activeLessons = currentTaskMode === 'task1' ? TASK1_LESSONS : LESSONS;
  const lesson = activeLessons[currentLessonIndex] || activeLessons[0];
  const isLast = currentLessonIndex === activeLessons.length - 1;
  const isFirst = currentLessonIndex === 0;

  return `
    <div class="lessons-main-grid">
      <!-- Lesson Navigation Sidebar -->
      <div class="card lessons-sidebar">
        <h3 class="lessons-sidebar-title">Modules</h3>
        <div class="lessons-sidebar-list">
          ${activeLessons.map((l, i) => `
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
            <textarea class="exercise-textarea" id="exercise-input" placeholder="${lesson.exercise.placeholder || 'Type your answer here...'}">${userAnswers[lesson.id] || ''}</textarea>
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
  const activeLessons = currentTaskMode === 'task1' ? TASK1_LESSONS : LESSONS;
  const lesson = activeLessons[currentLessonIndex] || activeLessons[0];

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
      if (currentLessonIndex < activeLessons.length - 1) {
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
    // Handle jumbled sentence reordering game (Task 2 PEEL only)
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
          feedback.innerHTML = `🎉 <strong>Perfect!</strong> You correctly structured the PEEL paragraph.<br><br>
                                 • <strong>Point:</strong> Firstly, distance education offers convenience...<br>
                                 • <strong>Explanation:</strong> This flexibility allows pacing...<br>
                                 • <strong>Example:</strong> For instance, virtual courses let employees study late...<br>
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
  const activeLessons = currentTaskMode === 'task1' ? TASK1_LESSONS : LESSONS;
  const sidebarItems = $$('.lesson-sidebar-item');
  sidebarItems.forEach(item => {
    const idx = parseInt(item.dataset.index);
    const l = activeLessons[idx];
    if (l && state.vocabLearned.includes(`lesson_${l.id}`)) {
      item.classList.add('completed');
      item.querySelector('.lesson-sidebar-status').textContent = 'Completed ✓';
    }
  });
}

// ============================================================================
// 2. Model Essays Library Tab & Sentence Analyzer
// ============================================================================
function getSentenceAnalysis(essay, type, paraId, text) {
  const features = [];
  const lowerText = text.toLowerCase();

  // 1. Conjunction / Clause checks
  if (lowerText.includes('although') || lowerText.includes('even though')) {
    features.push({
      title: "Concession Clause (Complex Sentence)",
      desc: "Uses 'although' or 'even though' to express concession. This structure presents contrasting arguments in a single cohesive sentence, boosting grammatical range."
    });
  } else if (lowerText.includes('while') || lowerText.includes('whereas')) {
    features.push({
      title: "Contrast Clause (Complex Sentence)",
      desc: "Uses 'while' or 'whereas' to contrast two viewpoints side-by-side. Excellent for balanced essays."
    });
  } else if (lowerText.includes('because') || lowerText.includes('since') || lowerText.includes('as a result of')) {
    features.push({
      title: "Reasoning Clause (Complex Sentence)",
      desc: "Uses causal conjunctions like 'because' or 'since' to anchor logical explanations. Vital for Coherence and Cohesion."
    });
  } else if (lowerText.includes('unless') || lowerText.includes('if ')) {
    features.push({
      title: "Conditional Clause (Complex Sentence)",
      desc: "Uses conditional relationships ('unless', 'if') to project consequences and hypothetical outcomes, showing sophisticated grammar."
    });
  }

  // 2. Passive Voice
  if (lowerText.includes('is argued') || lowerText.includes('are argued') || lowerText.includes('is debated') || lowerText.includes('be mitigated') || lowerText.includes('be closing') || lowerText.includes('be avoided') || lowerText.includes('be solved') || lowerText.includes('be sustained') || lowerText.includes('be reduced') || lowerText.includes('is believed') || lowerText.includes('are believed') || lowerText.includes('are closed')) {
    features.push({
      title: "Academic Passive Voice",
      desc: "Uses passive verbs (e.g., 'is debated', 'be mitigated') to shift emphasis from the actor to the topic. This establishes a highly objective, academic tone."
    });
  }

  // 3. Cohesive Devices
  if (lowerText.startsWith('on the one hand')) {
    features.push({
      title: "Cohesive Transition (Viewpoint 1)",
      desc: "Starts with the adverbial phrase 'On the one hand' to signal the beginning of the first perspective in a balanced discussion."
    });
  } else if (lowerText.startsWith('on the other hand')) {
    features.push({
      title: "Cohesive Transition (Viewpoint 2)",
      desc: "Transitions using 'On the other hand' to clearly demarcate the author's contrasting perspective."
    });
  } else if (lowerText.includes('for instance') || lowerText.includes('for example') || lowerText.includes('such as')) {
    features.push({
      title: "Illustrative Linker",
      desc: "Introduces concrete proof using 'for example' or 'for instance' to bridge theory with real-world scenarios."
    });
  } else if (lowerText.includes('therefore') || lowerText.includes('consequently') || lowerText.includes('hence') || lowerText.includes('as a result') || lowerText.includes('thus')) {
    features.push({
      title: "Result Marker",
      desc: "Connects reasoning back to the core argument with result particles ('therefore', 'consequently', 'thus'), displaying tight cause-effect chains."
    });
  }

  // 4. Vocabulary matches
  const matchedVocab = essay.vocab.filter(v => text.includes(v.word) || text.includes(v.word.toLowerCase()));
  if (matchedVocab.length > 0) {
    matchedVocab.forEach(v => {
      features.push({
        title: `Academic Vocabulary: "${v.word}"`,
        desc: `Replaces lower-level language with band-boosting vocabulary. Definition: "${v.def}". Elevates your Lexical Resource score.`
      });
    });
  }

  let roleTitle = "";
  let roleDesc = "";
  
  if (currentTaskMode === 'task1') {
    const isLetter = essay.category === 'Letter';
    if (isLetter) {
      if (type === 'intro') {
        roleTitle = "Salutation & Opening Statement";
        roleDesc = "Identifies the recipient and clearly states the primary purpose of the letter (e.g., complaining, requesting help, or inviting a friend).";
      } else if (type === 'conclusion') {
        roleTitle = "Sign-off & Closing Remarks";
        roleDesc = "Politely closes the letter with a standard IELTS sign-off (formal: 'Yours sincerely' or informal: 'Best regards') and name.";
      } else if (paraId === 'body1') {
        if (type === 'point') {
          roleTitle = "Bullet Point 1: Core Issue";
          roleDesc = "Directly addresses the first bullet point from the prompt prompt.";
        } else if (type === 'explanation') {
          roleTitle = "Bullet Point 1: Context & details";
          roleDesc = "Elaborates on the circumstances, cause of the leak, or reasons for writing.";
        } else if (type === 'example') {
          roleTitle = "Bullet Point 1: Impact/Consequence";
          roleDesc = "Shows how the situation has affected your living conditions or family safety.";
        } else {
          roleTitle = "Bullet Point 1: Paragraph closing";
          roleDesc = "Concludes the first point or transitions to the next.";
        }
      } else if (paraId === 'body2') {
        if (type === 'point') {
          roleTitle = "Bullet Point 2/3: Action Required";
          roleDesc = "Specifies what steps you have taken or what you demand from the recipient.";
        } else if (type === 'explanation') {
          roleTitle = "Bullet Point 2/3: Explanation of Demand";
          roleDesc = "Elaborates on the necessity of the request or proposal.";
        } else if (type === 'example') {
          roleTitle = "Bullet Point 2/3: Specific Date/Time";
          roleDesc = "Gives exact information on availability, deadlines, or options.";
        } else {
          roleTitle = "Bullet Point 2/3: Closing Request";
          roleDesc = "Wraps up the body paragraphs before the final sign-off.";
        }
      }
    } else {
      // Academic Reports (Graph, Chart, Diagram)
      if (type === 'intro') {
        roleTitle = "Introduction (Paraphrase)";
        roleDesc = "Rewrites the prompt using synonyms, defining the type of graph, variables measured, and the period of observation.";
      } else if (type === 'conclusion') {
        roleTitle = "Summary / Final Comparison";
        roleDesc = "Wraps up the entire report with a final concluding synthesis summarizing the overall shift shown in the data.";
      } else if (paraId === 'body1') {
        if (type === 'point') {
          roleTitle = "Overview: Main Trend";
          roleDesc = "Highlights the most prominent overall trend, change, or category in the chart. Avoids mentioning specific data values.";
        } else if (type === 'explanation') {
          roleTitle = "Overview: Secondary Trend";
          roleDesc = "Mentions the contrasting or supporting general trend to provide a comprehensive overview. No numbers.";
        } else if (type === 'example') {
          roleTitle = "Overview: Main Comparison";
          roleDesc = "Compares categories at a high level. No specific data numbers.";
        } else {
          roleTitle = "Overview: Summary wrap-up";
          roleDesc = "Concludes the overview paragraph.";
        }
      } else if (paraId === 'body2') {
        if (type === 'point') {
          roleTitle = "Details: Data Point 1";
          roleDesc = "Cites the starting values, positions, or features of the main categories.";
        } else if (type === 'explanation') {
          roleTitle = "Details: Trend Elaboration (with Data)";
          roleDesc = "Describes changes, drops, or increases over time using exact numbers (e.g., plummeted to 20,000).";
        } else if (type === 'example') {
          roleTitle = "Details: Specific Comparison (with Data)";
          roleDesc = "Directly compares two data values at a specific point in time or peak using numbers.";
        } else {
          roleTitle = "Details: Section Conclusion";
          roleDesc = "Wraps up the details section by comparing final outcomes.";
        }
      }
    }
  } else {
    // Task 2 Essays
    if (type === 'point') {
      roleTitle = "P - Point (Topic Sentence)";
      roleDesc = "This is the 'Topic Sentence' of the paragraph. It declares the main argument clearly and objectively, laying the groundwork for the supporting explanation.";
    } else if (type === 'explanation') {
      roleTitle = "E - Explanation / Reasoning";
      roleDesc = "Expands on the main point, explaining *why* or *how* the argument holds true. It displays conceptual depth to the examiner.";
    } else if (type === 'example') {
      roleTitle = "E - Example / Evidence";
      roleDesc = "Injects real-world facts, stats, or scenarios to ground the claim in reality, making the argument persuasive and credible.";
    } else if (type === 'link') {
      roleTitle = "L - Link (Concluding Statement)";
      roleDesc = "Binds the paragraph's analysis back to your thesis statement or prompt question, keeping the essay cohesive and on-topic.";
    } else if (type === 'intro') {
      roleTitle = "Introduction Section";
      roleDesc = "Sets the stage by paraphrasing the prompt using synonyms and shifting clauses, then states your clear thesis statement/opinion.";
    } else if (type === 'conclusion') {
      roleTitle = "Conclusion Section";
      roleDesc = "Summarizes the arguments concisely, restates your opinion, and offers a final predictive or prescriptive thought.";
    }
  }

  return { roleTitle, roleDesc, features };
}

function showSentenceAnalysis(type, paraId) {
  const activeEssays = currentTaskMode === 'task1' ? TASK1_ESSAYS : MODEL_ESSAYS;
  const essay = activeEssays[currentEssayIndex] || activeEssays[0];
  let text = "";
  if (type === 'intro') {
    text = essay.intro;
  } else if (type === 'conclusion') {
    text = essay.conclusion;
  } else {
    text = essay.peelHighlight[paraId][type];
  }

  if (!text) return;

  const analysis = getSentenceAnalysis(essay, type, paraId, text);
  const contentEl = $('#sentence-analysis-content');
  if (!contentEl) return;

  contentEl.innerHTML = `
    <div style="animation: fadeIn 0.3s ease;">
      <div style="background: rgba(255,255,255,0.02); border-left: 3px solid var(--accent-purple); padding: 10px 14px; border-radius: 0 4px 4px 0; margin-bottom: var(--space-md);">
        <span style="font-size: 0.72rem; color: var(--text-tertiary); font-weight: 600; text-transform: uppercase;">Selected Sentence:</span>
        <p style="font-size: 0.92rem; color: var(--text-primary); font-style: italic; margin-top: 4px; margin-bottom: 0; line-height: 1.6;">"${text}"</p>
      </div>

      <div style="margin-bottom: var(--space-md);">
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-blue); display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
          <span>🎯</span> ${analysis.roleTitle}
        </h4>
        <p style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0;">${analysis.roleDesc}</p>
      </div>

      <div>
        <h4 style="font-size: 0.82rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; margin-bottom: var(--space-sm); border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 4px;">Structure & Grammar Breakdown:</h4>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${analysis.features.map(f => `
            <div style="background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px;">
              <strong style="color: var(--accent-emerald); font-size: 0.88rem; display: block; margin-bottom: 4px;">✔ ${f.title}</strong>
              <span style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.4; display: block;">${f.desc}</span>
            </div>
          `).join('')}
          ${analysis.features.length === 0 ? `
            <div style="background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px;">
              <strong style="color: var(--text-secondary); font-size: 0.88rem; display: block; margin-bottom: 4px;">✔ Direct Sentence Structure</strong>
              <span style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.4; display: block;">Uses a direct, grammatically correct structure to contribute to the logical flow of the argument.</span>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

function renderLibraryLayout() {
  const activeEssays = currentTaskMode === 'task1' ? TASK1_ESSAYS : MODEL_ESSAYS;
  const essay = activeEssays[currentEssayIndex] || activeEssays[0];

  // Map each essay to include its original index to keep track of choices during filtering/sorting
  let filteredEssays = activeEssays.map((e, idx) => ({ ...e, originalIndex: idx }));

  // Get unique categories and types
  const uniqueCategories = [...new Set(activeEssays.map(e => e.category))];
  const uniqueTypes = [...new Set(activeEssays.map(e => e.type))];

  // Reset filter variables if not in unique lists
  if (filterCategory !== 'all' && !uniqueCategories.includes(filterCategory)) {
    filterCategory = 'all';
  }
  if (filterType !== 'all' && !uniqueTypes.includes(filterType)) {
    filterType = 'all';
  }

  // Filter by Category
  if (filterCategory !== 'all') {
    filteredEssays = filteredEssays.filter(e => e.category === filterCategory);
  }

  // Filter by Type
  if (filterType !== 'all') {
    filteredEssays = filteredEssays.filter(e => e.type === filterType);
  }

  // Sort
  if (sortBy === 'title') {
    filteredEssays.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'category') {
    filteredEssays.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortBy === 'default') {
    filteredEssays.sort((a, b) => a.originalIndex - b.originalIndex);
  }

  // Helper function to build highlighted paragraphs
  const renderHighlightedParagraph = (paraId, rawText) => {
    const highlights = essay.peelHighlight[paraId];
    if (!highlights) return `<p class="essay-p">${rawText}</p>`;

    let res = rawText;
    if (highlights.point) {
      const peelClass = isPeelHighlighted ? 'peel-p-text' : '';
      res = res.replace(highlights.point, `<span class="peel-highlight ${peelClass} click-analyze" data-type="point" data-para="${paraId}" title="Click to analyze structure">${highlights.point}</span>`);
    }
    if (highlights.explanation) {
      const peelClass = isPeelHighlighted ? 'peel-e-text' : '';
      res = res.replace(highlights.explanation, `<span class="peel-highlight ${peelClass} click-analyze" data-type="explanation" data-para="${paraId}" title="Click to analyze structure">${highlights.explanation}</span>`);
    }
    if (highlights.example) {
      const peelClass = isPeelHighlighted ? 'peel-ex-text' : '';
      res = res.replace(highlights.example, `<span class="peel-highlight ${peelClass} click-analyze" data-type="example" data-para="${paraId}" title="Click to analyze structure">${highlights.example}</span>`);
    }
    if (highlights.link) {
      const peelClass = isPeelHighlighted ? 'peel-l-text' : '';
      res = res.replace(highlights.link, `<span class="peel-highlight ${peelClass} click-analyze" data-type="link" data-para="${paraId}" title="Click to analyze structure">${highlights.link}</span>`);
    }
    return `<p class="essay-p">${res}</p>`;
  };

  // Determine paragraph labels
  const isLetter = essay.category === 'Letter';
  let label1 = "Introduction";
  let label2 = "Body Paragraph 1 (PEEL)";
  let label3 = "Body Paragraph 2 (PEEL)";
  let label4 = "Conclusion";

  if (currentTaskMode === 'task1') {
    if (isLetter) {
      label1 = "Salutation & Opening";
      label2 = "Bullet Point 1";
      label3 = "Bullet Points 2 & 3";
      label4 = "Sign-off & Name";
    } else {
      label1 = "Introduction (Paraphrase)";
      label2 = "Overview (Main Trends)";
      label3 = "Detailed Comparisons";
      label4 = "Summary / Conclusion";
    }
  }

  // Determine legend HTML
  let legendHtml = '';
  if (isPeelHighlighted) {
    if (currentTaskMode === 'task1') {
      if (isLetter) {
        legendHtml = `
          <div class="peel-legend-box" style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: var(--space-xs); margin-bottom: var(--space-md); padding: 8px 12px; background: rgba(255,255,255,0.03); border-radius: 6px; font-size: 0.76rem; border: 1px solid rgba(255,255,255,0.05);">
            <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: #60a5fa;"></span> Core Issue</span>
            <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: #c084fc;"></span> Context & Details</span>
            <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: #34d399;"></span> Specific Details / Impact</span>
            <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: #fb923c;"></span> Closing Request</span>
          </div>
        `;
      } else {
        legendHtml = `
          <div class="peel-legend-box" style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: var(--space-xs); margin-bottom: var(--space-md); padding: 8px 12px; background: rgba(255,255,255,0.03); border-radius: 6px; font-size: 0.76rem; border: 1px solid rgba(255,255,255,0.05);">
            <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: #60a5fa;"></span> Main Trend / Data Start</span>
            <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: #c084fc;"></span> Secondary Trend / Elaboration</span>
            <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: #34d399;"></span> Specific Comparison / Details</span>
            <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: #fb923c;"></span> Wrap-up / Section Conclusion</span>
          </div>
        `;
      }
    } else {
      legendHtml = `
        <div class="peel-legend-box" style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: var(--space-xs); margin-bottom: var(--space-md); padding: 8px 12px; background: rgba(255,255,255,0.03); border-radius: 6px; font-size: 0.76rem; border: 1px solid rgba(255,255,255,0.05);">
          <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: #60a5fa;"></span> Point (Topic Sentence)</span>
          <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: #c084fc;"></span> Explanation</span>
          <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: #34d399;"></span> Example</span>
          <span style="display: inline-flex; align-items: center; gap: 4px;"><span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: #fb923c;"></span> Link</span>
        </div>
      `;
    }
  }

  return `
    <div class="lessons-main-grid">
      <!-- Sidebar topics list with Dropdowns -->
      <div class="card lessons-sidebar">
        <h3 class="lessons-sidebar-title">Filters & Sorting</h3>
        <div style="display: flex; flex-direction: column; gap: 6px; margin-bottom: var(--space-md);">
          <label style="font-size: 0.72rem; font-weight: 600; color: var(--text-tertiary); text-transform: uppercase;">Category</label>
          <select class="filter-select" id="library-filter-category" style="width: 100%;">
            <option value="all" ${filterCategory === 'all' ? 'selected' : ''}>All Categories</option>
            ${uniqueCategories.map(cat => `<option value="${cat}" ${filterCategory === cat ? 'selected' : ''}>${cat}</option>`).join('')}
          </select>
          
          <label style="font-size: 0.72rem; font-weight: 600; color: var(--text-tertiary); text-transform: uppercase; margin-top: 6px;">Question Type</label>
          <select class="filter-select" id="library-filter-type" style="width: 100%;">
            <option value="all" ${filterType === 'all' ? 'selected' : ''}>All Types</option>
            ${uniqueTypes.map(t => `<option value="${t}" ${filterType === t ? 'selected' : ''}>${t}</option>`).join('')}
          </select>

          <label style="font-size: 0.72rem; font-weight: 600; color: var(--text-tertiary); text-transform: uppercase; margin-top: 6px;">Sort By</label>
          <select class="filter-select" id="library-sort-by" style="width: 100%;">
            <option value="default" ${sortBy === 'default' ? 'selected' : ''}>Default (ID)</option>
            <option value="title" ${sortBy === 'title' ? 'selected' : ''}>Title (A-Z)</option>
            <option value="category" ${sortBy === 'category' ? 'selected' : ''}>Category</option>
          </select>
        </div>
        
        <h3 class="lessons-sidebar-title" style="margin-top: var(--space-md); border-top: 1px solid rgba(255,255,255,0.08); padding-top: var(--space-sm);">${currentTaskMode === 'task1' ? 'Answers' : 'Essays'} (${filteredEssays.length})</h3>
        <div class="lessons-sidebar-list" style="max-height: 480px; overflow-y: auto; padding-right: 4px;">
          ${filteredEssays.map(e => `
            <button class="lesson-sidebar-item ${e.originalIndex === currentEssayIndex ? 'active' : ''}" data-original-index="${e.originalIndex}">
              <span class="lesson-sidebar-num">${e.category.charAt(0)}</span>
              <div>
                <span class="lesson-sidebar-name">${e.title}</span>
                <span class="lesson-sidebar-status" style="font-size: 0.7rem; color: var(--text-tertiary);">${e.category} • ${e.type}</span>
              </div>
            </button>
          `).join('')}
          ${filteredEssays.length === 0 ? `<p style="font-size: 0.82rem; color: var(--text-tertiary); text-align: center; margin-top: var(--space-md);">No essays found matching filters.</p>` : ''}
        </div>
      </div>

      <!-- Main Essay Display Workspace -->
      <div class="lesson-workspace-card">
        <!-- Prompt Card -->
        <div class="card lesson-content-card">
          <div class="card-header">
            <h3>IELTS ${currentTaskMode === 'task1' ? 'Task 1 Prompt' : 'Essay Prompt'}</h3>
            <span class="lesson-badge">${essay.category}</span>
          </div>
          <p class="exercise-prompt" style="margin-top: 12px; margin-bottom: 0;">
            ${essay.prompt}
          </p>
          ${currentTaskMode === 'task1' ? getTask1GraphicHtml(essay.id) : ''}
        </div>

        <!-- Model Essay Card -->
        <div class="card lesson-content-card">
          <div class="card-header" style="justify-content: space-between; align-items: center; display: flex;">
            <h3>🏆 Band 9 Model ${currentTaskMode === 'task1' ? 'Answer' : 'Essay'}</h3>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 0.82rem; color: var(--text-secondary);">Highlight sentence structure:</span>
              <button class="btn btn-sm ${isPeelHighlighted ? 'btn-primary' : 'btn-outline'}" id="btn-toggle-peel-highlight">
                ${isPeelHighlighted ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>
          
          ${legendHtml}

          <div class="model-essay-body" style="font-size: 0.94rem; line-height: 1.7; color: var(--text-secondary); display: flex; flex-direction: column; gap: var(--space-md);">
            <div class="essay-paragraph" style="border-left: 2px solid rgba(255,255,255,0.1); padding-left: 12px;">
              <span class="essay-para-badge" style="font-size: 0.65rem; background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px; display: inline-block; margin-bottom: 6px; font-weight: 600;">${label1}</span>
              <p class="essay-p"><span class="click-analyze" data-type="intro" title="Click to analyze structure">${essay.intro}</span></p>
            </div>
            
            <div class="essay-paragraph" style="border-left: 2px solid rgba(255,255,255,0.1); padding-left: 12px;">
              <span class="essay-para-badge" style="font-size: 0.65rem; background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px; display: inline-block; margin-bottom: 6px; font-weight: 600;">${label2}</span>
              ${renderHighlightedParagraph('body1', essay.body1)}
            </div>

            <div class="essay-paragraph" style="border-left: 2px solid rgba(255,255,255,0.1); padding-left: 12px;">
              <span class="essay-para-badge" style="font-size: 0.65rem; background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px; display: inline-block; margin-bottom: 6px; font-weight: 600;">${label3}</span>
              ${renderHighlightedParagraph('body2', essay.body2)}
            </div>

            <div class="essay-paragraph" style="border-left: 2px solid rgba(255,255,255,0.1); padding-left: 12px;">
              <span class="essay-para-badge" style="font-size: 0.65rem; background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px; display: inline-block; margin-bottom: 6px; font-weight: 600;">${label4}</span>
              <p class="essay-p"><span class="click-analyze" data-type="conclusion" title="Click to analyze structure">${essay.conclusion}</span></p>
            </div>
          </div>
        </div>

        <!-- Sentence Analysis Card -->
        <div class="card exercise-card" id="sentence-analysis-card" style="border: 1px dashed rgba(255,255,255,0.08); background: rgba(255,255,255,0.01);">
          <div class="card-header">
            <h3>💡 Sentence Structure & Grammar Analyzer</h3>
          </div>
          <div id="sentence-analysis-content" style="padding-top: var(--space-xs);">
            <p style="font-size: 0.88rem; color: var(--text-tertiary); font-style: italic; text-align: center; margin: var(--space-md) 0;">
              Click or tap any sentence in the model answer above to see a detailed explanation of its grammatical structure, academic vocabulary, and sentence role.
            </p>
          </div>
        </div>

        <!-- Essay Vocabulary List Card -->
        <div class="card exercise-card">
          <div class="card-header">
            <h3>📝 High-Scoring Vocabulary Used</h3>
          </div>
          <div class="strategy-vocab-lists" style="margin-top: var(--space-md);">
            <div class="strategy-vocab-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md);">
              ${essay.vocab.map(v => `
                <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 12px; border-radius: 6px;">
                  <span style="font-weight: 700; color: var(--accent-purple); font-size: 0.95rem; display: block; margin-bottom: 4px;">${v.word}</span>
                  <span style="font-size: 0.8rem; color: var(--text-secondary); display: block; margin-bottom: 8px;"><strong>Def:</strong> ${v.def}</span>
                  <span style="font-style: italic; font-size: 0.76rem; color: var(--text-tertiary); display: block; border-top: 1px solid rgba(255,255,255,0.03); padding-top: 6px;">"${v.sentence}"</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function bindLibraryEvents() {
  const activeEssays = currentTaskMode === 'task1' ? TASK1_ESSAYS : MODEL_ESSAYS;

  // Sidebar items
  $$('.lesson-sidebar-item').forEach(item => {
    item.addEventListener('click', () => {
      currentEssayIndex = parseInt(item.dataset.originalIndex);
      renderWritingAcademy();
    });
  });

  // Sentence analyze triggers
  $$('.click-analyze').forEach(item => {
    item.addEventListener('click', () => {
      const type = item.dataset.type;
      const para = item.dataset.para;
      showSentenceAnalysis(type, para);
      
      const card = $('#sentence-analysis-card');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  // Filter Category
  const selectCat = $('#library-filter-category');
  if (selectCat) {
    selectCat.addEventListener('change', (e) => {
      filterCategory = e.target.value;
      const filtered = activeEssays.filter(x => filterCategory === 'all' || x.category === filterCategory)
                                   .filter(x => filterType === 'all' || x.type === filterType);
      if (filtered.length > 0 && !filtered.some(x => activeEssays.indexOf(x) === currentEssayIndex)) {
        currentEssayIndex = activeEssays.indexOf(filtered[0]);
      }
      renderWritingAcademy();
    });
  }

  // Filter Type
  const selectType = $('#library-filter-type');
  if (selectType) {
    selectType.addEventListener('change', (e) => {
      filterType = e.target.value;
      const filtered = activeEssays.filter(x => filterCategory === 'all' || x.category === filterCategory)
                                   .filter(x => filterType === 'all' || x.type === filterType);
      if (filtered.length > 0 && !filtered.some(x => activeEssays.indexOf(x) === currentEssayIndex)) {
        currentEssayIndex = activeEssays.indexOf(filtered[0]);
      }
      renderWritingAcademy();
    });
  }

  // Sort By
  const selectSort = $('#library-sort-by');
  if (selectSort) {
    selectSort.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderWritingAcademy();
    });
  }

  // Toggle Highlight
  const btnToggle = $('#btn-toggle-peel-highlight');
  if (btnToggle) {
    btnToggle.addEventListener('click', () => {
      isPeelHighlighted = !isPeelHighlighted;
      renderWritingAcademy();
    });
  }
}

// ============================================================================
// 3. Sandbox Renderer & Event Binder
// ============================================================================
function renderSandboxLayout() {
  const activePrompts = currentTaskMode === 'task1' ? TASK1_SANDBOX_PROMPTS : SANDBOX_PROMPTS;
  const activeTransitions = currentTaskMode === 'task1' ? TASK1_TRANSITIONS : TRANSITION_PHRASES;

  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  const timerStr = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
  const minWords = currentTaskMode === 'task1' ? 150 : 250;

  return `
    <div class="sandbox-main-grid">
      <!-- Left side: Essay Prompts & Editor -->
      <div class="sandbox-workspace">
        <div class="card sandbox-prompt-card">
          <div class="card-header">
            <h3>✍️ Select ${currentTaskMode === 'task1' ? 'Task 1 Prompt' : 'Essay Prompt'}</h3>
          </div>
          <div class="sandbox-prompt-select-row">
            <select class="filter-select" id="sandbox-prompt-select" style="width:100%; max-width: 320px;">
              ${activePrompts.map((p, i) => `<option value="${i}" ${i === currentSandboxPromptIndex ? 'selected' : ''}>${p.title}</option>`).join('')}
            </select>
          </div>
          <div class="selected-prompt-box">
            <p id="selected-prompt-text">${activePrompts[currentSandboxPromptIndex].text}</p>
          </div>
          <div id="sandbox-prompt-graphic">
            ${currentTaskMode === 'task1' ? getTask1GraphicHtml(currentSandboxPromptIndex) : ''}
          </div>
        </div>

        <div class="card sandbox-editor-card">
          <div class="editor-header">
            <div class="editor-timer">
              ⏱️ Time Remaining: <strong id="sandbox-timer-label" class="${timerSeconds < 300 ? 'text-rose' : ''}">${timerStr}</strong>
              <button class="btn btn-sm btn-outline btn-timer-toggle" id="btn-timer-toggle">${timerRunning ? 'Pause' : 'Start'}</button>
            </div>
            <div class="editor-word-count">
              Words: <strong id="word-count-label">0</strong> / ${minWords} (minimum)
            </div>
          </div>
          <textarea class="sandbox-textarea" id="sandbox-input" placeholder="Begin typing your answer here..."></textarea>
          
          <div class="chip-bank">
            <span class="chip-bank-label">Tap to insert cohesive transition:</span>
            <div class="chips-list">
              ${activeTransitions.map(p => `
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
          <div class="card-header"><h3>💡 Guided Template</h3></div>
          <div class="guide-tabs" id="guide-tabs">
            <button class="guide-tab active" data-guide="intro">Intro</button>
            <button class="guide-tab" data-guide="body1">${currentTaskMode === 'task1' ? 'Body 1 / Overview' : 'Body 1'}</button>
            <button class="guide-tab" data-guide="body2">${currentTaskMode === 'task1' ? 'Body 2 / Details' : 'Body 2'}</button>
            <button class="guide-tab" data-guide="conclusion">Concl</button>
          </div>
          <div class="guide-content-box" id="guide-content">
            <!-- Render Intro Guide by default -->
            ${renderSandboxGuide('intro')}
          </div>
        </div>

        <!-- Evaluation checklist -->
        <div class="card checklist-card">
          <div class="card-header"><h3>🔎 Self-Evaluation Checklist</h3></div>
          <div class="checklist-items">
            <label class="checklist-item">
              <input type="checkbox" class="eval-cb">
              <span>Task Achievement: Paraphrased prompt and addressed all requirements.</span>
            </label>
            <label class="checklist-item">
              <input type="checkbox" class="eval-cb">
              <span>Coherence: Used logical paragraph divisions and transitions.</span>
            </label>
            <label class="checklist-item">
              <input type="checkbox" class="eval-cb">
              <span>Lexical Range: Used precise academic vocabulary and synonyms.</span>
            </label>
            <label class="checklist-item">
              <input type="checkbox" class="eval-cb">
              <span>Grammatical Accuracy: Varied sentence structures and checked spelling.</span>
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

function renderSandboxGuide(tabName) {
  if (currentTaskMode === 'task2') {
    if (tabName === 'intro') return renderIntroGuide();
    if (tabName === 'body1') return renderBody1Guide();
    if (tabName === 'body2') return renderBody2Guide();
    return renderConclusionGuide();
  }

  const activePrompts = TASK1_SANDBOX_PROMPTS;
  const isLetter = activePrompts[currentSandboxPromptIndex].title.toLowerCase().includes('letter');

  if (isLetter) {
    if (tabName === 'intro') {
      return `
        <h4>Salutation & Purpose (20-30 words)</h4>
        <ol class="guide-list">
          <li><strong>Salutation:</strong> Choose formal or informal based on prompt.<br>
              <em>Formal: "Dear Mr. Davies," / Informal: "Dear Sarah,"</em>
          </li>
          <li><strong>Opening Statement:</strong> State the purpose of writing.<br>
              <em>Example: "I am writing to request urgent repairs regarding a water leak..."</em>
          </li>
        </ol>
      `;
    } else if (tabName === 'body1') {
      return `
        <h4>Bullet Point 1 (40-50 words)</h4>
        <ol class="guide-list">
          <li><strong>Address Bullet 1:</strong> Detail the context or cause of the situation.<br>
              <em>Example: "The leak started three days ago, causing a continuous drip from the bathroom ceiling..."</em>
          </li>
        </ol>
      `;
    } else if (tabName === 'body2') {
      return `
        <h4>Bullet Points 2 & 3 (50-60 words)</h4>
        <ol class="guide-list">
          <li><strong>Address Bullets 2 & 3:</strong> Explain how it affects you and what actions are required.<br>
              <em>Example: "This has caused mold growth and is unsafe. Please dispatch an authorized plumber immediately to resolve this..."</em>
          </li>
        </ol>
      `;
    } else {
      return `
        <h4>Sign-off & Closing (15-25 words)</h4>
        <ol class="guide-list">
          <li><strong>Closing Line & Sign-off:</strong> Wrap up politely and sign off correctly.<br>
              <em>Formal: "Thank you for your prompt attention to this matter. Yours sincerely, Jane Smith"</em><br>
              <em>Informal: "Can't wait to catch up soon! Best wishes, Mark"</em>
          </li>
        </ol>
      `;
    }
  } else {
    // Academic Report
    if (tabName === 'intro') {
      return `
        <h4>Introduction (20-30 words)</h4>
        <ol class="guide-list">
          <li><strong>Paraphrase Prompt:</strong> State what the graphic compares, where, and the timeframe.<br>
              <em>Example: "The line graph illustrates the changes in the number of vehicles sold annually in a single European country from 2015 to 2025."</em>
          </li>
        </ol>
      `;
    } else if (tabName === 'body1') {
      return `
        <h4>Overview Paragraph (30-40 words)</h4>
        <ol class="guide-list">
          <li><strong>Overall trends:</strong> Highlight the main upward, downward, or fluctuating trends. Do NOT mention specific numbers here!<br>
              <em>Example: "Overall, it is clear that electric cars experienced a dramatic upward trend, whereas sales of diesel cars saw a significant decline."</em>
          </li>
        </ol>
      `;
    } else if (tabName === 'body2') {
      return `
        <h4>Details Paragraph (60-80 words)</h4>
        <ol class="guide-list">
          <li><strong>Specific values:</strong> Report initial values, peak values, and final values. Group categories logically and make direct comparisons.<br>
              <em>Example: "In 2015, petrol cars were the most popular with sales standing at 150,000, while electric cars started at a modest 10,000..."</em>
          </li>
        </ol>
      `;
    } else {
      return `
        <h4>Summary / Conclusion (Optional: 20-30 words)</h4>
        <ol class="guide-list">
          <li><strong>Summarizing sentence:</strong> Briefly wrap up the main shift or transition.<br>
              <em>Example: "In summary, the decade marked a major shift towards green energy, with electric vehicles replacing diesel."</em>
          </li>
        </ol>
      `;
    }
  }
}

function bindSandboxEvents() {
  const activePrompts = currentTaskMode === 'task1' ? TASK1_SANDBOX_PROMPTS : SANDBOX_PROMPTS;
  const promptSelect = $('#sandbox-prompt-select');
  const promptText = $('#selected-prompt-text');
  const input = $('#sandbox-input');
  const wordCountLabel = $('#word-count-label');
  const timerLabel = $('#sandbox-timer-label');
  const timerToggle = $('#btn-timer-toggle');

  // Change essay prompts
  if (promptSelect) {
    promptSelect.addEventListener('change', (e) => {
      currentSandboxPromptIndex = parseInt(e.target.value);
      promptText.textContent = activePrompts[currentSandboxPromptIndex].text;
      
      // Update visual graphic container dynamically
      const graphicContainer = $('#sandbox-prompt-graphic');
      if (graphicContainer) {
        graphicContainer.innerHTML = currentTaskMode === 'task1' ? getTask1GraphicHtml(currentSandboxPromptIndex) : '';
      }
      
      // Update guides dynamically based on new prompt category
      const activeGuideTab = $('.guide-tab.active');
      const currentGuide = activeGuideTab ? activeGuideTab.dataset.guide : 'intro';
      const container = $('#guide-content');
      if (container) {
        container.innerHTML = renderSandboxGuide(currentGuide);
      }
    });
  }

  // Word count calculator
  if (input) {
    const refreshWordCount = () => {
      const text = input.value.trim();
      const count = text === '' ? 0 : text.split(/\s+/).length;
      wordCountLabel.textContent = count;
      const targetCount = currentTaskMode === 'task1' ? 150 : 250;
      if (count >= targetCount) {
        wordCountLabel.className = 'text-emerald';
      } else {
        wordCountLabel.className = '';
      }
    };
    
    input.addEventListener('input', refreshWordCount);
    refreshWordCount(); // Initial check
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
    timerToggle.textContent = timerRunning ? 'Pause' : 'Start';
    
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
      if (container) {
        container.innerHTML = renderSandboxGuide(guide);
      }
    });
  });
}

// Register page
registerPage('writing-academy', renderWritingAcademy);
export { renderWritingAcademy };
