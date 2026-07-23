import React, { useState, useEffect, useRef } from 'react';
import { sounds } from '../utils/sounds';
import { Volume2, VolumeX, Music, Play, Square, Radio } from 'lucide-react';
import './SoundStudio.css';

const SOUND_PRESETS = [
  { id: 'sound-1', name: 'Click Pop', icon: '🖱️', tag: 'UI Feedback', action: () => sounds.playClick() },
  { id: 'sound-2', name: 'Success Chime', icon: '🎵', tag: 'Achievement', action: () => sounds.playSuccess() },
  { id: 'sound-3', name: 'Victory Fanfare', icon: '🏆', tag: 'Level Clear', action: () => sounds.playWin() },
  { id: 'sound-4', name: 'Coin Sparkle', icon: '🪙', tag: 'Reward', action: () => sounds.playSuccess() },
  { id: 'sound-5', name: 'Laser Zap', icon: '⚡', tag: 'Action SFX', action: () => sounds.playClick() },
  { id: 'sound-6', name: 'Jump Spring', icon: '🚀', tag: 'Movement', action: () => sounds.playClick() },
  { id: 'sound-7', name: 'Robot Beep', icon: '🤖', tag: 'Synthesizer', action: () => sounds.playClick() },
  { id: 'sound-8', name: 'Magic Wave', icon: '🌊', tag: 'Ambient', action: () => sounds.playSuccess() },
];

const SoundStudio: React.FC = () => {
  const [selectedSoundId, setSelectedSoundId] = useState('sound-1');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(sounds.getMuted());
  const [isMusicOn, setIsMusicOn] = useState(sounds.getMusicOn());
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const selectedSound = SOUND_PRESETS.find(s => s.id === selectedSoundId) || SOUND_PRESETS[0];

  const handlePlaySound = () => {
    setIsPlaying(true);
    selectedSound.action();
    setTimeout(() => setIsPlaying(false), 1200);
  };

  const handleToggleMute = () => {
    const muteState = sounds.toggleMute();
    setIsMuted(muteState);
  };

  const handleToggleMusic = () => {
    const musicState = sounds.toggleMusic();
    setIsMusicOn(musicState);
  };

  // Draw Audio Waveform Visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let phase = 0;

    const renderWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 3;
      ctx.strokeStyle = isPlaying ? '#a855f7' : '#38bdf8';
      ctx.beginPath();

      const height = canvas.height;
      const width = canvas.width;
      const centerY = height / 2;

      for (let x = 0; x < width; x++) {
        const freq = isPlaying ? 0.05 : 0.02;
        const amp = isPlaying ? 35 : 12;
        const y = centerY + Math.sin(x * freq + phase) * amp * Math.sin((x / width) * Math.PI);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      phase += isPlaying ? 0.15 : 0.03;
      animationFrameRef.current = requestAnimationFrame(renderWave);
    };

    renderWave();
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="sound-studio-container">
      {/* Sidebar: Sound Preset List */}
      <div className="sound-sidebar">
        <div className="sound-sidebar-title">Sound Library (8)</div>
        {SOUND_PRESETS.map((preset, idx) => (
          <div
            key={preset.id}
            className={`sound-item-card ${preset.id === selectedSoundId ? 'selected' : ''}`}
            onClick={() => {
              setSelectedSoundId(preset.id);
              preset.action();
            }}
          >
            <span className="sound-number">{idx + 1}</span>
            <span className="sound-thumb-icon">{preset.icon}</span>
            <div className="sound-info">
              <span className="sound-name">{preset.name}</span>
              <span className="sound-tag">{preset.tag}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Workspace Area: Waveform + Audio Modifiers */}
      <div className="sound-workspace-main">
        {/* Waveform Visualization Canvas */}
        <div className="waveform-preview-area">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 700 }}>
            <Radio size={16} color={isPlaying ? '#a855f7' : '#38bdf8'} />
            <span>Audio Waveform: {selectedSound.name}</span>
          </div>

          <canvas ref={canvasRef} width={500} height={120} className="waveform-canvas" />

          <button type="button" className="sound-play-big-btn" onClick={handlePlaySound}>
            {isPlaying ? <Square size={18} /> : <Play size={18} />}
            <span>{isPlaying ? 'Playing...' : 'Play Sound'}</span>
          </button>
        </div>

        {/* Global Audio & Music Controls */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(139, 92, 246, 0.08)', padding: '0.75rem 1rem', borderRadius: '14px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '0.85rem' }}>
            <Music size={18} color="#8b5cf6" />
            <span>Background Coding Beats</span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              type="button"
              className="kids-button"
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem', background: isMusicOn ? '#10b981' : '#64748b' }}
              onClick={handleToggleMusic}
            >
              <Music size={14} />
              <span>{isMusicOn ? 'Music ON 🎶' : 'Music OFF 🎵'}</span>
            </button>

            <button
              type="button"
              className="kids-button"
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem', background: isMuted ? '#ef4444' : '#3b82f6' }}
              onClick={handleToggleMute}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              <span>{isMuted ? 'Muted 🔇' : 'Sound ON 🔊'}</span>
            </button>
          </div>
        </div>

        {/* Sound Effects FX Modifiers */}
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.5px' }}>
            Scratch Audio FX Modifiers
          </div>
          <div className="effects-grid">
            <button type="button" className="effect-card-btn" onClick={handlePlaySound}>
              <span className="effect-icon">🔊</span>
              <span>Louder</span>
            </button>
            <button type="button" className="effect-card-btn" onClick={handlePlaySound}>
              <span className="effect-icon">🔉</span>
              <span>Softer</span>
            </button>
            <button type="button" className="effect-card-btn" onClick={handlePlaySound}>
              <span className="effect-icon">🐇</span>
              <span>Faster</span>
            </button>
            <button type="button" className="effect-card-btn" onClick={handlePlaySound}>
              <span className="effect-icon">🐢</span>
              <span>Slower</span>
            </button>
            <button type="button" className="effect-card-btn" onClick={handlePlaySound}>
              <span className="effect-icon">🔄</span>
              <span>Echo</span>
            </button>
            <button type="button" className="effect-card-btn" onClick={handlePlaySound}>
              <span className="effect-icon">🤖</span>
              <span>Robot Filter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundStudio;
