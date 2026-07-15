import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useGamification } from '../context/GamificationContext';
import { db } from '../firebase/config';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Mascot from './Mascot';
import confetti from 'canvas-confetti';

const MASCOT_POOL = [
  // Animals (75)
  '🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵',
  '🐔','🐧','🐦','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐢','🐍','🦎','🐙',
  '🦑','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐘','🦛','🦏','🐪',
  '🦒','🦘','🦬','🐿️','🦔','🦦','🦥','🦡','🦖','🦕','🐏','🐑','🐐','🦌','🐓',
  '🦃','🦚','🦜','🦢','🦩','🕊️','🐇','🐈','🐕','🦭','🦋','🐌','🐞','🐜','🐝',
  // Food & Treats (40)
  '🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🫐','🍒','🍑','🥭','🍍','🥥','🥝',
  '🍅','🍆','🥑','🥦','🥬','🥒','🌶️','🌽','🥕','🫑','🧅','🧄','🥔','🍠','🥐',
  '🍞','🥖','🥨','🍕','🍟','🍔','🌭','🌮','🌯','🍿','🥚','🍳','🥞','🧇','🧀',
  // Space, Vehicles & Nature (45)
  '🚀','🛸','🚁','✈️','🪂','🛰️','🚂','🚌','🚑','🚒','🚓','🚕','🚗','🏎️','🚙',
  '🛻','🚜','🚲','🛴','🛹','🛺','⛵','🚢','⚓','🌍','🌙','☀️','⭐','🪐','☄️',
  '🌈','⚡','❄️','🔥','💧','🌴','🌲','🌵','🍀','🍁','🍄','🌻','🌸','🎈','🎉',
  // Tools, Gadgets & Play (40)
  '🧠','🦾','🎮','📱','💻','🖥️','⌨️','🖱️','🎧','🎙️','🕶️','👑','💎','🔔','🎁',
  '🏆','🥇','🎖️','🧭','🔭','🔬','🧪','🧬','🦫','🪓','🔨','🛠️','🔧','🔩','⚙️',
  '🧲','🛡️','🏹','🗝️','🔑','🧸','🪁','🪀','🎨','🧩'
];

export default function ClassLogin() {
  const navigate = useNavigate();
  const { loginAsStudent, sectionId: activeSectionId } = useGamification();
  const mascotRef = useRef<any>(null);

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [sectionCode, setSectionCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Section Data
  const [students, setStudents] = useState<any[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [mascotOptions, setMascotOptions] = useState<string[]>([]);

  useEffect(() => {
    // If already logged in, redirect
    if (activeSectionId) {
      navigate('/');
    }
  }, [activeSectionId, navigate]);

  useEffect(() => {
    // Mascot speaks on load
    if (mascotRef.current) {
      mascotRef.current.wave();
      mascotRef.current.speak('Hi there! Enter your classroom code to join the lab!');
    }
  }, [step]);

  const handleCodeSubmit = async (codeToSubmit?: string) => {
    let code = (codeToSubmit || sectionCode).trim().toUpperCase();
    if (!code) {
      setError('Please enter a section code!');
      return;
    }

    // Auto-resolve abbreviated entry: ABCD -> KONE-ABCD
    if (code.length === 4 && !code.startsWith('KONE-')) {
      code = 'KONE-' + code;
    } else if (code.length === 8 && code.startsWith('KONE')) {
      code = 'KONE-' + code.substring(4);
    }

    setLoading(true);
    setError('');

    try {
      if (db && (db as any).app) {
        // Fetch Section
        const secDoc = await getDoc(doc(db, 'sections', code));
        if (!secDoc.exists()) {
          setError('Classroom Code not found! Double check and try again.');
          setLoading(false);
          if (mascotRef.current) {
            mascotRef.current.speak('Oops! I could not find that code. Try again!');
          }
          return;
        }

        // Fetch Students under section
        const studentsSnapshot = await getDocs(collection(db, 'sections', code, 'students'));
        const studentList = studentsSnapshot.docs.map(d => ({
          id: d.id,
          ...d.data()
        }));

        setStudents(studentList);
        setStep(2);
      } else {
        // Fallback for simulation/offline mode
        setError('Database connection offline. Showing local simulated classroom roster.');
        const mockRoster = [
          { id: '1', name: 'Kofi Mensah', secretPicture: '🚀' },
          { id: '2', name: 'Ama Osei', secretPicture: '🧠' },
          { id: '3', name: 'Kwame Boateng', secretPicture: '🦾' },
          { id: '4', name: 'Abena Agyei', secretPicture: '🎨' }
        ];
        setStudents(mockRoster);
        setStep(2);
      }
    } catch (e) {
      console.error(e);
      setError('An error occurred. Check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleStudentSelect = (student: any) => {
    setSelectedStudent(student);
    
    // Choose correct picture and select 5 random distractors from 200 emoji pool
    const correct = student.secretPicture || '🚀';
    const poolWithoutCorrect = MASCOT_POOL.filter(emoji => emoji !== correct);
    const shuffledPool = [...poolWithoutCorrect].sort(() => 0.5 - Math.random());
    const distractors = shuffledPool.slice(0, 5);
    const combined = [correct, ...distractors].sort(() => 0.5 - Math.random());
    setMascotOptions(combined);
    
    setStep(3);
    if (mascotRef.current) {
      mascotRef.current.speak(`Hi ${student.name.split(' ')[0]}! What is your secret mascot?`);
    }
  };

  const handlePasswordSelect = async (emoji: string) => {
    if (!selectedStudent) return;
    setError('');

    if (selectedStudent.secretPicture !== emoji) {
      setError('Wrong mascot! Try again.');
      if (mascotRef.current) {
        mascotRef.current.speak('Oh no! That is not your secret mascot. Try another!');
      }
      return;
    }

    // Correct password - Log in!
    setLoading(true);
    try {
      await loginAsStudent(sectionCode.trim().toUpperCase(), selectedStudent.id, selectedStudent.name);
      
      // Confetti burst!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });

      if (mascotRef.current) {
        mascotRef.current.speak('Successful login! Welcome back to the lab! 🚀');
      }

      setTimeout(() => {
        navigate('/');
      }, 1500);

    } catch (e) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVirtualKeypress = (char: string) => {
    setError('');
    if (char === '⌫') {
      setSectionCode(curr => curr.slice(0, -1));
    } else if (sectionCode.length < 9) {
      setSectionCode(curr => (curr + char).toUpperCase());
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1e38 100%)',
      color: 'white',
      padding: '2rem 5% 5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Back button */}
      <div style={{ position: 'absolute', top: '2rem', left: '5%' }}>
        <button 
          onClick={() => {
            if (step === 3) setStep(2);
            else if (step === 2) setStep(1);
            else navigate('/');
          }}
          className="kids-button"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: 'none',
            padding: '0.65rem 1.25rem'
          }}
        >
          <ArrowLeft size={18} /> Back
        </button>
      </div>

      <div style={{
        width: '100%',
        maxWidth: '850px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3rem',
        alignItems: 'center'
      }}>
        {/* Mascot section */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '280px', height: '280px' }}>
            <Mascot ref={mascotRef} />
          </div>
        </div>

        {/* Tactical Login Form Card */}
        <div className="glass-card" style={{
          padding: '2.5rem',
          borderRadius: '32px',
          background: 'rgba(30, 41, 59, 0.7)',
          border: '3px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
          textAlign: 'center'
        }}>
          
          {step === 1 && (
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--kids-orange)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                <Sparkles size={14} /> Student Portal
              </div>
              <h2 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '2.2rem', margin: '0 0 1.5rem', color: 'white' }}>Class Code Login</h2>
              
              {/* Inputs */}
              <input 
                type="text" 
                maxLength={9}
                value={sectionCode}
                onChange={(e) => {
                  setError('');
                  setSectionCode(e.target.value.toUpperCase());
                }}
                placeholder="ENTER CODE"
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '2rem',
                  letterSpacing: '0.2em',
                  fontWeight: 900,
                  textAlign: 'center',
                  background: '#0f172a',
                  border: '3px solid var(--kids-blue)',
                  color: 'white',
                  borderRadius: '16px',
                  fontFamily: "'Baloo 2', cursive",
                  textTransform: 'uppercase',
                  marginBottom: '1rem'
                }}
              />

              {error && <p style={{ color: '#f87171', fontWeight: 700, margin: '0 0 1rem', fontSize: '0.9rem' }}>{error}</p>}

              {/* Tactical Virtual Keyboard for Younger Children */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '6px',
                marginBottom: '1.5rem',
                background: 'rgba(0,0,0,0.2)',
                padding: '8px',
                borderRadius: '16px'
              }}>
                {['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','⌫'].map((char) => (
                  <button
                    key={char}
                    onClick={() => handleVirtualKeypress(char)}
                    style={{
                      height: '42px',
                      background: char === '⌫' ? '#ef4444' : 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: 'white',
                      fontWeight: 800,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.1s'
                    }}
                    onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.9)'}
                    onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    {char}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => handleCodeSubmit()}
                disabled={loading || sectionCode.length < 3}
                className="kids-button pulse-neon"
                style={{
                  width: '100%',
                  fontSize: '1.25rem',
                  background: 'var(--kids-orange)',
                  padding: '0.85rem'
                }}
              >
                {loading ? 'Entering Lab...' : 'Go to Class! 🚀'}
              </button>

              <div style={{ marginTop: '1.5rem', fontSize: '0.95rem', fontFamily: "'Baloo 2', cursive" }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Are you a teacher? </span>
                <Link 
                  to="/teacher-dashboard" 
                  style={{ 
                    color: 'var(--kids-blue)', 
                    fontWeight: 800, 
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  className="hover-teal"
                >
                  Teacher Portal 🔑
                </Link>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '2rem', margin: '0 0 0.25rem', color: 'white' }}>Who Are You?</h2>
              <p style={{ color: 'var(--kids-text-muted)', margin: '0 0 1.5rem', fontSize: '0.95rem' }}>Select your name from the classroom roster</p>
              
              <div style={{
                maxHeight: '300px',
                overflowY: 'auto',
                paddingRight: '6px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '1rem'
              }} className="no-scrollbar">
                {students.map((student) => (
                  <button
                    key={student.id}
                    onClick={() => handleStudentSelect(student)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.25rem',
                      background: 'rgba(255,255,255,0.04)',
                      border: '2px solid rgba(255,255,255,0.1)',
                      borderRadius: '16px',
                      color: 'white',
                      fontFamily: "'Baloo 2', cursive",
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      transition: 'all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--kids-blue)';
                      e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0ea5e9 0%, #a855f7 100%)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      fontWeight: 900
                    }}>
                      {student.name.charAt(0)}
                    </div>
                    {student.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && selectedStudent && (
            <div>
              <h2 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '2rem', margin: '0 0 0.25rem', color: 'white' }}>Hi {selectedStudent.name}!</h2>
              <p style={{ color: 'var(--kids-text-muted)', margin: '0 0 1.5rem', fontSize: '0.95rem' }}>Select your secret Mascot to login</p>

              {error && <p style={{ color: '#f87171', fontWeight: 700, margin: '0 0 1rem', fontSize: '0.9rem' }}>{error}</p>}

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '1.5rem'
              }}>
                {mascotOptions.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => handlePasswordSelect(emoji)}
                    disabled={loading}
                    style={{
                      aspectRatio: '1',
                      background: 'rgba(255,255,255,0.05)',
                      border: '2px solid rgba(255,255,255,0.08)',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--kids-orange)';
                      e.currentTarget.style.background = 'rgba(249, 115, 22, 0.1)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <span style={{ fontSize: '3rem' }}>{emoji}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
