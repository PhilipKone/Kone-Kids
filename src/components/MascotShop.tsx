import React, { useState } from 'react';
import { useGamification } from '../context/GamificationContext';
import { SHOP_ITEMS, ShopItem } from '../data/shopItems';
import { ShoppingBag, Coins, CheckCircle2, Lock, Plus } from 'lucide-react';
import Mascot from './Mascot';
import CoinStoreModal from './CoinStoreModal';

interface MascotShopProps {
  onClose: () => void;
}

const MascotShop: React.FC<MascotShopProps> = ({ onClose }) => {
  const { coins, inventory, equippedItems, purchaseItem, equipItem, level } = useGamification();
  const [activeCategory, setActiveCategory] = useState<ShopItem['type'] | 'all'>('all');
  const [purchaseSuccess, setPurchaseSuccess] = useState<string | null>(null);
  const [showCoinStore, setShowCoinStore] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const filteredItems = activeCategory === 'all' 
    ? SHOP_ITEMS 
    : SHOP_ITEMS.filter(item => item.type === activeCategory);

  const handleAction = (item: ShopItem) => {
    if (inventory.includes(item.id)) {
      equipItem(item.type, item.id);
    } else {
      if (item.unlockedAtLevel && level < item.unlockedAtLevel) return;
      
      if (purchaseItem(item.id, item.price)) {
        setPurchaseSuccess(item.id);
        setTimeout(() => setPurchaseSuccess(null), 2000);
      }
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div className="glass-card" style={{
        width: '1000px',
        maxWidth: '95vw',
        height: '800px',
        maxHeight: '90vh',
        background: '#1e293b',
        borderRadius: '32px',
        border: '2px solid rgba(255,255,255,0.1)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Header */}
        <div style={{
          padding: isMobile ? '1rem' : '2rem',
          background: 'rgba(255,255,255,0.02)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0
        }}>
          <div>
            <h2 className="lab-title" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: isMobile ? '1rem' : '1.5rem' }}>
              <ShoppingBag size={isMobile ? 18 : 24} className="text-orange-500" />
              {isMobile ? 'SHOP' : 'MASCOT GEAR SHOP'}
            </h2>
            {!isMobile && <p style={{ margin: 0, color: '#94a3b8' }}>Customize your lab assistant with epic gear!</p>}
          </div>

          <div style={{
            background: 'rgba(0,0,0,0.3)',
            padding: isMobile ? '0.4rem 0.8rem' : '0.75rem 1.5rem',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            border: '2px solid #fbbf24',
            boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'
          }}>
            <Coins size={isMobile ? 14 : 20} className="text-yellow-400" />
            <span style={{ fontSize: isMobile ? '1rem' : '1.5rem', fontWeight: 800, color: 'white' }}>{coins}</span>
          </div>

          <button
            onClick={() => setShowCoinStore(true)}
            style={{
              background: '#fbbf24',
              border: 'none',
              borderRadius: '16px',
              padding: isMobile ? '0.4rem 0.8rem' : '0.6rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              color: '#1e293b',
              fontWeight: 900,
              fontSize: isMobile ? '0.85rem' : '1rem'
            }}
          >
            <Plus size={18} /> {!isMobile && 'Get Coins'}
          </button>

          <button 
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: isMobile ? '1.5rem' : '2rem',
              cursor: 'pointer',
              padding: '0.25rem'
            }}
          >
            ×
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', flex: 1, overflow: 'hidden' }}>
          {/* Sidebar / Preview */}
          <div style={{
            width: isMobile ? '100%' : '350px',
            padding: isMobile ? '1rem' : '2rem',
            borderRight: isMobile ? 'none' : '1px solid rgba(255,255,255,0.1)',
            borderBottom: isMobile ? '1px solid rgba(255,255,255,0.1)' : 'none',
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'column',
            alignItems: 'center',
            gap: isMobile ? '1rem' : '2rem',
            background: 'rgba(0,0,0,0.1)',
            flexShrink: 0
          }}>
            <div style={{ 
              width: isMobile ? '120px' : '100%', 
              height: isMobile ? '120px' : '280px', 
              background: '#0f172a', 
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(14, 165, 233, 0.2)',
              position: 'relative',
              flexShrink: 0
            }}>
              <div style={{ transform: isMobile ? 'scale(0.35)' : 'scale(0.8)' }}>
                <Mascot />
              </div>
            </div>

            <div 
              className="no-scrollbar"
              style={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: isMobile ? 'row' : 'column', 
                gap: '0.75rem',
                overflowX: isMobile ? 'auto' : 'hidden',
                overflowY: isMobile ? 'hidden' : 'auto',
                maxHeight: isMobile ? 'none' : '350px',
                paddingBottom: isMobile ? '0.5rem' : '0',
                paddingRight: isMobile ? '0' : '0.5rem',
              }}
            >
              {(['all', 'pose', 'hat', 'glasses', 'skin', 'accessory'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: isMobile ? '0.4rem 0.8rem' : '0.6rem 1rem',
                    borderRadius: '12px',
                    border: activeCategory === cat ? 'none' : '2px solid var(--kids-border)',
                    background: activeCategory === cat ? 'var(--kids-blue)' : 'var(--kids-surface)',
                    boxShadow: activeCategory === cat ? (isMobile ? '0 4px 0 #0369a1' : '0 6px 0 #0369a1') : (isMobile ? '0 3px 0 var(--kids-border)' : '0 5px 0 var(--kids-border)'),
                    color: activeCategory === cat ? 'white' : 'var(--kids-text-muted)',
                    textAlign: 'center',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textTransform: 'capitalize',
                    fontSize: isMobile ? '0.75rem' : '0.85rem',
                    transform: activeCategory === cat ? (isMobile ? 'translateY(4px)' : 'translateY(6px)') : 'none',
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Items Grid */}
          <div 
            className="no-scrollbar"
            style={{ 
              flex: 1, 
              padding: isMobile ? '1rem' : '2rem', 
              overflowY: 'auto', 
              display: 'grid', 
              gridTemplateColumns: isMobile ? 'repeat(auto-fill, minmax(140px, 1fr))' : 'repeat(auto-fill, minmax(200px, 1fr))', 
              gap: isMobile ? '0.75rem' : '1.5rem', 
              alignContent: 'start' 
            }}
          >
            {filteredItems.map(item => {
              const isOwned = inventory.includes(item.id);
              const isEquipped = equippedItems[item.type] === item.id;
              const isLocked = item.unlockedAtLevel && level < item.unlockedAtLevel;
              const canAfford = coins >= item.price;

              return (
                <div 
                  key={item.id}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '20px',
                    background: isEquipped ? 'rgba(14, 165, 233, 0.1)' : 'rgba(255,255,255,0.03)',
                    border: isEquipped ? '2px solid var(--kids-blue)' : '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.3s',
                    position: 'relative',
                    opacity: isLocked ? 0.6 : 1
                  }}
                >
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '3rem' 
                  }}>
                    {item.icon.startsWith('/') ? (
                      <img src={item.icon} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ) : (
                      item.icon
                    )}
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{item.name}</h4>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem', color: '#94a3b8' }}>{item.description}</p>
                  </div>

                  <button
                    disabled={isLocked || (isOwned && isEquipped)}
                    onClick={() => handleAction(item)}
                    style={{
                      width: '100%',
                      padding: '0.6rem 0.75rem',
                      borderRadius: '12px',
                      border: 'none',
                      background: isEquipped ? '#10b981' : (isOwned ? 'rgba(255,255,255,0.1)' : (canAfford ? 'var(--kids-orange)' : '#475569')),
                      boxShadow: isEquipped ? '0 5px 0 #047857' : (isOwned ? '0 5px 0 rgba(0,0,0,0.2)' : (canAfford ? '0 5px 0 #9a3412' : '0 3px 0 #1e293b')),
                      color: 'white',
                      fontWeight: 800,
                      cursor: (isLocked || (isOwned && isEquipped)) ? 'default' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      fontSize: '0.85rem',
                      transition: 'all 0.15s',
                      position: 'relative',
                      top: 0
                    }}
                  >
                    {isLocked ? (
                      <>
                        <Lock size={16} />
                        LVL {item.unlockedAtLevel}
                      </>
                    ) : (
                      isOwned ? (
                        isEquipped ? (
                          <>
                            <CheckCircle2 size={16} />
                            EQUIPPED
                          </>
                        ) : 'EQUIP'
                      ) : (
                        <>
                          <Coins size={16} />
                          {item.price}
                        </>
                      )
                    )}
                  </button>

                  {purchaseSuccess === item.id && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(16, 185, 129, 0.9)',
                      borderRadius: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 800,
                      animation: 'fadeIn 0.2s ease-out'
                    }}>
                      <div style={{ fontSize: '2rem' }}>🎉</div>
                      PURCHASED!
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CoinStoreModal isOpen={showCoinStore} onClose={() => setShowCoinStore(false)} />
    </div>
  );
};

export default MascotShop;
