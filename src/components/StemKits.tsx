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
  Percent,
  FileText
} from 'lucide-react';
import { STEM_KITS, StemKit, SCHOOL_PACK_OFFERING } from '../data/stemKits';
import { useIsMobile } from '../hooks/useMediaQuery';

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
  const isMobile = useIsMobile();
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
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
      color: '#0f172a',
      paddingBottom: '5rem',
      fontFamily: "'Nunito', sans-serif"
    }}>
      
      {/* 1. TOP HEADER & NAVIGATION */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e2e8f0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: isMobile ? '0.55rem 0.85rem' : '0.75rem 1.25rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)'
      }}>
        {isMobile ? (
          <div>
            {/* Mobile Row 1: Back + Brand on Left, Cart on Right */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem'
            }}>
              {/* Left: Back button & clean title with mascot */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', minWidth: 0 }}>
                <Link 
                  to="/" 
                  aria-label="Back to Learning Hub"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: '#f1f5f9',
                    border: '1px solid #e2e8f0',
                    color: '#334155',
                    textDecoration: 'none',
                    flexShrink: 0
                  }}
                >
                  <ArrowLeft size={18} />
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', minWidth: 0 }}>
                  <img src="/mascot.svg" alt="Drop" width="22" height="22" style={{ height: '22px', width: 'auto', flexShrink: 0 }} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{
                      fontFamily: "'Baloo 2', cursive",
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#1e3a8a',
                      lineHeight: 1.15,
                      whiteSpace: 'nowrap'
                    }}>
                      STEM Store
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 700, whiteSpace: 'nowrap' }}>
                      Kone Kids Hardware
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="Open Cart"
                style={{
                  position: 'relative',
                  height: '36px',
                  padding: '0 0.85rem',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  border: 'none',
                  color: '#ffffff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  cursor: 'pointer',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  boxShadow: '0 2px 8px rgba(16, 185, 129, 0.25)',
                  flexShrink: 0
                }}
              >
                <ShoppingCart size={16} />
                <span>Cart</span>
                {totalCartItems > 0 && (
                  <span style={{
                    minWidth: '18px',
                    height: '18px',
                    borderRadius: '999px',
                    background: '#ef4444',
                    color: '#ffffff',
                    fontSize: '0.68rem',
                    fontWeight: 900,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 3px',
                    border: '1.5px solid #ffffff'
                  }}>
                    {totalCartItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Row 2: Compact Search Bar */}
            <div style={{ marginTop: '0.5rem', position: 'relative' }}>
              <Search size={15} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input 
                type="text"
                placeholder="Search kits, rovers, GES science sets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.42rem 1.8rem 0.42rem 2.1rem',
                  background: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '10px',
                  color: '#0f172a',
                  fontSize: '0.82rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)'
                }}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    padding: '2px'
                  }}
                >
                  ×
                </button>
              )}
            </div>
          </div>
        ) : (
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}>
            {/* Logo & Back Link */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link 
                to="/" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#475569',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  padding: '0.4rem 0.75rem',
                  borderRadius: '10px',
                  background: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.2s'
                }}
              >
                <ArrowLeft size={16} />
                <span>Learning Hub</span>
              </Link>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  background: 'rgba(249, 115, 22, 0.1)',
                  color: '#ea580c',
                  border: '1px solid rgba(249, 115, 22, 0.25)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '10px',
                  fontWeight: 900,
                  fontSize: '0.85rem',
                  letterSpacing: '0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: "'Baloo 2', cursive"
                }}>
                  <img src="/mascot.svg" alt="Drop" width="18" height="18" style={{ height: '18px', width: 'auto' }} />
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
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input 
                type="text"
                placeholder="Search rovers, sensors, snap circuits, GES sets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.55rem 2.2rem 0.55rem 2.5rem',
                  background: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '12px',
                  color: '#0f172a',
                  fontSize: '0.88rem',
                  outline: 'none',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.02)'
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
                    color: '#64748b',
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
                background: '#f1f5f9',
                padding: '0.2rem',
                borderRadius: '10px',
                border: '1px solid #e2e8f0'
              }}>
                <button
                  onClick={() => setCurrency('GHS')}
                  style={{
                    padding: '0.35rem 0.65rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: currency === 'GHS' ? 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)' : 'transparent',
                    color: currency === 'GHS' ? '#ffffff' : '#64748b',
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
                    background: currency === 'USD' ? 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)' : 'transparent',
                    color: currency === 'USD' ? '#ffffff' : '#64748b',
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
                  color: '#16a34a',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  padding: '0.4rem 0.75rem',
                  borderRadius: '10px',
                  background: 'rgba(37, 211, 102, 0.12)',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
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
                  boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)'
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
                    marginLeft: '0.15rem',
                    border: '2px solid #ffffff'
                  }}>
                    {totalCartItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO STOREFRONT HEADER */}
      <section style={{
        maxWidth: '1280px',
        margin: isMobile ? '1rem auto 0.75rem' : '2rem auto 1.5rem',
        padding: isMobile ? '0 0.85rem' : '0 1.25rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? '0.5rem' : '0.85rem'
        }}>
          {/* Friendly Tag Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            background: 'rgba(14, 165, 233, 0.1)',
            border: '1px solid rgba(14, 165, 233, 0.25)',
            color: '#0284c7',
            padding: '0.35rem 0.85rem',
            borderRadius: '999px',
            fontSize: '0.82rem',
            fontWeight: 800,
            width: 'fit-content'
          }}>
            <img src="/mascot.svg" alt="Drop" width="18" height="18" style={{ height: '18px', width: 'auto' }} />
            <span>DROP'S STEM HARDWARE LAB</span>
          </div>

          <h1 style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: isMobile ? '1.75rem' : 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            margin: 0,
            color: '#1e3a8a'
          }}>
            Real STEM Hardware &amp; <span style={{ color: '#ea580c' }}>Science Sets</span>
          </h1>

          <p style={{
            fontSize: isMobile ? '0.92rem' : '1.1rem',
            color: '#475569',
            lineHeight: 1.55,
            margin: 0,
            maxWidth: '680px'
          }}>
            Child-safe electronics, smart robotics rovers, and official Ghana GES curriculum science sets delivered to homes and schools across Ghana.
          </p>

          {/* Clean Trust Badges Strip in Soft Light Badges */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '0.45rem' : '0.75rem',
            marginTop: isMobile ? '0.4rem' : '0.6rem'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              padding: '0.35rem 0.75rem',
              borderRadius: '10px',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#334155',
              boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
            }}>
              <Truck size={15} style={{ color: '#0ea5e9' }} />
              <span>Fast Ghana Dispatch (24–48h)</span>
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              padding: '0.35rem 0.75rem',
              borderRadius: '10px',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#334155',
              boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
            }}>
              <ShieldCheck size={15} style={{ color: '#10b981' }} />
              <span>14-Day Free Parts Guarantee</span>
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              padding: '0.35rem 0.75rem',
              borderRadius: '10px',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#334155',
              boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
            }}>
              <BookOpen size={15} style={{ color: '#f59e0b' }} />
              <span>Video Missions &amp; Guides</span>
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              padding: '0.35rem 0.75rem',
              borderRadius: '10px',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#334155',
              boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
            }}>
              <Zap size={15} style={{ color: '#8b5cf6' }} />
              <span>MoMo &amp; Cards (MTN, Telecel, Visa)</span>
            </div>

            <a
              href="/stem-flyer.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                padding: '0.35rem 0.75rem',
                borderRadius: '10px',
                fontSize: '0.8rem',
                fontWeight: 800,
                color: '#1d4ed8',
                textDecoration: 'none',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                transition: 'all 0.15s ease'
              }}
            >
              <FileText size={15} style={{ color: '#2563eb' }} />
              <span>Printable STEM Flyer (A4)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. FILTER, CATEGORY & SORT BAR */}
      <section style={{
        maxWidth: '1280px',
        margin: isMobile ? '0 auto 1rem' : '0 auto 1.5rem',
        padding: isMobile ? '0 0.85rem' : '0 1.25rem'
      }}>
        <div style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: isMobile ? '14px' : '18px',
          padding: isMobile ? '0.75rem' : '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
        }}>
          {/* Category Pills: Horizontal swipeable rail on mobile */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            overflowX: 'auto',
            flexWrap: isMobile ? 'nowrap' : 'wrap',
            whiteSpace: 'nowrap',
            paddingBottom: isMobile ? '4px' : '0',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
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
                    flexShrink: 0,
                    padding: isMobile ? '0.38rem 0.8rem' : '0.45rem 0.95rem',
                    borderRadius: '10px',
                    border: isActive ? 'none' : '1px solid #e2e8f0',
                    background: isActive ? 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)' : '#f8fafc',
                    color: isActive ? '#ffffff' : '#475569',
                    fontSize: isMobile ? '0.78rem' : '0.84rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    boxShadow: isActive ? '0 2px 8px rgba(234, 88, 12, 0.3)' : 'none',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>
                    {cat === 'All' ? 'All Kits' : cat === 'GES Science Sets' ? '🔬 GES Science Sets' : cat.startsWith('Basic') ? `${cat} (NaCCA)` : `${cat} Kits`}
                  </span>
                  <span style={{
                    background: isActive ? 'rgba(0,0,0,0.2)' : '#e2e8f0',
                    color: isActive ? '#ffffff' : '#64748b',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                    fontWeight: 800
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Age Filters & Sort Dropdown */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            flexWrap: 'wrap',
            paddingTop: '0.5rem',
            borderTop: '1px solid #f1f5f9'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.78rem',
              color: '#64748b',
              overflowX: isMobile ? 'auto' : 'visible',
              whiteSpace: 'nowrap'
            }}>
              <span style={{ fontWeight: 700 }}>Age:</span>
              {ageFilters.map(af => (
                <button
                  key={af.value}
                  onClick={() => setAgeFilter(af.value)}
                  style={{
                    padding: '0.25rem 0.55rem',
                    borderRadius: '6px',
                    border: 'none',
                    background: ageFilter === af.value ? 'rgba(14, 165, 233, 0.15)' : 'transparent',
                    color: ageFilter === af.value ? '#0284c7' : '#64748b',
                    fontWeight: 800,
                    fontSize: '0.76rem',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                >
                  {af.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
              {/* Segmented Currency Switcher */}
              <div style={{
                display: 'inline-flex',
                background: '#f1f5f9',
                padding: '2px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0'
              }}>
                <button
                  onClick={() => setCurrency('GHS')}
                  style={{
                    padding: '0.2rem 0.5rem',
                    borderRadius: '6px',
                    border: 'none',
                    background: currency === 'GHS' ? 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)' : 'transparent',
                    color: currency === 'GHS' ? '#ffffff' : '#64748b',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    lineHeight: 1.2
                  }}
                >
                  GH₵
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  style={{
                    padding: '0.2rem 0.5rem',
                    borderRadius: '6px',
                    border: 'none',
                    background: currency === 'USD' ? 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)' : 'transparent',
                    color: currency === 'USD' ? '#ffffff' : '#64748b',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    lineHeight: 1.2
                  }}
                >
                  USD ($)
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700 }}>Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  style={{
                    background: '#f8fafc',
                    color: '#0f172a',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    padding: '0.25rem 0.55rem',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="featured">Featured</option>
                  <option value="sales">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT CARDS GRID (Visual E-Commerce Design) */}
      <main style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: isMobile ? '0 0.85rem' : '0 1.25rem'
      }}>
        {filteredKits.length === 0 ? (
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            padding: '3rem 2rem',
            textAlign: 'center',
            color: '#64748b'
          }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>No STEM kits found matching your search</p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Try clearing the search query or adjusting your age filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setAgeFilter('All'); }}
              style={{
                marginTop: '1.25rem',
                background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
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
                    background: '#ffffff',
                    borderRadius: '24px',
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = '#cbd5e1';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  {/* Clean, Unobstructed Product Image */}
                  <div 
                    style={{
                      width: '100%',
                      height: '220px',
                      background: '#f8fafc',
                      overflow: 'hidden',
                      position: 'relative',
                      borderBottom: '1px solid #f1f5f9'
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
                        color: '#0284c7',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}>
                        {kit.category} • {kit.ageRange}
                      </span>
                      {kit.gesCurriculumCode && (
                        <span style={{
                          background: 'rgba(34, 197, 94, 0.1)',
                          color: '#16a34a',
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          padding: '0.15rem 0.5rem',
                          borderRadius: '6px'
                        }}>
                          🇬🇭 {kit.gesCurriculumCode}
                        </span>
                      )}
                    </div>

                    <h3 
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 800,
                        color: '#0f172a',
                        lineHeight: 1.35,
                        margin: '0 0 0.4rem 0',
                        fontFamily: "'Nunito', sans-serif"
                      }}
                    >
                      {kit.title}
                    </h3>

                    <p style={{
                      fontSize: '0.82rem',
                      color: '#64748b',
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
                      borderTop: '1px solid #f1f5f9',
                      marginTop: 'auto',
                      gap: '0.5rem'
                    }}>
                      <div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a' }}>
                          {formatPrice(kit.priceGHS, kit.priceUSD)}
                        </div>
                        {kit.originalPriceGHS > kit.priceGHS && (
                          <div style={{ fontSize: '0.76rem', color: '#94a3b8', textDecoration: 'line-through' }}>
                            {formatPrice(kit.originalPriceGHS, kit.originalPriceUSD)}
                          </div>
                        )}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuickViewKit(kit);
                        }}
                        style={{
                          padding: '0.4rem 0.85rem',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          borderRadius: '10px',
                          border: 'none',
                          background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
                          color: '#ffffff',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          boxShadow: '0 2px 6px rgba(234, 88, 12, 0.25)',
                          transition: 'all 0.15s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-1px)';
                          e.currentTarget.style.boxShadow = '0 4px 10px rgba(234, 88, 12, 0.35)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 6px rgba(234, 88, 12, 0.25)';
                        }}
                      >
                        <span>Explore</span>
                        <ChevronRight size={14} />
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
        padding: isMobile ? '0 0.85rem' : '0 1.25rem'
      }}>
        <div style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '24px',
          padding: isMobile ? '1.5rem' : '2.5rem',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(99, 102, 241, 0.1)',
              color: '#4f46e5',
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
              color: '#1e3a8a',
              fontFamily: "'Baloo 2', cursive",
              lineHeight: 1.2,
              marginBottom: '1rem'
            }}>
              {SCHOOL_PACK_OFFERING.title}
            </h2>

            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {SCHOOL_PACK_OFFERING.subtitle}
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {SCHOOL_PACK_OFFERING.features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#334155' }}>
                  <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={handleSchoolQuoteWhatsApp}
                style={{
                  background: '#16a34a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0.8rem 1.6rem',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 3px 12px rgba(22, 163, 74, 0.25)'
                }}
              >
                <WhatsAppIcon size={18} />
                <span>Request School Lab Quotation</span>
              </button>

              <button
                onClick={() => setSchoolQuoteOpen(true)}
                style={{
                  background: '#f8fafc',
                  color: '#334155',
                  border: '1px solid #cbd5e1',
                  borderRadius: '12px',
                  padding: '0.8rem 1.4rem',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                School Inquiry Form
              </button>

              <a
                href="/stem-flyer.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#eff6ff',
                  color: '#1d4ed8',
                  border: '1px solid #bfdbfe',
                  borderRadius: '12px',
                  padding: '0.8rem 1.4rem',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                <FileText size={18} />
                <span>Download Print Flyer (PDF)</span>
              </a>
            </div>
          </div>

          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
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
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)',
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
        padding: isMobile ? '0 0.85rem' : '0 1.25rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(234, 88, 12, 0.1)',
            color: '#ea580c',
            padding: '0.3rem 0.8rem',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: 800,
            marginBottom: '0.75rem'
          }}>
            <HelpCircle size={14} />
            BUYER ASSURANCE &amp; QUESTIONS
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#1e3a8a', fontFamily: "'Baloo 2', cursive" }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.4rem' }}>
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
                background: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={{
                  width: '100%',
                  padding: '1.15rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'transparent',
                  border: 'none',
                  color: '#0f172a',
                  fontSize: '0.98rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span>{item.q}</span>
                <span style={{ fontSize: '1.2rem', color: '#ea580c', fontWeight: 900, transform: openFaq === idx ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>
                  +
                </span>
              </button>
              {openFaq === idx && (
                <div style={{ padding: '0 1.15rem 1.15rem', color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, borderTop: '1px solid #f1f5f9', paddingTop: '0.85rem' }}>
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
          background: 'rgba(15, 23, 42, 0.45)',
          backdropFilter: 'blur(6px)',
          zIndex: 200,
          display: 'flex',
          justifyContent: 'flex-end',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '440px',
            height: '100%',
            background: '#ffffff',
            borderLeft: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '-8px 0 30px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{
              padding: '1.25rem',
              borderBottom: '1px solid #f1f5f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShoppingCart size={20} color="#ea580c" />
                <span style={{ fontWeight: 900, fontSize: '1.1rem', color: '#0f172a', fontFamily: "'Baloo 2', cursive" }}>
                  Your STEM Cart ({totalCartItems})
                </span>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  color: '#475569',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.15s ease'
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
              gap: '0.85rem'
            }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3.5rem 1rem', color: '#64748b' }}>
                  <ShoppingCart size={48} style={{ opacity: 0.25, marginBottom: '1rem', color: '#94a3b8' }} />
                  <p style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a' }}>Your cart is empty</p>
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
                        background: '#f8fafc',
                        borderRadius: '14px',
                        padding: '0.85rem',
                        display: 'flex',
                        gap: '0.85rem',
                        alignItems: 'center',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      <img 
                        src={safeImgSrc} 
                        alt={kit.title}
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '10px',
                          objectFit: 'cover',
                          background: '#ffffff',
                          border: '1px solid #e2e8f0'
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#0f172a', lineHeight: 1.25, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {kit.title}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: '#ea580c', fontWeight: 900, marginTop: '0.2rem' }}>
                          {itemPriceText}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.4rem' }}>
                          <button
                            onClick={() => updateCartQty(item.kitId, -1)}
                            style={{
                              background: '#ffffff',
                              border: '1px solid #cbd5e1',
                              borderRadius: '6px',
                              width: '24px',
                              height: '24px',
                              color: '#334155',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <Minus size={12} />
                          </button>
                          <span style={{ fontSize: '0.85rem', fontWeight: 800, minWidth: '18px', textAlign: 'center', color: '#0f172a' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateCartQty(item.kitId, 1)}
                            style={{
                              background: '#ffffff',
                              border: '1px solid #cbd5e1',
                              borderRadius: '6px',
                              width: '24px',
                              height: '24px',
                              color: '#334155',
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
                          color: '#94a3b8',
                          cursor: 'pointer',
                          padding: '0.4rem',
                          transition: 'color 0.15s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
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
                borderTop: '1px solid #e2e8f0',
                background: '#f8fafc'
              }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <input 
                    type="text"
                    placeholder="Coupon (try STEMKIDS10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    style={{
                      flex: 1,
                      background: '#ffffff',
                      border: '1.5px solid #e2e8f0',
                      borderRadius: '8px',
                      padding: '0.45rem 0.75rem',
                      color: '#0f172a',
                      fontSize: '0.82rem',
                      outline: 'none',
                      textTransform: 'uppercase'
                    }}
                  />
                  <button
                    onClick={applyCoupon}
                    style={{
                      background: '#0f172a',
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
                  <div style={{ fontSize: '0.78rem', color: appliedDiscount > 0 ? '#16a34a' : '#ef4444', marginBottom: '0.75rem', fontWeight: 700 }}>
                    {couponMessage}
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#64748b', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Subtotal:</span>
                    <span style={{ color: '#0f172a', fontWeight: 800 }}>{formatPrice(cartSubtotalGHS, cartSubtotalUSD)}</span>
                  </div>
                  {appliedDiscount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#16a34a', fontWeight: 700 }}>
                      <span>Discount ({appliedDiscount * 100}%):</span>
                      <span>-{formatPrice(discountAmountGHS, discountAmountUSD)}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Greater Accra Delivery:</span>
                    <span style={{ color: '#16a34a', fontWeight: 800 }}>
                      {finalCartTotalGHS >= 500 ? 'FREE' : formatPrice(25, 3)}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '1.15rem',
                    fontWeight: 900,
                    color: '#0f172a',
                    borderTop: '1px solid #e2e8f0',
                    paddingTop: '0.5rem',
                    marginTop: '0.2rem'
                  }}>
                    <span>Total:</span>
                    <span style={{ color: '#ea580c' }}>{formatPrice(finalCartTotalGHS, finalCartTotalUSD)}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <button
                    onClick={handleWhatsAppCartCheckout}
                    style={{
                      width: '100%',
                      background: '#16a34a',
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
                      boxShadow: '0 3px 10px rgba(22, 163, 74, 0.25)'
                    }}
                  >
                    <WhatsAppIcon size={18} />
                    <span>Instant WhatsApp Checkout</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setOrderModalKit(STEM_KITS[0]);
                    }}
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
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
                      boxShadow: '0 3px 10px rgba(234, 88, 12, 0.25)'
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
          background: 'rgba(15, 23, 42, 0.55)',
          backdropFilter: 'blur(8px)',
          zIndex: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '24px',
            maxWidth: '900px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: isMobile ? '1.25rem' : '1.75rem',
            padding: isMobile ? '1.25rem' : '2rem',
            position: 'relative',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)'
          }}>
            <button
              onClick={() => setQuickViewKit(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: '#f1f5f9',
                border: 'none',
                color: '#475569',
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
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              height: isMobile ? '240px' : '360px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
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
                  background: 'rgba(234, 88, 12, 0.1)',
                  color: '#ea580c',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 900
                }}>
                  {quickViewKit.badge}
                </span>
                <span style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 700 }}>
                  {quickViewKit.ageRange}
                </span>
              </div>

              <h2 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#1e3a8a', fontFamily: "'Baloo 2', cursive", lineHeight: 1.25, marginBottom: '0.5rem' }}>
                {quickViewKit.title}
              </h2>

              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                padding: '0.85rem 1rem',
                borderRadius: '12px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.75rem',
                flexWrap: 'wrap'
              }}>
                <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ea580c' }}>
                  {formatPrice(quickViewKit.priceGHS, quickViewKit.priceUSD)}
                </span>
                {quickViewKit.originalPriceGHS > quickViewKit.priceGHS && (
                  <span style={{ color: '#94a3b8', textDecoration: 'line-through', fontSize: '1rem' }}>
                    {formatPrice(quickViewKit.originalPriceGHS, quickViewKit.originalPriceUSD)}
                  </span>
                )}
              </div>

              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '1rem' }}>
                {quickViewKit.overview}
              </p>

              {quickViewKit.gesCurriculumCode && (
                <div style={{
                  background: 'rgba(22, 163, 74, 0.08)',
                  border: '1px solid rgba(22, 163, 74, 0.2)',
                  borderRadius: '10px',
                  padding: '0.6rem 0.85rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.82rem',
                  color: '#16a34a',
                  fontWeight: 800
                }}>
                  <span>🇬🇭</span>
                  <span>Ghana NaCCA / GES Standard: {quickViewKit.gesCurriculumCode}</span>
                </div>
              )}

              {quickViewKit.experiments && quickViewKit.experiments.length > 0 && (
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '0.85rem',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0284c7', marginBottom: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    📦 Core Curriculum Experiments on Physical Box:
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.82rem', color: '#334155', lineHeight: 1.55 }}>
                    {quickViewKit.experiments.map((exp, idx) => (
                      <li key={idx} style={{ marginBottom: '0.2rem' }}>{exp}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#475569', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} color="#16a34a" />
                  <span><strong>100% Solderless:</strong> {quickViewKit.requiresSoldering ? 'Soldering required' : 'No soldering needed, plug-and-play'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} color="#16a34a" />
                  <span><strong>Power:</strong> {quickViewKit.batteryInfo}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} color="#16a34a" />
                  <span><strong>Online missions:</strong> Included with video tutorials</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    addToCart(quickViewKit.id, 1);
                    setQuickViewKit(null);
                    setIsCartOpen(true);
                  }}
                  style={{
                    flex: 1,
                    background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '0.85rem',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 3px 10px rgba(234, 88, 12, 0.25)',
                    minWidth: '150px'
                  }}
                >
                  <ShoppingCart size={18} />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={() => handleWhatsAppOrder(quickViewKit, 1)}
                  style={{
                    background: '#16a34a',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '0.85rem 1.4rem',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 3px 10px rgba(22, 163, 74, 0.25)',
                    minWidth: '170px',
                    justifyContent: 'center'
                  }}
                >
                  <WhatsAppIcon size={18} />
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
          background: 'rgba(15, 23, 42, 0.55)',
          backdropFilter: 'blur(8px)',
          zIndex: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '24px',
            maxWidth: '680px',
            width: '100%',
            maxHeight: '85vh',
            overflowY: 'auto',
            padding: isMobile ? '1.5rem' : '2rem',
            position: 'relative',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)'
          }}>
            <button
              onClick={() => setActiveModalKit(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: '#f1f5f9',
                border: 'none',
                color: '#475569',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                cursor: 'pointer',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <img 
                src={getSafeKitImage(activeModalKit.id)} 
                alt={activeModalKit.title} 
                style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover', background: '#f8fafc', border: '1px solid #e2e8f0' }}
              />
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1e3a8a', fontFamily: "'Baloo 2', cursive", margin: 0 }}>
                  What's in the Box?
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.85rem', margin: '0.2rem 0 0 0' }}>{activeModalKit.title}</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
              {activeModalKit.components.map((comp, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: '#f8fafc',
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#0f172a' }}>{comp.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{comp.detail}</div>
                  </div>
                  <span style={{
                    background: 'rgba(14, 165, 233, 0.12)',
                    color: '#0284c7',
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

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  addToCart(activeModalKit.id, 1);
                  setActiveModalKit(null);
                  setIsCartOpen(true);
                }}
                style={{
                  flex: 1,
                  background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0.8rem',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  minWidth: '150px'
                }}
              >
                Add This Kit to Cart
              </button>
              <button
                onClick={() => handleWhatsAppOrder(activeModalKit, 1)}
                style={{
                  background: '#16a34a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0.8rem 1.25rem',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem',
                  boxShadow: '0 3px 10px rgba(22, 163, 74, 0.25)',
                  minWidth: '160px'
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
          background: 'rgba(15, 23, 42, 0.55)',
          backdropFilter: 'blur(8px)',
          zIndex: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '24px',
            maxWidth: '540px',
            width: '100%',
            padding: isMobile ? '1.5rem' : '2rem',
            position: 'relative',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)'
          }}>
            <button
              onClick={() => { setOrderModalKit(null); setOrderSubmitted(false); }}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: '#f1f5f9',
                border: 'none',
                color: '#475569',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                cursor: 'pointer',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>

            {orderSubmitted ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🎉</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#16a34a', fontFamily: "'Baloo 2', cursive", marginBottom: '0.5rem' }}>
                  Order Request Received!
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{orderForm.parentName}</strong>. Our admissions &amp; fulfillment desk will call/WhatsApp you at <strong>{orderForm.phone}</strong> to confirm delivery in <strong>{orderForm.city}</strong>.
                </p>
                <button
                  onClick={() => {
                    handleWhatsAppOrder(orderModalKit, 1, `${orderForm.city}, ${orderForm.deliveryAddress}`);
                    setOrderModalKit(null);
                    setOrderSubmitted(false);
                  }}
                  style={{
                    background: '#16a34a',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '0.75rem 1.5rem',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 3px 10px rgba(22, 163, 74, 0.25)'
                  }}
                >
                  <WhatsAppIcon size={18} />
                  <span>Speed up on WhatsApp (+233 55 199 3820)</span>
                </button>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#1e3a8a', fontFamily: "'Baloo 2', cursive", marginBottom: '0.25rem' }}>
                  Delivery &amp; Checkout
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                  Complete details for doorstep courier dispatch across Ghana.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); setOrderSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>Parent / Guardian Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Kwesi Mensah"
                      value={orderForm.parentName}
                      onChange={(e) => setOrderForm({ ...orderForm, parentName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: '#f8fafc',
                        border: '1.5px solid #e2e8f0',
                        borderRadius: '10px',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>Phone Number (WhatsApp Active)</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. 055 199 3820"
                      value={orderForm.phone}
                      onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: '#f8fafc',
                        border: '1.5px solid #e2e8f0',
                        borderRadius: '10px',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>City / Town</label>
                      <select
                        value={orderForm.city}
                        onChange={(e) => setOrderForm({ ...orderForm, city: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          background: '#f8fafc',
                          border: '1.5px solid #e2e8f0',
                          borderRadius: '10px',
                          color: '#0f172a',
                          fontSize: '0.88rem',
                          boxSizing: 'border-box'
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
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>Payment</label>
                      <select
                        value={orderForm.paymentMethod}
                        onChange={(e) => setOrderForm({ ...orderForm, paymentMethod: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          background: '#f8fafc',
                          border: '1.5px solid #e2e8f0',
                          borderRadius: '10px',
                          color: '#0f172a',
                          fontSize: '0.88rem',
                          boxSizing: 'border-box'
                        }}
                      >
                        <option value="momo">MTN / Telecel MoMo</option>
                        <option value="card">Visa / Mastercard</option>
                        <option value="cod">Cash on Delivery (Accra)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>Delivery Address / Landmark</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. East Legon, near American House"
                      value={orderForm.deliveryAddress}
                      onChange={(e) => setOrderForm({ ...orderForm, deliveryAddress: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: '#f8fafc',
                        border: '1.5px solid #e2e8f0',
                        borderRadius: '10px',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      marginTop: '0.5rem',
                      background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '0.8rem',
                      fontSize: '0.95rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      boxShadow: '0 3px 10px rgba(234, 88, 12, 0.25)'
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
          background: 'rgba(15, 23, 42, 0.55)',
          backdropFilter: 'blur(8px)',
          zIndex: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '24px',
            maxWidth: '540px',
            width: '100%',
            padding: isMobile ? '1.5rem' : '2rem',
            position: 'relative',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)'
          }}>
            <button
              onClick={() => setSchoolQuoteOpen(false)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: '#f1f5f9',
                border: 'none',
                color: '#475569',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                cursor: 'pointer',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#1e3a8a', fontFamily: "'Baloo 2', cursive", marginBottom: '0.25rem' }}>
              School &amp; Club STEM Lab Quote
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
              Equip 10 to 100+ students with hardware kits, curriculum manuals, and teacher workshops.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ background: '#f8fafc', padding: '1.15rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#4f46e5' }}>Direct Admissions &amp; Lab Desk:</div>
                <div style={{ fontSize: '0.85rem', color: '#334155', marginTop: '0.35rem', lineHeight: 1.6 }}>
                  📞 Phone/WhatsApp: <strong>+233 55 199 3820</strong><br />
                  ✉️ Email: <strong>admissions@koneacademy.io</strong><br />
                  📍 Lab Center: Accra, Ghana
                </div>
              </div>

              <button
                onClick={handleSchoolQuoteWhatsApp}
                style={{
                  background: '#16a34a',
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
                  boxShadow: '0 3px 10px rgba(22, 163, 74, 0.25)'
                }}
              >
                <WhatsAppIcon size={18} />
                <span>Chat with Lab Director on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 13. FLOATING WHATSAPP HELP BUTTON */}
      <a
        href="https://wa.me/233551993820?text=Hello%20Kone%20Kids!%20I%20have%20an%20inquiry%20about%20your%20STEM%20kits."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with STEM Coordinator on WhatsApp"
        style={{
          position: 'fixed',
          bottom: isMobile ? '1.25rem' : '2rem',
          right: isMobile ? '1.25rem' : '2rem',
          zIndex: 90,
          background: '#25d366',
          color: '#ffffff',
          borderRadius: '999px',
          padding: isMobile ? '0.75rem' : '0.75rem 1.25rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontWeight: 800,
          fontSize: '0.88rem',
          textDecoration: 'none',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
        }}
      >
        <WhatsAppIcon size={isMobile ? 22 : 20} />
        {!isMobile && <span>Need Help? Chat on WhatsApp</span>}
      </a>

    </div>
  );
}
