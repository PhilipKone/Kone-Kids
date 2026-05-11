export interface ShopItem {
  id: string;
  name: string;
  type: 'hat' | 'glasses' | 'skin' | 'accessory';
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
  { id: 'robot_pet', name: 'Mini Bot', type: 'accessory', price: 1500, icon: '🤖', description: 'A small friend for your lab assistant.' }
];
