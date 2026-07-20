import React, { useEffect, useRef, useState } from 'react';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { pythonGenerator } from 'blockly/python';
import Mascot, { MascotHandle } from './Mascot';
import RoboticsSimulator, { RoboticsHandle } from './RoboticsSimulator';
import GameSimulator, { GameHandle } from './GameSimulator';
import ElectronicsSimulator, { ElectronicsHandle } from './ElectronicsSimulator';
import AISimulator, { AIHandle } from './AISimulator';
import MissionBriefing from './MissionBriefing';
import { getTranslation } from '../utils/translations';
import OnboardingTour, { ONBOARDING_STEPS } from './OnboardingTour';
import { useGamification } from '../context/GamificationContext';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CODING_MISSIONS } from '../data/missions';
import { Play, Square, FileCode, Blocks, Eye, EyeOff, Volume2, VolumeX, Music } from 'lucide-react';
import MascotShop from './MascotShop';
import { sounds } from '../utils/sounds';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Share } from '@capacitor/share';
import { useTheme } from '../context/ThemeContext';

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

// Define a crisp light theme for Blockly
const KoneLight = Blockly.Theme.defineTheme('kone_light', {
  name: 'kone_light',
  base: Blockly.Themes.Classic,
  componentStyles: {
    workspaceBackgroundColour: '#ffffff',
    toolboxBackgroundColour: '#f8fafc',
    toolboxForegroundColour: '#0f172a',
    flyoutBackgroundColour: '#f1f5f9',
    flyoutForegroundColour: '#0f172a',
    insertionMarkerColour: '#f97316',
    insertionMarkerOpacity: 0.3,
    scrollbarColour: '#cbd5e1',
    scrollbarOpacity: 0.5,
    cursorColour: '#0ea5e9',
  },
  blockStyles: {
    logic_blocks: { colourPrimary: '#9333ea', colourSecondary: '#7e22ce', colourTertiary: '#6b21a8' },
    loop_blocks: { colourPrimary: '#0284c7', colourSecondary: '#0369a1', colourTertiary: '#075985' },
    math_blocks: { colourPrimary: '#059669', colourSecondary: '#047857', colourTertiary: '#065f46' },
    procedure_blocks: { colourPrimary: '#db2777', colourSecondary: '#be185d', colourTertiary: '#9d174d' },
    variable_blocks: { colourPrimary: '#ea580c', colourSecondary: '#c2410c', colourTertiary: '#9a3412' },
  },
  categoryStyles: {
    logic_category: { colour: '#9333ea' },
    loop_category: { colour: '#0284c7' },
    math_category: { colour: '#059669' },
    procedure_category: { colour: '#db2777' },
    variable_category: { colour: '#ea580c' },
  }
});

interface StarterProject {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  badge: string;
  xml: string;
}

const STARTER_PROJECTS: StarterProject[] = [
  {
    id: 'mascot-greeting',
    name: 'Talking Mascot Greeting',
    category: 'Mascot & TTS',
    icon: '🤖',
    description: 'Make the Mascot greet you with speech, a wave, and eye blinks!',
    badge: 'Easy',
    xml: `<xml xmlns="https://developers.google.com/blockly/xml"><block type="mascot_wave" x="30" y="30"><next><block type="tts_speak"><field name="TEXT">Hello! Welcome to Kone Kids Academy!</field><next><block type="mascot_blink"></block></next></block></next></block></xml>`
  },
  {
    id: 'musical-melody',
    name: 'Blockly Piano Melody',
    category: 'Sound & Music',
    icon: '🎵',
    description: 'Play a musical chord progression (Do, Re, Mi, High Do) with victory cheers!',
    badge: 'Fun',
    xml: `<xml xmlns="https://developers.google.com/blockly/xml"><block type="sound_play_note" x="30" y="30"><field name="NOTE">261.63</field><field name="DURATION">0.5</field><next><block type="sound_play_note"><field name="NOTE">293.66</field><field name="DURATION">0.5</field><next><block type="sound_play_note"><field name="NOTE">329.63</field><field name="DURATION">0.5</field><next><block type="sound_play_note"><field name="NOTE">523.25</field><field name="DURATION">0.8</field><next><block type="sound_play_effect"><field name="EFFECT">cheer</field></block></next></block></next></block></next></block></next></block></xml>`
  },
  {
    id: 'robot-square',
    name: 'Robotics Square Patrol',
    category: 'Robotics',
    icon: '🏎️',
    description: 'Program the rover to move forward and turn in a square path 4 times!',
    badge: 'Rover',
    xml: `<xml xmlns="https://developers.google.com/blockly/xml"><block type="controls_repeat_ext" x="30" y="30"><value name="TIMES"><shadow type="math_number"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="robot_move"><field name="DIR">forward</field><field name="SPEED">80</field><next><block type="robot_turn"><field name="DIR">left</field><field name="ANGLE">90</field></block></next></block></statement></block></xml>`
  },
  {
    id: 'kitten-translator',
    name: 'Kitten Voice Translator',
    category: 'Text-to-Speech',
    icon: '🐱',
    description: 'Switch the speech engine to Kitten voice mode and translate words into meows!',
    badge: 'Cool',
    xml: `<xml xmlns="https://developers.google.com/blockly/xml"><block type="tts_set_voice" x="30" y="30"><field name="VOICE">kitten</field><next><block type="tts_speak"><field name="TEXT">Hello there little friend! I love coding!</field><next><block type="sound_play_effect"><field name="EFFECT">coin</field></block></next></block></next></block></xml>`
  }
];

interface SearchableBlock {
  type: string;
  name: string;
  category: string;
  color: string;
  keywords: string;
}

const SEARCHABLE_BLOCKS: SearchableBlock[] = [
  { type: 'mascot_speak', name: '🗣️ Say Text', category: 'Mascot', color: '#0ea5e9', keywords: 'speak say talk word text mascot message' },
  { type: 'mascot_wave', name: '👋 Wave Hand', category: 'Mascot', color: '#0ea5e9', keywords: 'wave hand mascot greet hello gesture' },
  { type: 'mascot_blink', name: '👁️ Blink Eyes', category: 'Mascot', color: '#0ea5e9', keywords: 'blink eye mascot face wink' },
  { type: 'mascot_wait', name: '🕐 Wait', category: 'Mascot', color: '#0ea5e9', keywords: 'wait delay sleep pause time second' },
  { type: 'tts_speak', name: '🗣️ Speak Speech', category: 'Text to Speech', color: '#8b5cf6', keywords: 'speech voice talk speak tts audio accent' },
  { type: 'tts_set_voice', name: '🗣️ Set Voice', category: 'Text to Speech', color: '#8b5cf6', keywords: 'voice tone pitch alto giant kitten squeak' },
  { type: 'tts_set_language', name: '🗣️ Set Language', category: 'Text to Speech', color: '#8b5cf6', keywords: 'language accent english french spanish portuguese' },
  { type: 'sound_play_note', name: '🎵 Play Musical Note', category: 'Sound & Music', color: '#d946ef', keywords: 'note music pitch piano song sound tone tune' },
  { type: 'sound_play_effect', name: '🔊 Play Sound Effect', category: 'Sound & Music', color: '#d946ef', keywords: 'sound effect cheer coin laser pop win explosion audio' },
  { type: 'sound_rest', name: '🔕 Rest', category: 'Sound & Music', color: '#d946ef', keywords: 'rest pause silent quiet music rhythm' },
  { type: 'robot_move', name: '🚜 Move Rover', category: 'Robotics', color: '#10b981', keywords: 'robot move forward backward drive rover motor' },
  { type: 'robot_turn', name: '🔄 Turn Rover', category: 'Robotics', color: '#10b981', keywords: 'turn left right rotate angle degree rover' },
  { type: 'robot_stop', name: '🛑 Stop Rover', category: 'Robotics', color: '#10b981', keywords: 'stop halt brake freeze rover' },
  { type: 'robot_distance', name: '📏 Distance Sensor', category: 'Robotics', color: '#10b981', keywords: 'distance sensor ultrasonic range obstacle cm' },
  { type: 'controls_repeat_ext', name: '🔄 Repeat Loop', category: 'Loops', color: '#0ea5e9', keywords: 'repeat loop for count times again iterate' },
  { type: 'controls_if', name: '🧠 If Condition', category: 'Logic', color: '#a855f7', keywords: 'if condition then logic decide check else' },
  { type: 'variables_set', name: '📦 Set Variable', category: 'Variables', color: '#f97316', keywords: 'variable set store value score count name' }
];

const KidsIDE: React.FC = () => {
  const { t, i18n } = useTranslation();
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const workspace = useRef<Blockly.WorkspaceSvg | null>(null);
  const mascotRef = useRef<MascotHandle>(null);
  const robotRef = useRef<RoboticsHandle>(null);
  const gameRef = useRef<GameHandle>(null);
  const electronicsRef = useRef<ElectronicsHandle>(null);
  const aiRef = useRef<AIHandle>(null);
  const isRunningRef = useRef(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isStopping, setIsStopping] = useState(false);
  const [isSlowMo, setIsSlowMo] = useState(false);
  const isSlowMoRef = useRef(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [onboardingStep, setOnboardingStep] = useState<number>(-1);
  const [activeTab, setActiveTab] = useState<'blocks' | 'code'>('blocks');
  const [activeMobileTab, setActiveMobileTab] = useState<'workspace' | 'simulator' | 'code'>('workspace');
  const [generatedCode, setGeneratedCode] = useState('');
  const [showCode, setShowCode] = useState(true);
  const [language, setLanguage] = useState<'javascript' | 'python'>('javascript');
  const [hasStartedMission, setHasStartedMission] = useState(false);
  const [blockError, setBlockError] = useState<string[] | null>(null);
  const [hintIndex, setHintIndex] = useState(0);
  const [showTemplatesModal, setShowTemplatesModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [projectName, setProjectName] = useState('My Kone Project 🚀');
  const [autoSaveStatus, setAutoSaveStatus] = useState<'saved' | 'saving'>('saved');
  const [isArenaFullscreen, setIsArenaFullscreen] = useState(false);
  const [blockCount, setBlockCount] = useState(0);
  const [lineCount, setLineCount] = useState(0);

  let currentTheme = 'light';
  let toggleThemeHandler = () => {};
  try {
    const themeCtx = useTheme();
    currentTheme = themeCtx.theme;
    toggleThemeHandler = themeCtx.toggleTheme;
  } catch (e) {
    currentTheme = 'light';
  }
  const isDark = currentTheme === 'dark';
  
  const { missionId } = useParams<{ missionId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { unlockBadge, completeMission, completedMissions, hasCompletedOnboarding, completeOnboarding, dialect, setDialect } = useGamification();
  const mission = CODING_MISSIONS.find(m => m.id === missionId);
  const isMissionCompleted = completedMissions.includes(missionId || '');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showShop, setShowShop] = useState(false);

  // Web Serial API states
  const [serialPort, setSerialPort] = useState<any | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Audio control state
  const [muted, setMuted] = useState(sounds.getMuted());
  const [musicOn, setMusicOn] = useState(sounds.getMusicOn());

  const handleToggleMute = () => {
    const isMuted = sounds.toggleMute();
    setMuted(isMuted);
    sounds.playClick();
  };

  const handleToggleMusic = () => {
    const isMusicOn = sounds.toggleMusic();
    setMusicOn(isMusicOn);
    sounds.playClick();
  };

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
    if (activeMobileTab === 'workspace' && workspace.current) {
      setTimeout(() => {
        if (workspace.current) {
          Blockly.svgResize(workspace.current);
        }
      }, 50);
    }
  }, [activeMobileTab]);

  useEffect(() => {
    // Save current blocks if workspace exists to prevent code loss
    let savedBlocksXml: string | null = null;
    if (workspace.current) {
      try {
        const xmlDom = Blockly.Xml.workspaceToDom(workspace.current);
        savedBlocksXml = Blockly.Xml.domToText(xmlDom);
      } catch (err) {
        console.error('Error serializing workspace:', err);
      }
    }

    // Discard old workspace
    if (workspace.current) {
      workspace.current.dispose();
      workspace.current = null;
    }
    if (blocklyDiv.current) {
      blocklyDiv.current.innerHTML = '';
    }

    // --- Block Definitions ---
    // We register/redefine the blocks dynamically so that their display text updates to the active language
    Blockly.Blocks['mascot_speak'] = {
      init: function() {
        this.appendDummyInput().appendField(t('blocks.speak', '🗣️ Say')).appendField(new Blockly.FieldTextInput("Hello!"), "TEXT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
      }
    };
    javascriptGenerator.forBlock['mascot_speak'] = (block: any) => `await mascot.speak("${block.getFieldValue('TEXT')}");\n`;
    pythonGenerator.forBlock['mascot_speak'] = (block: any) => `mascot.speak("${block.getFieldValue('TEXT')}")\n`;

    Blockly.Blocks['mascot_wait'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.wait_1', '🕐 Wait'))
            .appendField(new Blockly.FieldNumber(1, 0.1, 30), "SECS")
            .appendField(t('blocks.wait_2', 'seconds'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
      }
    };
    javascriptGenerator.forBlock['mascot_wait'] = (block: any) => `await new Promise(res => setTimeout(res, ${block.getFieldValue('SECS')} * 1000));\n`;
    pythonGenerator.forBlock['mascot_wait'] = (block: any) => `time.sleep(${block.getFieldValue('SECS')})\n`;

    Blockly.Blocks['mascot_wave'] = {
      init: function() {
        this.appendDummyInput().appendField(t('blocks.wave', '👋 Wave Hand'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
      }
    };
    javascriptGenerator.forBlock['mascot_wave'] = () => `await mascot.wave();\n`;
    pythonGenerator.forBlock['mascot_wave'] = () => `mascot.wave()\n`;

    Blockly.Blocks['mascot_blink'] = {
      init: function() {
        this.appendDummyInput().appendField(t('blocks.blink', '👁️ Blink Eyes'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
      }
    };
    javascriptGenerator.forBlock['mascot_blink'] = () => `await mascot.blink();\n`;
    pythonGenerator.forBlock['mascot_blink'] = () => `mascot.blink()\n`;

    // --- Text-to-Speech Blocks ---
    Blockly.Blocks['tts_speak'] = {
      init: function() {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField(t('blocks.tts_speak', '🗣️ Speak'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#8b5cf6');
      }
    };
    javascriptGenerator.forBlock['tts_speak'] = (block: any) => {
      const textVal = javascriptGenerator.valueToCode(block, 'TEXT', (javascriptGenerator as any).ORDER_ATOMIC) || "''";
      return `await tts.speak(${textVal});\n`;
    };
    pythonGenerator.forBlock['tts_speak'] = (block: any) => {
      const textVal = pythonGenerator.valueToCode(block, 'TEXT', (pythonGenerator as any).ORDER_ATOMIC) || "''";
      return `tts.speak(${textVal})\n`;
    };

    Blockly.Blocks['tts_set_voice'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.tts_set_voice', '🗣️ Set Voice to'))
            .appendField(new Blockly.FieldDropdown([
              ["Alto 👩", "alto"],
              ["Baritone 👨", "baritone"],
              ["Squeak 🐿️", "squeak"],
              ["Giant 👹", "giant"],
              ["Kitten 🐱", "kitten"]
            ]), "VOICE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#8b5cf6');
      }
    };
    javascriptGenerator.forBlock['tts_set_voice'] = (block: any) => {
      return `tts.setVoice("${block.getFieldValue('VOICE')}");\n`;
    };
    pythonGenerator.forBlock['tts_set_voice'] = (block: any) => {
      return `tts.set_voice("${block.getFieldValue('VOICE')}")\n`;
    };

    Blockly.Blocks['tts_set_language'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.tts_set_lang', '🗣️ Set Language to'))
            .appendField(new Blockly.FieldDropdown([
              ["English 🇺🇸", "en"],
              ["French 🇫🇷", "fr"],
              ["Spanish 🇪🇸", "es"],
              ["Portuguese 🇵🇹", "pt"]
            ]), "LANG");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#8b5cf6');
      }
    };
    javascriptGenerator.forBlock['tts_set_language'] = (block: any) => {
      return `tts.setLanguage("${block.getFieldValue('LANG')}");\n`;
    };
    pythonGenerator.forBlock['tts_set_language'] = (block: any) => {
      return `tts.set_language("${block.getFieldValue('LANG')}")\n`;
    };

    // --- Sound & Music Blocks ---
    Blockly.Blocks['sound_play_note'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.play_note', '🎵 Play Note'))
            .appendField(new Blockly.FieldDropdown([
              ["C4 (Do) 🎵", "261.63"],
              ["D4 (Re) 🎵", "293.66"],
              ["E4 (Mi) 🎵", "329.63"],
              ["F4 (Fa) 🎵", "349.23"],
              ["G4 (Sol) 🎵", "392.00"],
              ["A4 (La) 🎵", "440.00"],
              ["B4 (Ti) 🎵", "493.88"],
              ["C5 (High Do) 🎵", "523.25"]
            ]), "NOTE")
            .appendField(t('blocks.for', 'for'))
            .appendField(new Blockly.FieldNumber(0.5, 0.1, 10), "DURATION")
            .appendField(t('blocks.sec', 'sec'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#d946ef');
      }
    };
    javascriptGenerator.forBlock['sound_play_note'] = (block: any) => {
      return `await music.playNote(${block.getFieldValue('NOTE')}, ${block.getFieldValue('DURATION')});\n`;
    };
    pythonGenerator.forBlock['sound_play_note'] = (block: any) => {
      return `music.play_note(${block.getFieldValue('NOTE')}, ${block.getFieldValue('DURATION')})\n`;
    };

    Blockly.Blocks['sound_play_effect'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.play_effect', '🔊 Play Sound Effect'))
            .appendField(new Blockly.FieldDropdown([
              ["Cheer 🎉", "cheer"],
              ["Coin 🪙", "coin"],
              ["Laser 🔫", "laser"],
              ["Pop 🎈", "pop"],
              ["Explosion 💥", "explosion"],
              ["Win 🏆", "win"]
            ]), "EFFECT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#d946ef');
      }
    };
    javascriptGenerator.forBlock['sound_play_effect'] = (block: any) => {
      return `await music.playEffect("${block.getFieldValue('EFFECT')}");\n`;
    };
    pythonGenerator.forBlock['sound_play_effect'] = (block: any) => {
      return `music.play_effect("${block.getFieldValue('EFFECT')}")\n`;
    };

    Blockly.Blocks['sound_rest'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.rest', '🔕 Rest for'))
            .appendField(new Blockly.FieldNumber(0.5, 0.1, 10), "SECS")
            .appendField(t('blocks.sec', 'sec'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#d946ef');
      }
    };
    javascriptGenerator.forBlock['sound_rest'] = (block: any) => {
      return `await new Promise(res => setTimeout(res, ${block.getFieldValue('SECS')} * 1000));\n`;
    };
    pythonGenerator.forBlock['sound_rest'] = (block: any) => {
      return `time.sleep(${block.getFieldValue('SECS')})\n`;
    };

    // --- Robotics Blocks ---
    Blockly.Blocks['robot_move'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.move', '🚜 Move'))
            .appendField(new Blockly.FieldDropdown([[t('blocks.forward', 'Forward'), "forward"], [t('blocks.backward', 'Backward'), "backward"]]), "DIR")
            .appendField(t('blocks.for', 'for'))
            .appendField(new Blockly.FieldNumber(2, 0.1, 10), "DURATION")
            .appendField(t('blocks.sec', 'sec'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
      }
    };
    javascriptGenerator.forBlock['robot_move'] = (block: any) => `await robot.move("${block.getFieldValue('DIR')}", ${block.getFieldValue('DURATION')} * 1000);\n`;
    pythonGenerator.forBlock['robot_move'] = (block: any) => `robot.move("${block.getFieldValue('DIR')}", ${block.getFieldValue('DURATION')})\n`;

    Blockly.Blocks['robot_turn'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.turn', '🔄 Turn'))
            .appendField(new Blockly.FieldDropdown([[t('blocks.left', 'Left ⟲'), "left"], [t('blocks.right', 'Right ⟳'), "right"]]), "DIR")
            .appendField(t('blocks.for', 'for'))
            .appendField(new Blockly.FieldNumber(1, 0.1, 10), "DURATION")
            .appendField(t('blocks.sec', 'sec'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
      }
    };
    javascriptGenerator.forBlock['robot_turn'] = (block: any) => `await robot.turn("${block.getFieldValue('DIR')}", ${block.getFieldValue('DURATION')} * 1000);\n`;
    pythonGenerator.forBlock['robot_turn'] = (block: any) => `robot.turn("${block.getFieldValue('DIR')}", ${block.getFieldValue('DURATION')})\n`;

    Blockly.Blocks['robot_stop'] = {
      init: function() {
        this.appendDummyInput().appendField(t('blocks.stop', '🛑 Stop Robot'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
      }
    };
    javascriptGenerator.forBlock['robot_stop'] = () => `robot.stop();\n`;
    pythonGenerator.forBlock['robot_stop'] = () => `robot.stop()\n`;

    Blockly.Blocks['robot_distance'] = {
      init: function() {
        this.appendDummyInput().appendField(t('blocks.distance', '📐 Distance Sensor'));
        this.setOutput(true, "Number");
        this.setColour(60);
      }
    };
    javascriptGenerator.forBlock['robot_distance'] = () => [`robot.getDistance()`, (javascriptGenerator as any).ORDER_ATOMIC];
    pythonGenerator.forBlock['robot_distance'] = () => [`robot.get_distance()`, (pythonGenerator as any).ORDER_ATOMIC];

    // --- Electronics Blocks ---
    Blockly.Blocks['led_state'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.led_state', '💡 Turn LED'))
            .appendField(new Blockly.FieldDropdown([["Red 🔴", "red"], ["Yellow 🟡", "yellow"], ["Green 🟢", "green"]]), "COLOR")
            .appendField("to")
            .appendField(new Blockly.FieldDropdown([[t('blocks.led_on', 'ON'), "on"], [t('blocks.led_off', 'OFF'), "off"]]), "STATE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
      }
    };
    javascriptGenerator.forBlock['led_state'] = (block: any) => `await electronics.setLED("${block.getFieldValue('COLOR')}", "${block.getFieldValue('STATE')}");\n`;
    pythonGenerator.forBlock['led_state'] = (block: any) => `electronics.set_led("${block.getFieldValue('COLOR')}", "${block.getFieldValue('STATE')}")\n`;

    // --- Ghana Kit Custom Blocks ---
    Blockly.Blocks['ghana_kit_buzzer'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.buzzer', '🔊 Buzzer Note'))
            .appendField(new Blockly.FieldDropdown([
              ["C4 (262Hz) 🎵", "262"],
              ["D4 (294Hz) 🎵", "294"],
              ["E4 (330Hz) 🎵", "330"],
              ["F4 (349Hz) 🎵", "349"],
              ["G4 (392Hz) 🎵", "392"],
              ["A4 (440Hz) 🎵", "440"],
              ["B4 (494Hz) 🎵", "494"],
              ["C5 (523Hz) 🎵", "523"]
            ]), "FREQ")
            .appendField(t('blocks.for', 'for'))
            .appendField(new Blockly.FieldNumber(0.5, 0.1, 5.0), "DURATION")
            .appendField(t('blocks.sec', 'sec'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
      }
    };
    javascriptGenerator.forBlock['ghana_kit_buzzer'] = (block: any) => `await electronics.playBuzzer(${block.getFieldValue('FREQ')}, ${block.getFieldValue('DURATION')} * 1000);\n`;
    pythonGenerator.forBlock['ghana_kit_buzzer'] = (block: any) => `ghana_kit.play_buzzer(${block.getFieldValue('FREQ')}, ${block.getFieldValue('DURATION')})\n`;

    Blockly.Blocks['ghana_kit_servo'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.servo', '🔌 Rotate Servo Pin 4 to'))
            .appendField(new Blockly.FieldNumber(90, 0, 180), "ANGLE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
      }
    };
    javascriptGenerator.forBlock['ghana_kit_servo'] = (block: any) => `await electronics.setServo(4, ${block.getFieldValue('ANGLE')});\n`;
    pythonGenerator.forBlock['ghana_kit_servo'] = (block: any) => `ghana_kit.set_servo(4, ${block.getFieldValue('ANGLE')})\n`;


    // --- Game Dev Blocks ---
    Blockly.Blocks['game_physics'] = {
      init: function() {
        this.appendDummyInput().appendField(t('blocks.physics', '🚀 Enable Physics Scene'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(200);
      }
    };
    javascriptGenerator.forBlock['game_physics'] = () => `game.reset();\n`;
    pythonGenerator.forBlock['game_physics'] = () => `game.reset()\n`;

    Blockly.Blocks['game_gravity'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.gravity', '🌍 Set Gravity to'))
            .appendField(new Blockly.FieldNumber(9.8, 0, 50), "G")
            .appendField(t('blocks.gravity_unit', 'm/s²'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(200);
      }
    };
    javascriptGenerator.forBlock['game_gravity'] = (block: any) => `game.setGravity(${block.getFieldValue('G')});\n`;
    pythonGenerator.forBlock['game_gravity'] = (block: any) => `game.set_gravity(${block.getFieldValue('G')})\n`;

    Blockly.Blocks['character_jump'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.jump', '🚀 Jump with force'))
            .appendField(new Blockly.FieldNumber(500, 100, 2000), "FORCE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(200);
      }
    };
    javascriptGenerator.forBlock['character_jump'] = (block: any) => `game.jump(${block.getFieldValue('FORCE')});\n`;
    pythonGenerator.forBlock['character_jump'] = (block: any) => `game.jump(${block.getFieldValue('FORCE')})\n`;

    Blockly.Blocks['spawn_stars'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.spawn_stars', '✨ Spawn'))
            .appendField(new Blockly.FieldNumber(5, 1, 50), "COUNT")
            .appendField("Stars");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(200);
      }
    };
    javascriptGenerator.forBlock['spawn_stars'] = (block: any) => `game.spawnStars(${block.getFieldValue('COUNT')});\n`;
    pythonGenerator.forBlock['spawn_stars'] = (block: any) => `game.spawn_stars(${block.getFieldValue('COUNT')})\n`;

    Blockly.Blocks['on_key_press'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.when_key', '⌨️ When'))
            .appendField(new Blockly.FieldDropdown([[t('blocks.key_space', 'Space'), " "], [t('blocks.key_left', 'Arrow Left'), "ArrowUp"], ["Any Key", "any"]]), "KEY")
            .appendField(t('blocks.is_pressed', 'is pressed'));
        this.appendStatementInput("DO").appendField("do");
        this.setColour(200);
        this.setTooltip("Run code when a key is pressed");
      }
    };
    javascriptGenerator.forBlock['on_key_press'] = (block: any) => {
      const branch = javascriptGenerator.statementToCode(block, 'DO');
      return `game.onKeyPress("${block.getFieldValue('KEY')}", async () => {\n${branch}});\n`;
    };
    pythonGenerator.forBlock['on_key_press'] = (block: any) => {
      const branch = pythonGenerator.statementToCode(block, 'DO');
      return `def on_press():\n${branch || '    pass'}\n\ngame.on_key_press("${block.getFieldValue('KEY')}", on_press)\n`;
    };

    Blockly.Blocks['update_score'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.update_score_1', '🏆 Add'))
            .appendField(new Blockly.FieldNumber(10, 1, 1000), "POINTS")
            .appendField(t('blocks.update_score_2', 'to Score'));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(200);
      }
    };
    javascriptGenerator.forBlock['update_score'] = (block: any) => `game.updateScore(${block.getFieldValue('POINTS')});\n`;
    pythonGenerator.forBlock['update_score'] = (block: any) => `game.update_score(${block.getFieldValue('POINTS')})\n`;

    // --- AI Blocks ---
    Blockly.Blocks['ai_class'] = {
      init: function() {
        this.appendDummyInput().appendField(t('blocks.ai_class', '🧠 AI Detected Class'));
        this.setOutput(true, "String");
        this.setColour(260);
      }
    };
    javascriptGenerator.forBlock['ai_class'] = () => [`ai.getClass()`, (javascriptGenerator as any).ORDER_ATOMIC];
    pythonGenerator.forBlock['ai_class'] = () => [`ai.get_class()`, (pythonGenerator as any).ORDER_ATOMIC];

    Blockly.Blocks['on_class_detect'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(t('blocks.on_detect', '🧠 When AI sees'))
            .appendField(new Blockly.FieldTextInput("Cocoa Pod"), "CLASS");
        this.appendStatementInput("DO").appendField("do");
        this.setColour(260);
        this.setTooltip("Run code when AI detects the specified class");
      }
    };
    javascriptGenerator.forBlock['on_class_detect'] = (block: any) => {
      const branch = javascriptGenerator.statementToCode(block, 'DO');
      return `ai.onClassDetect("${block.getFieldValue('CLASS')}", async () => {\n${branch}});\n`;
    };
    pythonGenerator.forBlock['on_class_detect'] = (block: any) => {
      const branch = pythonGenerator.statementToCode(block, 'DO');
      const safeClassName = block.getFieldValue('CLASS').replace(/[^a-zA-Z0-9]/g, '_');
      return `def on_detect_${safeClassName}():\n${branch || '    pass'}\n\nai.on_class_detect("${block.getFieldValue('CLASS')}", on_detect_${safeClassName})\n`;
    };

    // Inject Workspace
    if (blocklyDiv.current) {
      const isAIPathway = mission?.pathway === 'Data Science (AI 4 Kids)' || mission?.pathway === 'ML (AI 4 Kids)' || mission?.pathway === 'AI (AI 4 Kids)';
      const toolboxContents: any[] = [
        {
          kind: 'category',
          name: t('category.mascot', '🤖 Mascot'),
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
          name: t('category.robotics', '🚜 Robotics'),
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
          name: t('category.electronics', '⚡ Electronics'),
          colour: '#eab308',
          contents: [
            { kind: 'block', type: 'led_state' },
            { kind: 'block', type: 'ghana_kit_buzzer' },
            { kind: 'block', type: 'ghana_kit_servo' },
            { kind: 'block', type: 'mascot_wait' },
          ]
        },
        {
          kind: 'category',
          name: t('category.gamedev', '🎮 Game Dev'),
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
        ...(isAIPathway ? [
          {
            kind: 'category',
            name: t('category.ai', '🧠 AI Hub'),
            colour: '#a855f7',
            contents: [
              { kind: 'block', type: 'ai_class' },
              { kind: 'block', type: 'on_class_detect' }
            ]
          }
        ] : []),
        {
          kind: 'category',
          name: t('category.tts', '🗣️ Text to Speech'),
          colour: '#8b5cf6',
          contents: [
            {
              kind: 'block',
              type: 'tts_speak',
              inputs: {
                TEXT: {
                  shadow: {
                    type: 'text',
                    fields: {
                      TEXT: 'Hello!'
                    }
                  }
                }
              }
            },
            { kind: 'block', type: 'tts_set_voice' },
            { kind: 'block', type: 'tts_set_language' }
          ]
        },
        {
          kind: 'category',
          name: t('category.sound', '🎵 Sound & Music'),
          colour: '#d946ef',
          contents: [
            { kind: 'block', type: 'sound_play_note' },
            { kind: 'block', type: 'sound_play_effect' },
            { kind: 'block', type: 'sound_rest' }
          ]
        },
        { kind: 'category', name: t('category.logic', '🧠 Logic'), categorystyle: 'logic_category', contents: [{ kind: 'block', type: 'controls_if' }] },
        { kind: 'category', name: t('category.loops', '🔄 Loops'), categorystyle: 'loop_category', contents: [{ kind: 'block', type: 'controls_repeat_ext' }] },
        { kind: 'category', name: t('category.variables', '📦 Variables'), categorystyle: 'variable_category', custom: 'VARIABLE' }
      ];

      const ws = Blockly.inject(blocklyDiv.current, {
        toolbox: { kind: 'categoryToolbox', contents: toolboxContents },
        theme: isDark ? KoneDark : KoneLight,
        trashcan: true,
        renderer: 'zelos',
        zoom: {
          controls: true,
          wheel: true,
          startScale: isMobile ? 0.75 : 0.9,
          maxScale: 2.0,
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

      // Restore previously saved blocks if any existed
      if (savedBlocksXml) {
        try {
          const parser = new DOMParser();
          const xmlDom = parser.parseFromString(savedBlocksXml, 'text/xml').documentElement;
          Blockly.Xml.domToWorkspace(xmlDom, ws);
        } catch (err) {
          console.error('Error deserializing blocks:', err);
        }
      }

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
        if (event.type === Blockly.Events.FINISHED_LOADING) {
          Blockly.svgResize(ws);
        }

        // Trigger light snap haptic if block was connected to a parent
        if (event.type === Blockly.Events.BLOCK_MOVE && event.newParentId) {
          sounds.playSnap();
          try {
            Haptics.impact({ style: ImpactStyle.Light }).catch(() => {});
          } catch (e) {
            // Browser fallback
          }
        }

        if (event.type === Blockly.Events.BLOCK_DELETE) {
          sounds.playTrash();
        }

        if (event.type === Blockly.Events.BLOCK_MOVE || event.type === Blockly.Events.BLOCK_CHANGE || event.type === Blockly.Events.BLOCK_DELETE || event.type === Blockly.Events.BLOCK_CREATE) {
          const generator = language === 'javascript' ? javascriptGenerator : pythonGenerator;
          const code = generator.workspaceToCode(ws);
          setGeneratedCode(code);
          setBlockCount(ws.getAllBlocks(false).length);
          setLineCount(code.split('\n').filter((l: string) => l.trim().length > 0).length);
        }
      });

      // Check if URL contains shared project code: #code=... or ?code=...
      try {
        const hash = window.location.hash;
        const search = window.location.search;
        let encodedCode = '';
        if (hash.includes('code=')) {
          encodedCode = hash.split('code=')[1]?.split('&')[0];
        } else if (search.includes('code=')) {
          const params = new URLSearchParams(search);
          encodedCode = params.get('code') || '';
        }

        if (encodedCode) {
          const xmlText = decodeURIComponent(atob(encodedCode));
          const xmlDom = Blockly.utils.xml.textToDom(xmlText);
          Blockly.Xml.domToWorkspace(xmlDom, ws);
          sounds.playSuccess();
          setTimeout(() => {
            mascotRef.current?.speak('Loaded shared project! Click Run Code to test it.');
          }, 1000);
        }
      } catch (e) {
        console.error('Failed to parse shared code:', e);
      }

      return () => {
        window.removeEventListener('resize', handleResize);
        ws.dispose();
        workspace.current = null;
      };
    }
  }, [onboardingStep, language, isMobile, mission, i18n.language]);

  const getSharedUrl = () => {
    if (!workspace.current) return window.location.href;
    try {
      const xmlDom = Blockly.Xml.workspaceToDom(workspace.current);
      const xmlText = Blockly.Xml.domToText(xmlDom);
      const encoded = btoa(encodeURIComponent(xmlText));
      return `${window.location.origin}${window.location.pathname}#code=${encoded}`;
    } catch (e) {
      return window.location.href;
    }
  };

  const handleCopyShareLink = async () => {
    try {
      const url = getSharedUrl();
      await navigator.clipboard.writeText(url);
      setShareCopied(true);
      sounds.playSuccess();
      setTimeout(() => setShareCopied(false), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleNativeShare = async () => {
    try {
      const url = getSharedUrl();
      await Share.share({
        title: 'My Kone Kids Coding Project 🚀',
        text: 'Check out the awesome block coding project I built on Kone Kids Academy!',
        url: url,
        dialogTitle: 'Share Project with Friends & Family'
      });
      sounds.playSuccess();
    } catch (e) {
      console.error(e);
    }
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !workspace.current) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        workspace.current?.clear();
        const xmlDom = Blockly.utils.xml.textToDom(content);
        Blockly.Xml.domToWorkspace(xmlDom, workspace.current!);
        setShowShareModal(false);
        sounds.playSuccess();
        mascotRef.current?.speak('Imported saved project! Click Run Code to test it.');
      } catch (err) {
        setBlockError(['Invalid project file. Please select a valid .kone file.']);
        setTimeout(() => setBlockError(null), 4000);
      }
    };
    reader.readAsText(file);
  };

  const handleCleanUpBlocks = () => {
    if (workspace.current) {
      workspace.current.cleanUp();
      sounds.playSuccess();
      try {
        Haptics.impact({ style: ImpactStyle.Light }).catch(() => {});
      } catch (e) {}
    }
  };

  const handleCenterWorkspace = () => {
    if (workspace.current) {
      if (typeof workspace.current.scrollCenter === 'function') {
        workspace.current.scrollCenter();
      } else if (typeof (workspace.current as any).zoomToFit === 'function') {
        (workspace.current as any).zoomToFit();
      }
      try {
        Haptics.impact({ style: ImpactStyle.Light }).catch(() => {});
      } catch (e) {}
    }
  };

  const handleZoomIn = () => {
    if (workspace.current) {
      workspace.current.zoom(0, 0, 1);
    }
  };

  const handleZoomOut = () => {
    if (workspace.current) {
      workspace.current.zoom(0, 0, -1);
    }
  };

  const handleUndo = () => {
    if (workspace.current) {
      workspace.current.undo(false);
      sounds.playClick();
      try {
        Haptics.impact({ style: ImpactStyle.Light }).catch(() => {});
      } catch (e) {}
    }
  };

  const handleRedo = () => {
    if (workspace.current) {
      workspace.current.undo(true);
      sounds.playClick();
      try {
        Haptics.impact({ style: ImpactStyle.Light }).catch(() => {});
      } catch (e) {}
    }
  };

  const handleInsertBlock = (blockType: string) => {
    if (!workspace.current) return;
    try {
      const newBlock = workspace.current.newBlock(blockType);
      newBlock.initSvg();
      newBlock.render();

      const metrics = workspace.current.getMetrics();
      if (metrics) {
        const x = metrics.viewLeft + metrics.viewWidth / 2 - 100;
        const y = metrics.viewTop + metrics.viewHeight / 2 - 50;
        newBlock.moveBy(x, y);
      }

      setShowSearchModal(false);
      setSearchQuery('');
      sounds.playClick();
      try {
        Haptics.impact({ style: ImpactStyle.Light }).catch(() => {});
      } catch (e) {}
    } catch (e) {
      console.error(e);
    }
  };

  const handleLoadTemplate = (project: StarterProject) => {
    if (!workspace.current) return;
    try {
      workspace.current.clear();
      const xmlDom = Blockly.utils.xml.textToDom(project.xml);
      Blockly.Xml.domToWorkspace(xmlDom, workspace.current);
      setShowTemplatesModal(false);
      sounds.playSuccess();
      try {
        Haptics.impact({ style: ImpactStyle.Medium }).catch(() => {});
      } catch (e) {}
      mascotRef.current?.speak(`Loaded ${project.name}! Click Run Code to test it.`);
    } catch (e) {
      console.error(e);
    }
  };

  const exportProject = () => {
    if (!workspace.current) return;
    try {
      const xmlDom = Blockly.Xml.workspaceToDom(workspace.current);
      const xmlText = Blockly.Xml.domToText(xmlDom);
      
      const blob = new Blob([xmlText], { type: 'text/xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `kone-kids-project-${missionId || 'custom'}.kone`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      sounds.playSuccess();
      mascotRef.current?.speak("Project saved to your computer! 💾");
    } catch (err) {
      console.error('Failed to export project:', err);
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!workspace.current) return;
    
    const file = e.dataTransfer.files[0];
    if (file && (file.name.endsWith('.kone') || file.name.endsWith('.xml'))) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        try {
          const parser = new DOMParser();
          const xmlDom = parser.parseFromString(text, 'text/xml').documentElement;
          workspace.current?.clear();
          Blockly.Xml.domToWorkspace(xmlDom, workspace.current!);
          sounds.playSuccess();
          mascotRef.current?.speak("Project loaded successfully! 📂");
        } catch (err) {
          console.error('Failed to import project:', err);
          alert('Failed to load project: invalid project file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  const triggerConfetti = () => {
    try {
      const canvas = document.createElement('canvas');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '999';
      document.body.appendChild(canvas);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const particles: any[] = [];
      const colors = ['#0ea5e9', '#f97316', '#a855f7', '#10b981', '#fbbf24', '#ec4899'];
      for (let i = 0; i < 90; i++) {
        particles.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          vx: (Math.random() - 0.5) * 18,
          vy: (Math.random() - 0.7) * 18,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          vRot: (Math.random() - 0.5) * 10
        });
      }
      let frame = 0;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.4;
          p.rotation += p.vRot;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        });
        frame++;
        if (frame < 90) {
          requestAnimationFrame(animate);
        } else {
          canvas.remove();
        }
      };
      animate();
    } catch (e) {}
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

      // Ctrl/Cmd + Enter -> Run Code
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode();
      }

      // Escape -> Stop Code
      if (e.key === 'Escape') {
        e.preventDefault();
        stopCode();
      }

      // Ctrl/Cmd + S -> Export Project
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        exportProject();
      }

      // Ctrl/Cmd + Z -> Undo
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && !e.shiftKey) {
        e.preventDefault();
        handleUndo();
      }

      // Ctrl/Cmd + Y or Ctrl/Cmd + Shift + Z -> Redo
      if (((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') || ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'z')) {
        e.preventDefault();
        handleRedo();
      }

      // Ctrl/Cmd + K -> Open Block Search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setShowSearchModal(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const connectHardware = async () => {
    if (!('serial' in navigator)) {
      alert("Web Serial API is not supported in this browser. Please use Chrome or Edge! 🔌");
      return;
    }
    try {
      const port = await (navigator as any).serial.requestPort();
      await port.open({ baudRate: 115200 });
      setSerialPort(port);
      setIsConnected(true);
      sounds.playSuccess();
      mascotRef.current?.speak("Microcontroller connected! Ready to upload. 🔌");
    } catch (err) {
      console.error('Failed to open serial port:', err);
      alert("Could not connect to device. Make sure it is plugged in and not used by another program.");
    }
  };

  const disconnectHardware = async () => {
    if (serialPort) {
      try {
        await serialPort.close();
      } catch (err) {
        console.error(err);
      }
      setSerialPort(null);
      setIsConnected(false);
      sounds.playClick();
      mascotRef.current?.speak("Hardware disconnected.");
    }
  };

  const uploadToHardware = async () => {
    if (!serialPort) return;
    setUploading(true);
    try {
      const writer = serialPort.writable.getWriter();
      const encoder = new TextEncoder();

      // MicroPython Raw REPL upload helper
      if (language === 'python') {
        // 1. Interrupt any running script (Ctrl+C)
        await writer.write(encoder.encode('\x03'));
        await new Promise(res => setTimeout(res, 200));
        // 2. Enter raw REPL mode (Ctrl+A)
        await writer.write(encoder.encode('\x01'));
        await new Promise(res => setTimeout(res, 200));
        // 3. Write code string
        await writer.write(encoder.encode(generatedCode));
        await new Promise(res => setTimeout(res, 200));
        // 4. Soft reboot and execute (Ctrl+D)
        await writer.write(encoder.encode('\x04'));
      } else {
        // Direct raw text transfer for generic serial monitors
        await writer.write(encoder.encode(generatedCode + '\n'));
      }

      writer.releaseLock();
      sounds.playSuccess();
      mascotRef.current?.speak("Upload complete! Watch your board! 🚀");
    } catch (err) {
      console.error('Upload failed:', err);
      alert("Upload failed. Please check your connections.");
    } finally {
      setUploading(false);
    }
  };

  const runCode = async () => {
    if (!workspace.current) return;

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
      tts_speak: '🗣️ Speak block',
      tts_set_voice: '🗣️ Set Voice block',
      tts_set_language: '🗣️ Set Language block',
      sound_play_note: '🎵 Play Note block',
      sound_play_effect: '🔊 Sound Effect block',
      sound_rest: '🔕 Rest block',
    };

    // ── 1. Empty workspace check ──────────────────────────────────────────────
    const allBlocks = workspace.current.getAllBlocks(false);
    if (allBlocks.length === 0) {
      setBlockError(['Your workspace is empty! Drag some blocks from the left toolbox to get started.']);
      setTimeout(() => setBlockError(null), 4000);
      mascotRef.current?.speak('Your workspace is empty! Drag blocks from the left toolbar.');
      return;
    }

    // ── 2. Required block validation ─────────────────────────────────────────
    if (mission?.requiredBlocks && mission.requiredBlocks.length > 0) {
      const presentTypes = new Set(allBlocks.map((b: any) => b.type));
      const missing = mission.requiredBlocks.filter(req => !presentTypes.has(req));
      if (missing.length > 0) {
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

    if (isMobile) {
      setActiveMobileTab('simulator');
    }

    setIsRunning(true);
    isRunningRef.current = true;
    setIsStopping(false);
    setBlockError(null);

    if (onboardingStep === 3) {
      completeOnboarding();
      setOnboardingStep(-1);
    }

    // Set STATEMENT_PREFIX dynamically to inject highlights into the executed code
    (javascriptGenerator as any).STATEMENT_PREFIX = 'await highlightBlock(%1);\n';
    const code = javascriptGenerator.workspaceToCode(workspace.current);
    // Reset it immediately so it doesn't affect standard workspace code output
    (javascriptGenerator as any).STATEMENT_PREFIX = null;

    const highlightBlock = async (id: string) => {
      if (!isRunningRef.current) {
        throw new Error('stopped');
      }
      workspace.current?.highlightBlock(id);

      const block = workspace.current?.getBlockById(id);
      if (isSlowMoRef.current && block) {
        const blockName = friendlyNames[block.type] || block.type;
        mascotRef.current?.speak(`Step: ${blockName}`);
      }

      const stepDelay = isSlowMoRef.current ? 1800 : 600;
      
      // Delay to show highlighting
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(resolve, stepDelay);
        const checkInterval = setInterval(() => {
          if (!isRunningRef.current) {
            clearTimeout(timeout);
            clearInterval(checkInterval);
            reject(new Error('stopped'));
          }
        }, 50);
      });
    };
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

    const electronics = {
      setLED: (color: string, state: string) => {
        if (electronicsRef.current) {
          return electronicsRef.current.setLED(color, state);
        }
        return new Promise(res => {
          mascotRef.current?.speak(`💡 ${color.toUpperCase()} LED turned ${state.toUpperCase()}!`);
          setTimeout(res, 1500);
        });
      },
      playBuzzer: (frequency: number, duration: number) => {
        if (electronicsRef.current) {
          return electronicsRef.current.playBuzzer(frequency, duration);
        }
        return new Promise(res => {
          mascotRef.current?.speak(`🔊 Buzzer beeped at ${frequency}Hz for ${duration / 1000}s!`);
          setTimeout(res, duration);
        });
      },
      setServo: (pin: number, angle: number) => {
        if (electronicsRef.current) {
          return electronicsRef.current.setServo(pin, angle);
        }
        return new Promise(res => {
          mascotRef.current?.speak(`🔌 Servo rotated to ${angle}°!`);
          setTimeout(res, 1000);
        });
      }
    };

    const ai = {
      getClass: () => aiRef.current?.getClass() || 'Unknown',
      onClassDetect: (className: string, callback: () => void) => {
        aiRef.current?.onClassDetect(className, callback);
      }
    };

    // Text-to-Speech execution setup
    let currentTtsVoice = 'alto';
    let currentTtsLang = 'en-US';

    const tts = {
      setVoice: (voice: string) => {
        currentTtsVoice = voice;
      },
      setLanguage: (lang: string) => {
        const langMap: Record<string, string> = {
          en: 'en-US',
          fr: 'fr-FR',
          es: 'es-ES',
          pt: 'pt-BR'
        };
        currentTtsLang = langMap[lang] || lang;
      },
      speak: (text: string) => new Promise(res => {
        try {
          if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // cancel any active speech
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = currentTtsLang;

            if (currentTtsVoice === 'alto') {
              utterance.pitch = 1.0;
              utterance.rate = 1.0;
            } else if (currentTtsVoice === 'baritone') {
              utterance.pitch = 0.6;
              utterance.rate = 0.9;
            } else if (currentTtsVoice === 'squeak') {
              utterance.pitch = 1.6;
              utterance.rate = 1.25;
            } else if (currentTtsVoice === 'giant') {
              utterance.pitch = 0.45;
              utterance.rate = 0.75;
            } else if (currentTtsVoice === 'kitten') {
              utterance.pitch = 2.0;
              utterance.rate = 1.5;
              // Scratch kitten voice: converts all words to meows!
              const words = text.split(/\s+/);
              const meows = words.map(() => 'meow').join(' ');
              utterance.text = meows;
            }

            utterance.onend = () => res(true);
            utterance.onerror = () => res(true);
            window.speechSynthesis.speak(utterance);
          } else {
            res(true);
          }
        } catch (e) {
          res(true);
        }
      })
    };

    const music = {
      playNote: (freq: number, duration: number) => new Promise(res => {
        try {
          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          if (AudioContextClass) {
            const audioCtx = new AudioContextClass();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
            
            setTimeout(() => {
              try { audioCtx.close(); } catch(e) {}
              res(true);
            }, duration * 1000);
          } else {
            res(true);
          }
        } catch (e) {
          res(true);
        }
      }),
      playEffect: (effect: string) => new Promise(res => {
        if (effect === 'cheer') {
          sounds.playWin();
          setTimeout(res, 1200);
        } else if (effect === 'coin') {
          sounds.playSuccess();
          setTimeout(res, 600);
        } else if (effect === 'explosion') {
          sounds.playExplosion();
          setTimeout(res, 800);
        } else if (effect === 'pop') {
          sounds.playClick();
          setTimeout(res, 300);
        } else if (effect === 'win') {
          sounds.playWin();
          setTimeout(res, 1500);
        } else {
          try {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioContextClass) {
              const ctx = new AudioContextClass();
              const osc = ctx.createOscillator();
              const gain = ctx.createGain();
              osc.type = 'sawtooth';
              osc.frequency.setValueAtTime(880, ctx.currentTime);
              osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.25);
              gain.gain.setValueAtTime(0.15, ctx.currentTime);
              gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.25);
              osc.connect(gain);
              gain.connect(ctx.destination);
              osc.start();
              osc.stop(ctx.currentTime + 0.25);
              setTimeout(() => { try { ctx.close(); } catch(e){} res(true); }, 250);
            } else { res(true); }
          } catch(e) { res(true); }
        }
      })
    };

    let ranSuccessfully = false;
    try {
      const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
      const fn = new AsyncFunction('mascot', 'robot', 'game', 'electronics', 'ai', 'highlightBlock', 'tts', 'music', code);
      await fn(mascot, robot, game, electronics, ai, highlightBlock, tts, music);
      ranSuccessfully = true;
    } catch (e) {
      console.error(e);
    } finally {
      setIsRunning(false);
      isRunningRef.current = false;
      let validationPassed = true;
      if (mission) {
        if ((mission.id === 'robotics_1' || mission.id === 'robotics_3' || mission.id === 'robotics_4') && robotRef.current) {
          validationPassed = robotRef.current.hasReachedTarget();
        } else if (mission.id === 'robotics_2' && robotRef.current) {
          validationPassed = robotRef.current.hasReachedTarget();
        }
      }

      // Only complete mission if code ran without errors and validation passed
      if (ranSuccessfully && validationPassed && mission && !isMissionCompleted) {
        sounds.playWin();
        triggerConfetti();
        mascotRef.current?.celebrate('high');
        completeMission(mission.id, mission.xpReward);
        setShowSuccessModal(true);
      } else if (ranSuccessfully && validationPassed) {
        sounds.playSuccess();
        triggerConfetti();
        mascotRef.current?.celebrate('low');
      }
    }
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

  const stopCode = () => {
    setIsStopping(true);
    setIsRunning(false);
    isRunningRef.current = false;
    window.speechSynthesis.cancel();
    electronicsRef.current?.reset();
    aiRef.current?.reset();
    workspace.current?.highlightBlock(null);
    sounds.playClick();
  };

  return (
    <div className="kids-ide-container engineering-lab-wrapper" style={{ 
      width: '100%',
      maxWidth: '1440px',
      margin: '0 auto',
      height: isMobile ? 'auto' : 'calc(100vh - 120px)',
      minHeight: isMobile ? 'auto' : '750px',
      borderRadius: '24px',
      overflow: 'hidden',
      background: isDark ? 'linear-gradient(135deg, #0b0f19 0%, #0f172a 100%)' : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
      color: isDark ? 'white' : '#0f172a',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
      border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #cbd5e1',
      fontFamily: "'Outfit', 'Inter', sans-serif"
    }}>
      {/* Header Bar */}
      <div style={{ 
        padding: isMobile ? '0.4rem 0.6rem' : '0.6rem 1.2rem', 
        background: isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)',
        borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #cbd5e1', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        gap: '0.6rem',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <button 
            onClick={() => navigate(hubPath)} 
            className="kids-button" 
            style={{ 
              padding: '0.25rem 0.5rem', 
              fontSize: '0.75rem', 
              background: isDark ? 'var(--kids-surface)' : '#ffffff', 
              border: isDark ? '1px solid var(--kids-border)' : '1px solid #cbd5e1', 
              color: isDark ? 'white' : '#0f172a', 
              borderRadius: '8px' 
            }}
          >
            ← Map
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Untitled Project..."
              style={{
                background: 'transparent',
                border: '1px solid transparent',
                color: isDark ? 'white' : '#0f172a',
                fontSize: isMobile ? '0.85rem' : '1rem',
                fontWeight: 900,
                borderRadius: '6px',
                padding: '2px 4px',
                outline: 'none',
                maxWidth: isMobile ? '120px' : '220px'
              }}
              onFocus={(e) => (e.target.style.borderColor = '#0ea5e9')}
              onBlur={(e) => (e.target.style.borderColor = 'transparent')}
            />
            <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 700, display: isMobile ? 'none' : 'inline-flex', alignItems: 'center', gap: '3px' }}>
              ☁️ Auto-saved
            </span>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {/* Dialect selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', borderRadius: '14px', padding: '4px 8px' }}>
            <span style={{ fontSize: '0.75rem', color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)', display: isMobile ? 'none' : 'inline' }}>🗣️ Voice:</span>
            <select
              value={dialect}
              onChange={(e) => setDialect(e.target.value as any)}
              style={{
                background: 'transparent',
                border: 'none',
                color: isDark ? 'white' : 'black',
                fontSize: isMobile ? '0.75rem' : '0.85rem',
                fontWeight: 800,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="en" style={{ background: isDark ? '#1e293b' : 'white', color: isDark ? 'white' : 'black' }}>English</option>
              <option value="twi" style={{ background: isDark ? '#1e293b' : 'white', color: isDark ? 'white' : 'black' }}>Twi (Asante)</option>
              <option value="ga" style={{ background: isDark ? '#1e293b' : 'white', color: isDark ? 'white' : 'black' }}>Ga</option>
              <option value="ewe" style={{ background: isDark ? '#1e293b' : 'white', color: isDark ? 'white' : 'black' }}>Ewe</option>
            </select>
          </div>

          {/* Audio & Theme controls */}
          <div style={{ display: 'flex', gap: '0.2rem', alignItems: 'center', background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', borderRadius: '14px', padding: '4px 6px' }}>
            <button
              onClick={toggleThemeHandler}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isDark ? '#fbbf24' : '#0284c7',
                padding: '0.25rem',
                outline: 'none',
                fontSize: '0.95rem'
              }}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={handleToggleMusic}
              title={musicOn ? 'Mute Music' : 'Play Background Music'}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: musicOn ? '#c084fc' : '#94a3b8',
                padding: '0.25rem',
                outline: 'none'
              }}
            >
              <Music size={16} />
            </button>
            <button
              onClick={handleToggleMute}
              title={muted ? 'Unmute Sound FX' : 'Mute Sound FX'}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: !muted ? '#38bdf8' : '#94a3b8',
                padding: '0.25rem',
                outline: 'none'
              }}
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            <button
              onClick={() => setShowTemplatesModal(true)}
              title="Load Example Starter Projects"
              style={{
                background: 'rgba(168, 85, 247, 0.15)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                color: '#c084fc',
                padding: isMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: isMobile ? '0.72rem' : '0.8rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.2s',
                minHeight: isMobile ? '32px' : '36px'
              }}
            >
              <span>✨ Examples</span>
            </button>

            <button
              onClick={() => setShowShareModal(true)}
              title="Save, Download & Share Project"
              style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#34d399',
                padding: isMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: isMobile ? '0.72rem' : '0.8rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.2s',
                minHeight: isMobile ? '32px' : '36px'
              }}
            >
              <span>📤 Share</span>
            </button>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImportFile}
            accept=".kone,.xml"
            style={{ display: 'none' }}
          />

          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '3px', gap: '3px' }}>
            <button 
              onClick={() => setLanguage('javascript')} 
              style={{ 
                background: language === 'javascript' ? 'var(--kids-orange)' : 'transparent', 
                border: 'none', 
                color: 'white', 
                padding: isMobile ? '0.25rem 0.5rem' : '0.35rem 0.75rem', 
                borderRadius: '6px', 
                cursor: 'pointer', 
                fontSize: isMobile ? '0.7rem' : '0.8rem', 
                fontWeight: 800,
                boxShadow: language === 'javascript' ? '0 2px 0 #9a3412' : 'none',
                transition: 'all 0.2s',
                minHeight: isMobile ? '30px' : '34px'
              }}
            >
              JS
            </button>
            <button 
              onClick={() => setLanguage('python')} 
              style={{ 
                background: language === 'python' ? 'var(--kids-blue)' : 'transparent', 
                border: 'none', 
                color: 'white', 
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
      
      {/* Mobile-Friendly Section Tabs */}
      {isMobile && (
        <div style={{
          display: 'flex',
          background: '#151921',
          borderRadius: '16px',
          padding: '6px',
          gap: '6px',
          marginBottom: '1rem',
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
        }}>
          <button
            onClick={() => setActiveMobileTab('workspace')}
            style={{
              flex: 1,
              background: activeMobileTab === 'workspace' ? 'var(--kids-orange)' : 'transparent',
              border: 'none',
              color: 'white',
              padding: '0.65rem',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              boxShadow: activeMobileTab === 'workspace' ? '0 3px 0 #9a3412' : 'none',
              transform: activeMobileTab === 'workspace' ? 'translateY(1px)' : 'none',
              transition: 'all 0.15s ease',
              cursor: 'pointer'
            }}
          >
            <span>🧩 {t('tabs.blocks', 'Blocks')}</span>
          </button>
          <button
            onClick={() => setActiveMobileTab('simulator')}
            style={{
              flex: 1,
              background: activeMobileTab === 'simulator' ? 'var(--kids-blue)' : 'transparent',
              border: 'none',
              color: 'white',
              padding: '0.65rem',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              boxShadow: activeMobileTab === 'simulator' ? '0 3px 0 #0369a1' : 'none',
              transform: activeMobileTab === 'simulator' ? 'translateY(1px)' : 'none',
              transition: 'all 0.15s ease',
              cursor: 'pointer'
            }}
          >
            <span>📺 {t('tabs.playground', 'Playground')}</span>
          </button>
          {showCode && (
            <button
              onClick={() => setActiveMobileTab('code')}
              style={{
                flex: 1,
                background: activeMobileTab === 'code' ? 'var(--kids-purple)' : 'transparent',
                border: 'none',
                color: 'white',
                padding: '0.65rem',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                boxShadow: activeMobileTab === 'code' ? '0 3px 0 #7e22ce' : 'none',
                transform: activeMobileTab === 'code' ? 'translateY(1px)' : 'none',
                transition: 'all 0.15s ease',
                cursor: 'pointer'
              }}
            >
              <span>💻 {t('tabs.code_preview', 'Code')}</span>
            </button>
          )}
        </div>
      )}

      <div style={{ 
        flex: 1, 
        display: 'flex', 
        gap: isMobile ? '0.5rem' : '1rem', 
        padding: isMobile ? '0.5rem' : '1rem',
        flexDirection: isMobile ? 'column' : 'row',
        minHeight: 0,
        overflow: 'hidden'
      }}>
        {/* Workspace */}
        <div style={{ 
          flex: 2, 
          display: (!isMobile || activeMobileTab === 'workspace') ? 'flex' : 'none', 
          flexDirection: 'column', 
          gap: '1rem' 
        }}>
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
                  <h4 style={{ margin: 0, color: 'var(--kids-blue)', fontSize: isMobile ? '0.65rem' : '0.75rem', letterSpacing: '1px' }}>MISSION: {getTranslation(mission.name, dialect).text}</h4>
                  <p style={{ margin: '0.15rem 0 0', color: 'white', fontWeight: 600, fontSize: isMobile ? '0.85rem' : '0.95rem' }}>{getTranslation(mission.objective, dialect).text}</p>
                </div>
              </div>
              {mission.steps && !isMobile && (
                <div style={{ borderTop: '1px solid rgba(14, 165, 233, 0.2)', paddingTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {mission.steps.map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>
                      <span style={{ background: 'rgba(14,165,233,0.3)', color: 'var(--kids-blue)', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 800, flexShrink: 0 }}>{i+1}</span>
                      <span>{getTranslation(step, dialect).text}</span>
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
          <div style={{ position: 'relative', flex: 1, height: isMobile ? '450px' : '100%', minHeight: isMobile ? '400px' : '500px' }}>
            <div 
              ref={blocklyDiv} 
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleFileDrop}
              style={{ 
                height: '100%', 
                width: '100%',
                borderRadius: '20px', 
                overflow: 'hidden', 
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #cbd5e1', 
                background: isDark ? '#0b0e14' : '#ffffff' 
              }} 
            />

            {/* Quick Workspace Controls Bar */}
            <div style={{
              position: 'absolute',
              top: isMobile ? '8px' : '12px',
              right: isMobile ? '8px' : '12px',
              zIndex: 20,
              display: 'flex',
              gap: '4px',
              background: isDark ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              padding: '4px 6px',
              borderRadius: '14px',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid #cbd5e1',
              boxShadow: isDark ? '0 8px 24px rgba(0,0,0,0.4)' : '0 8px 24px rgba(0,0,0,0.08)'
            }}>
              <button
                onClick={handleCleanUpBlocks}
                title="Clean Up & Organize Blocks"
                style={{
                  background: 'rgba(251, 191, 36, 0.15)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  color: '#fbbf24',
                  borderRadius: '10px',
                  padding: isMobile ? '4px 8px' : '6px 10px',
                  cursor: 'pointer',
                  fontSize: isMobile ? '0.75rem' : '0.8rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.2s'
                }}
              >
                <span>🧹 Clean Up</span>
              </button>
              <button
                onClick={handleUndo}
                title="Undo (Ctrl+Z)"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #cbd5e1',
                  color: isDark ? 'white' : '#0f172a',
                  borderRadius: '10px',
                  padding: '4px 8px',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 800
                }}
              >
                ↩️
              </button>
              <button
                onClick={handleRedo}
                title="Redo (Ctrl+Y)"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #cbd5e1',
                  color: isDark ? 'white' : '#0f172a',
                  borderRadius: '10px',
                  padding: '4px 8px',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 800
                }}
              >
                ↪️
              </button>
              <button
                onClick={() => setShowSearchModal(true)}
                title="Search Blocks (Ctrl+K)"
                style={{
                  background: 'rgba(14, 165, 233, 0.15)',
                  border: '1px solid rgba(14, 165, 233, 0.3)',
                  color: '#38bdf8',
                  borderRadius: '10px',
                  padding: isMobile ? '4px 8px' : '6px 10px',
                  cursor: 'pointer',
                  fontSize: isMobile ? '0.75rem' : '0.8rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>🔍 Search</span>
              </button>
              <button
                onClick={handleCenterWorkspace}
                title="Center All Blocks"
                style={{
                  background: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  color: '#38bdf8',
                  borderRadius: '10px',
                  padding: isMobile ? '4px 8px' : '6px 10px',
                  cursor: 'pointer',
                  fontSize: isMobile ? '0.75rem' : '0.8rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>🎯 Center</span>
              </button>
              <button
                onClick={handleZoomIn}
                title="Zoom In"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  borderRadius: '10px',
                  padding: '4px 8px',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 800
                }}
              >
                ➕
              </button>
              <button
                onClick={handleZoomOut}
                title="Zoom Out"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  borderRadius: '10px',
                  padding: '4px 8px',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 800
                }}
              >
                ➖
              </button>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div style={isArenaFullscreen ? {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 250,
          background: isDark ? '#0f172a' : '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem'
        } : { 
          flex: 1, 
          display: (!isMobile || activeMobileTab !== 'workspace') ? 'flex' : 'none', 
          flexDirection: 'column', 
          gap: '1rem', 
          minWidth: isMobile ? '100%' : '350px',
          position: 'relative'
        }}>
          <button
            onClick={() => setIsArenaFullscreen(prev => !prev)}
            title={isArenaFullscreen ? "Exit Fullscreen Theater Mode" : "Expand Fullscreen Theater Mode (⛶)"}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              zIndex: 300,
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              borderRadius: '8px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: 800,
              backdropFilter: 'blur(4px)'
            }}
          >
            {isArenaFullscreen ? '↙ Exit Fullscreen' : '⛶ Fullscreen'}
          </button>
          <div style={{ 
            background: isDark ? '#151921' : '#f8fafc', 
            borderRadius: '20px', 
            padding: '1.5rem', 
            border: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid #e2e8f0', 
            height: isArenaFullscreen ? '100%' : (isMobile ? '400px' : '350px'), 
            display: (!isMobile || activeMobileTab === 'simulator') ? 'flex' : 'none', 
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
            {mission?.pathway === 'Robotics (Robotics 4 Kids)' ? (
              <RoboticsSimulator ref={robotRef} missionId={missionId} />
            ) : mission?.pathway === 'Game Dev' ? (
              <GameSimulator ref={gameRef} />
            ) : mission?.pathway === 'Electronics (Robotics 4 Kids)' ? (
              <ElectronicsSimulator ref={electronicsRef} />
            ) : (mission?.pathway === 'Data Science (AI 4 Kids)' || mission?.pathway === 'ML (AI 4 Kids)' || mission?.pathway === 'AI (AI 4 Kids)') ? (
              <AISimulator ref={aiRef} />
            ) : (
              <Mascot ref={mascotRef} />
            )}
          </div>

          {showCode && (
            <div className="code-preview-panel" style={{ 
              flex: 1, 
              background: '#1e1e1e', 
              borderRadius: '12px', 
              border: '1px solid #333', 
              overflow: 'hidden', 
              display: (!isMobile || activeMobileTab === 'code') ? 'flex' : 'none', 
              flexDirection: 'column',
              minHeight: isMobile ? '350px' : 'auto'
            }}>
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

      {/* Studio Status Bar */}
      <div style={{ 
        padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1.2rem', 
        background: isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)',
        borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #cbd5e1', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        gap: '0.8rem',
        zIndex: 50
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.75rem', color: isDark ? '#94a3b8' : '#475569', fontWeight: 700 }}>
          <span>📦 {blockCount} {blockCount === 1 ? 'Block' : 'Blocks'}</span>
          <span>•</span>
          <span>📜 {lineCount} {lineCount === 1 ? 'Line' : 'Lines'}</span>
          <span style={{ display: isMobile ? 'none' : 'inline' }}>•</span>
          <span style={{ display: isMobile ? 'none' : 'inline', color: '#10b981' }}>⚡ 60 FPS</span>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        {/* Hardware Connect/Upload buttons */}
        {('serial' in navigator) && (
          <>
            {!isConnected ? (
              <button 
                onClick={connectHardware} 
                className="kids-button" 
                style={{ padding: '0.45rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem', minHeight: '44px', background: 'var(--kids-surface)', border: '2px solid var(--kids-border)', color: 'white', '--shadow-color': 'var(--kids-border)' } as any}
              >
                <span>🔌 Connect Board</span>
              </button>
            ) : (
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <button 
                  onClick={uploadToHardware} 
                  disabled={uploading} 
                  className="kids-button pulse-neon" 
                  style={{ padding: '0.45rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem', minHeight: '44px', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', '--shadow-color': '#047857' } as any}
                >
                  <span>🚀 {uploading ? 'Uploading...' : 'Upload Board'}</span>
                </button>
                <button 
                  onClick={disconnectHardware} 
                  className="kids-button" 
                  style={{ padding: '0.45rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '44px', width: '44px', background: '#ef4444', '--shadow-color': '#991b1b' } as any} 
                  title="Disconnect Board"
                >
                  🔌
                </button>
              </div>
            )}
          </>
        )}

        <button
          onClick={() => {
            setIsSlowMo(prev => {
              isSlowMoRef.current = !prev;
              return !prev;
            });
          }}
          title={isSlowMo ? "Slow-Motion Debugger Active (1.8s per step)" : "Enable Slow-Motion Debugger Mode"}
          className="kids-button"
          style={{
            padding: '0.45rem 0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.9rem',
            minHeight: '44px',
            background: isSlowMo ? '#f59e0b' : 'var(--kids-surface)',
            borderColor: isSlowMo ? '#d97706' : 'var(--kids-border)',
            color: 'white',
            '--shadow-color': isSlowMo ? '#b45309' : 'var(--kids-border)'
          } as any}
        >
          <span style={{ fontSize: '1rem' }}>🐢</span>
          <span style={{ display: isMobile ? 'none' : 'inline' }}>{isSlowMo ? 'Slow Mo ON' : 'Slow Mo'}</span>
        </button>

        {!isRunning ? (
          <button id="run-code-btn" className="kids-button" style={{ padding: '0.45rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem', minHeight: '44px' }} onClick={runCode}>
            <Play size={18} fill="currentColor" />
            <span>Run Code</span>
          </button>
        ) : (
          <button className="kids-button" style={{ padding: '0.45rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem', background: '#ef4444', '--shadow-color': '#991b1b', minHeight: '44px' } as any} onClick={stopCode}>
            <Square size={16} fill="currentColor" />
            <span>Stop</span>
          </button>
        )}
        </div>
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
              <button className="kids-button pulse-neon" onClick={handleNextMission} style={{ width: '100%', fontSize: '1.05rem', padding: '0.85rem' }}> NEXT MISSION 🚀 </button>
              <button className="kids-button" onClick={() => navigate(hubPath)} style={{ width: '100%', background: 'var(--kids-surface)', border: '2px solid var(--kids-border)', fontSize: '0.95rem', color: 'var(--kids-text)', '--shadow-color': 'var(--kids-border)', '--shadow-height': '6px' } as any}> BACK TO MAP </button>
            </div>
          </div>
        </div>
      )}

      {mission?.briefing && !hasStartedMission && (
        <MissionBriefing 
          missionName={getTranslation(mission.name, dialect).text} 
          briefing={getTranslation(mission.briefing, dialect).text} 
          onStart={() => setHasStartedMission(true)} 
        />
      )}
      {showShop && <MascotShop onClose={() => setShowShop(false)} />}

      {/* Starter Templates Picker Modal */}
      {showTemplatesModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(12px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            background: '#0f172a',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '24px',
            maxWidth: '560px',
            width: '100%',
            padding: isMobile ? '1.2rem' : '1.8rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
            position: 'relative',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
              <div>
                <h3 style={{ margin: 0, color: 'white', fontSize: '1.3rem', fontWeight: 900 }}>✨ Starter Projects</h3>
                <p style={{ margin: '0.2rem 0 0', color: '#94a3b8', fontSize: '0.85rem' }}>Pick a template to instantly load example code into your workspace!</p>
              </div>
              <button
                onClick={() => setShowTemplatesModal(false)}
                style={{ background: 'rgba(255,255,255,0.08)', border: 'none', color: 'white', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', fontSize: '1rem', fontWeight: 900 }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {STARTER_PROJECTS.map(proj => (
                <div
                  key={proj.id}
                  onClick={() => handleLoadTemplate(proj)}
                  style={{
                    background: 'rgba(30, 41, 59, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#c084fc')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)')}
                >
                  <div style={{ fontSize: '2.2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', width: '54px', height: '54px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {proj.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <span style={{ color: 'white', fontWeight: 800, fontSize: '0.95rem' }}>{proj.name}</span>
                      <span style={{ background: 'rgba(168, 85, 247, 0.2)', color: '#c084fc', fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '6px' }}>{proj.badge}</span>
                    </div>
                    <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.8rem', lineHeight: '1.3' }}>{proj.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Quick Block Search Modal */}
      {showSearchModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(12px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '2rem 1rem'
        }}>
          <div style={{
            background: '#0f172a',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '24px',
            maxWidth: '540px',
            width: '100%',
            padding: '1.4rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
            position: 'relative',
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem' }}>🔍</span>
                <h3 style={{ margin: 0, color: 'white', fontSize: '1.2rem', fontWeight: 900 }}>Search Blocks</h3>
              </div>
              <button
                onClick={() => { setShowSearchModal(false); setSearchQuery(''); }}
                style={{ background: 'rgba(255,255,255,0.08)', border: 'none', color: 'white', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', fontSize: '1rem', fontWeight: 900 }}
              >
                ✕
              </button>
            </div>

            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by block name or keyword (e.g. move, speak, note, repeat)..."
              style={{
                width: '100%',
                background: 'rgba(30, 41, 59, 0.8)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                borderRadius: '12px',
                padding: '0.8rem 1rem',
                color: 'white',
                fontSize: '0.95rem',
                outline: 'none',
                marginBottom: '1rem',
                boxSizing: 'border-box'
              }}
            />

            <div style={{ overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {SEARCHABLE_BLOCKS.filter(b => {
                const q = searchQuery.toLowerCase().trim();
                if (!q) return true;
                return b.name.toLowerCase().includes(q) || b.keywords.toLowerCase().includes(q) || b.category.toLowerCase().includes(q);
              }).map(b => (
                <div
                  key={b.type}
                  onClick={() => handleInsertBlock(b.type)}
                  style={{
                    background: 'rgba(30, 41, 59, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '14px',
                    padding: '0.75rem 1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.15s'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = b.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)')}
                >
                  <span style={{ color: 'white', fontWeight: 800, fontSize: '0.9rem' }}>{b.name}</span>
                  <span style={{ background: `${b.color}25`, color: b.color, fontSize: '0.72rem', fontWeight: 800, padding: '3px 8px', borderRadius: '6px' }}>{b.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Project Share & Save Hub Modal */}
      {showShareModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(12px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            background: '#0f172a',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '24px',
            maxWidth: '520px',
            width: '100%',
            padding: isMobile ? '1.2rem' : '1.8rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
              <div>
                <h3 style={{ margin: 0, color: 'white', fontSize: '1.3rem', fontWeight: 900 }}>📤 Share & Save Project</h3>
                <p style={{ margin: '0.2rem 0 0', color: '#94a3b8', fontSize: '0.85rem' }}>Save your code, copy a share link, or send it to friends!</p>
              </div>
              <button
                onClick={() => setShowShareModal(false)}
                style={{ background: 'rgba(255,255,255,0.08)', border: 'none', color: 'white', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', fontSize: '1rem', fontWeight: 900 }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div
                onClick={handleCopyShareLink}
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: '16px',
                  padding: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontSize: '2rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', borderRadius: '14px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  🔗
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'white', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.2rem' }}>{shareCopied ? '✅ Link Copied to Clipboard!' : 'Copy Shareable Link'}</div>
                  <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.8rem' }}>Generate a link that opens your code on any device</p>
                </div>
              </div>

              <div
                onClick={handleNativeShare}
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '16px',
                  padding: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontSize: '2rem', background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', borderRadius: '14px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  📱
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'white', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.2rem' }}>Send to WhatsApp & Friends</div>
                  <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.8rem' }}>Launch native mobile share sheet (WhatsApp, Messages, Bluetooth)</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginTop: '0.4rem' }}>
                <button
                  onClick={exportProject}
                  style={{
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#34d399',
                    borderRadius: '14px',
                    padding: '0.8rem',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <span style={{ fontSize: '1.4rem' }}>💾</span>
                  <span>Save .kone File</span>
                </button>

                <button
                  onClick={() => fileInputRef.current?.click()}
                  style={{
                    background: 'rgba(245, 158, 11, 0.15)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    color: '#fbbf24',
                    borderRadius: '14px',
                    padding: '0.8rem',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <span style={{ fontSize: '1.4rem' }}>📥</span>
                  <span>Open Saved File</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KidsIDE;
