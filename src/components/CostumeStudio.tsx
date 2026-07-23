import React, { useState } from 'react';
import { useGamification } from '../context/GamificationContext';
import Mascot from './Mascot';
import { Sparkles, Palette, Crown, Smile, RefreshCw } from 'lucide-react';
import './CostumeStudio.css';

const COSTUME_PRESETS = [
  { id: 'costume-1', name: 'Standing Mascot', pose: 'standing', skin: 'default', icon: '🦊', tag: 'Default Pose' },
  { id: 'costume-2', name: 'Waving Friend', pose: 'waving', skin: 'default', icon: '👋', tag: 'Greeting' },
  { id: 'costume-3', name: 'Victory Cheer', pose: 'celebrating', skin: 'default', icon: '🎉', tag: 'Celebration' },
  { id: 'costume-4', name: 'Cyber Neon Glow', pose: 'standing', skin: 'neon_glow', icon: '⚡', tag: 'Cyberpunk' },
  { id: 'costume-5', name: 'Golden Champion', pose: 'standing', skin: 'gold_chrome', icon: '🏆', tag: 'Legendary' },
  { id: 'costume-6', name: 'Magma Flame', pose: 'standing', skin: 'magma_flow', icon: '🔥', tag: 'Elemental' },
  { id: 'costume-7', name: 'Matrix Glitch', pose: 'standing', skin: 'matrix_rain', icon: '👾', tag: 'Hacker' },
  { id: 'costume-8', name: 'Rainbow Sparkle', pose: 'standing', skin: 'rainbow_wave', icon: '🌈', tag: 'Vibrant' },
];

const SKINS_PALETTE = [
  { id: 'default', name: 'Sky Blue', color: '#0ea5e9', bg: 'linear-gradient(135deg, #38bdf8, #0ea5e9)' },
  { id: 'neon_glow', name: 'Cyber Cyan', color: '#22d3ee', bg: 'linear-gradient(135deg, #22d3ee, #0891b2)' },
  { id: 'gold_chrome', name: 'Gold Chrome', color: '#fbbf24', bg: 'linear-gradient(135deg, #fbbf24, #d97706)' },
  { id: 'matrix_rain', name: 'Matrix Green', color: '#4ade80', bg: 'linear-gradient(135deg, #4ade80, #16a34a)' },
  { id: 'quantum_glitch', name: 'Quantum Purple', color: '#f472b6', bg: 'linear-gradient(135deg, #f472b6, #c084fc)' },
  { id: 'magma_flow', name: 'Magma Fire', color: '#f97316', bg: 'linear-gradient(135deg, #f97316, #ea580c)' },
  { id: 'rainbow_wave', name: 'Rainbow Wave', color: '#ef4444', bg: 'linear-gradient(135deg, #ef4444, #10b981, #3b82f6)' },
];

const HATS_COLLECTION = [
  { id: 'none', name: 'None', icon: '❌' },
  { id: 'engineer_cap', name: 'Engineer Cap', icon: '🧢' },
  { id: 'space_helmet', name: 'Space Helmet', icon: '🚀' },
  { id: 'crown', name: 'Royal Crown', icon: '👑' },
  { id: 'wizard_hat', name: 'Wizard Hat', icon: '🧙‍♂️' },
  { id: 'detective_hat', name: 'Detective Cap', icon: '🕵️' },
  { id: 'pirate_hat', name: 'Pirate Hat', icon: '🏴‍☠️' },
  { id: 'hero_mask', name: 'Hero Mask', icon: '🦸' },
];

const CostumeStudio: React.FC = () => {
  const { equippedItems, equipItem } = useGamification();
  const [selectedCostumeId, setSelectedCostumeId] = useState('costume-1');
  const mascotRef = React.useRef<any>(null);

  const activeCostume = COSTUME_PRESETS.find(c => c.id === selectedCostumeId) || COSTUME_PRESETS[0];

  const handleSelectCostume = (costume: typeof COSTUME_PRESETS[0]) => {
    setSelectedCostumeId(costume.id);
    equipItem('skin', costume.skin);
  };

  const handleSelectSkin = (skinId: string) => {
    equipItem('skin', skinId);
  };

  const handleSelectHat = (hatId: string) => {
    equipItem('hat', hatId === 'none' ? '' : hatId);
  };

  return (
    <div className="costume-studio-container">
      {/* Left Sidebar: Costume Presets List */}
      <div className="costume-sidebar">
        <div className="costume-sidebar-title">Costumes (8)</div>
        {COSTUME_PRESETS.map((preset, idx) => (
          <div
            key={preset.id}
            className={`costume-item-card ${preset.id === selectedCostumeId ? 'selected' : ''}`}
            onClick={() => handleSelectCostume(preset)}
          >
            <span className="costume-number">{idx + 1}</span>
            <span className="costume-thumb-icon">{preset.icon}</span>
            <div className="costume-info">
              <span className="costume-name">{preset.name}</span>
              <span className="costume-tag">{preset.tag}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Workspace Area: Preview + Customizer */}
      <div className="costume-workspace-main">
        {/* Mascot Live Preview */}
        <div className="costume-preview-area">
          <Mascot ref={mascotRef} />
        </div>

        {/* Pose Test Action Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
          <button
            type="button"
            className="kids-button"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', background: '#3b82f6' }}
            onClick={() => mascotRef.current?.wave(2000)}
          >
            👋 Wave Pose
          </button>
          <button
            type="button"
            className="kids-button"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', background: '#10b981' }}
            onClick={() => mascotRef.current?.celebrate('high')}
          >
            🎉 Celebrate
          </button>
          <button
            type="button"
            className="kids-button"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', background: '#8b5cf6' }}
            onClick={() => mascotRef.current?.speak('Awesome costume! Let us code!')}
          >
            🗣️ Speak Text
          </button>
        </div>

        {/* Costume Tools Panel */}
        <div className="costume-tools-panel">
          {/* Skin Color Palette */}
          <div>
            <div className="tools-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Palette size={14} /> Skin Chroma Palette
            </div>
            <div className="skin-palette-row">
              {SKINS_PALETTE.map((sk) => (
                <button
                  key={sk.id}
                  type="button"
                  className={`skin-chip-btn ${equippedItems.skin === sk.id || (!equippedItems.skin && sk.id === 'default') ? 'active' : ''}`}
                  style={{ background: sk.bg }}
                  onClick={() => handleSelectSkin(sk.id)}
                >
                  <Sparkles size={12} />
                  <span>{sk.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Hat & Headwear Customizer */}
          <div style={{ marginTop: '0.5rem' }}>
            <div className="tools-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Crown size={14} /> Headwear & Accessories
            </div>
            <div className="accessories-grid">
              {HATS_COLLECTION.map((hat) => {
                const isEquipped = (hat.id === 'none' && !equippedItems.hat) || equippedItems.hat === hat.id;
                return (
                  <div
                    key={hat.id}
                    className={`accessory-card ${isEquipped ? 'equipped' : ''}`}
                    onClick={() => handleSelectHat(hat.id)}
                  >
                    <span style={{ fontSize: '1.4rem' }}>{hat.icon}</span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, marginTop: '0.2rem', textAlign: 'center' }}>
                      {hat.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostumeStudio;
