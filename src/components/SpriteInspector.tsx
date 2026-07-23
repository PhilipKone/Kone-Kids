import React, { useState } from 'react';
import { Eye, EyeOff, Plus, Image as ImageIcon, Compass, Maximize2, MoveHorizontal, MoveVertical } from 'lucide-react';
import './SpriteInspector.css';

export interface SpriteInfo {
  id: string;
  name: string;
  icon: string;
  x: number;
  y: number;
  size: number;
  direction: number;
  visible: boolean;
}

export interface BackdropInfo {
  id: string;
  name: string;
  icon: string;
}

interface SpriteInspectorProps {
  sprites: SpriteInfo[];
  selectedSpriteId: string;
  activeBackdrop: string;
  onSelectSprite: (id: string) => void;
  onUpdateSprite: (id: string, updates: Partial<SpriteInfo>) => void;
  onAddSprite: (sprite: { name: string; icon: string }) => void;
  onChangeBackdrop: (backdropId: string) => void;
}

const PRESET_SPRITES = [
  { name: 'Kone Mascot', icon: '🦊' },
  { name: 'Kone Bot', icon: '🤖' },
  { name: 'Star Sparkle', icon: '⭐' },
  { name: 'Space Rocket', icon: '🚀' },
  { name: 'Friendly Alien', icon: '👾' },
  { name: 'Magic Dragon', icon: '🐲' },
  { name: 'Super Cat', icon: '🐱' },
  { name: 'Cosmic Crystal', icon: '💎' },
];

const PRESET_BACKDROPS: BackdropInfo[] = [
  { id: 'default', name: 'Standard Studio', icon: '🏫' },
  { id: 'space', name: 'Cosmic Space', icon: '🌌' },
  { id: 'underwater', name: 'Deep Ocean', icon: '🌊' },
  { id: 'cyber', name: 'Cyber City', icon: '🏙️' },
  { id: 'playground', name: 'Sunny Park', icon: '🎪' },
];

const SpriteInspector: React.FC<SpriteInspectorProps> = ({
  sprites,
  selectedSpriteId,
  activeBackdrop,
  onSelectSprite,
  onUpdateSprite,
  onAddSprite,
  onChangeBackdrop,
}) => {
  const [showSpritePicker, setShowSpritePicker] = useState(false);
  const [showBackdropPicker, setShowBackdropPicker] = useState(false);

  const selectedSprite = sprites.find(s => s.id === selectedSpriteId) || sprites[0] || {
    id: 'default',
    name: 'Kone Mascot',
    icon: '🦊',
    x: 50,
    y: 300,
    size: 100,
    direction: 90,
    visible: true,
  };

  const handleInputChange = (field: keyof SpriteInfo, value: any) => {
    onUpdateSprite(selectedSprite.id, { [field]: value });
  };

  return (
    <div className="sprite-inspector">
      {/* Upper Inspector Bar: Sprite parameters */}
      <div className="sprite-inspector-main-row">
        {/* Sprite Name */}
        <div className="inspector-group">
          <span className="inspector-label">Sprite:</span>
          <input
            type="text"
            className="inspector-input name-input"
            value={selectedSprite.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            title="Sprite Name"
          />
        </div>

        {/* X Position */}
        <div className="inspector-group">
          <span className="inspector-label">
            <MoveHorizontal size={13} /> X:
          </span>
          <input
            type="number"
            className="inspector-input"
            value={Math.round(selectedSprite.x)}
            onChange={(e) => handleInputChange('x', Number(e.target.value))}
            title="X Position"
          />
        </div>

        {/* Y Position */}
        <div className="inspector-group">
          <span className="inspector-label">
            <MoveVertical size={13} /> Y:
          </span>
          <input
            type="number"
            className="inspector-input"
            value={Math.round(selectedSprite.y)}
            onChange={(e) => handleInputChange('y', Number(e.target.value))}
            title="Y Position"
          />
        </div>

        {/* Show / Hide Toggle */}
        <div className="visibility-toggle-group">
          <button
            type="button"
            className={`vis-btn ${selectedSprite.visible ? 'active' : ''}`}
            onClick={() => handleInputChange('visible', true)}
            title="Show Sprite"
          >
            <Eye size={15} />
          </button>
          <button
            type="button"
            className={`vis-btn ${!selectedSprite.visible ? 'active' : ''}`}
            onClick={() => handleInputChange('visible', false)}
            title="Hide Sprite"
          >
            <EyeOff size={15} />
          </button>
        </div>

        {/* Size */}
        <div className="inspector-group">
          <span className="inspector-label">
            <Maximize2 size={13} /> Size:
          </span>
          <input
            type="number"
            className="inspector-input"
            value={selectedSprite.size}
            onChange={(e) => handleInputChange('size', Math.max(10, Math.min(300, Number(e.target.value))))}
            title="Size Percentage"
          />
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8' }}>%</span>
        </div>

        {/* Direction */}
        <div className="inspector-group">
          <span className="inspector-label">
            <Compass size={13} /> Dir:
          </span>
          <input
            type="number"
            className="inspector-input"
            value={selectedSprite.direction}
            onChange={(e) => handleInputChange('direction', Number(e.target.value))}
            title="Direction (Degrees)"
          />
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8' }}>°</span>
        </div>
      </div>

      {/* Lower Row: Active Sprites List + Action Triggers (+ Sprite / + Stage) */}
      <div className="sprite-tray-row">
        <div className="sprite-thumbnails-list">
          {sprites.map((s) => (
            <div
              key={s.id}
              className={`sprite-card-item ${s.id === selectedSprite.id ? 'selected' : ''}`}
              onClick={() => onSelectSprite(s.id)}
            >
              <span className="sprite-icon-badge">{s.icon}</span>
              <span>{s.name}</span>
            </div>
          ))}
        </div>

        <div className="tray-action-buttons">
          <button
            type="button"
            className="tray-btn"
            onClick={() => setShowSpritePicker(true)}
          >
            <Plus size={14} /> Sprite
          </button>

          <button
            type="button"
            className="tray-btn backdrop-btn"
            onClick={() => setShowBackdropPicker(true)}
          >
            <ImageIcon size={14} /> Stage
          </button>
        </div>
      </div>

      {/* Sprite Picker Modal */}
      {showSpritePicker && (
        <div className="inspector-picker-overlay" onClick={() => setShowSpritePicker(false)}>
          <div className="inspector-picker-modal" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ margin: '0 0 0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ✨ Choose a Sprite Character
            </h3>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
              Pick a new character sprite to add to your stage!
            </p>
            <div className="picker-grid">
              {PRESET_SPRITES.map((preset, idx) => (
                <div
                  key={idx}
                  className="picker-card"
                  onClick={() => {
                    onAddSprite(preset);
                    setShowSpritePicker(false);
                  }}
                >
                  <span style={{ fontSize: '2rem' }}>{preset.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: '0.8rem', textAlign: 'center' }}>
                    {preset.name}
                  </span>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="tray-btn"
              style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
              onClick={() => setShowSpritePicker(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Backdrop Picker Modal */}
      {showBackdropPicker && (
        <div className="inspector-picker-overlay" onClick={() => setShowBackdropPicker(false)}>
          <div className="inspector-picker-modal" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ margin: '0 0 0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🖼️ Choose Stage Backdrop
            </h3>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
              Change the background environment for your game and mascot stage!
            </p>
            <div className="picker-grid">
              {PRESET_BACKDROPS.map((bd) => (
                <div
                  key={bd.id}
                  className={`picker-card ${activeBackdrop === bd.id ? 'selected' : ''}`}
                  onClick={() => {
                    onChangeBackdrop(bd.id);
                    setShowBackdropPicker(false);
                  }}
                >
                  <span style={{ fontSize: '2rem' }}>{bd.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: '0.8rem', textAlign: 'center' }}>
                    {bd.name}
                  </span>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="tray-btn backdrop-btn"
              style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
              onClick={() => setShowBackdropPicker(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpriteInspector;
