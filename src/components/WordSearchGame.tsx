import React, { useState, useEffect } from 'react';
import { CheckCircle, RefreshCcw, Volume2, Trophy } from 'lucide-react';
import { sounds } from '../utils/sounds';

interface WordSearchGameProps {
  level: number;
  onComplete: (xp: number) => void;
  onExit: () => void;
}

const WordSearchGame: React.FC<WordSearchGameProps> = ({ level, onComplete, onExit }) => {
  const [grid, setGrid] = useState<string[][]>([]);
  const [words, setWords] = useState<{ word: string, found: boolean }[]>([]);
  const [selectedCells, setSelectedCells] = useState<{r: number, c: number}[]>([]);
  const [isWon, setIsWon] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Derived difficulty and size for both logic and UI
  const difficulty = level <= 5 ? 'beginner' : (level <= 12 ? 'intermediate' : 'pro');
  const size = level <= 5 ? 10 : (level <= 12 ? 12 : 14);

  // Advanced themed word pool with longer words for higher levels
  const wordPools = {
    beginner: ['CODE', 'BYTE', 'DATA', 'CHIP', 'LINK', 'KONE', 'VITE', 'REACT'],
    intermediate: ['ALGORITHM', 'VARIABLE', 'FUNCTION', 'ROBOTICS', 'FRONTEND', 'BACKEND'],
    pro: ['ARTIFICIAL', 'INTELLIGENCE', 'BLOCKCHAIN', 'CYBERSECURITY', 'FULLSTACK']
  };

  useEffect(() => {
    initGame();
  }, [level]);

  const initGame = () => {
    // Pick 5-8 random words based on level
    const pool = wordPools[difficulty];
    const levelWords = [...pool]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5 + Math.floor(level / 4))
      .map(w => ({ word: w, found: false }));
    
    setWords(levelWords);
    
    // Initialize empty grid
    const newGrid = Array(size).fill(null).map(() => Array(size).fill(''));

    // Directions: [dr, dc]
    const directions = [
      [0, 1],   // Horizontal
      [1, 0],   // Vertical
      [1, 1],   // Diagonal Down-Right
      [-1, 1],  // Diagonal Up-Right
    ];

    // Add backwards directions for intermediate/pro
    if (difficulty !== 'beginner') {
      directions.push([0, -1], [-1, 0]);
    }

    // Place words
    levelWords.forEach(({ word }) => {
      let placed = false;
      let attempts = 0;
      while (!placed && attempts < 100) {
        const dir = directions[Math.floor(Math.random() * directions.length)];
        const r = Math.floor(Math.random() * size);
        const c = Math.floor(Math.random() * size);
        
        // Check if fits
        if (canPlace(word, r, c, dir, size, newGrid)) {
          for (let i = 0; i < word.length; i++) {
            newGrid[r + i * dir[0]][c + i * dir[1]] = word[i];
          }
          placed = true;
        }
        attempts++;
      }
    });

    // Fill remaining with random letters
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (newGrid[r][c] === '') {
          newGrid[r][c] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
      }
    }

    setGrid(newGrid);
    setSelectedCells([]);
    setIsWon(false);
  };

  const canPlace = (word: string, r: number, c: number, dir: number[], size: number, grid: string[][]) => {
    const endR = r + (word.length - 1) * dir[0];
    const endC = c + (word.length - 1) * dir[1];
    
    if (endR < 0 || endR >= size || endC < 0 || endC >= size) return false;
    
    for (let i = 0; i < word.length; i++) {
      const currR = r + i * dir[0];
      const currC = c + i * dir[1];
      if (grid[currR][currC] !== '' && grid[currR][currC] !== word[i]) return false;
    }
    return true;
  };

  const handleCellClick = (r: number, c: number) => {
    if (isWon) return;
    
    sounds.playClick();
    
    const isSelected = selectedCells.some(cell => cell.r === r && cell.c === c);
    let newSelection = [...selectedCells];
    
    if (isSelected) {
      newSelection = newSelection.filter(cell => !(cell.r === r && cell.c === c));
    } else {
      newSelection.push({r, c});
    }
    
    setSelectedCells(newSelection);

    // Check if new selection matches any word (in any order)
    const selectedText = newSelection.map(cell => grid[cell.r][cell.c]).join('');
    const reversedText = [...selectedText].reverse().join('');
    
    const wordIdx = words.findIndex(w => (w.word === selectedText || w.word === reversedText) && !w.found);
    
    if (wordIdx !== -1) {
      sounds.playSuccess();
      const newWords = [...words];
      newWords[wordIdx].found = true;
      setWords(newWords);
      setSelectedCells([]); // Reset selection after finding word
      
      // Check win condition
      if (newWords.every(w => w.found)) {
        sounds.playWin();
        setIsWon(true);
        setTimeout(() => onComplete(100 + level * 10), 2000);
      }
    }
  };

  const gridSize = grid.length || 10;

  return (
    <div className="game-container" style={{
      background: '#1e293b',
      padding: 'clamp(1rem, 4vw, 2rem)',
      borderRadius: '24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.25rem',
      boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
      maxWidth: '800px',
      width: '100%',
      position: 'relative',
      margin: '0 auto'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <div>
          <h2 style={{ margin: 0, fontFamily: '"Baloo 2", cursive', color: '#f472b6', fontSize: 'clamp(1.2rem, 5vw, 1.8rem)' }}>Level {level}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 800 }}>{difficulty.toUpperCase()}</span>
            <Volume2 size={12} color="#94a3b8" />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {selectedCells.length > 0 && (
            <button 
              onClick={() => setSelectedCells([])}
              style={{ 
                background: 'rgba(239, 68, 68, 0.2)', 
                border: '1px solid #ef4444', 
                color: '#ef4444', 
                padding: isMobile ? '0.35rem 0.6rem' : '0.5rem 1rem',
                borderRadius: '12px',
                fontWeight: 800,
                cursor: 'pointer',
                fontSize: isMobile ? '0.7rem' : '0.85rem'
              }}
            >Clear</button>
          )}
          <button onClick={onExit} style={{ 
            background: 'rgba(255,255,255,0.1)', 
            border: 'none', 
            color: 'white', 
            padding: isMobile ? '0.35rem 0.6rem' : '0.5rem 1rem',
            borderRadius: '12px',
            fontWeight: 800,
            cursor: 'pointer',
            fontSize: isMobile ? '0.7rem' : '0.85rem'
          }}>{isMobile ? 'Exit' : 'Close Game'}</button>
        </div>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        gap: gridSize > 12 ? '2px' : '4px',
        background: '#334155',
        padding: '6px',
        borderRadius: '12px',
        width: '100%',
        maxWidth: 'min(90vw, 450px)',
        margin: '0 auto'
      }}>
        {grid.map((row, r) => row.map((char, c) => {
          const isSelected = selectedCells.some(cell => cell.r === r && cell.c === c);
          return (
            <div 
              key={`${r}-${c}`}
              onClick={() => handleCellClick(r, c)}
              style={{
                aspectRatio: '1/1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isSelected ? '#f472b6' : '#1e293b',
                color: isSelected ? 'white' : '#cbd5e1',
                borderRadius: gridSize > 12 ? '4px' : '6px',
                fontWeight: 900,
                cursor: 'pointer',
                fontSize: gridSize > 12 ? (isMobile ? '0.6rem' : '0.7rem') : 'clamp(0.8rem, 3.5vw, 1.1rem)',
                userSelect: 'none',
                transition: 'all 0.1s',
                boxShadow: isSelected ? `0 0 10px #f472b688` : 'none',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              {char}
            </div>
          );
        }))}
      </div>

      {/* Word List */}
      <div style={{ 
        display: 'flex', 
        gap: '0.5rem', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.2)',
        padding: '1rem',
        borderRadius: '16px',
        width: '100%'
      }}>
        {words.map((w, i) => (
          <div key={i} style={{
            padding: '0.35rem 0.75rem',
            background: w.found ? '#22c55e22' : 'rgba(255,255,255,0.05)',
            borderRadius: '10px',
            color: w.found ? '#22c55e' : '#cbd5e1',
            border: `1px solid ${w.found ? '#22c55e44' : 'transparent'}`,
            fontWeight: 800,
            fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            textDecoration: w.found ? 'line-through' : 'none',
            opacity: w.found ? 0.6 : 1
          }}>
            {w.found && <CheckCircle size={12} />}
            {w.word}
          </div>
        ))}
      </div>

      {isWon && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(30, 41, 59, 0.95)',
          padding: '2rem',
          borderRadius: '24px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          zIndex: 10,
          animation: 'popUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
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
            fontSize: '1.5rem',
          }}>
            AWESOME!<br/>Level Complete! 🚀
          </div>
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
