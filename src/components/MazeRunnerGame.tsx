import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Play, RotateCcw, Trash2, ArrowUp, CornerUpLeft, CornerUpRight, HelpCircle, Star, Repeat, Plus, Trash, ArrowDown, ArrowUpIcon } from 'lucide-react';
import { sounds } from '../utils/sounds';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';

interface MazeRunnerGameProps {
  level: number;
  onComplete: (xp: number) => void;
  onExit: () => void;
}

type Direction = 'up' | 'right' | 'down' | 'left';

interface Position {
  x: number;
  y: number;
  dir: Direction;
}

type CommandType = 'forward' | 'left' | 'right' | 'repeat';

interface Command {
  id: string;
  type: CommandType;
  repeatCount?: number;
  subCommands?: Command[];
}

interface LevelData {
  gridSize: number;
  start: Position;
  target: { x: number; y: number };
  walls: { x: number; y: number }[];
  stars: { x: number; y: number }[];
  maxBlocks: number;
  instructions: string;
}

const LEVELS: Record<number, LevelData> = {
  1: {
    gridSize: 5,
    start: { x: 0, y: 4, dir: 'right' },
    target: { x: 3, y: 4 },
    walls: [],
    stars: [{ x: 2, y: 4 }],
    maxBlocks: 5,
    instructions: "Move straight ahead! Add 3 'Move Forward' blocks to reach the portal."
  },
  2: {
    gridSize: 5,
    start: { x: 0, y: 4, dir: 'right' },
    target: { x: 2, y: 2 },
    walls: [
      { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }
    ],
    stars: [{ x: 2, y: 4 }],
    maxBlocks: 6,
    instructions: "Avoid the wall! Move forward, turn left, then move forward to reach the portal."
  },
  3: {
    gridSize: 5,
    start: { x: 0, y: 4, dir: 'up' },
    target: { x: 4, y: 0 },
    walls: [
      { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 },
      { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 3, y: 0 }
    ],
    stars: [{ x: 0, y: 1 }, { x: 4, y: 3 }],
    maxBlocks: 10,
    instructions: "Navigate through the obstacles and grab the stars!"
  },
  4: {
    gridSize: 6,
    start: { x: 0, y: 5, dir: 'right' },
    target: { x: 5, y: 5 },
    walls: [],
    stars: [{ x: 2, y: 5 }, { x: 4, y: 5 }],
    maxBlocks: 3,
    instructions: "Use a Repeat Loop! Move forward 5 times to reach the end using a loop."
  },
  5: {
    gridSize: 5,
    start: { x: 0, y: 4, dir: 'up' },
    target: { x: 2, y: 2 },
    walls: [
      { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 },
      { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }
    ],
    stars: [{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: 4, y: 4 }],
    maxBlocks: 12,
    instructions: "A spiral labyrinth! Guide your robot safely into the center portal."
  },
  6: {
    gridSize: 6,
    start: { x: 0, y: 5, dir: 'right' },
    target: { x: 5, y: 0 },
    walls: [
      { x: 1, y: 5 }, { x: 1, y: 4 },
      { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 3, y: 0 }
    ],
    stars: [{ x: 0, y: 3 }, { x: 2, y: 4 }, { x: 5, y: 3 }],
    maxBlocks: 15,
    instructions: "Loops and turns! Write a smart algorithm to collect all stars and escape."
  },
  7: {
    gridSize: 6,
    start: { x: 0, y: 5, dir: 'right' },
    target: { x: 4, y: 1 },
    walls: [
      { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 },
      { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }
    ],
    stars: [{ x: 4, y: 5 }, { x: 4, y: 3 }],
    maxBlocks: 14,
    instructions: "S-curve challenge. Use loops to optimize your navigation."
  },
  8: {
    gridSize: 5,
    start: { x: 0, y: 4, dir: 'right' },
    target: { x: 4, y: 0 },
    walls: [
      { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }
    ],
    stars: [{ x: 2, y: 2 }],
    maxBlocks: 9,
    instructions: "Find the single bridge path in the center to cross over the wall."
  },
  9: {
    gridSize: 6,
    start: { x: 0, y: 5, dir: 'up' },
    target: { x: 5, y: 0 },
    walls: [
      { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }
    ],
    stars: [{ x: 0, y: 0 }, { x: 5, y: 5 }],
    maxBlocks: 16,
    instructions: "Diagonal barricades! Plan your path around the diagonal obstacles."
  },
  10: {
    gridSize: 6,
    start: { x: 0, y: 5, dir: 'right' },
    target: { x: 5, y: 5 },
    walls: [
      { x: 1, y: 5 }, { x: 2, y: 4 }, { x: 3, y: 3 }, { x: 4, y: 2 }
    ],
    stars: [{ x: 0, y: 0 }, { x: 5, y: 0 }],
    maxBlocks: 15,
    instructions: "The ultimate maze! Guide the robot to collect both corner stars and escape."
  }
};

const MazeRunnerGame: React.FC<MazeRunnerGameProps> = ({ level, onComplete, onExit }) => {
  const currentLevelData = LEVELS[level] || LEVELS[1];
  
  // Game state
  const [robotPos, setRobotPos] = useState<Position>({ ...currentLevelData.start });
  const [stars, setStars] = useState<{ x: number; y: number }[]>([]);
  const [collectedStarsCount, setCollectedStarsCount] = useState(0);
  const [workspace, setWorkspace] = useState<Command[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeCommandId, setActiveCommandId] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [messageType, setMessageType] = useState<'info' | 'success' | 'error'>('info');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [lives, setLives] = useState(3);
  
  // Active selected loop for adding sub-commands
  const [selectedLoopId, setSelectedLoopId] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize level
  useEffect(() => {
    resetGame();
  }, [level]);

  const resetGame = () => {
    setRobotPos({ ...currentLevelData.start });
    setStars([...currentLevelData.stars]);
    setCollectedStarsCount(0);
    setIsRunning(false);
    setActiveCommandId(null);
    setMessage(currentLevelData.instructions);
    setMessageType('info');
  };

  const clearWorkspace = () => {
    sounds.playClick();
    setWorkspace([]);
    setSelectedLoopId(null);
  };

  // Add block to workspace (either top-level or inside a loop)
  const addBlock = (type: CommandType) => {
    sounds.playClick();
    const newCommand: Command = {
      id: Math.random().toString(36).substring(2, 9),
      type,
      ...(type === 'repeat' ? { repeatCount: 2, subCommands: [] } : {})
    };

    if (selectedLoopId && type !== 'repeat') {
      // Add inside loop
      setWorkspace(prev => prev.map(cmd => {
        if (cmd.id === selectedLoopId) {
          return {
            ...cmd,
            subCommands: [...(cmd.subCommands || []), newCommand]
          };
        }
        return cmd;
      }));
    } else {
      // Add at root level
      setWorkspace(prev => [...prev, newCommand]);
      if (type === 'repeat') {
        setSelectedLoopId(newCommand.id);
      }
    }
  };

  // Update repeat loop iteration count
  const updateRepeatCount = (id: string, count: number) => {
    setWorkspace(prev => prev.map(cmd => {
      if (cmd.id === id) {
        return { ...cmd, repeatCount: count };
      }
      return cmd;
    }));
  };

  // Remove block
  const removeBlock = (id: string, parentId?: string) => {
    sounds.playClick();
    if (parentId) {
      setWorkspace(prev => prev.map(cmd => {
        if (cmd.id === parentId) {
          return {
            ...cmd,
            subCommands: (cmd.subCommands || []).filter(sub => sub.id !== id)
          };
        }
        return cmd;
      }));
    } else {
      setWorkspace(prev => prev.filter(cmd => cmd.id !== id));
      if (selectedLoopId === id) {
        setSelectedLoopId(null);
      }
    }
  };

  // Move block up or down
  const moveBlock = (index: number, direction: 'up' | 'down') => {
    sounds.playClick();
    const newIdx = direction === 'up' ? index - 1 : index + 1;
    if (newIdx < 0 || newIdx >= workspace.length) return;

    setWorkspace(prev => {
      const copy = [...prev];
      const temp = copy[index];
      copy[index] = copy[newIdx];
      copy[newIdx] = temp;
      return copy;
    });
  };

  // Count total blocks used (including sub-commands and loops)
  const getBlockCount = (): number => {
    let count = 0;
    workspace.forEach(cmd => {
      count++; // the command itself
      if (cmd.type === 'repeat' && cmd.subCommands) {
        count += cmd.subCommands.length;
      }
    });
    return count;
  };

  // Flatten the workspace into a series of simple execution steps
  const compileProgram = (): { type: 'forward' | 'left' | 'right'; id: string }[] => {
    const steps: { type: 'forward' | 'left' | 'right'; id: string }[] = [];
    
    workspace.forEach(cmd => {
      if (cmd.type === 'repeat') {
        const count = cmd.repeatCount || 2;
        const sub = cmd.subCommands || [];
        for (let i = 0; i < count; i++) {
          sub.forEach(subCmd => {
            if (subCmd.type !== 'repeat') {
              steps.push({ type: subCmd.type as 'forward' | 'left' | 'right', id: subCmd.id });
            }
          });
        }
      } else {
        steps.push({ type: cmd.type as 'forward' | 'left' | 'right', id: cmd.id });
      }
    });

    return steps;
  };

  // Run the code program
  const runProgram = async () => {
    if (workspace.length === 0) {
      setMessage('Your workspace is empty! Add some blocks first.');
      setMessageType('error');
      return;
    }

    sounds.playClick();
    setIsRunning(true);
    setMessage('Robot executing program...');
    setMessageType('info');

    const steps = compileProgram();
    let currentPos = { ...currentLevelData.start };
    let starsRemaining = [...stars];
    let collectedCount = 0;

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      setActiveCommandId(step.id);

      // Perform turn or movement
      if (step.type === 'left') {
        currentPos.dir = turn(currentPos.dir, 'left');
      } else if (step.type === 'right') {
        currentPos.dir = turn(currentPos.dir, 'right');
      } else if (step.type === 'forward') {
        currentPos = moveForward(currentPos);
      }

      // Update robot position visual
      setRobotPos({ ...currentPos });
      await delay(500);

      // 1. Check out of bounds
      if (
        currentPos.x < 0 ||
        currentPos.x >= currentLevelData.gridSize ||
        currentPos.y < 0 ||
        currentPos.y >= currentLevelData.gridSize
      ) {
        sounds.playExplosion();
        try { Haptics.notification({ type: NotificationType.Error }).catch(() => {}); } catch (e) {}
        setMessage('Oops! The robot walked off the grid.');
        setMessageType('error');
        setIsRunning(false);
        setActiveCommandId(null);
        setLives(l => Math.max(0, l - 1));
        return;
      }

      // 2. Check collision with walls
      const hitWall = currentLevelData.walls.some(w => w.x === currentPos.x && w.y === currentPos.y);
      if (hitWall) {
        sounds.playExplosion();
        try { Haptics.notification({ type: NotificationType.Error }).catch(() => {}); } catch (e) {}
        setMessage('Crash! The robot hit an obstacle wall.');
        setMessageType('error');
        setIsRunning(false);
        setActiveCommandId(null);
        setLives(l => Math.max(0, l - 1));
        return;
      }

      // 3. Check star collection
      const starIdx = starsRemaining.findIndex(s => s.x === currentPos.x && s.y === currentPos.y);
      if (starIdx !== -1) {
        sounds.playSuccess();
        try { Haptics.impact({ style: ImpactStyle.Light }).catch(() => {}); } catch (e) {}
        starsRemaining.splice(starIdx, 1);
        setStars([...starsRemaining]);
        collectedCount += 10;
        setCollectedStarsCount(c => c + 1);
      }

      // 4. Check target reached
      if (currentPos.x === currentLevelData.target.x && currentPos.y === currentLevelData.target.y) {
        sounds.playWin();
        try { Haptics.notification({ type: NotificationType.Success }).catch(() => {}); } catch (e) {}
        const baseXP = 50 + (level * 10);
        const starBonus = collectedCount;
        const totalXP = baseXP + starBonus;
        
        setMessage(`Success! Portal reached! Won +${totalXP} XP!`);
        setMessageType('success');
        setIsRunning(false);
        setActiveCommandId(null);
        
        setTimeout(() => {
          onComplete(totalXP);
        }, 1500);
        return;
      }
    }

    // Finished steps but not reached portal
    sounds.playExplosion();
    try { Haptics.impact({ style: ImpactStyle.Medium }).catch(() => {}); } catch (e) {}
    setMessage("Program finished, but the robot didn't reach the portal target.");
    setMessageType('error');
    setIsRunning(false);
    setActiveCommandId(null);
  };

  const turn = (dir: Direction, turnDir: 'left' | 'right'): Direction => {
    const dirs: Direction[] = ['up', 'right', 'down', 'left'];
    const idx = dirs.indexOf(dir);
    if (turnDir === 'left') {
      return dirs[(idx + 3) % 4];
    } else {
      return dirs[(idx + 1) % 4];
    }
  };

  const moveForward = (pos: Position): Position => {
    const next = { ...pos };
    if (pos.dir === 'up') next.y -= 1;
    else if (pos.dir === 'down') next.y += 1;
    else if (pos.dir === 'left') next.x -= 1;
    else if (pos.dir === 'right') next.x += 1;
    return next;
  };

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  return (
    <div style={{
      width: '100%',
      maxWidth: '1200px',
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(16px)',
      border: '2px solid #8b5cf6',
      borderRadius: '24px',
      padding: isMobile ? '12px' : '24px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(139, 92, 246, 0.2)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      {/* Game Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingBottom: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            onClick={onExit}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              padding: '8px',
              borderRadius: '50%',
              cursor: 'pointer',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <div>
            <h2 style={{ margin: 0, fontSize: isMobile ? '18px' : '22px', fontWeight: 800, color: '#8b5cf6' }}>
              Level {level}: Code Maze Runner
            </h2>
            <div style={{ fontSize: '12px', color: '#94a3b8' }}>
              Max Blocks: <span style={{ color: '#c084fc', fontWeight: 'bold' }}>{getBlockCount()}/{currentLevelData.maxBlocks}</span>
            </div>
          </div>
        </div>

        {/* Lives Display */}
        <div style={{ display: 'flex', gap: '6px', fontSize: '18px' }}>
          {Array(3).fill(0).map((_, i) => (
            <span key={i} style={{ color: i < lives ? '#ef4444' : '#475569' }}>❤</span>
          ))}
        </div>
      </div>

      {/* Instructions & Feedback Area */}
      <div style={{
        background: messageType === 'success' ? 'rgba(16, 185, 129, 0.15)' : (messageType === 'error' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(139, 92, 246, 0.1)'),
        border: `1px solid ${messageType === 'success' ? '#10b981' : (messageType === 'error' ? '#ef4444' : '#8b5cf6')}`,
        padding: '12px 16px',
        borderRadius: '16px',
        fontSize: '14px',
        lineHeight: 1.5,
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <HelpCircle size={20} style={{ color: messageType === 'success' ? '#10b981' : (messageType === 'error' ? '#ef4444' : '#8b5cf6'), flexShrink: 0 }} />
        <span>{message}</span>
      </div>

      {/* Main Board / Workspace Split */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '20px',
        minHeight: '400px'
      }}>
        {/* Playfield Area */}
        <div style={{
          flex: 1.2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>
          {/* Grid Container */}
          <div style={{
            position: 'relative',
            background: '#090d16',
            border: '2px solid rgba(255,255,255,0.05)',
            borderRadius: '20px',
            padding: '8px',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)',
            width: '100%',
            maxWidth: '420px',
            aspectRatio: '1'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${currentLevelData.gridSize}, 1fr)`,
              gridTemplateRows: `repeat(${currentLevelData.gridSize}, 1fr)`,
              gap: '6px',
              width: '100%',
              height: '100%'
            }}>
              {Array(currentLevelData.gridSize * currentLevelData.gridSize).fill(0).map((_, idx) => {
                const x = idx % currentLevelData.gridSize;
                const y = Math.floor(idx / currentLevelData.gridSize);

                const isStart = currentLevelData.start.x === x && currentLevelData.start.y === y;
                const isTarget = currentLevelData.target.x === x && currentLevelData.target.y === y;
                const isWall = currentLevelData.walls.some(w => w.x === x && w.y === y);
                const hasStar = stars.some(s => s.x === x && s.y === y);
                const hasRobot = robotPos.x === x && robotPos.y === y;

                // Rotation degree for robot
                const rotationDeg = {
                  up: 0,
                  right: 90,
                  down: 180,
                  left: 270
                }[robotPos.dir];

                return (
                  <div
                    key={idx}
                    style={{
                      background: isWall ? '#1e293b' : 'rgba(255,255,255,0.02)',
                      border: isWall 
                        ? '2px solid #ef4444' 
                        : (isTarget ? '2px dashed #a855f7' : '1px solid rgba(255,255,255,0.05)'),
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      boxShadow: isWall ? '0 0 8px rgba(239, 68, 68, 0.3)' : 'none'
                    }}
                  >
                    {/* Start cell marker */}
                    {isStart && (
                      <span style={{ fontSize: '10px', color: '#10b981', position: 'absolute', bottom: '2px', fontWeight: 'bold' }}>START</span>
                    )}

                    {/* Portal Target */}
                    {isTarget && (
                      <div className="portal-swirl" style={{
                        width: '75%',
                        height: '75%',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, #a855f7, #6366f1)',
                        boxShadow: '0 0 12px #a855f7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        animation: 'spin 4s linear infinite'
                      }}>
                        <div style={{ width: '40%', height: '40%', borderRadius: '50%', background: '#090d16' }}></div>
                      </div>
                    )}

                    {/* Stars */}
                    {hasStar && (
                      <Star size={24} fill="#fbbf24" stroke="#fbbf24" style={{ filter: 'drop-shadow(0 0 6px #fbbf24)' }} />
                    )}

                    {/* Robot Avatar */}
                    {hasRobot && (
                      <div style={{
                        position: 'absolute',
                        zIndex: 2,
                        transform: `rotate(${rotationDeg}deg)`,
                        transition: 'transform 0.3s ease, left 0.3s ease, top 0.3s ease',
                        width: '75%',
                        height: '75%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg viewBox="0 0 40 40" style={{ width: '100%', height: '100%' }}>
                          {/* Cute robot body */}
                          <rect x="8" y="12" width="24" height="22" rx="6" fill="#8b5cf6" stroke="#fff" strokeWidth="2" />
                          <rect x="12" y="4" width="16" height="8" rx="2" fill="#c084fc" />
                          {/* Eyes */}
                          <circle cx="16" cy="18" r="3" fill="#67e8f9" />
                          <circle cx="24" cy="18" r="3" fill="#67e8f9" />
                          {/* Wheels / tracks */}
                          <rect x="5" y="24" width="4" height="10" rx="1" fill="#1e293b" />
                          <rect x="31" y="24" width="4" height="10" rx="1" fill="#1e293b" />
                          {/* Antenna */}
                          <line x1="20" y1="4" x2="20" y2="1" stroke="#c084fc" strokeWidth="2" />
                          <circle cx="20" cy="1" r="1.5" fill="#ef4444" />
                          {/* Direction Indicator */}
                          <path d="M 20 6 L 17 10 L 23 10 Z" fill="#fff" />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Simulation Controls */}
          <div style={{ display: 'flex', gap: '12px', width: '100%', maxWidth: '420px' }}>
            <button
              onClick={runProgram}
              disabled={isRunning}
              style={{
                flex: 1.5,
                background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                border: 'none',
                padding: '12px 18px',
                borderRadius: '16px',
                fontWeight: 'bold',
                cursor: isRunning ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
                color: '#fff'
              }}
            >
              <Play size={18} fill="#fff" />
              Run Program
            </button>

            <button
              onClick={resetGame}
              disabled={isRunning}
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '12px',
                borderRadius: '16px',
                fontWeight: 'bold',
                cursor: isRunning ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: '#fff'
              }}
            >
              <RotateCcw size={18} />
              Reset
            </button>
          </div>
        </div>

        {/* Coding Panels Workspace */}
        <div style={{
          flex: 1,
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '20px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#c084fc', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
            Blocks Toolset
          </h3>

          {/* Block Tool Drawer */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '8px'
          }}>
            <button
              onClick={() => addBlock('forward')}
              disabled={isRunning}
              style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid #10b981',
                borderRadius: '12px',
                padding: '10px',
                color: '#10b981',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px'
              }}
            >
              <ArrowUp size={16} />
              Move Forward
            </button>

            <button
              onClick={() => addBlock('left')}
              disabled={isRunning}
              style={{
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid #3b82f6',
                borderRadius: '12px',
                padding: '10px',
                color: '#3b82f6',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px'
              }}
            >
              <CornerUpLeft size={16} />
              Turn Left
            </button>

            <button
              onClick={() => addBlock('right')}
              disabled={isRunning}
              style={{
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid #f59e0b',
                borderRadius: '12px',
                padding: '10px',
                color: '#f59e0b',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px'
              }}
            >
              <CornerUpRight size={16} />
              Turn Right
            </button>

            <button
              onClick={() => addBlock('repeat')}
              disabled={isRunning}
              style={{
                background: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid #a855f7',
                borderRadius: '12px',
                padding: '10px',
                color: '#a855f7',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px'
              }}
            >
              <Repeat size={16} />
              Repeat Loop
            </button>
          </div>

          {/* Program Workspace Panel */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#94a3b8' }}>Program Workspace</span>
              <button
                onClick={clearWorkspace}
                disabled={isRunning || workspace.length === 0}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ef4444',
                  fontSize: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Trash2 size={14} />
                Clear
              </button>
            </div>

            {/* Blocks List */}
            <div style={{
              flex: 1,
              background: '#090d16',
              border: '1px dashed rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '12px',
              overflowY: 'auto',
              maxHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              minHeight: '120px'
            }}>
              {workspace.length === 0 ? (
                <div style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  fontSize: '13px',
                  textAlign: 'center'
                }}>
                  Workspace empty.<br />Tap blocks above to program your robot!
                </div>
              ) : (
                workspace.map((cmd, idx) => {
                  const isActive = activeCommandId === cmd.id;
                  const isSelectedLoop = selectedLoopId === cmd.id;

                  return (
                    <div
                      key={cmd.id}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        background: isSelectedLoop ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.03)',
                        border: `2px solid ${isActive ? '#a855f7' : (isSelectedLoop ? '#a855f7' : 'rgba(255,255,255,0.08)')}`,
                        borderRadius: '12px',
                        padding: '8px 10px',
                        gap: '6px'
                      }}
                    >
                      {/* Command Main Row */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                          <span style={{ color: '#475569', fontSize: '11px', fontWeight: 'bold' }}>{idx + 1}</span>
                          
                          {/* Command icon + name */}
                          {cmd.type === 'forward' && <ArrowUp size={14} style={{ color: '#10b981' }} />}
                          {cmd.type === 'left' && <CornerUpLeft size={14} style={{ color: '#3b82f6' }} />}
                          {cmd.type === 'right' && <CornerUpRight size={14} style={{ color: '#f59e0b' }} />}
                          {cmd.type === 'repeat' && <Repeat size={14} style={{ color: '#a855f7' }} />}

                          <span style={{ fontWeight: 'bold' }}>
                            {cmd.type === 'forward' && 'Move Forward'}
                            {cmd.type === 'left' && 'Turn Left'}
                            {cmd.type === 'right' && 'Turn Right'}
                            {cmd.type === 'repeat' && 'Repeat'}
                          </span>

                          {/* Loop iterations selector */}
                          {cmd.type === 'repeat' && (
                            <select
                              value={cmd.repeatCount}
                              disabled={isRunning}
                              onChange={(e) => updateRepeatCount(cmd.id, parseInt(e.target.value))}
                              style={{
                                background: 'rgba(255,255,255,0.1)',
                                border: 'none',
                                color: '#fff',
                                padding: '2px 6px',
                                borderRadius: '6px',
                                fontSize: '11px',
                                outline: 'none'
                              }}
                            >
                              {[2, 3, 4, 5].map(n => (
                                <option key={n} value={n} style={{ background: '#0f172a' }}>{n} times</option>
                              ))}
                            </select>
                          )}
                        </div>

                        {/* Reorder and Delete controls */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {cmd.type === 'repeat' && (
                            <button
                              onClick={() => setSelectedLoopId(isSelectedLoop ? null : cmd.id)}
                              style={{
                                background: isSelectedLoop ? '#a855f7' : 'rgba(255,255,255,0.1)',
                                border: 'none',
                                color: '#fff',
                                padding: '3px 8px',
                                borderRadius: '6px',
                                fontSize: '11px',
                                cursor: 'pointer'
                              }}
                            >
                              Add Inside
                            </button>
                          )}
                          
                          <button
                            onClick={() => moveBlock(idx, 'up')}
                            disabled={idx === 0 || isRunning}
                            style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: 0 }}
                          >
                            ▲
                          </button>
                          <button
                            onClick={() => moveBlock(idx, 'down')}
                            disabled={idx === workspace.length - 1 || isRunning}
                            style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: 0 }}
                          >
                            ▼
                          </button>
                          
                          <button
                            onClick={() => removeBlock(cmd.id)}
                            disabled={isRunning}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#ef4444',
                              cursor: 'pointer',
                              padding: '2px',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            <Trash size={12} />
                          </button>
                        </div>
                      </div>

                      {/* Sub-commands loop container */}
                      {cmd.type === 'repeat' && (
                        <div style={{
                          borderLeft: '2px solid #a855f7',
                          marginLeft: '14px',
                          paddingLeft: '10px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          background: 'rgba(255,255,255,0.01)',
                          borderRadius: '0 8px 8px 0',
                          padding: '6px'
                        }}>
                          {cmd.subCommands && cmd.subCommands.length === 0 ? (
                            <span style={{ fontSize: '11px', color: '#475569', fontStyle: 'italic' }}>
                              Loop workspace empty. Select 'Add Inside' and click basic blocks to add logic.
                            </span>
                          ) : (
                            cmd.subCommands?.map(sub => (
                              <div key={sub.id} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                background: 'rgba(255,255,255,0.02)',
                                padding: '4px 8px',
                                borderRadius: '6px',
                                fontSize: '12px'
                              }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  {sub.type === 'forward' && <ArrowUp size={12} style={{ color: '#10b981' }} />}
                                  {sub.type === 'left' && <CornerUpLeft size={12} style={{ color: '#3b82f6' }} />}
                                  {sub.type === 'right' && <CornerUpRight size={12} style={{ color: '#f59e0b' }} />}
                                  <span>{sub.type === 'forward' ? 'Move Forward' : (sub.type === 'left' ? 'Turn Left' : 'Turn Right')}</span>
                                </div>
                                <button
                                  onClick={() => removeBlock(sub.id, cmd.id)}
                                  disabled={isRunning}
                                  style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: 0 }}
                                >
                                  ×
                                </button>
                              </div>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Styled Spin Animation */}
      <style>{`
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default MazeRunnerGame;
