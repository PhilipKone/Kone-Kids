import React, { useEffect, useRef, useState } from 'react';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { pythonGenerator } from 'blockly/python';
import Mascot, { MascotHandle } from './Mascot';
import { useGamification } from '../context/GamificationContext';
import { useParams, useNavigate } from 'react-router-dom';
import { CODING_MISSIONS } from '../data/missions';

// Define a premium dark theme for Blockly
const KoneDark = Blockly.Theme.defineTheme('kone_dark', {
  name: 'kone_dark',
  base: Blockly.Themes.Classic,
  componentStyles: {
    workspaceBackgroundColour: '#0f172a', // Using --kids-dark
    toolboxBackgroundColour: '#1e293b',
    toolboxForegroundColour: '#cbd5e1',
    flyoutBackgroundColour: '#1e293b',
    flyoutForegroundColour: '#cbd5e1',
    insertionMarkerColour: '#f97316', // Using --kids-orange
    insertionMarkerOpacity: 0.3,
    scrollbarColour: '#334155',
    scrollbarOpacity: 0.4,
    cursorColour: '#0ea5e9', // Using --kids-blue
  },
  blockStyles: {
    logic_blocks: { colourPrimary: '#a855f7', colourSecondary: '#9333ea', colourTertiary: '#7e22ce' }, // AI Purple
    loop_blocks: { colourPrimary: '#0ea5e9', colourSecondary: '#0284c7', colourTertiary: '#0369a1' }, // Robotics Blue
    math_blocks: { colourPrimary: '#10b981', colourSecondary: '#059669', colourTertiary: '#047857' },
    procedure_blocks: { colourPrimary: '#ec4899', colourSecondary: '#db2777', colourTertiary: '#be185d' },
    variable_blocks: { colourPrimary: '#f97316', colourSecondary: '#ea580c', colourTertiary: '#c2410c' }, // Coding Orange
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
  const [isRunning, setIsRunning] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // Increased threshold for tablets
  const [activeTab, setActiveTab] = useState<'blocks' | 'code'>('blocks');
  const [generatedCode, setGeneratedCode] = useState('');
  const [showCode, setShowCode] = useState(true);
  const [language, setLanguage] = useState<'javascript' | 'python'>('javascript');
  const [isStopping, setIsStopping] = useState(false);
  const abortController = useRef<AbortController | null>(null);
  
  const { missionId } = useParams<{ missionId: string }>();
  const navigate = useNavigate();
  const { unlockBadge, completeMission, completedMissions } = useGamification();
  const mission = CODING_MISSIONS.find(m => m.id === missionId);
  const isMissionCompleted = completedMissions.includes(missionId || '');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Responsive breakpoints and Blockly resizing
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

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  // Force Blockly to resize when switching between mobile/desktop layouts
  useEffect(() => {
    if (workspace.current) {
      // Use requestAnimationFrame to ensure the browser has finished the layout pass
      requestAnimationFrame(() => {
        if (workspace.current) {
          Blockly.svgResize(workspace.current);
        }
      });
    }
  }, [isMobile]);

  // Define Blocks & Generators
  useEffect(() => {
    // Override Blockly's prompt to ensure it works in this environment
    Blockly.dialog.setPrompt((message, defaultValue, callback) => {
      const name = window.prompt(message, defaultValue);
      callback(name);
    });

    // 1. Speak Block
    Blockly.Blocks['mascot_speak'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("🗣️ Say")
            .appendField(new Blockly.FieldTextInput("Hello!"), "TEXT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
      }
    };
    javascriptGenerator.forBlock['mascot_speak'] = (block: any) => {
      const text = block.getFieldValue('TEXT');
      return `await mascot.speak("${text}");\n`;
    };
    pythonGenerator.forBlock['mascot_speak'] = (block: any) => {
      const text = block.getFieldValue('TEXT');
      return `mascot.speak("${text}")\n`;
    };

    // 2. Wave Block
    Blockly.Blocks['mascot_wave'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("👋 Wave Hand");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
      }
    };
    javascriptGenerator.forBlock['mascot_wave'] = () => `await mascot.wave();\n`;
    pythonGenerator.forBlock['mascot_wave'] = () => `mascot.wave()\n`;

    // 3. Blink Block
    Blockly.Blocks['mascot_blink'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("👁️ Blink Eyes");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
      }
    };
    javascriptGenerator.forBlock['mascot_blink'] = () => `await mascot.blink();\n`;
    pythonGenerator.forBlock['mascot_blink'] = () => `mascot.blink()\n`;

    // 4. Wait Block
    Blockly.Blocks['mascot_wait'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("⏳ Wait")
            .appendField(new Blockly.FieldTextInput("1"), "SECONDS")
            .appendField("seconds");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
      }
    };
    javascriptGenerator.forBlock['mascot_wait'] = (block: any) => {
      const seconds = block.getFieldValue('SECONDS');
      return `await new Promise(resolve => setTimeout(resolve, ${parseFloat(seconds) * 1000}));\n`;
    };
    pythonGenerator.forBlock['mascot_wait'] = (block: any) => {
      const seconds = block.getFieldValue('SECONDS');
      return `time.sleep(${seconds})\n`;
    };

    // --- Specialized Pathway Blocks ---

    // Mobile Blocks
    Blockly.Blocks['mobile_screen'] = {
      init: function() {
        this.appendDummyInput().appendField("📱 New Screen").appendField(new Blockly.FieldTextInput("Welcome"), "NAME");
        this.setNextStatement(true, null);
        this.setColour('#22d3ee');
      }
    };
    javascriptGenerator.forBlock['mobile_screen'] = (block: any) => `await mascot.speak("Creating mobile screen: ${block.getFieldValue('NAME')}");\n`;

    Blockly.Blocks['mobile_button'] = {
      init: function() {
        this.appendDummyInput().appendField("🔘 Add Button").appendField(new Blockly.FieldTextInput("Click Me"), "TEXT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#22d3ee');
      }
    };
    javascriptGenerator.forBlock['mobile_button'] = (block: any) => `await mascot.speak("Adding button: ${block.getFieldValue('TEXT')}");\n`;

    // Robotics Blocks
    Blockly.Blocks['robot_motor'] = {
      init: function() {
        this.appendDummyInput().appendField("🦾 Spin Motor").appendField(new Blockly.FieldDropdown([["Left", "LEFT"], ["Right", "RIGHT"]]), "SIDE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#0ea5e9');
      }
    };
    javascriptGenerator.forBlock['robot_motor'] = (block: any) => `await mascot.speak("Spinning ${block.getFieldValue('SIDE')} motor...");\nawait mascot.wave();\n`;

    // AI Blocks
    Blockly.Blocks['ai_train'] = {
      init: function() {
        this.appendDummyInput().appendField("🧠 Train AI on").appendField(new Blockly.FieldDropdown([["Shapes", "SHAPES"], ["Colors", "COLORS"], ["Faces", "FACES"]]), "TYPE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#a855f7');
      }
    };
    javascriptGenerator.forBlock['ai_train'] = (block: any) => `await mascot.speak("Training AI model for ${block.getFieldValue('TYPE')}...");\nawait mascot.blink();\n`;

    // Logic Blocks Commentary
    javascriptGenerator.forBlock['controls_if'] = (block: any) => {
      const code = javascriptGenerator.statementToCode(block, 'DO0');
      return `await mascot.speak("Checking logic...");\nif (true) {\n${code}\n}\n`;
    };

    javascriptGenerator.forBlock['controls_repeat_ext'] = (block: any) => {
      const repeats = javascriptGenerator.valueToCode(block, 'TIMES', 0) || '0';
      const branch = javascriptGenerator.statementToCode(block, 'DO');
      return `await mascot.speak("Repeating this ${repeats} times!");\nfor (var i = 0; i < ${repeats}; i++) {\n${branch}\n}\n`;
    };

    // Inject Workspace
    if (blocklyDiv.current) {
      const toolboxContents: any[] = [
        {
          kind: 'category',
          name: '🤖 Mascot',
          colour: '#0ea5e9',
          contents: [
            { kind: 'block', type: 'mascot_speak' },
            { kind: 'block', type: 'mascot_wave' },
            { kind: 'block', type: 'mascot_blink' },
            { kind: 'block', type: 'mascot_wait' },
          ]
        }
      ];

      // Add pathway-specific categories
      if (mission?.pathway === 'Mobile App Dev') {
        toolboxContents.push({
          kind: 'category',
          name: '📱 Mobile',
          colour: '#22d3ee',
          contents: [
            { kind: 'block', type: 'mobile_screen' },
            { kind: 'block', type: 'mobile_button' },
          ]
        });
      }

      if (mission?.pathway === 'Robotics (AI 4 Kids)') {
        toolboxContents.push({
          kind: 'category',
          name: '🦾 Robotics',
          colour: '#0ea5e9',
          contents: [
            { kind: 'block', type: 'robot_motor' },
          ]
        });
      }

      if (mission?.pathway?.includes('AI') || mission?.pathway?.includes('ML')) {
        toolboxContents.push({
          kind: 'category',
          name: '✨ AI Lab',
          colour: '#a855f7',
          contents: [
            { kind: 'block', type: 'ai_train' },
          ]
        });
      }

      // Add standard categories
      toolboxContents.push(
        { kind: 'category', name: '🧠 Logic', categorystyle: 'logic_category', contents: [{ kind: 'block', type: 'controls_if' }, { kind: 'block', type: 'logic_compare' }] },
        { kind: 'category', name: '🔄 Loops', categorystyle: 'loop_category', contents: [{ kind: 'block', type: 'controls_repeat_ext' }] },
        { kind: 'category', name: '🔢 Math', categorystyle: 'math_category', contents: [{ kind: 'block', type: 'math_number' }] },
        { kind: 'category', name: '📦 Variables', categorystyle: 'variable_category', custom: 'VARIABLE' }
      );

      const ws = Blockly.inject(blocklyDiv.current, {
        toolbox: {
          kind: 'categoryToolbox',
          contents: toolboxContents
        },
        theme: KoneDark,
        trashcan: true,
        scrollbars: true,
        move: { scrollbars: true, drag: true, wheel: true },
        zoom: { controls: true, wheel: true, startScale: 1.0, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2 },
        renderer: 'zelos' // Using zelos for a more modern, Scratch-like yet professional look
      });
      workspace.current = ws;

      // Listen for workspace changes to update code preview
      ws.addChangeListener((event: any) => {
        if (event.type === Blockly.Events.BLOCK_MOVE || 
            event.type === Blockly.Events.BLOCK_CHANGE || 
            event.type === Blockly.Events.BLOCK_DELETE ||
            event.type === Blockly.Events.BLOCK_CREATE) {
          const generator = language === 'javascript' ? javascriptGenerator : pythonGenerator;
          const code = generator.workspaceToCode(ws);
          setGeneratedCode(code);
        }
      });

      // Only load initial script if NOT in a mission
      if (!missionId) {
        const initialXml = `<xml xmlns="https://developers.google.com/blockly/xml">
          <block type="mascot_speak" x="20" y="20">
            <field name="TEXT">Kone Engineering Active! ⚡</field>
            <next>
              <block type="mascot_wave">
                <next>
                  <block type="mascot_blink"></block>
                </next>
              </block>
            </next>
          </block>
        </xml>`;
        Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(initialXml), workspace.current as any);
      } else {
        workspace.current?.clear();
      }
      
      const generator = language === 'javascript' ? javascriptGenerator : pythonGenerator;
      setGeneratedCode(generator.workspaceToCode(ws));
    }
  }, [language, missionId, mission?.pathway]); // Re-run when missionId or pathway changes

  // Mascot Mission Briefing
  useEffect(() => {
    if (mission && mascotRef.current) {
      const timer = setTimeout(() => {
        mascotRef.current?.speak(`Hi! I'm your lab assistant. Today's mission is: ${mission.name}. ${mission.description}`);
        mascotRef.current?.wave(2000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [missionId]);

  useEffect(() => {
    return () => workspace.current?.dispose();
  }, []);

  const runCode = async () => {
    if (!workspace.current || isRunning) return;
    
    setIsRunning(true);
    setIsStopping(false);
    unlockBadge('first_hello');

    const code = javascriptGenerator.workspaceToCode(workspace.current);
    
    // Create an execution bridge that checks for stop signal
    const checkStop = () => {
      if (isStopping) throw new Error('Execution stopped');
    };

    const mascot = {
      speak: (text: string) => new Promise((res, rej) => {
        if (isStopping) return rej('Stopped');
        mascotRef.current?.speak(text);
        setTimeout(res, 2500); 
      }),
      wave: () => new Promise((res, rej) => {
        if (isStopping) return rej('Stopped');
        mascotRef.current?.wave(2000);
        setTimeout(res, 2200);
      }),
      blink: () => new Promise((res, rej) => {
        if (isStopping) return rej('Stopped');
        mascotRef.current?.blink();
        setTimeout(res, 600);
      })
    };

    try {
      const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
      const fn = new AsyncFunction('mascot', code);
      await fn(mascot);
    } catch (e) {
      if (e !== 'Stopped') {
        console.error('IDE Error:', e);
      }
    } finally {
      setIsRunning(false);
      setIsStopping(false);
      
      // Mission Success Check
      if (mission && !isMissionCompleted) {
        // Simple heuristic: check if required blocks exist in the workspace
        const xml = Blockly.Xml.workspaceToDom(workspace.current!);
        const xmlText = Blockly.Xml.domToText(xml);
        
        const allBlocksPresent = mission.requiredBlocks?.every(blockType => 
          xmlText.includes(`type="${blockType}"`)
        );

        if (allBlocksPresent) {
          completeMission(mission.id, mission.xpReward);
          unlockBadge('mission_complete');
          setShowSuccessModal(true);
        }
      }
    }
  };

  const handleNextMission = () => {
    const currentIndex = CODING_MISSIONS.findIndex(m => m.id === missionId);
    if (currentIndex < CODING_MISSIONS.length - 1) {
      const nextMission = CODING_MISSIONS[currentIndex + 1];
      setShowSuccessModal(false);
      navigate(`/coding/mission/${nextMission.id}`);
    } else {
      navigate('/coding');
    }
  };

  const stopCode = () => {
    setIsStopping(true);
    setIsRunning(false);
    // Cancel any pending speech
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <div className="kids-ide-container engineering-lab-wrapper" style={{ 
      margin: '2rem 0', 
      padding: isMobile ? '1rem' : '1.5rem', 
      borderRadius: '24px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'stretch' : 'center', 
        gap: '1rem',
        marginBottom: '1.5rem',
        padding: '0 0.5rem'
      }}>
        <div>
          <h3 className="lab-title" style={{ margin: 0, fontSize: isMobile ? '1.4rem' : '1.8rem' }}>KONE KIDS IDE</h3>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>Build the future, one block at a time!</p>
        </div>
        
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {isMobile && (
            <div style={{ 
              display: 'flex', 
              background: 'rgba(255,255,255,0.05)', 
              borderRadius: '12px', 
              padding: '4px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <button 
                onClick={() => setActiveTab('blocks')}
                style={{
                  background: activeTab === 'blocks' ? 'rgba(255,255,255,0.1)' : 'transparent',
                  border: 'none',
                  color: 'white',
                  padding: isMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: isMobile ? '0.75rem' : '0.8rem',
                  fontWeight: 'bold'
                }}
              >
                Blocks
              </button>
              <button 
                onClick={() => setActiveTab('code')}
                style={{
                  background: activeTab === 'code' ? 'rgba(255,255,255,0.1)' : 'transparent',
                  border: 'none',
                  color: 'white',
                  padding: isMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: isMobile ? '0.75rem' : '0.8rem',
                  fontWeight: 'bold'
                }}
              >
                Code
              </button>
            </div>
          )}

          <div style={{ 
            display: 'flex', 
            background: 'rgba(255,255,255,0.05)', 
            borderRadius: '12px', 
            padding: '4px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <button 
              onClick={() => setLanguage('javascript')}
              style={{
                background: language === 'javascript' ? 'var(--kids-orange)' : 'transparent',
                border: 'none',
                color: language === 'javascript' ? 'white' : '#cbd5e1',
                padding: isMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: isMobile ? '0.75rem' : '0.8rem',
                fontWeight: 'bold',
                transition: 'all 0.2s'
              }}
            >
              JS
            </button>
            <button 
              onClick={() => setLanguage('python')}
              style={{
                background: language === 'python' ? 'var(--kids-blue)' : 'transparent',
                border: 'none',
                color: language === 'python' ? 'white' : '#cbd5e1',
                padding: isMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: isMobile ? '0.75rem' : '0.8rem',
                fontWeight: 'bold',
                transition: 'all 0.2s'
              }}
            >
              PY
            </button>
          </div>

          {!isMobile && (
            <button 
              onClick={() => setShowCode(!showCode)}
              title={showCode ? "Hide Code Panel" : "Show Code Panel"}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#cbd5e1',
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)')}
            >
              {showCode ? '📂' : '📁'}
            </button>
          )}

          <div style={{ display: 'flex', gap: '4px', background: 'rgba(0,0,0,0.2)', padding: '4px', borderRadius: '12px' }}>
            <button 
              className={`kids-button ${isRunning ? '' : 'pulse-neon'}`} 
              onClick={runCode}
              disabled={isRunning}
              title="Run Code"
              style={{ 
                background: isRunning ? '#1e293b' : '#22c55e',
                boxShadow: isRunning ? 'none' : '0 4px 0 #16a34a',
                padding: isMobile ? '0.5rem' : '0.6rem 1.2rem',
                fontSize: isMobile ? '0.85rem' : '1rem',
                minHeight: isMobile ? '40px' : '44px',
                minWidth: isMobile ? '40px' : 'auto',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ display: 'block' }}>
                <path d="M8 5v14l11-7z" />
              </svg>
              {!isMobile && (isRunning ? 'RUNNING' : 'RUN')}
            </button>
            <button 
              className="kids-button" 
              onClick={stopCode}
              disabled={!isRunning}
              title="Stop Code"
              style={{ 
                background: isRunning ? '#ef4444' : '#1e293b',
                boxShadow: isRunning ? '0 4px 0 #b91c1c' : 'none',
                padding: isMobile ? '0.5rem' : '0.6rem 1.2rem',
                fontSize: isMobile ? '0.85rem' : '1rem',
                minHeight: isMobile ? '40px' : '44px',
                minWidth: isMobile ? '40px' : 'auto',
                borderRadius: '50px',
                color: isRunning ? 'white' : '#64748b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
                <rect x="6" y="6" width="12" height="12" />
              </svg>
              {!isMobile && 'STOP'}
            </button>
          </div>
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        gap: '1rem', 
        height: isMobile ? 'auto' : '600px', // Increased height slightly
        width: '100%'
      }}>
        <div style={{ 
          flex: isMobile ? 'none' : 2, 
          display: (isMobile && activeTab !== 'blocks') ? 'none' : 'flex', 
          flexDirection: 'column', 
          gap: '1rem',
          height: isMobile ? '450px' : '100%', // Guaranteed height on mobile
          width: '100%'
        }}>
          {/* Mission Briefing Panel */}
          {mission && (
            <div style={{
              background: 'rgba(14, 165, 233, 0.1)',
              border: '1px solid rgba(14, 165, 233, 0.3)',
              borderRadius: '16px',
              padding: '1rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <div style={{ fontSize: '2rem' }}>🎯</div>
              <div>
                <h4 style={{ margin: 0, color: 'var(--kids-blue)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Current Mission: {mission.name}</h4>
                <p style={{ margin: '0.2rem 0 0 0', color: 'white', fontSize: '1rem', fontWeight: 600 }}>{mission.objective}</p>
              </div>
              {isMissionCompleted && (
                <div style={{ marginLeft: 'auto', background: '#22c55e', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 800 }}>
                  COMPLETED
                </div>
              )}
            </div>
          )}

          <div 
            ref={blocklyDiv} 
            className="blockly-wrapper"
            style={{ 
              flex: 1,
              height: '100%',
              width: '100%', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              border: '1px solid rgba(255,255,255,0.1)',
              background: '#0b0e14',
              position: 'relative'
            }} 
          />
        </div>

        {/* Side Panel: Code Preview & Mascot */}
        <div style={{ 
          flex: (isMobile && activeTab === 'code') ? 1 : (isMobile ? 'none' : 1), 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem',
          minWidth: isMobile ? '100%' : '350px',
          height: isMobile ? 'auto' : '100%'
        }}>
          {/* Mascot Preview */}
          <div style={{ 
            background: '#151921', 
            borderRadius: '20px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            height: isMobile ? '220px' : '220px',
            position: 'relative',
            overflow: 'hidden',
            order: isMobile ? -1 : 0 // Mascot on top in mobile
          }}>
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'radial-gradient(circle at center, rgba(0, 242, 255, 0.1) 0%, transparent 70%)'
            }} />
            <div style={{ transform: 'scale(0.85)', position: 'relative', zIndex: 1 }}>
              <Mascot ref={mascotRef} />
            </div>
          </div>

          {/* Code Preview Panel */}
          {((showCode && !isMobile) || (isMobile && activeTab === 'code')) && (
            <div className="code-preview-panel" style={{ 
              flex: 1,
              background: '#1e1e1e', // Standard VS Code dark theme background
              borderRadius: '12px',
              border: '1px solid #333333',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              minHeight: isMobile ? '400px' : '0'
            }}>
              {/* IDE Top Bar (macOS dots + Tabs) */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                background: '#252526', // VS Code title bar color
                padding: '0 12px',
                borderBottom: '1px solid #333333',
                height: '40px'
              }}>
                <div style={{ display: 'flex', gap: '6px', paddingBottom: '14px', marginRight: '20px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                </div>
                
                {/* Active File Tab */}
                <div style={{
                  background: '#1e1e1e',
                  padding: '8px 16px',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#e2e8f0',
                  fontSize: '0.85rem',
                  fontFamily: 'sans-serif',
                  borderTop: '1px solid #333333',
                  borderRight: '1px solid #333333',
                  borderLeft: '1px solid #333333',
                  position: 'relative',
                  bottom: '-1px' // Cover the bottom border
                }}>
                  <span style={{ 
                    color: language === 'javascript' ? '#f7df1e' : '#3776ab',
                    fontWeight: 'bold',
                    fontSize: '1rem'
                  }}>
                    {language === 'javascript' ? 'JS' : 'PY'}
                  </span>
                  main.{language === 'javascript' ? 'js' : 'py'}
                </div>
              </div>

              {/* IDE Editor Area */}
              <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                {/* Line Numbers Gutter */}
                <div style={{
                  padding: '16px 8px 16px 16px',
                  background: '#1e1e1e',
                  color: '#858585',
                  fontFamily: "'Fira Code', 'Courier New', monospace",
                  fontSize: '0.85rem',
                  lineHeight: '1.6',
                  textAlign: 'right',
                  userSelect: 'none',
                  minWidth: '2.5rem'
                }}>
                  {(() => {
                    const fullCode = language === 'javascript' 
                      ? `async function run() {\n${generatedCode.split('\n').filter(l => l.trim()).map(l => '  ' + l).join('\n')}\n}`
                      : `import time\n\ndef run():\n${generatedCode ? generatedCode.split('\n').filter(l => l.trim()).map(l => '    ' + l).join('\n') : '    pass'}`;
                    
                    return fullCode.split('\n').map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ));
                  })()}
                </div>

                {/* Code Content */}
                <pre style={{ 
                  margin: 0, 
                  padding: '16px 16px 16px 8px', 
                  whiteSpace: 'pre-wrap', 
                  wordBreak: 'normal', /* Fixed from break-all which ruins indentation */
                  overflowWrap: 'anywhere',
                  lineHeight: '1.6', 
                  fontFamily: "'Fira Code', 'Courier New', monospace",
                  fontSize: '0.85rem',
                  flex: 1,
                  overflowY: 'auto'
                }}>
                  {(() => {
                    const fullCode = language === 'javascript' 
                      ? `async function run() {\n${generatedCode.split('\n').filter(l => l.trim()).map(l => '  ' + l).join('\n')}\n}`
                      : `import time\n\ndef run():\n${generatedCode ? generatedCode.split('\n').filter(l => l.trim()).map(l => '    ' + l).join('\n') : '    pass'}`;
                    
                    return fullCode.split('\n').map((line, i) => {
                      // Custom Syntax Highlighter matching the reference design exactly
                      const tokens = line.split(/(\bfunction\b|\bconst\b|\bif\b|\belse\b|\basync\b|\bawait\b|\bimport\b|\bdef\b|\btime\b|\bpass\b|=>|\b\d+\b|\b\w+(?=\()|\b\w+\b|[(){};.])/g).filter(Boolean);
                      
                      return (
                        <div key={i} style={{ display: 'flex', width: '100%' }}>
                          <span style={{ color: '#f8f8f2', flex: 1 }}>
                            {tokens.map((part, idx) => {
                              // Keywords (Pink)
                              if (/^(function|const|if|else|async|await|import|def|pass)$/.test(part)) return <span key={idx} style={{color: '#f92672'}}>{part}</span>;
                              // Methods/Functions (Green) - matches word before '('
                              if (/^(run|onStart|setSpeed|loop|detectObstacle|stop|moveForward|speak|wave|blink)$/.test(part)) return <span key={idx} style={{color: '#a6e22e'}}>{part}</span>;
                              // Numbers (Purple)
                              if (/^\d+$/.test(part)) return <span key={idx} style={{color: '#ae81ff'}}>{part}</span>;
                              // Arrows (Cyan)
                              if (part === '=>') return <span key={idx} style={{color: '#66d9ef'}}>{part}</span>;
                              // Special Library (Green)
                              if (part === 'time') return <span key={idx} style={{color: '#a6e22e'}}>{part}</span>;
                              // Strings (Yellowish)
                              if (part.includes('"') || part.includes("'")) return <span key={idx} style={{color: '#e6db74'}}>{part}</span>;
                              
                              // Preserve spaces explicitly to ensure perfect indentation
                              if (part.trim() === '') {
                                return <span key={idx} style={{ whiteSpace: 'pre' }}>{part}</span>;
                              }
                              
                              // Default Text (White)
                              return <span key={idx}>{part}</span>;
                            })}
                          </span>
                        </div>
                      );
                    });
                  })()}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Success Modal Overlay */}
      {showSuccessModal && mission && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          animation: 'fadeIn 0.3s ease-out',
          borderRadius: '24px'
        }}>
          <div style={{
            background: '#1e293b',
            padding: '3rem',
            borderRadius: '32px',
            textAlign: 'center',
            maxWidth: '450px',
            width: '90%',
            border: '2px solid var(--kids-blue)',
            boxShadow: '0 0 50px rgba(14, 165, 233, 0.3)',
            animation: 'modalPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🏆</div>
            <h2 className="lab-title" style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>MISSION COMPLETE!</h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.2rem', marginBottom: '2rem' }}>
              Awesome work, Engineer! You earned <strong style={{ color: 'var(--kids-blue)' }}>{mission.xpReward} XP</strong>.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button 
                className="kids-button pulse-neon" 
                onClick={handleNextMission}
                style={{ width: '100%', fontSize: '1.2rem', padding: '1rem' }}
              >
                NEXT MISSION 🚀
              </button>
              <button 
                className="kids-button" 
                onClick={() => navigate('/coding')}
                style={{ 
                  width: '100%', 
                  background: 'transparent', 
                  boxShadow: 'none', 
                  border: '1px solid rgba(255,255,255,0.2)',
                  fontSize: '1rem' 
                }}
              >
                BACK TO MAP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KidsIDE;
