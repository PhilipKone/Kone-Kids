import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Clock, User, ArrowLeft, Sparkles, HelpCircle } from 'lucide-react';
import { blogArticles, BlogArticle, getLocalized } from '../data/blogArticles';
import EnrollmentModal from './EnrollmentModal';
import { useTranslation } from 'react-i18next';

export default function Blog() {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Coding & Logic', 'Robotics & Science', 'Parenting & Tech'];

  const filteredArticles = selectedCategory === 'All'
    ? blogArticles
    : blogArticles.filter(art => art.category === selectedCategory);

  return (
    <div className="kids-blog-page" style={{
      background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
      minHeight: '100vh',
      color: '#1e293b',
      padding: '2rem 5% 6rem'
    }}>
      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Navigation Breadcrumb & Title */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 3rem' }}>
        <Link to="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#64748b',
          textDecoration: 'none',
          fontSize: '0.95rem',
          fontWeight: 600,
          transition: 'color 0.2s',
          marginBottom: '2rem'
        }} className="hover-teal">
          <ArrowLeft size={18} /> Back to Hub
        </Link>

        {/* Blog Page Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          position: 'relative'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(13, 148, 136, 0.1)',
            color: '#0d9488',
            padding: '0.4rem 1rem',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            alignSelf: 'flex-start'
          }}>
            <Sparkles size={14} /> Parents &amp; Teachers Hub
          </div>
          <h1 style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 800,
            margin: 0,
            lineHeight: 1.15,
            background: 'linear-gradient(90deg, #1e3a8a 0%, #0d9488 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Insights, Stories &amp; STEM Wisdom
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: '#475569',
            maxWidth: '650px',
            margin: 0,
            lineHeight: 1.5
          }}>
            Practical advice on screen time, computational logic, physical engineering, and nurturing future technology leaders in Ghana.
          </p>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 2.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        {categories.map(cat => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: isActive ? '#0d9488' : 'white',
                color: isActive ? 'white' : '#475569',
                border: isActive ? '1px solid #0d9488' : '1px solid #e2e8f0',
                padding: '0.6rem 1.25rem',
                borderRadius: '30px',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? '0 4px 12px rgba(13, 148, 136, 0.2)' : '0 2px 4px rgba(0,0,0,0.02)'
              }}
              className={isActive ? '' : 'category-pill-hover'}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Articles Grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 5rem'
      }}>
        {filteredArticles.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {filteredArticles.map(art => (
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
                {/* Decorative Header Card Cover */}
                <div style={{
                  background: art.coverGradient,
                  height: '180px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}>
                  {/* Category Badge Tag */}
                  <span style={{
                    background: 'white',
                    color: art.accentColor,
                    padding: '0.35rem 0.85rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    alignSelf: 'flex-start',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
                  }}>
                    {getLocalized(art, 'category', i18n.language)}
                  </span>

                  {/* Article Card Icon */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#1e293b'
                  }}>
                    <BookOpen size={20} style={{ color: art.accentColor }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Kone Kids Insights</span>
                  </div>
                </div>

                {/* Article Info Content */}
                <div style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between'
                }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{
                      fontFamily: "'Baloo 2', cursive",
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      margin: '0 0 0.75rem 0',
                      lineHeight: 1.3,
                      color: '#0f172a'
                    }}>
                      {getLocalized(art, 'title', i18n.language)}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#475569',
                      margin: 0,
                      lineHeight: 1.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {getLocalized(art, 'summary', i18n.language)}
                    </p>
                  </div>

                  {/* Metadata Row */}
                  <div style={{
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: '1.25rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.25rem' }}>{art.author.avatar}</span>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155' }}>{art.author.name}</span>
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{art.author.role}</span>
                      </div>
                    </div>

                    <Link to={`/blog/${art.slug}`} style={{
                      background: 'rgba(13, 148, 136, 0.06)',
                      color: '#0d9488',
                      padding: '0.5rem 1rem',
                      borderRadius: '16px',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'all 0.2s'
                    }} className="btn-read-hover">
                      Read <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div style={{
            background: 'white',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            padding: '4rem 2rem',
            textAlign: 'center',
            boxShadow: '0 4px 10px rgba(0,0,0,0.01)'
          }}>
            <HelpCircle size={48} style={{ color: '#94a3b8', marginBottom: '1rem' }} />
            <h3 style={{ margin: '0 0 0.5rem', fontFamily: "'Baloo 2', cursive", fontWeight: 800 }}>No articles found</h3>
            <p style={{ margin: 0, color: '#64748b' }}>Select another category to read more insights.</p>
          </div>
        )}
      </div>

      {/* CTA Card Footer */}
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div 
          className="blog-cta-section"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            color: 'white',
            borderRadius: '32px',
            padding: '3rem 2.5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px -15px rgba(15,23,42,0.3)'
          }}
        >
          <div style={{
            position: 'absolute',
            bottom: '-40px',
            right: '-40px',
            width: '180px',
            height: '180px',
            background: 'radial-gradient(circle, rgba(13, 148, 136, 0.15) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>

          <h3 style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: 'clamp(1.65rem, 3vw, 2.4rem)',
            fontWeight: 800,
            margin: '0 0 0.75rem 0',
            lineHeight: 1.2
          }}>
            Inspire Future Tech Leaders
          </h3>
          <p style={{
            fontSize: '1.05rem',
            color: '#94a3b8',
            maxWidth: '650px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.5
          }}>
            Whether you are a parent seeking premium home coding lessons or a private school proprietress looking to build a state-of-the-art robotics lab, we bring specialized equipment directly to you.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '1.5rem'
          }}>
            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                color: 'white',
                border: 'none',
                padding: '0.9rem 2.25rem',
                borderRadius: '50px',
                fontSize: '1.05rem',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(13, 148, 136, 0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                fontFamily: "'Baloo 2', cursive"
              }}
              className="btn-cta-hover"
            >
              🏠 Request Free Home Trial
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                color: 'white',
                border: 'none',
                padding: '0.9rem 2.25rem',
                borderRadius: '50px',
                fontSize: '1.05rem',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(249, 115, 22, 0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                fontFamily: "'Baloo 2', cursive"
              }}
              className="btn-orange-hover"
            >
              🏫 Book School Lab Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
