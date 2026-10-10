export type StageType = 'concept' | 'practice' | 'challenge' | 'mastery';

export interface PuzzleStage {
  id: string;
  stageNumber: number;
  type: StageType;
  title: string;
  instruction: string;
  hint: string;
  requiredBlocks?: string[];
  targetBlockCount?: number;
  starterXml?: string;
  xpReward: number;
}

export interface MissionStages {
  missionId: string;
  stages: PuzzleStage[];
}

export const MISSION_STAGES: Record<string, PuzzleStage[]> = {
  // --- CODING FUNDAMENTALS ---
  m1_hello: [
    {
      id: 'm1_hello_s1',
      stageNumber: 1,
      type: 'concept',
      title: 'First Wave',
      instruction: 'Drag a 👋 Wave Hand block from the 🤖 Mascot category into the workspace and press ▶ Run!',
      hint: 'Click 🤖 Mascot on the left toolbox and look for the purple Wave block.',
      requiredBlocks: ['mascot_wave'],
      targetBlockCount: 1,
      xpReward: 50,
      starterXml: '<xml xmlns="https://developers.google.com/blockly/xml"></xml>'
    },
    {
      id: 'm1_hello_s2',
      stageNumber: 2,
      type: 'practice',
      title: 'Voice Activated',
      instruction: 'Snap a 🗣️ Say block below your Wave block and type: "Hello World!".',
      hint: 'The Say block is in 🤖 Mascot. Double-click the text inside to type your message.',
      requiredBlocks: ['mascot_wave', 'mascot_speak'],
      targetBlockCount: 2,
      xpReward: 50
    },
    {
      id: 'm1_hello_s3',
      stageNumber: 3,
      type: 'challenge',
      title: 'The Greeting Routine',
      instruction: 'Build a full 3-step greeting: Wave 👋, Speak 🗣️ "I am a Coder!", and Blink 👁️ your eyes!',
      hint: 'Order matters in computing! Snap Wave first, Speak second, and Blink third.',
      requiredBlocks: ['mascot_wave', 'mascot_speak', 'mascot_blink'],
      targetBlockCount: 3,
      xpReward: 75
    },
    {
      id: 'm1_hello_s4',
      stageNumber: 4,
      type: 'mastery',
      title: 'Creative Greeting Sandbox',
      instruction: 'Add sound effects or your own speech message to give Byte a unique greeting personality!',
      hint: 'Try exploring the 🔊 Sound category to play a cheer or melody!',
      requiredBlocks: ['mascot_speak'],
      targetBlockCount: 4,
      xpReward: 100
    }
  ],

  m2_rhythm: [
    {
      id: 'm2_rhythm_s1',
      stageNumber: 1,
      type: 'concept',
      title: 'Understanding Delay',
      instruction: 'Computers run super fast! Drag a 🕐 Wait block and set it to 1 second between two actions.',
      hint: 'The Wait block is in 🤖 Mascot. Change the number from 1 to 2.',
      requiredBlocks: ['mascot_wait'],
      targetBlockCount: 1,
      xpReward: 50
    },
    {
      id: 'm2_rhythm_s2',
      stageNumber: 2,
      type: 'practice',
      title: 'Timed Choreography',
      instruction: 'Make Byte wave 👋, pause for 2 seconds 🕐, then blink 👁️ his eyes.',
      hint: 'Snap the Wait block directly between Wave and Blink.',
      requiredBlocks: ['mascot_wave', 'mascot_wait', 'mascot_blink'],
      targetBlockCount: 3,
      xpReward: 75
    },
    {
      id: 'm2_rhythm_s3',
      stageNumber: 3,
      type: 'challenge',
      title: 'Rhythm Master Challenge',
      instruction: 'Build a 4-part dance sequence: Wave, Wait 1s, Blink, Wait 1s, and Play a cheer sound!',
      hint: 'Use two Wait blocks to keep Byte dancing on beat!',
      requiredBlocks: ['mascot_wave', 'mascot_wait', 'mascot_blink'],
      targetBlockCount: 5,
      xpReward: 100
    }
  ],

  m3_loop: [
    {
      id: 'm3_loop_s1',
      stageNumber: 1,
      type: 'concept',
      title: 'The Magic Repeat Button',
      instruction: 'Drag a 🔄 Repeat loop block from the Loops category and set the counter to 3.',
      hint: 'Open 🔄 Loops on the left. The Repeat block has a mouth to hold other blocks.',
      requiredBlocks: ['controls_repeat_ext'],
      targetBlockCount: 1,
      xpReward: 50
    },
    {
      id: 'm3_loop_s2',
      stageNumber: 2,
      type: 'practice',
      title: 'Looping Mascot Waves',
      instruction: 'Snap ONE Wave block inside the Repeat 3 times loop to make Byte wave 3 times automatically!',
      hint: 'Snap the Wave block INSIDE the mouth of the Repeat block, not outside.',
      requiredBlocks: ['controls_repeat_ext', 'mascot_wave'],
      targetBlockCount: 2,
      xpReward: 75
    },
    {
      id: 'm3_loop_s3',
      stageNumber: 3,
      type: 'challenge',
      title: 'Double Action Loop',
      instruction: 'Inside a loop of 4 repeats, place BOTH a Wave block and a Blink block with a 0.5s pause!',
      hint: 'Both blocks fit inside the loop mouth, one under the other.',
      requiredBlocks: ['controls_repeat_ext', 'mascot_wave', 'mascot_blink'],
      targetBlockCount: 4,
      xpReward: 100
    },
    {
      id: 'm3_loop_s4',
      stageNumber: 4,
      type: 'mastery',
      title: 'Endless Loop Party',
      instruction: 'Build a continuous celebration routine with loops, speech, and musical victory sounds!',
      hint: 'Combine sound notes and dance moves in a 5-step loop.',
      requiredBlocks: ['controls_repeat_ext'],
      targetBlockCount: 5,
      xpReward: 125
    }
  ],

  m4_vars: [
    {
      id: 'm4_vars_s1',
      stageNumber: 1,
      type: 'concept',
      title: 'Creating a Storage Box',
      instruction: 'Go to 📦 Variables and drag a "set [item] to" block into the workspace.',
      hint: 'Click "Create variable..." to name your variable "score"!',
      requiredBlocks: ['variables_set'],
      targetBlockCount: 1,
      xpReward: 50
    },
    {
      id: 'm4_vars_s2',
      stageNumber: 2,
      type: 'practice',
      title: 'Storing Points',
      instruction: 'Set your score variable to 10 points using a number block from 🔢 Math.',
      hint: 'Snap a number block into the right side of the "set score to" block.',
      requiredBlocks: ['variables_set', 'math_number'],
      targetBlockCount: 2,
      xpReward: 75
    },
    {
      id: 'm4_vars_s3',
      stageNumber: 3,
      type: 'challenge',
      title: 'Announcing High Scores',
      instruction: 'Make Byte announce the score variable out loud with the 🗣️ Say block!',
      hint: 'Drag the round variable pill into the Say block.',
      requiredBlocks: ['variables_set', 'mascot_speak'],
      targetBlockCount: 3,
      xpReward: 100
    }
  ],

  // --- ROBOTICS MISSIONS ---
  robotics_1: [
    {
      id: 'robotics_1_s1',
      stageNumber: 1,
      type: 'concept',
      title: 'Ignition & First Roll',
      instruction: 'Program the virtual rover to move forward 50 units into the corridor.',
      hint: 'Open the 🦾 Robotics category and drag "Move Forward by 50".',
      requiredBlocks: ['robot_move'],
      targetBlockCount: 1,
      xpReward: 50
    },
    {
      id: 'robotics_1_s2',
      stageNumber: 2,
      type: 'practice',
      title: 'Turning the Corner',
      instruction: 'Drive forward 60 units, then turn 90° right to face the open channel.',
      hint: 'Snap a Turn Right block immediately following the Forward block.',
      requiredBlocks: ['robot_move', 'robot_turn'],
      targetBlockCount: 2,
      xpReward: 75
    },
    {
      id: 'robotics_1_s3',
      stageNumber: 3,
      type: 'challenge',
      title: 'Reach the Destination Flag',
      instruction: 'Navigate around the L-shaped corner wall and reach the green Goal Flag without crashing!',
      hint: 'Sequence: Forward -> Turn Right -> Forward towards the goal!',
      requiredBlocks: ['robot_move', 'robot_turn'],
      targetBlockCount: 3,
      xpReward: 125
    }
  ],

  robotics_2: [
    {
      id: 'robotics_2_s1',
      stageNumber: 1,
      type: 'concept',
      title: 'Radar Distance Sense',
      instruction: 'The ultrasonic radar sensor scans ahead in centimeters. Read the sensor value.',
      hint: 'Check the live HUD on the rover to see the SEN value update.',
      requiredBlocks: ['robot_get_distance'],
      targetBlockCount: 1,
      xpReward: 50
    },
    {
      id: 'robotics_2_s2',
      stageNumber: 2,
      type: 'practice',
      title: 'Safe Stop Zone',
      instruction: 'Drive forward towards the obstacle wall and stop safely within 30cm without crashing!',
      hint: 'Use a conditional loop or check distance before moving.',
      requiredBlocks: ['robot_move', 'robot_get_distance'],
      targetBlockCount: 3,
      xpReward: 100
    },
    {
      id: 'robotics_2_s3',
      stageNumber: 3,
      type: 'challenge',
      title: 'Autonomous Obstacle Avoidance',
      instruction: 'If distance < 35cm, turn right to avoid the barrier completely!',
      hint: 'Use an IF block: If distance < 35 then Turn Right, else Move Forward.',
      requiredBlocks: ['controls_if', 'robot_get_distance', 'robot_turn'],
      targetBlockCount: 5,
      xpReward: 150
    }
  ],

  // --- AI MISSIONS ---
  ds_1: [
    {
      id: 'ds_1_s1',
      stageNumber: 1,
      type: 'concept',
      title: 'Data Collection Table',
      instruction: 'Create your first data table with 3 data points (e.g. Favorite Animals).',
      hint: 'Open the 📊 Data Science category on the left.',
      requiredBlocks: ['data_create_table'],
      targetBlockCount: 1,
      xpReward: 50
    },
    {
      id: 'ds_1_s2',
      stageNumber: 2,
      type: 'practice',
      title: 'Render Colorful Bar Chart',
      instruction: 'Connect your table to a Bar Chart block and render the data visually!',
      hint: 'Snap the chart block below the table creation block.',
      requiredBlocks: ['data_create_table', 'data_render_chart'],
      targetBlockCount: 2,
      xpReward: 75
    },
    {
      id: 'ds_1_s3',
      stageNumber: 3,
      type: 'challenge',
      title: 'Data Insight & Analysis',
      instruction: 'Find the highest value in the dataset and have Byte announce the winner!',
      hint: 'Use the "Get Max Value" block and pass it into Say.',
      requiredBlocks: ['data_get_max', 'mascot_speak'],
      targetBlockCount: 3,
      xpReward: 125
    }
  ],

  ml_1: [
    {
      id: 'ml_1_s1',
      stageNumber: 1,
      type: 'concept',
      title: 'Training Samples',
      instruction: 'Add 3 image examples to Class A (Apples) and 3 to Class B (Bananas).',
      hint: 'In 🤖 Machine Learning, snap the Add Training Sample block.',
      requiredBlocks: ['ml_add_sample'],
      targetBlockCount: 2,
      xpReward: 50
    },
    {
      id: 'ml_1_s2',
      stageNumber: 2,
      type: 'practice',
      title: 'Train Vision Model',
      instruction: 'Run the Train Model block and observe the confidence percentage reach 95%!',
      hint: 'Snap Train Model after collecting the dataset samples.',
      requiredBlocks: ['ml_train_model'],
      targetBlockCount: 2,
      xpReward: 80
    },
    {
      id: 'ml_1_s3',
      stageNumber: 3,
      type: 'challenge',
      title: 'Live Image Classifier',
      instruction: 'Classify a test image and trigger Byte to react based on the prediction!',
      hint: 'Use IF prediction is Apple -> Byte says "Yum, crunchy!", ELSE Byte says "Sweet banana!".',
      requiredBlocks: ['ml_classify', 'controls_if', 'mascot_speak'],
      targetBlockCount: 4,
      xpReward: 150
    }
  ],

  ai_1: [
    {
      id: 'ai_1_s1',
      stageNumber: 1,
      type: 'concept',
      title: 'Prompt Engineering for Kids',
      instruction: 'Write a prompt asking the AI Assistant to tell a 1-sentence space adventure story.',
      hint: 'Open ✨ AI category and drag the "Ask AI Assistant" block.',
      requiredBlocks: ['ai_prompt'],
      targetBlockCount: 1,
      xpReward: 50
    },
    {
      id: 'ai_1_s2',
      stageNumber: 2,
      type: 'practice',
      title: 'Role-Playing System Persona',
      instruction: 'Set AI Persona to "Friendly Robot Explorer" and ask for advice on building a rover.',
      hint: 'Snap "Set AI Persona" before the prompt block.',
      requiredBlocks: ['ai_set_persona', 'ai_prompt'],
      targetBlockCount: 2,
      xpReward: 75
    },
    {
      id: 'ai_1_s3',
      stageNumber: 3,
      type: 'challenge',
      title: 'Interactive AI Chat Companion',
      instruction: 'Build a loop where Byte speaks each AI response and listens for the child’s voice!',
      hint: 'Combine AI Prompt with Text-to-Speech Speak block inside a conversation loop.',
      requiredBlocks: ['ai_prompt', 'mascot_speak'],
      targetBlockCount: 3,
      xpReward: 150
    }
  ]
};

// Fallback generator for any mission that does not have custom stages defined
export function getStagesForMission(missionId: string, missionName: string, objective: string): PuzzleStage[] {
  if (MISSION_STAGES[missionId]) {
    return MISSION_STAGES[missionId];
  }

  // Auto-generate standard 3-stage Code.org progression
  return [
    {
      id: `${missionId}_s1`,
      stageNumber: 1,
      type: 'concept',
      title: 'Step 1: Warm-Up & First Block',
      instruction: `Explore the objective: ${objective}. Snap your first block to start.`,
      hint: 'Check the toolbox categories for highlighted starter blocks.',
      targetBlockCount: 1,
      xpReward: 50
    },
    {
      id: `${missionId}_s2`,
      stageNumber: 2,
      type: 'practice',
      title: 'Step 2: Core Logic Puzzle',
      instruction: `Build the core sequence for "${missionName}" to satisfy the mission goal.`,
      hint: 'Connect blocks from top to bottom so they run in order.',
      targetBlockCount: 3,
      xpReward: 75
    },
    {
      id: `${missionId}_s3`,
      stageNumber: 3,
      type: 'challenge',
      title: 'Step 3: Logic Challenge & Test',
      instruction: `Run your complete program to test your solution and claim the final mission reward!`,
      hint: 'Press ▶ Run Code and verify the output in the simulator stage.',
      targetBlockCount: 4,
      xpReward: 125
    }
  ];
}
