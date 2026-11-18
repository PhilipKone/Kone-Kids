import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { KidsCourse, KidsLesson } from '../data/kidsCourses';
import {
  Clock,
  Award,
  Code,
  Play,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Mail,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { sounds } from '../utils/sounds';
import {
  CodingLabIcon,
  RoboticsLabIcon,
  AIStudioIcon,
  ScrollCertIcon,
  CubeBlockIcon
} from './PlayfulIcons';
import EnrollmentModal from './EnrollmentModal';
import CertificateModal from './CertificateModal';

interface KidsCourseSyllabusProps {
  course: KidsCourse;
  hub?: 'coding' | 'robotics' | 'ai';
  onBackToMap?: () => void;
}

const KidsCourseSyllabus: React.FC<KidsCourseSyllabusProps> = ({
  course,
  hub = 'coding'
}) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    [course.modules[0]?.id || '']: true
  });
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleModule = (moduleId: string) => {
    sounds.playClick();
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const handleLaunchLesson = (lesson: KidsLesson) => {
    sounds.playClick();
    if (lesson.missionId) {
      navigate(`/${hub}/mission/${lesson.missionId}?from=courses`, { state: { fromSyllabus: true } });
    } else {
      navigate('/playground?from=courses', { state: { fromSyllabus: true } });
    }
  };

  const renderHubIcon = (size: number) => {
    if (hub === 'robotics') return <RoboticsLabIcon size={size} />;
    if (hub === 'ai') return <AIStudioIcon size={size} />;
    return <CodingLabIcon size={size} />;
  };

  const cardSurface = isDark ? 'rgba(22, 30, 46, 0.72)' : '#ffffff';
  const subtleBorder = isDark ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0';
  const mutedBg = isDark ? 'rgba(15, 23, 42, 0.45)' : '#f8fafc';

  const metaItems = [
    { label: 'Age Group', value: course.ageGroup },
    { label: 'Duration', value: course.duration },
    { label: 'Weekly Pace', value: course.weeklyCommitment },
    { label: 'Credential', value: course.certificateTitle }
  ];

  const allExpanded = course.modules.length > 0 && course.modules.every(m => expandedModules[m.id]);

  return (
    <div
      className="kids-course-syllabus"
      style={{
        maxWidth: '940px',
        margin: '0 auto',
        padding: isMobile ? '0.75rem 0.5rem 5rem' : '1.25rem 1rem 6.5rem',
        fontFamily: '"Nunito", sans-serif',
        color: 'var(--kids-text)'
      }}
    >
      {/* 1. Spacious Course Header */}
      <header
        style={{
          background: cardSurface,
          border: `1px solid ${subtleBorder}`,
          borderRadius: '24px',
          padding: isMobile ? '1.5rem' : '2.25rem 2.5rem',
          marginBottom: '2.5rem',
          boxShadow: isDark ? '0 16px 40px rgba(0,0,0,0.28)' : '0 10px 30px rgba(15, 23, 42, 0.05)'
        }}
      >
        {/* Eyebrow Line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            flexWrap: 'wrap',
            marginBottom: '1rem',
            fontSize: '0.78rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            color: 'var(--kids-text-muted)'
          }}
        >
          <span style={{ color: course.color }}>{course.code}</span>
          <span>•</span>
          <span style={{ textTransform: 'uppercase' }}>{course.level}</span>
          <span>•</span>
          <span>Official STEM Curriculum</span>
        </div>

        {/* Title Row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.85rem' }}>
          <div
            style={{
              width: isMobile ? '48px' : '56px',
              height: isMobile ? '48px' : '56px',
              borderRadius: '16px',
              background: `${course.color}15`,
              border: `1px solid ${course.color}30`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '2px'
            }}
          >
            {renderHubIcon(isMobile ? 28 : 34)}
          </div>
          <div>
            <h1
              style={{
                margin: 0,
                fontFamily: '"Baloo 2", cursive',
                fontSize: isMobile ? '1.75rem' : '2.35rem',
                lineHeight: 1.15,
                color: 'var(--kids-text)'
              }}
            >
              {course.title}
            </h1>
            <p
              style={{
                margin: '0.5rem 0 0',
                fontSize: isMobile ? '0.98rem' : '1.08rem',
                lineHeight: 1.55,
                color: 'var(--kids-text-muted)',
                maxWidth: '720px'
              }}
            >
              {course.tagline}
            </p>
          </div>
        </div>

        {/* Clean Inline Metadata Strip (replaces 4 heavy boxes) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '1rem' : '0',
            padding: '1.15rem 0',
            margin: '1.5rem 0',
            borderTop: `1px solid ${subtleBorder}`,
            borderBottom: `1px solid ${subtleBorder}`
          }}
        >
          {metaItems.map((item, idx) => (
            <div
              key={item.label}
              style={{
                paddingLeft: !isMobile && idx > 0 ? '1.25rem' : 0,
                paddingRight: !isMobile && idx < metaItems.length - 1 ? '1rem' : 0,
                borderLeft: !isMobile && idx > 0 ? `1px solid ${subtleBorder}` : 'none'
              }}
            >
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--kids-text-muted)',
                  marginBottom: '0.2rem'
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  color: 'var(--kids-text)',
                  lineHeight: 1.35
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Focused Action Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.85rem'
          }}
        >
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', width: isMobile ? '100%' : 'auto' }}>
            <button
              onClick={() => { sounds.playClick(); setShowEnrollModal(true); }}
              style={{
                flex: isMobile ? 1 : 'initial',
                justifyContent: 'center',
                background: course.color,
                color: '#ffffff',
                border: 'none',
                padding: '0.78rem 1.45rem',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '0.94rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: `0 6px 18px ${course.color}35`
              }}
            >
              <Award size={17} />
              Enrol Student
            </button>

            <button
              onClick={() => { sounds.playClick(); navigate('/playground'); }}
              style={{
                flex: isMobile ? 1 : 'initial',
                justifyContent: 'center',
                background: mutedBg,
                color: 'var(--kids-text)',
                border: `1px solid ${subtleBorder}`,
                padding: '0.78rem 1.3rem',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '0.92rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Code size={17} style={{ color: course.color }} />
              Open IDE Sandbox
            </button>
          </div>

          <button
            onClick={() => { sounds.playClick(); setShowCertModal(true); }}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#f59e0b',
              padding: '0.45rem 0.25rem',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem'
            }}
          >
            <ScrollCertIcon size={18} />
            Preview Sample Diploma
          </button>
        </div>
      </header>

      {/* 2. Course Overview & Outcomes (Clean Editorial Split) */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.15fr 1fr',
          gap: '2rem',
          marginBottom: '3rem'
        }}
      >
        {/* Left: Overview & Skills */}
        <div
          style={{
            background: cardSurface,
            border: `1px solid ${subtleBorder}`,
            borderRadius: '20px',
            padding: isMobile ? '1.4rem' : '1.75rem'
          }}
        >
          <h2
            style={{
              margin: '0 0 0.85rem',
              fontFamily: '"Baloo 2", cursive',
              fontSize: '1.3rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <BookOpen size={19} style={{ color: course.color }} />
            About This Track
          </h2>

          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.65,
              color: 'var(--kids-text-muted)',
              margin: '0 0 1.25rem'
            }}
          >
            {course.overview}
          </p>

          <p
            style={{
              fontSize: '0.86rem',
              lineHeight: 1.5,
              color: 'var(--kids-text-muted)',
              paddingTop: '0.9rem',
              borderTop: `1px solid ${subtleBorder}`,
              margin: '0 0 1.25rem'
            }}
          >
            <strong style={{ color: 'var(--kids-text)' }}>Prerequisites: </strong>
            {course.prerequisites}
          </p>

          <div>
            <div
              style={{
                fontSize: '0.74rem',
                fontWeight: 800,
                letterSpacing: '0.05em',
                color: 'var(--kids-text-muted)',
                textTransform: 'uppercase',
                marginBottom: '0.6rem'
              }}
            >
              Core Skills Developed
            </div>
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
              {course.skills.map((skill, idx) => (
                <span
                  key={idx}
                  style={{
                    background: `${course.color}12`,
                    color: course.color,
                    padding: '0.32rem 0.72rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Learning Outcomes & Capstone */}
        <div
          style={{
            background: cardSurface,
            border: `1px solid ${subtleBorder}`,
            borderRadius: '20px',
            padding: isMobile ? '1.4rem' : '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}
        >
          <div>
            <h2
              style={{
                margin: '0 0 1rem',
                fontFamily: '"Baloo 2", cursive',
                fontSize: '1.3rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Sparkles size={19} style={{ color: '#f59e0b' }} />
              What Students Master
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {course.learningOutcomes.map((outcome, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={17} style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.92rem', lineHeight: 1.48, color: 'var(--kids-text)' }}>
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              paddingTop: '1.1rem',
              borderTop: `1px solid ${subtleBorder}`
            }}
          >
            <div
              style={{
                fontSize: '0.73rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: course.color,
                marginBottom: '0.3rem'
              }}
            >
              Capstone Project • {course.capstoneProject.previewBadge}
            </div>
            <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--kids-text)', marginBottom: '0.25rem' }}>
              {course.capstoneProject.title}
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: 1.45, color: 'var(--kids-text-muted)' }}>
              {course.capstoneProject.description}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Modules & Interactive Labs Accordion */}
      <section style={{ marginBottom: '3rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '1.25rem',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                fontFamily: '"Baloo 2", cursive',
                fontSize: isMobile ? '1.45rem' : '1.75rem',
                color: 'var(--kids-text)'
              }}
            >
              Course Modules & Interactive Labs
            </h2>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.92rem', color: 'var(--kids-text-muted)' }}>
              Select any module to inspect weekly lessons and launch hands-on labs directly in the IDE.
            </p>
          </div>

          {course.modules.length > 0 && (
            <button
              onClick={() => {
                sounds.playClick();
                const next: Record<string, boolean> = {};
                course.modules.forEach(m => { next[m.id] = !allExpanded; });
                setExpandedModules(next);
              }}
              style={{
                background: 'transparent',
                border: `1px solid ${subtleBorder}`,
                borderRadius: '10px',
                padding: '0.42rem 0.85rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--kids-text-muted)',
                cursor: 'pointer'
              }}
            >
              {allExpanded ? 'Collapse All' : 'Expand All'}
            </button>
          )}
        </div>

        {course.modules.length === 0 ? (
          <div
            style={{
              background: cardSurface,
              border: `1px solid ${subtleBorder}`,
              borderRadius: '18px',
              padding: '2.5rem',
              textAlign: 'center',
              color: 'var(--kids-text-muted)'
            }}
          >
            Detailed module lessons are being finalized for this track.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {course.modules.map((mod, modIdx) => {
              const isOpen = !!expandedModules[mod.id];
              return (
                <div
                  key={mod.id}
                  style={{
                    background: cardSurface,
                    border: `1px solid ${isOpen ? `${course.color}55` : subtleBorder}`,
                    borderRadius: '18px',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  {/* Module Header */}
                  <button
                    type="button"
                    onClick={() => toggleModule(mod.id)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      border: 'none',
                      padding: isMobile ? '1.1rem 1.15rem' : '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      cursor: 'pointer',
                      background: isOpen ? (isDark ? 'rgba(255,255,255,0.02)' : '#fafbfc') : 'transparent',
                      color: 'inherit'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '10px',
                          background: `${course.color}18`,
                          color: course.color,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 900,
                          fontSize: '0.9rem',
                          flexShrink: 0
                        }}
                      >
                        {modIdx + 1}
                      </span>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                          <h3
                            style={{
                              margin: 0,
                              fontFamily: '"Baloo 2", cursive',
                              fontSize: isMobile ? '1.08rem' : '1.2rem',
                              color: 'var(--kids-text)'
                            }}
                          >
                            {mod.title}
                          </h3>
                          <span
                            style={{
                              fontSize: '0.76rem',
                              fontWeight: 700,
                              color: 'var(--kids-text-muted)'
                            }}
                          >
                            • {mod.duration}
                          </span>
                        </div>
                        <p style={{ margin: '0.2rem 0 0', fontSize: '0.86rem', color: 'var(--kids-text-muted)' }}>
                          {mod.description}
                        </p>
                      </div>
                    </div>

                    <ChevronDown
                      size={20}
                      style={{
                        color: 'var(--kids-text-muted)',
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                      }}
                    />
                  </button>

                  {/* Clean Hairline-Separated Lesson List */}
                  {isOpen && (
                    <div style={{ borderTop: `1px solid ${subtleBorder}`, padding: isMobile ? '0.25rem 1.15rem' : '0.25rem 1.5rem' }}>
                      {mod.lessons.map((lesson, lesIdx) => {
                        const isLast = lesIdx === mod.lessons.length - 1;
                        return (
                          <div
                            key={lesson.id}
                            style={{
                              padding: '1.15rem 0',
                              borderBottom: isLast ? 'none' : `1px solid ${subtleBorder}`,
                              display: 'flex',
                              flexDirection: isMobile ? 'column' : 'row',
                              alignItems: isMobile ? 'stretch' : 'center',
                              justifyContent: 'space-between',
                              gap: '1rem'
                            }}
                          >
                            <div style={{ flex: 1 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: course.color }}>
                                  Lab {modIdx + 1}.{lesIdx + 1}
                                </span>
                                <span
                                  style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--kids-text-muted)',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.25rem'
                                  }}
                                >
                                  <Clock size={12} /> {lesson.duration}
                                </span>
                              </div>

                              <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.98rem', fontWeight: 800, color: 'var(--kids-text)' }}>
                                {lesson.title}
                              </h4>

                              <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--kids-text-muted)', lineHeight: 1.45 }}>
                                {lesson.description}
                              </p>

                              {lesson.blocksFocused.length > 0 && (
                                <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginTop: '0.55rem' }}>
                                  {lesson.blocksFocused.map((b, bIdx) => (
                                    <span
                                      key={bIdx}
                                      style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.3rem',
                                        fontSize: '0.74rem',
                                        fontWeight: 700,
                                        color: 'var(--kids-text-muted)',
                                        background: mutedBg,
                                        border: `1px solid ${subtleBorder}`,
                                        padding: '0.15rem 0.55rem',
                                        borderRadius: '6px'
                                      }}
                                    >
                                      <CubeBlockIcon size={11} />
                                      {b}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            <button
                              onClick={() => handleLaunchLesson(lesson)}
                              style={{
                                background: mutedBg,
                                color: 'var(--kids-text)',
                                border: `1px solid ${subtleBorder}`,
                                padding: '0.55rem 1rem',
                                borderRadius: '10px',
                                fontWeight: 800,
                                fontSize: '0.82rem',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.4rem',
                                flexShrink: 0
                              }}
                            >
                              <Play size={13} style={{ color: course.color }} fill={course.color} />
                              {lesson.missionId ? 'Launch Lab' : 'Practice'}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. Unified Credential & Admissions Footer Card */}
      <footer
        style={{
          background: cardSurface,
          border: `1px solid ${subtleBorder}`,
          borderRadius: '22px',
          padding: isMobile ? '1.5rem' : '2.25rem',
          boxShadow: isDark ? '0 16px 40px rgba(0,0,0,0.25)' : '0 10px 30px rgba(15, 23, 42, 0.04)'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            paddingBottom: '1.75rem',
            marginBottom: '1.75rem',
            borderBottom: `1px solid ${subtleBorder}`
          }}
        >
          <div style={{ maxWidth: '580px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#f59e0b', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
              ACCREDITED KONE ACADEMY CREDENTIAL
            </div>
            <h3 style={{ margin: '0 0 0.35rem', fontFamily: '"Baloo 2", cursive', fontSize: isMobile ? '1.25rem' : '1.5rem' }}>
              Earn the {course.certificateTitle}
            </h3>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--kids-text-muted)', lineHeight: 1.55 }}>
              Complete the labs and capstone showcase to unlock a verified parchment diploma with your unique credential ID.
            </p>
          </div>

          <button
            onClick={() => { sounds.playClick(); setShowCertModal(true); }}
            style={{
              background: '#fef3c7',
              color: '#92400e',
              border: '1px solid #fde68a',
              padding: '0.72rem 1.25rem',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              flexShrink: 0
            }}
          >
            <ScrollCertIcon size={18} />
            Preview Diploma
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            justifyContent: 'space-between',
            gap: '1.25rem'
          }}
        >
          <div>
            <h4 style={{ margin: '0 0 0.25rem', fontFamily: '"Baloo 2", cursive', fontSize: '1.25rem' }}>
              Ready to Begin?
            </h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--kids-text-muted)' }}>
              Join a weekend cohort, book 1-on-1 mentorship, or request school curriculum licensing.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexDirection: isMobile ? 'column' : 'row', flexShrink: 0 }}>
            <button
              onClick={() => { sounds.playClick(); setShowEnrollModal(true); }}
              style={{
                justifyContent: 'center',
                background: course.color,
                color: '#ffffff',
                border: 'none',
                padding: '0.78rem 1.35rem',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem'
              }}
            >
              <Mail size={16} />
              Enrol Online
            </button>

            <a
              href="https://wa.me/233551993820?text=Hello%20Kone%20Academy!%20I'm%20interested%20in%20enrolling%20in%20the%20Kids%20Course:%20"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                justifyContent: 'center',
                background: '#16a34a',
                color: '#ffffff',
                border: 'none',
                padding: '0.78rem 1.35rem',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '0.9rem',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem'
              }}
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showEnrollModal && (
        <EnrollmentModal
          isOpen={showEnrollModal}
          onClose={() => setShowEnrollModal(false)}
          programTitle={course.title}
        />
      )}

      {showCertModal && (
        <CertificateModal
          isOpen={showCertModal}
          onClose={() => setShowCertModal(false)}
          defaultPathway={course.title}
        />
      )}
    </div>
  );
};

export default KidsCourseSyllabus;
