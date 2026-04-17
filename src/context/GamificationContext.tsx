import React, { createContext, useContext, useState, useEffect } from 'react';

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
  { id: 'first_hello', name: 'First Hello', icon: '🏷️', description: 'Run your first code script!', unlocked: false },
  { id: 'explorer', name: 'Explorer', icon: '🔍', description: 'Visit Coding, Robotics, and AI pages!', unlocked: false },
  { id: 'mascot_master', name: 'Mascot Master', icon: '🎉', description: 'Click on the mascot 5 times!', unlocked: false },
  { id: 'future_hero', name: 'Future Hero', icon: '🚀', description: 'Enroll in a program!', unlocked: false },
];

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export const GamificationProvider: React.FC = ({ children }) => {
  const [badges, setBadges] = useState<Badge[]>(() => {
    const saved = localStorage.getItem('kone_kids_badges');
    return saved ? JSON.parse(saved) : INITIAL_BADGES;
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

  const unlockBadge = (id: string) => {
    setBadges(prev => prev.map(badge => {
      if (badge.id === id && !badge.unlocked) {
        // Trigger celebration (this could be handled by a listener or global event)
        console.log(`[Gamification] Badge unlocked: ${badge.name}`);
        return { ...badge, unlocked: true };
      }
      return badge;
    }));
  };

  const markVisited = (page: string) => {
    setHasVisited(prev => ({ ...prev, [page]: true }));
  };

  return (
    <GamificationContext.Provider value={{ badges, unlockBadge, hasVisited, markVisited }}>
      {children}
    </GamificationContext.Provider>
  );
};

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (!context) throw new Error('useGamification must be used within a GamificationProvider');
  return context;
};
