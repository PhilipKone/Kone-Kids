import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left.mjs';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link.mjs';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin.mjs';
import BookOpen from 'lucide-react/dist/esm/icons/book-open.mjs';
import Award from 'lucide-react/dist/esm/icons/award.mjs';
import Globe from 'lucide-react/dist/esm/icons/globe.mjs';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles.mjs';
import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2.mjs';
import Calendar from 'lucide-react/dist/esm/icons/calendar.mjs';
import Clock from 'lucide-react/dist/esm/icons/clock.mjs';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right.mjs';
import Mail from 'lucide-react/dist/esm/icons/mail.mjs';
import { blogArticles, getLocalized } from '../data/blogArticles';

export const AuthorProfile: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  // Filter articles written by Philip Hotor
  const authorArticles = blogArticles.filter(art => 
    art.author.name.toLowerCase().includes('philip') || art.author.name.toLowerCase().includes('kone')
  );

  const linkedinUrl = 'https://www.linkedin.com/in/philip-kone/';

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
      padding: '2rem 1rem 6rem',
      fontFamily: "'Nunito', sans-serif"
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {/* Navigation Breadcrumb */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '2rem'
        }}>
          <Link to="/blog" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'white',
            border: '1px solid #e2e8f0',
            padding: '0.6rem 1.2rem',
            borderRadius: '20px',
            color: '#475569',
            fontWeight: 700,
            fontSize: '0.9rem',
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            transition: 'all 0.2s ease'
          }}>
            <ArrowLeft size={18} />
            Back to Parent Hub
          </Link>
          <span style={{ color: '#cbd5e1' }}>/</span>
          <span style={{ color: '#64748b', fontWeight: 600, fontSize: '0.9rem' }}>Author Profile</span>
        </div>

        {/* Hero Card */}
        <div style={{
          background: 'white',
          borderRadius: '32px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.05)',
          padding: '2.5rem 2rem',
          marginBottom: '3rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Top Decorative Ambient Bar */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #f97316 0%, #0ea5e9 50%, #a855f7 100%)'
          }} />

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.75rem'
          }}>
            {/* Avatar with Verified Badge */}
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                padding: '4px',
                background: 'linear-gradient(135deg, #f97316 0%, #0ea5e9 100%)',
                boxShadow: '0 12px 28px -6px rgba(249, 115, 22, 0.3)'
              }}>
                <img 
                  src="/author-philip.jpg" 
                  alt="Philip Hotor" 
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    background: 'white'
                  }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '6px',
                right: '6px',
                background: '#0ea5e9',
                color: 'white',
                borderRadius: '50%',
                padding: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(14, 165, 233, 0.4)'
              }} title="Verified Author & Founder">
                <CheckCircle2 size={22} fill="#0ea5e9" color="white" />
              </div>
            </div>

            {/* Name & Titles */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '0.35rem'
              }}>
                <h1 style={{
                  fontFamily: "'Baloo 2', sans-serif",
                  fontSize: '2.4rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>Philip Hotor</h1>
              </div>

              <p style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#f97316',
                margin: '0 0 0.5rem 0'
              }}>
                Founder & Head of Engineering — Kone Academy & Kone Kids
              </p>

              <p style={{
                fontSize: '0.9rem',
                color: '#64748b',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.35rem'
              }}>
                <Globe size={16} /> Accra, Ghana & Global Remote
              </p>
            </div>

            {/* Skill / Focus Pill Badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              maxWidth: '700px'
            }}>
              {['Software Engineering', 'AI & Machine Learning', 'Robotics Education', 'Agritech', 'Distributed Systems'].map((skill, idx) => (
                <span key={idx} style={{
                  background: '#f1f5f9',
                  color: '#334155',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '16px',
                  fontSize: '0.825rem',
                  fontWeight: 700
                }}>
                  {skill}
                </span>
              ))}
            </div>

            {/* Biography Text */}
            <p style={{
              fontSize: '1.025rem',
              color: '#334155',
              lineHeight: 1.7,
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              Philip Hotor is an engineer, tech educator, and founder of <strong>Kone Academy</strong> and <strong>Kone Kids</strong>. With over a decade of experience designing production-grade software, distributed systems, and STEM learning frameworks, Philip leads the mission to empower youth aged 5–17 with practical coding, robotics, and artificial intelligence skills.
            </p>

            {/* Action / Social Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '0.5rem'
            }}>
              {/* Primary LinkedIn Button */}
              <a 
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#0077b5',
                  color: 'white',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '24px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 8px 20px -4px rgba(0, 119, 181, 0.35)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Linkedin size={20} /> Connect on LinkedIn <ExternalLink size={16} />
              </a>

              {/* Kone Academy Site */}
              <a 
                href="https://www.koneacademy.io"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#0f172a',
                  color: 'white',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '24px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 8px 20px -4px rgba(15, 23, 42, 0.25)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Globe size={18} /> Visit Kone Academy <ExternalLink size={16} />
              </a>

              {/* Contact Email */}
              <a 
                href="mailto:contact@koneacademy.io"
                style={{
                  background: 'rgba(249, 115, 22, 0.08)',
                  color: '#f97316',
                  border: '1px solid rgba(249, 115, 22, 0.3)',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '24px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Mail size={18} /> Email Inquiries
              </a>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3.5rem'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            padding: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
          }}>
            <BookOpen size={28} color="#f97316" style={{ margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>10+</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b' }}>STEM & EdTech Guides</div>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            padding: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
          }}>
            <Award size={28} color="#0ea5e9" style={{ margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>5,000+</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b' }}>Youth Coders Reached</div>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            padding: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
          }}>
            <Sparkles size={28} color="#a855f7" style={{ margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>7 Divisions</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b' }}>Kone Tech Group</div>
          </div>
        </div>

        {/* Articles Written by Author Section */}
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <div>
              <h2 style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#0f172a',
                margin: 0
              }}>Articles & Insights by Philip Hotor</h2>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>
                Handwritten guides on nurturing coding logic, robotics engineering, and artificial intelligence in children.
              </p>
            </div>
          </div>

          {/* Articles Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '2rem'
          }}>
            {authorArticles.map(art => (
              <article
                key={art.id}
                style={{
                  background: 'white',
                  borderRadius: '24px',
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease'
                }}
                className="blog-card-hover"
              >
                {/* Header Cover Gradient */}
                <div style={{
                  background: art.coverGradient,
                  height: '160px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}>
                  <span style={{
                    background: 'white',
                    color: art.accentColor,
                    padding: '0.35rem 0.85rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    alignSelf: 'flex-start',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                  }}>
                    {art.category}
                  </span>
                </div>

                {/* Body Content */}
                <div style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <h3 style={{
                      fontFamily: "'Baloo 2', sans-serif",
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.35,
                      margin: '0 0 0.75rem 0'
                    }}>
                      <Link to={`/blog/${art.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {getLocalized(art, 'title', currentLang)}
                      </Link>
                    </h3>

                    <p style={{
                      fontSize: '0.875rem',
                      color: '#64748b',
                      lineHeight: 1.5,
                      margin: '0 0 1.25rem 0',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {getLocalized(art, 'summary', currentLang)}
                    </p>
                  </div>

                  <div style={{
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#64748b', fontSize: '0.8rem' }}>
                      <Calendar size={14} />
                      <span>{art.publishDate}</span>
                    </div>

                    <Link to={`/blog/${art.slug}`} style={{
                      background: 'rgba(13, 148, 136, 0.08)',
                      color: '#0d9488',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '16px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}>
                      Read <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
