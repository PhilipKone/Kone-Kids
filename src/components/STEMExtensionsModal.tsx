import React from 'react';
import { useTranslation } from 'react-i18next';
import X from 'lucide-react/dist/esm/icons/x.mjs';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link.mjs';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles.mjs';

export interface ExtensionTool {
  id: string;
  name: string;
  category: string;
  icon: string;
  color: string;
  description: string;
  url: string;
  badge: string;
  buttonText: string;
}

export const ToolBrandLogo: React.FC<{ toolId: string; size?: number }> = ({ toolId, size = 32 }) => {
  switch (toolId) {
    case 'scratch':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#f59e0b" />
          <path d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="white" opacity="0.9" />
          <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" fill="#f59e0b" />
          <path d="M15 11h-2V9a1 1 0 10-2 0v2H9a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2z" fill="white" />
        </svg>
      );
    case 'codeorg':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#10b981" />
          <rect x="5" y="5" width="6" height="6" rx="1.5" fill="white" />
          <rect x="13" y="5" width="6" height="6" rx="1.5" fill="white" />
          <rect x="5" y="13" width="6" height="6" rx="1.5" fill="white" />
          <rect x="13" y="13" width="6" height="6" rx="1.5" fill="white" />
        </svg>
      );
    case 'makecode':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#0ea5e9" />
          <circle cx="8" cy="12" r="3" stroke="white" strokeWidth="2.2" />
          <circle cx="16" cy="12" r="3" stroke="white" strokeWidth="2.2" />
          <path d="M8 9c2 0 6 6 8 6M8 15c2 0 6-6 8-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'tinkercad':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#ec4899" />
          <path d="M12 4l7 4v8l-7 4-7-4V8l7-4z" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="none" />
          <path d="M12 4v8.5M19 8l-7 4M5 8l7 4" stroke="white" strokeWidth="2" />
        </svg>
      );
    case 'replit':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#a855f7" />
          <path fillRule="evenodd" clipRule="evenodd" d="M6 6h4v4H6V6zm0 6h4v4H6v-4zm6 0h4v4h-4v-4zm0-6h6v4h-6V6z" fill="white" />
        </svg>
      );
    case 'tynker':
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#f97316" />
          <path d="M7 10h2v4H7v-4zm8 0h2v4h-2v-4zm-5 1h4v2h-4v-2z" fill="white" />
          <circle cx="8" cy="8" r="1.5" fill="white" />
          <circle cx="16" cy="8" r="1.5" fill="white" />
        </svg>
      );
  }
};

export const EXTENSION_TOOLS: ExtensionTool[] = [
  {
    id: 'scratch',
    name: 'Scratch 3.0 (MIT)',
    category: 'Block Coding',
    icon: '🐱',
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <ToolBrandLogo toolId={tool.id} size={34} />
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
