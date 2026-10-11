import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGamification } from '../context/GamificationContext';
import { 
  ShoppingBag, 
  Coins, 
  Volume2, 
  VolumeX, 
  Music, 
  GraduationCap, 
  Map as MapIcon,
  Brain,
  Smartphone,
  Monitor,
  Globe,
  Gamepad2,
  BarChart3,
  Cpu,
  Sparkles,
  Bot,
  Zap,
  Star,
  User,
  LogOut,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { CODING_MISSIONS, Pathway } from '../data/missions';
import Mascot from './Mascot';
import MascotShop from './MascotShop';
import SeriesLibrary from './SeriesLibrary';
import CoinStoreModal from './CoinStoreModal';
import STEMExtensionsModal from './STEMExtensionsModal';
import KidsCourseSyllabus from './KidsCourseSyllabus';
import { getCourseByPathway } from '../data/kidsCourses';
import { sounds } from '../utils/sounds';

export const getPathwayIcon = (pathway: string) => {
  switch (pathway) {
    case 'Fundamentals': return Brain;
    case 'Mobile App Dev': return Smartphone;
    case 'Desktop App Dev': return Monitor;
    case 'Web App Dev': return Globe;
    case 'Game Dev': return Gamepad2;
    case 'Data Science (AI 4 Kids)': return BarChart3;
    case 'ML (AI 4 Kids)': return Cpu;
    case 'AI (AI 4 Kids)': return Sparkles;
    case 'Robotics (Robotics 4 Kids)': return Bot;
    case 'Electronics (Robotics 4 Kids)': return Zap;
    default: return Brain;
  }
};

type HubType = 'coding' | 'robotics' | 'ai';

interface WorldStyle {
  color: string;
  glow: string;
  pattern: string;
  icon: string;
  pathStyle: 'curve' | 'circuit' | 'dots' | 'wave' | 'pixel';
}

const PATHWAY_WORLDS: Record<Pathway, { dark: WorldStyle; light: WorldStyle }> = {
  'Fundamentals': {
    dark: { color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.15)', pattern: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 0)', icon: '🧠', pathStyle: 'curve' },
    light: { color: '#0ea5e9', glow: 'rgba(14, 165, 233, 0.1)', pattern: 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 1px, transparent 0)', icon: '🧠', pathStyle: 'curve' }
  },
  'Mobile App Dev': {
    dark: { color: '#22d3ee', glow: 'rgba(34, 211, 238, 0.15)', pattern: 'linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)', icon: '📱', pathStyle: 'wave' },
    light: { color: '#0891b2', glow: 'rgba(8, 145, 178, 0.1)', pattern: 'linear-gradient(rgba(8, 145, 178, 0.03) 1px, transparent 1px)', icon: '📱', pathStyle: 'wave' }
  },
  'Desktop App Dev': {
    dark: { color: '#94a3b8', glow: 'rgba(148, 163, 184, 0.15)', pattern: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)', icon: '💻', pathStyle: 'dots' },
    light: { color: '#475569', glow: 'rgba(71, 85, 105, 0.05)', pattern: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(71, 85, 105, 0.02) 10px, rgba(71, 85, 105, 0.02) 20px)', icon: '💻', pathStyle: 'dots' }
  },
  'Web App Dev': {
    dark: { color: '#6366f1', glow: 'rgba(99, 102, 241, 0.15)', pattern: 'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.1) 1px, transparent 0)', icon: '🌐', pathStyle: 'dots' },
    light: { color: '#4338ca', glow: 'rgba(67, 56, 202, 0.08)', pattern: 'radial-gradient(circle at 2px 2px, rgba(67, 56, 202, 0.03) 1px, transparent 0)', icon: '🌐', pathStyle: 'dots' }
  },
  'Game Dev': {
    dark: { color: '#f472b6', glow: 'rgba(244, 114, 182, 0.15)', pattern: 'conic-gradient(from 0deg, rgba(244, 114, 182, 0.05) 0deg 90deg, transparent 90deg 360deg)', icon: '🎮', pathStyle: 'pixel' },
    light: { color: '#db2777', glow: 'rgba(219, 39, 119, 0.08)', pattern: 'conic-gradient(from 0deg, rgba(219, 39, 119, 0.03) 0deg 90deg, transparent 90deg 360deg)', icon: '🎮', pathStyle: 'pixel' }
  },
  'Data Science (AI 4 Kids)': {
    dark: { color: '#fbbf24', glow: 'rgba(251, 191, 36, 0.15)', pattern: 'linear-gradient(90deg, rgba(251, 191, 36, 0.05) 1px, transparent 1px)', icon: '📊', pathStyle: 'dots' },
    light: { color: '#d97706', glow: 'rgba(217, 119, 6, 0.08)', pattern: 'linear-gradient(90deg, rgba(217, 119, 6, 0.03) 1px, transparent 1px)', icon: '📊', pathStyle: 'dots' }
  },
  'ML (AI 4 Kids)': {
    dark: { color: '#10b981', glow: 'rgba(16, 185, 129, 0.15)', pattern: 'radial-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px)', icon: '🤖', pathStyle: 'curve' },
    light: { color: '#059669', glow: 'rgba(5, 150, 105, 0.08)', pattern: 'radial-gradient(rgba(5, 150, 105, 0.04) 1px, transparent 1px)', icon: '🤖', pathStyle: 'curve' }
  },
  'AI (AI 4 Kids)': {
    dark: { color: '#a855f7', glow: 'rgba(168, 85, 247, 0.15)', pattern: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.05) 0%, transparent 70%)', icon: '✨', pathStyle: 'curve' },
    light: { color: '#7e22ce', glow: 'rgba(126, 34, 206, 0.08)', pattern: 'radial-gradient(circle at center, rgba(126, 34, 206, 0.05) 0%, transparent 70%)', icon: '✨', pathStyle: 'curve' }
  },
  'Robotics (Robotics 4 Kids)': {
    dark: { color: '#0ea5e9', glow: 'rgba(14, 165, 233, 0.15)', pattern: 'linear-gradient(rgba(14, 165, 233, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.05) 1px, transparent 1px)', icon: '🦾', pathStyle: 'circuit' },
    light: { color: '#0284c7', glow: 'rgba(2, 132, 199, 0.08)', pattern: 'linear-gradient(rgba(2, 132, 199, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 132, 199, 0.03) 1px, transparent 1px)', icon: '🦾', pathStyle: 'circuit' }
  },
  'Electronics (Robotics 4 Kids)': {
    dark: { color: '#fbbf24', glow: 'rgba(251, 191, 36, 0.15)', pattern: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 0)', icon: '⚡', pathStyle: 'dots' },
    light: { color: '#d97706', glow: 'rgba(217, 119, 6, 0.08)', pattern: 'radial-gradient(circle, rgba(217, 119, 6, 0.03) 1px, transparent 0)', icon: '⚡', pathStyle: 'dots' }
  }
};


const HUB_PATHWAYS: Record<HubType, Pathway[]> = {
  coding: ['Fundamentals', 'Mobile App Dev', 'Desktop App Dev', 'Web App Dev', 'Game Dev'],
  robotics: ['Robotics (Robotics 4 Kids)', 'Electronics (Robotics 4 Kids)'],
  ai: ['Data Science (AI 4 Kids)', 'ML (AI 4 Kids)', 'AI (AI 4 Kids)']
};

interface MissionMapProps {
  hub?: HubType;
  defaultView?: 'map' | 'syllabus';
}

const MissionMap: React.FC<MissionMapProps> = ({ hub = 'coding', defaultView }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showShop, setShowShop] = useState(false);
  const showLibrary = searchParams.get('library') === 'true' || !!searchParams.get('series');
  const activeSeriesId = searchParams.get('series');
  const [showCoinStore, setShowCoinStore] = useState(false);
  const [showExtensions, setShowExtensions] = useState(false);
  const [viewMode, setViewMode] = useState<'map' | 'syllabus'>(
    searchParams.get('view') === 'syllabus' || defaultView === 'syllabus' ? 'syllabus' : 'map'
  );
  const { xp, level, completedMissions, coins, studentName } = useGamification();
  const { theme, toggleTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Sync viewMode from URL query params
  React.useEffect(() => {
    const rawView = searchParams.get('view');
    if (rawView === 'syllabus') {
      setViewMode('syllabus');
    } else if (rawView === 'map') {
      setViewMode('map');
    }
  }, [searchParams]);

  // Auto-open extensions modal on ?extensions=true
  React.useEffect(() => {
    if (searchParams.get('extensions') === 'true') {
      setShowExtensions(true);
    }
  }, [searchParams]);

  // Audio control state
  const [muted, setMuted] = useState(sounds.getMuted());
  const [musicOn, setMusicOn] = useState(sounds.getMusicOn());

  const handleToggleMute = () => {
    const isMuted = sounds.toggleMute();
    setMuted(isMuted);
    sounds.playClick();
  };

  const handleToggleMusic = () => {
    const isMusicOn = sounds.toggleMusic();
    setMusicOn(isMusicOn);
    sounds.playClick();
  };

  const handleToggleView = (mode: 'map' | 'syllabus') => {
    setViewMode(mode);
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.set('view', mode);
      return next;
    });
    sounds.playClick();
  };

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const pathways = HUB_PATHWAYS[hub];
  
  // Resolve initial pathway from URL search params (?pathway=... or ?tab=... or ?p=...)
  const initialPathway = useMemo(() => {
    const rawParam = searchParams.get('pathway') || searchParams.get('tab') || searchParams.get('p');
    if (rawParam) {
      const match = pathways.find(p => p.toLowerCase().includes(rawParam.toLowerCase().trim()) || rawParam.toLowerCase().includes(p.toLowerCase()));
      if (match) return match;
    }
    return pathways[0];
  }, [hub, searchParams, pathways]);

  const [selectedPathway, setSelectedPathway] = useState<Pathway>(initialPathway);

  // Sync selected pathway if URL query param changes
  React.useEffect(() => {
    setSelectedPathway(initialPathway);
  }, [initialPathway]);

  const handleSelectPathway = (pathway: Pathway) => {
    setSelectedPathway(pathway);
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.set('pathway', pathway);
      return next;
    });
    sounds.playClick();
  };

  const activeCourse = useMemo(() => {
    return getCourseByPathway(selectedPathway);
  }, [selectedPathway]);

  const world = PATHWAY_WORLDS[selectedPathway][theme];

  const filteredMissions = useMemo(() => {
    return CODING_MISSIONS.filter(m => m.pathway === selectedPathway);
  }, [selectedPathway]);

  return (
    <div className="mission-map-container" style={{
      minHeight: '100vh',
      background: `var(--kids-bg)`,
      backgroundImage: world.pattern,
      backgroundSize: '40px 40px',
      padding: '2rem 5%',
      color: 'var(--kids-text)',
      fontFamily: '"Nunito", sans-serif',
      position: 'relative',
      overflowX: 'hidden',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      {/* Background Glows */}
      <header style={{ 
        position: 'sticky', 
        top: '0', 
        zIndex: 100, 
        padding: isMobile ? '0.5rem' : '1rem 5%',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{
          background: theme === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: isMobile ? '16px' : '24px',
          padding: isMobile ? '0.4rem 0.55rem' : '0.75rem 2rem',
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '0.35rem' : '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          border: '1px solid rgba(255,255,255,0.1)',
          maxWidth: '1200px',
          width: '100%',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.35rem' : '0.85rem' }}>
            <div style={{
              background: `linear-gradient(135deg, ${world.color}, ${world.color}dd)`,
              padding: isMobile ? '0.22rem 0.45rem' : '0.35rem 0.75rem',
              borderRadius: '10px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: isMobile ? '0.72rem' : '0.82rem',
              fontWeight: 900,
              color: 'white',
              boxShadow: `0 2px 8px ${world.color}40`
            }}>
              <Star size={12} fill="currentColor" />
              <span>LVL {level}</span>
            </div>
            {!isMobile && (
              <span style={{ 
                fontWeight: 900, 
                fontSize: '1.05rem', 
                letterSpacing: '0.5px', 
                fontFamily: '"Baloo 2", cursive',
                color: 'var(--kids-text)' 
              }}>
                {hub.toUpperCase()}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', gap: isMobile ? '0.25rem' : '0.65rem', alignItems: 'center' }}>
            <div style={{
              background: 'rgba(251,191,36,0.12)',
              border: '1px solid rgba(251,191,36,0.25)',
              padding: isMobile ? '0.22rem 0.4rem' : '0.35rem 0.7rem',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              color: '#f59e0b',
              fontWeight: 800,
              fontSize: isMobile ? '0.72rem' : '0.85rem'
            }}>
              <Coins size={13} />
              <span>{coins}</span>
            </div>

            <button
              onClick={() => setShowCoinStore(true)}
              title="Get more coins"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                border: 'none',
                padding: isMobile ? '0.22rem 0.4rem' : '0.35rem 0.7rem',
                borderRadius: '10px',
                color: '#1e293b',
                fontWeight: 800,
                cursor: 'pointer',
                fontSize: isMobile ? '0.7rem' : '0.8rem',
                boxShadow: '0 2px 6px rgba(245, 158, 11, 0.25)'
              }}
            >
              + Get
            </button>
            
            <button
              onClick={() => setShowShop(true)}
              title="Mascot Costume Shop"
              style={{
                padding: isMobile ? '0.22rem 0.45rem' : '0.35rem 0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontWeight: 800,
                fontSize: isMobile ? '0.72rem' : '0.82rem',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(249, 115, 22, 0.3)'
              }}
            >
              <ShoppingBag size={13} />
              {!isMobile && <span>Shop</span>}
            </button>

            {studentName ? (
              <div
                title="Class Account Logged In"
                style={{
                  background: 'rgba(14, 165, 233, 0.12)',
                  border: '1px solid rgba(14, 165, 233, 0.25)',
                  color: '#0ea5e9',
                  borderRadius: '10px',
                  padding: isMobile ? '0.22rem 0.45rem' : '0.35rem 0.75rem',
                  fontSize: isMobile ? '0.72rem' : '0.82rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                <User size={13} />
                {!isMobile && <span>{studentName.split(' ')[0]}</span>}
              </div>
            ) : (
              <button
                onClick={() => navigate('/class-login')}
                title="Guest Mode Active • Click to Log In"
                style={{
                  background: 'rgba(168, 85, 247, 0.12)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  color: '#a855f7',
                  borderRadius: '10px',
                  padding: isMobile ? '0.22rem 0.45rem' : '0.35rem 0.75rem',
                  fontSize: isMobile ? '0.72rem' : '0.82rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                <Sparkles size={13} />
                {!isMobile ? 'Guest • Login' : 'Login'}
              </button>
            )}

            <button 
              onClick={toggleTheme}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              style={{
                background: 'transparent',
                border: 'none',
                color: theme === 'dark' ? '#fbbf24' : '#64748b',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.25rem'
              }}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Audio controls for desktop */}
            {!isMobile && (
              <>
                <button
                  onClick={handleToggleMusic}
                  title={musicOn ? 'Mute Music' : 'Play Background Music'}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: musicOn ? '#c084fc' : '#94a3b8',
                    padding: '0.2rem',
                    outline: 'none'
                  }}
                >
                  <Music size={16} />
                </button>
                <button
                  onClick={handleToggleMute}
                  title={muted ? 'Unmute Sound FX' : 'Mute Sound FX'}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: !muted ? '#38bdf8' : '#94a3b8',
                    padding: '0.2rem',
                    outline: 'none'
                  }}
                >
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </>
            )}

            <button 
              onClick={() => navigate('/')}
              title="Exit to Homepage"
              style={{ 
                background: 'rgba(239, 68, 68, 0.12)', 
                border: '1px solid rgba(239, 68, 68, 0.3)', 
                padding: isMobile ? '0.25rem 0.45rem' : '0.35rem 0.75rem',
                borderRadius: '10px', 
                color: '#ef4444',
                fontWeight: 800,
                fontSize: isMobile ? '0.75rem' : '0.82rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <LogOut size={13} />
              {!isMobile && <span>Exit</span>}
            </button>
          </div>
        </div>
      </header>

      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: world.glow,
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: 0,
        pointerEvents: 'none',
        transition: 'all 0.8s ease'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: world.glow,
        filter: 'blur(80px)',
        borderRadius: '50%',
        zIndex: 0,
        pointerEvents: 'none',
        transition: 'all 0.8s ease',
        opacity: 0.6
      }} />

      {showShop && <MascotShop onClose={() => setShowShop(false)} />}
      {showLibrary && (
        <SeriesLibrary 
          initialSeriesId={activeSeriesId} 
          onClose={() => setSearchParams({})} 
        />
      )}
      <CoinStoreModal isOpen={showCoinStore} onClose={() => setShowCoinStore(false)} />


      {/* Pathway Selector Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem',
        marginBottom: isMobile ? '1rem' : '1.25rem',
        flexWrap: isMobile ? 'nowrap' : 'wrap'
      }}>
        {/* Pathway Tabs */}
        <div className="pathway-filters" style={{ 
          display: 'flex',
          gap: isMobile ? '0.4rem' : '0.6rem',
          padding: 0,
          margin: 0,
          flexWrap: isMobile ? 'nowrap' : 'wrap',
          overflowX: 'auto',
          maxWidth: '100%',
          alignItems: 'center'
        }}>
          {pathways.map(pathway => {
            const isActive = selectedPathway === pathway;
            const IconComponent = getPathwayIcon(pathway);
            return (
              <button 
                key={pathway}
                type="button"
                className={`pathway-tab ${isActive ? 'pathway-tab-active' : ''}`}
                style={{
                  background: isActive ? world.color : (theme === 'dark' ? 'rgba(30, 41, 59, 0.6)' : '#ffffff'),
                  color: isActive ? '#ffffff' : (theme === 'dark' ? '#cbd5e1' : '#475569'),
                  border: isActive ? `1.5px solid ${world.color}` : `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.08)' : '#e2e8f0'}`,
                  fontSize: isMobile ? '0.75rem' : '0.85rem',
                  padding: isMobile ? '0.45rem 0.85rem' : '0.55rem 1.15rem',
                  borderRadius: '12px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  whiteSpace: 'nowrap',
                  boxShadow: isActive ? `0 4px 14px ${world.color}40` : '0 2px 6px rgba(0,0,0,0.03)',
                  transition: 'all 0.15s ease'
                }}
                onClick={() => handleSelectPathway(pathway)}
              >
                <IconComponent size={isMobile ? 14 : 16} />
                <span>{pathway.replace(' (Robotics 4 Kids)', '').replace(' (AI 4 Kids)', '')}</span>
              </button>
            );
          })}

          {/* On mobile: Embed STEM Extensions into the scrollable list */}
          {isMobile && (hub === 'coding' || hub === 'robotics') && (
            <button
              type="button"
              style={{
                background: theme === 'dark' ? 'rgba(168, 85, 247, 0.12)' : 'rgba(168, 85, 247, 0.08)',
                border: '1.5px dashed rgba(168, 85, 247, 0.4)',
                color: '#a855f7',
                fontSize: '0.75rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '12px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
              onClick={() => { setShowExtensions(true); sounds.playClick(); }}
              title="Connect Micro:bit, Arduino, VEX and hardware extensions"
            >
              <Zap size={14} />
              <span>STEM Extensions</span>
            </button>
          )}
        </div>

        {/* Desktop STEM Hardware Extensions Action Button */}
        {!isMobile && (hub === 'coding' || hub === 'robotics') && (
          <button
            type="button"
            style={{
              background: theme === 'dark' ? 'rgba(168, 85, 247, 0.12)' : 'rgba(168, 85, 247, 0.08)',
              border: '1.5px dashed rgba(168, 85, 247, 0.4)',
              color: '#a855f7',
              fontSize: '0.82rem',
              padding: '0.55rem 1rem',
              borderRadius: '12px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              whiteSpace: 'nowrap',
              marginLeft: 'auto'
            }}
            onClick={() => { setShowExtensions(true); sounds.playClick(); }}
            title="Connect Micro:bit, Arduino, VEX and hardware extensions"
          >
            <Zap size={14} />
            <span>STEM Extensions</span>
          </button>
        )}
      </div>

      {showExtensions && (
        <STEMExtensionsModal
          isOpen={showExtensions}
          onClose={() => setShowExtensions(false)}
        />
      )}

      {/* Unified Pathway Progress & Segmented View Switcher Banner */}
      {(() => {
        const totalInPathway = filteredMissions.length;
        const doneInPathway = filteredMissions.filter(m => completedMissions.includes(m.id)).length;
        const xpRemaining = filteredMissions
          .filter(m => !completedMissions.includes(m.id))
          .reduce((sum, m) => sum + m.xpReward, 0);
        const pct = totalInPathway > 0 ? (doneInPathway / totalInPathway) * 100 : 0;
        const IconComponent = getPathwayIcon(selectedPathway);

        return (
          <div style={{
            background: theme === 'dark' ? 'rgba(30, 41, 59, 0.7)' : '#ffffff',
            border: `1.5px solid ${theme === 'dark' ? 'rgba(255,255,255,0.08)' : '#e2e8f0'}`,
            borderRadius: '18px',
            padding: isMobile ? '0.85rem 1rem' : '0.85rem 1.4rem',
            marginBottom: isMobile ? '1.5rem' : '2rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            justifyContent: 'space-between',
            gap: isMobile ? '0.85rem' : '1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
          }}>
            {/* Left: Pathway Title, Progress Bar, XP */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: 800, color: 'var(--kids-text)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <IconComponent size={16} style={{ color: world.color }} />
                  {selectedPathway.replace(' (Robotics 4 Kids)', '').replace(' (AI 4 Kids)', '')}
                </span>
                <span style={{ color: world.color, fontWeight: 800, fontSize: '0.82rem' }}>
                  {doneInPathway} / {totalInPathway} missions {doneInPathway === totalInPathway && totalInPathway > 0 ? '🎉 Complete!' : `• ${xpRemaining} XP left`}
                </span>
              </div>
              <div style={{ height: '7px', background: theme === 'dark' ? 'rgba(255,255,255,0.08)' : '#f1f5f9', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{
                  width: `${pct}%`,
                  height: '100%',
                  background: `linear-gradient(90deg, ${world.color}, ${world.color}cc)`,
                  boxShadow: `0 0 8px ${world.color}88`,
                  borderRadius: '6px',
                  transition: 'width 0.6s ease-out'
                }} />
              </div>
            </div>

            {/* Right: Sleek Segmented Switcher (Map vs Syllabus) */}
            <div style={{
              display: 'inline-flex',
              background: theme === 'dark' ? 'rgba(15, 23, 42, 0.7)' : '#f1f5f9',
              padding: '3px',
              borderRadius: '12px',
              border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.06)' : '#e2e8f0'}`,
              flexShrink: 0,
              alignSelf: isMobile ? 'center' : 'auto',
              width: isMobile ? '100%' : 'auto'
            }}>
              <button
                type="button"
                onClick={() => handleToggleView('map')}
                style={{
                  flex: isMobile ? 1 : 'initial',
                  background: viewMode === 'map' ? world.color : 'transparent',
                  color: viewMode === 'map' ? '#ffffff' : (theme === 'dark' ? '#94a3b8' : '#64748b'),
                  border: 'none',
                  borderRadius: '9px',
                  padding: isMobile ? '0.4rem 0.6rem' : '0.42rem 1.1rem',
                  fontSize: isMobile ? '0.78rem' : '0.82rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  boxShadow: viewMode === 'map' ? `0 2px 8px ${world.color}50` : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <MapIcon size={14} />
                <span>Adventure Map</span>
              </button>

              <button
                type="button"
                onClick={() => handleToggleView('syllabus')}
                style={{
                  flex: isMobile ? 1 : 'initial',
                  background: viewMode === 'syllabus' ? world.color : 'transparent',
                  color: viewMode === 'syllabus' ? '#ffffff' : (theme === 'dark' ? '#94a3b8' : '#64748b'),
                  border: 'none',
                  borderRadius: '9px',
                  padding: isMobile ? '0.4rem 0.6rem' : '0.42rem 1.1rem',
                  fontSize: isMobile ? '0.78rem' : '0.82rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  boxShadow: viewMode === 'syllabus' ? `0 2px 8px ${world.color}50` : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <GraduationCap size={14} />
                <span>Course Syllabus & Labs</span>
              </button>
            </div>
          </div>
        );
      })()}

      {/* Main View: Course Syllabus vs Adventure Map */}
      {viewMode === 'syllabus' && activeCourse ? (
        <KidsCourseSyllabus
          course={activeCourse}
          hub={hub}
          onBackToMap={() => handleToggleView('map')}
        />
      ) : (
        <>
          {/* Series Library Entry Point - Only for Game Dev */}
          {selectedPathway === 'Game Dev' && (
            <div style={{
              background: 'linear-gradient(135deg, #f472b6, #ec4899)',
              borderRadius: '20px',
              padding: '1.5rem 2rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: 'white',
              boxShadow: '0 10px 30px rgba(236, 72, 153, 0.2)',
              border: '2px solid rgba(255,255,255,0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ margin: 0, fontFamily: '"Baloo 2", cursive', fontSize: '1.5rem' }}>Want to chill? 🍦</h3>
                <p style={{ margin: '0.2rem 0 0', opacity: 0.9, fontSize: '0.95rem' }}>
                  Explore the Game Series Library and play over 40+ mini-games!
                </p>
              </div>
              <button 
                onClick={() => setSearchParams({ library: 'true' })}
                style={{
                  background: 'white',
                  color: '#ec4899',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '14px',
                  fontWeight: 900,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                Open Library 📚
              </button>
              
              {/* Decorative icons */}
              <div style={{ position: 'absolute', right: '150px', top: '-10px', fontSize: '3rem', opacity: 0.2, transform: 'rotate(15deg)' }}>🎮</div>
              <div style={{ position: 'absolute', left: '40%', bottom: '-10px', fontSize: '2.5rem', opacity: 0.15, transform: 'rotate(-10deg)' }}>🧩</div>
            </div>
          )}

          {/* The Winding Path */}
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            position: 'relative',
            padding: isMobile ? '2rem 1rem 10rem 1rem' : '2rem 0 10rem 0'
          }}>
            {/* Connection Line */}
            <svg 
              viewBox="0 0 800 1000" 
              preserveAspectRatio="none"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.2 }}
            >
              {world.pathStyle === 'curve' && (
                <path 
                  d="M 400 100 Q 600 300 400 500 Q 200 700 400 900" 
                  fill="none" 
                  stroke={world.color} 
                  strokeWidth="12" 
                  strokeLinecap="round"
                  className="path-pulsing"
                />
              )}
              {world.pathStyle === 'circuit' && (
                <path 
                  d="M 400 100 L 400 200 L 600 200 L 600 400 L 400 400 L 400 600 L 200 600 L 200 800 L 400 800 L 400 900" 
                  fill="none" 
                  stroke={world.color} 
                  strokeWidth="8" 
                  strokeLinejoin="round"
                  className="path-pulsing"
                />
              )}
              {world.pathStyle === 'pixel' && (
                <path 
                  d="M 400 100 L 400 150 L 450 150 L 450 200 L 500 200 L 500 250 L 550 250 L 550 300 L 500 300 L 500 350 L 450 350 L 450 400 L 400 400 L 400 450 L 350 450 L 350 500 L 300 500 L 300 550 L 250 550 L 250 600 L 300 600 L 300 650 L 350 650 L 350 700 L 400 700 L 400 900" 
                  fill="none" 
                  stroke={world.color} 
                  strokeWidth="10" 
                  className="path-solid-pulse"
                  style={{ '--kids-blue': world.color } as React.CSSProperties}
                />
              )}
              {world.pathStyle === 'dots' && (
                <path 
                  d="M 400 100 Q 600 300 400 500 Q 200 700 400 900" 
                  fill="none" 
                  stroke={world.color} 
                  strokeWidth="6" 
                  strokeDasharray="1 20" 
                  strokeLinecap="round"
                  className="path-solid-pulse"
                  style={{ '--kids-blue': world.color } as React.CSSProperties}
                />
              )}
              {world.pathStyle === 'wave' && (
                <path 
                  d="M 400 100 T 500 200 T 400 300 T 300 400 T 400 500 T 500 600 T 400 700 T 300 800 T 400 900" 
                  fill="none" 
                  stroke={world.color} 
                  strokeWidth="14" 
                  strokeLinecap="round"
                  className="path-pulsing"
                  opacity={0.4}
                />
              )}
            </svg>

            {filteredMissions.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--kids-text-muted)' }}>
                <h3>New missions loading...</h3>
              </div>
            ) : filteredMissions.map((mission, index) => {
              const isUnlocked = index === 0 || completedMissions.includes(filteredMissions[index - 1].id);
              const isCompleted = completedMissions.includes(mission.id);

              return (
                <div 
                  key={mission.id}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: isMobile ? 'center' : (index % 2 === 0 ? 'flex-end' : 'flex-start'),
                    marginBottom: isMobile ? '6rem' : '8rem',
                    zIndex: 1
                  }}
                >
                  <div 
                    onClick={() => isUnlocked && navigate(`/${hub}/mission/${mission.id}`)}
                    className={`mission-item-container ${isUnlocked ? 'animate-float' : ''}`}
                    style={{
                      display: 'flex',
                      flexDirection: isMobile ? 'column' : (index % 2 === 0 ? 'row-reverse' : 'row'),
                      alignItems: 'center',
                      gap: isMobile ? '1.5rem' : '2.5rem',
                      cursor: isUnlocked ? 'pointer' : 'not-allowed',
                      width: isMobile ? '100%' : 'auto',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div 
                      className={`mission-node ${isUnlocked ? 'mission-node-unlocked' : 'mission-node-locked'} ${isCompleted ? 'mission-node-completed' : ''}`}
                      style={{
                        '--node-color': world.color,
                        '--node-shadow': `${world.color}dd`,
                        flexShrink: 0
                      } as any}
                    >
                      {!isUnlocked ? (
                        <span style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>🔒</span>
                      ) : (
                        <>
                          <span style={{ fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 800 }}>{index + 1}</span>
                          {isCompleted && <span style={{ fontSize: '0.75rem', position: 'absolute', bottom: '-10px', background: '#22c55e', color: 'white', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>DONE</span>}
                        </>
                      )}
                    </div>
                    
                    {/* Mission Label */}
                    <div style={{
                      textAlign: isMobile ? 'center' : (index % 2 === 0 ? 'right' : 'left'),
                      width: isMobile ? '180px' : '240px',
                      pointerEvents: 'none'
                    }}>
                      <h4 style={{ 
                        margin: 0, 
                        color: isUnlocked ? 'var(--kids-text)' : 'var(--kids-text-muted)', 
                        fontSize: isMobile ? '1.1rem' : '1.3rem', 
                        fontFamily: 'Baloo 2, cursive',
                        lineHeight: 1.2
                      }}>{mission.name}</h4>
                      <p style={{ margin: '0.2rem 0 0 0', color: 'var(--kids-text-muted)', fontSize: '0.85rem', fontWeight: 700 }}>{mission.xpReward} XP</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Mascot encouraging at the end */}
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <div style={{ width: '130px', margin: '0 auto', opacity: 0.9 }}>
                <Mascot />
              </div>
              <h2 className="lab-title" style={{ marginTop: '1.5rem', color: world.color }}>Level Up Your Skills!</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MissionMap;

