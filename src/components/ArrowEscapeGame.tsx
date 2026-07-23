import React, { useState, useEffect } from 'react';
import { ChevronLeft, RotateCcw, Undo2, HelpCircle, Trophy, Sparkles, ArrowUp, ArrowRight, ArrowDown, ArrowLeft, Lightbulb } from 'lucide-react';
import { sounds } from '../utils/sounds';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';
import { useIsMobile } from '../hooks/useMediaQuery';

interface ArrowEscapeGameProps {
  level: number;
  onComplete: (xp: number) => void;
  onExit: () => void;
}

type Direction = 'up' | 'right' | 'down' | 'left';

export interface ArrowBlock {
  id: string;
  x: number;
  y: number;
  dir: Direction;
  color: string;
}

interface LevelConfig {
  gridSize: number;
  title: string;
  hintMsg: string;
  parMoves: number;
  blocks: ArrowBlock[];
}

const COLOR_PALETTE = {
  indigo: { bg: 'linear-gradient(135deg, #6366f1, #4f46e5)', border: '#818cf8', shadow: 'rgba(99,102,241,0.4)' },
  rose: { bg: 'linear-gradient(135deg, #f43f5e, #e11d48)', border: '#fb7185', shadow: 'rgba(244,63,94,0.4)' },
  emerald: { bg: 'linear-gradient(135deg, #10b981, #059669)', border: '#34d399', shadow: 'rgba(16,185,129,0.4)' },
  amber: { bg: 'linear-gradient(135deg, #f59e0b, #d97706)', border: '#fbbf24', shadow: 'rgba(245,158,11,0.4)' },
  cyan: { bg: 'linear-gradient(135deg, #06b6d4, #0891b2)', border: '#22d3ee', shadow: 'rgba(6,182,212,0.4)' },
  purple: { bg: 'linear-gradient(135deg, #a855f7, #9333ea)', border: '#c084fc', shadow: 'rgba(168,85,247,0.4)' },
  fuchsia: { bg: 'linear-gradient(135deg, #d946ef, #c026d3)', border: '#e879f9', shadow: 'rgba(217,70,239,0.4)' }
};

const ARROW_LEVELS: Record<number, LevelConfig> = {
  1: {
    gridSize: 3,
    title: 'First Flight',
    hintMsg: 'Tap the top block pointing UP first — its path to the top is clear!',
    parMoves: 3,
    blocks: [
      { id: 'b1', x: 1, y: 0, dir: 'up', color: 'indigo' },
      { id: 'b2', x: 1, y: 1, dir: 'right', color: 'emerald' },
      { id: 'b3', x: 2, y: 2, dir: 'down', color: 'rose' }
    ]
  },
  2: {
    gridSize: 3,
    title: 'Crossroad Shuffle',
    hintMsg: 'Find the block whose path to the outer boundary is not blocked by anyone else!',
    parMoves: 4,
    blocks: [
      { id: 'b1', x: 0, y: 1, dir: 'left', color: 'cyan' },
      { id: 'b2', x: 1, y: 1, dir: 'up', color: 'amber' },
      { id: 'b3', x: 1, y: 2, dir: 'down', color: 'purple' },
      { id: 'b4', x: 2, y: 1, dir: 'right', color: 'rose' }
    ]
  },
  3: {
    gridSize: 3,
    title: 'Chain Reaction',
    hintMsg: 'Unblock the outer arrows first to let the inner arrows escape!',
    parMoves: 5,
    blocks: [
      { id: 'b1', x: 0, y: 0, dir: 'up', color: 'emerald' },
      { id: 'b2', x: 2, y: 0, dir: 'right', color: 'indigo' },
      { id: 'b3', x: 1, y: 1, dir: 'up', color: 'amber' },
      { id: 'b4', x: 0, y: 2, dir: 'left', color: 'fuchsia' },
      { id: 'b5', x: 2, y: 2, dir: 'down', color: 'rose' }
    ]
  },
  4: {
    gridSize: 4,
    title: 'Quad Grid Challenge',
    hintMsg: 'Look closely at column 3 — the rightward arrow has an open runway!',
    parMoves: 6,
    blocks: [
      { id: 'b1', x: 3, y: 0, dir: 'right', color: 'rose' },
      { id: 'b2', x: 1, y: 0, dir: 'up', color: 'indigo' },
      { id: 'b3', x: 1, y: 1, dir: 'left', color: 'amber' },
      { id: 'b4', x: 2, y: 2, dir: 'down', color: 'emerald' },
      { id: 'b5', x: 0, y: 3, dir: 'left', color: 'cyan' },
      { id: 'b6', x: 3, y: 3, dir: 'down', color: 'purple' }
    ]
  },
  5: {
    gridSize: 4,
    title: 'The Interlock',
    hintMsg: 'Clear the edges step by step to release the center block!',
    parMoves: 7,
    blocks: [
      { id: 'b1', x: 0, y: 0, dir: 'left', color: 'cyan' },
      { id: 'b2', x: 3, y: 0, dir: 'right', color: 'rose' },
      { id: 'b3', x: 1, y: 1, dir: 'up', color: 'indigo' },
      { id: 'b4', x: 2, y: 1, dir: 'right', color: 'emerald' },
      { id: 'b5', x: 1, y: 2, dir: 'left', color: 'amber' },
      { id: 'b6', x: 2, y: 2, dir: 'down', color: 'purple' },
      { id: 'b7', x: 0, y: 3, dir: 'down', color: 'fuchsia' }
    ]
  },
  6: {
    gridSize: 4,
    title: 'Traffic Jam',
    hintMsg: 'Start with the block on the far right that points rightwards.',
    parMoves: 8,
    blocks: [
      { id: 'b1', x: 1, y: 0, dir: 'up', color: 'emerald' },
      { id: 'b2', x: 2, y: 0, dir: 'right', color: 'rose' },
      { id: 'b3', x: 0, y: 1, dir: 'left', color: 'cyan' },
      { id: 'b4', x: 1, y: 1, dir: 'up', color: 'amber' },
      { id: 'b5', x: 2, y: 1, dir: 'down', color: 'indigo' },
      { id: 'b6', x: 3, y: 1, dir: 'right', color: 'fuchsia' },
      { id: 'b7', x: 1, y: 2, dir: 'left', color: 'purple' },
      { id: 'b8', x: 2, y: 3, dir: 'down', color: 'emerald' }
    ]
  },
  7: {
    gridSize: 5,
    title: 'Five-Star Fortress',
    hintMsg: 'Work from the outer ring inward to untangle the grid.',
    parMoves: 9,
    blocks: [
      { id: 'b1', x: 0, y: 0, dir: 'up', color: 'indigo' },
      { id: 'b2', x: 4, y: 0, dir: 'right', color: 'rose' },
      { id: 'b3', x: 2, y: 1, dir: 'up', color: 'amber' },
      { id: 'b4', x: 1, y: 2, dir: 'left', color: 'emerald' },
      { id: 'b5', x: 3, y: 2, dir: 'right', color: 'cyan' },
      { id: 'b6', x: 2, y: 3, dir: 'down', color: 'purple' },
      { id: 'b7', x: 0, y: 4, dir: 'left', color: 'fuchsia' },
      { id: 'b8', x: 4, y: 4, dir: 'down', color: 'emerald' },
      { id: 'b9', x: 2, y: 2, dir: 'up', color: 'indigo' }
    ]
  },
  8: {
    gridSize: 5,
    title: 'Matrix Escape',
    hintMsg: 'Multiple blocks share the same column — clear the leading one first!',
    parMoves: 10,
    blocks: [
      { id: 'b1', x: 1, y: 0, dir: 'up', color: 'cyan' },
      { id: 'b2', x: 3, y: 0, dir: 'up', color: 'rose' },
      { id: 'b3', x: 0, y: 2, dir: 'left', color: 'emerald' },
      { id: 'b4', x: 2, y: 2, dir: 'right', color: 'purple' },
      { id: 'b5', x: 4, y: 2, dir: 'right', color: 'amber' },
      { id: 'b6', x: 1, y: 4, dir: 'down', color: 'indigo' },
      { id: 'b7', x: 3, y: 4, dir: 'down', color: 'fuchsia' },
      { id: 'b8', x: 2, y: 1, dir: 'up', color: 'cyan' },
      { id: 'b9', x: 2, y: 3, dir: 'down', color: 'rose' },
      { id: 'b10', x: 1, y: 2, dir: 'left', color: 'amber' }
    ]
  },
  9: {
    gridSize: 5,
    title: 'The Labyrinth Knot',
    hintMsg: 'Find the single key block that unlocks the bottleneck!',
    parMoves: 11,
    blocks: [
      { id: 'b1', x: 0, y: 1, dir: 'left', color: 'indigo' },
      { id: 'b2', x: 1, y: 1, dir: 'up', color: 'rose' },
      { id: 'b3', x: 2, y: 1, dir: 'right', color: 'emerald' },
      { id: 'b4', x: 3, y: 1, dir: 'up', color: 'amber' },
      { id: 'b5', x: 4, y: 1, dir: 'right', color: 'cyan' },
      { id: 'b6', x: 1, y: 3, dir: 'down', color: 'purple' },
      { id: 'b7', x: 2, y: 3, dir: 'left', color: 'fuchsia' },
      { id: 'b8', x: 3, y: 3, dir: 'down', color: 'emerald' },
      { id: 'b9', x: 2, y: 2, dir: 'right', color: 'amber' },
      { id: 'b10', x: 0, y: 4, dir: 'down', color: 'rose' },
      { id: 'b11', x: 4, y: 4, dir: 'right', color: 'indigo' }
    ]
  },
  10: {
    gridSize: 6,
    title: 'Hexa Grid Puzzle',
    hintMsg: 'Clear the corners to free up lateral movement.',
    parMoves: 12,
    blocks: [
      { id: 'b1', x: 0, y: 0, dir: 'left', color: 'rose' },
      { id: 'b2', x: 5, y: 0, dir: 'right', color: 'indigo' },
      { id: 'b3', x: 2, y: 1, dir: 'up', color: 'emerald' },
      { id: 'b4', x: 3, y: 1, dir: 'up', color: 'amber' },
      { id: 'b5', x: 1, y: 3, dir: 'left', color: 'cyan' },
      { id: 'b6', x: 4, y: 3, dir: 'right', color: 'purple' },
      { id: 'b7', x: 2, y: 4, dir: 'down', color: 'fuchsia' },
      { id: 'b8', x: 3, y: 4, dir: 'down', color: 'emerald' },
      { id: 'b9', x: 0, y: 5, dir: 'down', color: 'cyan' },
      { id: 'b10', x: 5, y: 5, dir: 'down', color: 'rose' },
      { id: 'b11', x: 2, y: 2, dir: 'left', color: 'amber' },
      { id: 'b12', x: 3, y: 2, dir: 'right', color: 'indigo' }
    ]
  },
  11: {
    gridSize: 6,
    title: 'The Great Spiral',
    hintMsg: 'Follow the spiral direction outwards!',
    parMoves: 13,
    blocks: [
      { id: 'b1', x: 0, y: 0, dir: 'right', color: 'indigo' },
      { id: 'b2', x: 5, y: 0, dir: 'down', color: 'rose' },
      { id: 'b3', x: 5, y: 5, dir: 'left', color: 'emerald' },
      { id: 'b4', x: 0, y: 5, dir: 'up', color: 'amber' },
      { id: 'b5', x: 1, y: 1, dir: 'right', color: 'cyan' },
      { id: 'b6', x: 4, y: 1, dir: 'down', color: 'purple' },
      { id: 'b7', x: 4, y: 4, dir: 'left', color: 'fuchsia' },
      { id: 'b8', x: 1, y: 4, dir: 'up', color: 'emerald' },
      { id: 'b9', x: 2, y: 2, dir: 'right', color: 'rose' },
      { id: 'b10', x: 3, y: 2, dir: 'down', color: 'cyan' },
      { id: 'b11', x: 3, y: 3, dir: 'left', color: 'amber' },
      { id: 'b12', x: 2, y: 3, dir: 'up', color: 'indigo' },
      { id: 'b13', x: 0, y: 2, dir: 'left', color: 'purple' }
    ]
  },
  12: {
    gridSize: 6,
    title: 'Master Escape Chamber',
    hintMsg: 'Final test! Every move counts toward the perfect score.',
    parMoves: 14,
    blocks: [
      { id: 'b1', x: 0, y: 0, dir: 'up', color: 'rose' },
      { id: 'b2', x: 2, y: 0, dir: 'up', color: 'indigo' },
      { id: 'b3', x: 4, y: 0, dir: 'right', color: 'emerald' },
      { id: 'b4', x: 1, y: 1, dir: 'left', color: 'amber' },
      { id: 'b5', x: 3, y: 1, dir: 'right', color: 'cyan' },
      { id: 'b6', x: 5, y: 1, dir: 'right', color: 'purple' },
      { id: 'b7', x: 0, y: 3, dir: 'left', color: 'fuchsia' },
      { id: 'b8', x: 2, y: 3, dir: 'down', color: 'emerald' },
      { id: 'b9', x: 4, y: 3, dir: 'right', color: 'rose' },
      { id: 'b10', x: 1, y: 5, dir: 'down', color: 'indigo' },
      { id: 'b11', x: 3, y: 5, dir: 'down', color: 'amber' },
      { id: 'b12', x: 5, y: 5, dir: 'down', color: 'cyan' },
      { id: 'b13', x: 2, y: 2, dir: 'up', color: 'purple' },
      { id: 'b14', x: 3, y: 2, dir: 'down', color: 'fuchsia' }
    ]
  }
};

export const ArrowEscapeGame: React.FC<ArrowEscapeGameProps> = ({ level, onComplete, onExit }) => {
  const isMobile = useIsMobile();
  const config = ARROW_LEVELS[level] || ARROW_LEVELS[1];

  const [blocks, setBlocks] = useState<ArrowBlock[]>(() => JSON.parse(JSON.stringify(config.blocks)));
  const [history, setHistory] = useState<ArrowBlock[][]>([]);
  const [movesCount, setMovesCount] = useState(0);
  const [shakingBlockId, setShakingBlockId] = useState<string | null>(null);
  const [escapingBlockId, setEscapingBlockId] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Reset when level changes
  useEffect(() => {
    const currentConfig = ARROW_LEVELS[level] || ARROW_LEVELS[1];
    setBlocks(JSON.parse(JSON.stringify(currentConfig.blocks)));
    setHistory([]);
    setMovesCount(0);
    setShakingBlockId(null);
    setEscapingBlockId(null);
    setShowHint(false);
    setIsCompleted(false);
  }, [level]);

  // Check if block can escape in its direction
  const canBlockEscape = (block: ArrowBlock, currentBlocks: ArrowBlock[]): boolean => {
    const { x, y, dir, id } = block;
    const g = config.gridSize;

    if (dir === 'up') {
      return !currentBlocks.some(b => b.id !== id && b.x === x && b.y < y);
    }
    if (dir === 'down') {
      return !currentBlocks.some(b => b.id !== id && b.x === x && b.y > y);
    }
    if (dir === 'left') {
      return !currentBlocks.some(b => b.id !== id && b.y === y && b.x < x);
    }
    if (dir === 'right') {
      return !currentBlocks.some(b => b.id !== id && b.y === y && b.x > x);
    }
    return false;
  };

  const handleBlockTap = (block: ArrowBlock) => {
    if (isCompleted || escapingBlockId) return;

    if (!canBlockEscape(block, blocks)) {
      // Shaking animation for blocked move
      sounds.playError();
      try { Haptics.impact({ style: ImpactStyle.Light }); } catch (e) {}
      setShakingBlockId(block.id);
      setTimeout(() => setShakingBlockId(null), 400);
      return;
    }

    // Block can escape!
    sounds.playPop();
    try { Haptics.impact({ style: ImpactStyle.Medium }); } catch (e) {}

    // Push history for Undo
    setHistory(prev => [...prev, JSON.parse(JSON.stringify(blocks))]);
    setMovesCount(prev => prev + 1);
    setEscapingBlockId(block.id);

    setTimeout(() => {
      const nextBlocks = blocks.filter(b => b.id !== block.id);
      setBlocks(nextBlocks);
      setEscapingBlockId(null);

      // Check level win
      if (nextBlocks.length === 0) {
        setIsCompleted(true);
        sounds.playWin();
        try { Haptics.notification({ type: NotificationType.Success }); } catch (e) {}
      }
    }, 300);
  };

  const handleUndo = () => {
    if (history.length === 0 || isCompleted || escapingBlockId) return;
    sounds.playClick();
    const prevBlocks = history[history.length - 1];
    setBlocks(prevBlocks);
    setHistory(prev => prev.slice(0, prev.length - 1));
  };

  const handleRestart = () => {
    sounds.playClick();
    setBlocks(JSON.parse(JSON.stringify(config.blocks)));
    setHistory([]);
    setMovesCount(0);
    setEscapingBlockId(null);
    setShakingBlockId(null);
    setIsCompleted(false);
  };

  // Find a valid next move to show as hint
  const getHintBlockId = (): string | null => {
    const valid = blocks.find(b => canBlockEscape(b, blocks));
    return valid ? valid.id : null;
  };

  const handleClaimVictory = () => {
    const xp = Math.max(100, 250 - (movesCount - config.parMoves) * 10);
    onComplete(xp);
  };

  const renderArrowIcon = (dir: Direction, size = 28) => {
    switch (dir) {
      case 'up': return <ArrowUp size={size} color="white" strokeWidth={3} />;
      case 'right': return <ArrowRight size={size} color="white" strokeWidth={3} />;
      case 'down': return <ArrowDown size={size} color="white" strokeWidth={3} />;
      case 'left': return <ArrowLeft size={size} color="white" strokeWidth={3} />;
    }
  };

  const hintTargetId = showHint ? getHintBlockId() : null;

  return (
    <div style={{
      width: '100%',
      maxWidth: '750px',
      margin: '0 auto',
      background: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(16px)',
      borderRadius: '28px',
      border: '1px solid rgba(236, 72, 153, 0.3)',
      padding: isMobile ? '1rem' : '1.75rem',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
      position: 'relative'
    }}>
      {/* Header Bar */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.2rem'
      }}>
        <button
          onClick={onExit}
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '14px',
            padding: '0.5rem 0.9rem',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontWeight: 700,
            fontSize: '0.9rem'
          }}
        >
          <ChevronLeft size={20} /> Back
        </button>

        <div style={{ textAlign: 'center' }}>
          <h2 style={{
            margin: 0,
            fontSize: isMobile ? '1.3rem' : '1.8rem',
            fontFamily: '"Baloo 2", cursive',
            color: '#ec4899',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Sparkles size={22} color="#ec4899" />
            Level {level}: {config.title}
          </h2>
          <p style={{ margin: 0, fontSize: '0.82rem', color: '#94a3b8' }}>
            Remaining Blocks: <strong style={{ color: '#38bdf8' }}>{blocks.length}</strong>
          </p>
        </div>

        {/* Moves & Undo controls */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button
            onClick={handleUndo}
            disabled={history.length === 0 || isCompleted}
            title="Undo last move"
            style={{
              background: history.length > 0 ? 'rgba(236,72,153,0.2)' : 'rgba(255,255,255,0.05)',
              border: history.length > 0 ? '1px solid #ec4899' : '1px solid rgba(255,255,255,0.1)',
              borderRadius: '14px',
              padding: '0.5rem 0.8rem',
              color: history.length > 0 ? '#ec4899' : '#64748b',
              cursor: history.length > 0 ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontWeight: 800,
              fontSize: '0.85rem'
            }}
          >
            <Undo2 size={18} /> Undo
          </button>

          <button
            onClick={handleRestart}
            title="Restart Level"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '14px',
              padding: '0.5rem',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      {/* Control Bar: Hint & Moves */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(30, 41, 59, 0.6)',
        padding: '0.6rem 1.2rem',
        borderRadius: '16px',
        marginBottom: '1.5rem',
        border: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
          <span style={{ color: '#94a3b8' }}>Moves:</span>
          <strong style={{ color: movesCount <= config.parMoves ? '#22c55e' : '#f59e0b', fontSize: '1.1rem' }}>
            {movesCount}
          </strong>
          <span style={{ color: '#64748b', fontSize: '0.8rem' }}>(Par: {config.parMoves})</span>
        </div>

        <button
          onClick={() => { setShowHint(!showHint); sounds.playClick(); }}
          style={{
            background: showHint ? '#f59e0b' : 'rgba(245, 158, 11, 0.15)',
            border: '1px solid #f59e0b',
            color: showHint ? '#0f172a' : '#f59e0b',
            borderRadius: '12px',
            padding: '0.35rem 0.8rem',
            fontWeight: 800,
            fontSize: '0.82rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          <Lightbulb size={16} /> {showHint ? 'Hide Hint' : 'Hint'}
        </button>
      </div>

      {/* Hint Message Box */}
      {showHint && (
        <div style={{
          width: '100%',
          background: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid #f59e0b',
          borderRadius: '14px',
          padding: '0.75rem 1rem',
          marginBottom: '1.2rem',
          fontSize: '0.88rem',
          color: '#fbbf24',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          <HelpCircle size={20} style={{ flexShrink: 0 }} />
          <span>{config.hintMsg}</span>
        </div>
      )}

      {/* Main Puzzle Grid Canvas */}
      <div style={{
        position: 'relative',
        width: isMobile ? '320px' : '420px',
        height: isMobile ? '320px' : '420px',
        background: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))',
        borderRadius: '24px',
        border: '2px solid rgba(236, 72, 153, 0.25)',
        padding: '12px',
        boxShadow: 'inset 0 0 30px rgba(0,0,0,0.6)',
        display: 'grid',
        gridTemplateColumns: `repeat(${config.gridSize}, 1fr)`,
        gridTemplateRows: `repeat(${config.gridSize}, 1fr)`,
        gap: '8px',
        overflow: 'hidden'
      }}>
        {/* Render Background Grid Cells */}
        {Array.from({ length: config.gridSize * config.gridSize }).map((_, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '14px',
              border: '1px border-dashed rgba(255, 255, 255, 0.05)'
            }}
          />
        ))}

        {/* Render Blocks */}
        {blocks.map(block => {
          const isShaking = shakingBlockId === block.id;
          const isEscaping = escapingBlockId === block.id;
          const isHinted = hintTargetId === block.id;
          const theme = COLOR_PALETTE[block.color as keyof typeof COLOR_PALETTE] || COLOR_PALETTE.indigo;

          // Calculate CSS position based on grid coordinates
          const cellSizePercent = 100 / config.gridSize;

          let escapeTransform = 'scale(1)';
          if (isEscaping) {
            if (block.dir === 'up') escapeTransform = 'translateY(-400px) scale(0.6)';
            if (block.dir === 'down') escapeTransform = 'translateY(400px) scale(0.6)';
            if (block.dir === 'left') escapeTransform = 'translateX(-400px) scale(0.6)';
            if (block.dir === 'right') escapeTransform = 'translateX(400px) scale(0.6)';
          }

          return (
            <div
              key={block.id}
              onClick={() => handleBlockTap(block)}
              style={{
                position: 'absolute',
                left: `calc(${block.x * cellSizePercent}% + 12px)`,
                top: `calc(${block.y * cellSizePercent}% + 12px)`,
                width: `calc(${cellSizePercent}% - 14px)`,
                height: `calc(${cellSizePercent}% - 14px)`,
                background: theme.bg,
                border: `2px solid ${isHinted ? '#f59e0b' : theme.border}`,
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: isHinted 
                  ? '0 0 20px #f59e0b' 
                  : `0 8px 20px ${theme.shadow}, inset 0 2px 4px rgba(255,255,255,0.3)`,
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease',
                transform: escapeTransform,
                opacity: isEscaping ? 0 : 1,
                zIndex: isEscaping ? 20 : 10,
                animation: isShaking ? 'shake 0.4s ease-in-out' : (isHinted ? 'pulse 1.2s infinite' : 'none')
              }}
            >
              {renderArrowIcon(block.dir, isMobile ? 24 : 32)}
            </div>
          );
        })}
      </div>

      {/* Win Modal Overlay */}
      {isCompleted && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(12px)',
          borderRadius: '28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          zIndex: 50,
          animation: 'fadeIn 0.4s ease-out'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #22c55e, #16a34a)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            boxShadow: '0 0 30px rgba(34,197,94,0.5)'
          }}>
            <Trophy size={42} color="white" />
          </div>

          <h2 style={{
            fontFamily: '"Baloo 2", cursive',
            fontSize: '2.2rem',
            color: 'white',
            margin: '0 0 0.5rem 0'
          }}>
            Puzzle Cleared! 🎉
          </h2>

          <p style={{ color: '#94a3b8', fontSize: '1rem', margin: '0 0 1.5rem 0', textAlign: 'center' }}>
            You solved Level {level} in <strong style={{ color: '#ec4899' }}>{movesCount} moves</strong>!
          </p>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: '1rem 2rem',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '2rem',
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>XP REWARD</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fbbf24' }}>
                +{Math.max(100, 250 - (movesCount - config.parMoves) * 10)} XP
              </div>
            </div>
          </div>

          <button
            onClick={handleClaimVictory}
            style={{
              background: 'linear-gradient(135deg, #ec4899, #d946ef)',
              border: 'none',
              borderRadius: '16px',
              padding: '0.8rem 2.5rem',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 900,
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(236,72,153,0.4)',
              transition: 'transform 0.2s ease'
            }}
          >
            Next Level 🚀
          </button>
        </div>
      )}

      {/* Global CSS animations */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
};

export default ArrowEscapeGame;
