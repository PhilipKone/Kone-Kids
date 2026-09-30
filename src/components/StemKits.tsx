import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  BookOpen, 
  ExternalLink, 
  MessageCircle, 
  ShoppingBag, 
  ChevronRight, 
  X, 
  HelpCircle, 
  Plus, 
  Minus,
  Award,
  Zap,
  Layers,
  School
} from 'lucide-react';
import { STEM_KITS, StemKit, SCHOOL_PACK_OFFERING } from '../data/stemKits';

export default function StemKits() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currency, setCurrency] = useState<'GHS' | 'USD'>('GHS');
  const [activeModalKit, setActiveModalKit] = useState<StemKit | null>(null);
  const [orderModalKit, setOrderModalKit] = useState<StemKit | null>(null);
  const [schoolQuoteOpen, setSchoolQuoteOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Order form state
  const [orderForm, setOrderForm] = useState({
    parentName: '',
    phone: '',
    city: 'Accra',
    deliveryAddress: '',
    quantity: 1,
    paymentMethod: 'momo'
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const categories = ['All', 'Junior', 'Robotics', 'IoT', 'AI'];

  const filteredKits = selectedCategory === 'All'
    ? STEM_KITS
    : STEM_KITS.filter(kit => kit.category === selectedCategory);

  const formatPrice = (kit: StemKit, qty: number = 1) => {
    if (currency === 'GHS') {
      return `GH₵ ${(kit.priceGHS * qty).toLocaleString()}`;
    }
    return `$${(kit.priceUSD * qty).toLocaleString()}`;
  };

  const handleWhatsAppOrder = (kit: StemKit, qty: number = 1, address: string = '') => {
    const priceText = formatPrice(kit, qty);
    const msg = encodeURIComponent(
      `Hello Kone Kids! 👋\n\nI want to order the *${kit.title}* (${priceText}, Qty: ${qty}).` +
      (address ? `\n📍 Delivery Address: ${address}` : '') +
      `\n\nPlease send payment details (Mobile Money/Card) and confirm dispatch time. Thank you!`
    );
    window.open(`https://wa.me/233551993820?text=${msg}`, '_blank');
  };

  const handleSchoolQuoteWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello Kone Kids Team! 🏫\n\nI am inquiring about a *School / STEM Club Pack* for our institution.\nWe are interested in equipping a classroom with student kits, teacher lesson guides, and workshop training.\n\nPlease share your school catalog and pricing breakdown.`
    );
    window.open(`https://wa.me/233551993820?text=${msg}`, '_blank');
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
    setTimeout(() => {
      if (orderModalKit) {
        handleWhatsAppOrder(orderModalKit, orderForm.quantity, `${orderForm.deliveryAddress}, ${orderForm.city} (Tel: ${orderForm.phone}, Name: ${orderForm.parentName})`);
      }
    }, 1200);
  };

  const faqs = [
    {
      q: 'Does my child need previous coding or electronics experience?',
      a: 'Not at all! Every kit begins with visual zero-barrier missions. Our Junior Inventor kit uses solderless magnetic snap blocks, and our Robotics and IoT kits come with step-by-step animated diagrams and block-based programming tutorials that anyone can follow.'
    },
    {
      q: 'Is there any soldering, high voltage, or dangerous heat involved?',
      a: '100% NO. All Kone Kids kits are strictly low-voltage (3V–5V USB/AA power) and engineered for child safety. Every component connects using solderless breadboards, secure dupont jumpers, or snap-connectors. No soldering iron, bare AC mains, or toxic materials are ever used.'
    },
    {
      q: 'How does the physical kit connect with the Kone Kids online platform?',
      a: 'Each physical kit directly matches the virtual missions on kids.koneacademy.io. For instance, after students test a virtual obstacle-avoiding rover in the Robotics Lab, they use their physical rover kit to run the exact same logic with real motors and ultrasonic sensors!'
    },
    {
      q: 'How fast is delivery across Ghana?',
      a: 'Deliveries within Greater Accra (Accra, Tema, Kasoa) arrive within 24 hours. Deliveries across other regions (Kumasi, Takoradi, Cape Coast, Tamale, Sunyani, Ho) arrive in 24 to 48 hours via registered courier parcel service.'
    },
    {
      q: 'What computers or tablets are needed?',
      a: 'Any standard laptop, desktop computer, or Chromebook with a USB port and Google Chrome browser works right out of the box. No heavy software installations are required.'
    }
  ];

  return (
    <div className="kids-stem-kits-page" style={{
      background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
      minHeight: '100vh',
      color: '#0f172a',
      padding: '2rem 5% 6rem'
    }}>
      {/* Top Breadcrumb */}
      <div style={{ maxWidth: '1240px', margin: '0 auto 2.5rem' }}>
        <Link to="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#64748b',
          textDecoration: 'none',
          fontSize: '0.95rem',
          fontWeight: 700,
          transition: 'color 0.2s',
          marginBottom: '1.5rem'
        }}>
          <ArrowLeft size={18} /> Back to Learning Hub
        </Link>

        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
          borderRadius: '32px',
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px -15px rgba(49, 46, 129, 0.35)',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}>
          {/* Subtle background glow */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '320px',
            height: '320px',
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, rgba(249, 115, 22, 0) 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />

          <div style={{ maxWidth: '780px', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1.25rem',
              color: '#fde047'
            }}>
              <Cpu size={16} /> Physical STEM &amp; Robotics Hardware
            </div>

            <h1 style={{
              fontFamily: "'Baloo 2', cursive",
              fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)',
              fontWeight: 800,
              margin: '0 0 1rem 0',
              lineHeight: 1.15,
              letterSpacing: '-0.02em'
            }}>
              Turn Screen Time Into <span style={{ color: '#fb923c' }}>Physical Engineering</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: 1.6,
              color: '#e0e7ff',
              margin: '0 0 2rem 0',
              fontWeight: 500
            }}>
              Real microcontrollers, robotics chassis, and IoT smart sensors designed for young creators. 
              Delivered across Ghana with step-by-step video tutorials and direct tie-ins to our virtual labs.
            </p>

            {/* Trust highlights */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Truck size={20} color="#38bdf8" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Ghana Delivery (24-48h)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShieldCheck size={20} color="#4ade80" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>100% Solderless &amp; Safe</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <BookOpen size={20} color="#fde047" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Matches Lab Missions</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Zap size={20} color="#fb923c" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>MoMo &amp; Card Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Controls Bar: Category Filters & Currency Toggle */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          margin: '2rem 0 2.5rem',
          background: '#ffffff',
          padding: '1rem 1.5rem',
          borderRadius: '20px',
          boxShadow: '0 4px 20px -2px rgba(0,0,0,0.06)'
        }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: '14px',
                  border: 'none',
                  background: selectedCategory === cat ? '#4338ca' : '#f1f5f9',
                  color: selectedCategory === cat ? '#ffffff' : '#475569',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  outline: 'none'
                }}
              >
                {cat === 'All' ? 'All STEM Kits' : `${cat} Kits`}
              </button>
            ))}
          </div>

          {/* Currency Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b' }}>Currency:</span>
            <div style={{
              display: 'inline-flex',
              background: '#f1f5f9',
              borderRadius: '12px',
              padding: '0.2rem'
            }}>
              <button
                onClick={() => setCurrency('GHS')}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '10px',
                  border: 'none',
                  background: currency === 'GHS' ? '#ffffff' : 'transparent',
                  color: currency === 'GHS' ? '#4338ca' : '#64748b',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  boxShadow: currency === 'GHS' ? '0 2px 5px rgba(0,0,0,0.08)' : 'none',
                  transition: 'all 0.15s'
                }}
              >
                GH₵ (GHS)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '10px',
                  border: 'none',
                  background: currency === 'USD' ? '#ffffff' : 'transparent',
                  color: currency === 'USD' ? '#4338ca' : '#64748b',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  boxShadow: currency === 'USD' ? '0 2px 5px rgba(0,0,0,0.08)' : 'none',
                  transition: 'all 0.15s'
                }}
              >
                $ (USD)
              </button>
            </div>
          </div>
        </div>

        {/* Kits Product Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {filteredKits.map(kit => (
            <div
              key={kit.id}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.25s, box-shadow 0.25s',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 35px -8px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Card Header Gradient Banner */}
              <div style={{
                background: kit.gradient,
                padding: '1.75rem',
                color: '#ffffff',
                position: 'relative'
              }}>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(0, 0, 0, 0.25)',
                  backdropFilter: 'blur(6px)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.75rem'
                }}>
                  {kit.badge}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{
                    fontFamily: "'Baloo 2', cursive",
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    margin: 0,
                    lineHeight: 1.2
                  }}>
                    {kit.title}
                  </h3>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginTop: '0.75rem',
                  fontSize: '0.8rem',
                  fontWeight: 700
                }}>
                  <span style={{ background: 'rgba(255,255,255,0.25)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>
                    {kit.ageRange}
                  </span>
                  <span style={{ background: 'rgba(255,255,255,0.25)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>
                    {kit.difficulty}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{
                  fontSize: '0.92rem',
                  color: '#475569',
                  lineHeight: 1.5,
                  margin: '0 0 1.25rem 0',
                  fontWeight: 500
                }}>
                  {kit.tagline}
                </p>

                {/* Key Skills Learnt */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    Core Concepts Mastered:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {kit.skills.slice(0, 3).map((skill, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#334155' }}>
                        <CheckCircle2 size={16} color={kit.accentColor} style={{ flexShrink: 0 }} />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Virtual Lab Pairing Badge */}
                <div style={{
                  marginTop: 'auto',
                  padding: '0.75rem 1rem',
                  background: '#f8fafc',
                  border: '1px dashed #cbd5e1',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
                      Virtual Lab Pairing
                    </div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#1e293b' }}>
                      {kit.labName}
                    </div>
                  </div>
                  <Link 
                    to={kit.labRoute} 
                    style={{ 
                      color: kit.accentColor, 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.2rem',
                      textDecoration: 'none',
                      fontSize: '0.82rem',
                      fontWeight: 800
                    }}
                  >
                    View Missions <ExternalLink size={13} />
                  </Link>
                </div>

                {/* Pricing & Actions */}
                <div style={{
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, display: 'block' }}>Kit Price</span>
                      <span style={{
                        fontFamily: "'Baloo 2', cursive",
                        fontSize: '1.75rem',
                        fontWeight: 800,
                        color: '#0f172a'
                      }}>
                        {formatPrice(kit)}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveModalKit(kit)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#4338ca',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        padding: '0.4rem 0.6rem',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      What's in the Box? <ChevronRight size={16} />
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <button
                      onClick={() => handleWhatsAppOrder(kit)}
                      style={{
                        background: '#25D366',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '14px',
                        padding: '0.75rem 0.5rem',
                        fontSize: '0.88rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)'
                      }}
                    >
                      <MessageCircle size={17} /> WhatsApp
                    </button>

                    <button
                      onClick={() => {
                        setOrderModalKit(kit);
                        setOrderSubmitted(false);
                      }}
                      style={{
                        background: kit.accentColor,
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '14px',
                        padding: '0.75rem 0.5rem',
                        fontSize: '0.88rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        boxShadow: `0 4px 12px ${kit.accentColor}40`
                      }}
                    >
                      <ShoppingBag size={17} /> Order Kit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* School & Club Bulk Orders Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: '32px',
          padding: 'clamp(2rem, 5vw, 3rem)',
          color: '#ffffff',
          marginBottom: '4rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(56, 189, 248, 0.15)',
              color: '#38bdf8',
              padding: '0.35rem 0.9rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1rem'
            }}>
              <School size={16} /> For Schools, PTAs &amp; STEM Clubs
            </div>

            <h2 style={{
              fontFamily: "'Baloo 2', cursive",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              margin: '0 0 1rem 0',
              lineHeight: 1.2
            }}>
              Equipping a STEM Lab or After-School Coding Club?
            </h2>

            <p style={{
              fontSize: '1rem',
              color: '#cbd5e1',
              lineHeight: 1.6,
              margin: '0 0 1.5rem 0'
            }}>
              Get volume pricing on 10+ kits paired with printed teacher curriculum guides, multi-seat teacher dashboard analytics, and certified instructor onboarding workshops across Ghana.
            </p>

            <button
              onClick={handleSchoolQuoteWhatsApp}
              style={{
                background: 'linear-gradient(90deg, #38bdf8 0%, #0284c7 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '16px',
                padding: '0.9rem 1.8rem',
                fontSize: '1rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                boxShadow: '0 10px 20px -5px rgba(56, 189, 248, 0.35)'
              }}
            >
              <MessageCircle size={20} /> Request School Lab Quote &amp; Demo
            </button>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '1.75rem'
          }}>
            <h4 style={{
              fontFamily: "'Baloo 2', cursive",
              fontSize: '1.2rem',
              fontWeight: 800,
              margin: '0 0 1rem 0',
              color: '#f8fafc'
            }}>
              What's Included in the School Lab Pack:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {SCHOOL_PACK_OFFERING.features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={18} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Parent FAQs Accordion */}
        <div style={{
          background: '#ffffff',
          borderRadius: '32px',
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: '#f1f5f9',
              color: '#64748b',
              padding: '0.35rem 0.9rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.75rem'
            }}>
              <HelpCircle size={15} /> Frequently Asked Questions
            </div>
            <h2 style={{
              fontFamily: "'Baloo 2', cursive",
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              fontWeight: 800,
              margin: 0,
              color: '#0f172a'
            }}>
              Everything Parents Need to Know
            </h2>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      background: isOpen ? '#f8fafc' : '#ffffff',
                      border: 'none',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      textAlign: 'left',
                      outline: 'none'
                    }}
                  >
                    <span style={{
                      fontFamily: "'Baloo 2', cursive",
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: isOpen ? '#4338ca' : '#1e293b'
                    }}>
                      {faq.q}
                    </span>
                    {isOpen ? <Minus size={18} color="#4338ca" /> : <Plus size={18} color="#64748b" />}
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 1.5rem 1.25rem',
                      background: '#f8fafc',
                      color: '#475569',
                      fontSize: '0.95rem',
                      lineHeight: 1.6
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* "What's in the Box" Component Modal */}
      {activeModalKit && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          zIndex: 3000
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '28px',
            width: '850px',
            maxWidth: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
            animation: 'fadeInScale 0.25s ease-out'
          }}>
            {/* Modal Header */}
            <div style={{
              background: activeModalKit.gradient,
              padding: '1.75rem 2rem',
              color: '#ffffff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}>
              <div>
                <span style={{
                  background: 'rgba(0,0,0,0.25)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '10px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase'
                }}>
                  {activeModalKit.category} Track • {activeModalKit.ageRange}
                </span>
                <h3 style={{
                  fontFamily: "'Baloo 2', cursive",
                  fontSize: '1.65rem',
                  fontWeight: 800,
                  margin: '0.5rem 0 0 0'
                }}>
                  {activeModalKit.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalKit(null)}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2rem', overflowY: 'auto', flex: 1 }}>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, margin: '0 0 1.75rem 0' }}>
                {activeModalKit.overview}
              </p>

              {/* Hardware Components Table */}
              <h4 style={{
                fontFamily: "'Baloo 2', cursive",
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#1e293b',
                margin: '0 0 0.75rem 0'
              }}>
                Hardware Components Included ({activeModalKit.components.length} Items):
              </h4>
              <div style={{
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '1.75rem'
              }}>
                {activeModalKit.components.map((comp, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.85rem 1.25rem',
                      background: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                      borderBottom: idx === activeModalKit.components.length - 1 ? 'none' : '1px solid #f1f5f9',
                      fontSize: '0.9rem'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: '#1e293b' }}>{comp.name}</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{comp.detail}</div>
                    </div>
                    <span style={{
                      fontWeight: 800,
                      background: '#ede9fe',
                      color: '#6b21a8',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      flexShrink: 0
                    }}>
                      {comp.qty}
                    </span>
                  </div>
                ))}
              </div>

              {/* Lab Curriculum Missions */}
              <h4 style={{
                fontFamily: "'Baloo 2', cursive",
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#1e293b',
                margin: '0 0 0.75rem 0'
              }}>
                Hands-On Missions Supported:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                {activeModalKit.curriculumMatches.map((cur, idx) => (
                  <div key={idx} style={{
                    padding: '0.85rem 1rem',
                    background: '#f1f5f9',
                    borderRadius: '12px',
                    fontSize: '0.88rem'
                  }}>
                    <div style={{ fontWeight: 800, color: '#334155', marginBottom: '0.2rem' }}>
                      {cur.missionTitle}
                    </div>
                    <div style={{ color: '#64748b' }}>
                      {cur.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Safety & Battery Notes */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                padding: '1rem',
                background: '#fefce8',
                border: '1px solid #fef08a',
                borderRadius: '14px',
                fontSize: '0.85rem',
                color: '#854d0e'
              }}>
                <div>
                  <strong>Safety:</strong> {activeModalKit.requiresSoldering ? 'Adult supervision recommended' : '100% Solderless & Low Voltage'}
                </div>
                <div>
                  <strong>Power:</strong> {activeModalKit.batteryInfo}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '1.25rem 2rem',
              background: '#f8fafc',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Total Price</span>
                <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: '1.6rem', fontWeight: 800, color: '#0f172a' }}>
                  {formatPrice(activeModalKit)}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => handleWhatsAppOrder(activeModalKit)}
                  style={{
                    background: '#25D366',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '14px',
                    padding: '0.75rem 1.25rem',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <MessageCircle size={18} /> WhatsApp Order
                </button>
                <button
                  onClick={() => {
                    setOrderModalKit(activeModalKit);
                    setActiveModalKit(null);
                    setOrderSubmitted(false);
                  }}
                  style={{
                    background: activeModalKit.accentColor,
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '14px',
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <ShoppingBag size={18} /> Proceed to Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Direct Order Modal (Ghana Delivery & MoMo Checkout) */}
      {orderModalKit && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          zIndex: 3500
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '28px',
            width: '560px',
            maxWidth: '100%',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
            animation: 'fadeInScale 0.25s ease-out'
          }}>
            <div style={{
              background: orderModalKit.gradient,
              padding: '1.5rem 1.75rem',
              color: '#ffffff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.9 }}>
                  Direct Delivery Checkout
                </span>
                <h3 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '1.4rem', fontWeight: 800, margin: '0.25rem 0 0 0' }}>
                  {orderModalKit.title}
                </h3>
              </div>
              <button
                onClick={() => setOrderModalKit(null)}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {orderSubmitted ? (
              <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: '#dcfce7',
                  color: '#16a34a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '1.6rem', fontWeight: 800, margin: '0 0 0.5rem 0', color: '#166534' }}>
                  Opening WhatsApp to Confirm!
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.95rem', margin: '0 0 1.5rem 0' }}>
                  Your delivery details have been pre-filled. Confirming directly on WhatsApp guarantees instant parcel dispatch tracking.
                </p>
                <button
                  onClick={() => setOrderModalKit(null)}
                  style={{
                    background: '#f1f5f9',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '0.65rem 1.5rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleOrderSubmit} style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Parent / Guardian Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ama Mensah"
                    value={orderForm.parentName}
                    onChange={(e) => setOrderForm({ ...orderForm, parentName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                      Phone / WhatsApp:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="055 123 4567"
                      value={orderForm.phone}
                      onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.95rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                      Delivery City / Region:
                    </label>
                    <select
                      value={orderForm.city}
                      onChange={(e) => setOrderForm({ ...orderForm, city: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.95rem',
                        outline: 'none',
                        background: '#ffffff',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="Accra">Greater Accra (24h)</option>
                      <option value="Tema">Tema / Ashaiman (24h)</option>
                      <option value="Kumasi">Kumasi (24-48h)</option>
                      <option value="Takoradi">Takoradi / Sekondi (48h)</option>
                      <option value="Cape Coast">Cape Coast (48h)</option>
                      <option value="Other">Other Regions (Courier 48h)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Delivery Landmark / Street Address:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. East Legon, Near American House"
                    value={orderForm.deliveryAddress}
                    onChange={(e) => setOrderForm({ ...orderForm, deliveryAddress: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Quantity and Total */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: '#f8fafc',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '14px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Quantity</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
                      <button
                        type="button"
                        onClick={() => setOrderForm({ ...orderForm, quantity: Math.max(1, orderForm.quantity - 1) })}
                        style={{ width: '28px', height: '28px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        -
                      </button>
                      <span style={{ fontWeight: 800, fontSize: '1rem', minWidth: '20px', textAlign: 'center' }}>
                        {orderForm.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setOrderForm({ ...orderForm, quantity: orderForm.quantity + 1 })}
                        style={{ width: '28px', height: '28px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Total Payable</span>
                    <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: '1.5rem', fontWeight: 800, color: '#4338ca' }}>
                      {formatPrice(orderModalKit, orderForm.quantity)}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(90deg, #4338ca 0%, #6366f1 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '16px',
                    padding: '0.95rem',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '0 8px 20px -4px rgba(67, 56, 202, 0.4)',
                    marginTop: '0.5rem'
                  }}
                >
                  Confirm Order &amp; Dispatch Details
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
