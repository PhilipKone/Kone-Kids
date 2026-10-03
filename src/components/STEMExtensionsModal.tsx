import React, { useState } from 'react';
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
  textColor?: string;
  description: string;
  url: string;
  badge: string;
  buttonText: string;
}

export const ToolBrandLogo: React.FC<{ toolId: string; size?: number }> = ({ toolId, size = 36 }) => {
  // Direct vector SVG logos for lightning fast loading and zero external cookie/network issues
  switch (toolId) {
    case 'scratch':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#f59e0b" />
          {/* Official Scratch 'S' Emblem from MIT Scratch Foundation */}
          <g transform="translate(3.5, 3.5) scale(0.71)">
            <path
              fill="white"
              d="M11.406 11.312c-.78-.123-1.198-.654-.99-2.295l.023-.198c.175-1.426.321-1.743.996-1.706.198.013.426.14.654.33.211.247.68.568.945 1.204.19.466.254.77.281 1.098l.042.402v-.002a.68.68 0 0 0 1.342-.007c.008-.044.176-4.365.176-4.436 0-.38-.302-.69-.68-.696a.685.685 0 0 0-.682.688c0 .009-.001.605-.014 1.206-.536-.592-1.223-1.123-1.994-1.17-2.058-.11-2.283 1.811-2.419 2.918l-.02.196c-.278 2.189.441 3.569 2.13 3.837 1.838.293 3.063.72 3.074 1.868.007.446-.224.903-.627 1.254a2.163 2.163 0 0 1-1.749.507 3.233 3.233 0 0 1-.539-.141c-.24-.136-.847-.51-1.154-.942-.26-.364-.35-.937-.378-1.3.004-.163.005-.27.005-.283a.69.69 0 0 0-.669-.703.689.689 0 0 0-.696.682c0 .013-.017 1.367-.066 2.183-.07 1.313 0 2.426 0 2.474.028.382.35.67.727.644a.681.681 0 0 0 .635-.733c0-.006-.033-.545-.029-1.29a5.21 5.21 0 0 0 1.938.773 3.451 3.451 0 0 0 2.856-.82c.713-.619 1.122-1.464 1.11-2.32-.024-2.555-2.865-3.004-4.228-3.222M14.174 0a5.51 5.51 0 0 0-2.724.723h-.112c-2.637 0-4.937 1.392-6.15 3.728-.728 1.393-.9 2.75-.999 3.579-.012.089-.018.17-.028.262-.12.974-.123 1.904-.01 2.772a5.824 5.824 0 0 0-.625 2.529v.016a58.919 58.919 0 0 1-.057 1.95 29.72 29.72 0 0 0-.008 2.94l.013.209C3.698 21.676 6.159 24 9.083 24a5.516 5.516 0 0 0 3.463-1.21 8.357 8.357 0 0 0 5.195-2.08c1.826-1.587 2.859-3.845 2.83-6.19-.013-1.362-.346-2.638-.978-3.763.117-1.273.221-4.996.221-5.03 0-3.103-2.484-5.67-5.539-5.727zm.056 2.675c1.642.03 2.978 1.412 2.978 3.081 0 .038-.145 4.497-.215 4.883a3.152 3.152 0 0 1-.203.69c.756.89 1.165 2 1.175 3.256.021 1.555-.681 3.076-1.926 4.16a5.763 5.763 0 0 1-3.8 1.444 5.986 5.986 0 0 1-.718-.048 3.386 3.386 0 0 1-.172.215 2.97 2.97 0 0 1-2.264 1.038c-1.573 0-2.897-1.255-3.013-2.856l-.008-.122a27.366 27.366 0 0 1 .005-2.662c.039-.679.06-1.831.062-2.08a3.124 3.124 0 0 1 .783-2.025c-.237-.835-.312-1.836-.167-3.02l.024-.212c.083-.695.208-1.72.72-2.7.765-1.473 2.168-2.318 3.848-2.318a4.568 4.568 0 0 1 .824.07c.546-.5 1.27-.81 2.067-.794Z"
            />
          </g>
        </svg>
      );
    case 'codeorg':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#0093a7" />
          {/* Authentic Code.org 4-Tile C-O-D-E Grid with Center Dot */}
          <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.8" fill="white" />
          <rect x="13" y="3.5" width="7.5" height="7.5" rx="1.8" fill="white" />
          <rect x="3.5" y="13" width="7.5" height="7.5" rx="1.8" fill="white" />
          <rect x="13" y="13" width="7.5" height="7.5" rx="1.8" fill="white" />
          <text x="7.25" y="9.2" textAnchor="middle" dominantBaseline="middle" fill="#0093a7" fontSize="5.5" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif">C</text>
          <text x="16.75" y="9.2" textAnchor="middle" dominantBaseline="middle" fill="#0093a7" fontSize="5.5" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif">O</text>
          <text x="7.25" y="18.7" textAnchor="middle" dominantBaseline="middle" fill="#0093a7" fontSize="5.5" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif">D</text>
          <text x="16.75" y="18.7" textAnchor="middle" dominantBaseline="middle" fill="#0093a7" fontSize="5.5" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif">E</text>
          <circle cx="12" cy="12" r="0.9" fill="white" />
        </svg>
      );
    case 'makecode':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#0ea5e9" />
          {/* Official BBC micro:bit Hardware Silhouette & Dual Display Matrix */}
          <g transform="translate(3.5, 3.5) scale(0.71)">
            <path
              fill="white"
              d="M6.857 5.143A6.865 6.865 0 000 12a6.864 6.864 0 006.857 6.857h10.287A6.863 6.863 0 0024 12c0-3.781-3.075-6.857-6.856-6.857zm0 2.744h10.287A4.117 4.117 0 0121.257 12a4.119 4.119 0 01-4.113 4.116H6.857A4.12 4.12 0 012.743 12a4.118 4.118 0 014.114-4.113zm10.168 2.729a1.385 1.385 0 10.003 2.77 1.385 1.385 0 00-.003-2.77zm-10.166 0a1.385 1.385 0 10-.003 2.771 1.385 1.385 0 00.003-2.77Z"
            />
          </g>
        </svg>
      );
    case 'tinkercad':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#0f172a" />
          {/* Official Autodesk Tinkercad 9-Block Multi-Color 3D Grid */}
          <rect x="3.5" y="3.5" width="4.8" height="4.8" rx="1.2" fill="#00bcd4" />
          <rect x="9.6" y="3.5" width="4.8" height="4.8" rx="1.2" fill="#0288d1" />
          <rect x="15.7" y="3.5" width="4.8" height="4.8" rx="1.2" fill="#1565c0" />
          <rect x="3.5" y="9.6" width="4.8" height="4.8" rx="1.2" fill="#ffb300" />
          <rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1.2" fill="#0288d1" />
          <rect x="15.7" y="9.6" width="4.8" height="4.8" rx="1.2" fill="#00bcd4" />
          <rect x="3.5" y="15.7" width="4.8" height="4.8" rx="1.2" fill="#e53935" />
          <rect x="9.6" y="15.7" width="4.8" height="4.8" rx="1.2" fill="#fb8c00" />
          <rect x="15.7" y="15.7" width="4.8" height="4.8" rx="1.2" fill="#1565c0" />
        </svg>
      );
    case 'replit':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#F26207" />
          {/* Official Replit Prompt & Code Runner Mark */}
          <g transform="translate(3.5, 3.5) scale(0.71)">
            <path
              fill="white"
              d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V8H3.5A1.5 1.5 0 0 1 2 6.5ZM12 8h8.5A1.5 1.5 0 0 1 22 9.5v5a1.5 1.5 0 0 1-1.5 1.5H12ZM2 17.5A1.5 1.5 0 0 1 3.5 16H12v6.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 22.5Z"
            />
          </g>
        </svg>
      );
    case 'tynker':
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#ED1C24" />
          {/* Official Tynker Playful Coding 't' & Star Spark */}
          <path
            d="M7 8.5h3V5.5c0-.8.6-1.5 1.5-1.5h1.5v4.5h4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-4v6c0 1.4 1.1 2.5 2.5 2.5h1.5v3h-2c-3 0-5-2-5-5v-6.5H7c-.8 0-1.5-.7-1.5-1.5S6.2 8.5 7 8.5z"
            fill="white"
          />
          <circle cx="18" cy="5.5" r="1.8" fill="#facc15" />
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
    textColor: '#b45309',
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
    color: '#0093a7',
    textColor: '#007080',
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
    textColor: '#0369a1',
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
    color: '#0288d1',
    textColor: '#01579b',
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
    color: '#F26207',
    textColor: '#c2410c',
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
    color: '#ED1C24',
    textColor: '#b91c1c',
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
