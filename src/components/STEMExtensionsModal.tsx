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
  buttonText: string;
}

const EXTENSION_TOOLS: ExtensionTool[] = [
  {
    id: 'scratch',
    name: 'Scratch 3.0 (MIT)',
    category: 'Block Coding',
    icon: '🐱',
    logoUrl: 'https://scratch.mit.edu/favicon.ico',
    color: '#f59e0b',
    description: 'The world famous MIT visual programming language for stories, games, and animations.',
    url: 'https://scratch.mit.edu/create',
    badge: 'MIT Media Lab',
    buttonText: 'Launch Scratch'
  },
  {
    id: 'codeorg',
    name: 'Code.org Studio',
    category: 'CS Fundamentals',
    icon: '🟩',
    logoUrl: 'https://studio.code.org/favicon.ico',
    color: '#10b981',
    description: 'Hour of Code adventures, Dance Party, App Lab, and K-12 Computer Science courses.',
    url: 'https://studio.code.org',
    badge: 'Hour of Code',
    buttonText: 'Launch Code.org'
  },
  {
    id: 'makecode',
    name: 'BBC micro:bit MakeCode',
    category: 'Hardware & Microcontrollers',
    icon: '🔌',
    logoUrl: 'https://makecode.microbit.org/favicon.ico',
    color: '#0ea5e9',
    description: 'Official Microsoft block & JavaScript editor for pocket-sized micro:bit hardware.',
    url: 'https://makecode.microbit.org',
    badge: 'Microsoft STEM',
    buttonText: 'Launch MakeCode'
  },
  {
    id: 'tinkercad',
    name: 'Tinkercad Circuits',
    category: '3D & Electronics',
    icon: '🧊',
    logoUrl: 'https://www.tinkercad.com/favicon.ico',
    color: '#ec4899',
    description: 'Simulate Arduino circuits, breadboards, sensors, and 3D printing design.',
    url: 'https://www.tinkercad.com/circuits',
    badge: 'Autodesk 3D',
    buttonText: 'Launch Tinkercad'
  },
  {
    id: 'replit',
    name: 'Replit Python & Web',
    category: 'Text-Based Coding',
    icon: '⚡',
    logoUrl: 'https://replit.com/favicon.ico',
    color: '#a855f7',
    description: 'Collaborative cloud IDE for writing Python, HTML, CSS, JavaScript, and Node.js.',
    url: 'https://replit.com',
    badge: 'Cloud IDE',
    buttonText: 'Launch Replit'
  },
  {
    id: 'tynker',
    name: 'Tynker STEM',
    category: 'Gamified Coding',
    icon: '🎮',
    logoUrl: 'https://www.tynker.com/favicon.ico',
    color: '#f97316',
    description: 'Gamified block coding courses, Minecraft modding, and robotics challenges.',
    url: 'https://www.tynker.com',
    badge: 'Gamified CS',
    buttonText: 'Launch Tynker'
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  {tool.id === 'scratch' ? (
                    <div style={{ background: '#ffffff', padding: '3px 8px', borderRadius: '8px', display: 'flex', alignItems: 'center', height: '28px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Scratch_logo.svg" alt="Scratch Logo" style={{ height: '20px', width: 'auto' }} />
                    </div>
                  ) : tool.id === 'codeorg' ? (
                    <div style={{ background: '#ffffff', padding: '3px 8px', borderRadius: '8px', display: 'flex', alignItems: 'center', height: '28px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Code.org_logo.svg" alt="Code.org Logo" style={{ height: '20px', width: 'auto' }} />
                    </div>
                  ) : tool.id === 'makecode' ? (
                    <div style={{ background: '#ffffff', padding: '3px 8px', borderRadius: '8px', display: 'flex', alignItems: 'center', height: '28px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/BBC_micro-bit_logo.svg" alt="BBC micro:bit" style={{ height: '18px', width: 'auto' }} />
                    </div>
                  ) : tool.id === 'tinkercad' ? (
                    <div style={{ background: '#ffffff', padding: '3px 8px', borderRadius: '8px', display: 'flex', alignItems: 'center', height: '28px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Tinkercad_logo.svg" alt="Tinkercad" style={{ height: '18px', width: 'auto' }} />
                    </div>
                  ) : tool.id === 'replit' ? (
                    <div style={{ background: '#0f172a', border: '1px solid #a855f7', padding: '3px 10px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '6px', height: '28px' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#a855f7">
                        <path d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V7H3.5A1.5 1.5 0 0 1 2 5.5v-4zM12 8.5V14H3.5A1.5 1.5 0 0 1 2 12.5v-4A1.5 1.5 0 0 1 3.5 7H12v1.5zm1.5-7A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5v4A1.5 1.5 0 0 1 22.5 7H15V1.5z"/>
                      </svg>
                      <span style={{ color: 'white', fontWeight: 800, fontSize: '0.85rem' }}>replit</span>
                    </div>
                  ) : (
                    <div style={{ background: '#ffffff', padding: '3px 8px', borderRadius: '8px', display: 'flex', alignItems: 'center', height: '28px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Tynker_logo.svg" alt="Tynker" style={{ height: '18px', width: 'auto' }} />
                    </div>
                  )}

                  <span style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#94a3b8',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
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
                {tool.buttonText} <ExternalLink size={14} />
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
