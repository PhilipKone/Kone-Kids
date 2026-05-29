import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Sparkles, Send, Check } from 'lucide-react';
import { blogArticles } from '../data/blogArticles';
import EnrollmentModal from './EnrollmentModal';

export default function ArticleReader() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Find article matching slug
  const article = blogArticles.find(art => art.slug === id);

  React.useEffect(() => {
    if (article) {
      document.title = `${article.title} | Kone Kids Blog`;
      
      const updateMeta = (property: string, content: string, isName = false) => {
        let meta = document.querySelector(`meta[${isName ? 'name' : 'property'}="${property}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(isName ? 'name' : 'property', property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      updateMeta('og:title', `${article.title} | Kone Kids Blog`);
      updateMeta('og:description', article.summary);
      updateMeta('description', article.summary, true);
      updateMeta('twitter:title', `${article.title} | Kone Kids Blog`);
      updateMeta('twitter:description', article.summary);
    }
  }, [article]);

  if (!article) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8fafc',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '2.2rem', fontWeight: 800, margin: '0 0 1rem' }}>Article Not Found</h2>
        <p style={{ color: 'var(--kids-text-muted)', margin: '0 0 2rem' }}>The article you are looking for does not exist or has been moved.</p>
        <Link to="/blog" style={{
          background: '#0d9488',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: 700
        }}>
          Back to Articles
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="article-reader-page" style={{
      background: '#f8fafc',
      minHeight: '100vh',
      color: '#1e293b',
      padding: '2rem 5% 6rem'
    }}>
      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Main Container */}
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        
        {/* Navigation Breadcrumbs */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '2.5rem'
        }}>
          <Link to="/blog" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#64748b',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 600,
            transition: 'color 0.2s'
          }} className="hover-teal">
            <ArrowLeft size={18} /> Back to Hub
          </Link>
          
          <button 
            onClick={handleShare}
            style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              padding: '0.45rem 1rem',
              borderRadius: '16px',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#475569',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              transition: 'all 0.2s'
            }}
          >
            {copiedLink ? (
              <>
                <Check size={14} style={{ color: '#10b981' }} /> Link Copied
              </>
            ) : (
              <>
                <Send size={14} /> Share Article
              </>
            )}
          </button>
        </div>

        {/* Hero Area */}
        <header style={{ marginBottom: '3rem' }}>
          {/* Category Pill Tag */}
          <span style={{
            background: 'rgba(13, 148, 136, 0.1)',
            color: '#0d9488',
            padding: '0.4rem 1rem',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            display: 'inline-block',
            marginBottom: '1.25rem'
          }}>
            {article.category}
          </span>

          {/* Article Title */}
          <h1 style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
            fontWeight: 800,
            color: '#0f172a',
            margin: '0 0 1.5rem 0',
            lineHeight: 1.2
          }}>
            {article.title}
          </h1>

          {/* Metadata Row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1.5rem',
            borderBottom: '1px solid #e2e8f0',
            paddingBottom: '2rem',
            color: '#64748b',
            fontSize: '0.9rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>{article.author.avatar}</span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 700, color: '#334155' }}>{article.author.name}</span>
                <span style={{ fontSize: '0.75rem' }}>{article.author.role}</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={16} />
              <span>{article.publishDate}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Body Content */}
        <main style={{ 
          fontSize: '1.1rem',
          lineHeight: '1.65',
          color: '#334155',
          marginBottom: '5rem',
          fontFamily: 'Plus Jakarta Sans, sans-serif'
        }}>
          {article.content.map((block, idx) => {
            switch (block.type) {
              case 'heading':
                return (
                  <h2 
                    key={idx} 
                    style={{
                      fontFamily: "'Baloo 2', cursive",
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      margin: '2.5rem 0 1.25rem 0',
                      lineHeight: 1.3
                    }}
                    dangerouslySetInnerHTML={{ __html: block.content }}
                  />
                );
              case 'paragraph':
                return (
                  <p 
                    key={idx} 
                    style={{ 
                      margin: '0 0 1.5rem 0'
                    }}
                    dangerouslySetInnerHTML={{ __html: block.content }}
                  />
                );
              case 'quote':
                return (
                  <blockquote 
                    key={idx} 
                    style={{
                      margin: '2rem 0',
                      paddingLeft: '1.5rem',
                      borderLeft: '5px solid #0d9488',
                      fontStyle: 'italic',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#0f766e',
                      lineHeight: '1.5'
                    }}
                    dangerouslySetInnerHTML={{ __html: `“${block.content}”` }}
                  />
                );
              case 'callout':
                return (
                  <div 
                    key={idx} 
                    style={{
                      background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                      border: '1px solid #bbf7d0',
                      borderRadius: '16px',
                      padding: '1.5rem',
                      margin: '2rem 0',
                      color: '#166534',
                      fontWeight: 600,
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.01)'
                    }}
                  >
                    <span style={{ fontSize: '1.25rem' }}>💡</span>
                    <div dangerouslySetInnerHTML={{ __html: block.content }} />
                  </div>
                );
              case 'list':
                return (
                  <div key={idx} style={{ margin: '1.5rem 0' }}>
                    <p style={{ fontWeight: 700, margin: '0 0 0.75rem' }} dangerouslySetInnerHTML={{ __html: block.content }} />
                    <ul style={{
                      paddingLeft: '1.5rem',
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem'
                    }}>
                      {block.items?.map((item, itemIdx) => (
                        <li key={itemIdx} style={{ fontSize: '1.05rem' }} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  </div>
                );
              default:
                return null;
            }
          })}
        </main>

        {/* Immersive CTA Conversion block */}
        <section 
          className="blog-cta-section"
          style={{
            background: 'white',
            border: '1px solid #e2e8f0',
            borderRadius: '32px',
            padding: '3rem 2.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Glow Graphic */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(13, 148, 136, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}></div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(249, 115, 22, 0.1)',
              color: 'var(--kids-orange)',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              <Sparkles size={14} /> Free Interactive Experience
            </div>
            
            <h3 style={{
              fontFamily: "'Baloo 2', cursive",
              fontSize: '2rem',
              fontWeight: 800,
              color: '#0f172a',
              margin: 0
            }}>
              Bring the Future to Your Home or School!
            </h3>
            
            <p style={{
              fontSize: '1rem',
              color: '#475569',
              maxWidth: '650px',
              margin: 0,
              lineHeight: 1.5
            }}>
              We bring specialized robotics kits, electronics, and laptops directly to you. Tutors can set up in your private living room or directly inside your school's ICT laboratory class.
            </p>

            <div style={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              marginTop: '1.25rem'
            }}>
              <button 
                onClick={() => setIsModalOpen(true)}
                style={{
                  background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '0.85rem 2rem',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(13, 148, 136, 0.25)',
                  transition: 'transform 0.2s',
                  fontFamily: "'Baloo 2', cursive"
                }}
                className="btn-cta-hover"
              >
                🏠 Book Home Trial
              </button>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '0.85rem 2rem',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(249, 115, 22, 0.25)',
                  transition: 'transform 0.2s',
                  fontFamily: "'Baloo 2', cursive"
                }}
                className="btn-orange-hover"
              >
                🏫 Request School Demo
              </button>
              
              <a 
                href="https://wa.me/233551993820?text=Hello%20Kone%20Kids,%20I%20just%20read%20your%20article%20and%20would%20like%20to%20schedule%20a%20free%20home%20or%20school%20demo%20session!"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  color: '#1e293b',
                  padding: '0.85rem 2rem',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s'
                }}
                className="btn-secondary-hover"
              >
                WhatsApp Us
              </a>
            </div>
            
            <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
              Or Call directly: <span style={{ color: '#0f172a', fontWeight: 800 }}>+233 55 199 3820</span>
            </span>
          </div>
        </section>

      </div>
    </div>
  );
}
