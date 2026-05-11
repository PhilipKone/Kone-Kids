export type Pathway = 
  | 'Fundamentals'
  | 'Mobile App Dev'
  | 'Desktop App Dev'
  | 'Web App Dev'
  | 'Game Dev'
  | 'Data Science (AI 4 Kids)'
  | 'ML (AI 4 Kids)'
  | 'AI (AI 4 Kids)'
  | 'Robotics (AI 4 Kids)';

export interface Mission {
  id: string;
  name: string;
  description: string;
  objective: string;
  xpReward: number;
  difficulty: 'easy' | 'medium' | 'hard';
  requiredBlocks?: string[];
  level: number;
  pathway: Pathway;
  briefing?: string;
}

export const CODING_MISSIONS: Mission[] = [
  // Fundamentals
  {
    id: 'm1_hello',
    level: 1,
    pathway: 'Fundamentals',
    name: 'First Hello',
    description: 'Welcome to the lab! Let\'s teach the mascot to speak.',
    objective: 'Drag a "Say" block and make the mascot say "Hello World!"',
    xpReward: 100,
    difficulty: 'easy',
    requiredBlocks: ['mascot_speak'],
    briefing: "Welcome to the Lab, Engineer! I'm your assistant. Let's start by teaching me how to talk. Can you drag the 'Say' block into the workspace?"
  },
  {
    id: 'm2_rhythm',
    level: 2,
    pathway: 'Fundamentals',
    name: 'Rhythm Master',
    description: 'Timing is everything in engineering.',
    objective: 'Make the mascot wave, wait for 1 second, and then blink.',
    xpReward: 150,
    difficulty: 'easy',
    requiredBlocks: ['mascot_wave', 'mascot_wait', 'mascot_blink']
  },
  {
    id: 'm3_loop',
    level: 3,
    pathway: 'Fundamentals',
    name: 'The Loop Expert',
    description: 'Computers love doing things over and over!',
    objective: 'Use a Repeat block to make the mascot wave 3 times.',
    xpReward: 250,
    difficulty: 'medium',
    requiredBlocks: ['controls_repeat_ext', 'mascot_wave']
  },
  {
    id: 'm4_vars',
    level: 4,
    pathway: 'Fundamentals',
    name: 'Variable Vault',
    description: 'Store secrets in variables.',
    objective: 'Create a variable named "score" and set it to 10.',
    xpReward: 300,
    difficulty: 'medium',
    requiredBlocks: ['variables_set', 'math_number']
  },

  // Mobile App Dev
  {
    id: 'mobile_1',
    level: 1,
    pathway: 'Mobile App Dev',
    name: 'App Screen 101',
    description: 'Apps are made of screens. Let\'s build one!',
    objective: 'Create a "Welcome" screen with a blue button.',
    xpReward: 200,
    difficulty: 'easy',
    requiredBlocks: ['mobile_screen', 'mobile_button']
  },
  {
    id: 'mobile_2',
    level: 2,
    pathway: 'Mobile App Dev',
    name: 'Touch Interaction',
    description: 'Make your app react to touches.',
    objective: 'Change the background color when a button is tapped.',
    xpReward: 350,
    difficulty: 'medium',
    requiredBlocks: ['on_click', 'set_bg_color']
  },
  {
    id: 'mobile_3',
    level: 3,
    pathway: 'Mobile App Dev',
    name: 'Local Storage',
    description: 'Save user data on the phone.',
    objective: 'Store the user\'s name in the local database.',
    xpReward: 500,
    difficulty: 'hard',
    requiredBlocks: ['db_save', 'text_input']
  },

  // Desktop App Dev
  {
    id: 'desktop_1',
    level: 1,
    pathway: 'Desktop App Dev',
    name: 'Window Creator',
    description: 'Desktop apps live in windows.',
    objective: 'Open a new application window and set its title.',
    xpReward: 200,
    difficulty: 'easy',
    requiredBlocks: ['desktop_window', 'set_title']
  },
  {
    id: 'desktop_2',
    level: 2,
    pathway: 'Desktop App Dev',
    name: 'System Menu',
    description: 'Add navigation to your desktop app.',
    objective: 'Create a "File" menu with an "Exit" option.',
    xpReward: 400,
    difficulty: 'medium',
    requiredBlocks: ['desktop_menu', 'menu_item']
  },

  // Web App Dev
  {
    id: 'web_1',
    level: 1,
    pathway: 'Web App Dev',
    name: 'Hyperlink Hero',
    description: 'Websites are all connected!',
    objective: 'Create a link that takes the mascot to a new page.',
    xpReward: 200,
    difficulty: 'easy',
    requiredBlocks: ['web_link', 'web_text']
  },
  {
    id: 'web_2',
    level: 2,
    pathway: 'Web App Dev',
    name: 'Style Wizard',
    description: 'Make your website look stunning.',
    objective: 'Apply a neon glow style to all your headings.',
    xpReward: 350,
    difficulty: 'medium',
    requiredBlocks: ['web_style', 'css_neon']
  },

  // Game Dev
  {
    id: 'game_1',
    level: 1,
    pathway: 'Game Dev',
    name: 'Gravity Guard',
    description: 'Let\'s control physics!',
    objective: 'Apply gravity to the mascot so it falls slowly.',
    xpReward: 300,
    difficulty: 'medium',
    requiredBlocks: ['game_physics', 'game_gravity']
  },
  {
    id: 'game_2',
    level: 2,
    pathway: 'Game Dev',
    name: 'Hero Jump',
    description: 'Get your character moving.',
    objective: 'Make the mascot jump when the spacebar is pressed.',
    xpReward: 450,
    difficulty: 'medium',
    requiredBlocks: ['on_key_press', 'character_jump']
  },
  {
    id: 'game_3',
    level: 3,
    pathway: 'Game Dev',
    name: 'Point Collector',
    description: 'Add a goal to your game.',
    objective: 'Create a score system that increases when touching stars.',
    xpReward: 600,
    difficulty: 'hard',
    requiredBlocks: ['on_collision', 'update_score']
  },

  // Data Science
  {
    id: 'ds_1',
    level: 1,
    pathway: 'Data Science (AI 4 Kids)',
    name: 'Data Detective',
    description: 'Look for patterns in the numbers!',
    objective: 'Sort a list of numbers from smallest to largest.',
    xpReward: 250,
    difficulty: 'easy',
    requiredBlocks: ['list_sort', 'math_number']
  },
  {
    id: 'ds_2',
    level: 2,
    pathway: 'Data Science (AI 4 Kids)',
    name: 'Chart Captain',
    description: 'Visualize your findings.',
    objective: 'Create a bar chart showing the favorite colors of the class.',
    xpReward: 450,
    difficulty: 'medium',
    requiredBlocks: ['draw_chart', 'chart_bar']
  },

  // ML
  {
    id: 'ml_1',
    level: 1,
    pathway: 'ML (AI 4 Kids)',
    name: 'Trainer Pro',
    description: 'Teach the AI to recognize shapes.',
    objective: 'Show the AI 3 circles and 3 squares to help it learn.',
    xpReward: 300,
    difficulty: 'medium',
    requiredBlocks: ['ml_train', 'shape_circle', 'shape_square']
  },
  {
    id: 'ml_2',
    level: 2,
    pathway: 'ML (AI 4 Kids)',
    name: 'Predictor',
    description: 'AI can guess the future!',
    objective: 'Use a trained model to predict if the next shape will be a circle.',
    xpReward: 550,
    difficulty: 'hard',
    requiredBlocks: ['ml_predict', 'ml_model']
  },

  // AI
  {
    id: 'ai_1',
    level: 1,
    pathway: 'AI (AI 4 Kids)',
    name: 'Chatbot Builder',
    description: 'Make a bot that can answer questions.',
    objective: 'Create a logic flow that says "I am fine!" when asked "How are you?".',
    xpReward: 400,
    difficulty: 'medium',
    requiredBlocks: ['ai_input', 'logic_compare', 'mascot_speak']
  },
  {
    id: 'ai_2',
    level: 2,
    pathway: 'AI (AI 4 Kids)',
    name: 'Visionary',
    description: 'AI can see through cameras.',
    objective: 'Write a script that says "I see a face!" when a face is detected.',
    xpReward: 650,
    difficulty: 'hard',
    requiredBlocks: ['camera_input', 'detect_face']
  },

  // Robotics
  {
    id: 'robotics_1',
    level: 1,
    pathway: 'Robotics (AI 4 Kids)',
    name: 'Motor Master',
    description: 'Time to move some hardware!',
    objective: 'Spin the left motor for 2 seconds.',
    xpReward: 350,
    difficulty: 'hard',
    requiredBlocks: ['robot_motor', 'mascot_wait'],
    briefing: "Whoa! We've moved to the Robotics Lab. See that virtual car? It's waiting for your commands. Let's try spinning the motors to see it move!"
  },
  {
    id: 'robotics_2',
    level: 2,
    pathway: 'Robotics (AI 4 Kids)',
    name: 'Sensor Sentry',
    description: 'Let your robot feel the world.',
    objective: 'Stop the robot if the distance sensor sees an object closer than 10cm.',
    xpReward: 550,
    difficulty: 'hard',
    requiredBlocks: ['distance_sensor', 'robot_stop']
  }

];

