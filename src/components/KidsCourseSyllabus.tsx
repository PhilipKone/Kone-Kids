import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KidsCourse, KidsModule, KidsLesson } from '../data/kidsCourses';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  Award, 
  Code, 
  Sparkles, 
  Play, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  MessageCircle,
  Mail,
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { sounds } from '../utils/sounds';
import EnrollmentModal from './EnrollmentModal';
import CertificateModal from './CertificateModal';

interface KidsCourseSyllabusProps {
  course: KidsCourse;
  hub?: 'coding' | 'robotics' | 'ai';
  onBackToMap?: () => void;
}

const KidsCourseSyllabus: React.FC<KidsCourseSyllabusProps> = ({ 
  course, 
  hub = 'coding',
  onBackToMap 
}) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    [course.modules[0]?.id || '']: true
  });
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);

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
      navigate(`/${hub}/mission/${lesson.missionId}`);
    } else {
      navigate('/playground');
    }
  };

  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="kids-course-syllabus" style={{
      maxWidth: '1100px',
      margin: '0 auto',
      padding: isMobile ? '0.5rem 0.5rem 6rem' : '0.75rem 1rem 8rem',
      fontFamily: '"Nunito", sans-serif',
      color: 'var(--kids-text)'
    }}>

      {/* Hero Header Card */}
      <div style={{
        background: isDark 
          ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98))' 
          : 'linear-gradient(145deg, #ffffff, #f8fafc)',
        border: `2px solid ${course.color}40`,
        borderRadius: '24px',
        padding: isMobile ? '1.5rem' : '2.5rem',
        boxShadow: `0 20px 40px ${course.color}15`,
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '2rem'
      }}>
        {/* Glow Accent */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: course.color,
          filter: 'blur(90px)',
          opacity: 0.25,
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <span style={{
              background: `${course.color}20`,
              color: course.color,
              padding: '0.3rem 0.8rem',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '0.75rem',
              letterSpacing: '0.5px'
            }}>
              {course.code}
            </span>
            <span style={{
              background: 'rgba(34, 197, 94, 0.15)',
              color: '#22c55e',
              padding: '0.3rem 0.8rem',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '0.75rem'
            }}>
              🎓 OFFICIAL KONE KIDS COURSE
            </span>
            <span style={{
              background: 'rgba(168, 85, 247, 0.15)',
              color: '#c084fc',
              padding: '0.3rem 0.8rem',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '0.75rem'
            }}>
              {course.level.toUpperCase()}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: isMobile ? '2.2rem' : '3rem' }}>{course.icon}</span>
            <h1 style={{
              margin: 0,
              fontFamily: '"Baloo 2", cursive',
              fontSize: isMobile ? '1.8rem' : '2.6rem',
              lineHeight: 1.15,
              color: 'var(--kids-text)'
            }}>
              {course.title}
            </h1>
          </div>

          <p style={{
            fontSize: isMobile ? '1rem' : '1.15rem',
            color: 'var(--kids-text-muted)',
            marginTop: '0.5rem',
            marginBottom: '1.5rem',
            maxWidth: '800px',
            lineHeight: 1.5
          }}>
            {course.tagline}
          </p>

          {/* Quick Metrics Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '1rem',
            marginBottom: '1.75rem',
            padding: '1rem',
            background: isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.7)',
            borderRadius: '16px',
            border: '1px solid var(--kids-border)'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--kids-text-muted)', fontWeight: 700 }}>AGE GROUP</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: course.color, marginTop: '0.15rem' }}>
                👶 {course.ageGroup}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--kids-text-muted)', fontWeight: 700 }}>COURSE DURATION</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--kids-text)', marginTop: '0.15rem' }}>
                ⏱️ {course.duration.split('•')[0].trim()}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--kids-text-muted)', fontWeight: 700 }}>WEEKLY COMMITMENT</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--kids-text)', marginTop: '0.15rem' }}>
                📅 {course.weeklyCommitment}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--kids-text-muted)', fontWeight: 700 }}>CREDENTIAL</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#f59e0b', marginTop: '0.15rem' }}>
                📜 Accredited Diploma
              </div>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'stretch'
          }}>
            <button
              onClick={() => { sounds.playClick(); setShowEnrollModal(true); }}
              style={{
                width: isMobile ? '100%' : 'auto',
                justifyContent: 'center',
                background: `linear-gradient(135deg, ${course.color}, ${course.accentColor})`,
                color: 'white',
                border: 'none',
                padding: isMobile ? '0.85rem 1.25rem' : '0.85rem 1.8rem',
                borderRadius: '14px',
                fontWeight: 900,
                fontSize: isMobile ? '0.95rem' : '1rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                boxShadow: `0 8px 20px ${course.color}40`,
                transition: 'transform 0.2s ease'
              }}
            >
              <Award size={18} />
              Enrol Student / Get Quote
            </button>

            <button
              onClick={() => { sounds.playClick(); navigate('/playground'); }}
              style={{
                width: isMobile ? '100%' : 'auto',
                justifyContent: 'center',
                background: isDark ? 'rgba(30, 41, 59, 0.8)' : '#f1f5f9',
                color: 'var(--kids-text)',
                border: '1px solid var(--kids-border)',
                padding: isMobile ? '0.85rem 1.25rem' : '0.85rem 1.5rem',
                borderRadius: '14px',
                fontWeight: 800,
                fontSize: isMobile ? '0.95rem' : '1rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                transition: 'all 0.2s ease'
              }}
            >
              <Code size={18} style={{ color: course.color }} />
              Open Kids IDE Sandbox
            </button>

            <button
              onClick={() => { sounds.playClick(); setShowCertModal(true); }}
              style={{
                width: isMobile ? '100%' : 'auto',
                justifyContent: 'center',
                background: 'transparent',
                color: '#f59e0b',
                border: '1.5px dashed rgba(245, 158, 11, 0.5)',
                padding: isMobile ? '0.8rem 1rem' : '0.85rem 1.3rem',
                borderRadius: '14px',
                fontWeight: 800,
                fontSize: isMobile ? '0.9rem' : '0.95rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Award size={16} />
              Diploma Preview
            </button>
          </div>
        </div>
      </div>

      {/* Grid: Overview & Learning Outcomes */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr',
        gap: '1.5rem',
        marginBottom: '2.5rem'
      }}>
        {/* Overview Card */}
        <div style={{
          background: 'var(--kids-surface)',
          border: '1px solid var(--kids-border)',
          borderRadius: '20px',
          padding: '1.75rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
        }}>
          <h3 style={{
            margin: '0 0 1rem 0',
            fontFamily: '"Baloo 2", cursive',
            fontSize: '1.35rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <BookOpen size={20} style={{ color: course.color }} />
            Course Overview
          </h3>
          <p style={{
            fontSize: '0.95rem',
            lineHeight: 1.6,
            color: 'var(--kids-text-muted)',
            marginBottom: '1.25rem'
          }}>
            {course.overview}
          </p>

          <div style={{
            background: isDark ? 'rgba(15, 23, 42, 0.5)' : '#f8fafc',
            border: '1px solid var(--kids-border)',
            borderRadius: '12px',
            padding: '0.9rem',
            fontSize: '0.85rem',
            color: 'var(--kids-text-muted)'
          }}>
            <strong style={{ color: 'var(--kids-text)' }}>📌 Prerequisites: </strong>
            {course.prerequisites}
          </div>

          {/* Skills Chips */}
          <div style={{ marginTop: '1.25rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--kids-text-muted)', marginBottom: '0.5rem' }}>
              KEY SKILLS DEVELOPED
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {course.skills.map((skill, idx) => (
                <span
                  key={idx}
                  style={{
                    background: `${course.color}15`,
                    color: course.color,
                    padding: '0.3rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Outcomes Card */}
        <div style={{
          background: 'var(--kids-surface)',
          border: '1px solid var(--kids-border)',
          borderRadius: '20px',
          padding: '1.75rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
        }}>
          <h3 style={{
            margin: '0 0 1rem 0',
            fontFamily: '"Baloo 2", cursive',
            fontSize: '1.35rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Sparkles size={20} style={{ color: '#f59e0b' }} />
            What Students Will Achieve
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {course.learningOutcomes.map((outcome, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle size={18} style={{ color: '#22c55e', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.9rem', lineHeight: 1.45, color: 'var(--kids-text)' }}>
                  {outcome}
                </span>
              </div>
            ))}
          </div>

          {/* Capstone Box */}
          <div style={{
            marginTop: '1.5rem',
            background: `linear-gradient(135deg, ${course.color}15, ${course.color}05)`,
            border: `1.5px solid ${course.color}40`,
            borderRadius: '14px',
            padding: '1.1rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.4rem'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: course.color }}>
                {course.capstoneProject.previewBadge}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--kids-text-muted)' }}>
                Final Project
              </span>
            </div>
            <h4 style={{
              margin: '0 0 0.3rem 0',
              fontFamily: '"Baloo 2", cursive',
              fontSize: '1.1rem',
              color: 'var(--kids-text)'
            }}>
              {course.capstoneProject.title}
            </h4>
            <p style={{
              margin: 0,
              fontSize: '0.82rem',
              lineHeight: 1.4,
              color: 'var(--kids-text-muted)'
            }}>
              {course.capstoneProject.description}
            </p>
          </div>
        </div>
      </div>

      {/* Modules & Lessons Syllabus Accordion */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.25rem',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          <div>
            <h2 style={{
              margin: 0,
              fontFamily: '"Baloo 2", cursive',
              fontSize: isMobile ? '1.5rem' : '1.85rem',
              color: 'var(--kids-text)'
            }}>
              📚 Complete Course Syllabus & Interactive Labs
            </h2>
            <p style={{
              margin: '0.2rem 0 0',
              fontSize: '0.9rem',
              color: 'var(--kids-text-muted)'
            }}>
              Each lesson includes direct hands-on practice in the Kids IDE.
            </p>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              const allOpen = Object.values(expandedModules).every(v => v);
              const next: Record<string, boolean> = {};
              course.modules.forEach(m => { next[m.id] = !allOpen; });
              setExpandedModules(next);
            }}
            style={{
              background: 'transparent',
              border: '1px solid var(--kids-border)',
              borderRadius: '10px',
              padding: '0.4rem 0.9rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--kids-text-muted)',
              cursor: 'pointer'
            }}
          >
            {Object.values(expandedModules).every(v => v) ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        {course.modules.length === 0 ? (
          <div style={{
            background: 'var(--kids-surface)',
            border: '1px solid var(--kids-border)',
            borderRadius: '16px',
            padding: '2.5rem',
            textAlign: 'center',
            color: 'var(--kids-text-muted)'
          }}>
            <p style={{ margin: 0 }}>Detailed module lessons are being finalized for this track. Stay tuned!</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {course.modules.map((mod, modIdx) => {
              const isOpen = !!expandedModules[mod.id];
              return (
                <div
                  key={mod.id}
                  style={{
                    background: 'var(--kids-surface)',
                    border: `1.5px solid ${isOpen ? `${course.color}60` : 'var(--kids-border)'}`,
                    borderRadius: '18px',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease',
                    boxShadow: isOpen ? `0 8px 25px ${course.color}10` : 'none'
                  }}
                >
                  {/* Module Header Bar */}
                  <div
                    onClick={() => toggleModule(mod.id)}
                    style={{
                      padding: isMobile ? '1rem' : '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      background: isOpen 
                        ? (isDark ? 'rgba(30, 41, 59, 0.4)' : `${course.color}08`)
                        : 'transparent'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: `${course.color}20`,
                        color: course.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        fontSize: '0.95rem'
                      }}>
                        {modIdx + 1}
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                          <h3 style={{
                            margin: 0,
                            fontFamily: '"Baloo 2", cursive',
                            fontSize: isMobile ? '1.1rem' : '1.25rem',
                            color: 'var(--kids-text)'
                          }}>
                            {mod.title}
                          </h3>
                          <span style={{
                            background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                            padding: '0.15rem 0.55rem',
                            borderRadius: '6px',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: 'var(--kids-text-muted)'
                          }}>
                            {mod.duration}
                          </span>
                        </div>
                        <p style={{
                          margin: '0.2rem 0 0',
                          fontSize: '0.85rem',
                          color: 'var(--kids-text-muted)'
                        }}>
                          {mod.description}
                        </p>
                      </div>
                    </div>

                    <div style={{ color: course.color, marginLeft: '0.5rem' }}>
                      {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                    </div>
                  </div>

                  {/* Lessons List */}
                  {isOpen && (
                    <div style={{
                      padding: isMobile ? '0.75rem' : '1rem 1.5rem 1.5rem',
                      borderTop: '1px solid var(--kids-border)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      background: isDark ? 'rgba(15, 23, 42, 0.2)' : '#ffffff'
                    }}>
                      {mod.lessons.map((lesson, lesIdx) => (
                        <div
                          key={lesson.id}
                          style={{
                            background: isDark ? 'rgba(30, 41, 59, 0.6)' : '#f8fafc',
                            border: '1px solid var(--kids-border)',
                            borderRadius: '14px',
                            padding: isMobile ? '0.85rem' : '1rem 1.25rem',
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: isMobile ? 'stretch' : 'center',
                            justifyContent: 'space-between',
                            gap: '0.85rem'
                          }}
                        >
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                              <span style={{
                                fontSize: '0.75rem',
                                fontWeight: 800,
                                color: course.color,
                                background: `${course.color}15`,
                                padding: '0.15rem 0.5rem',
                                borderRadius: '6px'
                              }}>
                                Lab {modIdx + 1}.{lesIdx + 1}
                              </span>
                              <span style={{
                                fontSize: '0.75rem',
                                color: 'var(--kids-text-muted)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                              }}>
                                <Clock size={12} /> {lesson.duration}
                              </span>
                            </div>
                            <h4 style={{
                              margin: '0.2rem 0',
                              fontSize: '0.98rem',
                              fontWeight: 800,
                              color: 'var(--kids-text)'
                            }}>
                              {lesson.title}
                            </h4>
                            <p style={{
                              margin: 0,
                              fontSize: '0.85rem',
                              color: 'var(--kids-text-muted)',
                              lineHeight: 1.4
                            }}>
                              {lesson.description}
                            </p>
                            <div style={{
                              display: 'flex',
                              gap: '0.4rem',
                              flexWrap: 'wrap',
                              marginTop: '0.45rem'
                            }}>
                              {lesson.blocksFocused.map((b, bIdx) => (
                                <span
                                  key={bIdx}
                                  style={{
                                    fontSize: '0.72rem',
                                    fontWeight: 700,
                                    background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                                    color: 'var(--kids-text-muted)',
                                    padding: '0.1rem 0.45rem',
                                    borderRadius: '5px'
                                  }}
                                >
                                  🧱 {b}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                            <button
                              onClick={() => handleLaunchLesson(lesson)}
                              style={{
                                background: `linear-gradient(135deg, ${course.color}, ${course.accentColor})`,
                                color: 'white',
                                border: 'none',
                                padding: '0.6rem 1.1rem',
                                borderRadius: '10px',
                                fontWeight: 800,
                                fontSize: '0.82rem',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.45rem',
                                width: isMobile ? '100%' : 'auto',
                                justifyContent: 'center',
                                boxShadow: `0 4px 12px ${course.color}35`,
                                transition: 'all 0.2s ease'
                              }}
                            >
                              <Play size={14} fill="white" />
                              {lesson.missionId ? 'Launch in Kids IDE' : 'Practice in Kids IDE'}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Graduation & Verification Card */}
      <div style={{
        background: isDark ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.9)',
        border: '2px solid rgba(245, 158, 11, 0.4)',
        borderRadius: '20px',
        padding: isMobile ? '1.5rem' : '2rem',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'stretch' : 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        marginBottom: '2.5rem'
      }}>
        <div style={{ maxWidth: '650px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <Award size={22} style={{ color: '#f59e0b' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#f59e0b', letterSpacing: '0.5px' }}>
              ACCREDITED KONE ACADEMY CREDENTIAL
            </span>
          </div>
          <h3 style={{
            margin: '0 0 0.4rem 0',
            fontFamily: '"Baloo 2", cursive',
            fontSize: isMobile ? '1.3rem' : '1.6rem',
            color: 'var(--kids-text)'
          }}>
            Earn the {course.certificateTitle}
          </h3>
          <p style={{
            margin: 0,
            fontSize: '0.9rem',
            color: 'var(--kids-text-muted)',
            lineHeight: 1.5
          }}>
            Upon completing all labs and presenting the capstone project, students receive a verified, high-resolution certificate stamped with their name, unique verification serial, and skills transcript.
          </p>
        </div>

        <button
          onClick={() => { sounds.playClick(); setShowCertModal(true); }}
          style={{
            background: '#f59e0b',
            color: '#1e293b',
            border: 'none',
            padding: '0.85rem 1.6rem',
            borderRadius: '14px',
            fontWeight: 900,
            fontSize: '0.95rem',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            boxShadow: '0 8px 20px rgba(245, 158, 11, 0.3)',
            flexShrink: 0
          }}
        >
          📜 Preview Diploma
        </button>
      </div>

      {/* Admissions & School Inquiry Footer Banner */}
      <div style={{
        background: `linear-gradient(135deg, ${course.color}25, ${course.accentColor}15)`,
        border: `1.5px solid ${course.color}50`,
        borderRadius: '20px',
        padding: isMobile ? '1.5rem' : '2rem',
        textAlign: 'center'
      }}>
        <h3 style={{
          margin: '0 0 0.5rem 0',
          fontFamily: '"Baloo 2", cursive',
          fontSize: isMobile ? '1.35rem' : '1.75rem',
          color: 'var(--kids-text)'
        }}>
          Ready to Start Your Child’s Engineering Journey?
        </h3>
        <p style={{
          margin: '0 auto 1.5rem',
          maxWidth: '650px',
          fontSize: '0.95rem',
          color: 'var(--kids-text-muted)',
          lineHeight: 1.5
        }}>
          We offer private 1-on-1 mentorship, weekend cohorts, and turnkey STEM curriculum licensing for primary and junior high schools.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'stretch'
        }}>
          <button
            onClick={() => { sounds.playClick(); setShowEnrollModal(true); }}
            style={{
              width: isMobile ? '100%' : 'auto',
              justifyContent: 'center',
              background: course.color,
              color: 'white',
              border: 'none',
              padding: isMobile ? '0.85rem 1.25rem' : '0.8rem 1.8rem',
              borderRadius: '12px',
              fontWeight: 900,
              fontSize: isMobile ? '0.9rem' : '0.95rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Mail size={16} />
            Enrol Online / Request Quote
          </button>

          <a
            href="https://wa.me/233551993820?text=Hello%20Kone%20Academy!%20I'm%20interested%20in%20enrolling%20in%20the%20Kids%20Course:%20"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: isMobile ? '100%' : 'auto',
              justifyContent: 'center',
              background: '#22c55e',
              color: 'white',
              border: 'none',
              padding: isMobile ? '0.85rem 1.25rem' : '0.8rem 1.8rem',
              borderRadius: '12px',
              fontWeight: 900,
              fontSize: isMobile ? '0.9rem' : '0.95rem',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <MessageCircle size={16} />
            Chat on WhatsApp (+233 55 199 3820)
          </a>
        </div>
      </div>

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
