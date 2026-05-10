import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { db, auth } from '../firebase/config';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
  xpReward?: number;
}

interface GamificationContextType {
  badges: Badge[];
  unlockBadge: (id: string) => void;
  hasVisited: { [key: string]: boolean };
  markVisited: (page: string) => void;
  // Game Stats
  xp: number;
  level: number;
  completedMissions: string[];
  completeMission: (missionId: string, baseXP: number) => void;
  user: any;
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
        return saved ? { ...initial, unlocked: saved.unlocked } : initial;
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
            lastSync: new Date().toISOString()
          }, { merge: true });
        } catch (e) {
          console.warn('Firebase Sync: Failed to save user data.', e);
        }
      };
      syncData();
    }
  }, [xp, completedMissions, badges, user]);

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

  const unlockBadge = useCallback((id: string) => {
    setBadges(prev => prev.map(badge => {
      if (badge.id === id && !badge.unlocked) {
        if (badge.xpReward) {
          setXp(curr => curr + badge.xpReward!);
        }
        return { ...badge, unlocked: true };
      }
      return badge;
    }));
  }, []);

  const markVisited = useCallback((page: string) => {
    setHasVisited(prev => {
      if (prev[page]) return prev;
      if (Object.keys(prev).length === 0) {
        unlockBadge('welcome_hero');
      }
      return { ...prev, [page]: true };
    });
  }, [unlockBadge]);

  const completeMission = useCallback((missionId: string, baseXP: number) => {
    setCompletedMissions(prev => {
      if (prev.includes(missionId)) return prev;
      const nextMissions = [...prev, missionId];
      setXp(curr => curr + baseXP);
      
      // Auto-unlock pathway badges
      import('../data/missions').then(({ CODING_MISSIONS }) => {
        const checkPathway = (pathway: string, badgeId: string) => {
          const pathwayMissions = CODING_MISSIONS.filter(m => m.pathway.includes(pathway));
          const completedInPathway = pathwayMissions.filter(m => nextMissions.includes(m.id));
          if (pathwayMissions.length > 0 && completedInPathway.length === pathwayMissions.length) {
            unlockBadge(badgeId);
          }
        };

        checkPathway('Mobile', 'app_builder');
        checkPathway('Web', 'web_wizard');
        checkPathway('Game', 'game_master');
        checkPathway('AI', 'ai_genius');
        checkPathway('ML', 'ai_genius');
        checkPathway('Robotics', 'robot_commander');
        checkPathway('Data Science', 'data_scientist');
      });

      return nextMissions;
    });
  }, [unlockBadge]);

  const contextValue = useMemo(() => ({
    badges, unlockBadge, hasVisited, markVisited, xp, level, completedMissions, completeMission, user
  }), [badges, unlockBadge, hasVisited, markVisited, xp, level, completedMissions, completeMission, user]);

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
