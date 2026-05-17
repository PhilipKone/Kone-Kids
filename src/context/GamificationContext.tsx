import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { updateAppBadge } from '../utils/pwa';
import { db, auth } from '../firebase/config';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
  viewed?: boolean;
  xpReward?: number;
}

interface GamificationContextType {
  badges: Badge[];
  latestBadge: Badge | null;
  unlockBadge: (id: string) => void;
  hasVisited: { [key: string]: boolean };
  markVisited: (page: string) => void;
  markBadgeViewed: (id: string) => void;
  // Game Stats
  xp: number;
  level: number;
  completedMissions: string[];
  completeMission: (missionId: string, baseXP: number) => void;
  user: any;
  hasCompletedOnboarding: boolean;
  completeOnboarding: () => void;
  // Shop Economy
  coins: number;
  inventory: string[];
  equippedItems: { [key: string]: string };
  purchaseItem: (itemId: string, price: number) => boolean;
  equipItem: (type: string, itemId: string) => void;
  addCoins: (amount: number) => void;
  // Game Series
  unlockedSeries: string[];
  unlockSeries: (seriesId: string, cost: number) => boolean;
}

const INITIAL_BADGES: Badge[] = [
  { id: 'first_hello', name: 'First Hello', icon: '🧠', description: 'Run your first code script!', unlocked: false, xpReward: 50 },
  { id: 'explorer', name: 'Explorer', icon: '🚀', description: 'Visit Coding, Robotics, and AI pages!', unlocked: false, xpReward: 100 },
  { id: 'app_builder', name: 'App Builder', icon: '📱', description: 'Complete all Mobile App missions!', unlocked: false, xpReward: 500 },
  { id: 'web_wizard', name: 'Web Wizard', icon: '🌐', description: 'Complete all Web App missions!', unlocked: false, xpReward: 500 },
  { id: 'game_master', name: 'Game Master', icon: '🎮', description: 'Complete all Game Dev missions!', unlocked: false, xpReward: 600 },
  { id: 'ai_genius', name: 'AI Genius', icon: '✨', description: 'Complete all AI & ML missions!', unlocked: false, xpReward: 750 },
  { id: 'robot_commander', name: 'Robot Commander', icon: '🦾', description: 'Complete all Robotics missions!', unlocked: false, xpReward: 800 },
  { id: 'data_scientist', name: 'Data Scientist', icon: '📊', description: 'Complete all Data Science missions!', unlocked: false, xpReward: 400 },
  { id: 'mission_complete', name: 'Mission Agent', icon: '🕵️', description: 'Complete your first mission!', unlocked: false, xpReward: 200 },
  { id: 'future_hero', name: 'Future Hero', icon: '👑', description: 'Joined the Kone Academy mission!', unlocked: false, xpReward: 100 },
  { id: 'welcome_hero', name: 'Welcome!', icon: '🎈', description: 'Welcome to the Kone Kids Lab!', unlocked: false, xpReward: 50 },
];

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export const GamificationProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [badges, setBadges] = useState<Badge[]>(() => {
    try {
      const saved = localStorage.getItem('kone_kids_badges');
      if (!saved) return INITIAL_BADGES;
      const savedBadges = JSON.parse(saved) as Badge[];
      if (!Array.isArray(savedBadges)) return INITIAL_BADGES;
      return INITIAL_BADGES.map(initial => {
        const saved = savedBadges.find(s => s.id === initial.id);
        return saved ? { ...initial, unlocked: saved.unlocked, viewed: saved.viewed } : initial;
      });
    } catch (e) {
      console.error('Gamification: Error loading badges from local storage', e);
      return INITIAL_BADGES;
    }
  });

  const [hasVisited, setHasVisited] = useState<{ [key: string]: boolean }>(() => {
    try {
      const saved = localStorage.getItem('kone_kids_visited');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Game Stats State
  const [xp, setXp] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('kone_kids_xp');
      return saved ? parseInt(saved, 10) : 0;
    } catch (e) {
      return 0;
    }
  });

  const [completedMissions, setCompletedMissions] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('kone_kids_missions');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('kone_kids_onboarding');
      return saved === 'true';
    } catch (e) {
      return false;
    }
  });

  const [coins, setCoins] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('kone_kids_coins');
      return saved ? parseInt(saved, 10) : 100; // Start with 100 bonus coins
    } catch (e) {
      return 100;
    }
  });

  const [inventory, setInventory] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('kone_kids_inventory');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [equippedItems, setEquippedItems] = useState<{ [key: string]: string }>(() => {
    try {
      const saved = localStorage.getItem('kone_kids_equipped');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });
  
  const [unlockedSeries, setUnlockedSeries] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('kone_kids_series');
      return saved ? JSON.parse(saved) : ['series_word_search']; // Word search is free by default
    } catch (e) {
      return ['series_word_search'];
    }
  });

  const [latestBadge, setLatestBadge] = useState<Badge | null>(null);

  const level = useMemo(() => {
    // Level 1: 0-250 XP
    // Level 2: 250-750 XP
    // Level 3: 750-1500 XP
    // Level 4: 1500-2500 XP
    // Level 5+: 2500+ XP
    if (xp < 250) return 1;
    if (xp < 750) return 2;
    if (xp < 1500) return 3;
    if (xp < 2500) return 4;
    return 5 + Math.floor((xp - 2500) / 2000);
  }, [xp]);

  const [user, setUser] = useState<any>(null);

  // Authentication & Cloud Sync
  useEffect(() => {
    // Only proceed if auth is a valid Firebase Auth instance (has app property)
    if (auth && (auth as any).app) {
      const unsubscribe = onAuthStateChanged(auth, async (u) => {
        setUser(u);
        if (u && db && (db as any).app) {
          try {
            // Load cloud data
            const userDoc = await getDoc(doc(db, 'users', u.uid));
            if (userDoc.exists()) {
              const cloudData = userDoc.data();
              if (cloudData.xp > xp) setXp(cloudData.xp);
              if (cloudData.completedMissions?.length > completedMissions.length) {
                setCompletedMissions(cloudData.completedMissions);
              }
              if (cloudData.unlockedSeries?.length > unlockedSeries.length) {
                setUnlockedSeries(cloudData.unlockedSeries);
              }
            }
          } catch (e) {
            console.warn('Firebase Sync: Failed to load user data.', e);
          }
        }
      });
      return unsubscribe;
    }
  }, []);

  // Sync to Cloud
  useEffect(() => {
    if (user && db && (db as any).app) {
      const syncData = async () => {
        try {
            await setDoc(doc(db, 'users', user.uid), {
              xp,
              completedMissions,
              badges: badges.filter(b => b.unlocked).map(b => b.id),
              hasCompletedOnboarding,
              coins,
              inventory,
              equippedItems,
              unlockedSeries,
              lastSync: new Date().toISOString()
            }, { merge: true });
        } catch (e) {
          console.warn('Firebase Sync: Failed to save user data.', e);
        }
      };
      syncData();
    }
  }, [xp, completedMissions, badges, user, hasCompletedOnboarding, coins, inventory, equippedItems]);

  useEffect(() => {
    localStorage.setItem('kone_kids_badges', JSON.stringify(badges));
  }, [badges]);

  useEffect(() => {
    localStorage.setItem('kone_kids_visited', JSON.stringify(hasVisited));
    if (hasVisited['/coding'] && hasVisited['/robotics'] && hasVisited['/ai']) {
      unlockBadge('explorer');
    }
  }, [hasVisited]);

  useEffect(() => {
    localStorage.setItem('kone_kids_xp', xp.toString());
  }, [xp]);

  useEffect(() => {
    localStorage.setItem('kone_kids_missions', JSON.stringify(completedMissions));
  }, [completedMissions]);

  useEffect(() => {
    localStorage.setItem('kone_kids_onboarding', hasCompletedOnboarding.toString());
  }, [hasCompletedOnboarding]);

  useEffect(() => {
    localStorage.setItem('kone_kids_coins', coins.toString());
  }, [coins]);

  useEffect(() => {
    localStorage.setItem('kone_kids_inventory', JSON.stringify(inventory));
  }, [inventory]);

  useEffect(() => {
    localStorage.setItem('kone_kids_equipped', JSON.stringify(equippedItems));
  }, [equippedItems]);

  useEffect(() => {
    localStorage.setItem('kone_kids_series', JSON.stringify(unlockedSeries));
  }, [unlockedSeries]);

  useEffect(() => {
    const unviewedCount = badges.filter(b => b.unlocked && !b.viewed).length;
    updateAppBadge(unviewedCount);
  }, [badges]);

  const unlockBadge = useCallback((id: string) => {
    setBadges(prev => prev.map(badge => {
      if (badge.id === id && !badge.unlocked) {
        if (badge.xpReward) {
          setXp(curr => curr + badge.xpReward!);
          setCoins(curr => curr + Math.floor(badge.xpReward! / 2)); // Earn coins on badges
        }
        const unlockedBadge = { ...badge, unlocked: true };
        setLatestBadge(unlockedBadge);
        return unlockedBadge;
      }
      return badge;
    }));
  }, []);

  const markVisited = useCallback((page: string) => {
    setHasVisited(prev => {
      if (prev[page]) return prev;
      return { ...prev, [page]: true };
    });
  }, []);

  const markBadgeViewed = useCallback((id: string) => {
    setBadges(prev => prev.map(badge => {
      if (badge.id === id) {
        return { ...badge, viewed: true };
      }
      return badge;
    }));
  }, []);

  const completeMission = useCallback((missionId: string, baseXP: number) => {
    setCompletedMissions(prev => {
      if (prev.includes(missionId)) return prev;
      const nextMissions = [...prev, missionId];
      setXp(curr => curr + baseXP);
      setCoins(curr => curr + baseXP); // 1:1 Mission XP to Coins

      // First mission ever completed
      if (nextMissions.length === 1) {
        unlockBadge('mission_complete');
      }
      // 3 missions completed across any pathway
      if (nextMissions.length === 3) {
        unlockBadge('welcome_hero');
      }
      
      // Auto-unlock pathway badges
      import('../data/missions').then(({ CODING_MISSIONS }) => {
        const checkPathway = (pathway: string, badgeId: string) => {
          const pathwayMissions = CODING_MISSIONS.filter(m => m.pathway.includes(pathway));
          const completedInPathway = pathwayMissions.filter(m => nextMissions.includes(m.id));
          // Strict: ALL missions in the pathway must be done
          if (pathwayMissions.length > 0 && completedInPathway.length === pathwayMissions.length) {
            unlockBadge(badgeId);
          }
        };

        // future_hero: complete ALL Fundamentals missions
        checkPathway('Fundamentals', 'future_hero');
        checkPathway('Mobile', 'app_builder');
        checkPathway('Web', 'web_wizard');
        checkPathway('Game', 'game_master');
        checkPathway('AI (AI 4 Kids)', 'ai_genius');
        checkPathway('ML (AI 4 Kids)', 'ai_genius');
        checkPathway('Robotics', 'robot_commander');
        checkPathway('Data Science', 'data_scientist');
      });

      return nextMissions;
    });
  }, [unlockBadge]);

  const completeOnboarding = useCallback(() => {
    setHasCompletedOnboarding(true);
    // future_hero is now earned by completing all Fundamentals, not just the tutorial
  }, []);

  const purchaseItem = useCallback((itemId: string, price: number) => {
    if (coins >= price) {
      setCoins(curr => curr - price);
      setInventory(prev => [...prev, itemId]);
      return true;
    }
    return false;
  }, [coins]);

  const addCoins = useCallback((amount: number) => {
    setCoins(curr => curr + amount);
  }, []);

  const equipItem = useCallback((type: string, itemId: string) => {
    setEquippedItems(prev => ({
      ...prev,
      [type]: itemId
    }));
  }, []);

  const unlockSeries = useCallback((seriesId: string, cost: number) => {
    if (coins >= cost) {
      setCoins(curr => curr - cost);
      setUnlockedSeries(prev => prev.includes(seriesId) ? prev : [...prev, seriesId]);
      return true;
    }
    return false;
  }, [coins]);

  const contextValue = useMemo(() => ({
    badges, latestBadge, unlockBadge, hasVisited, markVisited, markBadgeViewed, xp, level, completedMissions, completeMission, user, hasCompletedOnboarding, completeOnboarding,
    coins, inventory, equippedItems, purchaseItem, equipItem, unlockedSeries, unlockSeries, addCoins
  }), [badges, latestBadge, unlockBadge, hasVisited, markVisited, markBadgeViewed, xp, level, completedMissions, completeMission, user, hasCompletedOnboarding, completeOnboarding,
       coins, inventory, equippedItems, purchaseItem, equipItem, unlockedSeries, unlockSeries, addCoins]);

  return (
    <GamificationContext.Provider value={contextValue}>
      {children}
    </GamificationContext.Provider>
  );
};

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (!context) throw new Error('useGamification must be used within a GamificationProvider');
  return context;
};
