import React, { useState, useEffect } from 'react';
import { CheckCircle, RefreshCcw, Volume2, Trophy, Lightbulb, Compass, Grid } from 'lucide-react';
import { sounds } from '../utils/sounds';

interface WordSearchGameProps {
  level: number;
  onComplete: (xp: number) => void;
  onExit: () => void;
}

// Word pools categorized by complexity level
const WORD_POOLS = {
  novice: [
    'CODE', 'BYTE', 'DATA', 'CHIP', 'LINK', 'KONE', 'VITE', 'NODE', 'LOOP', 'MATH', 
    'BITS', 'FLAG', 'PIXEL', 'BOT', 'STEM', 'APP', 'TAG', 'GRID', 'BUG', 'WEB'
  ],
  builder: [
    'PYTHON', 'BLOCKS', 'ROBOT', 'SENSOR', 'SPRITE', 'CANVAS', 'SCRIPT', 'ACTION', 
    'VECTOR', 'ENGINE', 'INPUT', 'OUTPUT', 'BOOLEAN', 'DESIGN', 'CYBER', 'PIPELINE',
    'MEMORY', 'ARRAY', 'REACT', 'WIDGET'
  ],
  architect: [
    'ALGORITHM', 'VARIABLE', 'FUNCTION', 'ROBOTICS', 'FRONTEND', 'BACKEND', 'DATABASE', 
    'HARDWARE', 'COMPILER', 'TELEMETRY', 'SEQUENCE', 'STRUCTURE', 'ASYNCHRONOUS',
    'ITERATOR', 'ENCRYPTION', 'PROTOCOL'
  ],
  master: [
    'ARTIFICIAL', 'INTELLIGENCE', 'CYBERSECURITY', 'FULLSTACK', 'MICROCONTROLLER', 
    'NEURALNETWORK', 'TRANSFORMER', 'CRYPTOGRAPHY', 'SUPERVISED', 'AUTONOMOUS',
    'EXPRESSION', 'POLYMORPHISM', 'ARCHITECTURE'
  ]
};

// Calculate grid size based on level
const getGridSize = (lvl: number): number => {
  if (lvl <= 2) return 8;
  if (lvl <= 4) return 9;
  if (lvl <= 6) return 10;
  if (lvl <= 9) return 11;
  if (lvl <= 12) return 12;
  if (lvl <= 15) return 13;
  if (lvl <= 19) return 14;
  return 15;
};

// Calculate allowed search directions based on level
const getDirectionsForLevel = (lvl: number): number[][] => {
  const dirs = [
    [0, 1],   // Horizontal Right ➡️
    [1, 0],   // Vertical Down ⬇️
  ];
  if (lvl >= 3) {
    dirs.push([1, 1]); // Diagonal Down-Right ↘️
  }
  if (lvl >= 6) {
    dirs.push([-1, 1]); // Diagonal Up-Right ↗️
  }
  if (lvl >= 9) {
    dirs.push([0, -1], [-1, 0]); // Backwards Horizontal ⬅️ & Vertical ⬆️
  }
  if (lvl >= 13) {
    dirs.push([-1, -1], [1, -1]); // Reverse Diagonals ↖️ ↙️
  }
  return dirs;
};

// Difficulty meta info
const getDifficultyInfo = (lvl: number) => {
  if (lvl <= 3) return { title: 'Novice Coder', badge: '🟢 Easy', color: '#22c55e', dirsText: '2 Directions (➡️ ⬇️)' };
  if (lvl <= 7) return { title: 'App Builder', badge: '🔵 Medium', color: '#0ea5e9', dirsText: '4 Directions (➡️ ⬇️ ↘️ ↗️)' };
  if (lvl <= 12) return { title: 'Tech Architect', badge: '🟣 Hard', color: '#a855f7', dirsText: '6 Directions (+ Backwards ⬅️ ⬆️)' };
  if (lvl <= 16) return { title: 'Cyber Master', badge: '🔴 Expert', color: '#ef4444', dirsText: '8 Directions (360° All Directions)' };
  return { title: 'AI Supermind', badge: '👑 Master', color: '#f59e0b', dirsText: '8 Directions • Large Grid' };
};

const WordSearchGame: React.FC<WordSearchGameProps> = ({ level, onComplete, onExit }) => {
  const [grid, setGrid] = useState<string[][]>([]);
  const [words, setWords] = useState<{ word: string; found: boolean; startR?: number; startC?: number }[]>([]);
  const [selectedCells, setSelectedCells] = useState<{ r: number; c: number }[]>([]);
  const [isWon, setIsWon] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Hint & Timer States
  const [hintCell, setHintCell] = useState<{ r: number; c: number } | null>(null);
  const [hintsRemaining, setHintsRemaining] = useState(2);

  // Co-op Multiplayer States
  const [isCoop, setIsCoop] = useState(false);
  const [activePlayer, setActivePlayer] = useState<1 | 2>(1);
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [p1Selected, setP1Selected] = useState<{ r: number; c: number }[]>([]);
  const [p2Selected, setP2Selected] = useState<{ r: number; c: number }[]>([]);
  const [wordFoundBy, setWordFoundBy] = useState<Record<string, 'P1' | 'P2'>>({});

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const size = getGridSize(level);
  const diffInfo = getDifficultyInfo(level);
  const allowedDirs = getDirectionsForLevel(level);

  useEffect(() => {
    initGame();
  }, [level]);

  const initGame = () => {
    // Determine word pool by level
    let pool: string[];
    if (level <= 3) pool = WORD_POOLS.novice;
    else if (level <= 7) pool = WORD_POOLS.builder;
    else if (level <= 12) pool = [...WORD_POOLS.builder, ...WORD_POOLS.architect];
    else pool = [...WORD_POOLS.architect, ...WORD_POOLS.master];

    const targetWordCount = Math.min(12, 4 + Math.floor((level - 1) / 2));
    
    // Pick random unique words
    const levelWords = [...pool]
      .sort(() => 0.5 - Math.random())
      .slice(0, targetWordCount)
      .map(w => ({ word: w, found: false, startR: 0, startC: 0 }));

    const newGrid = Array(size).fill(null).map(() => Array(size).fill(''));

    // Place words in grid
    levelWords.forEach(wObj => {
      let placed = false;
      let attempts = 0;
      while (!placed && attempts < 150) {
        const dir = allowedDirs[Math.floor(Math.random() * allowedDirs.length)];
        const r = Math.floor(Math.random() * size);
        const c = Math.floor(Math.random() * size);
        
        if (canPlace(wObj.word, r, c, dir, size, newGrid)) {
          wObj.startR = r;
          wObj.startC = c;
          for (let i = 0; i < wObj.word.length; i++) {
            newGrid[r + i * dir[0]][c + i * dir[1]] = wObj.word[i];
          }
          placed = true;
        }
        attempts++;
      }
    });

    // Fill remaining cells with weighted letters for higher levels
    const commonDistractors = 'ETAOINSHRDLCUMWFGYPBVKJXQZ';
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (newGrid[r][c] === '') {
          if (level >= 8) {
            // Weighted random letter from common STEM distractors
            const randIdx = Math.floor(Math.pow(Math.random(), 1.5) * commonDistractors.length);
            newGrid[r][c] = commonDistractors[Math.min(randIdx, commonDistractors.length - 1)];
          } else {
            newGrid[r][c] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
          }
        }
      }
    }

    setGrid(newGrid);
    setWords(levelWords);
    setSelectedCells([]);
    setP1Selected([]);
    setP2Selected([]);
    setP1Score(0);
    setP2Score(0);
    setWordFoundBy({});
    setIsWon(false);
    setHintCell(null);
    setHintsRemaining(2);
  };

  const canPlace = (word: string, r: number, c: number, dir: number[], gridSize: number, gridState: string[][]) => {
    const endR = r + (word.length - 1) * dir[0];
    const endC = c + (word.length - 1) * dir[1];
    
    if (endR < 0 || endR >= gridSize || endC < 0 || endC >= gridSize) return false;
    
    for (let i = 0; i < word.length; i++) {
      const currR = r + i * dir[0];
      const currC = c + i * dir[1];
      if (gridState[currR][currC] !== '' && gridState[currR][currC] !== word[i]) return false;
    }
    return true;
  };

  const handleUseHint = () => {
    if (hintsRemaining <= 0 || isWon) return;
    const unfound = words.find(w => !w.found);
    if (unfound && unfound.startR !== undefined && unfound.startC !== undefined) {
      sounds.playClick();
      setHintCell({ r: unfound.startR, c: unfound.startC });
      setHintsRemaining(prev => prev - 1);
      setTimeout(() => setHintCell(null), 3000);
    }
  };

  const handleCellClick = (r: number, c: number) => {
    if (isWon) return;
    sounds.playClick();
    
    if (!isCoop) {
      const isSelected = selectedCells.some(cell => cell.r === r && cell.c === c);
      let newSelection = [...selectedCells];
      
      if (isSelected) {
        newSelection = newSelection.filter(cell => !(cell.r === r && cell.c === c));
      } else {
        newSelection.push({ r, c });
      }
      
      setSelectedCells(newSelection);

      const selectedText = newSelection.map(cell => grid[cell.r][cell.c]).join('');
      const reversedText = [...selectedText].reverse().join('');
      
      const wordIdx = words.findIndex(w => (w.word === selectedText || w.word === reversedText) && !w.found);
      
      if (wordIdx !== -1) {
        sounds.playSuccess();
        const newWords = [...words];
        newWords[wordIdx].found = true;
        setWords(newWords);
        setSelectedCells([]);
        setHintCell(null);
        
        if (newWords.every(w => w.found)) {
          sounds.playWin();
          setIsWon(true);
          setTimeout(() => onComplete(100 + level * 15), 2000);
        }
      }
    } else {
      const activeSelection = activePlayer === 1 ? p1Selected : p2Selected;
      const setSelection = activePlayer === 1 ? setP1Selected : setP2Selected;

      const isSelected = activeSelection.some(cell => cell.r === r && cell.c === c);
      let newSelection = [...activeSelection];
      
      if (isSelected) {
        newSelection = newSelection.filter(cell => !(cell.r === r && cell.c === c));
      } else {
        newSelection.push({ r, c });
      }
      
      setSelection(newSelection);

      const selectedText = newSelection.map(cell => grid[cell.r][cell.c]).join('');
      const reversedText = [...selectedText].reverse().join('');
      
      const wordIdx = words.findIndex(w => (w.word === selectedText || w.word === reversedText) && !w.found);
      
      if (wordIdx !== -1) {
        sounds.playSuccess();
        const foundWordName = words[wordIdx].word;
        const newWords = [...words];
        newWords[wordIdx].found = true;
        setWords(newWords);
        setSelection([]);
        setHintCell(null);

        if (activePlayer === 1) {
          setP1Score(prev => prev + 1);
          setWordFoundBy(prev => ({ ...prev, [foundWordName]: 'P1' }));
        } else {
          setP2Score(prev => prev + 1);
          setWordFoundBy(prev => ({ ...prev, [foundWordName]: 'P2' }));
        }
        
        if (newWords.every(w => w.found)) {
          sounds.playWin();
          setIsWon(true);
          setTimeout(() => onComplete(Math.round((100 + level * 15) * 1.25)), 2000);
        }
      }
    }
  };

  const gridSize = grid.length || 10;
  const foundCount = words.filter(w => w.found).length;

  return (
    <div className="game-container" style={{
      background: '#0f172a',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: 'clamp(1rem, 3.5vw, 1.8rem)',
      borderRadius: '24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.2rem',
      boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
      maxWidth: '850px',
      width: '100%',
      position: 'relative',
      margin: '0 auto'
    }}>
      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <h2 style={{ margin: 0, fontFamily: '"Baloo 2", cursive', color: '#f472b6', fontSize: 'clamp(1.3rem, 5vw, 1.9rem)' }}>
              Level {level}: {diffInfo.title}
            </h2>
            <span style={{
              background: `${diffInfo.color}25`,
              color: diffInfo.color,
              border: `1px solid ${diffInfo.color}44`,
              borderRadius: '8px',
              padding: '2px 8px',
              fontSize: '0.75rem',
              fontWeight: 800
            }}>
              {diffInfo.badge}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.2rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Grid size={13} color="#94a3b8" /> {size}x{size} Grid
            </span>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Compass size={13} color="#94a3b8" /> {allowedDirs.length} Directions
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {/* Hint Button */}
          <button
            onClick={handleUseHint}
            disabled={hintsRemaining <= 0 || isWon}
            title={hintsRemaining > 0 ? "Reveal starting letter of 1 hidden word" : "No hints left"}
            style={{
              background: hintsRemaining > 0 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255,255,255,0.05)',
              border: `1px solid ${hintsRemaining > 0 ? '#f59e0b' : 'rgba(255,255,255,0.1)'}`,
              color: hintsRemaining > 0 ? '#fbbf24' : '#64748b',
              padding: isMobile ? '0.35rem 0.6rem' : '0.45rem 0.85rem',
              borderRadius: '12px',
              fontWeight: 800,
              cursor: hintsRemaining > 0 ? 'pointer' : 'not-allowed',
              fontSize: isMobile ? '0.72rem' : '0.82rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.2s ease'
            }}
          >
            <Lightbulb size={14} />
            <span>Hint ({hintsRemaining})</span>
          </button>

          {((!isCoop && selectedCells.length > 0) || (isCoop && (p1Selected.length > 0 || p2Selected.length > 0))) && (
            <button 
              onClick={() => {
                if (!isCoop) setSelectedCells([]);
                else {
                  setP1Selected([]);
                  setP2Selected([]);
                }
              }}
              style={{ 
                background: 'rgba(239, 68, 68, 0.2)', 
                border: '1px solid #ef4444', 
                color: '#ef4444', 
                padding: isMobile ? '0.35rem 0.6rem' : '0.45rem 0.85rem',
                borderRadius: '12px',
                fontWeight: 800,
                cursor: 'pointer',
                fontSize: isMobile ? '0.72rem' : '0.82rem'
              }}
            >Clear</button>
          )}

          <button onClick={onExit} style={{ 
            background: 'rgba(255,255,255,0.08)', 
            border: '1px solid rgba(255,255,255,0.15)', 
            color: 'white', 
            padding: isMobile ? '0.35rem 0.6rem' : '0.45rem 0.85rem',
            borderRadius: '12px',
            fontWeight: 800,
            cursor: 'pointer',
            fontSize: isMobile ? '0.72rem' : '0.82rem'
          }}>{isMobile ? 'Exit' : 'Close Game'}</button>
        </div>
      </div>

      {/* Co-op Scoreboard Panel */}
      {isCoop && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          background: 'rgba(0,0,0,0.25)',
          padding: '0.6rem 1rem',
          borderRadius: '16px',
          gap: '1rem',
          flexWrap: 'wrap',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          {/* Player 1 Card */}
          <div 
            onClick={() => setActivePlayer(1)}
            style={{
              flex: 1,
              padding: '0.45rem 0.85rem',
              borderRadius: '12px',
              border: `2px solid ${activePlayer === 1 ? '#f472b6' : 'transparent'}`,
              background: activePlayer === 1 ? 'rgba(244, 114, 182, 0.15)' : 'rgba(255,255,255,0.02)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.2s'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.2rem' }}>🐰</span>
              <span style={{ fontWeight: 800, color: '#f472b6', fontSize: '0.85rem' }}>Player 1</span>
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 900, color: '#f472b6' }}>{p1Score} found</div>
          </div>

          {/* Player 2 Card */}
          <div 
            onClick={() => setActivePlayer(2)}
            style={{
              flex: 1,
              padding: '0.45rem 0.85rem',
              borderRadius: '12px',
              border: `2px solid ${activePlayer === 2 ? '#22d3ee' : 'transparent'}`,
              background: activePlayer === 2 ? 'rgba(34, 211, 238, 0.15)' : 'rgba(255,255,255,0.02)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.2s'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.2rem' }}>🐱</span>
              <span style={{ fontWeight: 800, color: '#22d3ee', fontSize: '0.85rem' }}>Player 2</span>
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 900, color: '#22d3ee' }}>{p2Score} found</div>
          </div>
        </div>
      )}

      {/* Main Responsive Grid Canvas */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gap: gridSize > 12 ? '3px' : (gridSize > 10 ? '4px' : '6px'),
          width: '100%',
          maxWidth: '560px',
          aspectRatio: '1/1',
          background: 'rgba(15, 23, 42, 0.8)',
          padding: '10px',
          borderRadius: '20px',
          border: '1.5px solid rgba(255,255,255,0.1)',
          boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.5)',
          touchAction: 'none'
        }}
      >
        {grid.map((row, r) => row.map((char, c) => {
          const isSelected = !isCoop
            ? selectedCells.some(cell => cell.r === r && cell.c === c)
            : (activePlayer === 1 ? p1Selected : p2Selected).some(cell => cell.r === r && cell.c === c);

          const isHint = hintCell?.r === r && hintCell?.c === c;

          const p1Sel = isCoop && p1Selected.some(cell => cell.r === r && cell.c === c);
          const p2Sel = isCoop && p2Selected.some(cell => cell.r === r && cell.c === c);

          let cellColor = 'rgba(30, 41, 59, 0.7)';
          let textColor = '#e2e8f0';
          let shadow = 'none';
          let border = '1px solid rgba(255,255,255,0.05)';

          if (isHint) {
            cellColor = '#f59e0b';
            textColor = '#ffffff';
            shadow = '0 0 16px #f59e0b';
            border = '2px solid #fbbf24';
          } else if (!isCoop && isSelected) {
            cellColor = '#f472b6';
            textColor = 'white';
            shadow = '0 0 10px #f472b688';
          } else if (isCoop) {
            if (p1Sel && p2Sel) {
              cellColor = 'linear-gradient(135deg, #f472b6 0%, #22d3ee 100%)';
              textColor = 'white';
              shadow = '0 0 12px #c084fc88';
            } else if (p1Sel) {
              cellColor = '#f472b6';
              textColor = 'white';
              shadow = '0 0 10px #f472b688';
            } else if (p2Sel) {
              cellColor = '#22d3ee';
              textColor = '#0f172a';
              shadow = '0 0 10px #22d3ee88';
            }
          }

          return (
            <div 
              key={`${r}-${c}`}
              onClick={() => handleCellClick(r, c)}
              style={{
                aspectRatio: '1/1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: cellColor,
                color: textColor,
                borderRadius: gridSize > 12 ? '4px' : '6px',
                border: border,
                fontWeight: 900,
                cursor: 'pointer',
                fontSize: gridSize > 13 ? (isMobile ? '0.55rem' : '0.65rem') : (gridSize > 10 ? (isMobile ? '0.65rem' : '0.78rem') : 'clamp(0.85rem, 3.5vw, 1.15rem)'),
                userSelect: 'none',
                transition: 'all 0.15s ease',
                boxShadow: shadow,
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              {char}
            </div>
          );
        }))}
      </div>

      {/* Target Word List HUD */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '0.6rem',
        width: '100%',
        background: 'rgba(0,0,0,0.25)',
        padding: '1rem',
        borderRadius: '18px',
        border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 800 }}>
            TARGET WORDS ({foundCount}/{words.length})
          </span>
          <span style={{ fontSize: '0.75rem', color: diffInfo.color, fontWeight: 800 }}>
            {diffInfo.dirsText}
          </span>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          flexWrap: 'wrap', 
          justifyContent: 'center'
        }}>
          {words.map((w, i) => {
            const finder = wordFoundBy[w.word];
            return (
              <div key={i} style={{
                padding: '0.35rem 0.75rem',
                background: w.found ? '#22c55e22' : 'rgba(255,255,255,0.05)',
                borderRadius: '10px',
                color: w.found ? '#22c55e' : '#cbd5e1',
                border: `1px solid ${w.found ? '#22c55e44' : 'rgba(255,255,255,0.08)'}`,
                fontWeight: 800,
                fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                textDecoration: w.found ? 'line-through' : 'none',
                opacity: w.found ? 0.6 : 1,
                transition: 'all 0.2s ease'
              }}>
                {w.found && <CheckCircle size={12} />}
                {w.word}
                {isCoop && w.found && finder && (
                  <span style={{ fontSize: '0.7rem', opacity: 0.85, fontStyle: 'italic', marginLeft: '0.2rem' }}>
                    ({finder === 'P1' ? '🐰 P1' : '🐱 P2'})
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Game Mode Selector Toolbar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'rgba(0,0,0,0.2)',
        padding: '6px 12px',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 800 }}>GAME MODE:</span>
        <button
          onClick={() => {
            setIsCoop(false);
            initGame();
          }}
          style={{
            background: !isCoop ? '#f472b6' : 'transparent',
            border: 'none',
            color: 'white',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: 800,
            cursor: 'pointer'
          }}
        >
          Single Player
        </button>
        <button
          onClick={() => {
            setIsCoop(true);
            initGame();
          }}
          style={{
            background: isCoop ? '#0ea5e9' : 'transparent',
            border: 'none',
            color: 'white',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}
        >
          2-Player Co-op
        </button>
      </div>

      {/* Win Banner */}
      {isWon && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#0f172a',
          padding: '2rem',
          borderRadius: '24px',
          boxShadow: '0 0 50px rgba(34, 197, 94, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          zIndex: 10,
          animation: 'popUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          width: 'min(90vw, 360px)',
          border: '3px solid #22c55e'
        }}>
          <div style={{
            background: 'rgba(34, 197, 94, 0.2)',
            padding: '1rem',
            borderRadius: '50%',
            color: '#22c55e',
            animation: 'bounce 0.5s infinite alternate'
          }}>
            <Trophy size={48} />
          </div>
          <div style={{
            textAlign: 'center',
            color: '#22c55e',
            fontWeight: 900,
            fontSize: '1.6rem',
          }}>
            AWESOME!<br/>Level {level} Complete! 🚀
          </div>
          {isCoop && (
            <div style={{ color: '#cbd5e1', fontSize: '0.95rem', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1rem', borderRadius: '12px', width: '100%', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div style={{ fontWeight: 800, color: '#f472b6' }}>🐰 Player 1 found: {p1Score} words</div>
              <div style={{ fontWeight: 800, color: '#22d3ee' }}>🐱 Player 2 found: {p2Score} words</div>
              <div style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 800, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                🤝 Teamwork Bonus: +25% XP!
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-10px); }
        }
        @keyframes popUp {
          from { opacity: 0; transform: translate(-50%, -40%) scale(0.8); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default WordSearchGame;
