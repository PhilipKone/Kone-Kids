import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase/config';
import { doc, setDoc, collection, getDocs, deleteDoc, query, where } from 'firebase/firestore';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { Sparkles, Trash2, Printer, Plus, Users, Award, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CODING_MISSIONS } from '../data/missions';

const MASCOTS = [
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

export default function TeacherDashboard() {
  const [sectionName, setSectionName] = useState('');
  const [activeCode, setActiveCode] = useState('');
  const [newStudentName, setNewStudentName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingStudentId, setEditingStudentId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [editingMascot, setEditingMascot] = useState('');
  const [printJobType, setPrintJobType] = useState<'passkeys' | 'report'>('passkeys');

  // Class Editing States
  const [isEditingClassName, setIsEditingClassName] = useState(false);
  const [newClassName, setNewClassName] = useState('');

  // Teacher Authentication States
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  // Active Roster
  const [students, setStudents] = useState<any[]>([]);

  // List of active sections loaded from Firestore
  const [mySections, setMySections] = useState<any[]>([]);

  const fetchMySections = async (userUid: string) => {
    setLoading(true);
    setError('');
    try {
      if (db && (db as any).app) {
        const q = query(collection(db, 'sections'), where('teacherId', '==', userUid));
        const querySnapshot = await getDocs(q);
        const sectionsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name || 'Unnamed Class'
        }));
        setMySections(sectionsList);
      } else {
        const saved = localStorage.getItem('kone_teacher_sections');
        const parsed = saved ? JSON.parse(saved) : [];
        setMySections(parsed.map((item: any) => typeof item === 'string' ? { id: item, name: item } : item));
      }
    } catch (e) {
      console.error(e);
      setError('Failed to load your classroom sections.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!auth || !(auth as any).app) {
      setCurrentUser({
        uid: 'mock_teacher_id',
        email: 'tutor@koneacademy.io',
        displayName: 'Kone Instructor',
      } as any);
      // Load mock items
      const saved = localStorage.getItem('kone_teacher_sections');
      const parsed = saved ? JSON.parse(saved) : [];
      setMySections(parsed.map((item: any) => typeof item === 'string' ? { id: item, name: item } : item));
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        fetchMySections(user.uid);
      } else {
        setCurrentUser(null);
        setMySections([]);
        setActiveCode('');
        setStudents([]);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (activeCode) {
      fetchRoster(activeCode);
    }
  }, [activeCode]);

  const fetchRoster = async (code: string) => {
    setLoading(true);
    try {
      if (db && (db as any).app) {
        const querySnapshot = await getDocs(collection(db, 'sections', code, 'students'));
        const roster = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setStudents(roster);
      } else {
        // Mock offline fallback
        const mockSaved = localStorage.getItem(`kone_kids_mock_roster_${code}`);
        setStudents(mockSaved ? JSON.parse(mockSaved) : []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const generateSectionCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    let code = 'KONE-';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const handleCreateSection = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sectionName.trim()) return;

    setLoading(true);
    setError('');
    const code = generateSectionCode();

    try {
      const newSecObj = { id: code, name: sectionName.trim() };

      if (db && (db as any).app && currentUser) {
        await setDoc(doc(db, 'sections', code), {
          name: sectionName.trim(),
          createdAt: new Date().toISOString(),
          teacherId: currentUser.uid
        });
      } else {
        const currentMock = [newSecObj, ...mySections];
        localStorage.setItem('kone_teacher_sections', JSON.stringify(currentMock));
      }
      
      setActiveCode(code);
      setMySections(prev => [newSecObj, ...prev.filter(c => c.id !== code)]);
      setSectionName('');
      setStudents([]);
      
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (err) {
      setError('Could not create section. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRenameClass = async () => {
    if (!newClassName.trim() || !activeCode) return;
    setLoading(true);
    setError('');
    try {
      if (db && (db as any).app) {
        await setDoc(doc(db, 'sections', activeCode), {
          name: newClassName.trim()
        }, { merge: true });
      } else {
        const updated = mySections.map(s => s.id === activeCode ? { ...s, name: newClassName.trim() } : s);
        localStorage.setItem('kone_teacher_sections', JSON.stringify(updated));
      }
      setMySections(prev => prev.map(s => s.id === activeCode ? { ...s, name: newClassName.trim() } : s));
      setIsEditingClassName(false);
      setNewClassName('');
      confetti({
        particleCount: 50,
        spread: 40,
        origin: { y: 0.8 }
      });
    } catch (e) {
      setError('Failed to rename classroom section.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClass = async () => {
    if (!activeCode) return;
    const activeSecName = mySections.find(s => s.id === activeCode)?.name || 'this class';
    if (!window.confirm(`⚠️ DANGER: Are you absolutely sure you want to delete "${activeSecName}" (${activeCode})?\n\nThis will permanently delete this classroom code and delete all students in the roster! This cannot be undone.`)) return;

    setLoading(true);
    setError('');
    try {
      if (db && (db as any).app) {
        // Delete students in the subcollection first
        const studentsSnapshot = await getDocs(collection(db, 'sections', activeCode, 'students'));
        const deletePromises = studentsSnapshot.docs.map(studentDoc => 
          deleteDoc(doc(db, 'sections', activeCode, 'students', studentDoc.id))
        );
        await Promise.all(deletePromises);

        // Delete parent section doc
        await deleteDoc(doc(db, 'sections', activeCode));
      } else {
        const currentMock = mySections.filter(s => s.id !== activeCode);
        localStorage.setItem('kone_teacher_sections', JSON.stringify(currentMock));
        localStorage.removeItem(`kone_kids_mock_roster_${activeCode}`);
      }

      setMySections(prev => prev.filter(s => s.id !== activeCode));
      setActiveCode('');
      setStudents([]);
    } catch (err) {
      setError('Failed to delete classroom section.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setAuthLoading(true);
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Google authentication failed.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authEmail.trim() || !authPassword.trim()) return;

    setAuthLoading(true);
    setError('');
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, authEmail.trim(), authPassword.trim());
      } else {
        await signInWithEmailAndPassword(auth, authEmail.trim(), authPassword.trim());
      }
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Email authentication failed.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      if (auth && (auth as any).app) {
        await signOut(auth);
      } else {
        setCurrentUser(null);
      }
    } catch (err) {
      setError('Logout failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim() || !activeCode) return;

    setLoading(true);
    const randomMascot = MASCOTS[Math.floor(Math.random() * MASCOTS.length)];
    const studentId = 'student_' + Math.random().toString(36).substr(2, 9);
    
    const newStudent = {
      name: newStudentName.trim(),
      secretPicture: randomMascot,
      xp: 0,
      coins: 100,
      completedMissions: [],
      inventory: [],
      equippedItems: {},
      unlockedSeries: ['series_word_search']
    };

    try {
      if (db && (db as any).app) {
        await setDoc(doc(db, 'sections', activeCode, 'students', studentId), newStudent);
      } else {
        // Offline Local Mock Save
        const currentMock = [...students, { id: studentId, ...newStudent }];
        localStorage.setItem(`kone_kids_mock_roster_${activeCode}`, JSON.stringify(currentMock));
      }

      setStudents(prev => [...prev, { id: studentId, ...newStudent }]);
      setNewStudentName('');
    } catch (err) {
      setError('Failed to add student to roster.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteStudent = async (studentId: string) => {
    if (!activeCode || !window.confirm("Are you sure you want to delete this student? All their saved progress (XP, level, coins) will be lost permanently.")) return;
    
    setLoading(true);
    try {
      if (db && (db as any).app) {
        await deleteDoc(doc(db, 'sections', activeCode, 'students', studentId));
      } else {
        const currentMock = students.filter(s => s.id !== studentId);
        localStorage.setItem(`kone_kids_mock_roster_${activeCode}`, JSON.stringify(currentMock));
      }
      setStudents(prev => prev.filter(s => s.id !== studentId));
    } catch (err) {
      setError('Failed to delete student.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStudent = async (studentId: string, updatedName: string, updatedMascot: string) => {
    if (!updatedName.trim() || !activeCode) return;
    
    setLoading(true);
    try {
      const studentData = students.find(s => s.id === studentId);
      if (!studentData) return;
      
      const updatedFields = {
        ...studentData,
        name: updatedName.trim(),
        secretPicture: updatedMascot
      };
      
      if (db && (db as any).app) {
        await setDoc(doc(db, 'sections', activeCode, 'students', studentId), updatedFields);
      } else {
        const currentMock = students.map(s => s.id === studentId ? { ...s, name: updatedName.trim(), secretPicture: updatedMascot } : s);
        localStorage.setItem(`kone_kids_mock_roster_${activeCode}`, JSON.stringify(currentMock));
      }
      
      setStudents(prev => prev.map(s => s.id === studentId ? { ...s, name: updatedName.trim(), secretPicture: updatedMascot } : s));
    } catch (err) {
      setError('Failed to update student details.');
    } finally {
      setLoading(false);
    }
  };

  const handlePrintPasskeys = () => {
    setPrintJobType('passkeys');
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const handlePrintReport = () => {
    setPrintJobType('report');
    setTimeout(() => {
      window.print();
    }, 150);
  };

  if (!currentUser) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '32px',
          padding: '3rem 2.5rem',
          maxWidth: '450px',
          width: '100%',
          boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
          border: '2px solid #e2e8f0',
          textAlign: 'center'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(14, 165, 233, 0.1)',
              color: 'var(--kids-blue)',
              width: '64px',
              height: '64px',
              borderRadius: '20px',
              fontSize: '2rem',
              marginBottom: '1rem'
            }}>
              🔑
            </div>
            <h1 style={{
              fontFamily: "'Baloo 2', cursive",
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#1e3a8a',
              margin: '0 0 0.5rem'
            }}>
              Teacher Portal
            </h1>
            <p style={{ color: 'var(--kids-text-muted)', fontSize: '0.95rem', margin: 0, lineHeight: 1.4 }}>
              Authenticate to manage classroom codes, student rosters, and track progress.
            </p>
          </div>

          {error && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#ef4444',
              borderRadius: '12px',
              padding: '0.75rem 1rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              textAlign: 'left'
            }}>
              ⚠️ {error}
            </div>
          )}

          <button
            onClick={handleGoogleSignIn}
            disabled={authLoading}
            style={{
              width: '100%',
              padding: '0.85rem 1.5rem',
              background: 'white',
              border: '2px solid #e2e8f0',
              borderRadius: '16px',
              color: '#334155',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
              transition: 'all 0.2s',
              fontFamily: 'inherit',
              marginBottom: '1.5rem'
            }}
          >
            <span style={{ fontSize: '1.25rem' }}>🚀</span>
            {authLoading ? 'Signing in...' : 'Sign in with Google'}
          </button>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: '#94a3b8',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>
            <div style={{ flex: 1, height: '1px', background: '#cbd5e1' }} />
            <span>or email</span>
            <div style={{ flex: 1, height: '1px', background: '#cbd5e1' }} />
          </div>

          <form onSubmit={handleEmailAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#475569', marginBottom: '0.4rem' }}>Email Address</label>
              <input
                type="email"
                required
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                placeholder="teacher@koneacademy.io"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '2px solid #cbd5e1',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#475569', marginBottom: '0.4rem' }}>Password</label>
              <input
                type="password"
                required
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '2px solid #cbd5e1',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="kids-button"
              style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', marginTop: '0.5rem' }}
            >
              {authLoading ? 'Loading...' : (isSignUp ? 'Create Teacher Account 🎒' : 'Sign In 🔑')}
            </button>
          </form>

          <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#475569' }}>
            {isSignUp ? 'Already have a teacher account?' : "Don't have a teacher account?"}{' '}
            <button
              onClick={() => { setIsSignUp(!isSignUp); setError(''); }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--kids-blue)',
                fontWeight: 800,
                cursor: 'pointer',
                padding: 0,
                fontSize: 'inherit',
                textDecoration: 'underline'
              }}
            >
              {isSignUp ? 'Sign In' : 'Sign Up Now'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8fafc',
      color: '#0f172a',
      padding: '3rem 5% 6rem'
    }} className="teacher-hub-page">
      
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-section, .print-section * {
            visibility: visible;
          }
          .print-section {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            display: block !important;
            color: #0f172a !important;
            background: #ffffff !important;
          }
          .no-print {
            display: none !important;
          }
          .page-break {
            page-break-before: always;
          }
          h1, h2, h3, th, td {
            color: #0f172a !important;
          }
          .progress-bar-container {
            border: 2px solid #0f172a !important;
          }
          .progress-bar-fill {
            background-color: #0d9488 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header Title */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }} className="no-print">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(13, 148, 136, 0.1)',
            color: '#0d9488',
            padding: '0.4rem 1rem',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1rem'
          }}>
            <BookOpen size={14} /> Teacher Dashboard
          </div>
          <h1 style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            color: '#1e3a8a',
            margin: '0 0 0.5rem'
          }}>
            Classroom Section Hub
          </h1>
          <p style={{ color: 'var(--kids-text-muted)', fontSize: '1.1rem', margin: 0 }}>
            Create sections, manage rosters, download picture passwords, and track child engineering progress.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }} className="no-print">
          
          {/* Left Column: Roster Setup & Sections list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* Create Section Form */}
            <div className="glass-card" style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '24px',
              border: '2px solid #e2e8f0',
              boxShadow: '0 10px 25px rgba(0,0,0,0.02)'
            }}>
              <h3 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '1.4rem', margin: '0 0 1.25rem', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users size={20} /> Create New Class Code
              </h3>
              
              <form onSubmit={handleCreateSection} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input 
                  type="text" 
                  value={sectionName}
                  onChange={(e) => setSectionName(e.target.value)}
                  placeholder="e.g. Primary 4 Coding Lab"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '2px solid #cbd5e1',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                />
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="kids-button"
                  style={{ width: '100%', padding: '0.75rem' }}
                >
                  Create Class Code 🔑
                </button>
              </form>
            </div>

            {/* My Active Sections */}
            {mySections.length > 0 && (
              <div className="glass-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '24px',
                border: '2px solid #e2e8f0',
                boxShadow: '0 10px 25px rgba(0,0,0,0.02)'
              }}>
                <h3 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '1.3rem', margin: '0 0 1.25rem', color: '#475569' }}>
                  My Active Classes
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {mySections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => {
                        setActiveCode(sec.id);
                        setIsEditingClassName(false);
                      }}
                      style={{
                        padding: '0.75rem 1.25rem',
                        borderRadius: '16px',
                        background: activeCode === sec.id ? 'var(--kids-blue)' : '#f8fafc',
                        color: activeCode === sec.id ? 'white' : '#1e3a8a',
                        border: '2px solid',
                        borderColor: activeCode === sec.id ? 'var(--kids-blue)' : '#cbd5e1',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '0.2rem',
                        textAlign: 'left'
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', opacity: 0.8 }}>
                        {sec.id}
                      </span>
                      <span style={{ fontFamily: "'Baloo 2', cursive", fontSize: '1.1rem', fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
                        {sec.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Active Roster & Student Manager */}
          <div>
            {activeCode ? (
              <div className="glass-card" style={{
                background: 'white',
                padding: '2.5rem 2rem',
                borderRadius: '28px',
                border: '2px solid #e2e8f0',
                boxShadow: '0 15px 35px rgba(0,0,0,0.03)',
                height: '100%'
              }}>
                {/* Active Section Info bar */}
                <div style={{
                  borderBottom: '2px solid #f1f5f9',
                  paddingBottom: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--kids-orange)', letterSpacing: '0.02em', display: 'block', marginBottom: '0.2rem' }}>
                        Active Classroom
                      </span>
                      
                      {!isEditingClassName ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                          <h2 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '2.2rem', color: '#1e3a8a', margin: 0, lineHeight: 1.1 }}>
                            {mySections.find(s => s.id === activeCode)?.name || 'Classroom'}
                          </h2>
                          <button
                            onClick={() => {
                              setNewClassName(mySections.find(s => s.id === activeCode)?.name || '');
                              setIsEditingClassName(true);
                            }}
                            style={{ background: 'none', border: 'none', color: '#3b82f6', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: 0 }}
                          >
                            ✏️ Rename
                          </button>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                          <input
                            type="text"
                            value={newClassName}
                            onChange={(e) => setNewClassName(e.target.value)}
                            style={{ padding: '0.4rem 0.75rem', border: '2px solid #cbd5e1', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit', fontWeight: 800 }}
                          />
                          <button onClick={handleRenameClass} className="kids-button" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem', background: '#22c55e', boxShadow: '0 3px 0 #15803d' }}>Save</button>
                          <button onClick={() => setIsEditingClassName(false)} className="kids-button" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem', background: '#94a3b8', boxShadow: '0 3px 0 #64748b' }}>Cancel</button>
                        </div>
                      )}
                      
                      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--kids-text-muted)', display: 'block', marginTop: '0.35rem' }}>
                        Class Code: <code style={{ background: '#f1f5f9', padding: '0.15rem 0.4rem', borderRadius: '6px', color: '#0f172a', fontWeight: 900 }}>{activeCode}</code>
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <button 
                        onClick={handlePrintPasskeys}
                        className="kids-button"
                        style={{
                          background: 'rgba(13, 148, 136, 0.1)',
                          color: '#0d9488',
                          boxShadow: 'none',
                          padding: '0.6rem 1.1rem',
                          fontSize: '0.9rem',
                          border: '1px solid rgba(13, 148, 136, 0.25)'
                        }}
                      >
                        <Printer size={16} /> Print Passkeys
                      </button>

                      <button 
                        onClick={handlePrintReport}
                        className="kids-button"
                        style={{
                          background: 'rgba(59, 130, 246, 0.1)',
                          color: '#3b82f6',
                          boxShadow: 'none',
                          padding: '0.6rem 1.1rem',
                          fontSize: '0.9rem',
                          border: '1px solid rgba(59, 130, 246, 0.25)'
                        }}
                      >
                        <Award size={16} /> Print Report (PDF)
                      </button>
                      
                      <button 
                        onClick={handleDeleteClass}
                        className="kids-button"
                        style={{
                          background: 'rgba(239, 68, 68, 0.1)',
                          color: '#ef4444',
                          boxShadow: 'none',
                          padding: '0.6rem 1.1rem',
                          fontSize: '0.9rem',
                          border: '1px solid rgba(239, 68, 68, 0.2)'
                        }}
                      >
                        🗑️ Delete Class
                      </button>
                    </div>
                  </div>
                </div>

                {/* Add Student to Roster */}
                <form onSubmit={handleAddStudent} style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
                  <input 
                    type="text" 
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)}
                    placeholder="Enter Student Name..."
                    required
                    style={{
                      flex: 1,
                      padding: '0.65rem 1rem',
                      border: '2px solid #cbd5e1',
                      borderRadius: '12px',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit'
                    }}
                  />
                  <button 
                    type="submit" 
                    className="kids-button"
                    style={{ padding: '0.65rem 1.25rem', fontSize: '0.95rem' }}
                  >
                    <Plus size={18} /> Add
                  </button>
                </form>

                {/* Students Roster Grid */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#475569', fontWeight: 700 }}>Students Roster ({students.length})</h3>
                  
                  {students.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '3rem 1rem', border: '2px dashed #e2e8f0', borderRadius: '16px', color: 'var(--kids-text-muted)' }}>
                      <p style={{ margin: '0 0 0.5rem' }}>Roster is empty!</p>
                      <p style={{ fontSize: '0.85rem', margin: 0 }}>Add student names above to auto-assign mascot picture passwords.</p>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {students.map((student) => {
                        if (editingStudentId === student.id) {
                          return (
                            <div 
                              key={student.id}
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem',
                                padding: '1rem',
                                background: '#f8fafc',
                                border: '2px solid var(--kids-blue)',
                                borderRadius: '16px'
                              }}
                            >
                              <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <input 
                                  type="text" 
                                  value={editingName}
                                  onChange={(e) => setEditingName(e.target.value)}
                                  style={{
                                    flex: 1,
                                    padding: '0.4rem 0.75rem',
                                    border: '2px solid #cbd5e1',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem',
                                    fontFamily: 'inherit'
                                  }}
                                />
                                <select
                                  value={editingMascot}
                                  onChange={(e) => setEditingMascot(e.target.value)}
                                  style={{
                                    padding: '0.4rem',
                                    border: '2px solid #cbd5e1',
                                    borderRadius: '8px',
                                    fontSize: '1.1rem'
                                  }}
                                >
                                  {MASCOTS.map(m => <option key={m} value={m}>{m}</option>)}
                                </select>
                              </div>
                              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                                <button
                                  onClick={() => {
                                    handleUpdateStudent(student.id, editingName, editingMascot);
                                    setEditingStudentId(null);
                                  }}
                                  className="kids-button"
                                  style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem', background: '#22c55e', boxShadow: '0 3px 0 #15803d' }}
                                >
                                  Save
                                </button>
                                <button
                                  onClick={() => setEditingStudentId(null)}
                                  className="kids-button"
                                  style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem', background: '#94a3b8', boxShadow: '0 3px 0 #64748b' }}
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <div 
                            key={student.id}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '0.75rem 1rem',
                              background: '#f8fafc',
                              border: '1px solid #e2e8f0',
                              borderRadius: '16px'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#38bdf8', color: 'white', display: 'flex', alignItems: 'center', fontWeight: 800, fontSize: '0.9rem', justifyContent: 'center' }}>
                                {student.name.charAt(0)}
                              </div>
                              <div>
                                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{student.name}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--kids-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <Award size={12} /> {student.xp} XP · Level {Math.floor(student.xp / 500) + 1}
                                </div>
                              </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                background: '#f1f5f9',
                                padding: '4px 10px',
                                borderRadius: '12px',
                                fontSize: '0.8rem',
                                fontWeight: 700
                              }}>
                                <span>Mascot:</span>
                                <span style={{ fontSize: '1.25rem' }}>{student.secretPicture}</span>
                              </div>

                              <button
                                onClick={() => {
                                  setEditingStudentId(student.id);
                                  setEditingName(student.name);
                                  setEditingMascot(student.secretPicture);
                                }}
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  color: 'var(--kids-blue)',
                                  cursor: 'pointer',
                                  padding: '4px',
                                  display: 'flex',
                                  alignItems: 'center'
                                }}
                                title="Edit Student"
                              >
                                ✏️
                              </button>

                              <button
                                onClick={() => handleDeleteStudent(student.id)}
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  color: '#ef4444',
                                  cursor: 'pointer',
                                  padding: '4px',
                                  display: 'flex',
                                  alignItems: 'center'
                                }}
                                title="Delete Student"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

              </div>
            ) : (
              <div className="glass-card" style={{
                background: 'white',
                padding: '4rem 2rem',
                borderRadius: '28px',
                border: '2px solid #e2e8f0',
                boxShadow: '0 15px 35px rgba(0,0,0,0.03)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                color: 'var(--kids-text-muted)'
              }}>
                <Users size={48} style={{ color: '#cbd5e1', marginBottom: '1.5rem' }} />
                <h3 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '1.6rem', color: '#475569', margin: '0 0 0.5rem 0' }}>Select or Create a Section</h3>
                <p style={{ margin: 0, fontSize: '0.95rem', maxWidth: '300px', lineHeight: 1.4 }}>Create a new classroom section code on the left, or select an active code to manage your roster.</p>
              </div>
            )}
          </div>

        </div>

        {/* PRINT-ONLY SECTION (Visual Login Cards or Class Report) */}
        {activeCode && students.length > 0 && (
          <div className="print-section" style={{ display: 'none' }}>
            {printJobType === 'passkeys' ? (
              <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ borderBottom: '3px solid #1e3a8a', paddingBottom: '1rem', marginBottom: '2rem', textAlign: 'center' }}>
                  <h1 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '2.5rem', color: '#1e3a8a', margin: '0 0 0.25rem' }}>Kone Kids Passkey Sheet</h1>
                  <p style={{ margin: 0, fontSize: '1.1rem', color: '#475569' }}>Classroom Code: <strong>{activeCode}</strong></p>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem'
                }}>
                  {students.map((student) => (
                    <div 
                      key={student.id}
                      style={{
                        border: '2px solid #cbd5e1',
                        borderRadius: '16px',
                        padding: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        background: '#fff',
                        pageBreakInside: 'avoid'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--kids-orange)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Kone Kids Login Card</div>
                        <h3 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '1.4rem', margin: '0.25rem 0 0.75rem', color: '#1e3a8a' }}>{student.name}</h3>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: '#475569' }}>
                          <div>1. Visit: <strong>kids.koneacademy.io</strong></div>
                          <div>2. Click <strong>Student Login</strong> button</div>
                          <div>3. Enter classroom code: <strong>{activeCode}</strong></div>
                          <div>4. Select your name: <strong>{student.name}</strong></div>
                        </div>
                      </div>

                      <div style={{
                        marginTop: '1rem',
                        background: '#f1f5f9',
                        borderRadius: '12px',
                        padding: '8px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '1px solid #cbd5e1'
                      }}>
                        <span style={{ fontWeight: 800, fontSize: '0.85rem', color: '#475569' }}>My Secret Mascot:</span>
                        <span style={{ fontSize: '2rem' }}>{student.secretPicture}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // ─── CLASSROOM PROGRESS REPORT ───────────────────────────────────────
              <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
                
                {/* PAGE 1: CLASS SUMMARY OVERVIEW */}
                <div>
                  <div style={{ borderBottom: '4px solid #3b82f6', paddingBottom: '1rem', marginBottom: '2rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Kone Code Academy</div>
                    <h1 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '2.8rem', color: '#1e3a8a', margin: '0.25rem 0' }}>Classroom Progress Report</h1>
                    <p style={{ margin: 0, fontSize: '1.1rem', color: '#475569' }}>
                      Classroom Section: <strong>{mySections.find(s => s.id === activeCode)?.name || 'Classroom'}</strong> &nbsp;|&nbsp; Code: <strong>{activeCode}</strong>
                    </p>
                    <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: '#94a3b8' }}>
                      Generated on: {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>

                  {/* Summary Metrics Cards Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1rem',
                    marginBottom: '2.5rem'
                  }}>
                    <div style={{ border: '2px solid #e2e8f0', borderRadius: '16px', padding: '1rem', textAlign: 'center', background: '#f8fafc' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Students</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e3a8a' }}>{students.length}</div>
                    </div>
                    <div style={{ border: '2px solid #e2e8f0', borderRadius: '16px', padding: '1rem', textAlign: 'center', background: '#f8fafc' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Class Avg XP</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e3a8a' }}>
                        {students.length > 0 ? Math.round(students.reduce((acc, s) => acc + (s.xp || 0), 0) / students.length) : 0}
                      </div>
                    </div>
                    <div style={{ border: '2px solid #e2e8f0', borderRadius: '16px', padding: '1rem', textAlign: 'center', background: '#f8fafc' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Missions Run</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e3a8a' }}>
                        {students.reduce((acc, s) => acc + (s.completedMissions?.length || 0), 0)}
                      </div>
                    </div>
                    <div style={{ border: '2px solid #e2e8f0', borderRadius: '16px', padding: '1rem', textAlign: 'center', background: '#f8fafc' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Top Level</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e3a8a' }}>
                        Level {students.length > 0 ? Math.max(...students.map(s => Math.floor((s.xp || 0) / 500) + 1)) : 1}
                      </div>
                    </div>
                  </div>

                  {/* Class Roster Summary Table */}
                  <h3 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '1.4rem', color: '#1e3a8a', marginBottom: '0.75rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.25rem' }}>Class Roster Overview</h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem', marginBottom: '2rem' }}>
                    <thead>
                      <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #cbd5e1' }}>
                        <th style={{ padding: '8px 12px', fontWeight: 800 }}>Student Name</th>
                        <th style={{ padding: '8px 12px', fontWeight: 800, textAlign: 'center' }}>Mascot</th>
                        <th style={{ padding: '8px 12px', fontWeight: 800, textAlign: 'center' }}>Level</th>
                        <th style={{ padding: '8px 12px', fontWeight: 800, textAlign: 'right' }}>Total XP</th>
                        <th style={{ padding: '8px 12px', fontWeight: 800, textAlign: 'right' }}>Coins</th>
                        <th style={{ padding: '8px 12px', fontWeight: 800, textAlign: 'center' }}>Missions Done</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student, idx) => (
                        <tr key={student.id} style={{ borderBottom: '1px solid #e2e8f0', background: idx % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                          <td style={{ padding: '10px 12px', fontWeight: 700 }}>{student.name}</td>
                          <td style={{ padding: '10px 12px', fontSize: '1.25rem', textAlign: 'center' }}>{student.secretPicture}</td>
                          <td style={{ padding: '10px 12px', textAlign: 'center', fontWeight: 800 }}>{Math.floor((student.xp || 0) / 500) + 1}</td>
                          <td style={{ padding: '10px 12px', textAlign: 'right', fontWeight: 700 }}>{student.xp || 0}</td>
                          <td style={{ padding: '10px 12px', textAlign: 'right', color: '#b45309', fontWeight: 700 }}>{student.coins || 0}</td>
                          <td style={{ padding: '10px 12px', textAlign: 'center', fontWeight: 700 }}>{student.completedMissions?.length || 0}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* PAGE 2+: INDIVIDUAL STUDENT DETAILS */}
                {students.map((student) => {
                  const level = Math.floor((student.xp || 0) / 500) + 1;
                  const currentLevelXp = (student.xp || 0) % 500;
                  const percent = Math.min(Math.round((currentLevelXp / 500) * 100), 100);

                  return (
                    <div key={student.id} className="page-break" style={{ padding: '2rem 0' }}>
                      {/* Individual Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #0d9488', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
                        <div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Kone Kids - Student Progress Card</div>
                          <h2 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '2.2rem', color: '#1e3a8a', margin: '0.1rem 0 0' }}>{student.name}</h2>
                        </div>
                        <div style={{ fontSize: '3rem', background: '#f0fdfa', padding: '8px', borderRadius: '16px', border: '2px solid #99f6e4' }}>
                          {student.secretPicture}
                        </div>
                      </div>

                      {/* Stats Overview */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                        <div style={{ border: '2px solid #e2e8f0', borderRadius: '16px', padding: '1.25rem', background: '#f8fafc' }}>
                          <h4 style={{ margin: '0 0 0.5rem', color: '#475569', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>Academic Standing</h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.95rem' }}>
                            <div>Current Level: <strong style={{ color: '#0d9488', fontSize: '1.1rem' }}>Level {level}</strong></div>
                            <div>Total Accumulated Experience: <strong>{student.xp || 0} XP</strong></div>
                            <div>Coins Wallet: <strong style={{ color: '#b45309' }}>🪙 {student.coins || 0}</strong></div>
                          </div>

                          {/* Level Progress bar */}
                          <div style={{ marginTop: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, color: '#64748b', marginBottom: '0.25rem' }}>
                              <span>Level Progress</span>
                              <span>{percent}% ({currentLevelXp}/500 XP)</span>
                            </div>
                            <div className="progress-bar-container" style={{ height: '14px', background: '#e2e8f0', borderRadius: '7px', overflow: 'hidden', border: '1px solid #cbd5e1' }}>
                              <div className="progress-bar-fill" style={{ width: `${percent}%`, height: '100%', background: '#0d9488', borderRadius: '7px', transition: 'width 0.3s' }} />
                            </div>
                          </div>
                        </div>

                        <div style={{ border: '2px solid #e2e8f0', borderRadius: '16px', padding: '1.25rem', background: '#f8fafc' }}>
                          <h4 style={{ margin: '0 0 0.5rem', color: '#475569', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>Classroom Access</h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.95rem', color: '#475569' }}>
                            <div>Portal Link: <strong>kids.koneacademy.io</strong></div>
                            <div>Classroom Code: <strong>{activeCode}</strong></div>
                            <div>Login ID: <strong>{student.name}</strong></div>
                            <div>Secret Mascot Passkey: <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>{student.secretPicture}</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Completed Missions detail */}
                      <h3 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '1.3rem', color: '#1e3a8a', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.25rem', marginBottom: '0.75rem' }}>
                        Completed Coding Missions ({student.completedMissions?.length || 0})
                      </h3>
                      {(!student.completedMissions || student.completedMissions.length === 0) ? (
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}>No missions completed yet. Keep coding!</p>
                      ) : (
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '0.5rem',
                        }}>
                          {student.completedMissions.map((missionId: string) => {
                            const m = CODING_MISSIONS.find((mission) => mission.id === missionId);
                            return (
                              <div 
                                key={missionId}
                                style={{
                                  border: '1px solid #cbd5e1',
                                  borderRadius: '8px',
                                  padding: '8px 12px',
                                  background: '#fff',
                                  fontSize: '0.85rem',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center'
                                }}
                              >
                                <span style={{ fontWeight: 700, color: '#1e3a8a' }}>
                                  {m ? m.name : missionId}
                                </span>
                                <span style={{ fontSize: '0.75rem', color: '#64748b', background: '#f1f5f9', padding: '2px 6px', borderRadius: '4px' }}>
                                  {m ? m.pathway : 'Unknown'}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
