import React, { useId } from 'react';
interface IconProps { size?: number; className?: string; }

export const stripEmoji = (text: string): string =>
  text.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu, '').replace(/\s{2,}/g, ' ').trim();

export const CodingLabIcon: React.FC<IconProps> = ({ size = 20, className }) => {
  const u = useId().replace(/:/g, '');
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
  const u = useId().replace(/:/g, '');
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
  const u = useId().replace(/:/g, '');
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
  const u = useId().replace(/:/g, '');
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <defs><linearGradient id={'st-'+u} x1="6" y1="4" x2="26" y2="28" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#fde047"/><stop offset="55%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#ea580c"/></linearGradient></defs>
      <path d="M15.5 3.5L18.4 12.1L27 15L18.4 17.9L15.5 26.5L12.6 17.9L4 15L12.6 12.1L15.5 3.5Z" fill={'url(#st-'+u+')'}/>
      <path d="M24.5 4.5L25.5 7.3L28.3 8.3L25.5 9.3L24.5 12.1L23.5 9.3L20.7 8.3L23.5 7.3L24.5 4.5Z" fill="#38bdf8"/>
    </svg>
  );
};

export const RocketLaunchIcon: React.FC<IconProps> = ({ size = 22, className }) => {
  const u = useId().replace(/:/g, '');
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
  const u = useId().replace(/:/g, '');
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
