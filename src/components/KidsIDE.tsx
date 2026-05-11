import React, { useEffect, useRef, useState } from 'react';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { pythonGenerator } from 'blockly/python';
import Mascot, { MascotHandle } from './Mascot';
import RoboticsSimulator, { RoboticsHandle } from './RoboticsSimulator';
import MissionBriefing from './MissionBriefing';
import OnboardingTour, { ONBOARDING_STEPS } from './OnboardingTour';
import { useGamification } from '../context/GamificationContext';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { CODING_MISSIONS } from '../data/missions';
import { Play, Square, FileCode, Blocks, Eye, EyeOff } from 'lucide-react';

// Define a premium dark theme for Blockly
const KoneDark = Blockly.Theme.defineTheme('kone_dark', {
  name: 'kone_dark',
  base: Blockly.Themes.Classic,
  componentStyles: {
    workspaceBackgroundColour: '#0f172a',
    toolboxBackgroundColour: '#1e293b',
    toolboxForegroundColour: '#cbd5e1',
    flyoutBackgroundColour: '#1e293b',
    flyoutForegroundColour: '#cbd5e1',
    insertionMarkerColour: '#f97316',
    insertionMarkerOpacity: 0.3,
    scrollbarColour: '#334155',
    scrollbarOpacity: 0.4,
    cursorColour: '#0ea5e9',
  },
  blockStyles: {
    logic_blocks: { colourPrimary: '#a855f7', colourSecondary: '#9333ea', colourTertiary: '#7e22ce' },
    loop_blocks: { colourPrimary: '#0ea5e9', colourSecondary: '#0284c7', colourTertiary: '#0369a1' },
    math_blocks: { colourPrimary: '#10b981', colourSecondary: '#059669', colourTertiary: '#047857' },
    procedure_blocks: { colourPrimary: '#ec4899', colourSecondary: '#db2777', colourTertiary: '#be185d' },
    variable_blocks: { colourPrimary: '#f97316', colourSecondary: '#ea580c', colourTertiary: '#c2410c' },
  },
  categoryStyles: {
    logic_category: { colour: '#a855f7' },
    loop_category: { colour: '#0ea5e9' },
    math_category: { colour: '#10b981' },
    procedure_category: { colour: '#ec4899' },
    variable_category: { colour: '#f97316' },
  }
});

const KidsIDE: React.FC = () => {
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const workspace = useRef<Blockly.WorkspaceSvg | null>(null);
  const mascotRef = useRef<MascotHandle>(null);
  const robotRef = useRef<RoboticsHandle>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isStopping, setIsStopping] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [onboardingStep, setOnboardingStep] = useState<number>(-1);
  const [activeTab, setActiveTab] = useState<'blocks' | 'code'>('blocks');
  const [generatedCode, setGeneratedCode] = useState('');
  const [showCode, setShowCode] = useState(true);
  const [language, setLanguage] = useState<'javascript' | 'python'>('javascript');
  const [hasStartedMission, setHasStartedMission] = useState(false);
  
  const { missionId } = useParams<{ missionId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { unlockBadge, completeMission, completedMissions, hasCompletedOnboarding, completeOnboarding } = useGamification();
  const mission = CODING_MISSIONS.find(m => m.id === missionId);
  const isMissionCompleted = completedMissions.includes(missionId || '');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Derive the hub (/coding, /robotics, /ai) from the current URL
  const hubPath = '/' + (location.pathname.split('/')[1] || 'coding');

  useEffect(() => {
    if (missionId && !hasCompletedOnboarding) {
      setOnboardingStep(0);
    } else {
      setOnboardingStep(-1);
    }
    setHasStartedMission(false);
  }, [missionId, hasCompletedOnboarding]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);

    const observer = new ResizeObserver(() => {
      if (workspace.current) {
        Blockly.svgResize(workspace.current);
      }
    });

    if (blocklyDiv.current) {
      observer.observe(blocklyDiv.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (workspace.current) {
      requestAnimationFrame(() => {
        if (workspace.current) {
          Blockly.svgResize(workspace.current);
        }
      });
    }
  }, [isMobile, showCode]);

  useEffect(() => {
    // --- Block Definitions ---
    if (!Blockly.Blocks['mascot_speak']) {
      Blockly.Blocks['mascot_speak'] = {
        init: function() {
          this.appendDummyInput().appendField("🗣️ Say").appendField(new Blockly.FieldTextInput("Hello!"), "TEXT");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(160);
        }
      };
      javascriptGenerator.forBlock['mascot_speak'] = (block: any) => `await mascot.speak("${block.getFieldValue('TEXT')}");\n`;
    }

    if (!Blockly.Blocks['mascot_wave']) {
      Blockly.Blocks['mascot_wave'] = {
        init: function() {
          this.appendDummyInput().appendField("👋 Wave Hand");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(230);
        }
      };
      javascriptGenerator.forBlock['mascot_wave'] = () => `await mascot.wave();\n`;
    }

    if (!Blockly.Blocks['mascot_blink']) {
      Blockly.Blocks['mascot_blink'] = {
        init: function() {
          this.appendDummyInput().appendField("👁️ Blink Eyes");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(290);
        }
      };
      javascriptGenerator.forBlock['mascot_blink'] = () => `await mascot.blink();\n`;
    }

    // --- Robotics Blocks ---
    if (!Blockly.Blocks['robot_move']) {
      Blockly.Blocks['robot_move'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("🚜 Move")
              .appendField(new Blockly.FieldDropdown([["Forward", "forward"], ["Backward", "backward"]]), "DIR")
              .appendField("for")
              .appendField(new Blockly.FieldNumber(2, 0.1, 10), "DURATION")
              .appendField("sec");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(20);
        }
      };
      javascriptGenerator.forBlock['robot_move'] = (block: any) => `await robot.move("${block.getFieldValue('DIR')}", ${block.getFieldValue('DURATION')} * 1000);\n`;
    }

    if (!Blockly.Blocks['robot_turn']) {
      Blockly.Blocks['robot_turn'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("🔄 Turn")
              .appendField(new Blockly.FieldDropdown([["Left ⟲", "left"], ["Right ⟳", "right"]]), "DIR")
              .appendField("for")
              .appendField(new Blockly.FieldNumber(1, 0.1, 10), "DURATION")
              .appendField("sec");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(45);
        }
      };
      javascriptGenerator.forBlock['robot_turn'] = (block: any) => `await robot.turn("${block.getFieldValue('DIR')}", ${block.getFieldValue('DURATION')} * 1000);\n`;
    }

    if (!Blockly.Blocks['robot_stop']) {
      Blockly.Blocks['robot_stop'] = {
        init: function() {
          this.appendDummyInput().appendField("🛑 Stop Robot");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(0);
        }
      };
      javascriptGenerator.forBlock['robot_stop'] = () => `robot.stop();\n`;
    }

    if (!Blockly.Blocks['robot_distance']) {
      Blockly.Blocks['robot_distance'] = {
        init: function() {
          this.appendDummyInput().appendField("📏 Distance Sensor");
          this.setOutput(true, "Number");
          this.setColour(60);
        }
      };
      javascriptGenerator.forBlock['robot_distance'] = () => [`robot.getDistance()`, (javascriptGenerator as any).ORDER_ATOMIC];
    }

    // Inject Workspace
    if (blocklyDiv.current && !workspace.current) {
      const toolboxContents: any[] = [
        {
          kind: 'category',
          name: '🤖 Mascot',
          colour: '#0ea5e9',
          contents: [
            { kind: 'block', type: 'mascot_speak' },
            { kind: 'block', type: 'mascot_wave' },
            { kind: 'block', type: 'mascot_blink' },
          ]
        },
        {
          kind: 'category',
          name: '🚜 Robotics',
          colour: '#fbbf24',
          contents: [
            { kind: 'block', type: 'robot_move' },
            { kind: 'block', type: 'robot_turn' },
            { kind: 'block', type: 'robot_stop' },
            { kind: 'block', type: 'robot_distance' },
          ]
        },
        { kind: 'category', name: '🧠 Logic', categorystyle: 'logic_category', contents: [{ kind: 'block', type: 'controls_if' }] },
        { kind: 'category', name: '🔄 Loops', categorystyle: 'loop_category', contents: [{ kind: 'block', type: 'controls_repeat_ext' }] },
        { kind: 'category', name: '📦 Variables', categorystyle: 'variable_category', custom: 'VARIABLE' }
      ];

      const ws = Blockly.inject(blocklyDiv.current, {
        toolbox: { kind: 'categoryToolbox', contents: toolboxContents },
        theme: KoneDark,
        trashcan: true,
        renderer: 'zelos'
      });
      workspace.current = ws;

      ws.addChangeListener((event: any) => {
        if (onboardingStep === 1 && event.type === Blockly.Events.UI && event.element === 'category') {
          setOnboardingStep(2);
        }
        if (onboardingStep === 2 && event.type === Blockly.Events.BLOCK_CREATE) {
          setOnboardingStep(3);
        }

        if (event.type === Blockly.Events.BLOCK_MOVE || event.type === Blockly.Events.BLOCK_CHANGE || event.type === Blockly.Events.BLOCK_DELETE || event.type === Blockly.Events.BLOCK_CREATE) {
          const generator = language === 'javascript' ? javascriptGenerator : pythonGenerator;
          setGeneratedCode(generator.workspaceToCode(ws));
        }
      });
    }
  }, [onboardingStep, language]);

  const runCode = async () => {
    if (!workspace.current || isRunning) return;
    setIsRunning(true);
    setIsStopping(false);
    
    if (onboardingStep === 3) {
      completeOnboarding();
      setOnboardingStep(-1);
    }

    const code = javascriptGenerator.workspaceToCode(workspace.current);
    const mascot = {
      speak: (text: string) => new Promise(res => { mascotRef.current?.speak(text); setTimeout(res, 2500); }),
      wave: () => new Promise(res => { mascotRef.current?.wave(2000); setTimeout(res, 2200); }),
      blink: () => new Promise(res => { mascotRef.current?.blink(); setTimeout(res, 600); })
    };

    const robot = {
      move: (dir: any, dur: any) => robotRef.current?.move(dir, dur),
      turn: (dir: any, dur: any) => robotRef.current?.turn(dir, dur),
      stop: () => robotRef.current?.stop(),
      getDistance: () => robotRef.current?.getDistance()
    };

    try {
      const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
      const fn = new AsyncFunction('mascot', 'robot', code);
      await fn(mascot, robot);
    } catch (e) {
      console.error(e);
    } finally {
      setIsRunning(false);
      if (mission && !isMissionCompleted) {
        completeMission(mission.id, mission.xpReward);
        setShowSuccessModal(true);
      }
    }
  };

  const stopCode = () => {
    setIsStopping(true);
    setIsRunning(false);
    window.speechSynthesis.cancel();
  };

  const handleNextMission = () => {
    const currentIndex = CODING_MISSIONS.findIndex(m => m.id === missionId);
    const hubMissions = CODING_MISSIONS.filter(m =>
      mission?.pathway ? m.pathway === mission.pathway : true
    );
    const currentHubIndex = hubMissions.findIndex(m => m.id === missionId);
    if (currentHubIndex < hubMissions.length - 1) {
      const nextMission = hubMissions[currentHubIndex + 1];
      setShowSuccessModal(false);
      navigate(`${hubPath}/mission/${nextMission.id}`);
    } else {
      navigate(hubPath);
    }
  };

  return (
    <div className="kids-ide-container engineering-lab-wrapper" style={{ margin: '2rem 0', padding: isMobile ? '1rem' : '1.5rem', borderRadius: '24px', overflow: 'hidden', position: 'relative' }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h3 className="lab-title" style={{ margin: 0, fontSize: isMobile ? '1.4rem' : '1.8rem' }}>KONE KIDS IDE</h3>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Build the future, one block at a time!</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '4px' }}>
            <button onClick={() => setLanguage('javascript')} className={`px-4 py-2 rounded-xl ${language === 'javascript' ? 'bg-orange-500' : 'bg-slate-700'}`} style={{ background: language === 'javascript' ? 'var(--kids-orange)' : 'transparent', border: 'none', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer' }}>JS</button>
            <button onClick={() => setLanguage('python')} className={`px-4 py-2 rounded-xl ${language === 'python' ? 'bg-blue-500' : 'bg-slate-700'}`} style={{ background: language === 'python' ? 'var(--kids-blue)' : 'transparent', border: 'none', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer' }}>PY</button>
          </div>
          
          <button 
            onClick={() => setShowCode(!showCode)}
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.5rem', borderRadius: '10px', cursor: 'pointer' }}
          >
            {showCode ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', height: isMobile ? 'auto' : '600px', flexDirection: isMobile ? 'column' : 'row' }}>
        {/* Workspace */}
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {mission && (
            <div style={{ background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14, 165, 233, 0.3)', borderRadius: '16px', padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ fontSize: '2rem' }}>🎯</div>
              <div>
                <h4 style={{ margin: 0, color: 'var(--kids-blue)', fontSize: '0.8rem' }}>MISSION: {mission.name}</h4>
                <p style={{ margin: 0, color: 'white', fontWeight: 600 }}>{mission.objective}</p>
              </div>
            </div>
          )}
          <div ref={blocklyDiv} style={{ flex: 1, borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#0b0e14', minHeight: isMobile ? '400px' : '0' }} />
        </div>

        {/* Side Panel */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: isMobile ? '100%' : '350px' }}>
          <div style={{ 
            background: '#151921', 
            borderRadius: '20px', 
            padding: '1.5rem', 
            border: '1px solid rgba(255,255,255,0.05)', 
            height: '350px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            position: 'relative',
            overflow: 'hidden'
          }}>
            {mission?.pathway === 'Robotics (AI 4 Kids)' ? (
              <RoboticsSimulator ref={robotRef} />
            ) : (
              <Mascot ref={mascotRef} />
            )}
          </div>

          {showCode && (
            <div className="code-preview-panel" style={{ flex: 1, background: '#1e1e1e', borderRadius: '12px', border: '1px solid #333', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#252526', padding: '8px 12px', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.8rem' }}>
                <FileCode size={16} />
                <span>main.{language === 'javascript' ? 'js' : 'py'}</span>
              </div>
              <pre style={{ margin: 0, padding: '1rem', color: '#cbd5e1', fontSize: '0.85rem', fontFamily: 'Fira Code, monospace', overflowY: 'auto', flex: 1 }}>
                {generatedCode || '// Your code will appear here...'}
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem', zIndex: 50, display: 'flex', gap: '0.75rem' }}>
        {!isRunning ? (
          <button id="run-code-btn" className="neon-glow-button kids-button" style={{ padding: '0.65rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }} onClick={runCode}>
            <Play size={18} fill="currentColor" />
            <span>Run Code</span>
          </button>
        ) : (
          <button className="kids-button" style={{ padding: '0.65rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', background: '#ef4444', boxShadow: '0 6px 0 #991b1b' }} onClick={stopCode}>
            <Square size={18} fill="currentColor" />
            <span>Stop</span>
          </button>
        )}
      </div>

      {onboardingStep !== -1 && (
        <OnboardingTour 
          currentStep={onboardingStep} 
          onNext={() => setOnboardingStep(prev => prev + 1)} 
          onSkip={() => { completeOnboarding(); setOnboardingStep(-1); }}
        />
      )}

      {showSuccessModal && mission && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ background: '#1e293b', padding: '3rem', borderRadius: '32px', textAlign: 'center', maxWidth: '450px', width: '90%', border: '2px solid var(--kids-blue)', boxShadow: '0 0 50px rgba(14, 165, 233, 0.3)' }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🏆</div>
            <h2 className="lab-title" style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>MISSION COMPLETE!</h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.2rem', marginBottom: '2rem' }}> Awesome work, Engineer! You earned <strong style={{ color: 'var(--kids-blue)' }}>{mission.xpReward} XP</strong>.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button className="kids-button pulse-neon" onClick={handleNextMission} style={{ width: '100%', fontSize: '1.2rem' }}> NEXT MISSION 🚀 </button>
              <button className="kids-button" onClick={() => navigate(hubPath)} style={{ width: '100%', background: 'transparent', boxShadow: 'none', border: '1px solid rgba(255,255,255,0.2)' }}> BACK TO MAP </button>
            </div>
          </div>
        </div>
      )}

      {mission?.briefing && !hasStartedMission && (
        <MissionBriefing 
          missionName={mission.name} 
          briefing={mission.briefing} 
          onStart={() => setHasStartedMission(true)} 
        />
      )}
    </div>
  );
};

export default KidsIDE;
