export interface ShopItem {
  id: string;
  name: string;
  type: 'hat' | 'glasses' | 'skin' | 'accessory' | 'pose';
  price: number;
  icon: string;
  description: string;
  unlockedAtLevel?: number;
}

export const SHOP_ITEMS: ShopItem[] = [
  // Hats
  { id: 'engineer_cap', name: 'Engineer Cap', type: 'hat', price: 100, icon: '🧢', description: 'Show everyone you mean business!' },
  { id: 'space_helmet', name: 'Space Helmet', type: 'hat', price: 800, icon: '👨‍🚀', description: 'For coding in zero gravity.' },
  { id: 'crown', name: 'Golden Crown', type: 'hat', price: 2500, icon: '👑', description: 'Only for the coding royalty.', unlockedAtLevel: 5 },
  
  // Glasses
  { id: 'cool_shades', name: 'Cool Shades', type: 'glasses', price: 200, icon: '🕶️', description: 'Stay cool under pressure.' },
  { id: 'vr_goggles', name: 'VR Goggles', type: 'glasses', price: 600, icon: '🥽', description: 'Enter the Kone Metaverse.' },
  
  // Skins
  { id: 'neon_glow', name: 'Neon Glow', type: 'skin', price: 1200, icon: '✨', description: 'Light up the dark with your logic.' },
  { id: 'gold_chrome', name: 'Gold Chrome', type: 'skin', price: 5000, icon: '🟡', description: 'The ultimate prestige skin.', unlockedAtLevel: 10 },
  
  // Accessories
  { id: 'robot_pet', name: 'Mini Bot', type: 'accessory', price: 1500, icon: '🤖', description: 'A small friend for your lab assistant.' },

  // Mascot Poses
  { id: 'pose_standing', name: 'Standing Byte', type: 'pose', price: 0, icon: '/mascot/standing.svg', description: 'The classic Byte pose.' },
  { id: 'pose_sitting', name: 'Chill Byte', type: 'pose', price: 150, icon: '/mascot/sitting.svg', description: 'Take a break and code relaxed.' },
  { id: 'pose_squatting', name: 'Squat Byte', type: 'pose', price: 200, icon: '/mascot/squatting.svg', description: 'Low profile, high efficiency.' },
  { id: 'pose_waving', name: 'Friendly Wave', type: 'pose', price: 100, icon: '/mascot/waving.svg', description: 'Greet your friends in the lab!' },
  { id: 'pose_celebrating', name: 'Victory Jump', type: 'pose', price: 300, icon: '/mascot/celebrating.svg', description: 'When the code finally runs!' },
  { id: 'pose_thinking', name: 'Logic Thinker', type: 'pose', price: 250, icon: '/mascot/thinking.svg', description: 'Pondering the next big feature.' },
  { id: 'pose_running', name: 'Active Runner', type: 'pose', price: 400, icon: '/mascot/running.svg', description: 'Speed coding mode engaged.' },
  { id: 'pose_shocked', name: 'Oops! Moment', type: 'pose', price: 150, icon: '/mascot/shocked.svg', description: 'When you find a bug in production.' },
  { id: 'pose_sad', name: 'Sad Droplet', type: 'pose', price: 100, icon: '/mascot/sad.svg', description: 'It happens to the best of us.' },
  { id: 'pose_angry', name: 'Angry Byte', type: 'pose', price: 200, icon: '/mascot/angry.svg', description: 'Determined to crush that bug!' },
  { id: 'pose_victory', name: 'Peace & Love', type: 'pose', price: 350, icon: '/mascot/victory.svg', description: 'Harmony in the codebase.' },
  { id: 'pose_holding_heart', name: 'Heart Byte', type: 'pose', price: 500, icon: '/mascot/holding_heart.svg', description: 'Show some love for open source.' },
  { id: 'pose_holding_trophy', name: 'Kone Champion', type: 'pose', price: 1000, icon: '/mascot/holding_trophy.svg', description: 'The reward for finishing a track.' },
  { id: 'pose_searching', name: 'Bug Hunter', type: 'pose', price: 300, icon: '/mascot/searching.svg', description: 'Searching for the missing semicolon.' },
  { id: 'pose_flying', name: 'Cloud Coder', type: 'pose', price: 1500, icon: '/mascot/flying.svg', description: 'Taking your apps to the cloud.' },
  { id: 'pose_sleeping', name: 'Sleep Mode', type: 'pose', price: 100, icon: '/mascot/sleeping.svg', description: 'Recharging the logic processors.' },
  { id: 'pose_reading', name: 'Doc Reader', type: 'pose', price: 200, icon: '/mascot/reading.svg', description: 'Always reading the documentation.' },
  { id: 'pose_dancing', name: 'Dance Party', type: 'pose', price: 600, icon: '/mascot/dancing.svg', description: 'Celebrate a successful deploy!' },
  { id: 'pose_coding', name: 'Laptop Pro', type: 'pose', price: 400, icon: '/mascot/coding.svg', description: 'The essence of a Kone Kid.' },
  { id: 'pose_pointing_left', name: 'Look Left', type: 'pose', price: 100, icon: '/mascot/pointing_left.svg', description: 'Point out the important bits.' },
  { id: 'pose_pointing_right', name: 'Look Right', type: 'pose', price: 100, icon: '/mascot/pointing_right.svg', description: 'Show the way forward.' },
  { id: 'pose_sitting_at_desk', name: 'Desk Chill', type: 'pose', price: 450, icon: '/mascot/sitting_at_desk.svg', description: 'Relaxing at the brown coding table.' },
  { id: 'pose_standing_on_desk', name: 'Table Top Hero', type: 'pose', price: 600, icon: '/mascot/standing_on_desk.svg', description: 'Standing tall on the workstation!' },
  { id: 'pose_coding_at_desk', name: 'Deep Work', type: 'pose', price: 500, icon: '/mascot/coding_at_desk.svg', description: 'Focused sessions at the desk.' }
];
