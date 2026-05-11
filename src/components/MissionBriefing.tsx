import React from 'react';
import Mascot from './Mascot';
import { Play } from 'lucide-react';
import './MissionBriefing.css';

interface MissionBriefingProps {
  missionName: string;
  briefing: string;
  onStart: () => void;
}

export default function MissionBriefing({ missionName, briefing, onStart }: MissionBriefingProps) {
  return (
    <div className="mission-briefing-overlay">
      <div className="briefing-card glass-panel">
        <div className="briefing-mascot">
          <Mascot />
        </div>
        <div className="briefing-content">
          <div className="briefing-badge">MISSION BRIEFING</div>
          <h2 className="briefing-title">{missionName}</h2>
          <div className="briefing-text-box">
            <p className="briefing-text">{briefing}</p>
          </div>
          <button className="kids-button briefing-btn" onClick={onStart}>
            LET'S GO! <Play size={18} fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
}
