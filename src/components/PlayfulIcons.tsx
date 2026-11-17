import React from 'react';
let _seq = 0;
const nextUid = () => String(++_seq);
interface IconProps { size?: number; className?: string; }

export const stripEmoji = (text: string): string =>
  text.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu, '').replace(/\s{2,}/g, ' ').trim();

export const CodingLabIcon: React.FC<IconProps> = ({ size = 20, className }) => {
  const u = nextUid();
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <defs><linearGradient id={'cb-'+u} x1="3" y1="5" x2="29" y2="27" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#38bdf8"/><stop offset="100%" stopColor="#0284c7"/></linearGradient></defs>
      <rect x="3" y="5" width="26" height="22" rx="7" fill={'url(#cb-'+u+')'}/>
      <circle cx="8.5" cy="10" r="1.3" fill="#fde047"/><circle cx="12.5" cy="10" r="1.3" fill="#4ade80"/>
      <path d="M12.5 16L9 19.2L12.5 22.4M19.5 16L23 19.2L19.5 22.4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.2 15L14.8 23.4" stroke="#fde047" strokeWidth="2.3" strokeLinecap="round"/>
    </svg>
  );
};

export const RoboticsLabIcon: React.FC<IconProps> = ({ size = 20, className }) => {
  const u = nextUid();
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <defs><linearGradient id={'rb-'+u} x1="5" y1="9" x2="27" y2="28" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#34d399"/><stop offset="100%" stopColor="#059669"/></linearGradient></defs>
      <path d="M16 5.5V9.5" stroke="#059669" strokeWidth="2.6" strokeLinecap="round"/><circle cx="16" cy="4.5" r="2.7" fill="#f97316"/>
      <rect x="2.5" y="15" width="3.5" height="7" rx="1.75" fill="#fb923c"/><rect x="26" y="15" width="3.5" height="7" rx="1.75" fill="#fb923c"/>
      <rect x="5.5" y="9.5" width="21" height="18" rx="6.5" fill={'url(#rb-'+u+')'}/><rect x="8.5" y="13.5" width="15" height="8" rx="4" fill="#0f172a"/>
      <circle cx="12.5" cy="17.5" r="1.8" fill="#38bdf8"/><circle cx="19.5" cy="17.5" r="1.8" fill="#38bdf8"/>
      <path d="M13 24.2H19" stroke="#a7f3d0" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  );
};

export const AIStudioIcon: React.FC<IconProps> = ({ size = 20, className }) => {
  const u = nextUid();
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <defs><linearGradient id={'ai-'+u} x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#c084fc"/><stop offset="100%" stopColor="#7c3aed"/></linearGradient></defs>
      <rect x="4" y="4" width="24" height="24" rx="8" fill={'url(#ai-'+u+')'}/>
      <path d="M16 8.5L17.9 14.1L23.5 16L17.9 17.9L16 23.5L14.1 17.9L8.5 16L14.1 14.1L16 8.5Z" fill="#fff"/>
      <circle cx="22.8" cy="9.5" r="1.8" fill="#fde047"/><circle cx="9.5" cy="22.5" r="1.4" fill="#38bdf8"/>
    </svg>
  );
};

export const SparkleStarIcon: React.FC<IconProps> = ({ size = 18, className }) => {
  const u = nextUid();
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <defs><linearGradient id={'st-'+u} x1="6" y1="4" x2="26" y2="28" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#fde047"/><stop offset="55%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#ea580c"/></linearGradient></defs>
      <path d="M15.5 3.5L18.4 12.1L27 15L18.4 17.9L15.5 26.5L12.6 17.9L4 15L12.6 12.1L15.5 3.5Z" fill={'url(#st-'+u+')'}/>
      <path d="M24.5 4.5L25.5 7.3L28.3 8.3L25.5 9.3L24.5 12.1L23.5 9.3L20.7 8.3L23.5 7.3L24.5 4.5Z" fill="#38bdf8"/>
    </svg>
  );
};

export const RocketLaunchIcon: React.FC<IconProps> = ({ size = 22, className }) => {
  const u = nextUid();
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <defs><linearGradient id={'rk-'+u} x1="8" y1="4" x2="25" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#38bdf8"/><stop offset="100%" stopColor="#0284c7"/></linearGradient></defs>
      <path d="M9.5 17.5L5 19.5L8.5 23.5L11.5 21.5M14.5 22.5L12.5 27L8.5 23.5L10.5 20.5" fill="#f97316"/>
      <path d="M27.5 4.5C21.5 4.5 14.5 8.2 10.2 14.2L17.8 21.8C23.8 17.5 27.5 10.5 27.5 4.5Z" fill={'url(#rk-'+u+')'}/>
      <path d="M27.5 4.5C24.5 4.5 21.4 5.4 18.8 7L25 13.2C26.6 10.6 27.5 7.5 27.5 4.5Z" fill="#ea580c"/>
      <circle cx="19" cy="13" r="2.7" fill="#fff"/><circle cx="19" cy="13" r="1.4" fill="#0f172a"/>
    </svg>
  );
};
export const TrophyCupIcon: React.FC<IconProps> = ({ size = 28, className }) => {
  const u = nextUid();
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <defs><linearGradient id={'cp-'+u} x1="7" y1="4" x2="25" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#fde047"/><stop offset="100%" stopColor="#d97706"/></linearGradient></defs>
      <path d="M9 7H5.5C4.4 7 3.5 7.9 3.5 9C3.5 12.2 5.8 14.5 9 14.5M23 7H26.5C27.6 7 28.5 7.9 28.5 9C28.5 12.2 26.2 14.5 23 14.5" stroke="#f59e0b" strokeWidth="2.4" strokeLinecap="round"/>
      <path d="M8.5 5H23.5V13.5C23.5 17.6 20.1 21 16 21C11.9 21 8.5 17.6 8.5 13.5V5Z" fill={'url(#cp-'+u+')'}/>
      <path d="M16 9L17.2 11.5L20 11.9L18 13.8L18.5 16.5L16 15.2L13.5 16.5L14 13.8L12 11.9L14.8 11.5L16 9Z" fill="#fff"/>
      <rect x="14" y="20.5" width="4" height="4.5" fill="#d97706"/><rect x="10" y="24.5" width="12" height="3.5" rx="1.75" fill="#0f172a"/>
    </svg>
  );
};

export const ScrollCertIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <rect x="5" y="5" width="22" height="22" rx="6" fill="#fff" stroke="#0284c7" strokeWidth="2.2"/>
    <path d="M10 11H22M10 15.5H17" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="20.5" cy="19.5" r="3.5" fill="#f97316"/><path d="M19 22.5L18.2 26.5L20.5 25.2L22.8 26.5L22 22.5" fill="#ea580c"/>
  </svg>
);

export const StoryBookIcon: React.FC<IconProps> = ({ size = 19, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M4.5 8.5C4.5 7.1 5.6 6 7 6H14.5C15.3 6 16 6.7 16 7.5V25.5C16 24.7 15.3 24 14.5 24H7C5.6 24 4.5 22.9 4.5 21.5V8.5Z" fill="#10b981"/>
    <path d="M27.5 8.5C27.5 7.1 26.4 6 25 6H17.5C16.7 6 16 6.7 16 7.5V25.5C16 24.7 16.7 24 17.5 24H25C26.4 24 27.5 22.9 27.5 21.5V8.5Z" fill="#0ea5e9"/>
    <path d="M8 11H13M8 15H13M19 11H24M19 15H24" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const GlobeNetworkIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <circle cx="16" cy="16" r="11.5" fill="#0ea5e9"/><ellipse cx="16" cy="16" rx="5.2" ry="11.5" stroke="#bae6fd" strokeWidth="1.9"/>
    <path d="M4.8 16H27.2" stroke="#bae6fd" strokeWidth="1.9"/><circle cx="24.5" cy="8.5" r="2.3" fill="#fb923c"/>
  </svg>
);

export const BackpackLoginIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M12.5 8V6.5C12.5 4.8 13.8 3.5 15.5 3.5H16.5C18.2 3.5 19.5 4.8 19.5 6.5V8" stroke="#c2410c" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="6.5" y="7.5" width="19" height="21" rx="7" fill="#f97316"/><rect x="9.5" y="17" width="13" height="8.5" rx="3.5" fill="#0ea5e9"/>
    <path d="M12 13.5H20" stroke="#fed7aa" strokeWidth="2.2" strokeLinecap="round"/><circle cx="16" cy="19.8" r="1.4" fill="#fde047"/>
  </svg>
);

export const StreakFlameIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M17.5 3.5C17.5 3.5 24.5 9.5 24.5 17.8C24.5 23.8 20.5 28.5 15.5 28.5C10.5 28.5 7.5 24.3 7.5 19.2C7.5 15.4 9.8 12.2 11.4 10.6C11.4 10.6 11.1 13.5 13 14.5C12.5 10.2 15.2 6.2 17.5 3.5Z" fill="#f97316"/>
    <path d="M15.8 16.5C15.8 16.5 19 19.2 19 22.4C19 24.7 17.4 26.5 15.5 26.5C13.6 26.5 12.2 24.9 12.2 22.8C12.2 20.7 14 18.4 15.8 16.5Z" fill="#fde047"/>
  </svg>
);

export const DropMascotMiniIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M16 3.5C16 3.5 7 13.5 7 20C7 25 11 28.5 16 28.5C21 28.5 25 25 25 20C25 13.5 16 3.5 16 3.5Z" fill="#0ea5e9"/>
    <ellipse cx="12.5" cy="16.5" rx="1.6" ry="3.2" transform="rotate(-22 12.5 16.5)" fill="#fff" fillOpacity="0.65"/>
  </svg>
);

export const QuestLockIcon: React.FC<IconProps> = ({ size = 12, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M7 10V7.5C7 4.7 9.2 2.5 12 2.5C14.8 2.5 17 4.7 17 7.5V10" stroke="#64748b" strokeWidth="2.4" strokeLinecap="round"/>
    <rect x="4.5" y="10" width="15" height="11.5" rx="3.5" fill="#64748b"/><circle cx="12" cy="15.5" r="1.6" fill="#f8fafc"/>
  </svg>
);

export const QuestBadgeArt: React.FC<{ badge: { id?: string; name?: string; icon: string }; size?: number }> = ({ badge, size = 58 }) => {
  const k = ((badge.id || '') + ' ' + (badge.name || '') + ' ' + (badge.icon || '')).toLowerCase();
  let art: React.ReactNode = <SparkleStarIcon size={34} />;
  let ring = 'linear-gradient(135deg, #e0f2fe 0%, #fef3c7 100%)';
  if (k.includes('hello') || k.includes('🧠')) { art = <AIStudioIcon size={34} />; ring = 'linear-gradient(135deg, #f3e8ff 0%, #e0e7ff 100%)'; }
  else if (k.includes('explorer') || k.includes('🚀')) { art = <RocketLaunchIcon size={34} />; ring = 'linear-gradient(135deg, #e0f2fe 0%, #ffedd5 100%)'; }
  else if (k.includes('app') || k.includes('📱')) { art = <svg width={34} height={34} viewBox="0 0 32 32" fill="none"><rect x="8.5" y="3" width="15" height="26" rx="4.5" fill="#0284c7"/><rect x="10.5" y="6" width="11" height="18.5" rx="2.5" fill="#0f172a"/><rect x="12" y="8" width="4" height="4" rx="1" fill="#38bdf8"/><rect x="17" y="8" width="3" height="4" rx="1" fill="#fb923c"/><rect x="12" y="13.5" width="8" height="3.5" rx="1" fill="#34d399"/></svg>; }
  else if (k.includes('web') || k.includes('🌐')) { art = <GlobeNetworkIcon size={34} />; ring = 'linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%)'; }
  else if (k.includes('game') || k.includes('🎮')) { art = <svg width={34} height={34} viewBox="0 0 32 32" fill="none"><rect x="3.5" y="9" width="25" height="14.5" rx="7.25" fill="#a855f7"/><path d="M10.5 13.5V19M7.8 16.25H13.2" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"/><circle cx="21.5" cy="14.5" r="1.5" fill="#fde047"/><circle cx="24" cy="17.5" r="1.5" fill="#38bdf8"/></svg>; ring = 'linear-gradient(135deg, #fae8ff 0%, #fce7f3 100%)'; }
  else if (k.includes('robot') || k.includes('🦾')) { art = <RoboticsLabIcon size={34} />; ring = 'linear-gradient(135deg, #d1fae5 0%, #e0f2fe 100%)'; }
  else if (k.includes('data') || k.includes('📊')) { art = <svg width={34} height={34} viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="7" fill="#0f172a"/><rect x="8.5" y="17" width="3.6" height="6.5" rx="1.5" fill="#38bdf8"/><rect x="14.2" y="13" width="3.6" height="10.5" rx="1.5" fill="#34d399"/><rect x="19.9" y="9" width="3.6" height="14.5" rx="1.5" fill="#fb923c"/></svg>; ring = 'linear-gradient(135deg, #e2e8f0 0%, #d1fae5 100%)'; }
  else if (k.includes('agent') || k.includes('🕵')) { art = <svg width={34} height={34} viewBox="0 0 32 32" fill="none"><circle cx="14.5" cy="14.5" r="8.5" fill="#e0f2fe" stroke="#0284c7" strokeWidth="3"/><path d="M21 21L27 27" stroke="#f97316" strokeWidth="3.6" strokeLinecap="round"/><circle cx="14.5" cy="14.5" r="3" fill="#f59e0b"/></svg>; }
  else if (k.includes('hero') || k.includes('👑')) { art = <svg width={34} height={34} viewBox="0 0 32 32" fill="none"><path d="M5 22L4 10L11.5 15L16 8L20.5 15L28 10L27 22H5Z" fill="#f59e0b"/><rect x="5" y="23" width="22" height="3.2" rx="1.6" fill="#ea580c"/><circle cx="16" cy="17.5" r="1.8" fill="#0ea5e9"/></svg>; ring = 'linear-gradient(135deg, #fef9c3 0%, #ffedd5 100%)'; }
  else if (k.includes('welcome') || k.includes('🎈')) { art = <svg width={34} height={34} viewBox="0 0 32 32" fill="none"><ellipse cx="12.5" cy="12" rx="6.5" ry="8" fill="#f97316"/><ellipse cx="20.5" cy="14" rx="5.8" ry="7.2" fill="#0ea5e9"/><path d="M12.5 20V28M20.5 21.2V28.5" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round"/></svg>; ring = 'linear-gradient(135deg, #ffedd5 0%, #e0f2fe 100%)'; }
  else if (k.includes('streak') || k.includes('🔥')) { art = <StreakFlameIcon size={34} />; ring = 'linear-gradient(135deg, #fef3c7 0%, #fee2e2 100%)'; }
  return <div style={{ width: size, height: size, borderRadius: '20px', background: ring, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 2px 6px rgba(255,255,255,0.85), 0 6px 14px rgba(15, 23, 42, 0.08)' }}>{art}</div>;
};
export const SunDayIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <circle cx="16" cy="16" r="6.5" fill="#f59e0b" />
    <path d="M16 3V6.5M16 25.5V29M3 16H6.5M25.5 16H29M6.8 6.8L9.3 9.3M22.7 22.7L25.2 25.2M25.2 6.8L22.7 9.3M9.3 22.7L6.8 25.2" stroke="#fbbf24" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);

export const MoonNightIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M22.5 21.5C16.5 21.5 11.5 16.5 11.5 10.5C11.5 8.1 12.3 5.9 13.6 4.1C8.3 5.2 4.5 9.9 4.5 15.5C4.5 22.1 9.9 27.5 16.5 27.5C21.5 27.5 25.8 24.4 27.6 20.1C26 21 24.3 21.5 22.5 21.5Z" fill="#6366f1" />
    <circle cx="23.5" cy="8.5" r="1.8" fill="#fde047" />
  </svg>
);

export const ShareLinkIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M11 16L21 9.5M11 16L21 22.5" stroke="#0284c7" strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="22" cy="9" r="4" fill="#38bdf8" /><circle cx="9.5" cy="16" r="4.2" fill="#f97316" /><circle cx="22" cy="23" r="4" fill="#10b981" />
  </svg>
);

export const CloudSyncIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M9.5 24.5H23C26 24.5 28.5 22.1 28.5 19.1C28.5 16.3 26.4 14 23.7 13.8C22.7 9.9 19.2 7 15 7C10.1 7 6.1 10.9 6 15.8C4.2 16.6 3 18.4 3 20.5C3 22.7 4.8 24.5 7 24.5H9.5Z" fill="#38bdf8" />
    <path d="M12.5 17.5L15.2 20.2L20.5 14.8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SearchLensIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <circle cx="14" cy="14" r="8.5" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.8" />
    <path d="M20.5 20.5L27 27" stroke="#f97316" strokeWidth="3.4" strokeLinecap="round" />
  </svg>
);

export const TargetCenterIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <circle cx="16" cy="16" r="11.5" fill="#fee2e2" stroke="#ef4444" strokeWidth="2.5" />
    <circle cx="16" cy="16" r="6.5" fill="#fff" stroke="#ef4444" strokeWidth="2.3" />
    <circle cx="16" cy="16" r="2.6" fill="#f97316" />
  </svg>
);

export const BroomCleanIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M22.5 4.5L15 15" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
    <path d="M10.5 14.5L19 19L15.5 27.5L6.5 23L10.5 14.5Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="24.5" cy="12" r="1.5" fill="#38bdf8" /><circle cx="26" cy="17.5" r="1.2" fill="#a855f7" />
  </svg>
);

export const AlertWarnIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M16 4.5L28.5 26.5H3.5L16 4.5Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M16 12.5V18.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="16" cy="22.5" r="1.5" fill="#fff" />
  </svg>
);

export const BoltLightningIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M18 3.5L7.5 17.5H15.5L14 28.5L24.5 14.5H16.5L18 3.5Z" fill="#10b981" />
  </svg>
);

export const CubeBlockIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M16 4L27 10V22L16 28L5 22V10L16 4Z" fill="#f97316" />
    <path d="M16 4L27 10L16 16L5 10L16 4Z" fill="#fb923c" />
    <path d="M16 16V28L27 22V10L16 16Z" fill="#ea580c" />
  </svg>
);

export const CodeScrollIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <rect x="6" y="4" width="20" height="24" rx="4.5" fill="#38bdf8" />
    <path d="M11 11H21M11 16H19M11 21H16" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" />
  </svg>
);

export const PartyPopperIcon: React.FC<IconProps> = ({ size = 28, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M6 26L11.5 11.5L20.5 20.5L6 26Z" fill="#f97316" />
    <circle cx="21" cy="8" r="2.2" fill="#38bdf8" /><circle cx="26" cy="14" r="2" fill="#a855f7" /><circle cx="15" cy="6" r="1.8" fill="#fde047" />
  </svg>
);

export const IceCreamChillIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M11 16H21L16 28.5L11 16Z" fill="#f59e0b" />
    <circle cx="16" cy="12.5" r="6.5" fill="#ec4899" />
    <circle cx="16" cy="6" r="1.8" fill="#ef4444" />
  </svg>
);

export const GamepadIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <rect x="3.5" y="9" width="25" height="14.5" rx="7.25" fill="#a855f7" />
    <path d="M10.5 13.5V19M7.8 16.25H13.2" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="21.5" cy="14.5" r="1.5" fill="#fde047" /><circle cx="24" cy="17.5" r="1.5" fill="#38bdf8" />
  </svg>
);

export const PuzzlePieceIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M8 10H13.5C13.5 8.3 14.6 7 16 7C17.4 7 18.5 8.3 18.5 10H24V15.5C25.7 15.5 27 16.6 27 18C27 19.4 25.7 20.5 24 20.5V26H8V10Z" fill="#10b981" />
  </svg>
);
export const LightBulbIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M16 4C10.8 4 6.5 8.2 6.5 13.5C6.5 17 8.4 20 11.2 21.6V24H20.8V21.6C23.6 20 25.5 17 25.5 13.5C25.5 8.2 21.2 4 16 4Z" fill="#fde047" stroke="#f59e0b" strokeWidth="1.8" />
    <rect x="12" y="25" width="8" height="3.2" rx="1.6" fill="#64748b" />
  </svg>
);

export const HomeHouseIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M4 15.5L16 5.5L28 15.5" stroke="#f97316" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 14V26.5H24.5V14" fill="#38bdf8" />
    <rect x="13.5" y="18.5" width="5" height="8" rx="1.5" fill="#fde047" />
  </svg>
);

export const SchoolBuildingIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M4 14L16 6.5L28 14H4Z" fill="#ef4444" />
    <rect x="6" y="14" width="20" height="13" rx="2" fill="#f8fafc" stroke="#0284c7" strokeWidth="2" />
    <rect x="13.5" y="19" width="5" height="8" fill="#f97316" />
    <circle cx="16" cy="11" r="1.6" fill="#fde047" />
  </svg>
);

export const KeyAccessIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <circle cx="11" cy="16" r="6" fill="#fde047" stroke="#d97706" strokeWidth="2.2" />
    <circle cx="10" cy="16" r="2" fill="#fff" />
    <path d="M17 16H27.5M23.5 16V20.5M27 16V19.5" stroke="#f59e0b" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);

export const MicroscopeLabIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M18 6L12.5 16.5L16.5 18.5L22 8L18 6Z" fill="#0ea5e9" />
    <path d="M20 13.5C23.5 15.5 24.5 20.5 22 24.5H9" stroke="#0284c7" strokeWidth="2.6" strokeLinecap="round" />
    <rect x="7" y="24.5" width="18" height="3.2" rx="1.6" fill="#0f172a" />
  </svg>
);

export const PhoneCallIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M8.5 5.5H13L15 11L12.2 13.2C13.6 16.1 15.9 18.4 18.8 19.8L21 17L26.5 19V23.5C26.5 25.2 25.1 26.5 23.4 26.5C13.5 26 5.9 18.4 5.5 8.6C5.5 6.9 6.8 5.5 8.5 5.5Z" fill="#10b981" />
  </svg>
);

export const MailEnvelopeIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <rect x="4" y="7" width="24" height="18" rx="4" fill="#38bdf8" />
    <path d="M5.5 9L16 17L26.5 9" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M16 4C10.8 4 6.5 8.1 6.5 13.2C6.5 20.2 16 28.5 16 28.5C16 28.5 25.5 20.2 25.5 13.2C25.5 8.1 21.2 4 16 4Z" fill="#ef4444" />
    <circle cx="16" cy="13" r="3.5" fill="#fff" />
  </svg>
);

export const UsersGroupIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="11.5" r="4.2" fill="#0ea5e9" /><circle cx="21.5" cy="12.5" r="3.4" fill="#f97316" />
    <path d="M5 25C5 21.1 8.1 18 12 18C15.9 18 19 21.1 19 25" fill="#38bdf8" />
    <path d="M17.5 25C17.5 22 19.6 19.5 22.5 19.5C25.2 19.5 27.5 21.8 27.5 25" fill="#fb923c" />
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ size = 15, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <circle cx="16" cy="16" r="12" fill="#10b981" />
    <path d="M10.5 16.5L14.2 20.2L21.8 12.2" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HourglassIcon: React.FC<IconProps> = ({ size = 15, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M8 5H24M8 27H24M10 5C10 11 16 14 16 16C16 18 10 21 10 27M22 5C22 11 16 14 16 16C16 18 22 21 22 27" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const PencilEditIcon: React.FC<IconProps> = ({ size = 15, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M6 26L7.5 20.5L21.5 6.5L25.5 10.5L11.5 24.5L6 26Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const ClipboardCopyIcon: React.FC<IconProps> = ({ size = 15, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <rect x="7" y="6" width="18" height="22" rx="4" fill="#38bdf8" />
    <rect x="11.5" y="3.5" width="9" height="4.5" rx="2" fill="#0284c7" />
    <path d="M11 14H21M11 19H18" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const TrashBinIcon: React.FC<IconProps> = ({ size = 15, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M6.5 9H25.5M12 9V6.5C12 5.7 12.7 5 13.5 5H18.5C19.3 5 20 5.7 20 6.5V9" stroke="#ef4444" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M8.5 9L10 26.5H22L23.5 9H8.5Z" fill="#f87171" />
  </svg>
);

export const GoldCoinIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <circle cx="16" cy="16" r="12" fill="#fbbf24" stroke="#d97706" strokeWidth="2.2" />
    <circle cx="16" cy="16" r="7.5" stroke="#fef08a" strokeWidth="1.8" />
  </svg>
);
