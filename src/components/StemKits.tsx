import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  BookOpen, 
  ShoppingBag, 
  ShoppingCart,
  ChevronRight, 
  HelpCircle, 
  Plus, 
  Minus,
  Zap,
  School,
  Search,
  Star,
  Heart,
  Eye,
  Clock,
  Trash2,
  Check,
  Percent
} from 'lucide-react';
import { STEM_KITS, StemKit, SCHOOL_PACK_OFFERING } from '../data/stemKits';

interface CartItem {
  kitId: string;
  quantity: number;
}

const SAFE_KIT_IMAGES: Record<string, string> = {
  'kone-junior-inventor': '/images/kits/junior-circuit-kit.jpg',
  'kone-explorer-rover': '/images/kits/explorer-robotics-rover.jpg',
  'kone-iot-smart-farm': '/images/kits/iot-smart-farm.jpg',
  'kone-ai-vision-companion': '/images/kits/ai-companion-kit.jpg',
  'school-pack': '/images/kits/school-stem-pack.jpg',
  'science-set-4-1': '/images/kits/science-set-4-1.jpg',
  'science-set-4-2': '/images/kits/science-set-4-2.jpg',
  'science-set-4-3': '/images/kits/science-set-4-3.jpg',
  'science-set-5-1': '/images/kits/science-set-5-1.jpg',
  'science-set-5-2': '/images/kits/science-set-5-2.jpg',
  'science-set-5-3': '/images/kits/science-set-5-3.jpg',
  'science-set-6-1': '/images/kits/science-set-6-1.jpg',
  'science-set-6-2': '/images/kits/science-set-6-2.jpg',
  'science-set-6-3': '/images/kits/science-set-6-3.jpg'
};

const getSafeKitImage = (kitId?: string): string => {
  if (kitId && SAFE_KIT_IMAGES[kitId]) {
    return SAFE_KIT_IMAGES[kitId];
  }
  return '/images/kits/junior-circuit-kit.jpg';
};

const WhatsAppIcon: React.FC<{ size?: number; className?: string; color?: string }> = ({ 
  size = 20, 
  color = 'currentColor',
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.476-.15-.677.15-.2.301-.776.98-.952 1.18-.175.201-.35.226-.651.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.3.301-.501.101-.201.05-.376-.025-.526-.075-.151-.677-1.632-.927-2.235-.244-.587-.492-.507-.677-.517-.175-.008-.376-.01-.576-.01-.201 0-.526.075-.802.376-.276.301-1.053 1.029-1.053 2.509 0 1.48 1.078 2.909 1.229 3.11.15.2 2.121 3.238 5.138 4.542.718.311 1.279.496 1.716.635.72.23 1.375.197 1.894.12.578-.087 1.782-.728 2.032-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.2-.577-.35zm2.229-8.799C17.65 3.532 14.954 2.25 12.051 2.25 6.671 2.25 2.28 6.641 2.28 12.021c0 1.721.449 3.399 1.302 4.881L2.25 21.75l4.981-1.307c1.428.78 3.037 1.192 4.814 1.192h.005c5.378 0 9.77-4.391 9.773-9.774.001-2.607-1.01-5.06-2.85-6.9zM12.051 20.02c-1.483 0-2.936-.399-4.202-1.15l-.301-.179-3.127.82.834-3.048-.196-.312c-.824-1.312-1.259-2.842-1.259-4.13 0-4.484 3.65-8.134 8.138-8.134 2.172 0 4.214.846 5.75 2.383 1.536 1.536 2.381 3.578 2.38 5.75-.003 4.485-3.653 8.135-8.139 8.135z" />
  </svg>
);

export default function StemKits() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [ageFilter, setAgeFilter] = useState<string>('All');
  const [currency, setCurrency] = useState<'GHS' | 'USD'>('GHS');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'sales'>('featured');
  
  // Modals & Drawers
  const [activeModalKit, setActiveModalKit] = useState<StemKit | null>(null);
  const [quickViewKit, setQuickViewKit] = useState<StemKit | null>(null);
  const [orderModalKit, setOrderModalKit] = useState<StemKit | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [schoolQuoteOpen, setSchoolQuoteOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // E-commerce interactivity
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('kone_kids_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('kone_kids_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [couponCode, setCouponCode] = useState<string>('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponMessage, setCouponMessage] = useState<string>('');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  // Save cart & wishlist
  useEffect(() => {
    try {
      localStorage.setItem('kone_kids_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('kone_kids_wishlist', JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  // Order form state
  const [orderForm, setOrderForm] = useState({
    parentName: '',
    phone: '',
    city: 'Accra',
    deliveryAddress: '',
    paymentMethod: 'momo'
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // Cart operations
  const addToCart = (kitId: string, qty: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.kitId === kitId);
      if (existing) {
        return prev.map(item => item.kitId === kitId ? { ...item, quantity: item.quantity + qty } : item);
      }
      return [...prev, { kitId, quantity: qty }];
    });
    setRecentlyAddedId(kitId);
    setTimeout(() => setRecentlyAddedId(null), 2500);
  };

  const updateCartQty = (kitId: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.kitId === kitId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[];
    });
  };

  const removeFromCart = (kitId: string) => {
    setCart(prev => prev.filter(item => item.kitId !== kitId));
  };

  const toggleWishlist = (kitId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist(prev => 
      prev.includes(kitId) ? prev.filter(id => id !== kitId) : [...prev, kitId]
    );
  };

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (code === 'STEMKIDS10' || code === 'KIDBOT15') {
      const rate = code === 'KIDBOT15' ? 0.15 : 0.10;
      setAppliedDiscount(rate);
      setCouponMessage(`🎉 Coupon applied! ${rate * 100}% discount active.`);
    } else {
      setAppliedDiscount(0);
      setCouponMessage('❌ Invalid coupon code. Try "STEMKIDS10" for 10% off.');
    }
  };

  // Cart calculations
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartSubtotalGHS = useMemo(() => {
    return cart.reduce((sum, item) => {
      const kit = STEM_KITS.find(k => k.id === item.kitId);
      return sum + (kit ? kit.priceGHS * item.quantity : 0);
    }, 0);
  }, [cart]);

  const cartSubtotalUSD = useMemo(() => {
    return cart.reduce((sum, item) => {
      const kit = STEM_KITS.find(k => k.id === item.kitId);
      return sum + (kit ? kit.priceUSD * item.quantity : 0);
    }, 0);
  }, [cart]);

  const discountAmountGHS = cartSubtotalGHS * appliedDiscount;
  const discountAmountUSD = cartSubtotalUSD * appliedDiscount;

  const finalCartTotalGHS = cartSubtotalGHS - discountAmountGHS;
  const finalCartTotalUSD = cartSubtotalUSD - discountAmountUSD;

  // Filter & Sort
  const categories = ['All', 'GES Science Sets', 'Basic 4', 'Basic 5', 'Basic 6', 'Robotics', 'IoT', 'AI', 'Junior'];
  const ageFilters = [
    { label: 'All Ages', value: 'All' },
    { label: 'Ages 5–8', value: '5-8' },
    { label: 'Ages 8–12', value: '8-12' },
    { label: 'Ages 12–16+', value: '12-16' }
  ];

  const filteredKits = useMemo(() => {
    return STEM_KITS.filter(kit => {
      const matchesCategory = selectedCategory === 'All' 
        || kit.category === selectedCategory
        || (selectedCategory === 'GES Science Sets' && (kit.category === 'Basic 4' || kit.category === 'Basic 5' || kit.category === 'Basic 6'));
      const matchesSearch = searchQuery.trim() === '' || 
        kit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        kit.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        kit.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (kit.gesCurriculumCode && kit.gesCurriculumCode.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (kit.gradeLevel && kit.gradeLevel.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (kit.term && kit.term.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (kit.experiments && kit.experiments.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()))) ||
        kit.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesAge = true;
      if (ageFilter === '5-8') matchesAge = kit.ageMin <= 8 && kit.ageMax >= 5;
      if (ageFilter === '8-12') matchesAge = kit.ageMin <= 12 && kit.ageMax >= 8;
      if (ageFilter === '12-16') matchesAge = kit.ageMax >= 12;

      return matchesCategory && matchesSearch && matchesAge;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return (currency === 'GHS' ? a.priceGHS - b.priceGHS : a.priceUSD - b.priceUSD);
      if (sortBy === 'price-desc') return (currency === 'GHS' ? b.priceGHS - a.priceGHS : b.priceUSD - a.priceUSD);
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'sales') return b.salesCount - a.salesCount;
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, ageFilter, sortBy, currency]);

  // Price formatting
  const formatPrice = (amountGHS: number, amountUSD: number) => {
    if (currency === 'GHS') {
      return `GH₵ ${amountGHS.toLocaleString()}`;
    }
    return `$${amountUSD.toLocaleString()}`;
  };

  const calculateDiscountPercent = (orig: number, current: number) => {
    return Math.round(((orig - current) / orig) * 100);
  };

  // WhatsApp Single Item Order
  const handleWhatsAppOrder = (kit: StemKit, qty: number = 1, address: string = '') => {
    const priceText = formatPrice(kit.priceGHS * qty, kit.priceUSD * qty);
    const msg = encodeURIComponent(
      `Hello Kone Kids Store! 🤖\n\nI want to order the *${kit.title}* (${priceText}, Qty: ${qty}).` +
      (address ? `\n📍 Delivery Address: ${address}` : '') +
      `\n\nPlease send Mobile Money / Card payment details and dispatch timeline. Thank you!`
    );
    window.open(`https://wa.me/233551993820?text=${msg}`, '_blank');
  };

  // WhatsApp Full Cart Order
  const handleWhatsAppCartCheckout = () => {
    if (cart.length === 0) return;
    const itemsList = cart.map(item => {
      const kit = STEM_KITS.find(k => k.id === item.kitId);
      if (!kit) return '';
      const itemPrice = currency === 'GHS' ? `GH₵ ${kit.priceGHS * item.quantity}` : `$${kit.priceUSD * item.quantity}`;
      return `• ${kit.title} (x${item.quantity}) - ${itemPrice}`;
    }).filter(Boolean).join('\n');

    const totalText = currency === 'GHS' ? `GH₵ ${finalCartTotalGHS.toLocaleString()}` : `$${finalCartTotalUSD.toLocaleString()}`;

    const msg = encodeURIComponent(
      `Hello Kone Kids Store! 🛍️\n\nI would like to place an order for my cart:\n\n${itemsList}\n\n*Total: ${totalText}*` +
      (appliedDiscount > 0 ? ` (Includes ${appliedDiscount * 100}% promo discount)` : '') +
      `\n\n📍 Delivery Destination: Accra / Kumasi\n\nPlease confirm Mobile Money payment details and courier dispatch schedule!`
    );
    window.open(`https://wa.me/233551993820?text=${msg}`, '_blank');
  };

  const handleSchoolQuoteWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello Kone Kids Team! 🏫\n\nI am inquiring about a *School / STEM Club Pack* for our institution.\nWe are interested in equipping a classroom with student kits, teacher lesson guides, and workshop training.\n\nPlease share your school catalog and pricing breakdown.`
    );
    window.open(`https://wa.me/233551993820?text=${msg}`, '_blank');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0b1120', color: '#f8fafc', paddingBottom: '5rem' }}>
      
      {/* 1. TOP HEADER & NAVIGATION */}
      <header style={{
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '0.75rem 1.25rem'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          {/* Logo & Back Link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link 
              to="/" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#94a3b8',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '0.4rem 0.75rem',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.05)',
                transition: 'all 0.2s'
              }}
            >
              <ArrowLeft size={16} />
              <span>Learning Hub</span>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, #f97316 0%, #e11d48 100%)',
                color: '#ffffff',
                padding: '0.35rem 0.65rem',
                borderRadius: '10px',
                fontWeight: 900,
                fontSize: '0.85rem',
                letterSpacing: '0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <Cpu size={16} />
                <span>KONE STEM STORE</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div style={{
            flex: '1 1 320px',
            maxWidth: '520px',
            position: 'relative'
          }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input 
              type="text"
              placeholder="Search rovers, sensors, snap circuits, microcontrollers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 2.2rem 0.6rem 2.5rem',
                background: '#1e293b',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '0.88rem',
                outline: 'none',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)'
              }}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                ×
              </button>
            )}
          </div>

          {/* Right Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              display: 'inline-flex',
              background: '#1e293b',
              padding: '0.2rem',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <button
                onClick={() => setCurrency('GHS')}
                style={{
                  padding: '0.35rem 0.65rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: currency === 'GHS' ? '#f97316' : 'transparent',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                GH₵ (GHS)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                style={{
                  padding: '0.35rem 0.65rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: currency === 'USD' ? '#f97316' : 'transparent',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                $ (USD)
              </button>
            </div>

            <a
              href="https://wa.me/233551993820?text=Hello%20Kone%20Kids!%20I%20have%20an%20inquiry%20about%20your%20STEM%20kits."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#4ade80',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 800,
                padding: '0.4rem 0.75rem',
                borderRadius: '10px',
                background: 'rgba(37, 211, 102, 0.12)',
                border: '1px solid rgba(37, 211, 102, 0.25)',
                transition: 'all 0.2s'
              }}
              title="Chat with STEM Lab Coordinator on WhatsApp"
            >
              <WhatsAppIcon size={16} />
              <span>055 199 3820</span>
            </a>

            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '0.5rem 1rem',
                fontSize: '0.88rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)'
              }}
            >
              <ShoppingCart size={18} />
              <span>Cart</span>
              {totalCartItems > 0 && (
                <span style={{
                  background: '#ef4444',
                  color: '#ffffff',
                  borderRadius: '999px',
                  padding: '0.15rem 0.45rem',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  marginLeft: '0.15rem'
                }}>
                  {totalCartItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO STOREFRONT BANNER & TRUST STRIP */}
      <section style={{
        maxWidth: '1280px',
        margin: '1.5rem auto',
        padding: '0 1.25rem'
      }}>
        <div style={{
          background: 'radial-gradient(ellipse at top right, rgba(249, 115, 22, 0.22) 0%, rgba(30, 27, 75, 0.95) 100%), #0f172a',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '2.5rem 2rem',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)'
        }}>
          <div style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(249, 115, 22, 0.2)',
              border: '1px solid rgba(249, 115, 22, 0.4)',
              color: '#fdba74',
              padding: '0.35rem 0.85rem',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 800,
              marginBottom: '1rem'
            }}>
              <Sparkles size={14} />
              OFFICIAL HANDS-ON STEM HARDWARE
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              fontFamily: "'Baloo 2', 'Nunito', sans-serif"
            }}>
              Real Hardware Kits That Bring <span style={{ color: '#f97316' }}>Coding &amp; Robotics to Life</span>
            </h1>

            <p style={{
              fontSize: '1.05rem',
              color: '#cbd5e1',
              lineHeight: 1.6,
              marginBottom: '1.75rem',
              maxWidth: '680px'
            }}>
              Child-safe, solderless electronics and smart rovers delivered across Ghana. Every kit connects directly to our online interactive coding missions with step-by-step video builds.
            </p>

            {/* Trust Badges Strip */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '1.25rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ background: 'rgba(56, 189, 248, 0.15)', padding: '0.5rem', borderRadius: '10px', color: '#38bdf8' }}>
                  <Truck size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.88rem' }}>Fast Ghana Dispatch</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>24–48h Accra &amp; Kumasi</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ background: 'rgba(52, 211, 153, 0.15)', padding: '0.5rem', borderRadius: '10px', color: '#34d399' }}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.88rem' }}>14-Day Guarantee</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Free parts replacement</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ background: 'rgba(251, 191, 36, 0.15)', padding: '0.5rem', borderRadius: '10px', color: '#fbbf24' }}>
                  <BookOpen size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.88rem' }}>Video Missions</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Illustrated build guide</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ background: 'rgba(168, 85, 247, 0.15)', padding: '0.5rem', borderRadius: '10px', color: '#a855f7' }}>
                  <Zap size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.88rem' }}>MoMo &amp; Cards</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>MTN, Telecel &amp; Visa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FILTER, CATEGORY & SORT BAR */}
      <section style={{
        maxWidth: '1280px',
        margin: '0 auto 1.5rem',
        padding: '0 1.25rem'
      }}>
        <div style={{
          background: '#0f172a',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          {/* Category Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map(cat => {
              const count = cat === 'All' 
                ? STEM_KITS.length 
                : cat === 'GES Science Sets'
                ? STEM_KITS.filter(k => k.category === 'Basic 4' || k.category === 'Basic 5' || k.category === 'Basic 6').length
                : STEM_KITS.filter(k => k.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.45rem 0.9rem',
                    borderRadius: '10px',
                    border: isActive ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    background: isActive ? '#f97316' : '#1e293b',
                    color: '#ffffff',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <span>
                    {cat === 'All' ? 'All Kits' : cat === 'GES Science Sets' ? '🔬 GES Science Sets' : cat.startsWith('Basic') ? `${cat} (NaCCA)` : `${cat} Kits`}
                  </span>
                  <span style={{
                    background: isActive ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.1)',
                    padding: '0.1rem 0.35rem',
                    borderRadius: '999px',
                    fontSize: '0.75rem'
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Age Filters & Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: '#94a3b8' }}>
              <span>Age:</span>
              {ageFilters.map(af => (
                <button
                  key={af.value}
                  onClick={() => setAgeFilter(af.value)}
                  style={{
                    padding: '0.3rem 0.6rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: ageFilter === af.value ? 'rgba(14, 165, 233, 0.25)' : 'transparent',
                    color: ageFilter === af.value ? '#38bdf8' : '#94a3b8',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: 'pointer'
                  }}
                >
                  {af.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                style={{
                  background: '#1e293b',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="featured">Featured (Best Deals)</option>
                <option value="sales">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT CARDS GRID (Visual E-Commerce Design) */}
      <main style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.25rem'
      }}>
        {filteredKits.length === 0 ? (
          <div style={{
            background: '#1e293b',
            borderRadius: '20px',
            padding: '3rem 2rem',
            textAlign: 'center',
            color: '#94a3b8'
          }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc' }}>No STEM kits found matching your search</p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Try clearing the search query or adjusting your age filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setAgeFilter('All'); }}
              style={{
                marginTop: '1.25rem',
                background: '#f97316',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                padding: '0.5rem 1.2rem',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredKits.map(kit => {
              const isWishlisted = wishlist.includes(kit.id);
              const isRecentlyAdded = recentlyAddedId === kit.id;
              const discountPercent = calculateDiscountPercent(kit.originalPriceGHS, kit.priceGHS);
              const savingsAmount = formatPrice(kit.originalPriceGHS - kit.priceGHS, kit.originalPriceUSD - kit.priceUSD);
              const safeImgSrc = getSafeKitImage(kit.id);

              return (
                <div
                  key={kit.id}
                  onClick={() => setQuickViewKit(kit)}
                  style={{
                    background: '#1e293b',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.25)';
                  }}
                >
                  {/* Clean, Unobstructed Product Image */}
                  <div 
                    style={{
                      width: '100%',
                      height: '220px',
                      background: '#0f172a',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <img 
                      src={safeImgSrc}
                      alt={kit.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      loading="lazy"
                    />
                  </div>

                  {/* Clean Product Details */}
                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{
                        color: '#38bdf8',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}>
                        {kit.category} • {kit.ageRange}
                      </span>
                      {kit.gesCurriculumCode && (
                        <span style={{
                          color: '#4ade80',
                          fontSize: '0.72rem',
                          fontWeight: 700
                        }}>
                          🇬🇭 {kit.gesCurriculumCode}
                        </span>
                      )}
                    </div>

                    <h3 
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        lineHeight: 1.35,
                        margin: '0 0 0.4rem 0',
                        fontFamily: "'Nunito', sans-serif"
                      }}
                    >
                      {kit.title}
                    </h3>

                    <p style={{
                      fontSize: '0.82rem',
                      color: '#94a3b8',
                      lineHeight: 1.45,
                      margin: 0,
                      marginBottom: '1.25rem',
                      flex: 1
                    }}>
                      {kit.tagline}
                    </p>

                    {/* Price & Clean Actions */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      marginTop: 'auto',
                      gap: '0.5rem'
                    }}>
                      <div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>
                          {formatPrice(kit.priceGHS, kit.priceUSD)}
                        </div>
                        {kit.originalPriceGHS > kit.priceGHS && (
                          <div style={{ fontSize: '0.76rem', color: '#64748b', textDecoration: 'line-through' }}>
                            {formatPrice(kit.originalPriceGHS, kit.originalPriceUSD)}
                          </div>
                        )}
                      </div>

                      <button
                        className="kids-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuickViewKit(kit);
                        }}
                        style={{
                          padding: '0.45rem 1.1rem',
                          fontSize: '0.85rem',
                          minHeight: '38px',
                          '--shadow-height': '4px',
                          '--shadow-color': '#9a3412',
                          borderRadius: '12px',
                          gap: '0.35rem'
                        } as any}
                      >
                        <span>Explore Kit</span>
                        <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* 6. SCHOOL STEM LAB MEGA-PACK HERO SECTION */}
      <section style={{
        maxWidth: '1280px',
        margin: '3.5rem auto 2rem',
        padding: '0 1.25rem'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '24px',
          padding: '2.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(168, 85, 247, 0.2)',
              color: '#d8b4fe',
              padding: '0.35rem 0.8rem',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 800,
              marginBottom: '1rem'
            }}>
              <School size={16} />
              CLASSROOM &amp; CLUB EQUIPMENT
            </div>

            <h2 style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '1rem'
            }}>
              {SCHOOL_PACK_OFFERING.title}
            </h2>

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {SCHOOL_PACK_OFFERING.subtitle}
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {SCHOOL_PACK_OFFERING.features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={handleSchoolQuoteWhatsApp}
                style={{
                  background: '#25d366',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '14px',
                  padding: '0.85rem 1.75rem',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)'
                }}
              >
                <WhatsAppIcon size={20} />
                <span>Request School Lab Quotation</span>
              </button>

              <button
                onClick={() => setSchoolQuoteOpen(true)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '14px',
                  padding: '0.85rem 1.5rem',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                School Inquiry Form
              </button>
            </div>
          </div>

          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '2px solid rgba(139, 92, 246, 0.4)',
            boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
            maxHeight: '440px'
          }}>
            <img 
              src={getSafeKitImage('school-pack')} 
              alt={SCHOOL_PACK_OFFERING.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95), transparent)',
              padding: '1.5rem 1.25rem 1rem'
            }}>
              <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.95rem' }}>10x–20x Complete Student Sets</div>
              <div style={{ color: '#cbd5e1', fontSize: '0.8rem' }}>Storage organizer bins, spare motors &amp; teacher curriculum guides included</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PARENT & SCHOOL FAQ ACCORDION */}
      <section style={{
        maxWidth: '900px',
        margin: '4rem auto 2rem',
        padding: '0 1.25rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(249, 115, 22, 0.15)',
            color: '#fb923c',
            padding: '0.3rem 0.8rem',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: 800,
            marginBottom: '0.75rem'
          }}>
            <HelpCircle size={14} />
            BUYER ASSURANCE &amp; QUESTIONS
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#f8fafc' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.4rem' }}>
            Everything parents and schools need to know about deliveries, safety, and online mission pairing.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            {
              q: "How does delivery work across Ghana?",
              a: "We deliver directly to your doorstep or school address within Greater Accra in 24–48 hours. Orders to Kumasi, Takoradi, Cape Coast, and Tamale are dispatched via VIP/OA Express parcels or DHL with tracked SMS notification. Orders over GH₵ 500 qualify for free delivery!"
            },
            {
              q: "Does my child need soldering equipment or dangerous tools?",
              a: "Absolutely not! All Kone Kids kits are 100% solderless, child-safe, and low-voltage (3V–5V DC). Components connect using tactile magnetic snap blocks or Dupont ribbon jumper wires with zero exposed mains power."
            },
            {
              q: "What if a part breaks or is missing from the box?",
              a: "We offer a 14-Day Hassle-Free Replacement Guarantee on all hardware. Simply send a photo of the damaged wire, motor, or sensor to our WhatsApp support line (+233 55 199 3820), and our team will courier a free replacement part immediately."
            },
            {
              q: "Can children without programming experience use these kits?",
              a: "Yes! Every kit comes with a full-color printed comic/manual and access to our online video tutorials. Beginners start with visual drag-and-drop Blockly missions on our virtual learning hub before advancing to real micro-controller code."
            },
            {
              q: "What payment methods are supported?",
              a: "We accept MTN Mobile Money, Telecel Cash, AT Money, Visa, Mastercard, and Bank Transfer. Cash on delivery is also available for confirmed residential addresses within Accra."
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              style={{
                background: '#1e293b',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden'
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={{
                  width: '100%',
                  padding: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'transparent',
                  border: 'none',
                  color: '#f8fafc',
                  fontSize: '0.98rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span>{item.q}</span>
                <span style={{ fontSize: '1.2rem', color: '#f97316', transform: openFaq === idx ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>
                  +
                </span>
              </button>
              {openFaq === idx && (
                <div style={{ padding: '0 1.2rem 1.2rem', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. SLIDE-OUT CART DRAWER */}
      {isCartOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 200,
          display: 'flex',
          justifyContent: 'flex-end',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '440px',
            height: '100%',
            background: '#0f172a',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '-8px 0 30px rgba(0, 0, 0, 0.6)'
          }}>
            <div style={{
              padding: '1.25rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShoppingCart size={20} color="#f97316" />
                <span style={{ fontWeight: 900, fontSize: '1.1rem', color: '#ffffff' }}>
                  Your STEM Cart ({totalCartItems})
                </span>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '1.4rem',
                  cursor: 'pointer',
                  padding: '0.2rem'
                }}
              >
                ×
              </button>
            </div>

            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94a3b8' }}>
                  <ShoppingCart size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                  <p style={{ fontWeight: 800, fontSize: '1.05rem', color: '#f8fafc' }}>Your cart is empty</p>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.4rem' }}>Explore our robotics rovers, snap circuits, and smart farm kits.</p>
                </div>
              ) : (
                cart.map(item => {
                  const kit = STEM_KITS.find(k => k.id === item.kitId);
                  if (!kit) return null;
                  const itemPriceText = formatPrice(kit.priceGHS * item.quantity, kit.priceUSD * item.quantity);
                  const safeImgSrc = getSafeKitImage(kit.id);

                  return (
                    <div 
                      key={item.kitId}
                      style={{
                        background: '#1e293b',
                        borderRadius: '14px',
                        padding: '0.85rem',
                        display: 'flex',
                        gap: '0.85rem',
                        alignItems: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      <img 
                        src={safeImgSrc} 
                        alt={kit.title}
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '10px',
                          objectFit: 'cover'
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#ffffff', lineHeight: 1.25 }}>
                          {kit.title}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#f97316', fontWeight: 900, marginTop: '0.25rem' }}>
                          {itemPriceText}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                          <button
                            onClick={() => updateCartQty(item.kitId, -1)}
                            style={{
                              background: 'rgba(255,255,255,0.08)',
                              border: 'none',
                              borderRadius: '6px',
                              width: '24px',
                              height: '24px',
                              color: '#ffffff',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <Minus size={12} />
                          </button>
                          <span style={{ fontSize: '0.85rem', fontWeight: 800, minWidth: '18px', textAlign: 'center' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateCartQty(item.kitId, 1)}
                            style={{
                              background: 'rgba(255,255,255,0.08)',
                              border: 'none',
                              borderRadius: '6px',
                              width: '24px',
                              height: '24px',
                              color: '#ffffff',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.kitId)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#ef4444',
                          cursor: 'pointer',
                          padding: '0.4rem'
                        }}
                        title="Remove Item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            {cart.length > 0 && (
              <div style={{
                padding: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                background: '#090d16'
              }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  <input 
                    type="text"
                    placeholder="Coupon (try STEMKIDS10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    style={{
                      flex: 1,
                      background: '#1e293b',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      padding: '0.45rem 0.75rem',
                      color: '#ffffff',
                      fontSize: '0.82rem',
                      outline: 'none',
                      textTransform: 'uppercase'
                    }}
                  />
                  <button
                    onClick={applyCoupon}
                    style={{
                      background: '#334155',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '0.45rem 0.85rem',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    Apply
                  </button>
                </div>
                {couponMessage && (
                  <div style={{ fontSize: '0.78rem', color: appliedDiscount > 0 ? '#10b981' : '#f87171', marginBottom: '0.75rem' }}>
                    {couponMessage}
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Subtotal:</span>
                    <span style={{ color: '#ffffff', fontWeight: 800 }}>{formatPrice(cartSubtotalGHS, cartSubtotalUSD)}</span>
                  </div>
                  {appliedDiscount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10b981' }}>
                      <span>Discount ({appliedDiscount * 100}%):</span>
                      <span>-{formatPrice(discountAmountGHS, discountAmountUSD)}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Greater Accra Delivery:</span>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>
                      {finalCartTotalGHS >= 500 ? 'FREE' : formatPrice(25, 3)}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '1.15rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '0.5rem',
                    marginTop: '0.2rem'
                  }}>
                    <span>Total:</span>
                    <span style={{ color: '#f97316' }}>{formatPrice(finalCartTotalGHS, finalCartTotalUSD)}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <button
                    onClick={handleWhatsAppCartCheckout}
                    style={{
                      width: '100%',
                      background: '#25d366',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '0.75rem',
                      fontWeight: 800,
                      fontSize: '0.92rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)'
                    }}
                  >
                    <WhatsAppIcon size={20} />
                    <span>Instant WhatsApp Checkout</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setOrderModalKit(STEM_KITS[0]);
                    }}
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '0.75rem',
                      fontWeight: 800,
                      fontSize: '0.92rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <ShoppingBag size={18} />
                    <span>MoMo &amp; Card Checkout Form</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 9. QUICK VIEW & DETAILED PRODUCT MODAL */}
      {quickViewKit && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          zIndex: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div style={{
            background: '#0f172a',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '24px',
            maxWidth: '900px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            padding: '2rem',
            position: 'relative'
          }}>
            <button
              onClick={() => setQuickViewKit(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                color: '#ffffff',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.2rem',
                zIndex: 10
              }}
            >
              ×
            </button>

            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              background: '#1e293b',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              height: '360px'
            }}>
              <img 
                src={getSafeKitImage(quickViewKit.id)} 
                alt={quickViewKit.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{
                  background: 'rgba(249, 115, 22, 0.2)',
                  color: '#fb923c',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 900
                }}>
                  {quickViewKit.badge}
                </span>
                <span style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 700 }}>
                  {quickViewKit.ageRange}
                </span>
              </div>

              <h2 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.25, marginBottom: '0.5rem' }}>
                {quickViewKit.title}
              </h2>

              <div style={{
                background: '#1e293b',
                padding: '0.85rem 1rem',
                borderRadius: '12px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.75rem',
                flexWrap: 'wrap'
              }}>
                <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#f97316' }}>
                  {formatPrice(quickViewKit.priceGHS, quickViewKit.priceUSD)}
                </span>
                {quickViewKit.originalPriceGHS > quickViewKit.priceGHS && (
                  <span style={{ color: '#64748b', textDecoration: 'line-through', fontSize: '1rem' }}>
                    {formatPrice(quickViewKit.originalPriceGHS, quickViewKit.originalPriceUSD)}
                  </span>
                )}
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '1rem' }}>
                {quickViewKit.overview}
              </p>

              {quickViewKit.gesCurriculumCode && (
                <div style={{
                  background: 'rgba(34, 197, 94, 0.12)',
                  border: '1px solid rgba(34, 197, 94, 0.25)',
                  borderRadius: '10px',
                  padding: '0.6rem 0.85rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.82rem',
                  color: '#4ade80',
                  fontWeight: 800
                }}>
                  <span>🇬🇭</span>
                  <span>Ghana NaCCA / GES Standard: {quickViewKit.gesCurriculumCode}</span>
                </div>
              )}

              {quickViewKit.experiments && quickViewKit.experiments.length > 0 && (
                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '0.85rem',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#38bdf8', marginBottom: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    📦 Core Curriculum Experiments on Physical Box:
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.82rem', color: '#e2e8f0', lineHeight: 1.55 }}>
                    {quickViewKit.experiments.map((exp, idx) => (
                      <li key={idx} style={{ marginBottom: '0.2rem' }}>{exp}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span><strong>100% Solderless:</strong> {quickViewKit.requiresSoldering ? 'Soldering required' : 'No soldering needed, plug-and-play'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span><strong>Power:</strong> {quickViewKit.batteryInfo}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span><strong>Online missions:</strong> Included with video tutorials</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                <button
                  onClick={() => {
                    addToCart(quickViewKit.id, 1);
                    setQuickViewKit(null);
                    setIsCartOpen(true);
                  }}
                  style={{
                    flex: 1,
                    background: '#f97316',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '0.85rem',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <ShoppingCart size={18} />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={() => handleWhatsAppOrder(quickViewKit, 1)}
                  style={{
                    background: '#25d366',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '0.85rem 1.4rem',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)'
                  }}
                >
                  <WhatsAppIcon size={20} />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 10. "WHAT'S IN THE BOX" MODAL */}
      {activeModalKit && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          zIndex: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div style={{
            background: '#0f172a',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '24px',
            maxWidth: '680px',
            width: '100%',
            maxHeight: '85vh',
            overflowY: 'auto',
            padding: '2rem',
            position: 'relative'
          }}>
            <button
              onClick={() => setActiveModalKit(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                color: '#ffffff',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                cursor: 'pointer',
                fontSize: '1.2rem'
              }}
            >
              ×
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <img 
                src={getSafeKitImage(activeModalKit.id)} 
                alt={activeModalKit.title} 
                style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover' }}
              />
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>
                  What's in the Box?
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{activeModalKit.title}</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
              {activeModalKit.components.map((comp, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: '#1e293b',
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#f8fafc' }}>{comp.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{comp.detail}</div>
                  </div>
                  <span style={{
                    background: 'rgba(14, 165, 233, 0.15)',
                    color: '#38bdf8',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 800
                  }}>
                    {comp.qty}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => {
                  addToCart(activeModalKit.id, 1);
                  setActiveModalKit(null);
                  setIsCartOpen(true);
                }}
                style={{
                  flex: 1,
                  background: '#f97316',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0.85rem',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  cursor: 'pointer'
                }}
              >
                Add This Kit to Cart
              </button>
              <button
                onClick={() => handleWhatsAppOrder(activeModalKit, 1)}
                style={{
                  background: '#25d366',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0.85rem 1.25rem',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                }}
              >
                <WhatsAppIcon size={18} />
                <span>Order on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 11. MOMO / CARD ORDER MODAL */}
      {orderModalKit && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          zIndex: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            background: '#0f172a',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '24px',
            maxWidth: '540px',
            width: '100%',
            padding: '2rem',
            position: 'relative'
          }}>
            <button
              onClick={() => { setOrderModalKit(null); setOrderSubmitted(false); }}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                color: '#ffffff',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                cursor: 'pointer',
                fontSize: '1.2rem'
              }}
            >
              ×
            </button>

            {orderSubmitted ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🎉</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#10b981', marginBottom: '0.5rem' }}>
                  Order Request Received!
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{orderForm.parentName}</strong>. Our admissions &amp; fulfillment desk will call/WhatsApp you at <strong>{orderForm.phone}</strong> to confirm delivery in <strong>{orderForm.city}</strong>.
                </p>
                <button
                  onClick={() => {
                    handleWhatsAppOrder(orderModalKit, 1, `${orderForm.city}, ${orderForm.deliveryAddress}`);
                    setOrderModalKit(null);
                    setOrderSubmitted(false);
                  }}
                  style={{
                    background: '#25d366',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '0.75rem 1.5rem',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <WhatsAppIcon size={20} />
                  <span>Speed up on WhatsApp (+233 55 199 3820)</span>
                </button>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.25rem' }}>
                  Delivery &amp; Checkout
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                  Complete details for doorstep courier dispatch across Ghana.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); setOrderSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.3rem' }}>Parent / Guardian Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Kwesi Mensah"
                      value={orderForm.parentName}
                      onChange={(e) => setOrderForm({ ...orderForm, parentName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: '#1e293b',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px',
                        color: '#ffffff',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.3rem' }}>Phone Number (WhatsApp Active)</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. 055 199 3820"
                      value={orderForm.phone}
                      onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: '#1e293b',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px',
                        color: '#ffffff',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.3rem' }}>City / Town</label>
                      <select
                        value={orderForm.city}
                        onChange={(e) => setOrderForm({ ...orderForm, city: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          background: '#1e293b',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '10px',
                          color: '#ffffff',
                          fontSize: '0.88rem'
                        }}
                      >
                        <option value="Accra">Greater Accra</option>
                        <option value="Kumasi">Kumasi</option>
                        <option value="Takoradi">Takoradi</option>
                        <option value="Tema">Tema</option>
                        <option value="Cape Coast">Cape Coast</option>
                        <option value="Tamale">Tamale</option>
                        <option value="Other">Other Ghana Region</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.3rem' }}>Payment</label>
                      <select
                        value={orderForm.paymentMethod}
                        onChange={(e) => setOrderForm({ ...orderForm, paymentMethod: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          background: '#1e293b',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '10px',
                          color: '#ffffff',
                          fontSize: '0.88rem'
                        }}
                      >
                        <option value="momo">MTN / Telecel MoMo</option>
                        <option value="card">Visa / Mastercard</option>
                        <option value="cod">Cash on Delivery (Accra)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.3rem' }}>Delivery Address / Landmark</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. East Legon, near American House"
                      value={orderForm.deliveryAddress}
                      onChange={(e) => setOrderForm({ ...orderForm, deliveryAddress: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: '#1e293b',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px',
                        color: '#ffffff',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      marginTop: '0.5rem',
                      background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '0.8rem',
                      fontSize: '0.95rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(249, 115, 22, 0.4)'
                    }}
                  >
                    Confirm &amp; Place Order
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 12. SCHOOL LAB INQUIRY MODAL */}
      {schoolQuoteOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          zIndex: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            background: '#0f172a',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '24px',
            maxWidth: '540px',
            width: '100%',
            padding: '2rem',
            position: 'relative'
          }}>
            <button
              onClick={() => setSchoolQuoteOpen(false)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                color: '#ffffff',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                cursor: 'pointer',
                fontSize: '1.2rem'
              }}
            >
              ×
            </button>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.25rem' }}>
              School &amp; Club STEM Lab Quote
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
              Equip 10 to 100+ students with hardware kits, curriculum manuals, and teacher workshops.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '12px' }}>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#d8b4fe' }}>Direct Admissions &amp; Lab Desk:</div>
                <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.25rem' }}>
                  📞 Phone/WhatsApp: <strong>+233 55 199 3820</strong><br />
                  ✉️ Email: <strong>admissions@koneacademy.io</strong><br />
                  📍 Lab Center: Accra, Ghana
                </div>
              </div>

              <button
                onClick={handleSchoolQuoteWhatsApp}
                style={{
                  background: '#25d366',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0.85rem',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)'
                }}
              >
                <WhatsAppIcon size={20} />
                <span>Chat with Lab Director on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
