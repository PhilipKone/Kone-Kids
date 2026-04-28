import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
}

interface GamificationContextType {
  badges: Badge[];
  unlockBadge: (id: string) => void;
  hasVisited: { [key: string]: boolean };
  markVisited: (page: string) => void;
}

const INITIAL_BADGES: Badge[] = [
  { id: 'first_hello', name: 'First Hello', icon: '/badges/hello.png', description: 'Run your first code script!', unlocked: false },
  { id: 'explorer', name: 'Explorer', icon: '/badges/explorer.png', description: 'Visit Coding, Robotics, and AI pages!', unlocked: false },
  { id: 'mascot_master', name: 'Mascot Master', icon: '/badges/mascot.png', description: 'Click on the mascot 5 times!', unlocked: false },
  { id: 'future_hero', name: 'Future Hero', icon: '/badges/hero.png', description: 'Enroll in a program!', unlocked: false },
];

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export const GamificationProvider: React.FC = ({ children }) => {
  const [badges, setBadges] = useState<Badge[]>(() => {
    const saved = localStorage.getItem('kone_kids_badges');
    if (!saved) return INITIAL_BADGES;
    
    // Migration logic: Keep the 'unlocked' status but use latest names/icons/descriptions
    const savedBadges = JSON.parse(saved) as Badge[];
    return INITIAL_BADGES.map(initial => {
      const saved = savedBadges.find(s => s.id === initial.id);
      return saved ? { ...initial, unlocked: saved.unlocked } : initial;
    });
  });

  const [hasVisited, setHasVisited] = useState<{ [key: string]: boolean }>(() => {
    const saved = localStorage.getItem('kone_kids_visited');
    return saved ? JSON.parse(saved) : {};
  });

  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    localStorage.setItem('kone_kids_badges', JSON.stringify(badges));
  }, [badges]);

  useEffect(() => {
    localStorage.setItem('kone_kids_visited', JSON.stringify(hasVisited));
    
    // Check for Explorer badge
    if (hasVisited['/coding'] && hasVisited['/robotics'] && hasVisited['/ai']) {
      unlockBadge('explorer');
    }
  }, [hasVisited]);

  const unlockBadge = useCallback((id: string) => {
    setBadges(prev => prev.map(badge => {
      if (badge.id === id && !badge.unlocked) {
        console.log(`[Gamification] Badge unlocked: ${badge.name}`);
        return { ...badge, unlocked: true };
      }
      return badge;
    }));
  }, []);

  const markVisited = useCallback((page: string) => {
    setHasVisited(prev => {
      if (prev[page]) return prev; // Already visited — return SAME reference, no re-render
      return { ...prev, [page]: true };
    });
  }, []);

  const contextValue = useMemo(() => ({
    badges, unlockBadge, hasVisited, markVisited
  }), [badges, unlockBadge, hasVisited, markVisited]);

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
