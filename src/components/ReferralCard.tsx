import React, { useState } from 'react';
import { Share2, Copy, Check, Users, Gift, Star, ChevronRight } from 'lucide-react';
import './ReferralCard.css';

interface InvitedFriend {
  id: string;
  name: string;
  status: 'Pending' | 'Signed Up' | 'Activated';
  date: string;
  rewardGranted: boolean;
}

export const ReferralCard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const studentId = 'student_kca_9281'; // Mock current student ID
  const referralLink = `https://kids.koneacademy.io/join?ref=${studentId}`;

  // Mock list of referred friends
  const [friends] = useState<InvitedFriend[]>([
    { id: '1', name: 'Liam Ansah', status: 'Activated', date: '2026-06-10', rewardGranted: true },
    { id: '2', name: 'Noah Mensah', status: 'Signed Up', date: '2026-06-14', rewardGranted: false },
    { id: '3', name: 'Olivia Osei', status: 'Pending', date: '2026-06-15', rewardGranted: false }
  ]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const activatedCount = friends.filter(f => f.status === 'Activated').length;
  const progressPercent = (activatedCount / 5) * 100;

  return (
    <div className="kca-referral-container">
      {/* 1. Header Banner */}
      <div className="kca-referral-header">
        <div className="kca-referral-icon-badge">
          <Gift className="gift-bounce" size={28} />
        </div>
        <div className="kca-referral-header-text">
          <h3>Share the Code Magic!</h3>
          <p>Invite your friends to Kone Kids. When they complete their first coding mission, you both unlock a Premium Module!</p>
        </div>
      </div>

      {/* 2. Referral Link Area */}
      <div className="kca-referral-link-section">
        <label className="kca-label">Your Unique Referral Link</label>
        <div className="kca-copy-wrapper">
          <input 
            type="text" 
            readOnly 
            value={referralLink} 
            className="kca-referral-input"
          />
          <button 
            onClick={handleCopy} 
            className={`kca-copy-btn ${copied ? 'copied' : ''}`}
            aria-label="Copy link"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* 3. Progress Milestones */}
      <div className="kca-referral-progress-section">
        <div className="kca-progress-header">
          <span>Active Referrals: <strong>{activatedCount} / 5</strong></span>
          <span className="kca-badge-milestone"><Star size={14} /> Next Reward: Super Coder Badge</span>
        </div>
        
        <div className="kca-progress-bar-bg">
          <div 
            className="kca-progress-bar-fill" 
            style={{ width: `${progressPercent}%` }}
          ></div>
          <div className="kca-milestone-marker m1" style={{ left: '20%' }} title="1 Friend: Premium Lesson"></div>
          <div className="kca-milestone-marker m2" style={{ left: '60%' }} title="3 Friends: Coding Cap"></div>
          <div className="kca-milestone-marker m3" style={{ left: '100%' }} title="5 Friends: Super Coder Badge"></div>
        </div>
        <div className="kca-progress-labels">
          <span>1 Friend</span>
          <span>3 Friends</span>
          <span>5 Friends</span>
        </div>
      </div>

      {/* 4. Friends Invited Tracker */}
      <div className="kca-referral-tracker-section">
        <h4 className="tracker-title">
          <Users size={16} /> 
          <span>Invited Friends ({friends.length})</span>
        </h4>
        <div className="friends-list">
          {friends.map(friend => (
            <div key={friend.id} className="friend-row">
              <div className="friend-info">
                <span className="friend-name">{friend.name}</span>
                <span className="friend-date">Invited on {friend.date}</span>
              </div>
              <div className="friend-status-badge">
                <span className={`status-dot ${friend.status.toLowerCase().replace(' ', '-')}`}></span>
                <span className="status-text">{friend.status}</span>
                {friend.rewardGranted && (
                  <span className="reward-tag" title="1 Premium Token Awarded">
                    🎁 Token Sent
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferralCard;
