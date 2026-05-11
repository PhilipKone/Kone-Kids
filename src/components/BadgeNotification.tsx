import React, { useEffect, useState } from 'react';
import { Badge as BadgeType } from '../context/GamificationContext';
import { Trophy, Star, Sparkles } from 'lucide-react';
import './BadgeNotification.css';

interface BadgeNotificationProps {
  badge: BadgeType | null;
  onClose: () => void;
}

export default function BadgeNotification({ badge, onClose }: BadgeNotificationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (badge) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 500); // Wait for fade out animation
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [badge, onClose]);

  if (!badge) return null;

  return (
    <div className={`badge-notification-container ${isVisible ? 'show' : 'hide'}`}>
      <div className="badge-glow" />
      <div className="badge-card glass-panel">
        <div className="badge-icon-wrapper">
          <span className="badge-emoji">{badge.icon}</span>
          <div className="sparkle-particles">
            <Sparkles className="sparkle s1" size={12} />
            <Sparkles className="sparkle s2" size={16} />
            <Sparkles className="sparkle s3" size={14} />
          </div>
        </div>
        <div className="badge-info">
          <div className="badge-label">
            <Trophy size={14} /> NEW BADGE UNLOCKED!
          </div>
          <h4 className="badge-name">{badge.name}</h4>
          <p className="badge-desc">{badge.description}</p>
          {badge.xpReward && (
            <div className="badge-reward">
              <Star size={12} fill="currentColor" /> +{badge.xpReward} XP
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
