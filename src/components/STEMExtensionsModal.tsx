import React from 'react';
import { useTranslation } from 'react-i18next';
import X from 'lucide-react/dist/esm/icons/x.mjs';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link.mjs';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles.mjs';

interface ExtensionTool {
  id: string;
  name: string;
  category: string;
  icon: string;
  logoUrl: string;
  color: string;
  description: string;
  url: string;
  badge: string;
}

const EXTENSION_TOOLS: ExtensionTool[] = [
  {
    id: 'scratch',
    name: 'Scratch 3.0 (MIT)',
    category: 'Block Coding',
    icon: '🐱',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Scratch_logo.svg',
    color: '#f59e0b',
    description: 'The world famous MIT visual programming language for stories, games, and animations.',
    url: 'https://scratch.mit.edu/create',
    badge: 'MIT Media Lab'
  },
  {
    id: 'codeorg',
    name: 'Code.org Studio',
    category: 'CS Fundamentals',
    icon: '🟩',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Code.org_logo.svg',
    color: '#10b981',
    description: 'Hour of Code adventures, Dance Party, App Lab, and K-12 Computer Science courses.',
    url: 'https://studio.code.org',
    badge: 'Hour of Code'
  },
  {
    id: 'makecode',
    name: 'BBC micro:bit MakeCode',
    category: 'Hardware & Microcontrollers',
    icon: '🔌',
    logoUrl: 'https://cdn.simpleicons.org/microbit/0ea5e9',
    color: '#0ea5e9',
    description: 'Official Microsoft block & JavaScript editor for pocket-sized micro:bit hardware.',
    url: 'https://makecode.microbit.org',
    badge: 'Microsoft STEM'
  },
  {
    id: 'tinkercad',
    name: 'Tinkercad Circuits',
    category: '3D & Electronics',
    icon: '🧊',
    logoUrl: 'https://cdn.simpleicons.org/autodesk/ec4899',
    color: '#ec4899',
    description: 'Simulate Arduino circuits, breadboards, sensors, and 3D printing design.',
    url: 'https://www.tinkercad.com/circuits',
    badge: 'Autodesk 3D'
  },
  {
    id: 'replit',
    name: 'Replit Python & Web',
    category: 'Text-Based Coding',
    icon: '⚡',
    logoUrl: 'https://cdn.simpleicons.org/replit/a855f7',
    color: '#a855f7',
    description: 'Collaborative cloud IDE for writing Python, HTML, CSS, JavaScript, and Node.js.',
    url: 'https://replit.com',
    badge: 'Cloud IDE'
  },
  {
    id: 'tynker',
    name: 'Tynker STEM',
    category: 'Gamified Coding',
    icon: '🎮',
    logoUrl: 'https://cdn.simpleicons.org/fortinet/f97316',
    color: '#f97316',
    description: 'Gamified block coding courses, Minecraft modding, and robotics challenges.',
    url: 'https://www.tynker.com',
    badge: 'Gamified CS'
  }
];

interface STEMExtensionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEMExtensionsModal: React.FC<STEMExtensionsModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '1rem',
      boxSizing: 'border-box'
    }}>
      <div style={{
        background: 'linear-gradient(145deg, #0f172a 0%, #1e293b 100%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '24px',
        maxWidth: '850px',
        width: '100%',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden'
      }}>
        {/* Modal Header */}
        <div style={{
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              background: 'rgba(14, 165, 233, 0.15)',
              color: '#38bdf8',
              padding: '0.4rem',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Sparkles size={20} />
            </div>
            <div>
              <h2 style={{
                fontFamily: "'Baloo 2', cursive",
                fontSize: '1.4rem',
                fontWeight: 800,
                color: 'white',
                margin: 0
              }}>
                🚀 STEM Extensions &amp; External Labs
              </h2>
              <p style={{
                margin: 0,
                fontSize: '0.8rem',
                color: '#94a3b8',
                fontWeight: 500
              }}>
                Explore world-class coding platforms, Scratch, Code.org, MakeCode &amp; Tinkercad.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              color: '#94a3b8',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content - Cards Grid */}
        <div style={{
          padding: '1.5rem 1.75rem',
          overflowY: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1.25rem'
        }}>
          {EXTENSION_TOOLS.map(tool => (
            <div
              key={tool.id}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src={tool.logoUrl} alt={tool.name} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                  </div>
                  <span style={{
                    background: `${tool.color}20`,
                    color: tool.color,
                    border: `1px solid ${tool.color}40`,
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '12px'
                  }}>
                    {tool.badge}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "'Baloo 2', cursive",
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: 'white',
                  margin: '0 0 0.35rem 0'
                }}>
                  {tool.name}
                </h3>

                <p style={{
                  margin: 0,
                  fontSize: '0.82rem',
                  color: '#94a3b8',
                  lineHeight: '1.4',
                  fontWeight: 500
                }}>
                  {tool.description}
                </p>
              </div>

              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: '1.25rem',
                  background: `linear-gradient(135deg, ${tool.color} 0%, ${tool.color}dd 100%)`,
                  color: 'white',
                  textDecoration: 'none',
                  padding: '0.55rem 1rem',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  boxShadow: `0 4px 12px ${tool.color}30`,
                  fontFamily: "'Baloo 2', cursive",
                  transition: 'all 0.2s'
                }}
              >
                Launch {tool.name.split(' ')[0]} <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '1rem 1.75rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(0, 0, 0, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.8rem',
          color: '#94a3b8'
        }}>
          <span>💡 External tools open in a new tab. All progress inside Kone Kids is saved automatically.</span>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              color: 'white',
              padding: '0.4rem 1rem',
              borderRadius: '10px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default STEMExtensionsModal;
