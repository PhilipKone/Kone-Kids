import React, { useState } from 'react';
import { X, Coins, Shield, Smartphone, Mail, CheckCircle } from 'lucide-react';
import { useGamification } from '../context/GamificationContext';
import { useKonePay } from '../hooks/useKonePay';
import { sounds } from '../utils/sounds';

interface CoinStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PACKAGES = [
  { id: 'starter', name: 'Starter Pack', coins: 500, priceGHS: 15, color: '#3b82f6' },
  { id: 'gamer', name: 'Gamer Pack', coins: 1500, priceGHS: 40, color: '#8b5cf6', popular: true },
  { id: 'pro', name: 'Pro Pack', coins: 5000, priceGHS: 100, color: '#f59e0b' },
];

const CoinStoreModal: React.FC<CoinStoreModalProps> = ({ isOpen, onClose }) => {
  const { addCoins } = useGamification();
  const { initiatePayment, isProcessing } = useKonePay();
  
  const [selectedPack, setSelectedPack] = useState<typeof PACKAGES[0] | null>(null);
  const [form, setForm] = useState({ email: '', phone: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePay = () => {
    if (!selectedPack || !form.email || !form.phone) return;
    
    initiatePayment({
      email: form.email,
      phone: form.phone,
      amountGHS: selectedPack.priceGHS,
      coinPackageName: selectedPack.name,
      onSuccess: () => {
        addCoins(selectedPack.coins);
        sounds.playWin();
        setIsSuccess(true);
      },
      onClose: () => {
        // Just closed by user or error
      }
    });
  };

  const closeAndReset = () => {
    setSelectedPack(null);
    setIsSuccess(false);
    setForm({ email: '', phone: '' });
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    }}>
      <div style={{
        background: 'linear-gradient(145deg, #1e293b, #0f172a)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '500px',
        padding: '2rem',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        {/* Close Button */}
        {!isProcessing && !isSuccess && (
          <button 
            onClick={closeAndReset}
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              background: 'rgba(255,255,255,0.1)', border: 'none',
              color: 'white', borderRadius: '50%', width: '32px', height: '32px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={16} />
          </button>
        )}

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{
              background: 'rgba(34, 197, 94, 0.2)',
              width: '80px', height: '80px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem', color: '#22c55e',
              animation: 'bounce 1s infinite alternate'
            }}>
              <CheckCircle size={48} />
            </div>
            <h2 style={{ color: 'white', fontSize: '1.75rem', marginBottom: '0.5rem', fontFamily: '"Baloo 2", cursive' }}>
              Payment Successful!
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
              Awesome! {selectedPack?.coins} Kone Coins have been added to your account.
            </p>
            <button 
              onClick={closeAndReset}
              style={{
                background: '#f472b6', color: 'white', border: 'none',
                padding: '0.75rem 2rem', borderRadius: '12px',
                fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer'
              }}
            >
              Back to Game
            </button>
          </div>
        ) : !selectedPack ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ color: 'white', fontSize: '1.75rem', margin: 0, fontFamily: '"Baloo 2", cursive', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Coins color="#fbbf24" /> Get More Coins
              </h2>
              <p style={{ color: '#94a3b8', margin: '0.5rem 0 0' }}>
                Purchase Kone Coins via Mobile Money (MoMo)
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {PACKAGES.map(pkg => (
                <button
                  key={pkg.id}
                  onClick={() => setSelectedPack(pkg)}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: `2px solid ${pkg.popular ? pkg.color : 'transparent'}`,
                    borderRadius: '16px', padding: '1rem 1.5rem',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    cursor: 'pointer', transition: 'all 0.2s',
                    position: 'relative', overflow: 'hidden'
                  }}
                  onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                  onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                >
                  {pkg.popular && (
                    <div style={{
                      position: 'absolute', top: 0, right: '1.5rem',
                      background: pkg.color, color: 'white',
                      fontSize: '0.65rem', fontWeight: 800, padding: '2px 8px',
                      borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px',
                      letterSpacing: '0.5px', textTransform: 'uppercase'
                    }}>
                      Most Popular
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      background: `${pkg.color}22`, color: pkg.color,
                      width: '48px', height: '48px', borderRadius: '12px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Coins size={24} />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ color: 'white', fontWeight: 800, fontSize: '1.1rem' }}>{pkg.coins} Coins</div>
                      <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{pkg.name}</div>
                    </div>
                  </div>
                  <div style={{ color: 'white', fontWeight: 900, fontSize: '1.25rem' }}>
                    ₵{pkg.priceGHS.toFixed(2)}
                  </div>
                </button>
              ))}
            </div>
            
            <div style={{ marginTop: '1.5rem', textAlign: 'center', color: '#64748b', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
              <Shield size={12} /> Secured by Paystack (MoMo / Card)
            </div>
          </>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <button 
                onClick={() => setSelectedPack(null)}
                style={{
                  background: 'none', border: 'none', color: '#94a3b8',
                  fontSize: '0.85rem', cursor: 'pointer', marginBottom: '1rem',
                  textDecoration: 'underline'
                }}
              >
                ← Choose a different pack
              </button>
              <h2 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontFamily: '"Baloo 2", cursive' }}>
                You selected: {selectedPack.name}
              </h2>
              <div style={{ color: '#fbbf24', fontWeight: 800, fontSize: '1.25rem', marginTop: '0.5rem' }}>
                {selectedPack.coins} Coins for ₵{selectedPack.priceGHS.toFixed(2)}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <label style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Parent's Email for Receipt</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} color="#64748b" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input 
                    type="email" 
                    placeholder="parent@email.com"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    style={{
                      width: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                      color: 'white', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '12px', outline: 'none'
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Mobile Money Number</label>
                <div style={{ position: 'relative' }}>
                  <Smartphone size={16} color="#64748b" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input 
                    type="tel" 
                    placeholder="e.g. 055 123 4567"
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    style={{
                      width: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                      color: 'white', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '12px', outline: 'none'
                    }}
                  />
                </div>
              </div>
            </div>

            <button 
              onClick={handlePay}
              disabled={isProcessing || !form.email || !form.phone}
              style={{
                width: '100%', background: isProcessing ? '#475569' : '#10b981', color: 'white',
                border: 'none', padding: '1rem', borderRadius: '12px',
                fontWeight: 800, fontSize: '1.1rem', cursor: isProcessing ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
              }}
            >
              {isProcessing ? 'Connecting to Paystack...' : `Pay ₵${selectedPack.priceGHS.toFixed(2)} with MoMo`}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CoinStoreModal;
