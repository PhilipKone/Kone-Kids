import React, { useState, useEffect, useRef } from 'react';
import { X, Download, Share2, Sparkles, Printer, Award, ArrowRight } from 'lucide-react';
import { Badge, useGamification } from '../context/GamificationContext';
import { Share } from '@capacitor/share';
import { SparkleStarIcon, QuestLockIcon, RocketLaunchIcon, TrophyCupIcon, ScrollCertIcon, QuestBadgeArt } from './PlayfulIcons';
import { sounds } from '../utils/sounds';

interface BadgeModalProps {
  badge: Badge;
  onClose: () => void;
}

export default function BadgeModal({ badge, onClose }: BadgeModalProps) {
  const { studentName } = useGamification();
  const [name, setName] = useState(studentName || 'Junior Coder');
  const [certSerial] = useState(() => `KCA-BDG-${Math.floor(100000 + Math.random() * 900000)}`);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!badge.unlocked) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = 1100;
    const H = 780;
    canvas.width = W;
    canvas.height = H;

    // 1. Warm Ivory Parchment Base
    const paper = ctx.createLinearGradient(0, 0, W, H);
    paper.addColorStop(0, '#fffdf8');
    paper.addColorStop(0.5, '#fdfaf1');
    paper.addColorStop(1, '#faf5e8');
    ctx.fillStyle = paper;
    ctx.fillRect(0, 0, W, H);

    // 2. Double Border Frame
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 5;
    ctx.strokeRect(30, 30, W - 60, H - 60);

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.strokeRect(42, 42, W - 84, H - 84);

    // Header Identity
    ctx.textAlign = 'center';
    ctx.fillStyle = '#0f172a';
    ctx.font = '800 16px "Outfit", system-ui, sans-serif';
    ctx.fillText('KONE CODE ACADEMY  •  ACHIEVEMENT CREDENTIAL', W / 2, 90);

    ctx.fillStyle = '#64748b';
    ctx.font = '700 13px "Outfit", system-ui, sans-serif';
    ctx.fillText('OFFICIAL BADGE CERTIFICATE OF MASTERY', W / 2, 116);

    // Presentation subtitle
    ctx.fillStyle = '#475569';
    ctx.font = 'italic 19px Georgia, serif';
    ctx.fillText('This credential is proudly conferred upon', W / 2, 160);

    // Student Name
    const displayName = (name || 'Junior Coder').trim();
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 52px "Baloo 2", "Outfit", system-ui, sans-serif';
    ctx.fillText(displayName, W / 2, 230);

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 200, 248);
    ctx.lineTo(W / 2 + 200, 248);
    ctx.stroke();

    // Citation
    ctx.fillStyle = '#334155';
    ctx.font = '400 18px "Outfit", system-ui, sans-serif';
    ctx.fillText('for successfully completing the quest requirements and earning the distinction of', W / 2, 292);

    // Badge Title Highlight
    ctx.fillStyle = '#b45309';
    ctx.font = '900 32px "Outfit", system-ui, sans-serif';
    ctx.fillText(`★ ${badge.name.toUpperCase()} ★`, W / 2, 340);

    // Description text
    ctx.fillStyle = '#475569';
    ctx.font = 'italic 16px Georgia, serif';
    ctx.fillText(`"${badge.description}"`, W / 2, 382);

    // Footer signatures & date
    const footerY = 600;
    const unlockDate = badge.unlockedAt || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    ctx.fillStyle = '#0f172a';
    ctx.font = '700 16px Georgia, serif';
    ctx.fillText(unlockDate, 260, footerY - 10);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(150, footerY);
    ctx.lineTo(370, footerY);
    ctx.stroke();
    ctx.fillStyle = '#64748b';
    ctx.font = '700 11px "Outfit", system-ui, sans-serif';
    ctx.fillText('DATE UNLOCKED', 260, footerY + 20);

    // Director Signature
    const rx = W - 260;
    ctx.fillStyle = '#0369a1';
    ctx.font = 'italic 700 26px Georgia, serif';
    ctx.fillText('Philip Hotor', rx, footerY - 10);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(rx - 110, footerY);
    ctx.lineTo(rx + 110, footerY);
    ctx.stroke();
    ctx.fillStyle = '#64748b';
    ctx.font = '700 11px "Outfit", system-ui, sans-serif';
    ctx.fillText('ACADEMY DIRECTOR', rx, footerY + 20);

    // Serial ID
    ctx.fillStyle = '#64748b';
    ctx.font = '600 11px "Outfit", system-ui, sans-serif';
    ctx.fillText(`CREDENTIAL ID: ${certSerial}   •   KIDS.CODKON.COM`, W / 2, 715);

  }, [name, badge]);

  const downloadCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    sounds.playCertificateFanfare();
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `Kone-Kids-Badge-${badge.name.replace(/\s+/g, '_')}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const shareAchievement = async () => {
    const text = `I unlocked the "${badge.name}" badge in Kone Kids! Check out my coding achievements at kids.codkon.com!`;
    try {
      await Share.share({
        title: 'Kone Kids Achievement!',
        text: text,
        url: 'https://kids.codkon.com',
        dialogTitle: 'Share Achievement'
      });
    } catch (err) {
      console.log('Share error or canceled', err);
    }
  };

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        padding: '1rem',
        overflowY: 'auto'
      }}
    >
      <div style={{
        background: '#ffffff',
        border: '2px solid #e2e8f0',
        borderRadius: '28px',
        padding: '1.75rem',
        maxWidth: '720px',
        width: '100%',
        margin: 'auto',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(15, 23, 42, 0.3)',
        color: '#0f172a'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close badge modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: '#f1f5f9',
            border: '1.5px solid #e2e8f0',
            borderRadius: '14px',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#475569',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#fee2e2'; e.currentTarget.style.color = '#ef4444'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#475569'; }}
        >
          <X size={20} />
        </button>

        {/* Badge Header Summary */}
        <div style={{ display: 'flex', gap: '1.1rem', alignItems: 'center', marginBottom: '1.25rem', paddingRight: '2.5rem' }}>
          <div style={{ filter: badge.unlocked ? 'none' : 'grayscale(0.4)', flexShrink: 0 }}>
            <QuestBadgeArt badge={badge} size={76} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 900, fontFamily: '"Baloo 2", cursive', color: '#0f172a' }}>{badge.name}</h3>
              <span style={{
                background: badge.unlocked ? '#ecfdf5' : '#fef3c7',
                color: badge.unlocked ? '#059669' : '#d97706',
                border: `1px solid ${badge.unlocked ? '#a7f3d0' : '#fde68a'}`,
                padding: '2px 9px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                {badge.unlocked ? <><SparkleStarIcon size={12}/> Earned</> : <><QuestLockIcon size={11}/> Quest Active</>}
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
              {badge.unlocked ? `Unlocked on ${badge.unlockedAt || new Date().toLocaleDateString()}` : `Reward: +${badge.xpReward || 100} XP & Official Credential`}
            </p>
          </div>
        </div>

        <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: '1.5', marginBottom: '1.5rem', background: '#f8fafc', padding: '0.85rem 1rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>{badge.description}</p>

        {/* LOCKED STATE: Interactive Quest Briefing */}
        {!badge.unlocked && (
          <div style={{
            background: '#f8fafc',
            border: '2px solid #cbd5e1',
            borderRadius: '20px',
            padding: '1.25rem',
            marginBottom: '0.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{
                fontFamily: '"Baloo 2", cursive',
                fontSize: '0.85rem',
                fontWeight: 900,
                color: '#d97706',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                <SparkleStarIcon size={15}/> Mission Objective
              </span>
              <span style={{
                background: '#e0f2fe',
                color: '#0284c7',
                padding: '3px 10px',
                borderRadius: '10px',
                fontSize: '0.75rem',
                fontWeight: 800
              }}>
                {badge.id.includes('robot') ? 'Robotics 4 Kids' : badge.id.includes('ai') || badge.id.includes('data') ? 'AI 4 Kids' : 'Coding 4 Kids'}
              </span>
            </div>

            <p style={{ margin: '0 0 1.25rem', fontSize: '0.92rem', color: '#1e293b', lineHeight: '1.5' }}>
              {badge.id === 'first_hello' ? 'Open the Kids Coding IDE and click "Run" to test your first interactive block script.' :
               badge.id === 'explorer' ? 'Discover all 3 learning hubs: Coding 4 Kids, Robotics 4 Kids, and AI 4 Kids.' :
               badge.id === 'ai_genius' ? 'Launch the AI Lab and train your first machine learning neural vision model.' :
               badge.id === 'robot_commander' ? 'Simulate micro:bit circuits and ultrasonic obstacle sensors in Robotics 4 Kids.' :
               badge.id === 'data_scientist' ? 'Filter, analyze, and chart live sensor data in the AI Data Lab.' :
               badge.id === 'game_master' ? 'Build your own 2D interactive arcade game with motion physics and collision logic.' :
               badge.id === 'app_builder' ? 'Design and assemble mobile interface components in the Mobile App workshop.' :
               badge.id === 'future_hero' ? 'Join the official Kone Kids cohort to receive real-world hardware kits and mentorship.' :
               `Launch the interactive simulator to complete the challenge and unlock this exclusive badge.`}
            </p>

            <a
              href={badge.id.includes('robot') ? '/robotics' : badge.id.includes('ai') || badge.id.includes('data') ? '/ai' : badge.id === 'future_hero' ? '/?join=true' : '/coding'}
              onClick={onClose}
              className="kids-button pulse-neon"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontSize: '0.95rem',
                padding: '0.75rem',
                textDecoration: 'none'
              }}
            >
              <RocketLaunchIcon size={19}/>
              <span>Start Quest Now</span>
            </a>
          </div>
        )}

        {badge.unlocked && (
          <div style={{ borderTop: '1.5px solid #f1f5f9', paddingTop: '1.25rem' }}>
            <h4 style={{ margin: '0 0 0.35rem', fontSize: '1.05rem', color: '#d97706', fontWeight: 800 }}>Credential Personalization</h4>
            <p style={{ margin: '0 0 1rem', fontSize: '0.82rem', color: '#64748b' }}>Type your name below to print your official badge diploma!</p>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              style={{
                width: '100%',
                background: '#f8fafc',
                border: '2px solid #cbd5e1',
                borderRadius: '14px',
                color: '#0f172a',
                padding: '0.65rem 1rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                outline: 'none',
                marginBottom: '1rem'
              }}
              onFocus={(e) => e.target.style.borderColor = '#0ea5e9'}
              onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
            />

            {/* Certificate Preview Canvas */}
            <div style={{ background: '#e2e8f0', borderRadius: '16px', padding: '0.75rem', marginBottom: '1.25rem' }}>
              <canvas ref={canvasRef} style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.15)',
                display: 'block'
              }} />
            </div>

            {/* Actions Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <button
                onClick={downloadCertificate}
                className="kids-button pulse-neon"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem',
                  fontSize: '0.9rem',
                  padding: '0.7rem',
                  borderRadius: '14px',
                  fontWeight: 900
                }}
              >
                <Download size={18} />
                <span>Download PNG</span>
              </button>
              <button
                onClick={shareAchievement}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem',
                  fontSize: '0.9rem',
                  padding: '0.7rem',
                  borderRadius: '14px',
                  background: '#f1f5f9',
                  border: '2px solid #cbd5e1',
                  color: '#0f172a',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                <Share2 size={18} />
                <span>Share Badge</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
