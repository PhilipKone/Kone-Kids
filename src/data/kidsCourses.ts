import { Pathway } from './missions';

export interface KidsLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  blocksFocused: string[];
  missionId?: string; // Links to existing gamified mission for 1-click launch in Kids IDE
  ideSampleCode?: string;
}

export interface KidsModule {
  id: string;
  title: string;
  duration: string;
  description: string;
  lessons: KidsLesson[];
}

export interface KidsCapstone {
  title: string;
  description: string;
  previewBadge: string;
  techStack: string;
}

export interface KidsCourse {
  id: string;
  code: string; // e.g. KCA-KIDS-101
  pathway: Pathway;
  hub: 'coding' | 'robotics' | 'ai';
  title: string;
  tagline: string;
  ageGroup: string; // e.g. "Ages 6–10"
  level: 'Beginner' | 'Intermediate' | 'Intermediate+' | 'All Levels';
  duration: string; // e.g. "6 Weeks • 12 Interactive Labs"
  weeklyCommitment: string;
  icon: string;
  color: string;
  accentColor: string;
  overview: string;
  prerequisites: string;
  learningOutcomes: string[];
  skills: string[];
  modules: KidsModule[];
  capstoneProject: KidsCapstone;
  certificateTitle: string;
}

export const KIDS_COURSES: KidsCourse[] = [
  // ==========================================
  // 1. CODING: FUNDAMENTALS
  // ==========================================
  {
    id: 'course-kids-fundamentals',
    code: 'KCA-KIDS-101',
    pathway: 'Fundamentals',
    hub: 'coding',
    title: 'Junior Logic & Computational Thinking',
    tagline: 'Learn how to think like an engineer through visual sequencing, loops, and interactive algorithms.',
    ageGroup: 'Ages 5–9',
    level: 'Beginner',
    duration: '6 Weeks • 12 Interactive Labs',
    weeklyCommitment: '2 Hours / Week',
    icon: '🧠',
    color: '#38bdf8',
    accentColor: '#0ea5e9',
    overview: 'Designed specifically for early coders, this course turns screen time into foundational engineering literacy. Kids learn how computers process step-by-step instructions, how repeat loops automate repetitive tasks, and how variables store dynamic information like scores and names.',
    prerequisites: 'No prior coding experience needed. Basic reading and number recognition.',
    certificateTitle: 'Junior Computational Thinker Certificate',
    skills: [
      'Visual Algorithms',
      'Sequencing & Timing',
      'Loops & Iteration',
      'Variables & Memory',
      'Systematic Debugging',
      'Event Triggers'
    ],
    learningOutcomes: [
      'Break big real-world problems into small, logical, executable steps',
      'Program character movements, speech bubbles, and sound sync in the Kids IDE',
      'Use Repeat loops to eliminate repetitive code and optimize execution',
      'Create and update memory variables to track player scores and counters',
      'Read and trace code errors calmly using our step-by-step debugger'
    ],
    capstoneProject: {
      title: "Byte's Great Maze Adventure",
      description: 'A complete interactive puzzle game where students program Byte the Mascot to navigate a maze, dodge tricky obstacles, collect power gems, and play sound celebrations.',
      previewBadge: '🏆 Capstone: Animated Maze Game',
      techStack: 'Kone Blockly, Visual Algorithms, Audio Engine'
    },
    modules: [
      {
        id: 'fund-mod-1',
        title: 'Module 1: The Lab & First Instructions',
        duration: 'Weeks 1–2',
        description: 'Understand the concept of a computer program and how commands are executed sequentially from top to bottom.',
        lessons: [
          {
            id: 'fund-les-1',
            title: 'Hello World! Giving Voice to the Mascot',
            description: 'Snap your first speech block into the workspace and program Byte to introduce himself with custom messages.',
            duration: '45 mins',
            blocksFocused: ['Mascot Say', 'Start Trigger'],
            missionId: 'm1_hello'
          },
          {
            id: 'fund-les-2',
            title: 'Rhythm & Sequence: Timed Choreography',
            description: 'Learn why the sequence of commands matters. Combine waving, pauses, and eye blinks in exact chronological order.',
            duration: '45 mins',
            blocksFocused: ['Mascot Wave', 'Wait Timer', 'Mascot Blink'],
            missionId: 'm2_rhythm'
          }
        ]
      },
      {
        id: 'fund-mod-2',
        title: 'Module 2: The Magic of Loops',
        duration: 'Weeks 3–4',
        description: 'Discover how computer science saves effort through repetition blocks instead of manual duplicate commands.',
        lessons: [
          {
            id: 'fund-les-3',
            title: 'The Loop Expert: Repeating Actions Efficiently',
            description: 'Use the Repeat block to loop dance moves and animations with a single line of logic.',
            duration: '45 mins',
            blocksFocused: ['Repeat Ext', 'Mascot Wave'],
            missionId: 'm3_loop'
          },
          {
            id: 'fund-les-4',
            title: 'Infinite Motion: Background Patrol Loops',
            description: 'Program ongoing mascot patrols using forever loops that react whenever a key is pressed.',
            duration: '45 mins',
            blocksFocused: ['Forever Loop', 'Keyboard Triggers']
          }
        ]
      },
      {
        id: 'fund-mod-3',
        title: 'Module 3: Variables & Memory Boxes',
        duration: 'Week 5',
        description: 'Learn how software remembers things like player names, coins, and high scores.',
        lessons: [
          {
            id: 'fund-les-5',
            title: 'Variable Vault: Storing and Updating Scores',
            description: 'Create your very first variable called "score", initialize it, and add bonus points dynamically.',
            duration: '45 mins',
            blocksFocused: ['Create Variable', 'Set Variable', 'Change By'],
            missionId: 'm4_vars'
          },
          {
            id: 'fund-les-6',
            title: 'Dynamic Announcements: Combining Text & Numbers',
            description: 'Teach the mascot to say "High Score: " joined with the live variable value on screen.',
            duration: '45 mins',
            blocksFocused: ['Join Text', 'Say Variable']
          }
        ]
      },
      {
        id: 'fund-mod-4',
        title: 'Module 4: Capstone Showcase & Graduation',
        duration: 'Week 6',
        description: 'Assemble all learned skills into a complete interactive maze adventure and earn your official diploma.',
        lessons: [
          {
            id: 'fund-les-7',
            title: 'Assembling Byte’s Maze Logic',
            description: 'Connect movement, loops, and score counters to build the playable maze challenge.',
            duration: '60 mins',
            blocksFocused: ['Movement', 'Loops', 'Variables', 'Audio']
          },
          {
            id: 'fund-les-8',
            title: 'Capstone Demo & Certificate Presentation',
            description: 'Present your completed maze to family and peers, and claim your verified Kone Kids Certificate.',
            duration: '45 mins',
            blocksFocused: ['Code Review', 'Certificate Generation']
          }
        ]
      }
    ]
  },

  // ==========================================
  // 2. CODING: MOBILE APP DEV
  // ==========================================
  {
    id: 'course-kids-mobile',
    code: 'KCA-KIDS-201',
    pathway: 'Mobile App Dev',
    hub: 'coding',
    title: 'Mobile App Creator for Kids',
    tagline: 'Design touchscreen apps, tap gestures, soundboards, and mobile sensor feeds.',
    ageGroup: 'Ages 9–14',
    level: 'Intermediate',
    duration: '8 Weeks • 16 Interactive Labs',
    weeklyCommitment: '2.5 Hours / Week',
    icon: '📱',
    color: '#22d3ee',
    accentColor: '#0891b2',
    overview: 'Turn kids from passive phone users into creative app architects! Students design user interfaces (UI), handle capacitive touch gestures, build interactive buttons, connect audio effects, and simulate real mobile tablet apps.',
    prerequisites: 'Junior Logic (KCA-KIDS-101) or basic familiarity with visual block programming.',
    certificateTitle: 'Mobile App Inventor Junior Diploma',
    skills: [
      'Touchscreen UI Design',
      'Event-Driven Logic',
      'Mobile Accelerometer & Sensors',
      'State Management',
      'Haptic Feedback',
      'Responsive Mobile Layouts'
    ],
    learningOutcomes: [
      'Structure mobile layouts with interactive buttons, badges, and headers',
      'Write event-driven scripts for tap, double-tap, and swipe actions',
      'Build persistent clicker counters, score multipliers, and timers',
      'Integrate device audio soundboards and haptic vibration feedback',
      'Export and test your project on live simulated phones and tablets'
    ],
    capstoneProject: {
      title: 'Pocket Pet & Soundboard Suite',
      description: 'A complete virtual companion app with interactive feeding touch buttons, happiness meters, sound effect pads, and saved progress.',
      previewBadge: '📱 Capstone: Virtual Pocket Pet App',
      techStack: 'Kone Mobile Simulator, Touch APIs, Reactive State'
    },
    modules: [
      {
        id: 'mob-mod-1',
        title: 'Module 1: Mobile UI & Tap Interactions',
        duration: 'Weeks 1–2',
        description: 'Explore the building blocks of mobile screens: layout containers, icons, and capacitive touch events.',
        lessons: [
          {
            id: 'mob-les-1',
            title: 'Touch Reactive Buttons & Screen Tap Events',
            description: 'Create responsive touch buttons that trigger animations and color changes when tapped.',
            duration: '50 mins',
            blocksFocused: ['When Tapped', 'Change Color'],
            missionId: 'm_mob_1'
          },
          {
            id: 'mob-les-2',
            title: 'Mobile Card Layouts & Theme Styling',
            description: 'Arrange buttons into clean visual grids and create night mode switches for mobile apps.',
            duration: '50 mins',
            blocksFocused: ['Card Container', 'Theme Toggle']
          }
        ]
      },
      {
        id: 'mob-mod-2',
        title: 'Module 2: State, Counters & Sound FX',
        duration: 'Weeks 3–4',
        description: 'Transform static designs into living apps that store user data and play sound feedback.',
        lessons: [
          {
            id: 'mob-les-3',
            title: 'Mobile Tap Clicker & Multiplier Logic',
            description: 'Build an incremental tapping game with bonus upgrades and dynamic score counters.',
            duration: '50 mins',
            blocksFocused: ['Variables', 'Multiply Score', 'Audio Chime'],
            missionId: 'm_mob_2'
          },
          {
            id: 'mob-les-4',
            title: 'Countdown Timers & Game-Over Alerts',
            description: 'Program a 30-second rapid-fire touch challenge with real-time countdown alerts.',
            duration: '50 mins',
            blocksFocused: ['Interval Timer', 'Alert Modal']
          }
        ]
      },
      {
        id: 'mob-mod-3',
        title: 'Module 3: Sensors, Motion & Haptics',
        duration: 'Weeks 5–6',
        description: 'Harness the unique sensors found on modern smart devices like phones and tablets.',
        lessons: [
          {
            id: 'mob-les-5',
            title: 'Shake to Clear: Accelerometer Triggers',
            description: 'Detect device shakes to reset drawing boards or trigger secret Easter eggs.',
            duration: '50 mins',
            blocksFocused: ['Device Shake', 'Clear Canvas'],
            missionId: 'm_mob_3'
          },
          {
            id: 'mob-les-6',
            title: 'Pocket Soundboard: Drum Pads & Synth Keys',
            description: 'Build a multi-button soundboard playing animal sounds, beats, and synth tones.',
            duration: '50 mins',
            blocksFocused: ['Play Audio Track', 'Pitch Shift']
          }
        ]
      },
      {
        id: 'mob-mod-4',
        title: 'Module 4: Capstone Pocket Pet App',
        duration: 'Weeks 7–8',
        description: 'Design, code, and polish your virtual pet mobile app ready to share with friends and family.',
        lessons: [
          {
            id: 'mob-les-7',
            title: 'Pocket Pet Logic: Hunger, Fun & Energy Bars',
            description: 'Wire up hunger decrease timers and feeding buttons with happy pet animations.',
            duration: '60 mins',
            blocksFocused: ['State Bars', 'Pet Reactions', 'Animations']
          },
          {
            id: 'mob-les-8',
            title: 'Mobile App Showcase & Junior Diploma',
            description: 'Demonstrate your mobile app on a simulated device and receive your diploma.',
            duration: '45 mins',
            blocksFocused: ['Device Testing', 'Certificate Award']
          }
        ]
      }
    ]
  },

  // ==========================================
  // 3. CODING: DESKTOP APP DEV
  // ==========================================
  {
    id: 'course-kids-desktop',
    code: 'KCA-KIDS-301',
    pathway: 'Desktop App Dev',
    hub: 'coding',
    title: 'Junior Software Engineer & System Logic',
    tagline: 'Build computer software utilities, calculators, cryptography ciphers, and data tools.',
    ageGroup: 'Ages 10–16',
    level: 'Intermediate+',
    duration: '8 Weeks • 16 Interactive Labs',
    weeklyCommitment: '3 Hours / Week',
    icon: '💻',
    color: '#94a3b8',
    accentColor: '#475569',
    overview: 'Bridges visual block thinking to real-world software engineering and Python code generation. Students build desktop productivity utilities, learn algorithmic math operations, construct data lists, and engineer secret encryption ciphers.',
    prerequisites: 'Foundational logic or grade 5+ math skills. Eagerness to see real generated code.',
    certificateTitle: 'Junior Software Engineer Certificate',
    skills: [
      'System Logic & Control Flow',
      'Python Code Generation',
      'Cryptography & Ciphers',
      'Data Lists & Arrays',
      'Input Validation',
      'Algorithmic Thinking'
    ],
    learningOutcomes: [
      'Understand how professional desktop programs handle window inputs and memory',
      'Construct a functional multi-digit arithmetic calculator engine',
      'Create Caesar cipher and binary translation algorithms to encode secret messages',
      'Bridge visual logic blocks directly to readable, executable Python code',
      'Apply structured error handling to prevent application crashes'
    ],
    capstoneProject: {
      title: 'Kone Cipher & Scientific Utility Suite',
      description: 'A dual-purpose desktop software tool featuring an interactive math processor and a secret message encryption engine with Python code export.',
      previewBadge: '💻 Capstone: Software Utility Suite',
      techStack: 'Python Code Generator, Logic Gates, String Parsing'
    },
    modules: [
      {
        id: 'desk-mod-1',
        title: 'Module 1: User Inputs & Calculator Logic',
        duration: 'Weeks 1–2',
        description: 'Learn how desktop software receives text input, converts strings to numbers, and calculates equations.',
        lessons: [
          {
            id: 'desk-les-1',
            title: 'Input Processing: Text Fields & Numeric Validation',
            description: 'Accept user inputs, ensure only valid numbers are processed, and output formatted results.',
            duration: '50 mins',
            blocksFocused: ['Prompt Input', 'Parse Number', 'Display Result'],
            missionId: 'm_desk_1'
          },
          {
            id: 'desk-les-2',
            title: 'Building a 4-Function Calculator Engine',
            description: 'Program addition, subtraction, multiplication, and division buttons with memory recall.',
            duration: '50 mins',
            blocksFocused: ['Math Operations', 'Memory Store']
          }
        ]
      },
      {
        id: 'desk-mod-2',
        title: 'Module 2: Lists & Data Arrays',
        duration: 'Weeks 3–4',
        description: 'Manage collections of data using lists, and learn sorting and search algorithms.',
        lessons: [
          {
            id: 'desk-les-3',
            title: 'History Log: Storing Prior Operations in Lists',
            description: 'Save every calculation into a history list that users can scroll through and clear.',
            duration: '50 mins',
            blocksFocused: ['Create List', 'Append Item', 'Loop Through List'],
            missionId: 'm_desk_2'
          },
          {
            id: 'desk-les-4',
            title: 'Searching & Filtering Records',
            description: 'Build an instant search bar that filters through list items in real time.',
            duration: '50 mins',
            blocksFocused: ['List Contains', 'Filter Array']
          }
        ]
      },
      {
        id: 'desk-mod-3',
        title: 'Module 3: Cryptography & Secret Ciphers',
        duration: 'Weeks 5–6',
        description: 'Explore the fascinating world of cybersecurity and secret encryption codes.',
        lessons: [
          {
            id: 'desk-les-5',
            title: 'Caesar Cipher: Secret Shift Encoders',
            description: 'Program an encoder that shifts every letter forward by a secret key number.',
            duration: '55 mins',
            blocksFocused: ['Char Code', 'String Loop', 'Modulus']
          },
          {
            id: 'desk-les-6',
            title: 'Binary Converter: Translating Text to 0s and 1s',
            description: 'Convert human letters into the 8-bit binary numbers that computer microchips read.',
            duration: '55 mins',
            blocksFocused: ['Base Conversion', 'String Formatting']
          }
        ]
      },
      {
        id: 'desk-mod-4',
        title: 'Module 4: Python Bridging & Capstone Release',
        duration: 'Weeks 7–8',
        description: 'Inspect the generated Python code behind your blocks and finish your desktop utility suite.',
        lessons: [
          {
            id: 'desk-les-7',
            title: 'Bridging Blocks to Python Code Syntax',
            description: 'Switch to the Python generator view in the Kids IDE to compare blocks with typed code.',
            duration: '60 mins',
            blocksFocused: ['Python Code Generator', 'Syntax Inspection']
          },
          {
            id: 'desk-les-8',
            title: 'Final Software Suite Showcase & Diploma',
            description: 'Package your desktop tool, run test test cases, and receive your Software Engineer diploma.',
            duration: '45 mins',
            blocksFocused: ['Capstone Review', 'Certificate Award']
          }
        ]
      }
    ]
  },

  // ==========================================
  // 4. CODING: WEB APP DEV
  // ==========================================
  {
    id: 'course-kids-web',
    code: 'KCA-KIDS-401',
    pathway: 'Web App Dev',
    hub: 'coding',
    title: 'Junior Web Architect & Interactive Sites',
    tagline: 'Learn how websites are built: HTML structure, modern CSS styles, DOM animations, and web logic.',
    ageGroup: 'Ages 10–16',
    level: 'Intermediate',
    duration: '8 Weeks • 16 Interactive Labs',
    weeklyCommitment: '2.5 Hours / Week',
    icon: '🌐',
    color: '#6366f1',
    accentColor: '#4338ca',
    overview: 'The World Wide Web is the most accessible software canvas on Earth. Students discover how web browsers construct pages using HTML structure, paint them with CSS colors and typography, and bring them alive with interactive JavaScript logic.',
    prerequisites: 'No prior web knowledge required. Familiarity with using a web browser.',
    certificateTitle: 'Junior Web Architect Diploma',
    skills: [
      'Visual HTML Structure',
      'Modern CSS Styling',
      'DOM Event Listeners',
      'Responsive Web Grids',
      'Interactive JavaScript',
      'Web Publishing'
    ],
    learningOutcomes: [
      'Master the 3 pillars of web development: Structure (HTML), Presentation (CSS), and Behavior (JS)',
      'Build responsive cards, headers, hero banners, and button interactions',
      'Manipulate elements dynamically on click, hover, and keyboard events',
      'Design personal dark and light themes with CSS color variables',
      'Publish a complete personal superhero portfolio website'
    ],
    capstoneProject: {
      title: 'My Hero Portfolio & Interactive Storybook',
      description: 'A multi-section responsive web portfolio featuring an animated bio card, project showcase badges, and an interactive quiz widget.',
      previewBadge: '🌐 Capstone: Interactive Web Portfolio',
      techStack: 'HTML5 Structure, CSS3 Flexbox/Glow, Dynamic DOM Scripts'
    },
    modules: [
      {
        id: 'web-mod-1',
        title: 'Module 1: The Anatomy of a Webpage',
        duration: 'Weeks 1–2',
        description: 'Understand how browsers read HTML tags to create headings, paragraphs, and buttons.',
        lessons: [
          {
            id: 'web-les-1',
            title: 'HTML Foundations: Headings, Text & Images',
            description: 'Build your first webpage layout by placing structured header, text, and image tags.',
            duration: '50 mins',
            blocksFocused: ['HTML Tag', 'Image Source', 'Text Node'],
            missionId: 'm_web_1'
          },
          {
            id: 'web-les-2',
            title: 'CSS Styling: Neon Glows, Gradients & Fonts',
            description: 'Apply custom Google fonts, vibrant background gradients, and glowing rounded borders.',
            duration: '50 mins',
            blocksFocused: ['CSS Color', 'Border Radius', 'Box Shadow']
          }
        ]
      },
      {
        id: 'web-mod-2',
        title: 'Module 2: Interactive DOM & Dynamic Styles',
        duration: 'Weeks 3–4',
        description: 'Make pages react to user actions by altering HTML elements dynamically using logic blocks.',
        lessons: [
          {
            id: 'web-les-3',
            title: 'Click to Transform: Live DOM Updates',
            description: 'Program buttons that toggle hidden text, switch picture galleries, and trigger animations.',
            duration: '50 mins',
            blocksFocused: ['Element Click', 'Change InnerText', 'Toggle Class'],
            missionId: 'm_web_2'
          },
          {
            id: 'web-les-4',
            title: 'Theme Master: Dark Mode & Light Mode Switcher',
            description: 'Create a live day/night toggle switch that shifts entire website color palettes.',
            duration: '50 mins',
            blocksFocused: ['CSS Variables', 'Theme Switcher']
          }
        ]
      },
      {
        id: 'web-mod-3',
        title: 'Module 3: Responsive Card Layouts & Quizzes',
        duration: 'Weeks 5–6',
        description: 'Arrange elements in responsive card grids that look stunning on laptops, tablets, and phones.',
        lessons: [
          {
            id: 'web-les-5',
            title: 'Flexbox Grids: Showcasing Projects in Cards',
            description: 'Learn modern web layout principles to align cards evenly across the screen.',
            duration: '55 mins',
            blocksFocused: ['Flex Layout', 'Card Component']
          },
          {
            id: 'web-les-6',
            title: 'Interactive Web Quiz with Instant Scoring',
            description: 'Code a 3-question trivia challenge with immediate green/red feedback for answers.',
            duration: '55 mins',
            blocksFocused: ['Form Selection', 'Conditionals', 'Score Badge']
          }
        ]
      },
      {
        id: 'web-mod-4',
        title: 'Module 4: Capstone Web Portfolio & Graduation',
        duration: 'Weeks 7–8',
        description: 'Assemble all components into your personal hero web portfolio and graduate with honors.',
        lessons: [
          {
            id: 'web-les-7',
            title: 'Building the Multi-Section Hero Website',
            description: 'Combine navbar, bio hero, project gallery, and interactive quiz into a cohesive site.',
            duration: '60 mins',
            blocksFocused: ['Full Page Assembly', 'Media Links']
          },
          {
            id: 'web-les-8',
            title: 'Live Preview, Code Inspection & Diploma Award',
            description: 'Present your web portfolio, inspect its live HTML/CSS output, and earn your diploma.',
            duration: '45 mins',
            blocksFocused: ['Live Web Run', 'Certificate Award']
          }
        ]
      }
    ]
  },

  // ==========================================
  // 5. CODING: GAME DEV
  // ==========================================
  {
    id: 'course-kids-games',
    code: 'KCA-KIDS-501',
    pathway: 'Game Dev',
    hub: 'coding',
    title: '2D Game Engine & Physics Academy',
    tagline: 'Create playable video games: character sprites, gravity physics, collision vectors, and high scores.',
    ageGroup: 'Ages 8–15',
    level: 'All Levels',
    duration: '10 Weeks • 20 Interactive Labs',
    weeklyCommitment: '3 Hours / Week',
    icon: '🎮',
    color: '#f472b6',
    accentColor: '#db2777',
    overview: 'The flagship game programming academy! Students step into the shoes of game designers and indie developers. They master game loops, code realistic gravity and jumping mechanics, script collision detection hitboxes, compose retro chiptunes, and build fully playable arcade platformers.',
    prerequisites: 'Junior Logic (KCA-KIDS-101) or high enthusiasm for video game mechanics.',
    certificateTitle: 'Junior Game Developer Master Diploma',
    skills: [
      'Game Loop Architecture',
      '2D Physics & Gravity',
      'Collision Detection Hitboxes',
      'Sprite Animation Cycles',
      'Sound FX & Chiptune Audio',
      'Level Design & Score Loops'
    ],
    learningOutcomes: [
      'Understand the core game loop: Input Listening → Physics Update → Screen Render',
      'Implement real jumping physics with velocity, gravity acceleration, and ground snap',
      'Program bounding box collisions for collectible stars, power-ups, and enemy hazards',
      'Design multi-stage health meters, coin counters, and game-over screens',
      'Publish a complete 2D arcade platformer playable in any browser'
    ],
    capstoneProject: {
      title: 'Galaxy Runner: 2D Arcade Platformer',
      description: 'A complete, fast-paced 2D platformer with arrow movement, double-jump physics, moving platforms, collectible star gems, enemy patrols, and high-score saves.',
      previewBadge: '🎮 Capstone: Playable Arcade Platformer',
      techStack: 'Kone Game Engine, 2D Physics Simulator, Audio Synthesizer'
    },
    modules: [
      {
        id: 'game-mod-1',
        title: 'Module 1: Sprites, Stages & Movement',
        duration: 'Weeks 1–2',
        description: 'Learn how game stages coordinate positions and how arrow keys move characters across screen coordinates.',
        lessons: [
          {
            id: 'game-les-1',
            title: 'Spawn Your Hero: Keyboard Movement & Bounds',
            description: 'Place your hero sprite onto the stage and program arrow keys to move without leaving the screen.',
            duration: '50 mins',
            blocksFocused: ['When Key Pressed', 'Change X/Y', 'Keep on Screen'],
            missionId: 'm_game_1'
          },
          {
            id: 'game-les-2',
            title: 'Costumes & Sprite Running Cycles',
            description: 'Cycle between character walking and jumping costumes to create smooth animations.',
            duration: '50 mins',
            blocksFocused: ['Next Costume', 'Flip Horizontal']
          }
        ]
      },
      {
        id: 'game-mod-2',
        title: 'Module 2: Physics, Gravity & Jump Loops',
        duration: 'Weeks 3–4',
        description: 'Add physical realism by coding gravity acceleration and smooth jumping mechanics.',
        lessons: [
          {
            id: 'game-les-3',
            title: 'Simulating Gravity: Velocity & Ground Collision',
            description: 'Program a Y-velocity variable that pulls your character downward until touching ground platforms.',
            duration: '55 mins',
            blocksFocused: ['Y-Velocity', 'Gravity Pull', 'Touching Ground'],
            missionId: 'm_game_2'
          },
          {
            id: 'game-les-4',
            title: 'The Double Jump & Floating Platforms',
            description: 'Add jump limits and code floating platforms that the hero can leap onto.',
            duration: '55 mins',
            blocksFocused: ['Jump Force', 'Jump Counter', 'Platform Collision']
          }
        ]
      },
      {
        id: 'game-mod-3',
        title: 'Module 3: Collisions, Coins & Health',
        duration: 'Weeks 5–6',
        description: 'Transform movement into an exciting game with collectible treasures and dangerous obstacles.',
        lessons: [
          {
            id: 'game-les-5',
            title: 'Star Gem Collector & Sound Chimes',
            description: 'Spawn collectible stars that vanish when touched, play chimes, and increment your score.',
            duration: '50 mins',
            blocksFocused: ['Touching Sprite', 'Play Sound', 'Change Score'],
            missionId: 'm_game_3'
          },
          {
            id: 'game-les-6',
            title: 'Enemy Patrol AI & Health Meter Depletion',
            description: 'Create an alien hazard that patrols back and forth and reduces player hearts on contact.',
            duration: '55 mins',
            blocksFocused: ['Patrol Loop', 'Lose Life', 'Invulnerability Flash']
          }
        ]
      },
      {
        id: 'game-mod-4',
        title: 'Module 4: Sound FX, Game Loops & Levels',
        duration: 'Weeks 7–8',
        description: 'Complete the arcade experience with background music, level transitions, and win conditions.',
        lessons: [
          {
            id: 'game-les-7',
            title: 'Arcade Chiptunes & Audio Atmosphere',
            description: 'Add background music loops and dynamic sound effects for jumps and victories.',
            duration: '50 mins',
            blocksFocused: ['Loop Music', 'Volume Level', 'Sound Triggers']
          },
          {
            id: 'game-les-8',
            title: 'Game Over Screen & Level 2 Portal',
            description: 'Code win/loss conditions that transport players to the next level when goals are met.',
            duration: '55 mins',
            blocksFocused: ['Switch Backdrop', 'Stop Other Scripts', 'High Score']
          }
        ]
      },
      {
        id: 'game-mod-5',
        title: 'Module 5: Capstone Game Studio & Graduation',
        duration: 'Weeks 9–10',
        description: 'Polish your Galaxy Runner platformer, share it with family and classmates, and earn your Master Diploma.',
        lessons: [
          {
            id: 'game-les-9',
            title: 'Galaxy Runner: Boss Encounter & Power-ups',
            description: 'Add speed booster power-ups and a final challenge level to complete your game.',
            duration: '60 mins',
            blocksFocused: ['Speed Power-up', 'Boss HP Bar', 'Victory Banner']
          },
          {
            id: 'game-les-10',
            title: 'Playtest Session & Master Game Developer Diploma',
            description: 'Playtest each other’s creations, share feedback, and receive your official certificate.',
            duration: '50 mins',
            blocksFocused: ['Game Export', 'Certificate Generation']
          }
        ]
      }
    ]
  },

  // ==========================================
  // 6. ROBOTICS: AUTONOMOUS ROVERS
  // ==========================================
  {
    id: 'course-kids-robotics',
    code: 'KCA-ROBO-101',
    pathway: 'Robotics (Robotics 4 Kids)',
    hub: 'robotics',
    title: 'Junior Robotics & Autonomous Rovers',
    tagline: 'Program motorized rovers, distance radar sensors, maze navigation algorithms, and real microcontroller firmware.',
    ageGroup: 'Ages 7–14',
    level: 'Beginner',
    duration: '8 Weeks • 16 Interactive Labs',
    weeklyCommitment: '2.5 Hours / Week',
    icon: '🦾',
    color: '#0ea5e9',
    accentColor: '#0284c7',
    overview: 'Connect digital logic to the physical robotics world! Kids write code that commands virtual and real microcontrollers, controls two-wheel rover motors, uses ultrasonic radar sensors to navigate around walls, and programs autonomous rescue missions.',
    prerequisites: 'Junior Logic (KCA-KIDS-101) or basic curiosity about robotics and motorized machines.',
    certificateTitle: 'Junior Robotics Engineer Certificate',
    skills: [
      'Microcontroller Firmware',
      'Ultrasonic Distance Telemetry',
      'Motor Kinematics & Pivoting',
      'Obstacle Avoidance Algorithms',
      'Maze Navigation Logic',
      'Autonomous State Control'
    ],
    learningOutcomes: [
      'Control DC motor speeds and durations to steer robotic vehicles accurately',
      'Read telemetry from ultrasonic distance sensors and detect obstacles in real time',
      'Implement autonomous braking and detour algorithms to avoid wall collisions',
      'Navigate narrow double-bend corridors and complex maze layouts',
      'Export and flash firmware onto physical BBC micro:bit or Arduino hardware'
    ],
    capstoneProject: {
      title: 'Autonomous Obstacle-Dodging Rover',
      description: 'A simulated and real-world rover that autonomously navigates cluttered rooms without bumping into obstacles using ultrasonic distance sensors and smart detour logic.',
      previewBadge: '🦾 Capstone: Autonomous Rescue Rover',
      techStack: 'Kone Robotics Simulator, Micro:bit Firmware, Ultrasonic Sensors, DC Motors'
    },
    modules: [
      {
        id: 'robo-mod-1',
        title: 'Module 1: Motor Control & Kinematics',
        duration: 'Weeks 1–2',
        description: 'Discover how robotic cars translate code into physical motion using motors and timed maneuvers.',
        lessons: [
          {
            id: 'robo-les-1',
            title: 'Motor Master: Driving in L-Shaped Paths',
            description: 'Coordinate forward driving and turning durations to navigate an L-shaped path safely to the finish line.',
            duration: '50 mins',
            blocksFocused: ['Move Forward', 'Turn Right', 'Stop Robot'],
            missionId: 'robotics_1'
          },
          {
            id: 'robo-les-2',
            title: 'Precision Pivoting: Turn Durations & Wheel Speeds',
            description: 'Calibrate rotation speeds and degrees for sharp 90-degree and smooth 180-degree U-turns.',
            duration: '50 mins',
            blocksFocused: ['Differential Steering', 'Wheel Speed', 'Angle Calibration']
          }
        ]
      },
      {
        id: 'robo-mod-2',
        title: 'Module 2: Ultrasonic Sensors & Auto-Braking',
        duration: 'Weeks 3–4',
        description: 'Give the robot digital eyes by integrating ultrasonic sound-wave sensors that measure distance.',
        lessons: [
          {
            id: 'robo-les-3',
            title: 'Sensor Sentry: Ultrasonic Distance Radar',
            description: 'Program the robot to drive forward and trigger emergency auto-braking when obstacles are closer than 30 units.',
            duration: '50 mins',
            blocksFocused: ['Distance Sensor', 'Logic If', 'Stop Robot'],
            missionId: 'robotics_2'
          },
          {
            id: 'robo-les-4',
            title: 'Proportional Speed: Smooth Deceleration',
            description: 'Make the robot slow down gently as it gets closer to a wall instead of stopping abruptly.',
            duration: '50 mins',
            blocksFocused: ['Proportional Speed', 'Distance Range', 'Buzzer Alert']
          }
        ]
      },
      {
        id: 'robo-mod-3',
        title: 'Module 3: Corridor & Maze Solving',
        duration: 'Weeks 5–6',
        description: 'Solve spatial navigation challenges through winding corridors and narrow passageways.',
        lessons: [
          {
            id: 'robo-les-5',
            title: 'Maze Runner: The Double-Bend Z-Maze',
            description: 'Program complex turning sequences to guide the rover through narrow walls to the checkered flag.',
            duration: '55 mins',
            blocksFocused: ['Corridor Sequence', 'Turn Timing', 'Flag Check'],
            missionId: 'robotics_3'
          },
          {
            id: 'robo-les-6',
            title: 'Wall Follower Algorithm: The Left-Hand Rule',
            description: 'Write an autonomous loop that hugs the left wall to automatically find the exit of any maze.',
            duration: '55 mins',
            blocksFocused: ['Continuous Loop', 'Wall Proximity', 'Detour Logic']
          }
        ]
      },
      {
        id: 'robo-mod-4',
        title: 'Module 4: Autonomous Rescue & Graduation',
        duration: 'Weeks 7–8',
        description: 'Assemble all sensing and driving logic into a full rescue rover mission and graduate as an engineer.',
        lessons: [
          {
            id: 'robo-les-7',
            title: 'Rescue Mission: Obstacle Detection & Detour Routing',
            description: 'Detect surprise roadblocks with sensors, automatically steer around obstacles, and reach the safe zone.',
            duration: '60 mins',
            blocksFocused: ['Sensor Detection', 'Detour Navigation', 'Mission Complete'],
            missionId: 'robotics_4'
          },
          {
            id: 'robo-les-8',
            title: 'Hardware Firmware Export & Robotics Engineer Diploma',
            description: 'Review physical micro:bit wiring schematics, export robot code, and receive your official certificate.',
            duration: '45 mins',
            blocksFocused: ['Firmware Hex Export', 'Certificate Award']
          }
        ]
      }
    ]
  },

  // ==========================================
  // 7. ROBOTICS: CIRCUITS & ELECTRONICS
  // ==========================================
  {
    id: 'course-kids-electronics',
    code: 'KCA-ELEC-101',
    pathway: 'Electronics (Robotics 4 Kids)',
    hub: 'robotics',
    title: 'Breadboards, Circuits & Sensors Lab',
    tagline: 'Understand electrical current, LEDs, resistors, buzzers, and automated streetlights.',
    ageGroup: 'Ages 8–15',
    level: 'Intermediate',
    duration: '6 Weeks • 12 Interactive Labs',
    weeklyCommitment: '2 Hours / Week',
    icon: '⚡',
    color: '#fbbf24',
    accentColor: '#d97706',
    overview: 'Hands-on electronic engineering made completely safe and visual! Kids learn how electric current flows in circuits, assemble virtual breadboard connections, wire multi-colored LED traffic signals, and trigger sound buzzers.',
    prerequisites: 'No prior circuit experience required. High curiosity about how electronics work.',
    certificateTitle: 'Junior Electronics Specialist Certificate',
    skills: [
      'Circuit Theory & Polarity',
      'Virtual Breadboard Prototyping',
      'LED Signal Control',
      'State Machine Sequences',
      'Analog Light Sensors',
      'Piezo Audio Buzzers'
    ],
    learningOutcomes: [
      'Understand closed circuits, voltage, ground, and polarity for diodes',
      'Program blinking LED patterns and multi-state traffic signal light cycles',
      'Wire analog photoresistor light sensors to detect darkness and trigger streetlights',
      'Control piezoelectric sound buzzers to play customizable tones and alarm sirens',
      'Simulate and troubleshoot circuit schematics inside the interactive Electronics Studio'
    ],
    capstoneProject: {
      title: 'Smart Streetlight & Burglar Alarm System',
      description: 'An automated electronic system that lights up LEDs when dusk falls and sounds a buzzer alarm if a tripwire sensor is breached.',
      previewBadge: '⚡ Capstone: Smart Security Circuit',
      techStack: 'Kone Electronics Simulator, Photoresistors, Piezo Buzzers, Multi-color LEDs'
    },
    modules: [
      {
        id: 'elec-mod-1',
        title: 'Module 1: Current Flow & LED Blinking',
        duration: 'Weeks 1–2',
        description: 'Understand how electricity flows through closed loops and command your first virtual LED diode.',
        lessons: [
          {
            id: 'elec-les-1',
            title: 'LED Blinker: Connecting and Pulsing Signals',
            description: 'Wire up a green LED, turn it ON, add a timer pause, and turn it OFF to create a rhythmic beacon.',
            duration: '45 mins',
            blocksFocused: ['Set LED', 'Wait Timer', 'Blink Loop'],
            missionId: 'electronics_1'
          },
          {
            id: 'elec-les-2',
            title: 'Multi-Color Mixing: Tri-Color LED Pins',
            description: 'Experiment with Red, Green, and Blue channels to mix secondary colors like purple and yellow.',
            duration: '45 mins',
            blocksFocused: ['RGB Pins', 'Color Channels', 'Intensity Value']
          }
        ]
      },
      {
        id: 'elec-mod-2',
        title: 'Module 2: Automated Signaling & Timers',
        duration: 'Weeks 3–4',
        description: 'Construct real-world municipal control systems like timed traffic lights and pedestrian crossings.',
        lessons: [
          {
            id: 'elec-les-3',
            title: 'Traffic Signal: Red, Yellow, Green Sequencing',
            description: 'Program a standard street traffic light with exact timing intervals for each color state.',
            duration: '50 mins',
            blocksFocused: ['Set LED Red/Yellow/Green', 'Timer Pauses', 'State Machine'],
            missionId: 'electronics_2'
          },
          {
            id: 'elec-les-4',
            title: 'Pedestrian Pushbutton: Interrupt Triggers',
            description: 'Add a crosswalk button that interrupts the traffic cycle and beeps the buzzer for pedestrians.',
            duration: '50 mins',
            blocksFocused: ['Button Input', 'Interrupt Cycle', 'Buzzer Chirp']
          }
        ]
      },
      {
        id: 'elec-mod-3',
        title: 'Module 3: Sensory Inputs & Capstone Security Lab',
        duration: 'Weeks 5–6',
        description: 'Integrate analog photoresistors and sound generators into a fully automated smart security system.',
        lessons: [
          {
            id: 'elec-les-5',
            title: 'Photoresistor Light Sensor: Auto-Nightlamp',
            description: 'Read analog light values from a light-dependent resistor and trigger LEDs when darkness falls.',
            duration: '55 mins',
            blocksFocused: ['Read Sensor', 'Threshold Logic', 'Auto Lamp Trigger']
          },
          {
            id: 'elec-les-6',
            title: 'Smart Security Circuit & Electronics Specialist Diploma',
            description: 'Combine motion triggers, sirens, and indicator LEDs into the capstone security alarm and earn your diploma.',
            duration: '50 mins',
            blocksFocused: ['Circuit Assembly', 'Siren Audio', 'Certificate Award']
          }
        ]
      }
    ]
  },

  // ==========================================
  // 8. AI: DATA SCIENCE
  // ==========================================
  {
    id: 'course-kids-data-science',
    code: 'KCA-DATA-101',
    pathway: 'Data Science (AI 4 Kids)',
    hub: 'ai',
    title: 'Junior Data Explorer & Visual Charts',
    tagline: 'Collect data, uncover statistical patterns, build colorful visual charts, and make real-world predictions.',
    ageGroup: 'Ages 8–14',
    level: 'Beginner',
    duration: '6 Weeks • 12 Interactive Labs',
    weeklyCommitment: '2 Hours / Week',
    icon: '📊',
    color: '#fbbf24',
    accentColor: '#d97706',
    overview: 'Build data literacy early! Students learn how modern scientists and tech companies gather information, sort large lists, compute averages, and render colorful bar and line graphs to answer real-world questions.',
    prerequisites: 'Basic math and number literacy. Curiosity about graphs and patterns.',
    certificateTitle: 'Junior Data Scientist Certificate',
    skills: [
      'Data Collection & Cleaning',
      'List Sorting & Filtering',
      'Statistical Averages & Medians',
      'Bar & Line Chart Visualization',
      'Pattern Recognition',
      'Predictive Modeling'
    ],
    learningOutcomes: [
      'Organize raw datasets into structured arrays and lists',
      'Implement sorting algorithms to arrange numbers from smallest to largest',
      'Calculate statistical means, maximums, and minimums from live data',
      'Render bar charts, category tallies, and trend lines in the Data Studio',
      'Make evidence-based predictions for sports, weather, and classroom polls'
    ],
    capstoneProject: {
      title: 'Kone Weather & Activity Predictor Dashboard',
      description: 'An interactive data dashboard that records daily temperature and rainfall metrics, displays real-time comparison graphs, and predicts ideal outdoor conditions.',
      previewBadge: '📊 Capstone: Data Insight Dashboard',
      techStack: 'Kone Data Studio, Chart.js Visualizer, Array Sorting, Statistics'
    },
    modules: [
      {
        id: 'ds-mod-1',
        title: 'Module 1: Data Lists & Pattern Hunting',
        duration: 'Weeks 1–2',
        description: 'Understand what data is, how computers store lists, and how sorting reveals hidden patterns.',
        lessons: [
          {
            id: 'ds-les-1',
            title: 'Data Detective: Sorting and Organizing Lists',
            description: 'Create a list of scrambled numbers, sort it in ascending order, and print the ordered results.',
            duration: '45 mins',
            blocksFocused: ['List Create', 'Sort Ascending', 'Display List'],
            missionId: 'ds_1'
          },
          {
            id: 'ds-les-2',
            title: 'Statistics 101: Finding Means, Minimums & Maximums',
            description: 'Calculate average test scores and find the highest and lowest scores in a class list.',
            duration: '45 mins',
            blocksFocused: ['Calculate Mean', 'Max Value', 'Min Value']
          }
        ]
      },
      {
        id: 'ds-mod-2',
        title: 'Module 2: Visualizing Data with Graphs',
        duration: 'Weeks 3–4',
        description: 'Turn cold numbers into vibrant visual stories with bar charts and category comparisons.',
        lessons: [
          {
            id: 'ds-les-3',
            title: 'Chart Captain: Creating Informative Bar Charts',
            description: 'Input survey results for favorite colors and render a colorful bar chart with labels and titles.',
            duration: '50 mins',
            blocksFocused: ['Create Chart', 'Bar Chart', 'Category Labels'],
            missionId: 'ds_2'
          },
          {
            id: 'ds-les-4',
            title: 'Time Trends: Plotting Continuous Line Graphs',
            description: 'Plot daily temperatures over a week to identify heating and cooling weather trends.',
            duration: '50 mins',
            blocksFocused: ['Line Graph', 'Time Series X-Axis', 'Trend Line']
          }
        ]
      },
      {
        id: 'ds-mod-3',
        title: 'Module 3: Prediction Models & Capstone Dashboard',
        duration: 'Weeks 5–6',
        description: 'Use historical trends to predict future outcomes and build your personal analytics dashboard.',
        lessons: [
          {
            id: 'ds-les-5',
            title: 'Correlation Spotter: Finding Relationships in Data',
            description: 'Compare study hours with quiz scores to discover positive correlations and predictive patterns.',
            duration: '55 mins',
            blocksFocused: ['Scatter Plot', 'Filter Data', 'Correlation Rule']
          },
          {
            id: 'ds-les-6',
            title: 'Weather Predictor Dashboard & Data Scientist Diploma',
            description: 'Assemble your final interactive weather dashboard, present your findings, and earn your diploma.',
            duration: '50 mins',
            blocksFocused: ['Dashboard Assembly', 'Metrics Card', 'Certificate Award']
          }
        ]
      }
    ]
  },

  // ==========================================
  // 9. AI: MACHINE LEARNING
  // ==========================================
  {
    id: 'course-kids-ml',
    code: 'KCA-ML-101',
    pathway: 'ML (AI 4 Kids)',
    hub: 'ai',
    title: 'Machine Learning & Vision Classifier Studio',
    tagline: 'Train neural network models to recognize shapes, webcam gestures, and road signs.',
    ageGroup: 'Ages 9–15',
    level: 'Intermediate',
    duration: '8 Weeks • 16 Interactive Labs',
    weeklyCommitment: '2.5 Hours / Week',
    icon: '🤖',
    color: '#10b981',
    accentColor: '#059669',
    overview: 'Demystify artificial intelligence from the ground up! Rather than memorizing rules, students teach computers through examples. Kids train image classification models on shapes, gestures, and traffic signs, test prediction confidence, and build gesture-controlled games.',
    prerequisites: 'Junior Logic (KCA-KIDS-101) or basic block coding familiarity. Working webcam or sample images.',
    certificateTitle: 'Junior Machine Learning Specialist Certificate',
    skills: [
      'Supervised Learning Concepts',
      'Dataset Training & Labeling',
      'Confidence Score Probabilities',
      'Computer Vision Inference',
      'Overfitting & Bias Detection',
      'Gesture-Controlled Gaming'
    ],
    learningOutcomes: [
      'Understand the fundamental shift from rule-based programming to learning from data',
      'Collect, label, and balance training datasets for multiple visual classes',
      'Train neural network models and interpret confidence percentage scores',
      'Overcome classification bias by introducing diverse test examples',
      'Deploy trained computer vision models into games and self-driving car simulators'
    ],
    capstoneProject: {
      title: 'Hand Gesture Rock-Paper-Scissors AI Champion',
      description: 'A live computer vision game that observes your hand gestures via webcam, classifies Rock, Paper, or Scissors with high confidence, and plays intelligent counter-moves in real time.',
      previewBadge: '🤖 Capstone: Vision AI Game',
      techStack: 'TensorFlow.js Blocks, WebCam Vision Classifier, Confidence Engine'
    },
    modules: [
      {
        id: 'ml-mod-1',
        title: 'Module 1: Teaching Machines Through Examples',
        duration: 'Weeks 1–2',
        description: 'Explore supervised machine learning: gathering training samples, labeling classes, and training your first model.',
        lessons: [
          {
            id: 'ml-les-1',
            title: 'Trainer Pro: Shape Classifier Datasets',
            description: 'Provide 3 circles and 3 squares to the training set, label each class, and train your neural network.',
            duration: '50 mins',
            blocksFocused: ['Train Model', 'Add Sample', 'Class Label'],
            missionId: 'ml_1'
          },
          {
            id: 'ml-les-2',
            title: 'Confidence Probabilities: How Sure is the AI?',
            description: 'Inspect the percentage probability the model assigns to each prediction and set confidence thresholds.',
            duration: '50 mins',
            blocksFocused: ['Confidence Score', 'Threshold Check', 'Certainty Meter']
          }
        ]
      },
      {
        id: 'ml-mod-2',
        title: 'Module 2: Model Testing & Overcoming Bias',
        duration: 'Weeks 3–4',
        description: 'Test your trained model on unseen images and learn why diversity in training data prevents mistakes.',
        lessons: [
          {
            id: 'ml-les-3',
            title: 'Predictor: Classifying Mystery Shapes',
            description: 'Run 5 new mystery test shapes through your trained model and evaluate prediction accuracy.',
            duration: '50 mins',
            blocksFocused: ['Load Model', 'Predict Class', 'Evaluation Loop'],
            missionId: 'ml_2'
          },
          {
            id: 'ml-les-4',
            title: 'Overfitting & Bias: Fixing Misclassifications',
            description: 'Add irregular and drawn shapes to eliminate bias and strengthen model generalization.',
            duration: '50 mins',
            blocksFocused: ['Data Augmentation', 'Edge Cases', 'Retrain Optimizer']
          }
        ]
      },
      {
        id: 'ml-mod-3',
        title: 'Module 3: Computer Vision for Self-Driving Cars',
        duration: 'Weeks 5–6',
        description: 'Bring computer vision into real-world autonomous systems like self-driving vehicles and road sign readers.',
        lessons: [
          {
            id: 'ml-les-5',
            title: 'Traffic Officer: Road Sign Recognition',
            description: 'Train the model to detect Stop and Go signs, and program the mascot to announce braking and driving actions.',
            duration: '55 mins',
            blocksFocused: ['When AI Sees', 'Mascot Speak', 'Webcam Classifier'],
            missionId: 'ml_3'
          },
          {
            id: 'ml-les-6',
            title: 'Gesture Navigator: Controlling Characters with Hand Waves',
            description: 'Track hand positions using webcam landmarks to move your game character up, down, left, and right.',
            duration: '55 mins',
            blocksFocused: ['Hand Landmarks', 'Gesture Trigger', 'Game Movement']
          }
        ]
      },
      {
        id: 'ml-mod-4',
        title: 'Module 4: Rock-Paper-Scissors AI & Graduation',
        duration: 'Weeks 7–8',
        description: 'Assemble a complete interactive webcam vision game and graduate as a certified ML Specialist.',
        lessons: [
          {
            id: 'ml-les-7',
            title: 'Building the Rock-Paper-Scissors AI Champion',
            description: 'Train 3 distinct hand gesture classes and wire real-time predictions to game scoring logic.',
            duration: '60 mins',
            blocksFocused: ['3-Class Dataset', 'Real-time Inference', 'Scoreboard Logic']
          },
          {
            id: 'ml-les-8',
            title: 'Model Demo Day & Machine Learning Specialist Diploma',
            description: 'Test your model with family and classmates, evaluate accuracy, and claim your verified diploma.',
            duration: '45 mins',
            blocksFocused: ['Model Export', 'Certificate Award']
          }
        ]
      }
    ]
  },

  // ==========================================
  // 10. AI: CHATBOTS & SMART ASSISTANTS
  // ==========================================
  {
    id: 'course-kids-ai',
    code: 'KCA-AI-101',
    pathway: 'AI (AI 4 Kids)',
    hub: 'ai',
    title: 'Creative AI & Intelligent Assistants Academy',
    tagline: 'Build smart conversational chatbots, facial emotion mirrors, voice assistants, and prompt engineering.',
    ageGroup: 'Ages 10–16',
    level: 'Intermediate+',
    duration: '8 Weeks • 16 Interactive Labs',
    weeklyCommitment: '2.5 Hours / Week',
    icon: '✨',
    color: '#a855f7',
    accentColor: '#7e22ce',
    overview: 'Equip young minds to thrive in an AI-powered future! Students discover how Large Language Models (LLMs) and conversational assistants operate, engineer smart multi-turn chatbot dialogues, integrate face and emotion tracking, and construct voice-activated smart home assistants.',
    prerequisites: 'Comfortable typing and basic English comprehension. Enthusiasm for conversational AI.',
    certificateTitle: 'Creative AI & Prompt Engineer Certificate',
    skills: [
      'Conversational Dialogue Trees',
      'Pattern Matching & NLP',
      'Webcam Face & Emotion Detection',
      'Voice-Activated Assistant Logic',
      'Prompt Engineering & Role Framing',
      'AI Safety & Fact Verification'
    ],
    learningOutcomes: [
      'Understand how artificial intelligence processes human language and predicts responses',
      'Build interactive chatbots with conditional branching and fallback responses',
      'Activate webcam face detection to trigger custom animations and mascot greetings',
      'Program voice recognition commands that control virtual smart home appliances',
      'Craft effective prompt templates with role definitions, constraints, and safety guidelines'
    ],
    capstoneProject: {
      title: 'Byte-Bot: Interactive STEM Tutor AI Assistant',
      description: 'A customized, safety-aligned interactive conversational assistant that explains STEM concepts, quizzes students, and guides them through coding challenges.',
      previewBadge: '✨ Capstone: Custom STEM Tutor Assistant',
      techStack: 'Kone AI Simulator, NLP Dialogue Tree, Voice API, Prompt Safety Filters'
    },
    modules: [
      {
        id: 'ai-mod-1',
        title: 'Module 1: Natural Language & Chatbot Logic',
        duration: 'Weeks 1–2',
        description: 'Understand how computers process text and construct your very first conversational chatbot.',
        lessons: [
          {
            id: 'ai-les-1',
            title: 'Chatbot Builder: Pattern Matching & Responses',
            description: 'Accept user typed messages, evaluate keyword matches with logic blocks, and program smart mascot replies.',
            duration: '50 mins',
            blocksFocused: ['On User Input', 'Text Contains', 'Mascot Speak'],
            missionId: 'ai_1'
          },
          {
            id: 'ai-les-2',
            title: 'Sentiment & Personality: Friendly vs. Grumpy Mascot',
            description: 'Analyze message sentiment and adjust mascot avatar moods and voice tones accordingly.',
            duration: '50 mins',
            blocksFocused: ['Sentiment Score', 'Mood State', 'Avatar Costume']
          }
        ]
      },
      {
        id: 'ai-mod-2',
        title: 'Module 2: Computer Vision & Emotion Mirrors',
        duration: 'Weeks 3–4',
        description: 'Give AI eyes to detect human faces and mirror expressions using live camera input.',
        lessons: [
          {
            id: 'ai-les-3',
            title: 'Visionary: Face Detection Greetings',
            description: 'Activate the webcam, detect when a face enters the video feed, and trigger animated mascot reactions.',
            duration: '50 mins',
            blocksFocused: ['Start Camera', 'Detect Face', 'Greeting Event'],
            missionId: 'ai_2'
          },
          {
            id: 'ai-les-4',
            title: 'Emotion Mirror: Detecting Smiles and Surprises',
            description: 'Track facial expression landmarks to trigger joyful mascot sounds whenever the user smiles.',
            duration: '50 mins',
            blocksFocused: ['Smile Landmark', 'Sound FX Fanfare', 'Celebration']
          }
        ]
      },
      {
        id: 'ai-mod-3',
        title: 'Module 3: Voice Control & Prompt Engineering',
        duration: 'Weeks 5–6',
        description: 'Build voice-activated home assistants and master the art of prompt engineering for generative AI.',
        lessons: [
          {
            id: 'ai-les-5',
            title: 'Smart Assistant: Voice-Controlled Appliances',
            description: 'Listen for spoken phrases like "light on" and "light off" to control virtual smart home LEDs.',
            duration: '55 mins',
            blocksFocused: ['Voice Trigger', 'Set LED State', 'Voice Confirmation'],
            missionId: 'ai_3'
          },
          {
            id: 'ai-les-6',
            title: 'Prompt Engineering: System Roles & Safety Constraints',
            description: 'Learn how to give AI distinct personas, strict boundary instructions, and fact-checking rules.',
            duration: '55 mins',
            blocksFocused: ['System Prompt', 'Role Definition', 'Safety Filter']
          }
        ]
      },
      {
        id: 'ai-mod-4',
        title: 'Module 4: Capstone Byte-Bot & AI Graduation',
        duration: 'Weeks 7–8',
        description: 'Design and deploy your personalized STEM Tutor assistant and receive your official certificate.',
        lessons: [
          {
            id: 'ai-les-7',
            title: 'Building Byte-Bot: Personalized Science Tutor',
            description: 'Combine chatbot dialogue, knowledge base cards, and voice output into a helpful study buddy.',
            duration: '60 mins',
            blocksFocused: ['Knowledge Card', 'Fallback Handler', 'Voice Synthesis']
          },
          {
            id: 'ai-les-8',
            title: 'Byte-Bot Showcase & Creative AI Engineer Diploma',
            description: 'Demonstrate your assistant to peers and claim your accredited Kone Academy diploma.',
            duration: '45 mins',
            blocksFocused: ['Assistant Deployment', 'Certificate Award']
          }
        ]
      }
    ]
  }
];

export const getCourseByPathway = (pathway: Pathway): KidsCourse | undefined => {
  return KIDS_COURSES.find(c => c.pathway === pathway);
};

export const getCoursesByHub = (hub: 'coding' | 'robotics' | 'ai'): KidsCourse[] => {
  return KIDS_COURSES.filter(c => c.hub === hub);
};
