// ============================================================================
// IELTS TRAINER — Complete Curriculum Data
// ============================================================================

// ----------------------------------------------------------------------------
// 1. WEEKS — 8-week study plan
// ----------------------------------------------------------------------------
export const WEEKS = [
  // ===== PHASE 1: FOUNDATION (Weeks 1-2) ====================================
  {
    id: 1,
    title: 'Diagnostic & Orientation',
    phase: 'foundation',
    phaseLabel: 'Phase 1: Foundation',
    summary: 'Take diagnostic tests in all 4 skills, study the test format, and begin your error log.',
    days: [
      {
        day: 1,
        label: 'Monday',
        tasks: [
          {
            id: 'w1d1t1',
            skill: 'reading',
            title: 'Take diagnostic Reading test',
            description: 'Complete a full IELTS Academic Reading test (3 passages, 40 questions, 60 minutes) under strict timed conditions. Record your band score.',
            minutes: 70
          },
          {
            id: 'w1d1t2',
            skill: 'general',
            title: 'Study IELTS test format & question types',
            description: 'Learn the structure of all four IELTS papers: Reading, Listening, Writing, and Speaking. Familiarize yourself with question formats.',
            minutes: 30
          },
          {
            id: 'w1d1t3',
            skill: 'writing',
            title: 'Create your error log notebook',
            description: 'Set up a dedicated notebook or spreadsheet for tracking mistakes with columns for date, question type, error description, and reason for mistake.',
            minutes: 15
          }
        ]
      },
      {
        day: 2,
        label: 'Tuesday',
        tasks: [
          {
            id: 'w1d2t1',
            skill: 'listening',
            title: 'Take diagnostic Listening test',
            description: 'Complete a full IELTS Listening test (4 sections, 40 questions, approximately 30 minutes of audio). Listen only once.',
            minutes: 40
          },
          {
            id: 'w1d2t2',
            skill: 'listening',
            title: 'Analyze listening errors and patterns',
            description: 'Go through each incorrect answer, replay the audio, and identify why you got it wrong. Record patterns in your error log.',
            minutes: 20
          },
          {
            id: 'w1d2t3',
            skill: 'listening',
            title: 'Study Listening question types overview',
            description: 'Learn the 6 main Listening question types: form completion, multiple choice, matching, map labeling, sentence completion, and short answer.',
            minutes: 30
          }
        ]
      },
      {
        day: 3,
        label: 'Wednesday',
        tasks: [
          {
            id: 'w1d3t1',
            skill: 'writing',
            title: 'Take diagnostic Writing test — Task 1 & 2',
            description: 'Write a full IELTS Writing test: Task 1 (describe visual, 150+ words, 20 min) and Task 2 (essay, 250+ words, 40 min). Do not use a dictionary.',
            minutes: 60
          },
          {
            id: 'w1d3t2',
            skill: 'writing',
            title: 'Study Band Descriptors for Writing',
            description: 'Read and understand the official IELTS Writing Band Descriptors. Focus on Task Response, Coherence & Cohesion, Lexical Resource, and Accuracy.',
            minutes: 30
          },
          {
            id: 'w1d3t3',
            skill: 'writing',
            title: 'Review model Writing answers',
            description: 'Read model Band 8-9 Writing answers for both tasks. Compare with your diagnostic responses and note formatting differences.',
            minutes: 20
          }
        ]
      },
      {
        day: 4,
        label: 'Thursday',
        tasks: [
          {
            id: 'w1d4t1',
            skill: 'speaking',
            title: 'Take diagnostic Speaking test',
            description: 'Record yourself answering a full Speaking mock test (Parts 1, 2, and 3). Listen to the recording and write a summary of your performance.',
            minutes: 30
          },
          {
            id: 'w1d4t2',
            skill: 'speaking',
            title: 'Study Speaking Band Descriptors',
            description: 'Analyze the Speaking criteria: Fluency & Coherence, Lexical Resource, Grammatical Range, and Pronunciation. Understand the Band 7 standards.',
            minutes: 20
          },
          {
            id: 'w1d4t3',
            skill: 'speaking',
            title: 'Review model Speaking answers',
            description: 'Listen to mock interviews of Band 7.5+ candidates. Note the length of answers, vocabulary choices, and natural use of cohesive devices.',
            minutes: 25
          }
        ]
      },
      {
        day: 5,
        label: 'Friday',
        tasks: [
          {
            id: 'w1d5t1',
            skill: 'reading',
            title: 'Learn Reading skimming and scanning',
            description: 'Read the Reading strategies guide. Practice skimming for gist (2 minutes per passage) and scanning for keywords (names, numbers, dates).',
            minutes: 40
          },
          {
            id: 'w1d5t2',
            skill: 'reading',
            title: 'Apply skimming & scanning to passages',
            description: 'Complete 3 Reading passages focusing ONLY on skimming and scanning first. Do not answer questions; just outline paragraph topics.',
            minutes: 30
          },
          {
            id: 'w1d5t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 1 — learn 15 words',
            description: 'Review Sublist 1 vocabulary in the Study Arena. Master spelling, definition, example sentences, and collocations.',
            minutes: 25
          }
        ]
      },
      {
        day: 6,
        label: 'Saturday',
        tasks: [
          {
            id: 'w1d6t1',
            skill: 'listening',
            title: 'Learn Listening pre-listening strategies',
            description: 'Read strategies for predicting answers. Practice analyzing questions during the 30-second silence to anticipate nouns, verbs, or numbers.',
            minutes: 30
          },
          {
            id: 'w1d6t2',
            skill: 'listening',
            title: 'Practice Listening spelling and numbers',
            description: 'Listen to Section 1 dictation practice (names, telephone numbers, addresses, postcodes). Focus on capitalization and number strings.',
            minutes: 30
          },
          {
            id: 'w1d6t3',
            skill: 'general',
            title: 'Weekly error log audit & review',
            description: 'Go through all errors made this week. Categorize them and write down preventions. Complete a light review of AWL Sublist 1.',
            minutes: 30
          }
        ]
      },
      {
        day: 7,
        label: 'Sunday',
        tasks: [
          {
            id: 'w1d7t1',
            skill: 'general',
            title: 'Rest Day',
            description: 'Do not study today. Let your brain rest and recharge for the upcoming weeks of core strategy drills.',
            minutes: 0
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Core Skills & Error Tracking',
    phase: 'foundation',
    phaseLabel: 'Phase 1: Foundation',
    summary: 'Learn fundamental strategies for all question types and set up your error tracking notebook.',
    days: [
      {
        day: 1,
        label: 'Monday',
        tasks: [
          {
            id: 'w2d1t1',
            skill: 'reading',
            title: 'Reading: Multiple Choice & Headings',
            description: 'Study Matching Headings and Multiple Choice strategies. Complete 2 practice passages focusing strictly on locating the main ideas.',
            minutes: 50
          },
          {
            id: 'w2d1t2',
            skill: 'reading',
            title: 'Analyze matching headings errors',
            description: 'Review incorrect heading matches. Identify if you were distracted by keyword matching or failed to understand the paragraph meaning.',
            minutes: 25
          },
          {
            id: 'w2d1t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 1 continued — learn 15 words',
            description: 'Study the remaining words of Sublist 1. Practice using them in spelling and matching game modes.',
            minutes: 20
          }
        ]
      },
      {
        day: 2,
        label: 'Tuesday',
        tasks: [
          {
            id: 'w2d2t1',
            skill: 'listening',
            title: 'Listening: Form & Table Completion',
            description: 'Practice 3 Section 1 form and table completion exercises. Focus on word count limits (e.g., NO MORE THAN TWO WORDS AND/OR A NUMBER).',
            minutes: 40
          },
          {
            id: 'w2d2t2',
            skill: 'listening',
            title: 'Spelling validation drill',
            description: 'Audit spelling errors. Focus on double letters (e.g., committee, accommodate) and silent letters which commonly cause point loss.',
            minutes: 20
          },
          {
            id: 'w2d2t3',
            skill: 'grammar',
            title: 'Grammar: Subject-Verb Agreement',
            description: 'Review subject-verb agreement in complex sentences (e.g., "The development of new technologies has/have..."). Do 15 practice grammar drills.',
            minutes: 30
          }
        ]
      },
      {
        day: 3,
        label: 'Wednesday',
        tasks: [
          {
            id: 'w2d3t1',
            skill: 'writing',
            title: 'Writing Task 1: Line Graphs & Bar Charts',
            description: 'Study Task 1 line graph and bar chart overview. Learn trends vocabulary (increase, decrease, fluctuate, plateau) and adverb/adjective use.',
            minutes: 45
          },
          {
            id: 'w2d3t2',
            skill: 'writing',
            title: 'Write a Task 1 overview and description',
            description: 'Practice writing the introduction (paraphrase) and a strong overview paragraph (main trends) for a line graph. Do not write body paragraphs yet.',
            minutes: 30
          },
          {
            id: 'w2d3t3',
            skill: 'writing',
            title: 'Study comparisons grammar',
            description: 'Review comparative grammar structures (e.g., "significantly higher than", "not as dramatic as", "three times as many").',
            minutes: 20
          }
        ]
      },
      {
        day: 4,
        label: 'Thursday',
        tasks: [
          {
            id: 'w2d4t1',
            skill: 'speaking',
            title: 'Speaking Part 1: ARE answering method',
            description: 'Master the Answer + Reason + Example (A+R+E) structure. Answer 10 Part 1 questions on familiar topics using this structure.',
            minutes: 30
          },
          {
            id: 'w2d4t2',
            skill: 'speaking',
            title: 'Fluency drill: Speak without pauses',
            description: 'Record yourself speaking on 5 daily topics for 1 minute each. Focus on minimizing filler words (uh, um, like) and long hesitations.',
            minutes: 20
          },
          {
            id: 'w2d4t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 2 — learn 15 words',
            description: 'Review Sublist 2 vocabulary in the Study Arena. Focus on usage in Writing Task 1 descriptions.',
            minutes: 20
          }
        ]
      },
      {
        day: 5,
        label: 'Friday',
        tasks: [
          {
            id: 'w2d5t1',
            skill: 'reading',
            title: 'Reading: True / False / Not Given',
            description: 'Study the difference between FALSE (contradicts text) and NOT GIVEN (no information). Complete 15 targeted TFNG questions.',
            minutes: 50
          },
          {
            id: 'w2d5t2',
            skill: 'reading',
            title: 'Review TFNG errors and synonyms',
            description: 'Analyze mistake logs. Write down the synonyms used in the passage that match the keywords in the questions.',
            minutes: 25
          },
          {
            id: 'w2d5t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 2 continued — learn 15 words',
            description: 'Study the remaining words of Sublist 2. Master spelling using the writing game mode.',
            minutes: 20
          }
        ]
      },
      {
        day: 6,
        label: 'Saturday',
        tasks: [
          {
            id: 'w2d6t1',
            skill: 'listening',
            title: 'Listening: Map Labeling & Matching',
            description: 'Study direction vocabulary (clockwise, adjacent, opposite, corridor, junction). Complete 2 map labeling exercises.',
            minutes: 40
          },
          {
            id: 'w2d6t2',
            skill: 'listening',
            title: 'Practice direction tracking',
            description: 'Listen to mock map descriptions and trace routes on a sketch. Note synonyms for directions.',
            minutes: 20
          },
          {
            id: 'w2d6t3',
            skill: 'general',
            title: 'Weekly error log audit & review',
            description: 'Audit errors from Week 2. Update your error log. Run a vocabulary game to test both AWL Sublists 1 and 2.',
            minutes: 30
          }
        ]
      },
      {
        day: 7,
        label: 'Sunday',
        tasks: [
          {
            id: 'w2d7t1',
            skill: 'general',
            title: 'Rest Day',
            description: 'Rest and relax. Consolidate your learning before transitioning into Phase 2 next week.',
            minutes: 0
          }
        ]
      }
    ]
  },
  // ===== PHASE 2: SKILL BUILDING (Weeks 3-5) =================================
  {
    id: 3,
    title: 'Writing Task 1 & Speaking Part 2',
    phase: 'skill-building',
    phaseLabel: 'Phase 2: Skill Building',
    summary: 'Build advanced visual description skills for Writing Task 1 and master cue card planning for Speaking Part 2.',
    days: [
      {
        day: 1,
        label: 'Monday',
        tasks: [
          {
            id: 'w3d1t1',
            skill: 'writing',
            title: 'Writing Task 1: Tables & Pie Charts',
            description: 'Study Table and Pie Chart structures. Learn how to group data logically rather than describing every single point.',
            minutes: 45
          },
          {
            id: 'w3d1t2',
            skill: 'writing',
            title: 'Write a full Table report',
            description: 'Write a full report (150+ words, 20 min) comparing statistics in a table. Focus on logical data groupings and passive voice.',
            minutes: 30
          },
          {
            id: 'w3d1t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 3 — learn 15 words',
            description: 'Review Sublist 3 vocabulary in the Study Arena. Focus on collocations for data comparison.',
            minutes: 20
          }
        ]
      },
      {
        day: 2,
        label: 'Tuesday',
        tasks: [
          {
            id: 'w3d2t1',
            skill: 'speaking',
            title: 'Speaking Part 2: Cue Card Planning',
            description: 'Learn the 1-minute cue card planning strategy. Practice brainstorming ideas, prompts, and structuring your notes in columns.',
            minutes: 40
          },
          {
            id: 'w3d2t2',
            skill: 'speaking',
            title: 'Record a Part 2 response',
            description: 'Record yourself speaking for 2 full minutes after 1 minute of preparation. Check if you run out of ideas before the timer.',
            minutes: 25
          },
          {
            id: 'w3d2t3',
            skill: 'speaking',
            title: 'Review Part 2 notes and transition markers',
            description: 'Practice using transitions (e.g., "Moving on to...", "Regarding...", "As for...") to connect cue card prompts smoothly.',
            minutes: 20
          }
        ]
      },
      {
        day: 3,
        label: 'Wednesday',
        tasks: [
          {
            id: 'w3d3t1',
            skill: 'reading',
            title: 'Reading: Sentence Completion & Diagrams',
            description: 'Practice skimming passages to locate technical diagrams or summary paragraphs. Master sentence grammar verification.',
            minutes: 50
          },
          {
            id: 'w3d3t2',
            skill: 'reading',
            title: 'Diagram labeling timed practice',
            description: 'Complete 3 diagram and flowchart labeling questions under strict timed conditions (8 minutes per passage section).',
            minutes: 25
          },
          {
            id: 'w3d3t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 3 continued — learn 15 words',
            description: 'Master the remaining words of Sublist 3 using flashcards and matching game modes.',
            minutes: 20
          }
        ]
      },
      {
        day: 4,
        label: 'Thursday',
        tasks: [
          {
            id: 'w3d4t1',
            skill: 'listening',
            title: 'Listening: Section 3 Multiple Choice',
            description: 'Practice Section 3 academic conversations. Learn to identify distractors where speakers change their minds or disagree.',
            minutes: 40
          },
          {
            id: 'w3d4t2',
            skill: 'listening',
            title: 'Audit Section 3 distractors',
            description: 'Replay Section 3 audio and list out the distractors the speakers used to confuse the listener before agreeing on the final choice.',
            minutes: 25
          },
          {
            id: 'w3d4t3',
            skill: 'grammar',
            title: 'Grammar: Complex Sentences (Relative Clauses)',
            description: 'Review relative clauses (who, which, that, where) to add details in speaking and writing. Write 10 complex sentences.',
            minutes: 25
          }
        ]
      },
      {
        day: 5,
        label: 'Friday',
        tasks: [
          {
            id: 'w3d5t1',
            skill: 'writing',
            title: 'Writing Task 1: Maps & Process Diagrams',
            description: 'Study map comparison structures (spatial language, passive voice) and process diagrams (sequencing linkers).',
            minutes: 45
          },
          {
            id: 'w3d5t2',
            skill: 'writing',
            title: 'Write a full Process report',
            description: 'Write a full report (150+ words, 20 min) describing a manufacturing process or natural cycle. Focus on sequence connectors.',
            minutes: 30
          },
          {
            id: 'w3d5t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 4 — learn 15 words',
            description: 'Review Sublist 4 vocabulary in the Study Arena. Focus on verbs that show transition or development.',
            minutes: 20
          }
        ]
      },
      {
        day: 6,
        label: 'Saturday',
        tasks: [
          {
            id: 'w3d6t1',
            skill: 'speaking',
            title: 'Speaking Part 2: Speaking for 2 minutes',
            description: 'Practice 4 different Speaking Part 2 cards back-to-back. Record all responses. Check if you sound natural and fluent.',
            minutes: 40
          },
          {
            id: 'w3d6t2',
            skill: 'speaking',
            title: 'Review speaking pace and pronunciation',
            description: 'Listen to your recordings and write down areas of improvement for pronunciation and intonation.',
            minutes: 20
          },
          {
            id: 'w3d6t3',
            skill: 'general',
            title: 'Weekly error log audit & review',
            description: 'Analyze mistakes from this week. Write corrections. Practice AWL Sublists 3 and 4 in the Arena.',
            minutes: 30
          }
        ]
      },
      {
        day: 7,
        label: 'Sunday',
        tasks: [
          {
            id: 'w3d7t1',
            skill: 'general',
            title: 'Rest Day',
            description: 'Take a break today. Rest and relax before starting the essay writing phase.',
            minutes: 0
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Writing Task 2 Essay Types',
    phase: 'skill-building',
    phaseLabel: 'Phase 2: Skill Building',
    summary: 'Master the structure, vocabulary, and time management for all IELTS Writing Task 2 essay types.',
    days: [
      {
        day: 1,
        label: 'Monday',
        tasks: [
          {
            id: 'w4d1t1',
            skill: 'writing',
            title: 'Writing Task 2: Essay Structures',
            description: 'Learn the standard 4-paragraph essay structure: Introduction (2 sentences), Body 1 (4-5 sentences), Body 2 (4-5 sentences), Conclusion (2 sentences).',
            minutes: 40
          },
          {
            id: 'w4d1t2',
            skill: 'writing',
            title: 'Write an Opinion Essay outline',
            description: 'Analyze an opinion essay prompt, brainstorm ideas, plan your arguments, and write the introduction and main body topic sentences.',
            minutes: 30
          },
          {
            id: 'w4d1t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 4 continued — learn 15 words',
            description: 'Study the remaining words of Sublist 4. Practice spelling using the write practice mode.',
            minutes: 20
          }
        ]
      },
      {
        day: 2,
        label: 'Tuesday',
        tasks: [
          {
            id: 'w4d2t1',
            skill: 'speaking',
            title: 'Speaking Part 3: Abstract Discussion',
            description: 'Study Part 3 question types (comparing, predicting, assessing). Learn how to discuss abstract societal issues instead of personal examples.',
            minutes: 40
          },
          {
            id: 'w4d2t2',
            skill: 'speaking',
            title: 'Practice hedging language',
            description: 'Learn to use hedging language (e.g., "It is widely believed that...", "This could potentially lead to...", "Generally speaking...") to sound academic.',
            minutes: 25
          },
          {
            id: 'w4d2t3',
            skill: 'speaking',
            title: 'Practice answering 5 Part 3 questions',
            description: 'Record yourself answering 5 Part 3 questions. Practice expanding your answers to at least 4-5 sentences per question.',
            minutes: 20
          }
        ]
      },
      {
        day: 3,
        label: 'Wednesday',
        tasks: [
          {
            id: 'w4d3t1',
            skill: 'reading',
            title: 'Reading: Paragraph Matching & Summary',
            description: 'Learn strategies for locating information in paragraphs and filling summary paragraphs. Complete 2 timed passages.',
            minutes: 50
          },
          {
            id: 'w4d3t2',
            skill: 'reading',
            title: 'Review paragraph matching errors',
            description: 'Identify if errors were caused by not reading carefully or if synonyms in the text confused you.',
            minutes: 20
          },
          {
            id: 'w4d3t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 5 — learn 15 words',
            description: 'Review Sublist 5 vocabulary in the Study Arena. Focus on words suitable for abstract essay arguments.',
            minutes: 20
          }
        ]
      },
      {
        day: 4,
        label: 'Thursday',
        tasks: [
          {
            id: 'w4d4t1',
            skill: 'listening',
            title: 'Listening: Section 3 Discussions',
            description: 'Practice Section 3 academic monologues or discussions. Focus on project proposals and teacher-student feedbacks.',
            minutes: 40
          },
          {
            id: 'w4d4t2',
            skill: 'listening',
            title: 'Identify weak listening areas',
            description: 'Review Section 3 mock scores. Log questions missed due to speed or spelling.',
            minutes: 20
          },
          {
            id: 'w4d4t3',
            skill: 'grammar',
            title: 'Grammar: Conditional Sentences',
            description: 'Review 1st, 2nd, and 3rd conditional sentences (e.g., "If governments invest in renewable energy, emissions will decline..."). Write 10 conditionals.',
            minutes: 30
          }
        ]
      },
      {
        day: 5,
        label: 'Friday',
        tasks: [
          {
            id: 'w4d5t1',
            skill: 'writing',
            title: 'Writing Task 2: Problem/Solution & Discussion',
            description: 'Study the structural layouts for both Discussion (discuss both views + opinion) and Problem/Solution essay types.',
            minutes: 45
          },
          {
            id: 'w4d5t2',
            skill: 'writing',
            title: 'Write a full opinion essay',
            description: 'Write a full essay (250+ words, 40 min) on a given topic under strict timing. Focus on linking words and vocabulary range.',
            minutes: 40
          },
          {
            id: 'w4d5t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 5 continued — learn 15 words',
            description: 'Master the remaining words of Sublist 5 using flashcard and multiple choice quiz modes.',
            minutes: 20
          }
        ]
      },
      {
        day: 6,
        label: 'Saturday',
        tasks: [
          {
            id: 'w4d6t1',
            skill: 'speaking',
            title: 'Speaking Part 3: Structuring responses',
            description: 'Practice answering 10 difficult Part 3 questions. Use structure linkers: "Firstly...", "This is because...", "For example...", "Therefore...".',
            minutes: 40
          },
          {
            id: 'w4d6t2',
            skill: 'speaking',
            title: 'Review speaking vocabulary range',
            description: 'Analyze your recorded vocabulary choices. Replace common words (good, bad, very) with advanced synonyms (beneficial, detrimental, exceptionally).',
            minutes: 25
          },
          {
            id: 'w4d6t3',
            skill: 'general',
            title: 'Weekly error log audit & review',
            description: 'Update your mistake log. Run a vocabulary match game to test AWL Sublists 4 and 5.',
            minutes: 30
          }
        ]
      },
      {
        day: 7,
        label: 'Sunday',
        tasks: [
          {
            id: 'w4d7t1',
            skill: 'general',
            title: 'Rest Day',
            description: 'Rest and recharge before moving into the skills integration and checkpoint week.',
            minutes: 0
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Skill Integration & Checkpoint',
    phase: 'skill-building',
    phaseLabel: 'Phase 2: Skill Building',
    summary: 'Integrate all skills under timed practice conditions and take a mid-course diagnostic test.',
    days: [
      {
        day: 1,
        label: 'Monday',
        tasks: [
          {
            id: 'w5d1t1',
            skill: 'writing',
            title: 'Writing Task 2: Advantages & Disadvantages',
            description: 'Study essay layouts for advantages/disadvantages and two-part questions. Practice structuring body paragraphs.',
            minutes: 45
          },
          {
            id: 'w5d1t2',
            skill: 'writing',
            title: 'Write a full Advantages/Disadvantages essay',
            description: 'Write a full essay (250+ words, 40 min) strictly timed. Self-assess against lexical resource and coherence criteria.',
            minutes: 40
          },
          {
            id: 'w5d1t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 6 — learn 15 words',
            description: 'Review Sublist 6 vocabulary in the Study Arena. Focus on collocations for writing body paragraphs.',
            minutes: 20
          }
        ]
      },
      {
        day: 2,
        label: 'Tuesday',
        tasks: [
          {
            id: 'w5d2t1',
            skill: 'speaking',
            title: 'Speaking: Full timed mock test',
            description: 'Record yourself completing a full Speaking interview (Parts 1, 2, and 3) under strict timing. Score yourself honestly.',
            minutes: 35
          },
          {
            id: 'w5d2t2',
            skill: 'speaking',
            title: 'Focus on Part 3 abstract transitions',
            description: 'Review transition phrases and hedging. Practice speaking on 5 abstract topics.',
            minutes: 20
          },
          {
            id: 'w5d2t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 6 continued — learn 15 words',
            description: 'Master the remaining words of Sublist 6 using spelling and matching game modes.',
            minutes: 20
          }
        ]
      },
      {
        day: 3,
        label: 'Wednesday',
        tasks: [
          {
            id: 'w5d3t1',
            skill: 'reading',
            title: 'Reading: Full timed passage practice',
            description: 'Complete a full Reading test section (3 passages, 40 questions, 60 minutes) under strict timed conditions.',
            minutes: 65
          },
          {
            id: 'w5d3t2',
            skill: 'reading',
            title: 'Detailed Reading error review',
            description: 'Identify question types causing errors. Log synonyms missed and record them in your error log.',
            minutes: 30
          },
          {
            id: 'w5d3t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 7 — learn 15 words',
            description: 'Review Sublist 7 vocabulary in the Study Arena. Focus on academic verbs.',
            minutes: 20
          }
        ]
      },
      {
        day: 4,
        label: 'Thursday',
        tasks: [
          {
            id: 'w5d4t1',
            skill: 'listening',
            title: 'Listening: Section 4 Academic Lecture',
            description: 'Practice Section 4 academic monologues. Learn how to track lectures using outline structures and notes.',
            minutes: 40
          },
          {
            id: 'w5d4t2',
            skill: 'listening',
            title: 'Section 4 speed spelling drills',
            description: 'Practice spelling technical words dictations. Focus on spelling accuracy at high audio speeds.',
            minutes: 25
          },
          {
            id: 'w5d4t3',
            skill: 'grammar',
            title: 'Grammar: Complex Linking Words',
            description: 'Review connectors showing contrast or concession (e.g., "whereas", "although", "nevertheless", "despite"). Write 10 complex sentences.',
            minutes: 25
          }
        ]
      },
      {
        day: 5,
        label: 'Friday',
        tasks: [
          {
            id: 'w5d5t1',
            skill: 'writing',
            title: 'Writing: Timed Task 1 & 2 Combined',
            description: 'Write both a Task 1 (visual, 20 min) and Task 2 (essay, 40 min) back-to-back under strict timed conditions (60 minutes total).',
            minutes: 60
          },
          {
            id: 'w5d5t2',
            skill: 'writing',
            title: 'Self-assess writing mock tests',
            description: 'Score your writing against task response and lexical resource band descriptors. Identify any remaining weaknesses.',
            minutes: 30
          },
          {
            id: 'w5d5t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 7 continued — learn 15 words',
            description: 'Master the remaining words of Sublist 7 using flashcard and multiple choice quiz modes.',
            minutes: 20
          }
        ]
      },
      {
        day: 6,
        label: 'Saturday',
        tasks: [
          {
            id: 'w5d6t1',
            skill: 'general',
            title: 'MID-COURSE CHECKPOINT: Full Mock Test',
            description: 'Take a complete IELTS mock test (Reading, Listening, Writing, and Speaking) under strict exam conditions. Record your band score.',
            minutes: 170
          },
          {
            id: 'w5d6t2',
            skill: 'general',
            title: 'Score and compare progress',
            description: 'Compare this mock test score to your Diagnostic (Week 1) results. Log improvements and identify areas to target during Phase 3.',
            minutes: 30
          },
          {
            id: 'w5d6t3',
            skill: 'general',
            title: 'Weekly error log audit & update',
            description: 'Review and update your error log with insights from the mock test. Test yourself in the Arena on AWL Sublists 6 and 7.',
            minutes: 30
          }
        ]
      },
      {
        day: 7,
        label: 'Sunday',
        tasks: [
          {
            id: 'w5d7t1',
            skill: 'general',
            title: 'Rest Day',
            description: 'Rest and relax. Prepare mentally for the transition into Phase 3: Exam Mastery next week.',
            minutes: 0
          }
        ]
      }
    ]
  },
  // ===== PHASE 3: EXAM MASTERY (Weeks 6-8) ===================================
  {
    id: 6,
    title: 'Intensive Mock Testing',
    phase: 'exam-mastery',
    phaseLabel: 'Phase 3: Exam Mastery',
    summary: 'Transition into exam conditions with full-length timed practice tests and detailed error audits.',
    days: [
      {
        day: 1,
        label: 'Monday',
        tasks: [
          {
            id: 'w6d1t1',
            skill: 'reading',
            title: 'Reading: Full timed test',
            description: 'Complete a full Reading test under strict exam conditions (3 passages, 40 questions, 60 minutes). Do not use helpers.',
            minutes: 65
          },
          {
            id: 'w6d1t2',
            skill: 'reading',
            title: 'Detailed Reading test analysis',
            description: 'Analyze every incorrect answer. Record reasons (distraction, speed, synonym mismatch) in your error log.',
            minutes: 35
          },
          {
            id: 'w6d1t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 8 — learn 15 words',
            description: 'Review Sublist 8 vocabulary in the Study Arena. Focus on academic nouns.',
            minutes: 20
          }
        ]
      },
      {
        day: 2,
        label: 'Tuesday',
        tasks: [
          {
            id: 'w6d2t1',
            skill: 'listening',
            title: 'Listening: Full timed test',
            description: 'Complete a full Listening test. Limit audio replays. Record your score.',
            minutes: 40
          },
          {
            id: 'w6d2t2',
            skill: 'listening',
            title: 'Analyze listening error logs',
            description: 'Identify question types causing issues. Practice those specific types using targeted exercises.',
            minutes: 25
          },
          {
            id: 'w6d2t3',
            skill: 'listening',
            title: 'Section 4 speed mock practice',
            description: 'Listen to Section 4 lectures at 1.1x or 1.2x speed to build adaptation and quick note-taking.',
            minutes: 20
          }
        ]
      },
      {
        day: 3,
        label: 'Wednesday',
        tasks: [
          {
            id: 'w6d3t1',
            skill: 'writing',
            title: 'Writing Task 1 & 2 Timed Combined',
            description: 'Write both a Task 1 (20 min) and Task 2 (40 min) back-to-back under strict timed conditions.',
            minutes: 60
          },
          {
            id: 'w6d3t2',
            skill: 'writing',
            title: 'Analyze writing mock performance',
            description: 'Compare your essays to Band 8 sample answers. Self-correct grammar errors using your log.',
            minutes: 30
          },
          {
            id: 'w6d3t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 8 continued — learn 15 words',
            description: 'Master the remaining words of Sublist 8 using matching and spelling game modes.',
            minutes: 20
          }
        ]
      },
      {
        day: 4,
        label: 'Thursday',
        tasks: [
          {
            id: 'w6d4t1',
            skill: 'speaking',
            title: 'Speaking: Full mock with tutor or partner',
            description: 'Record yourself completing a full Speaking mock interview with an online tool or partner. Score yourself.',
            minutes: 30
          },
          {
            id: 'w6d4t2',
            skill: 'speaking',
            title: 'Fluency audit: Pause patterns',
            description: 'Listen to the recording. Audit pauses. Practice re-phrasing answers without long hesitations.',
            minutes: 20
          },
          {
            id: 'w6d4t3',
            skill: 'speaking',
            title: 'Part 3 complex topic discussions',
            description: 'Practice discussing 5 complex abstract topics (e.g., technology ethics, globalization, resource distributions).',
            minutes: 25
          }
        ]
      },
      {
        day: 5,
        label: 'Friday',
        tasks: [
          {
            id: 'w6d5t1',
            skill: 'reading',
            title: 'Reading: Speed and timing drills',
            description: 'Complete 3 Reading passages back-to-back. Restrict time to 18 minutes per passage to build buffer time.',
            minutes: 55
          },
          {
            id: 'w6d5t2',
            skill: 'listening',
            title: 'Listening: Section 3 and 4 mock tests',
            description: 'Complete 3 sets of Section 3 & 4 tests. Score and log mistakes.',
            minutes: 35
          },
          {
            id: 'w6d5t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 9 — learn 15 words',
            description: 'Review Sublist 9 vocabulary in the Study Arena. Focus on collocations.',
            minutes: 20
          }
        ]
      },
      {
        day: 6,
        label: 'Saturday',
        tasks: [
          {
            id: 'w6d6t1',
            skill: 'general',
            title: 'Full Mock Exam (Reading & Listening)',
            description: 'Complete Reading and Listening tests back-to-back. Score and log mistakes in your log.',
            minutes: 105
          },
          {
            id: 'w6d6t2',
            skill: 'general',
            title: 'Full Mock Exam (Writing & Speaking)',
            description: 'Write both Task 1 & Task 2, and complete a full recorded Speaking interview. Compare scores.',
            minutes: 90
          },
          {
            id: 'w6d6t3',
            skill: 'general',
            title: 'Weekly error log audit & review',
            description: 'Compile insights from this week\'s tests. Test yourself on AWL Sublists 8 and 9 in the Arena.',
            minutes: 30
          }
        ]
      },
      {
        day: 7,
        label: 'Sunday',
        tasks: [
          {
            id: 'w6d7t1',
            skill: 'general',
            title: 'Rest Day',
            description: 'Rest and relax. Re-energize for the final weak area targetings next week.',
            minutes: 0
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'Weakness Targeting & Error Audit',
    phase: 'exam-mastery',
    phaseLabel: 'Phase 3: Exam Mastery',
    summary: 'Audit your error log, target your weakest question types, and refine your time management strategy.',
    days: [
      {
        day: 1,
        label: 'Monday',
        tasks: [
          {
            id: 'w7d1t1',
            skill: 'reading',
            title: 'Reading: Focus on weakest question types',
            description: 'Identify your 2 weakest question types from your log (e.g., TFNG, Paragraph Matching). Do 20 targeted practice exercises.',
            minutes: 50
          },
          {
            id: 'w7d1t2',
            skill: 'reading',
            title: 'Sync reading errors with strategies',
            description: 'Read the specific strategies guides matching your weakest question types. Practice those techniques.',
            minutes: 30
          },
          {
            id: 'w7d1t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 9 continued — learn 15 words',
            description: 'Master the remaining words of Sublist 9 using matching and spelling game modes.',
            minutes: 20
          }
        ]
      },
      {
        day: 2,
        label: 'Tuesday',
        tasks: [
          {
            id: 'w7d2t1',
            skill: 'listening',
            title: 'Listening: Section 4 dictation drills',
            description: 'Complete 3 Section 4 tests focusing on note completion. Audit letters capitalization and number spellings.',
            minutes: 40
          },
          {
            id: 'w7d2t2',
            skill: 'listening',
            title: 'Target weakest listening question types',
            description: 'Review error log. Practice map labeling or multiple choice questions if they are your weak areas.',
            minutes: 25
          },
          {
            id: 'w7d2t3',
            skill: 'grammar',
            title: 'Grammar: Advanced structures review',
            description: 'Review inversion (e.g., "Not only did they...") and passive voice. Practice using them in Writing essays.',
            minutes: 25
          }
        ]
      },
      {
        day: 3,
        label: 'Wednesday',
        tasks: [
          {
            id: 'w7d3t1',
            skill: 'writing',
            title: 'Writing: Rewrite previous weak essays',
            description: 'Select 2 previously written essays where you scored below Band 7. Rewrite them incorporating feedback and corrections.',
            minutes: 55
          },
          {
            id: 'w7d3t2',
            skill: 'writing',
            title: 'Timed Task 1 maps or processes',
            description: 'Write a full maps or processes report in 20 minutes. Focus on sequence markers and passive verbs.',
            minutes: 30
          },
          {
            id: 'w7d3t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 10 — learn 15 words',
            description: 'Review Sublist 10 vocabulary in the Study Arena. Focus on advanced academic terms.',
            minutes: 20
          }
        ]
      },
      {
        day: 4,
        label: 'Thursday',
        tasks: [
          {
            id: 'w7d4t1',
            skill: 'speaking',
            title: 'Speaking: Fluency and pronunciation drills',
            description: 'Record yourself answering Part 2 and Part 3 questions. Audit pauses, fillers, and word pronunciations.',
            minutes: 40
          },
          {
            id: 'w7d4t2',
            skill: 'speaking',
            title: 'Vocabulary expansion speaking practice',
            description: 'Practice answering Speaking questions using advanced AWL terms you learned. Focus on collocations.',
            minutes: 25
          },
          {
            id: 'w7d4t3',
            skill: 'grammar',
            title: 'Grammar: Sentence variety drills',
            description: 'Practice combining simple sentences into compound or complex sentences. Verify grammatical accuracy.',
            minutes: 25
          }
        ]
      },
      {
        day: 5,
        label: 'Friday',
        tasks: [
          {
            id: 'w7d5t1',
            skill: 'general',
            title: 'Full Mock Test: All 4 Skills',
            description: 'Take a complete IELTS mock test strictly timed. Record your scores and verify if they are consistent.',
            minutes: 170
          },
          {
            id: 'w7d5t2',
            skill: 'general',
            title: 'Detailed Mock Exam analysis',
            description: 'Score and evaluate your mock test. Update your error log with final weakness insights.',
            minutes: 30
          },
          {
            id: 'w7d5t3',
            skill: 'vocabulary',
            title: 'AWL Sublist 10 continued — learn 15 words',
            description: 'Master the remaining words of Sublist 10 using multiple choice quiz and matching games.',
            minutes: 20
          }
        ]
      },
      {
        day: 6,
        label: 'Saturday',
        tasks: [
          {
            id: 'w7d6t1',
            skill: 'general',
            title: 'Error Log Audit: Top 10 mistakes',
            description: 'Go through your entire error log. Compile a list of your top 10 recurring mistakes. Write down a concrete prevention plan for each.',
            minutes: 45
          },
          {
            id: 'w7d6t2',
            skill: 'general',
            title: 'Collocation and synonym review',
            description: 'Review your personal collocation lists and synonym sheets compiled during reading practice.',
            minutes: 30
          },
          {
            id: 'w7d6t3',
            skill: 'general',
            title: 'Weekly error log audit & review',
            description: 'Final review of this week\'s weak area results. Test yourself in the Arena on all AWL Sublists.',
            minutes: 30
          }
        ]
      },
      {
        day: 7,
        label: 'Sunday',
        tasks: [
          {
            id: 'w7d7t1',
            skill: 'general',
            title: 'Rest Day',
            description: 'Relax. Re-energize for your final preparation week.',
            minutes: 0
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: 'Final Simulation & Exam Prep',
    phase: 'exam-mastery',
    phaseLabel: 'Phase 3: Exam Mastery',
    summary: 'Complete your final exam simulations, review high-yield flashcards, and prepare mentally for the test day.',
    days: [
      {
        day: 1,
        label: 'Monday',
        tasks: [
          {
            id: 'w8d1t1',
            skill: 'general',
            title: 'Final Mock Exam: Timed',
            description: 'Complete a full-length IELTS test (Reading, Listening, Writing) under strict exam conditions. Record scores.',
            minutes: 160
          },
          {
            id: 'w8d1t2',
            skill: 'general',
            title: 'Final Mock Exam score and review',
            description: 'Analyze any mistakes. Focus on confirming why you made them and make a note to avoid them on the real test.',
            minutes: 30
          },
          {
            id: 'w8d1t3',
            skill: 'vocabulary',
            title: 'High-Yield Vocabulary review',
            description: 'Review your personal list of weak words. Practice matching them in the Arena.',
            minutes: 20
          }
        ]
      },
      {
        day: 2,
        label: 'Tuesday',
        tasks: [
          {
            id: 'w8d2t1',
            skill: 'reading',
            title: 'Reading: Light maintenance practice',
            description: 'Complete 1 Reading passage timed. Focus on applying skimming/scanning strategies smoothly.',
            minutes: 25
          },
          {
            id: 'w8d2t2',
            skill: 'listening',
            title: 'Listening: Light maintenance practice',
            description: 'Complete 1 Listening test section. Focus on Section 4 notes spelling accuracy.',
            minutes: 20
          },
          {
            id: 'w8d2t3',
            skill: 'general',
            title: 'Error log review: Prevention plan',
            description: 'Review your top 10 mistakes list and the prevention plan you wrote. Visualize avoiding them.',
            minutes: 20
          }
        ]
      },
      {
        day: 3,
        label: 'Wednesday',
        tasks: [
          {
            id: 'w8d3t1',
            skill: 'writing',
            title: 'Writing: Timed outline practice',
            description: 'Analyze 3 Task 2 prompts and 2 Task 1 diagrams. Brainstorm arguments, structure paragraphs, and write introductions. Do not write full essays.',
            minutes: 40
          },
          {
            id: 'w8d3t2',
            skill: 'writing',
            title: 'Grammar and spelling checklist review',
            description: 'Review your grammar and spelling error lists one final time. Memorize your personal warning signs.',
            minutes: 25
          },
          {
            id: 'w8d3t3',
            skill: 'vocabulary',
            title: 'High-Yield Collocations review',
            description: 'Review key collocations and transition linkers in your notebook.',
            minutes: 15
          }
        ]
      },
      {
        day: 4,
        label: 'Thursday',
        tasks: [
          {
            id: 'w8d4t1',
            skill: 'speaking',
            title: 'Speaking: Final mock interview',
            description: 'Record yourself completing a final Speaking mock interview. Focus on natural fluency and intonations.',
            minutes: 20
          },
          {
            id: 'w8d4t2',
            skill: 'speaking',
            title: 'Review speaking transition words',
            description: 'Review abstract linkers and hedging phrases. Warm up your voice by reading out loud for 10 minutes.',
            minutes: 15
          },
          {
            id: 'w8d4t3',
            skill: 'general',
            title: 'Confidence check: W1 vs W8 comparison',
            description: 'Look back at your Diagnostic test scores and first essays. Note how much your speed, accuracy, and confidence have improved.',
            minutes: 15
          }
        ]
      },
      {
        day: 5,
        label: 'Friday',
        tasks: [
          {
            id: 'w8d5t1',
            skill: 'general',
            title: 'Light Practice: Warm-up drill',
            description: 'Do a very light practice session: 1 reading passage and 1 listening section. Do not score yourself; just focus on focus and ease.',
            minutes: 30
          },
          {
            id: 'w8d5t2',
            skill: 'general',
            title: 'Review exam day checklist',
            description: 'Review your exam checklist. Print your registration details, prepare your ID, pencils, erasers, and plan your route to the test centre.',
            minutes: 15
          },
          {
            id: 'w8d5t3',
            skill: 'general',
            title: 'Organize study materials & log out',
            description: 'Pack away your study books. Organize your notes. Clear your mind. Log out of study mode.',
            minutes: 15
          }
        ]
      },
      {
        day: 6,
        label: 'Saturday',
        tasks: [
          {
            id: 'w8d6t1',
            skill: 'general',
            title: 'REST DAY: Relax and recharge',
            description: 'Do absolutely no studying today. Eat well, drink plenty of water, and get at least 8 hours of sleep to ensure peak mental clarity tomorrow.',
            minutes: 0
          }
        ]
      },
      {
        day: 7,
        label: 'Sunday',
        tasks: [
          {
            id: 'w8d7t1',
            skill: 'general',
            title: 'EXAM DAY',
            description: 'Wake up early, eat a healthy breakfast, arrive at the test centre with time to spare, stay calm, and focus. You are fully prepared. Good luck!',
            minutes: 0
          }
        ]
      }
    ]
  }
];


export const VOCABULARY = [
  // ===== AWL SUBLIST 1 =======================================================
  { word: 'analyse', definition: 'To examine something in detail to understand it or explain it', example: 'The data was analysed to identify emerging trends in education.', collocations: ['analyse data', 'analyse results', 'critically analyse'], sublist: 1, topics: ['general'] },
  { word: 'approach', definition: 'A way of dealing with a situation or problem', example: 'The government adopted a new approach to tackling climate change.', collocations: ['adopt an approach', 'a holistic approach', 'approach a problem'], sublist: 1, topics: ['general'] },
  { word: 'assess', definition: 'To evaluate or judge the quality, importance, or value of something', example: 'Teachers should assess students using a variety of methods.', collocations: ['assess performance', 'assess the impact', 'critically assess'], sublist: 1, topics: ['education'] },
  { word: 'assume', definition: 'To accept something as true without proof', example: 'It is often assumed that technology always improves quality of life.', collocations: ['assume responsibility', 'widely assumed', 'assume a role'], sublist: 1, topics: ['general'] },
  { word: 'authority', definition: 'The power or right to give orders, make decisions, or enforce rules', example: 'Local authorities are responsible for maintaining public parks.', collocations: ['local authority', 'authority figure', 'exercise authority'], sublist: 1, topics: ['society'] },
  { word: 'available', definition: 'Able to be used or obtained', example: 'Online resources are widely available for IELTS preparation.', collocations: ['readily available', 'publicly available', 'make available'], sublist: 1, topics: ['general'] },
  { word: 'benefit', definition: 'An advantage or positive result', example: 'The benefits of regular exercise extend beyond physical health.', collocations: ['mutual benefit', 'benefit from', 'derive benefit'], sublist: 1, topics: ['health', 'general'] },
  { word: 'concept', definition: 'An abstract idea or general notion', example: 'The concept of sustainability has gained widespread attention.', collocations: ['key concept', 'abstract concept', 'grasp a concept'], sublist: 1, topics: ['general'] },
  { word: 'consist', definition: 'To be composed or made up of', example: 'The exam consists of four separate components.', collocations: ['consist of', 'consist mainly of', 'consist entirely of'], sublist: 1, topics: ['general'] },
  { word: 'constitute', definition: 'To be a part of a whole; to make up', example: 'Young people constitute the largest demographic in many developing nations.', collocations: ['constitute a threat', 'constitute a majority', 'constitute evidence'], sublist: 1, topics: ['general'] },
  { word: 'context', definition: 'The circumstances or setting in which something occurs', example: 'Language must be understood in its cultural context.', collocations: ['in context', 'cultural context', 'broader context'], sublist: 1, topics: ['general'] },
  { word: 'create', definition: 'To bring something into existence', example: 'The government aims to create more employment opportunities.', collocations: ['create opportunities', 'create awareness', 'create a framework'], sublist: 1, topics: ['general', 'work'] },
  { word: 'data', definition: 'Facts, statistics, or information collected for analysis', example: 'The data indicates a significant rise in global temperatures.', collocations: ['collect data', 'data analysis', 'empirical data'], sublist: 1, topics: ['general', 'technology'] },
  { word: 'define', definition: 'To state the meaning of something clearly', example: 'Success can be defined in numerous ways depending on cultural values.', collocations: ['clearly define', 'define a term', 'well-defined'], sublist: 1, topics: ['general'] },
  { word: 'derive', definition: 'To obtain something from a specified source', example: 'Many English words are derived from Latin and Greek roots.', collocations: ['derive from', 'derive benefit', 'derive pleasure'], sublist: 1, topics: ['general'] },
  { word: 'distribute', definition: 'To give shares of something; to spread over an area', example: 'Wealth is not equally distributed across all regions.', collocations: ['distribute resources', 'evenly distributed', 'distribute information'], sublist: 1, topics: ['society', 'globalization'] },
  { word: 'economy', definition: 'The system of production, distribution, and consumption of goods and services', example: 'The global economy has become increasingly interconnected.', collocations: ['global economy', 'economic growth', 'boost the economy'], sublist: 1, topics: ['globalization', 'work'] },
  { word: 'environment', definition: 'The natural world or the conditions in which a person lives or works', example: 'Protecting the environment requires collective action from all nations.', collocations: ['natural environment', 'working environment', 'protect the environment'], sublist: 1, topics: ['environment'] },
  { word: 'establish', definition: 'To set up on a permanent or official basis', example: 'The university was established in 1850 and has grown significantly.', collocations: ['establish a connection', 'well-established', 'establish guidelines'], sublist: 1, topics: ['general'] },
  { word: 'estimate', definition: 'To roughly calculate or judge the value or extent of something', example: 'It is estimated that 1.5 billion people speak English worldwide.', collocations: ['rough estimate', 'conservative estimate', 'estimated cost'], sublist: 1, topics: ['general'] },
  { word: 'evident', definition: 'Clearly seen or understood; obvious', example: 'It is evident that education plays a crucial role in economic development.', collocations: ['clearly evident', 'self-evident', 'become evident'], sublist: 1, topics: ['general'] },
  { word: 'export', definition: 'To send goods to another country for sale', example: 'The country\'s main exports include oil, textiles, and agricultural products.', collocations: ['export goods', 'export market', 'major export'], sublist: 1, topics: ['globalization'] },
  { word: 'factor', definition: 'A circumstance or element contributing to a result', example: 'Several factors contribute to the rise in childhood obesity.', collocations: ['key factor', 'contributing factor', 'decisive factor'], sublist: 1, topics: ['general'] },
  { word: 'finance', definition: 'The management of money or the provision of funds', example: 'Many students struggle to finance their higher education.', collocations: ['personal finance', 'finance a project', 'financial support'], sublist: 1, topics: ['work', 'education'] },
  { word: 'formula', definition: 'A fixed or conventional method for doing something', example: 'There is no simple formula for success in the IELTS exam.', collocations: ['mathematical formula', 'winning formula', 'formula for success'], sublist: 1, topics: ['general'] },
  { word: 'function', definition: 'The purpose or role that something has', example: 'The primary function of education is to prepare students for the workforce.', collocations: ['key function', 'function as', 'perform a function'], sublist: 1, topics: ['general'] },
  { word: 'identify', definition: 'To recognize or establish what something is', example: 'Researchers identified several risk factors associated with the disease.', collocations: ['identify a problem', 'identify trends', 'clearly identify'], sublist: 1, topics: ['general'] },
  { word: 'income', definition: 'Money received for work or through investments', example: 'The average household income has not kept pace with inflation.', collocations: ['household income', 'income inequality', 'disposable income'], sublist: 1, topics: ['work', 'society'] },
  { word: 'indicate', definition: 'To point out or show', example: 'Recent studies indicate that remote work increases productivity.', collocations: ['indicate a trend', 'clearly indicate', 'as indicated by'], sublist: 1, topics: ['general'] },
  { word: 'individual', definition: 'A single person, considered separately from a group', example: 'Each individual has a responsibility to reduce their carbon footprint.', collocations: ['individual rights', 'individual differences', 'on an individual basis'], sublist: 1, topics: ['society'] },

  // ===== AWL SUBLIST 2 =======================================================
  { word: 'achieve', definition: 'To successfully reach a goal through effort', example: 'Students who set clear goals are more likely to achieve academic success.', collocations: ['achieve a goal', 'achieve success', 'achieve results'], sublist: 2, topics: ['education', 'general'] },
  { word: 'acquire', definition: 'To gain possession of something; to learn', example: 'Children acquire language skills naturally through social interaction.', collocations: ['acquire knowledge', 'acquire skills', 'newly acquired'], sublist: 2, topics: ['education'] },
  { word: 'administrate', definition: 'To manage or direct the affairs of an organization', example: 'The test is administered by the British Council and IDP.', collocations: ['administer a test', 'administrative duties', 'administration costs'], sublist: 2, topics: ['work'] },
  { word: 'affect', definition: 'To have an influence on or make a difference to', example: 'Air pollution significantly affects public health in major cities.', collocations: ['adversely affect', 'directly affect', 'significantly affect'], sublist: 2, topics: ['health', 'environment'] },
  { word: 'appropriate', definition: 'Suitable or proper in the circumstances', example: 'It is important to use appropriate vocabulary in academic writing.', collocations: ['appropriate behaviour', 'appropriate measures', 'deemed appropriate'], sublist: 2, topics: ['general'] },
  { word: 'aspect', definition: 'A particular feature or element of something', example: 'One important aspect of language learning is regular practice.', collocations: ['key aspect', 'various aspects', 'aspect of life'], sublist: 2, topics: ['general'] },
  { word: 'assist', definition: 'To help or support', example: 'Technology can assist teachers in delivering more effective lessons.', collocations: ['assist with', 'assist in', 'financial assistance'], sublist: 2, topics: ['general'] },
  { word: 'category', definition: 'A class or division of things having shared characteristics', example: 'The questions can be divided into several distinct categories.', collocations: ['broad category', 'fall into a category', 'category of'], sublist: 2, topics: ['general'] },
  { word: 'chapter', definition: 'A main division of a book or a distinct period', example: 'This chapter explores the impact of globalization on local cultures.', collocations: ['opening chapter', 'chapter of history', 'new chapter'], sublist: 2, topics: ['general'] },
  { word: 'commission', definition: 'An instruction or authority to do something; a group given a task', example: 'The government commissioned a report on the state of public education.', collocations: ['commission a study', 'independent commission', 'commission a report'], sublist: 2, topics: ['society'] },
  { word: 'community', definition: 'A group of people living in the same place or sharing characteristics', example: 'Community involvement is essential for the success of local projects.', collocations: ['local community', 'community service', 'sense of community'], sublist: 2, topics: ['society'] },
  { word: 'complex', definition: 'Consisting of many interconnected parts; not simple', example: 'Climate change is a complex issue that requires international cooperation.', collocations: ['highly complex', 'complex issue', 'complex structure'], sublist: 2, topics: ['general'] },
  { word: 'compute', definition: 'To calculate or reckon a figure or amount', example: 'Modern computers can compute billions of operations per second.', collocations: ['compute data', 'computational power', 'computer-based'], sublist: 2, topics: ['technology'] },
  { word: 'conclude', definition: 'To bring to an end; to reach a judgment after reasoning', example: 'The researchers concluded that early intervention is most effective.', collocations: ['conclude that', 'in conclusion', 'conclusive evidence'], sublist: 2, topics: ['general'] },
  { word: 'conduct', definition: 'To carry out or organize an activity', example: 'The university conducted a survey of student satisfaction.', collocations: ['conduct research', 'conduct a survey', 'conduct an experiment'], sublist: 2, topics: ['general', 'education'] },
  { word: 'consequent', definition: 'Following as a result of something', example: 'The rise in temperatures and the consequent melting of polar ice is alarming.', collocations: ['consequent increase', 'consequently', 'as a consequence'], sublist: 2, topics: ['general'] },
  { word: 'construct', definition: 'To build or create something', example: 'A new hospital was constructed in the eastern part of the city.', collocations: ['construct a building', 'under construction', 'construct an argument'], sublist: 2, topics: ['general'] },
  { word: 'consume', definition: 'To use up a resource; to eat or drink', example: 'Developed countries consume a disproportionate share of global resources.', collocations: ['consume energy', 'consumer goods', 'consumption patterns'], sublist: 2, topics: ['environment', 'globalization'] },
  { word: 'credit', definition: 'The ability to obtain goods before payment; recognition', example: 'Students receive academic credit for completing internship programmes.', collocations: ['credit card', 'academic credit', 'give credit to'], sublist: 2, topics: ['education', 'work'] },
  { word: 'culture', definition: 'The customs, ideas, and social behaviour of a particular group', example: 'Globalization has led to both the spread and erosion of traditional cultures.', collocations: ['cultural diversity', 'cultural heritage', 'pop culture'], sublist: 2, topics: ['culture', 'globalization'] },

  // ===== AWL SUBLIST 3 =======================================================
  { word: 'circumstance', definition: 'A condition or fact that affects a situation', example: 'Under no circumstances should students plagiarize academic work.', collocations: ['under the circumstances', 'difficult circumstances', 'exceptional circumstances'], sublist: 3, topics: ['general'] },
  { word: 'comment', definition: 'A remark expressing an opinion or reaction', example: 'The professor commented on the lack of critical analysis in the essay.', collocations: ['make a comment', 'comment on', 'no comment'], sublist: 3, topics: ['general'] },
  { word: 'compensate', definition: 'To make up for something unwelcome by providing something good', example: 'Higher salaries may compensate for the stressful nature of the work.', collocations: ['compensate for', 'financial compensation', 'compensate workers'], sublist: 3, topics: ['work'] },
  { word: 'component', definition: 'A part or element of a larger whole', example: 'Speaking is a key component of the IELTS examination.', collocations: ['key component', 'essential component', 'component part'], sublist: 3, topics: ['general'] },
  { word: 'consent', definition: 'Permission for something to happen; agreement', example: 'Informed consent must be obtained before conducting research on participants.', collocations: ['give consent', 'informed consent', 'mutual consent'], sublist: 3, topics: ['society'] },
  { word: 'considerable', definition: 'Notably large in size, amount, or extent', example: 'There has been considerable debate about the effectiveness of standardised testing.', collocations: ['considerable amount', 'considerable effort', 'considerable improvement'], sublist: 3, topics: ['general'] },
  { word: 'constant', definition: 'Occurring continuously; unchanging', example: 'The constant evolution of technology presents new challenges for educators.', collocations: ['constant change', 'remain constant', 'constant pressure'], sublist: 3, topics: ['general'] },
  { word: 'constrain', definition: 'To restrict or limit', example: 'Budget constraints often limit the quality of public services.', collocations: ['budget constraints', 'constrain growth', 'time constraints'], sublist: 3, topics: ['general'] },
  { word: 'contribute', definition: 'To give something in order to help achieve or provide something', example: 'Several factors contribute to the success of language learners.', collocations: ['contribute to', 'make a contribution', 'significant contribution'], sublist: 3, topics: ['general'] },
  { word: 'convene', definition: 'To come together for a meeting or activity', example: 'World leaders convened to discuss the global environmental crisis.', collocations: ['convene a meeting', 'convene a panel', 'convention centre'], sublist: 3, topics: ['society'] },
  { word: 'coordinate', definition: 'To organize activities so they work together effectively', example: 'International agencies coordinate relief efforts during natural disasters.', collocations: ['coordinate efforts', 'coordinate activities', 'well-coordinated'], sublist: 3, topics: ['general'] },
  { word: 'core', definition: 'The central or most important part of something', example: 'Critical thinking is at the core of academic success.', collocations: ['core values', 'core curriculum', 'at the core of'], sublist: 3, topics: ['education'] },
  { word: 'corporate', definition: 'Relating to a large company or business', example: 'Corporate social responsibility has become increasingly important.', collocations: ['corporate culture', 'corporate responsibility', 'corporate sector'], sublist: 3, topics: ['work', 'globalization'] },
  { word: 'correspond', definition: 'To be equivalent or analogous; to communicate by letters', example: 'The results do not correspond with the initial predictions.', collocations: ['correspond to', 'correspond with', 'corresponding increase'], sublist: 3, topics: ['general'] },
  { word: 'criteria', definition: 'Standards by which something is judged (plural of criterion)', example: 'The writing is assessed against four specific criteria.', collocations: ['assessment criteria', 'meet the criteria', 'selection criteria'], sublist: 3, topics: ['education'] },
  { word: 'deduce', definition: 'To reach a conclusion by reasoning from evidence', example: 'From the data, we can deduce that urban populations are growing rapidly.', collocations: ['deduce from', 'logical deduction', 'deduce that'], sublist: 3, topics: ['general'] },
  { word: 'demonstrate', definition: 'To show clearly or prove', example: 'The experiment demonstrated the effectiveness of the new treatment.', collocations: ['demonstrate knowledge', 'clearly demonstrate', 'demonstrate ability'], sublist: 3, topics: ['general', 'education'] },
  { word: 'document', definition: 'To record in written or other form; a written record', example: 'All research findings should be carefully documented for future reference.', collocations: ['official document', 'document evidence', 'well-documented'], sublist: 3, topics: ['general'] },
  { word: 'dominate', definition: 'To have a commanding influence over', example: 'English continues to dominate as the global language of business.', collocations: ['dominate the market', 'dominant force', 'dominate the discussion'], sublist: 3, topics: ['globalization'] },
  { word: 'emphasis', definition: 'Special importance or attention given to something', example: 'There is growing emphasis on practical skills in modern education.', collocations: ['place emphasis on', 'particular emphasis', 'shift in emphasis'], sublist: 3, topics: ['education'] },

  // ===== AWL SUBLIST 4 =======================================================
  { word: 'access', definition: 'The means or opportunity to approach or use something', example: 'Not all communities have equal access to quality healthcare.', collocations: ['access to', 'gain access', 'limited access'], sublist: 4, topics: ['society', 'technology'] },
  { word: 'adequate', definition: 'Sufficient for a specific requirement', example: 'Adequate funding is essential for maintaining public infrastructure.', collocations: ['adequate resources', 'adequate preparation', 'deemed adequate'], sublist: 4, topics: ['general'] },
  { word: 'annual', definition: 'Occurring once every year', example: 'The annual report showed a 15% increase in revenue.', collocations: ['annual report', 'annual income', 'annual growth'], sublist: 4, topics: ['work'] },
  { word: 'apparent', definition: 'Clearly visible or understood; seeming', example: 'It is apparent that renewable energy will play a larger role in the future.', collocations: ['immediately apparent', 'become apparent', 'apparent contradiction'], sublist: 4, topics: ['general'] },
  { word: 'approximate', definition: 'Close to the actual but not completely accurate', example: 'The approximate cost of the project is two million dollars.', collocations: ['approximately equal', 'rough approximation', 'approximate figure'], sublist: 4, topics: ['general'] },
  { word: 'attitude', definition: 'A settled way of thinking or feeling about something', example: 'Attitudes towards remote working have changed significantly since the pandemic.', collocations: ['positive attitude', 'change in attitude', 'attitude towards'], sublist: 4, topics: ['society'] },
  { word: 'attribute', definition: 'To regard something as being caused by; a quality or feature', example: 'The decline in biodiversity is largely attributed to deforestation.', collocations: ['attribute to', 'key attribute', 'personal attributes'], sublist: 4, topics: ['general'] },
  { word: 'civil', definition: 'Relating to citizens or the state; polite', example: 'Civil liberties must be protected even during times of crisis.', collocations: ['civil rights', 'civil society', 'civil war'], sublist: 4, topics: ['society', 'crime'] },
  { word: 'code', definition: 'A system of rules or a set of instructions', example: 'Many countries have updated their building codes to improve safety.', collocations: ['code of conduct', 'dress code', 'building code'], sublist: 4, topics: ['general', 'technology'] },
  { word: 'commit', definition: 'To pledge or devote to a cause; to carry out', example: 'The government committed to reducing carbon emissions by 50%.', collocations: ['commit to', 'commit a crime', 'committed to'], sublist: 4, topics: ['general', 'crime'] },
  { word: 'communicate', definition: 'To share or exchange information, ideas, or feelings', example: 'Effective leaders communicate their vision clearly to their teams.', collocations: ['communicate effectively', 'communication skills', 'communicate ideas'], sublist: 4, topics: ['work', 'general'] },
  { word: 'concentrate', definition: 'To focus attention or effort on something', example: 'Students should concentrate on developing their weakest skills.', collocations: ['concentrate on', 'concentration levels', 'highly concentrated'], sublist: 4, topics: ['education'] },
  { word: 'confer', definition: 'To grant a title or right; to discuss', example: 'The university conferred honorary degrees upon three distinguished scholars.', collocations: ['confer a degree', 'confer with', 'conference attendees'], sublist: 4, topics: ['education'] },
  { word: 'contrast', definition: 'To compare in order to show differences', example: 'In contrast to the previous decade, unemployment rates have fallen sharply.', collocations: ['in contrast to', 'stark contrast', 'by contrast'], sublist: 4, topics: ['general'] },
  { word: 'cycle', definition: 'A series of events that is regularly repeated', example: 'The economic cycle typically includes periods of growth and recession.', collocations: ['life cycle', 'business cycle', 'vicious cycle'], sublist: 4, topics: ['general'] },
  { word: 'debate', definition: 'A formal discussion on a particular matter', example: 'There is an ongoing debate about the role of social media in politics.', collocations: ['heated debate', 'ongoing debate', 'debate over'], sublist: 4, topics: ['society', 'media'] },
  { word: 'despite', definition: 'Without being affected by; in spite of', example: 'Despite significant investment, the results remain inconclusive.', collocations: ['despite the fact', 'despite challenges', 'despite evidence'], sublist: 4, topics: ['general'] },
  { word: 'dimension', definition: 'An aspect or feature of a situation', example: 'The social dimension of education is often overlooked.', collocations: ['new dimension', 'cultural dimension', 'add a dimension'], sublist: 4, topics: ['general'] },
  { word: 'domestic', definition: 'Relating to the home or one\'s own country', example: 'Domestic tourism has increased as international travel became more expensive.', collocations: ['domestic market', 'domestic policy', 'domestic violence'], sublist: 4, topics: ['globalization', 'society'] },
  { word: 'emerge', definition: 'To become apparent or prominent', example: 'New technologies are emerging that could revolutionize healthcare.', collocations: ['emerge as', 'emerging trends', 'emerging economies'], sublist: 4, topics: ['technology', 'general'] },

  // ===== AWL SUBLIST 5 =======================================================
  { word: 'academic', definition: 'Relating to education and scholarship', example: 'Academic performance is influenced by both teaching quality and student motivation.', collocations: ['academic achievement', 'academic research', 'academic writing'], sublist: 5, topics: ['education'] },
  { word: 'adjust', definition: 'To alter or move slightly to achieve a better result', example: 'Students need time to adjust to the demands of university education.', collocations: ['adjust to', 'make adjustments', 'well-adjusted'], sublist: 5, topics: ['general'] },
  { word: 'alter', definition: 'To change in character or composition', example: 'Human activities have significantly altered natural ecosystems.', collocations: ['alter significantly', 'alter the course', 'fundamental alteration'], sublist: 5, topics: ['environment'] },
  { word: 'amend', definition: 'To make minor changes to improve or correct', example: 'The law was amended to include stricter penalties for environmental crimes.', collocations: ['amend a law', 'proposed amendment', 'amend the constitution'], sublist: 5, topics: ['society', 'crime'] },
  { word: 'aware', definition: 'Having knowledge or perception of a situation or fact', example: 'People are becoming increasingly aware of the importance of mental health.', collocations: ['well aware', 'raise awareness', 'aware of'], sublist: 5, topics: ['general', 'health'] },
  { word: 'capacity', definition: 'The maximum amount that something can contain or produce', example: 'The hospital is operating at full capacity due to the health crisis.', collocations: ['full capacity', 'capacity building', 'in the capacity of'], sublist: 5, topics: ['health', 'general'] },
  { word: 'challenge', definition: 'A demanding task or situation; to question or dispute', example: 'Climate change presents one of the greatest challenges of our time.', collocations: ['face a challenge', 'pose a challenge', 'meet the challenge'], sublist: 5, topics: ['general', 'environment'] },
  { word: 'clause', definition: 'A unit of grammatical organization; a section of a legal document', example: 'The contract contains a clause about confidentiality.', collocations: ['main clause', 'subordinate clause', 'contractual clause'], sublist: 5, topics: ['general'] },
  { word: 'compound', definition: 'Made up of two or more parts; to make worse', example: 'Air pollution compounds existing health problems in urban areas.', collocations: ['compound the problem', 'chemical compound', 'compound interest'], sublist: 5, topics: ['general'] },
  { word: 'conflict', definition: 'A serious disagreement or fight', example: 'Cultural conflicts can arise when different value systems interact.', collocations: ['armed conflict', 'conflict resolution', 'conflict of interest'], sublist: 5, topics: ['society', 'globalization'] },
  { word: 'consult', definition: 'To seek information or advice from someone', example: 'Governments should consult with experts before making policy decisions.', collocations: ['consult with', 'consultation process', 'consult a specialist'], sublist: 5, topics: ['general'] },
  { word: 'contact', definition: 'Communication with or reaching someone', example: 'Maintaining contact with native speakers improves language fluency.', collocations: ['come into contact', 'make contact', 'point of contact'], sublist: 5, topics: ['general'] },
  { word: 'decline', definition: 'To decrease or deteriorate', example: 'There has been a steady decline in the number of students studying languages.', collocations: ['sharp decline', 'decline in', 'gradual decline'], sublist: 5, topics: ['general'] },
  { word: 'discrete', definition: 'Individually separate and distinct', example: 'The course is divided into twelve discrete modules.', collocations: ['discrete units', 'discrete categories', 'discrete stages'], sublist: 5, topics: ['general'] },
  { word: 'draft', definition: 'A preliminary version of a piece of writing', example: 'It is advisable to write at least one draft before the final version of an essay.', collocations: ['first draft', 'draft a plan', 'rough draft'], sublist: 5, topics: ['general', 'education'] },
  { word: 'enable', definition: 'To give someone the ability or means to do something', example: 'Technology has enabled students to access information from anywhere in the world.', collocations: ['enable access', 'enable growth', 'enable people to'], sublist: 5, topics: ['technology', 'general'] },
  { word: 'energy', definition: 'The strength and vitality required for physical or mental activity', example: 'Renewable energy sources are becoming more cost-effective.', collocations: ['renewable energy', 'energy consumption', 'energy efficiency'], sublist: 5, topics: ['environment', 'technology'] },
  { word: 'enforce', definition: 'To compel observance of a law or rule', example: 'Stricter regulations need to be enforced to protect endangered species.', collocations: ['enforce a law', 'enforcement agency', 'strictly enforced'], sublist: 5, topics: ['crime', 'society'] },
  { word: 'entity', definition: 'A thing with distinct and independent existence', example: 'Each university operates as a separate legal entity.', collocations: ['legal entity', 'separate entity', 'business entity'], sublist: 5, topics: ['general'] },
  { word: 'equivalent', definition: 'Equal in value, function, or meaning', example: 'An IELTS score of 7.0 is roughly equivalent to a CEFR level C1.', collocations: ['equivalent to', 'rough equivalent', 'equivalent qualifications'], sublist: 5, topics: ['education'] },

  // ===== AWL SUBLIST 6 =======================================================
  { word: 'abstract', definition: 'Existing in thought or as an idea but not having physical existence', example: 'Abstract concepts like justice are often debated in philosophy classes.', collocations: ['abstract concept', 'abstract idea', 'in the abstract'], sublist: 6, topics: ['general'] },
  { word: 'accurate', definition: 'Correct in all details; exact', example: 'Accurate data collection is essential for reliable research findings.', collocations: ['highly accurate', 'accurate information', 'accuracy rate'], sublist: 6, topics: ['general'] },
  { word: 'acknowledge', definition: 'To accept or admit the existence or truth of', example: 'It is widely acknowledged that education reduces poverty.', collocations: ['widely acknowledged', 'acknowledge the problem', 'acknowledge the contribution'], sublist: 6, topics: ['general'] },
  { word: 'aggregate', definition: 'A whole formed by combining several elements', example: 'The aggregate score is calculated from all four components.', collocations: ['aggregate data', 'in aggregate', 'aggregate score'], sublist: 6, topics: ['general'] },
  { word: 'allocate', definition: 'To distribute resources or duties for a particular purpose', example: 'The government allocated additional funding to the healthcare sector.', collocations: ['allocate resources', 'allocate funds', 'time allocation'], sublist: 6, topics: ['society', 'work'] },
  { word: 'assign', definition: 'To designate or appoint someone to a task or role', example: 'Students were assigned to different groups for the research project.', collocations: ['assign a task', 'assign responsibility', 'assigned reading'], sublist: 6, topics: ['education'] },
  { word: 'attach', definition: 'To fasten or join one thing to another', example: 'Many cultures attach great importance to family traditions.', collocations: ['attach importance', 'attach a document', 'attachment theory'], sublist: 6, topics: ['general'] },
  { word: 'author', definition: 'A writer of a book or article; to be the creator of', example: 'The author argues that globalization has more benefits than drawbacks.', collocations: ['author a paper', 'co-author', 'authoritative source'], sublist: 6, topics: ['general', 'media'] },
  { word: 'bond', definition: 'A connection or tie between people or things', example: 'Strong bonds between students and teachers enhance the learning experience.', collocations: ['strong bond', 'bond between', 'bond with'], sublist: 6, topics: ['society'] },
  { word: 'brief', definition: 'Of short duration; a summary of facts', example: 'The report provides a brief overview of the current economic situation.', collocations: ['brief overview', 'in brief', 'brief summary'], sublist: 6, topics: ['general'] },
  { word: 'capable', definition: 'Having the ability or quality necessary to do something', example: 'AI systems are now capable of performing complex tasks previously done by humans.', collocations: ['capable of', 'highly capable', 'capability assessment'], sublist: 6, topics: ['technology'] },
  { word: 'cite', definition: 'To quote as evidence or justification', example: 'Several studies are cited to support the claim that exercise improves cognition.', collocations: ['cite evidence', 'cite a source', 'cited as'], sublist: 6, topics: ['education', 'general'] },
  { word: 'cooperate', definition: 'To work jointly with others towards the same end', example: 'Nations must cooperate to address transnational environmental issues.', collocations: ['cooperate with', 'international cooperation', 'cooperate fully'], sublist: 6, topics: ['globalization'] },
  { word: 'discriminate', definition: 'To make unjust distinctions in treatment; to distinguish', example: 'Laws exist to prevent employers from discriminating on the basis of gender.', collocations: ['discriminate against', 'age discrimination', 'discriminate between'], sublist: 6, topics: ['society', 'crime'] },
  { word: 'display', definition: 'To show or exhibit', example: 'The museum displays artifacts from various historical periods.', collocations: ['on display', 'display of', 'display behaviour'], sublist: 6, topics: ['culture'] },
  { word: 'diverse', definition: 'Showing a great deal of variety', example: 'Modern cities are home to increasingly diverse populations.', collocations: ['culturally diverse', 'diverse range', 'diversity of'], sublist: 6, topics: ['society', 'culture'] },
  { word: 'domain', definition: 'An area of knowledge or activity', example: 'Education reform falls within the domain of public policy.', collocations: ['public domain', 'domain of', 'domain knowledge'], sublist: 6, topics: ['general'] },
  { word: 'edit', definition: 'To prepare written material for publication by correcting or modifying', example: 'Students should always edit their essays before submitting them.', collocations: ['edit a document', 'editorial process', 'video editing'], sublist: 6, topics: ['general', 'media'] },
  { word: 'enhance', definition: 'To intensify, increase, or further improve quality', example: 'Technology can enhance the learning experience when used effectively.', collocations: ['enhance performance', 'enhance quality', 'significantly enhance'], sublist: 6, topics: ['technology', 'education'] },
  { word: 'estate', definition: 'An area of land or property', example: 'The old factory estate was converted into a modern residential complex.', collocations: ['real estate', 'housing estate', 'industrial estate'], sublist: 6, topics: ['general'] },

  // ===== AWL SUBLIST 7 =======================================================
  { word: 'adapt', definition: 'To adjust to new conditions or circumstances', example: 'Species that cannot adapt to environmental changes face extinction.', collocations: ['adapt to', 'highly adaptable', 'adaptation strategies'], sublist: 7, topics: ['environment', 'general'] },
  { word: 'adult', definition: 'A person who is fully grown or developed', example: 'Adult literacy programmes have been implemented in many developing countries.', collocations: ['adult education', 'adult learner', 'young adult'], sublist: 7, topics: ['education'] },
  { word: 'advocate', definition: 'To publicly recommend or support', example: 'Many experts advocate for stricter regulations on carbon emissions.', collocations: ['advocate for', 'strong advocate', 'advocacy group'], sublist: 7, topics: ['society', 'environment'] },
  { word: 'chemical', definition: 'Relating to or produced by chemistry; a substance', example: 'The overuse of chemical fertilizers has degraded soil quality.', collocations: ['chemical reaction', 'chemical substance', 'chemical industry'], sublist: 7, topics: ['environment', 'health'] },
  { word: 'comprehensive', definition: 'Including all or nearly all elements or aspects', example: 'A comprehensive study of the issue is needed before any decisions are made.', collocations: ['comprehensive review', 'comprehensive plan', 'comprehensive approach'], sublist: 7, topics: ['general'] },
  { word: 'comprise', definition: 'To consist of; to be made up of', example: 'The committee comprises representatives from ten different countries.', collocations: ['comprise of', 'mainly comprise', 'comprising a total of'], sublist: 7, topics: ['general'] },
  { word: 'confirm', definition: 'To establish the truth or correctness of something', example: 'Recent studies confirm that regular exercise reduces the risk of heart disease.', collocations: ['confirm findings', 'confirm a booking', 'confirmed by'], sublist: 7, topics: ['general', 'health'] },
  { word: 'contrary', definition: 'Opposite in nature, direction, or meaning', example: 'Contrary to popular belief, not all fats are bad for health.', collocations: ['on the contrary', 'contrary to', 'contrary view'], sublist: 7, topics: ['general'] },
  { word: 'convert', definition: 'To change the form, character, or function of something', example: 'The old warehouse was converted into a modern art gallery.', collocations: ['convert into', 'energy conversion', 'convert to'], sublist: 7, topics: ['general'] },
  { word: 'couple', definition: 'Two people or things; to combine or connect', example: 'The success was due to a couple of key factors working together.', collocations: ['a couple of', 'coupled with', 'couple together'], sublist: 7, topics: ['general'] },
  { word: 'decade', definition: 'A period of ten years', example: 'Over the past decade, internet usage has increased dramatically.', collocations: ['past decade', 'over a decade', 'in the last decade'], sublist: 7, topics: ['general'] },
  { word: 'definite', definition: 'Clearly stated or decided; certain', example: 'There is a definite link between education levels and economic prosperity.', collocations: ['definite answer', 'definite improvement', 'definitely agree'], sublist: 7, topics: ['general'] },
  { word: 'deny', definition: 'To refuse to admit the truth of something', example: 'It cannot be denied that technology has transformed modern communication.', collocations: ['deny access', 'deny a claim', 'cannot be denied'], sublist: 7, topics: ['general'] },
  { word: 'differentiate', definition: 'To recognize or identify the differences between things', example: 'Students must learn to differentiate between facts and opinions.', collocations: ['differentiate between', 'product differentiation', 'clearly differentiate'], sublist: 7, topics: ['education'] },
  { word: 'dispose', definition: 'To get rid of; to make someone inclined to act in a certain way', example: 'Waste should be disposed of responsibly to minimise environmental damage.', collocations: ['dispose of', 'at one\'s disposal', 'waste disposal'], sublist: 7, topics: ['environment'] },
  { word: 'dynamic', definition: 'Characterized by constant change, activity, or progress', example: 'The dynamic nature of technology requires workers to continually update their skills.', collocations: ['dynamic environment', 'dynamic process', 'group dynamics'], sublist: 7, topics: ['technology', 'work'] },
  { word: 'eliminate', definition: 'To completely remove or get rid of', example: 'The programme aims to eliminate poverty in rural communities.', collocations: ['eliminate waste', 'eliminate barriers', 'eliminate the risk'], sublist: 7, topics: ['society'] },
  { word: 'empirical', definition: 'Based on observation or experience rather than theory', example: 'Empirical evidence suggests that early childhood education improves long-term outcomes.', collocations: ['empirical evidence', 'empirical research', 'empirical data'], sublist: 7, topics: ['education', 'general'] },
  { word: 'equip', definition: 'To supply with the necessary items for a purpose', example: 'Schools must equip students with the skills needed for the modern workplace.', collocations: ['well-equipped', 'equip with', 'equip students'], sublist: 7, topics: ['education'] },
  { word: 'extract', definition: 'To remove or take out', example: 'Key information can be extracted from the passage by careful reading.', collocations: ['extract information', 'extract data', 'natural extract'], sublist: 7, topics: ['general'] },

  // ===== AWL SUBLIST 8 =======================================================
  { word: 'abandon', definition: 'To give up completely; to cease to support', example: 'Many rural residents have abandoned farming in favour of urban employment.', collocations: ['abandon a plan', 'abandon hope', 'abandoned building'], sublist: 8, topics: ['general'] },
  { word: 'accompany', definition: 'To go somewhere with someone; to occur at the same time', example: 'Economic growth is often accompanied by rising inequality.', collocations: ['accompanied by', 'accompanying document', 'accompany someone'], sublist: 8, topics: ['general'] },
  { word: 'accumulate', definition: 'To gather together or acquire an increasing amount', example: 'Plastic waste has accumulated in the world\'s oceans over decades.', collocations: ['accumulate wealth', 'accumulate evidence', 'accumulation of'], sublist: 8, topics: ['environment', 'general'] },
  { word: 'ambiguous', definition: 'Open to more than one interpretation; unclear', example: 'The wording of the question was ambiguous, leading to confusion.', collocations: ['ambiguous statement', 'ambiguous results', 'avoid ambiguity'], sublist: 8, topics: ['general'] },
  { word: 'append', definition: 'To add something as a supplement', example: 'Additional data was appended to the original report.', collocations: ['append to', 'appended document', 'appendix'], sublist: 8, topics: ['general'] },
  { word: 'appreciate', definition: 'To recognise the full worth of; to understand', example: 'Students should appreciate the value of cultural diversity in a globalized world.', collocations: ['greatly appreciate', 'appreciate the importance', 'appreciation of'], sublist: 8, topics: ['general', 'culture'] },
  { word: 'arbitrary', definition: 'Based on random choice rather than any reason or system', example: 'The selection process should not be arbitrary but based on clear criteria.', collocations: ['arbitrary decision', 'arbitrary choice', 'appear arbitrary'], sublist: 8, topics: ['general'] },
  { word: 'automate', definition: 'To convert a process to be operated by machines or computers', example: 'Many manufacturing jobs have been automated in recent decades.', collocations: ['automated system', 'automate processes', 'automation of'], sublist: 8, topics: ['technology', 'work'] },
  { word: 'bias', definition: 'Prejudice in favour of or against one thing', example: 'Media bias can significantly influence public opinion on political issues.', collocations: ['cultural bias', 'confirmation bias', 'biased towards'], sublist: 8, topics: ['media', 'society'] },
  { word: 'chart', definition: 'A sheet of information in the form of a table, graph, or diagram', example: 'The bar chart illustrates changes in energy consumption over a ten-year period.', collocations: ['bar chart', 'pie chart', 'chart a course'], sublist: 8, topics: ['general'] },
  { word: 'clarify', definition: 'To make a statement or situation less confused and more clear', example: 'The teacher clarified the differences between active and passive voice.', collocations: ['clarify a point', 'need clarification', 'clarify the situation'], sublist: 8, topics: ['general', 'education'] },
  { word: 'commodity', definition: 'A raw material or primary agricultural product', example: 'Oil remains one of the most traded commodities in the global market.', collocations: ['commodity prices', 'commodity market', 'valuable commodity'], sublist: 8, topics: ['globalization'] },
  { word: 'complement', definition: 'To add to something in a way that enhances or improves it', example: 'Online resources can complement traditional classroom teaching.', collocations: ['complement each other', 'complementary skills', 'complement to'], sublist: 8, topics: ['education'] },
  { word: 'conform', definition: 'To comply with rules, standards, or laws', example: 'All products must conform to national safety standards.', collocations: ['conform to standards', 'conformity with', 'social conformity'], sublist: 8, topics: ['society'] },
  { word: 'contemporary', definition: 'Living or occurring at the same time; modern', example: 'Contemporary art reflects the social and political issues of our time.', collocations: ['contemporary society', 'contemporary art', 'contemporary issues'], sublist: 8, topics: ['culture', 'society'] },
  { word: 'contradict', definition: 'To deny the truth of a statement by asserting the opposite', example: 'The new findings contradict earlier assumptions about the effectiveness of the drug.', collocations: ['contradict findings', 'self-contradictory', 'contradiction between'], sublist: 8, topics: ['general'] },
  { word: 'crucial', definition: 'Of great importance; critical', example: 'Early childhood education is crucial for cognitive development.', collocations: ['crucial role', 'crucial factor', 'crucially important'], sublist: 8, topics: ['education', 'general'] },
  { word: 'currency', definition: 'A system of money in general use; the fact of being current', example: 'The value of the national currency has fluctuated significantly.', collocations: ['local currency', 'currency exchange', 'gain currency'], sublist: 8, topics: ['globalization'] },
  { word: 'denote', definition: 'To be a sign of; to indicate', example: 'The arrows denote the direction of the manufacturing process.', collocations: ['denote a change', 'denote significance', 'denoted by'], sublist: 8, topics: ['general'] },
  { word: 'detect', definition: 'To discover or identify the presence of something', example: 'Advanced technology can detect pollutants at very low concentrations.', collocations: ['detect a problem', 'early detection', 'detect changes'], sublist: 8, topics: ['technology', 'health'] },

  // ===== AWL SUBLIST 9 =======================================================
  { word: 'accommodate', definition: 'To provide lodging or room for; to adapt to', example: 'The city must accommodate a growing population through urban planning.', collocations: ['accommodate needs', 'accommodate changes', 'accommodation for'], sublist: 9, topics: ['general'] },
  { word: 'analogy', definition: 'A comparison between two things to explain or clarify', example: 'The professor drew an analogy between the human brain and a computer.', collocations: ['draw an analogy', 'by analogy', 'analogous to'], sublist: 9, topics: ['general'] },
  { word: 'anticipate', definition: 'To regard as probable; to expect', example: 'It is anticipated that demand for renewable energy will continue to grow.', collocations: ['anticipate problems', 'widely anticipated', 'anticipate demand'], sublist: 9, topics: ['general'] },
  { word: 'assure', definition: 'To tell someone positively to remove doubt', example: 'The report assures readers that the data has been thoroughly verified.', collocations: ['quality assurance', 'assure someone', 'rest assured'], sublist: 9, topics: ['general'] },
  { word: 'attain', definition: 'To succeed in achieving', example: 'Many students attain their target band score through consistent practice.', collocations: ['attain a goal', 'attainment levels', 'attainable target'], sublist: 9, topics: ['education'] },
  { word: 'behalf', definition: 'In the interest of a person or group', example: 'The lawyer spoke on behalf of the environmental organization.', collocations: ['on behalf of', 'act on behalf', 'speak on behalf'], sublist: 9, topics: ['general'] },
  { word: 'bulk', definition: 'The greater part of something; large in size', example: 'The bulk of the world\'s energy still comes from fossil fuels.', collocations: ['the bulk of', 'in bulk', 'bulk purchasing'], sublist: 9, topics: ['general'] },
  { word: 'cease', definition: 'To bring or come to an end', example: 'The factory ceased operations due to environmental violations.', collocations: ['cease to exist', 'ceasefire', 'cease operations'], sublist: 9, topics: ['general'] },
  { word: 'coherent', definition: 'Logical and consistent; united as a whole', example: 'A coherent essay presents ideas in a clear and logical sequence.', collocations: ['coherent argument', 'coherent structure', 'coherence and cohesion'], sublist: 9, topics: ['education', 'general'] },
  { word: 'coincide', definition: 'To occur at the same time or place', example: 'The rise in obesity rates coincided with the increase in processed food consumption.', collocations: ['coincide with', 'coincidental', 'by coincidence'], sublist: 9, topics: ['health', 'general'] },
  { word: 'commence', definition: 'To begin; to start', example: 'Construction of the new library is expected to commence next spring.', collocations: ['commence operations', 'commencement ceremony', 'commence work'], sublist: 9, topics: ['general'] },
  { word: 'compatible', definition: 'Able to exist or occur together without conflict', example: 'Economic growth and environmental protection are not always compatible.', collocations: ['compatible with', 'compatibility issues', 'fully compatible'], sublist: 9, topics: ['general', 'environment'] },
  { word: 'concurrent', definition: 'Existing, happening, or done at the same time', example: 'The concurrent development of technology and education has been remarkable.', collocations: ['concurrent with', 'concurrently', 'concurrent events'], sublist: 9, topics: ['general'] },
  { word: 'confine', definition: 'To keep within certain limits; to restrict', example: 'The discussion should not be confined to economic factors alone.', collocations: ['confined to', 'within the confines', 'confined space'], sublist: 9, topics: ['general'] },
  { word: 'controversy', definition: 'Disagreement, typically prolonged and public', example: 'Genetic engineering remains a topic of considerable controversy.', collocations: ['surrounded by controversy', 'controversial issue', 'cause controversy'], sublist: 9, topics: ['society', 'technology'] },
  { word: 'converse', definition: 'The opposite; to talk with someone', example: 'Conversely, some argue that traditional methods are more effective.', collocations: ['conversely', 'converse with', 'converse is true'], sublist: 9, topics: ['general'] },
  { word: 'device', definition: 'A thing made for a particular purpose; an invention', example: 'Mobile devices have transformed the way people access information.', collocations: ['electronic device', 'medical device', 'device for'], sublist: 9, topics: ['technology'] },
  { word: 'devote', definition: 'To give time, effort, or resources to a particular activity', example: 'Students should devote at least 30 minutes daily to vocabulary building.', collocations: ['devote time to', 'devoted to', 'devotion to'], sublist: 9, topics: ['general'] },
  { word: 'diminish', definition: 'To make or become less', example: 'The importance of face-to-face communication has not diminished despite technology.', collocations: ['diminish the value', 'diminishing returns', 'significantly diminish'], sublist: 9, topics: ['general'] },
  { word: 'distort', definition: 'To give a misleading account; to alter the shape of', example: 'Media reports can sometimes distort the facts about crime rates.', collocations: ['distort the truth', 'distorted view', 'distortion of'], sublist: 9, topics: ['media'] },

  // ===== AWL SUBLIST 10 ======================================================
  { word: 'adjacent', definition: 'Next to or adjoining something else', example: 'A new car park was constructed adjacent to the shopping centre.', collocations: ['adjacent to', 'adjacent areas', 'adjacent building'], sublist: 10, topics: ['general'] },
  { word: 'albeit', definition: 'Although; even though', example: 'The results were positive, albeit slightly lower than expected.', collocations: ['albeit briefly', 'albeit slowly', 'albeit small'], sublist: 10, topics: ['general'] },
  { word: 'assemble', definition: 'To gather together in one place; to fit parts together', example: 'Delegates assembled from over 50 countries to discuss global health.', collocations: ['assemble a team', 'assembly line', 'assembled from'], sublist: 10, topics: ['general'] },
  { word: 'collapse', definition: 'To fall down or give way suddenly; to fail completely', example: 'The collapse of the housing market led to a severe economic recession.', collocations: ['economic collapse', 'collapse of', 'on the verge of collapse'], sublist: 10, topics: ['general'] },
  { word: 'colleague', definition: 'A person with whom one works', example: 'Collaborating with colleagues from different departments enhances creativity.', collocations: ['close colleague', 'work colleague', 'colleague at work'], sublist: 10, topics: ['work'] },
  { word: 'compile', definition: 'To produce a list or report by assembling information', example: 'The researchers compiled data from over 200 different studies.', collocations: ['compile data', 'compile a report', 'compiled from'], sublist: 10, topics: ['general'] },
  { word: 'conceive', definition: 'To form an idea or plan in the mind', example: 'The project was originally conceived as a short-term initiative.', collocations: ['conceive of', 'conceived as', 'preconceived ideas'], sublist: 10, topics: ['general'] },
  { word: 'convince', definition: 'To cause someone to believe firmly in something', example: 'The evidence is convincing enough to support the proposed policy change.', collocations: ['convince someone', 'convincing argument', 'not convinced'], sublist: 10, topics: ['general'] },
  { word: 'depress', definition: 'To make sad or gloomy; to reduce the level of economic activity', example: 'The economic downturn depressed wages across several industries.', collocations: ['economic depression', 'depressed market', 'depressing outlook'], sublist: 10, topics: ['work', 'health'] },
  { word: 'encounter', definition: 'To unexpectedly meet or experience something', example: 'International students often encounter cultural differences during their studies abroad.', collocations: ['encounter difficulties', 'encounter resistance', 'first encounter'], sublist: 10, topics: ['general', 'culture'] },
  { word: 'enormous', definition: 'Very large in size, quantity, or extent', example: 'The internet has had an enormous impact on how people communicate.', collocations: ['enormous impact', 'enormous potential', 'enormous amount'], sublist: 10, topics: ['general'] },
  { word: 'forthcoming', definition: 'About to happen; willing to give information', example: 'The forthcoming report is expected to address concerns about water quality.', collocations: ['forthcoming events', 'forthcoming publication', 'not forthcoming'], sublist: 10, topics: ['general'] },
  { word: 'incline', definition: 'To feel willing or favourably disposed towards', example: 'Many parents are inclined to invest heavily in their children\'s education.', collocations: ['inclined to agree', 'inclined towards', 'natural inclination'], sublist: 10, topics: ['general'] },
  { word: 'integrity', definition: 'The quality of being honest and having strong moral principles', example: 'Academic integrity requires students to submit only original work.', collocations: ['academic integrity', 'personal integrity', 'integrity of data'], sublist: 10, topics: ['education'] },
  { word: 'intrinsic', definition: 'Belonging naturally; essential', example: 'Intrinsic motivation is more effective than external rewards for long-term learning.', collocations: ['intrinsic value', 'intrinsic motivation', 'intrinsically linked'], sublist: 10, topics: ['education'] },
  { word: 'invoke', definition: 'To call on as a reason; to cite as an authority', example: 'Environmental activists often invoke scientific evidence to support their campaigns.', collocations: ['invoke a right', 'invoke a law', 'invoke a response'], sublist: 10, topics: ['general'] },
  { word: 'levy', definition: 'To impose a tax, fee, or fine', example: 'The government levied a carbon tax on heavy-polluting industries.', collocations: ['levy a tax', 'levy charges', 'tax levy'], sublist: 10, topics: ['society', 'environment'] },
  { word: 'likewise', definition: 'In the same way; also', example: 'Writing skills improve with practice; likewise, speaking fluency requires regular effort.', collocations: ['likewise applicable', 'and likewise', 'do likewise'], sublist: 10, topics: ['general'] },
  { word: 'persist', definition: 'To continue firmly in a course of action despite difficulty', example: 'Gender pay gaps persist in many industries despite legislative efforts.', collocations: ['persist in', 'persistent problem', 'persistence pays off'], sublist: 10, topics: ['society', 'work'] },
  { word: 'pose', definition: 'To present or constitute a problem or danger', example: 'Climate change poses a significant threat to coastal communities.', collocations: ['pose a threat', 'pose a risk', 'pose a challenge'], sublist: 10, topics: ['environment'] },

  // ===== TOPIC VOCABULARY: EDUCATION =========================================
  { word: 'curriculum', definition: 'The subjects comprising a course of study in a school', example: 'The national curriculum should include both academic and vocational subjects.', collocations: ['national curriculum', 'curriculum development', 'curriculum reform'], sublist: 0, topics: ['education'] },
  { word: 'enrolment', definition: 'The action of enrolling or being enrolled', example: 'University enrolment has increased by 30% over the past decade.', collocations: ['enrolment rates', 'student enrolment', 'enrolment figures'], sublist: 0, topics: ['education'] },
  { word: 'tertiary', definition: 'Relating to education at university or college level', example: 'Tertiary education is essential for many professional careers.', collocations: ['tertiary education', 'tertiary level', 'tertiary institution'], sublist: 0, topics: ['education'] },
  { word: 'literacy', definition: 'The ability to read and write', example: 'Improving literacy rates is a key goal of educational development programmes.', collocations: ['literacy rate', 'digital literacy', 'financial literacy'], sublist: 0, topics: ['education'] },
  { word: 'pedagogy', definition: 'The method and practice of teaching', example: 'Modern pedagogy emphasizes student-centred learning approaches.', collocations: ['pedagogical approach', 'pedagogical methods', 'critical pedagogy'], sublist: 0, topics: ['education'] },
  { word: 'scholarship', definition: 'A grant of money for study; academic achievement', example: 'Many talented students rely on scholarships to fund their education.', collocations: ['scholarship programme', 'academic scholarship', 'award a scholarship'], sublist: 0, topics: ['education'] },
  { word: 'compulsory', definition: 'Required by law or a rule; obligatory', example: 'In many countries, education is compulsory until the age of 16.', collocations: ['compulsory education', 'compulsory subject', 'make compulsory'], sublist: 0, topics: ['education'] },
  { word: 'vocational', definition: 'Relating to an occupation or employment', example: 'Vocational training provides practical skills for specific careers.', collocations: ['vocational training', 'vocational education', 'vocational course'], sublist: 0, topics: ['education', 'work'] },
  { word: 'dissertation', definition: 'A long essay on a particular subject, especially for a university degree', example: 'She wrote her dissertation on the impact of social media on adolescent behaviour.', collocations: ['write a dissertation', 'dissertation topic', 'doctoral dissertation'], sublist: 0, topics: ['education'] },
  { word: 'tuition', definition: 'Teaching or instruction; fees charged for instruction', example: 'Rising tuition fees have made higher education less accessible to low-income families.', collocations: ['tuition fees', 'private tuition', 'tuition costs'], sublist: 0, topics: ['education'] },
  { word: 'undergraduate', definition: 'A university student who has not yet received a first degree', example: 'Undergraduate students are required to complete a research project in their final year.', collocations: ['undergraduate degree', 'undergraduate course', 'undergraduate student'], sublist: 0, topics: ['education'] },

  // ===== TOPIC VOCABULARY: TECHNOLOGY ========================================
  { word: 'innovation', definition: 'The introduction of new ideas, methods, or products', example: 'Technological innovation drives economic growth in many developed countries.', collocations: ['technological innovation', 'drive innovation', 'innovative solutions'], sublist: 0, topics: ['technology'] },
  { word: 'automation', definition: 'The use of machines or computers to do work previously done by people', example: 'Automation has led to significant job losses in the manufacturing sector.', collocations: ['industrial automation', 'process automation', 'automation technology'], sublist: 0, topics: ['technology', 'work'] },
  { word: 'artificial intelligence', definition: 'Computer systems able to perform tasks that normally require human intelligence', example: 'Artificial intelligence is being used to diagnose diseases more accurately.', collocations: ['AI technology', 'AI-powered', 'develop AI'], sublist: 0, topics: ['technology'] },
  { word: 'algorithm', definition: 'A process or set of rules followed in calculations or problem-solving', example: 'Social media algorithms determine what content users see in their feeds.', collocations: ['search algorithm', 'algorithm-based', 'develop an algorithm'], sublist: 0, topics: ['technology'] },
  { word: 'cybersecurity', definition: 'The practice of protecting systems and networks from digital attacks', example: 'Companies invest heavily in cybersecurity to protect sensitive data.', collocations: ['cybersecurity threat', 'cybersecurity measures', 'cybersecurity expert'], sublist: 0, topics: ['technology', 'crime'] },
  { word: 'digital literacy', definition: 'The ability to use digital technology and the internet effectively', example: 'Digital literacy should be taught as part of the school curriculum.', collocations: ['promote digital literacy', 'digital literacy skills', 'lack of digital literacy'], sublist: 0, topics: ['technology', 'education'] },
  { word: 'encryption', definition: 'The process of converting information into code to prevent unauthorized access', example: 'End-to-end encryption ensures that only the sender and receiver can read messages.', collocations: ['data encryption', 'encryption technology', 'encryption key'], sublist: 0, topics: ['technology'] },
  { word: 'obsolete', definition: 'No longer produced or used; out of date', example: 'Rapid technological change can make products obsolete within a few years.', collocations: ['become obsolete', 'render obsolete', 'obsolete technology'], sublist: 0, topics: ['technology'] },
  { word: 'surveillance', definition: 'Close observation, especially of a suspected person', example: 'The use of surveillance cameras in public spaces raises privacy concerns.', collocations: ['surveillance camera', 'under surveillance', 'surveillance technology'], sublist: 0, topics: ['technology', 'crime', 'society'] },
  { word: 'virtual reality', definition: 'Computer-generated simulation of a three-dimensional environment', example: 'Virtual reality is being used in medical training to simulate surgical procedures.', collocations: ['VR technology', 'virtual reality headset', 'virtual reality experience'], sublist: 0, topics: ['technology'] },
  { word: 'biotechnology', definition: 'The use of biological processes for industrial and other purposes', example: 'Biotechnology has the potential to revolutionize agriculture and medicine.', collocations: ['biotechnology industry', 'biotechnology research', 'advances in biotechnology'], sublist: 0, topics: ['technology', 'health'] },

  // ===== TOPIC VOCABULARY: ENVIRONMENT =======================================
  { word: 'biodiversity', definition: 'The variety of plant and animal life in a particular habitat', example: 'Deforestation is one of the biggest threats to global biodiversity.', collocations: ['loss of biodiversity', 'biodiversity conservation', 'biodiversity hotspot'], sublist: 0, topics: ['environment'] },
  { word: 'carbon footprint', definition: 'The total amount of greenhouse gases produced by human activities', example: 'Individuals can reduce their carbon footprint by using public transport.', collocations: ['reduce carbon footprint', 'carbon footprint calculator', 'large carbon footprint'], sublist: 0, topics: ['environment'] },
  { word: 'conservation', definition: 'The protection and preservation of the natural environment', example: 'Wildlife conservation programmes have helped several species recover from near extinction.', collocations: ['conservation efforts', 'conservation area', 'energy conservation'], sublist: 0, topics: ['environment'] },
  { word: 'deforestation', definition: 'The clearing of trees from forested areas', example: 'Deforestation in the Amazon has accelerated at an alarming rate.', collocations: ['tropical deforestation', 'rate of deforestation', 'combat deforestation'], sublist: 0, topics: ['environment'] },
  { word: 'ecosystem', definition: 'A biological community of interacting organisms and their physical environment', example: 'Coral reef ecosystems are particularly vulnerable to climate change.', collocations: ['marine ecosystem', 'ecosystem services', 'fragile ecosystem'], sublist: 0, topics: ['environment'] },
  { word: 'emissions', definition: 'The production and discharge of gases, especially greenhouse gases', example: 'Governments must take action to reduce greenhouse gas emissions.', collocations: ['carbon emissions', 'reduce emissions', 'emission standards'], sublist: 0, topics: ['environment'] },
  { word: 'fossil fuels', definition: 'Natural fuels formed from the remains of living organisms (coal, oil, gas)', example: 'The transition away from fossil fuels is essential for combating climate change.', collocations: ['burn fossil fuels', 'fossil fuel dependency', 'fossil fuel industry'], sublist: 0, topics: ['environment'] },
  { word: 'greenhouse effect', definition: 'The trapping of heat in the atmosphere by greenhouse gases', example: 'The enhanced greenhouse effect is the primary cause of global warming.', collocations: ['greenhouse gases', 'greenhouse effect', 'greenhouse emissions'], sublist: 0, topics: ['environment'] },
  { word: 'renewable energy', definition: 'Energy from a source that is not depleted when used (solar, wind, etc.)', example: 'Investment in renewable energy has increased significantly in recent years.', collocations: ['renewable energy sources', 'renewable energy sector', 'shift to renewable energy'], sublist: 0, topics: ['environment', 'technology'] },
  { word: 'sustainability', definition: 'The ability to maintain at a certain level without depleting natural resources', example: 'Sustainability should be at the heart of all development policies.', collocations: ['environmental sustainability', 'sustainable development', 'sustainability goals'], sublist: 0, topics: ['environment'] },
  { word: 'urbanization', definition: 'The process of making an area more urban', example: 'Rapid urbanization has created both opportunities and challenges for developing nations.', collocations: ['rapid urbanization', 'urbanization rate', 'urban sprawl'], sublist: 0, topics: ['environment', 'society'] },
  { word: 'waste management', definition: 'The collection, transport, and disposal of waste', example: 'Effective waste management is crucial for maintaining public health and protecting the environment.', collocations: ['waste management system', 'waste management policy', 'improve waste management'], sublist: 0, topics: ['environment'] },

  // ===== TOPIC VOCABULARY: HEALTH ============================================
  { word: 'obesity', definition: 'The condition of being very overweight', example: 'Childhood obesity has become a major public health concern globally.', collocations: ['obesity rates', 'combat obesity', 'obesity epidemic'], sublist: 0, topics: ['health'] },
  { word: 'sedentary', definition: 'Tending to spend much time seated; characterized by lack of physical activity', example: 'A sedentary lifestyle significantly increases the risk of heart disease.', collocations: ['sedentary lifestyle', 'sedentary behaviour', 'sedentary job'], sublist: 0, topics: ['health'] },
  { word: 'epidemic', definition: 'A widespread occurrence of a disease in a community', example: 'The obesity epidemic affects both developed and developing nations.', collocations: ['global epidemic', 'epidemic of', 'epidemic proportions'], sublist: 0, topics: ['health'] },
  { word: 'wellbeing', definition: 'The state of being comfortable, healthy, or happy', example: 'Employee wellbeing programmes can improve productivity and reduce absenteeism.', collocations: ['mental wellbeing', 'physical wellbeing', 'wellbeing of'], sublist: 0, topics: ['health', 'work'] },
  { word: 'chronic', definition: 'Persisting for a long time or constantly recurring', example: 'Chronic diseases such as diabetes and heart disease account for the majority of healthcare costs.', collocations: ['chronic illness', 'chronic pain', 'chronic condition'], sublist: 0, topics: ['health'] },
  { word: 'malnutrition', definition: 'Lack of proper nutrition caused by not having enough to eat or not eating the right things', example: 'Malnutrition remains a leading cause of child mortality in developing countries.', collocations: ['suffer from malnutrition', 'child malnutrition', 'malnutrition rates'], sublist: 0, topics: ['health'] },
  { word: 'rehabilitation', definition: 'The process of restoring someone to health or normal life through therapy', example: 'Rehabilitation programmes help offenders reintegrate into society.', collocations: ['rehabilitation centre', 'rehabilitation programme', 'drug rehabilitation'], sublist: 0, topics: ['health', 'crime'] },
  { word: 'vaccination', definition: 'Treatment with a vaccine to produce immunity against a disease', example: 'Vaccination programmes have eradicated or controlled many deadly diseases.', collocations: ['vaccination programme', 'vaccination rate', 'childhood vaccination'], sublist: 0, topics: ['health'] },
  { word: 'prevention', definition: 'The action of stopping something from happening', example: 'Prevention is often more cost-effective than treatment for many health conditions.', collocations: ['disease prevention', 'prevention strategy', 'crime prevention'], sublist: 0, topics: ['health', 'crime'] },
  { word: 'life expectancy', definition: 'The average period that a person may expect to live', example: 'Life expectancy has increased significantly over the past century due to advances in medicine.', collocations: ['average life expectancy', 'increase in life expectancy', 'life expectancy rates'], sublist: 0, topics: ['health'] },
  { word: 'pharmaceutical', definition: 'Relating to the preparation and dispensing of medicinal drugs', example: 'The pharmaceutical industry invests billions in research and development each year.', collocations: ['pharmaceutical company', 'pharmaceutical industry', 'pharmaceutical products'], sublist: 0, topics: ['health'] },

  // ===== TOPIC VOCABULARY: WORK & EMPLOYMENT =================================
  { word: 'unemployment', definition: 'The state of being without a paid job', example: 'Youth unemployment is a growing concern in many European countries.', collocations: ['unemployment rate', 'youth unemployment', 'reduce unemployment'], sublist: 0, topics: ['work'] },
  { word: 'recruitment', definition: 'The process of finding and hiring employees', example: 'Online recruitment platforms have transformed how companies find talent.', collocations: ['recruitment process', 'recruitment agency', 'recruitment drive'], sublist: 0, topics: ['work'] },
  { word: 'entrepreneurship', definition: 'The activity of setting up businesses and taking on financial risks', example: 'Entrepreneurship is increasingly encouraged in university programmes.', collocations: ['social entrepreneurship', 'entrepreneurship skills', 'encourage entrepreneurship'], sublist: 0, topics: ['work', 'education'] },
  { word: 'freelance', definition: 'Working for different companies at different times rather than being permanently employed', example: 'The freelance economy has grown rapidly thanks to digital platforms.', collocations: ['freelance work', 'freelance writer', 'freelance economy'], sublist: 0, topics: ['work'] },
  { word: 'workforce', definition: 'The total number of workers employed by a company or in a country', example: 'Women now make up a larger proportion of the global workforce than ever before.', collocations: ['skilled workforce', 'workforce development', 'enter the workforce'], sublist: 0, topics: ['work'] },
  { word: 'productivity', definition: 'The effectiveness of productive effort, measured in output per unit', example: 'Investing in employee training can significantly boost productivity.', collocations: ['increase productivity', 'labour productivity', 'productivity gains'], sublist: 0, topics: ['work'] },
  { word: 'work-life balance', definition: 'The division of time and focus between working and personal life', example: 'Many employees value work-life balance as much as salary when choosing a job.', collocations: ['achieve work-life balance', 'maintain work-life balance', 'work-life balance policy'], sublist: 0, topics: ['work', 'health'] },

  // ===== TOPIC VOCABULARY: MEDIA & ARTS ======================================
  { word: 'censorship', definition: 'The suppression of speech, public communication, or other information', example: 'Internet censorship restricts access to information in some countries.', collocations: ['government censorship', 'media censorship', 'self-censorship'], sublist: 0, topics: ['media', 'society'] },
  { word: 'propaganda', definition: 'Information used to promote a political cause or point of view', example: 'Social media has become a powerful tool for spreading propaganda.', collocations: ['political propaganda', 'propaganda campaign', 'spread propaganda'], sublist: 0, topics: ['media', 'society'] },
  { word: 'journalism', definition: 'The activity of gathering, writing, and publishing news', example: 'Investigative journalism plays a vital role in holding governments accountable.', collocations: ['investigative journalism', 'citizen journalism', 'journalism ethics'], sublist: 0, topics: ['media'] },
  { word: 'heritage', definition: 'Valued objects and qualities such as buildings and traditions passed from previous generations', example: 'UNESCO works to protect cultural heritage sites around the world.', collocations: ['cultural heritage', 'world heritage', 'heritage site'], sublist: 0, topics: ['culture', 'media'] },
  { word: 'genre', definition: 'A category of artistic composition characterized by similarities in form or style', example: 'Science fiction has become one of the most popular genres in contemporary literature.', collocations: ['literary genre', 'music genre', 'genre fiction'], sublist: 0, topics: ['culture'] },

  // ===== TOPIC VOCABULARY: GLOBALIZATION =====================================
  { word: 'outsourcing', definition: 'Obtaining goods or services from an outside supplier', example: 'Many companies reduce costs by outsourcing production to developing countries.', collocations: ['outsource production', 'outsource jobs', 'outsourcing strategy'], sublist: 0, topics: ['globalization', 'work'] },
  { word: 'multinational', definition: 'A large company operating in several countries', example: 'Multinational corporations have a significant influence on the global economy.', collocations: ['multinational company', 'multinational corporation', 'multinational enterprise'], sublist: 0, topics: ['globalization', 'work'] },
  { word: 'tariff', definition: 'A tax on imported or exported goods', example: 'Trade tariffs can protect domestic industries but may increase consumer prices.', collocations: ['trade tariff', 'impose tariffs', 'tariff barriers'], sublist: 0, topics: ['globalization'] },
  { word: 'interdependence', definition: 'The dependence of entities on each other', example: 'Economic interdependence means that a crisis in one country can affect the global economy.', collocations: ['economic interdependence', 'global interdependence', 'mutual interdependence'], sublist: 0, topics: ['globalization'] },
  { word: 'sovereignty', definition: 'The authority of a state to govern itself', example: 'Some argue that globalization threatens national sovereignty.', collocations: ['national sovereignty', 'state sovereignty', 'sovereignty over'], sublist: 0, topics: ['globalization', 'society'] },

  // ===== TOPIC VOCABULARY: CRIME & SOCIETY ===================================
  { word: 'deterrent', definition: 'A thing that discourages someone from doing something', example: 'Harsh prison sentences are often seen as a deterrent to crime.', collocations: ['act as a deterrent', 'effective deterrent', 'nuclear deterrent'], sublist: 0, topics: ['crime'] },
  { word: 'incarceration', definition: 'The state of being confined in prison', example: 'The rate of incarceration varies greatly between countries.', collocations: ['mass incarceration', 'incarceration rate', 'reduce incarceration'], sublist: 0, topics: ['crime'] },
  { word: 'legislation', definition: 'Laws considered collectively', example: 'New legislation was introduced to combat cybercrime.', collocations: ['introduce legislation', 'existing legislation', 'environmental legislation'], sublist: 0, topics: ['crime', 'society'] },
  { word: 'recidivism', definition: 'The tendency of a convicted criminal to reoffend', example: 'Education and job training programmes can reduce recidivism rates.', collocations: ['recidivism rate', 'reduce recidivism', 'high recidivism'], sublist: 0, topics: ['crime'] },
  { word: 'prosecution', definition: 'The institution and conducting of legal proceedings against someone', example: 'The prosecution presented compelling evidence of financial fraud.', collocations: ['criminal prosecution', 'face prosecution', 'prosecution of'], sublist: 0, topics: ['crime'] },
  { word: 'juvenile', definition: 'A young person; relating to young people', example: 'Juvenile crime rates have decreased in many developed countries.', collocations: ['juvenile offender', 'juvenile delinquency', 'juvenile crime'], sublist: 0, topics: ['crime', 'society'] },

  // ===== TOPIC VOCABULARY: CULTURE ===========================================
  { word: 'assimilation', definition: 'The process of absorbing into the culture of a population', example: 'Cultural assimilation can lead to the loss of minority languages and traditions.', collocations: ['cultural assimilation', 'assimilation process', 'forced assimilation'], sublist: 0, topics: ['culture', 'globalization'] },
  { word: 'indigenous', definition: 'Originating or occurring naturally in a particular place', example: 'Indigenous communities often possess valuable traditional knowledge about local ecosystems.', collocations: ['indigenous people', 'indigenous culture', 'indigenous knowledge'], sublist: 0, topics: ['culture', 'society'] },
  { word: 'multicultural', definition: 'Relating to or containing several cultural or ethnic groups', example: 'Multicultural societies benefit from a diversity of perspectives and traditions.', collocations: ['multicultural society', 'multicultural education', 'multicultural community'], sublist: 0, topics: ['culture', 'society'] },
  { word: 'cuisine', definition: 'A style or method of cooking, especially characteristic of a particular country', example: 'The city is known for its diverse cuisine, reflecting its multicultural population.', collocations: ['local cuisine', 'traditional cuisine', 'international cuisine'], sublist: 0, topics: ['culture'] },
  { word: 'tradition', definition: 'A custom or belief passed from generation to generation', example: 'Many traditional customs are at risk of disappearing in the modern era.', collocations: ['cultural tradition', 'traditional values', 'break with tradition'], sublist: 0, topics: ['culture'] }
];

// ----------------------------------------------------------------------------
// 3. RESOURCES — Websites, YouTube channels, books, and tools
// ----------------------------------------------------------------------------
export const RESOURCES = [
  // Websites
  {
    id: 'r1',
    name: 'IELTS.org (Official)',
    url: 'https://www.ielts.org',
    description: 'The official IELTS website with test information, preparation tips, sample test questions, and the ability to book your test. Essential for understanding the test format and policies.',
    type: 'website',
    skills: ['reading', 'writing', 'listening', 'speaking'],
    free: true
  },
  {
    id: 'r2',
    name: 'British Council IELTS',
    url: 'https://takeielts.britishcouncil.org',
    description: 'Official IELTS practice tests, preparation materials, progress tracking, live webinars, and expert advice from the British Council — one of the co-owners of the IELTS test.',
    type: 'website',
    skills: ['reading', 'writing', 'listening', 'speaking'],
    free: true
  },
  {
    id: 'r3',
    name: 'IDP IELTS',
    url: 'https://ielts.idp.com',
    description: 'The other co-owner of IELTS. Provides free practice tests, preparation tips, test booking, and results information. Their practice tests are particularly useful.',
    type: 'website',
    skills: ['reading', 'writing', 'listening', 'speaking'],
    free: true
  },
  {
    id: 'r4',
    name: 'IELTS Liz',
    url: 'https://ieltsliz.com',
    description: 'One of the most popular IELTS preparation websites with free lessons, tips, model answers, and practice exercises for all four skills. Liz is a former IELTS examiner.',
    type: 'website',
    skills: ['reading', 'writing', 'listening', 'speaking'],
    free: true
  },
  {
    id: 'r5',
    name: 'IELTS Advantage',
    url: 'https://ieltsadvantage.com',
    description: 'Comprehensive IELTS preparation with detailed strategies, model essays, vocabulary lessons, and a structured approach to achieving Band 7+. Offers both free and premium content.',
    type: 'website',
    skills: ['reading', 'writing', 'listening', 'speaking'],
    free: true
  },
  {
    id: 'r6',
    name: 'IELTS Online Tests',
    url: 'https://ieltsonlinetests.com',
    description: 'A large collection of free IELTS practice tests for Reading, Listening, and Writing. Tests are timed and scored automatically. Great for regular practice under exam conditions.',
    type: 'website',
    skills: ['reading', 'writing', 'listening'],
    free: true
  },
  {
    id: 'r7',
    name: 'IELTS Buddy',
    url: 'https://ieltsbuddy.com',
    description: 'Free IELTS preparation lessons covering all four skills. Includes grammar tips, sample essays, vocabulary lists, and advice on common mistakes. Good for self-study.',
    type: 'website',
    skills: ['reading', 'writing', 'listening', 'speaking'],
    free: true
  },
  {
    id: 'r8',
    name: 'BBC Learning English',
    url: 'https://www.bbc.co.uk/learningenglish',
    description: 'High-quality English language learning resources including grammar lessons, vocabulary exercises, pronunciation guides, and authentic listening materials. Excellent for building general English skills.',
    type: 'website',
    skills: ['listening', 'vocabulary', 'speaking'],
    free: true
  },
  {
    id: 'r9',
    name: 'TED Talks',
    url: 'https://www.ted.com',
    description: 'Expert-level talks on a wide range of academic topics. Perfect for IELTS Listening and Speaking practice. Use subtitles initially, then listen without. Great source of ideas for Writing Task 2.',
    type: 'website',
    skills: ['listening', 'speaking', 'vocabulary'],
    free: true
  },
  {
    id: 'r10',
    name: 'VOA Learning English',
    url: 'https://learningenglish.voanews.com',
    description: 'Voice of America\'s English learning platform with news stories at different levels, including slow-speed audio. Excellent for building listening comprehension and expanding topic vocabulary.',
    type: 'website',
    skills: ['listening', 'reading', 'vocabulary'],
    free: true
  },

  // YouTube Channels
  {
    id: 'r11',
    name: 'E2 IELTS',
    url: 'https://www.youtube.com/@E2IELTS',
    description: 'One of the top IELTS YouTube channels with detailed strategy videos, live classes, and practice sessions for all four skills. Jay\'s methods are clear, structured, and highly effective.',
    type: 'youtube',
    skills: ['reading', 'writing', 'listening', 'speaking'],
    free: true
  },
  {
    id: 'r12',
    name: 'IELTS Liz (YouTube)',
    url: 'https://www.youtube.com/@IELTSLiz',
    description: 'Video lessons from former IELTS examiner Liz. Covers all skills with a focus on common mistakes and strategies. Her listening practice videos are particularly popular and useful.',
    type: 'youtube',
    skills: ['reading', 'writing', 'listening', 'speaking'],
    free: true
  },
  {
    id: 'r13',
    name: 'IELTS with Keith',
    url: 'https://www.youtube.com/@KeithSpeakingAcademy',
    description: 'Keith\'s channel focuses heavily on IELTS Speaking but also covers Writing and general test strategies. His Speaking practice videos with sample answers are excellent for self-study.',
    type: 'youtube',
    skills: ['speaking', 'writing'],
    free: true
  },
  {
    id: 'r14',
    name: 'Fastrack Education',
    url: 'https://www.youtube.com/@FastrackIELTS',
    description: 'Asiya\'s channel offers clear, practical IELTS tips with a focus on achieving Band 7+. Her recent topic predictions and model answers are particularly helpful for Writing and Speaking.',
    type: 'youtube',
    skills: ['writing', 'speaking', 'reading', 'listening'],
    free: true
  },
  {
    id: 'r15',
    name: 'AcademiQ IELTS',
    url: 'https://www.youtube.com/@AcademiQIELTS',
    description: 'Detailed IELTS preparation videos covering question-by-question strategies, band score explanations, and intensive skills practice. Great for understanding exactly what examiners are looking for.',
    type: 'youtube',
    skills: ['reading', 'writing', 'listening', 'speaking'],
    free: true
  },

  // Books
  {
    id: 'r16',
    name: 'Cambridge IELTS 15-19',
    url: 'https://www.cambridge.org/ielts',
    description: 'The gold standard of IELTS practice materials. These books contain authentic past exam papers with answers and examiner commentary. Essential for realistic practice under exam conditions. Start with the latest book.',
    type: 'book',
    skills: ['reading', 'writing', 'listening', 'speaking'],
    free: false
  },
  {
    id: 'r17',
    name: 'Collins Practice Tests for IELTS',
    url: 'https://www.collins.co.uk/pages/elt-exams-ielts',
    description: 'Eight full practice tests with answer keys and model Writing answers. Also includes audio for Listening tests. A more affordable alternative to Cambridge materials with good quality questions.',
    type: 'book',
    skills: ['reading', 'writing', 'listening'],
    free: false
  },
  {
    id: 'r18',
    name: 'Barron\'s IELTS',
    url: 'https://www.barrons.com',
    description: 'Comprehensive IELTS preparation guide with practice tests, strategies, and skill-building exercises. Includes audio for Listening practice. Good for structured self-study with clear explanations.',
    type: 'book',
    skills: ['reading', 'writing', 'listening', 'speaking'],
    free: false
  },

  // Tools
  {
    id: 'r19',
    name: 'Quizlet',
    url: 'https://quizlet.com',
    description: 'Create digital flashcard sets for IELTS vocabulary. Search for pre-made AWL and IELTS topic vocabulary sets. Supports spaced repetition for efficient memorization. Available as web and mobile app.',
    type: 'tool',
    skills: ['vocabulary'],
    free: true
  },
  {
    id: 'r20',
    name: 'Grammarly',
    url: 'https://www.grammarly.com',
    description: 'AI-powered writing assistant that checks grammar, spelling, punctuation, and style. Use it to review your practice essays and identify recurring grammatical errors. Free version covers basic checks.',
    type: 'tool',
    skills: ['writing', 'grammar'],
    free: true
  },
  {
    id: 'r21',
    name: 'Academic Word List (AWL)',
    url: 'https://www.wgtn.ac.nz/lals/resources/academicwordlist',
    description: 'The original Academic Word List from Victoria University of Wellington. Contains 570 word families organised into 10 sublists by frequency. The definitive resource for academic vocabulary building.',
    type: 'tool',
    skills: ['vocabulary', 'reading', 'writing'],
    free: true
  },
  {
    id: 'r22',
    name: 'Reddit r/IELTS',
    url: 'https://www.reddit.com/r/IELTS',
    description: 'Active community of IELTS test-takers sharing experiences, tips, resources, and recent test questions. Get essay feedback from peers, learn from others\' mistakes, and find motivation from success stories.',
    type: 'tool',
    skills: ['reading', 'writing', 'listening', 'speaking'],
    free: true
  }
];

// ----------------------------------------------------------------------------
// 4. STRATEGIES — Techniques, tips, and common mistakes per skill
// ----------------------------------------------------------------------------
export const STRATEGIES = {
  reading: {
    title: 'Reading Strategies',
    icon: '📖',
    techniques: [
      {
        title: 'Skimming for Gist',
        content: 'Read the title, subheadings, first and last sentences of each paragraph, and any words in bold or italics. This gives you a "map" of the passage in 2-3 minutes, helping you locate answers faster later.',
        tips: [
          'Spend 2-3 minutes skimming each passage before answering any questions',
          'Identify the main topic of each paragraph and mentally label it',
          'Note where different types of information are located (dates, names, statistics)',
          'Look for topic shifts between paragraphs'
        ]
      },
      {
        title: 'Scanning for Specific Information',
        content: 'Once you know what a question is asking, scan the passage quickly for keywords, numbers, names, or dates that match the question. Don\'t read everything — let your eyes move quickly over the text looking for specific information.',
        tips: [
          'Identify keywords in the question first, then search for them or their synonyms',
          'Names, dates, numbers, and capitalised words are easiest to scan for',
          'Remember that the passage will use synonyms and paraphrases, not the exact same words',
          'Practice scanning newspaper articles to build speed'
        ]
      },
      {
        title: 'True/False/Not Given Strategy',
        content: 'For T/F/NG questions, find the relevant section of the passage and compare it carefully with the statement. TRUE means the statement matches the passage information. FALSE means the statement contradicts the passage. NOT GIVEN means the passage doesn\'t mention this specific information at all.',
        tips: [
          'TRUE = the passage says the same thing (possibly with different words)',
          'FALSE = the passage says the OPPOSITE of the statement',
          'NOT GIVEN = the passage doesn\'t mention this information — don\'t use your own knowledge',
          'If you can\'t find the information, it\'s likely NOT GIVEN, but make sure you haven\'t missed it',
          'Answers usually follow the order of the passage'
        ]
      },
      {
        title: 'Matching Headings Strategy',
        content: 'Read the list of headings first, then skim each paragraph to understand its main idea. Match the heading that best captures the overall theme of the paragraph — not just one detail mentioned in it.',
        tips: [
          'Read all headings before reading the passage',
          'Focus on the main idea of each paragraph, not supporting details',
          'Eliminate obvious matches first to narrow down difficult ones',
          'Cross out headings as you use them',
          'Watch for distractors: headings that match a detail but not the main idea'
        ]
      },
      {
        title: 'Paragraph Matching',
        content: 'These questions ask you to match statements, information, or features to specific paragraphs. Read the statements first, underline keywords, then scan each paragraph. Note: the same paragraph may be used more than once, and some paragraphs may not be used.',
        tips: [
          'Read all the statements/features before reading the passage',
          'Underline unique keywords in each statement',
          'Don\'t assume each paragraph is used exactly once — read the instructions carefully',
          'Look for synonyms and paraphrases rather than exact word matches'
        ]
      },
      {
        title: 'Sentence Completion Strategy',
        content: 'Read the incomplete sentence, predict what type of word is needed (noun, verb, adjective, number), then find the relevant section in the passage. The answer must fit grammatically and be taken directly from the passage.',
        tips: [
          'Predict the word type needed before searching the passage',
          'Check the word limit — if it says "no more than 3 words", don\'t write 4',
          'The answer must be exact words from the passage, not your own words',
          'Check that your completed sentence is grammatically correct',
          'Answers usually appear in passage order'
        ]
      },
      {
        title: 'Time Management',
        content: 'You have 60 minutes for 3 passages (approximately 40 questions). Aim for 20 minutes per passage, but be flexible — Passage 3 is usually hardest, so save a few extra minutes for it if possible.',
        tips: [
          'Aim for 20 minutes per passage, but don\'t exceed 22 minutes on any single passage',
          'If you\'re stuck on a question for more than 2 minutes, guess and move on',
          'Do the easiest passage first if allowed (skimming will tell you which is easiest)',
          'Always transfer answers to the answer sheet as you go — there is no extra transfer time',
          'Never leave a blank answer — guess if necessary (no penalty for wrong answers)'
        ]
      }
    ],
    commonMistakes: [
      'Reading every word instead of skimming and scanning',
      'Spending too long on one difficult question instead of moving on',
      'Confusing FALSE with NOT GIVEN — remember FALSE means the passage contradicts the statement',
      'Using your own knowledge instead of only what the passage says',
      'Not checking the word limit for completion questions',
      'Ignoring synonyms and paraphrases — the passage rarely uses the exact same words as the question',
      'Poor time management — spending 25+ minutes on Passage 1 and rushing Passage 3',
      'Not reading the instructions carefully (e.g., "Choose NO MORE THAN TWO WORDS")'
    ]
  },

  writing: {
    title: 'Writing Strategies',
    icon: '✍️',
    techniques: [
      {
        title: 'Task 1: Line Graph',
        content: 'Introduction: Paraphrase the question. Overview: Describe the most significant overall trends (e.g., "Overall, X increased while Y decreased"). Body 1: Describe the first group of trends with data. Body 2: Describe the second group. Use trend vocabulary throughout.',
        tips: [
          'Always include an overview paragraph — it\'s worth significant marks',
          'Group data logically (e.g., things that increased vs things that decreased)',
          'Use a range of trend vocabulary: rose, climbed, surged, declined, plummeted, fluctuated',
          'Include specific data (numbers, years) to support your descriptions',
          'Vary your adverbs: sharply, dramatically, gradually, slightly, steadily, marginally',
          'Use approximately/roughly/just over/just under for imprecise data'
        ]
      },
      {
        title: 'Task 1: Bar Chart',
        content: 'Structure is similar to line graphs. Introduction: Paraphrase. Overview: Highlight the most striking comparisons. Body paragraphs: Group bars logically for comparison. Use comparative language throughout.',
        tips: [
          'Focus on the biggest differences and similarities between categories',
          'Use comparative structures: "significantly more than", "nearly double", "approximately the same as"',
          'If there are multiple time periods, describe changes over time as well as comparisons',
          'Select the most important data — you don\'t need to describe every single bar'
        ]
      },
      {
        title: 'Task 1: Pie Chart',
        content: 'Introduction: Paraphrase. Overview: Identify the largest and smallest segments. Body paragraphs: Describe proportions using appropriate language. Compare slices within and between charts if there are multiple.',
        tips: [
          'Use proportion language: "the majority", "a quarter", "a negligible proportion", "approximately one-third"',
          'If comparing two pie charts, highlight what changed and what stayed the same',
          'Always mention the largest and smallest categories',
          'Don\'t describe every slice — focus on the most significant ones'
        ]
      },
      {
        title: 'Task 1: Table',
        content: 'Tables contain a lot of data. Select the most significant figures and group them logically. Introduction: Paraphrase. Overview: State the key patterns. Body: Organize by either rows or columns, whichever makes more sense.',
        tips: [
          'Do NOT try to describe every number in the table — be selective',
          'Look for the highest, lowest, and most interesting figures',
          'Group data into logical categories for your body paragraphs',
          'Use "whereas" and "while" to make comparisons within sentences',
          'Include specific figures to support your observations'
        ]
      },
      {
        title: 'Task 1: Map',
        content: 'Maps usually show changes to a place over time (before/after). Use spatial vocabulary and passive voice. Introduction: Paraphrase. Overview: State the overall change (e.g., "The area underwent significant development"). Body: Describe changes systematically.',
        tips: [
          'Use spatial language: adjacent to, overlooking, in the vicinity of, to the north/south',
          'Use passive voice: "was constructed", "was demolished", "was converted into"',
          'Describe changes in a logical order (e.g., from north to south, or by type of change)',
          'Key verbs: construct, establish, demolish, convert, expand, extend, replace, relocate',
          'Compare what was there before with what replaced it'
        ]
      },
      {
        title: 'Task 1: Process Diagram',
        content: 'Describe the stages of a process from beginning to end. Use passive voice heavily and sequencing language. Introduction: Paraphrase. Overview: State how many stages and the overall purpose. Body: Describe each stage in order.',
        tips: [
          'Use passive voice: "The raw materials are collected", "The mixture is heated"',
          'Use sequencing language: "The process begins when...", "Subsequently...", "Following this...", "At the next stage...", "The final stage involves..."',
          'Count the stages and mention the total in your overview',
          'Don\'t add your own opinions or speculation — just describe what you see',
          'If the process is cyclical, mention this in your overview'
        ]
      },
      {
        title: 'Task 2: Opinion Essay',
        content: 'Question: "To what extent do you agree or disagree?" Structure: Introduction (paraphrase + clear thesis), Body 1 (strongest reason + example), Body 2 (second reason + example), optional Body 3 or counterargument, Conclusion (restate position).',
        tips: [
          'State your position clearly in the introduction — don\'t sit on the fence',
          'Use the PEEL structure: Point, Explain, Example, Link',
          'You can agree, disagree, or partially agree — all approaches can score Band 9',
          'Each body paragraph needs a clear topic sentence',
          'Give specific examples to support your arguments, not vague generalisations',
          'Your conclusion should restate your position without introducing new ideas'
        ]
      },
      {
        title: 'Task 2: Discussion Essay',
        content: 'Question: "Discuss both views and give your own opinion." Structure: Introduction (paraphrase + acknowledge both sides), Body 1 (View 1 with support), Body 2 (View 2 with support), Conclusion (your opinion).',
        tips: [
          'Give fair treatment to both sides, even if you strongly favour one',
          'Your opinion can be stated in the introduction and/or conclusion',
          'Use language like "proponents argue that..." and "on the other hand, critics suggest..."',
          'Don\'t just list ideas — develop and explain each point fully',
          'Make your conclusion more than a summary — clearly state and justify your position'
        ]
      },
      {
        title: 'Task 2: Problem/Solution Essay',
        content: 'Question: "What are the problems and what solutions can you suggest?" Structure: Introduction (paraphrase + outline), Body 1 (Problems with examples), Body 2 (Solutions with explanations), Conclusion (summary + prediction).',
        tips: [
          'Match each problem with a corresponding solution when possible',
          'Be specific about problems — don\'t just say "it causes problems"',
          'Solutions should be realistic and practical, not fantasy',
          'Use cause/effect language: "This leads to...", "As a result...", "Consequently..."',
          'Evaluate which solution is most effective in your conclusion'
        ]
      },
      {
        title: 'Task 2: Advantages/Disadvantages Essay',
        content: 'Question: "What are the advantages and disadvantages?" Structure: Introduction (paraphrase + preview), Body 1 (Advantages with examples), Body 2 (Disadvantages with examples), Conclusion (your assessment of the overall balance).',
        tips: [
          'If asked "Do the advantages outweigh the disadvantages?", you MUST give your opinion',
          'Give equal weight to both sides in your body paragraphs',
          'Use concession language: "While there are clear benefits, there are also significant drawbacks"',
          'Support each point with a specific example or evidence',
          'Your conclusion should clearly state whether advantages or disadvantages are greater'
        ]
      },
      {
        title: 'Task 2: Two-Part Question',
        content: 'Question asks two separate questions (e.g., "Why is this happening? Is this a positive or negative development?"). Structure: Introduction (paraphrase + preview), Body 1 (answer question 1), Body 2 (answer question 2), Conclusion (summary).',
        tips: [
          'Address BOTH questions equally — missing one will seriously hurt your score',
          'Dedicate one body paragraph to each question',
          'Make sure your introduction acknowledges both parts of the question',
          'Your conclusion should briefly summarize your answers to both questions',
          'Don\'t mix the answers together — keep them clearly separated'
        ]
      },
      {
        title: 'Band 7+ Writing Tips',
        content: 'To achieve Band 7 or higher, you need: clear position throughout, well-developed arguments with specific examples, a range of cohesive devices (not just "firstly, secondly"), less common vocabulary used accurately, and a variety of complex grammatical structures with frequent accuracy.',
        tips: [
          'Use less common vocabulary: "exacerbate" instead of "make worse", "proliferation" instead of "increase"',
          'Mix simple, compound, and complex sentences naturally',
          'Use advanced structures: inversions, cleft sentences, participle clauses',
          'Vary your cohesive devices: don\'t overuse "Moreover" and "Furthermore"',
          'Write 260-290 words for Task 2 — long enough to develop ideas but not so long you make errors',
          'Always leave 2-3 minutes to proofread and correct errors'
        ]
      }
    ],
    vocabularyLists: {
      trends: {
        title: 'Trend Vocabulary (Task 1)',
        increase: ['rise', 'increase', 'climb', 'surge', 'soar', 'grow', 'rocket', 'jump'],
        decrease: ['decline', 'decrease', 'fall', 'drop', 'plummet', 'plunge', 'dip', 'sink'],
        stable: ['remain steady', 'plateau', 'stabilize', 'level off', 'remain constant', 'stay the same'],
        fluctuate: ['fluctuate', 'vary', 'oscillate', 'show volatility'],
        adverbs: ['sharply', 'dramatically', 'gradually', 'slightly', 'significantly', 'steadily', 'rapidly', 'marginally', 'moderately', 'substantially', 'negligibly', 'considerably']
      },
      maps: {
        title: 'Map Vocabulary (Task 1)',
        changeVerbs: ['construct', 'build', 'establish', 'demolish', 'knock down', 'convert', 'transform', 'expand', 'extend', 'replace', 'relocate', 'renovate', 'remove', 'add'],
        spatialLanguage: ['adjacent to', 'overlooking', 'in the vicinity of', 'to the north/south/east/west of', 'opposite', 'next to', 'surrounded by', 'on the outskirts of', 'in the heart of', 'on the corner of', 'along the river/road', 'between X and Y']
      },
      process: {
        title: 'Process Vocabulary (Task 1)',
        sequencing: [
          'The process begins with...',
          'In the first stage...',
          'Initially...',
          'Subsequently...',
          'Following this...',
          'At the next stage...',
          'After that...',
          'Then...',
          'Once this is complete...',
          'The final stage involves...',
          'Lastly...',
          'The cycle then repeats...'
        ]
      }
    },
    commonMistakes: [
      'Not writing an overview for Task 1 — this is essential and worth significant marks',
      'Under-length responses: Task 1 must be 150+ words, Task 2 must be 250+ words',
      'Poor time management: spending too long on Task 1 and rushing Task 2',
      'Not addressing all parts of the Task 2 question',
      'Writing a list of ideas without developing any of them',
      'Memorised essays or phrases that don\'t fit the specific question',
      'Overusing basic connectors: "Firstly... Secondly... Thirdly..." throughout',
      'Not paraphrasing the question in the introduction — don\'t copy it word for word',
      'Including irrelevant information or personal anecdotes without clear relevance',
      'Ignoring grammar accuracy in pursuit of complex vocabulary'
    ]
  },

  listening: {
    title: 'Listening Strategies',
    icon: '🎧',
    techniques: [
      {
        title: 'Section 1: Social Conversation',
        content: 'Section 1 is a conversation between two people in a social context (e.g., booking a hotel, enrolling in a course). Question types include form completion, note completion, and table completion. This is the easiest section.',
        tips: [
          'Use the time before the audio to predict answer types (name? number? date?)',
          'Listen for spelling of names and addresses — the speaker will often spell them out',
          'Watch for number confusion: 13/30, 14/40, 15/50 etc.',
          'Answers come in order — if you miss one, move on to the next question',
          'Check the word limit and write exactly what you hear'
        ]
      },
      {
        title: 'Section 2: Social Monologue',
        content: 'Section 2 is a monologue in a social context (e.g., a tour guide, a radio announcement). Question types include multiple choice, matching, and map/plan labeling. It\'s a step up from Section 1 in difficulty.',
        tips: [
          'For map labeling, orient yourself before the audio starts — identify landmarks and directions',
          'Listen for location language: "opposite the", "next to", "at the end of", "on your left"',
          'For multiple choice, read all options before listening — some are designed to trick you',
          'The speaker may mention multiple options but only one is correct',
          'Underline keywords in the questions to stay focused'
        ]
      },
      {
        title: 'Section 3: Academic Discussion',
        content: 'Section 3 is a discussion between 2-4 people in an academic context (e.g., students discussing a project, a tutorial). This is significantly harder due to multiple speakers and academic vocabulary.',
        tips: [
          'Identify different speakers quickly — they may have different opinions',
          'Watch for distractors: one speaker might suggest an answer, then another corrects them',
          'Listen for self-correction: "Actually, I think...", "No, wait, I mean..."',
          'For matching questions, listen for the specific speaker\'s opinion, not just any mention',
          'Academic discussions use more formal vocabulary — build your academic word knowledge'
        ]
      },
      {
        title: 'Section 4: Academic Lecture',
        content: 'Section 4 is a monologue academic lecture. It plays without any pause in the middle. This is the hardest section because of the length, complexity, and speed. Question types include note completion, summary completion, and multiple choice.',
        tips: [
          'There is NO pause in the middle of Section 4 — stay focused throughout',
          'Use the reading time to preview ALL questions before the audio starts',
          'Listen for signpost language: "Firstly...", "Moving on to...", "The key point is..."',
          'If you miss an answer, don\'t dwell on it — move to the next question immediately',
          'Practice with academic podcasts and lectures to build stamina and comprehension'
        ]
      },
      {
        title: 'Note-Taking Technique',
        content: 'Develop a personal shorthand system for taking notes quickly. Use abbreviations and symbols to capture key information without losing focus on the audio.',
        tips: [
          'Use arrows: → for leads to, ↑ for increase, ↓ for decrease',
          'Abbreviate common words: govt, edu, env, tech, intl',
          'Use symbols: & for and, w/ for with, b/c for because, ∴ for therefore',
          'Write only keywords, not full sentences',
          'Practice converting your notes back to full answers to check accuracy'
        ]
      },
      {
        title: 'Prediction Technique',
        content: 'Before each section plays, use the reading time to predict what type of answer is needed: Is it a name? A number? A place? An adjective? This helps you listen for the right type of information.',
        tips: [
          'Read the context around each gap to predict the word type needed',
          'For form completion: look at what information is already given to predict what\'s missing',
          'For multiple choice: read all options and predict which might be correct',
          'Predicting narrows your focus and makes it easier to catch the answer',
          'Even if your prediction is wrong, it keeps your mind actively engaged'
        ]
      }
    ],
    commonMistakes: [
      'Writing more words than the word limit allows (e.g., writing 4 words when the limit is 3)',
      'Spelling errors — they cost you marks even if you heard the right answer',
      'Getting stuck on a missed answer instead of moving to the next question',
      'Not using the reading time to preview questions before the audio plays',
      'Falling for distractors — answers that are mentioned then corrected or changed',
      'Losing concentration during Section 4 (the longest uninterrupted section)',
      'Not checking whether the answer makes grammatical sense in the gap',
      'Writing answers in the wrong box on the answer sheet during transfer time',
      'Panicking when you miss one answer and then missing the next several',
      'Not practising with different English accents (British, American, Australian)'
    ]
  },

  speaking: {
    title: 'Speaking Strategies',
    icon: '🗣️',
    techniques: [
      {
        title: 'Part 1: Expand Your Answers (A+R+E)',
        content: 'Part 1 asks familiar questions about yourself, your home, work, studies, and interests. Use the A+R+E technique: give your Answer, provide a Reason, and add an Example. This naturally extends your response to 2-3 sentences.',
        tips: [
          'Don\'t give one-word answers. "Do you like music?" → "Yes, I\'m quite fond of music, especially indie rock. I usually listen to it during my commute because it helps me relax."',
          'Be natural — don\'t recite memorised speeches, the examiner can tell',
          'Use a range of tenses naturally: talk about past experiences, current habits, and future plans',
          'Show enthusiasm with natural intonation — don\'t speak in a monotone',
          'It\'s fine to pause briefly to think, but avoid long silences'
        ]
      },
      {
        title: 'Part 2: Cue Card Preparation',
        content: 'You get 1 minute to prepare and 1-2 minutes to speak about a topic on a cue card. Use the preparation time wisely: write brief keywords (not sentences) covering all the bullet points on the card.',
        tips: [
          'Write keywords, not full sentences — you only have 60 seconds to prepare',
          'Address ALL bullet points on the card to ensure full coverage',
          'Start with a confident opening: "I\'d like to talk about..." or "The person I\'d like to describe is..."',
          'Include specific details: names, places, dates, feelings — these make your talk more vivid',
          'If you finish early, add a final reflection: "Looking back, I think..." or "This experience taught me..."',
          'Practice keeping track of time — 2 minutes is longer than you think'
        ]
      },
      {
        title: 'Part 3: Abstract Discussion',
        content: 'Part 3 asks abstract, analytical questions related to the Part 2 topic. This is where you need to demonstrate your ability to discuss ideas at a deeper level. Use the answer→explain→example structure.',
        tips: [
          'Structure your answers: state your opinion, explain the reason, give an example or evidence',
          'It\'s okay to take a moment to think: "That\'s an interesting question. Let me think..."',
          'Demonstrate range: use conditionals, passive voice, and complex sentences',
          'Discuss multiple perspectives: "On one hand... but on the other..."',
          'Give developed responses of 4-6 sentences — too short suggests limited ability'
        ]
      },
      {
        title: 'Hedging Language',
        content: 'Hedging shows sophistication in English and helps you express nuanced opinions. Instead of being too direct, use hedging to soften your statements and show awareness of complexity.',
        tips: [
          'Use hedging expressions: "It depends on...", "Generally speaking...", "To a certain extent..."',
          '"I would argue that..." shows you have a considered opinion',
          '"It\'s debatable whether..." shows awareness of different viewpoints',
          '"From my perspective..." personalises without being too casual',
          '"There\'s a tendency to..." describes a pattern without overgeneralising',
          'Hedging is especially important in Part 3 for abstract discussions'
        ]
      },
      {
        title: 'Self-Correction Techniques',
        content: 'Making mistakes is natural, but correcting yourself shows language awareness and actually impresses examiners. The key is to self-correct naturally without disrupting your fluency.',
        tips: [
          'Correct naturally: "He go— I mean, he goes to work every day"',
          'Use phrases like: "What I\'m trying to say is...", "Well, actually...", "I should say..."',
          'Don\'t over-correct — fixing every tiny error will hurt your fluency score',
          'Correct significant errors (wrong tense, wrong word) not minor slips',
          'Self-correction is scored positively — it shows grammatical awareness'
        ]
      },
      {
        title: 'Universal Speaking Tips',
        content: 'These tips apply to all three parts of the Speaking test and can make a significant difference to your overall performance.',
        tips: [
          'Speak naturally at a comfortable pace — rushing makes you less intelligible',
          'Use a range of grammar: past, present, future tenses, conditionals, passive voice, relative clauses',
          'Show vocabulary range: use topic-specific words and less common expressions',
          'Pronunciation matters: focus on word stress, sentence stress, and intonation',
          'Make eye contact with the examiner and engage as if having a real conversation',
          'Don\'t memorise answers — examiners are trained to detect memorised responses',
          'If you don\'t understand a question, ask: "Could you rephrase that, please?"',
          'Filler phrases are fine in moderation: "Well...", "Let me see...", "That\'s a good question..."',
          'Record yourself regularly and listen back — you\'ll notice things you can\'t hear while speaking',
          'Practice with a timer to develop a sense of how long 1-2 minutes of speaking feels'
        ]
      }
    ],
    commonMistakes: [
      'Giving very short answers in Part 1 (only 1-2 words)',
      'Memorising scripted answers — examiners detect this and it lowers your score',
      'Not addressing all bullet points on the Part 2 cue card',
      'Speaking in a monotone without natural intonation or emotion',
      'Using only simple grammar: "I like... I think... It is good..."',
      'Overusing filler words: "um", "uh", "like", "you know" excessively',
      'Stopping abruptly when the examiner signals time is up in Part 2',
      'Not developing answers in Part 3 — giving opinions without explanations',
      'Using informal or slang language in academic contexts',
      'Panicking when you don\'t know a word — paraphrase instead of going silent'
    ]
  }
};
