import React, { useEffect, useRef, useState } from 'react';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { pythonGenerator } from 'blockly/python';
import Mascot, { MascotHandle } from './Mascot';
import RoboticsSimulator, { RoboticsHandle } from './RoboticsSimulator';
import GameSimulator, { GameHandle } from './GameSimulator';
import MissionBriefing from './MissionBriefing';
import OnboardingTour, { ONBOARDING_STEPS } from './OnboardingTour';
import { useGamification } from '../context/GamificationContext';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { CODING_MISSIONS } from '../data/missions';
import { Play, Square, FileCode, Blocks, Eye, EyeOff } from 'lucide-react';
import MascotShop from './MascotShop';

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
  const gameRef = useRef<GameHandle>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isStopping, setIsStopping] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [onboardingStep, setOnboardingStep] = useState<number>(-1);
  const [activeTab, setActiveTab] = useState<'blocks' | 'code'>('blocks');
  const [generatedCode, setGeneratedCode] = useState('');
  const [showCode, setShowCode] = useState(true);
  const [language, setLanguage] = useState<'javascript' | 'python'>('javascript');
  const [hasStartedMission, setHasStartedMission] = useState(false);
  const [blockError, setBlockError] = useState<string[] | null>(null);
  const [hintIndex, setHintIndex] = useState(0);
  
  const { missionId } = useParams<{ missionId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { unlockBadge, completeMission, completedMissions, hasCompletedOnboarding, completeOnboarding } = useGamification();
  const mission = CODING_MISSIONS.find(m => m.id === missionId);
  const isMissionCompleted = completedMissions.includes(missionId || '');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showShop, setShowShop] = useState(false);

  // Derive the hub from the URL — values are hardcoded literals, never from location, preventing open redirect (CWE-601)
  const _rawSegment = location.pathname.split('/')[1];
  const hubPath: string =
    _rawSegment === 'robotics' ? '/robotics' :
    _rawSegment === 'ai'       ? '/ai'       :
                                 '/coding';

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

    if (!Blockly.Blocks['mascot_wait']) {
      Blockly.Blocks['mascot_wait'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("🕐 Wait")
              .appendField(new Blockly.FieldNumber(1, 0.1, 30), "SECS")
              .appendField("seconds");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(20);
        }
      };
      javascriptGenerator.forBlock['mascot_wait'] = (block: any) => `await new Promise(res => setTimeout(res, ${block.getFieldValue('SECS')} * 1000));\n`;
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

    // --- Game Dev Blocks ---
    if (!Blockly.Blocks['game_physics']) {
      Blockly.Blocks['game_physics'] = {
        init: function() {
          this.appendDummyInput().appendField("🕹️ Enable Physics Scene");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(200);
        }
      };
      javascriptGenerator.forBlock['game_physics'] = () => `game.reset();\n`;
    }

    if (!Blockly.Blocks['game_gravity']) {
      Blockly.Blocks['game_gravity'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("🌍 Set Gravity to")
              .appendField(new Blockly.FieldNumber(9.8, 0, 50), "G");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(200);
        }
      };
      javascriptGenerator.forBlock['game_gravity'] = (block: any) => `game.setGravity(${block.getFieldValue('G')});\n`;
    }

    if (!Blockly.Blocks['character_jump']) {
      Blockly.Blocks['character_jump'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("🚀 Jump with force")
              .appendField(new Blockly.FieldNumber(500, 100, 2000), "FORCE");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(200);
        }
      };
      javascriptGenerator.forBlock['character_jump'] = (block: any) => `game.jump(${block.getFieldValue('FORCE')});\n`;
    }

    if (!Blockly.Blocks['spawn_stars']) {
      Blockly.Blocks['spawn_stars'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("✨ Spawn")
              .appendField(new Blockly.FieldNumber(5, 1, 50), "COUNT")
              .appendField("Stars");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(200);
        }
      };
      javascriptGenerator.forBlock['spawn_stars'] = (block: any) => `game.spawnStars(${block.getFieldValue('COUNT')});\n`;
    }

    if (!Blockly.Blocks['on_key_press']) {
      Blockly.Blocks['on_key_press'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("⌨️ When")
              .appendField(new Blockly.FieldDropdown([["Space", " "], ["Up Arrow", "ArrowUp"], ["Any Key", "any"]]), "KEY")
              .appendField("is pressed");
          this.appendStatementInput("DO").appendField("do");
          this.setColour(200);
          this.setTooltip("Run code when a key is pressed");
        }
      };
      javascriptGenerator.forBlock['on_key_press'] = (block: any) => {
        const branch = javascriptGenerator.statementToCode(block, 'DO');
        return `game.onKeyPress("${block.getFieldValue('KEY')}", async () => {\n${branch}});\n`;
      };
    }

    if (!Blockly.Blocks['update_score']) {
      Blockly.Blocks['update_score'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("🏆 Add")
              .appendField(new Blockly.FieldNumber(10, 1, 1000), "POINTS")
              .appendField("to Score");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(200);
        }
      };
      javascriptGenerator.forBlock['update_score'] = (block: any) => `game.updateScore(${block.getFieldValue('POINTS')});\n`;
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
            { kind: 'block', type: 'mascot_wait' },
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
        {
          kind: 'category',
          name: '🎮 Game Dev',
          colour: '#f472b6',
          contents: [
            { kind: 'block', type: 'game_physics' },
            { kind: 'block', type: 'game_gravity' },
            { kind: 'block', type: 'character_jump' },
            { kind: 'block', type: 'on_key_press' },
            { kind: 'block', type: 'spawn_stars' },
            { kind: 'block', type: 'update_score' },
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
        renderer: 'zelos',
        zoom: {
          controls: true,
          wheel: true,
          startScale: isMobile ? 0.8 : 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2
        },
        move: {
          scrollbars: {
            horizontal: true,
            vertical: true
          },
          drag: true,
          wheel: true
        }
      });
      workspace.current = ws;

      const handleResize = () => {
        if (ws) Blockly.svgResize(ws);
      };
      window.addEventListener('resize', handleResize);

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

      return () => {
        window.removeEventListener('resize', handleResize);
        ws.dispose();
        workspace.current = null;
      };
    }
  }, [onboardingStep, language, isMobile]);

  const runCode = async () => {
    if (!workspace.current || isRunning) return;

    // ── 1. Empty workspace guard ──────────────────────────────────────────────
    const allBlocks = workspace.current.getAllBlocks(true);
    if (allBlocks.length === 0) {
      setBlockError(['Your workspace is empty! Drag some blocks in first. 👆']);
      setTimeout(() => setBlockError(null), 4000);
      mascotRef.current?.speak("Your workspace is empty! Drag some blocks in first.");
      return;
    }

    // ── 2. Required block validation ─────────────────────────────────────────
    if (mission?.requiredBlocks && mission.requiredBlocks.length > 0) {
      const presentTypes = new Set(allBlocks.map((b: any) => b.type));
      const missing = mission.requiredBlocks.filter(req => !presentTypes.has(req));
      if (missing.length > 0) {
        const friendlyNames: Record<string, string> = {
          mascot_speak: '🗣️ Say block',
          mascot_wave: '👋 Wave Hand block',
          mascot_blink: '👁️ Blink Eyes block',
          mascot_wait: '🕐 Wait block',
          controls_repeat_ext: '🔄 Repeat block',
          variables_set: '📦 Set Variable block',
          math_number: '🔢 Number block',
          controls_if: '🧠 If block',
          robot_move: '🚜 Move block',
          robot_turn: '🔄 Turn block',
          robot_stop: '🛑 Stop Robot block',
          robot_distance: '📏 Distance Sensor block',
        };
        const missingLabels = missing.map(m => friendlyNames[m] || m);
        setBlockError(missingLabels);
        setTimeout(() => setBlockError(null), 5000);
        mascotRef.current?.speak(`You're missing the ${missingLabels[0]}! Check the toolbox.`);
        return;
      }
    }

    // ── 3. Minimum block count check ─────────────────────────────────────────
    const minBlocks = mission?.minBlocks ?? 1;
    if (allBlocks.length < minBlocks) {
      setBlockError([`You need at least ${minBlocks} blocks for this mission. Keep building!`]);
      setTimeout(() => setBlockError(null), 4000);
      return;
    }

    setIsRunning(true);
    setIsStopping(false);
    setBlockError(null);

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

    const game = {
      reset: () => gameRef.current?.reset(),
      setGravity: (g: number) => gameRef.current?.setGravity(g),
      jump: (force: number) => gameRef.current?.jump(force),
      spawnStars: (count: number) => gameRef.current?.spawnStars(count),
      updateScore: (points: number) => gameRef.current?.updateScore(points),
      onKeyPress: (key: string, callback: () => void) => gameRef.current?.onKeyPress(key, callback),
    };

    let ranSuccessfully = false;
    try {
      const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
      const fn = new AsyncFunction('mascot', 'robot', 'game', code);
      await fn(mascot, robot, game);
      ranSuccessfully = true;
    } catch (e) {
      console.error(e);
    } finally {
      setIsRunning(false);
      // Only complete mission if code ran without errors and validation passed
      if (ranSuccessfully && mission && !isMissionCompleted) {
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
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: isMobile ? '1rem' : '1.5rem',
        background: 'rgba(255,255,255,0.02)',
        padding: isMobile ? '0.5rem 1rem' : '0',
        margin: isMobile ? '-1rem -1rem 1rem -1rem' : '0 0 1.5rem 0',
        borderBottom: isMobile ? '1px solid rgba(255,255,255,0.05)' : 'none'
      }}>
        <div>
          <h3 className="lab-title" style={{ margin: 0, fontSize: isMobile ? '1.1rem' : '1.8rem' }}>KONE KIDS IDE</h3>
          {!isMobile && <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Build the future, one block at a time!</p>}
        </div>
        
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '4px', gap: '4px' }}>
            <button 
              onClick={() => setLanguage('javascript')} 
              style={{ 
                background: language === 'javascript' ? 'var(--kids-orange)' : 'transparent', 
                border: 'none', 
                color: 'white', 
                padding: isMobile ? '0.3rem 0.6rem' : '0.5rem 1rem', 
                borderRadius: '10px', 
                cursor: 'pointer', 
                fontSize: isMobile ? '0.7rem' : '0.85rem', 
                fontWeight: 800,
                boxShadow: language === 'javascript' ? '0 4px 0 #9a3412' : 'none',
                transition: 'all 0.2s',
                transform: language === 'javascript' ? 'translateY(2px)' : 'none'
              }}
            >JS</button>
            <button 
              onClick={() => setLanguage('python')} 
              style={{ 
                background: language === 'python' ? 'var(--kids-blue)' : 'transparent', 
                border: 'none', 
                color: 'white', 
                padding: isMobile ? '0.3rem 0.6rem' : '0.5rem 1rem', 
                borderRadius: '10px', 
                cursor: 'pointer', 
                fontSize: isMobile ? '0.7rem' : '0.85rem', 
                fontWeight: 800,
                boxShadow: language === 'python' ? '0 4px 0 #0369a1' : 'none',
                transition: 'all 0.2s',
                transform: language === 'python' ? 'translateY(2px)' : 'none'
              }}
            >PY</button>
          </div>
          
          <button 
            onClick={() => setShowCode(!showCode)}
            className="kids-button"
            style={{ 
              background: 'var(--kids-surface)', 
              border: '2px solid var(--kids-border)', 
              color: 'white', 
              padding: '0.4rem', 
              borderRadius: '10px', 
              cursor: 'pointer',
              width: isMobile ? '32px' : '40px',
              height: isMobile ? '32px' : '40px',
              boxShadow: isMobile ? '0 3px 0 var(--kids-border)' : '0 5px 0 var(--kids-border)'
            }}
          >
            {showCode ? <EyeOff size={isMobile ? 16 : 20} /> : <Eye size={isMobile ? 16 : 20} />}
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', height: isMobile ? 'auto' : '600px', flexDirection: isMobile ? 'column' : 'row' }}>
        {/* Workspace */}
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {mission && (
            <div style={{ 
              background: 'rgba(14, 165, 233, 0.08)', 
              border: '1px solid rgba(14, 165, 233, 0.3)', 
              borderRadius: '16px', 
              padding: isMobile ? '0.75rem' : '1rem' 
            }}>
              <div style={{ display: 'flex', gap: isMobile ? '0.75rem' : '1rem', alignItems: 'flex-start', marginBottom: (mission.steps && !isMobile) ? '0.75rem' : '0' }}>
                <div style={{ fontSize: isMobile ? '1.4rem' : '2rem', flexShrink: 0 }}>🎯</div>
                <div>
                  <h4 style={{ margin: 0, color: 'var(--kids-blue)', fontSize: isMobile ? '0.65rem' : '0.75rem', letterSpacing: '1px' }}>MISSION: {mission.name}</h4>
                  <p style={{ margin: '0.15rem 0 0', color: 'white', fontWeight: 600, fontSize: isMobile ? '0.85rem' : '0.95rem' }}>{mission.objective}</p>
                </div>
              </div>
              {mission.steps && !isMobile && (
                <div style={{ borderTop: '1px solid rgba(14, 165, 233, 0.2)', paddingTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {mission.steps.map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>
                      <span style={{ background: 'rgba(14,165,233,0.3)', color: 'var(--kids-blue)', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 800, flexShrink: 0 }}>{i+1}</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Block validation error banner */}
          {blockError && (
            <div style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.5)', borderRadius: '12px', padding: '0.6rem 0.8rem', display: 'flex', gap: '0.6rem', alignItems: 'flex-start', animation: 'slideDown 0.3s ease' }}>
              <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>⚠️</span>
              <div>
                <p style={{ margin: 0, color: '#fca5a5', fontWeight: 700, fontSize: isMobile ? '0.75rem' : '0.85rem' }}>Missing required blocks:</p>
                <ul style={{ margin: '0.2rem 0 0', paddingLeft: '1.2rem', color: '#fca5a5', fontSize: isMobile ? '0.7rem' : '0.8rem' }}>
                  {blockError.map((err, i) => <li key={i}>{err}</li>)}
                </ul>
              </div>
            </div>
          )}

          {/* Hint button */}
          {mission?.hints && mission.hints.length > 0 && !isMissionCompleted && (
            <button
              onClick={() => { mascotRef.current?.speak(mission.hints[hintIndex % mission.hints.length]); setHintIndex(h => h + 1); }}
              style={{ alignSelf: 'flex-start', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.4)', color: '#fbbf24', padding: '0.35rem 0.8rem', borderRadius: '10px', cursor: 'pointer', fontSize: isMobile ? '0.75rem' : '0.82rem', fontWeight: 700 }}
            >
              💡 Hint ({hintIndex % (mission.hints.length) === 0 && hintIndex > 0 ? 'all used!' : `${mission.hints.length - (hintIndex % mission.hints.length)} left`})
            </button>
          )}
          <div ref={blocklyDiv} style={{ 
            height: isMobile ? '450px' : '100%', 
            minHeight: isMobile ? '400px' : '500px',
            borderRadius: '20px', 
            overflow: 'hidden', 
            border: '1px solid rgba(255,255,255,0.1)', 
            background: '#0b0e14' 
          }} />
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
            {/* Mascot Shop button */}
            <button 
              onClick={() => setShowShop(true)}
              className="kids-button"
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                zIndex: 30,
                padding: '0.6rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'var(--kids-orange)',
                boxShadow: '0 3px 0 #9a3412',
                fontSize: isMobile ? '0.75rem' : '0.85rem',
                whiteSpace: 'nowrap',
                minHeight: isMobile ? '32px' : '40px'
              }}
            >
              🛒 Shop
            </button>
            {mission?.pathway === 'Robotics (AI 4 Kids)' ? (
              <RoboticsSimulator ref={robotRef} />
            ) : mission?.pathway === 'Game Dev' ? (
              <GameSimulator ref={gameRef} />
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
      <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', zIndex: 50, display: 'flex', gap: '0.6rem' }}>
        {!isRunning ? (
          <button id="run-code-btn" className="kids-button" style={{ padding: '0.45rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem', minHeight: '44px', boxShadow: '0 8px 0 #9a3412' }} onClick={runCode}>
            <Play size={18} fill="currentColor" />
            <span>Run Code</span>
          </button>
        ) : (
          <button className="kids-button" style={{ padding: '0.45rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem', background: '#ef4444', boxShadow: '0 8px 0 #991b1b', minHeight: '44px' }} onClick={stopCode}>
            <Square size={16} fill="currentColor" />
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <button className="kids-button pulse-neon" onClick={handleNextMission} style={{ width: '100%', fontSize: '1.05rem', padding: '0.85rem', boxShadow: '0 8px 0 #9a3412' }}> NEXT MISSION 🚀 </button>
              <button className="kids-button" onClick={() => navigate(hubPath)} style={{ width: '100%', background: 'var(--kids-surface)', border: '2px solid var(--kids-border)', fontSize: '0.95rem', color: 'var(--kids-text)', boxShadow: '0 6px 0 var(--kids-border)' }}> BACK TO MAP </button>
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
      {showShop && <MascotShop onClose={() => setShowShop(false)} />}
    </div>
  );
};

export default KidsIDE;
