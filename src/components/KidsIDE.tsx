import React, { useEffect, useRef, useState } from 'react';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import Mascot, { MascotHandle } from './Mascot';
import { useGamification } from '../context/GamificationContext';

const KidsIDE: React.FC = () => {
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const workspace = useRef<Blockly.WorkspaceSvg | null>(null);
  const mascotRef = useRef<MascotHandle>(null);
  const { unlockBadge } = useGamification();
  const [isRunning, setIsRunning] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Responsive breakpoints and Blockly resizing
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

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

    // 4. Wait Block
    Blockly.Blocks['mascot_wait'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("⏳ Wait")
            .appendField(new Blockly.FieldNumber(1, 0.1), "SECONDS")
            .appendField("seconds");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
      }
    };
    javascriptGenerator.forBlock['mascot_wait'] = (block: any) => {
      const seconds = block.getFieldValue('SECONDS');
      return `await new Promise(resolve => setTimeout(resolve, ${seconds * 1000}));\n`;
    };

    // Inject Workspace
    if (blocklyDiv.current) {
      workspace.current = Blockly.inject(blocklyDiv.current, {
        toolbox: {
          kind: 'flyoutToolbox',
          contents: [
            { kind: 'block', type: 'mascot_speak' },
            { kind: 'block', type: 'mascot_wave' },
            { kind: 'block', type: 'mascot_blink' },
            { kind: 'block', type: 'mascot_wait' },
            { kind: 'block', type: 'controls_repeat_ext', inputs: { TIMES: { shadow: { type: 'math_number', fields: { NUM: 3 } } } } },
          ]
        },
        trashcan: true,
        scrollbars: true,
        move: { scrollbars: true, drag: true, wheel: true },
        zoom: { controls: true, wheel: true, startScale: 1.1, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2 },
        renderer: 'geras' // Using a clean renderer
      });

      // Simple pre-loaded script
      const initialXml = `<xml xmlns="https://developers.google.com/blockly/xml">
        <block type="mascot_speak" x="20" y="20">
          <field name="TEXT">Welcome to the future! 🚀</field>
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
    }

    return () => workspace.current?.dispose();
  }, []);

  const runCode = async () => {
    if (!workspace.current || isRunning) return;
    setIsRunning(true);
    unlockBadge('first_hello');

    const code = javascriptGenerator.workspaceToCode(workspace.current);
    
    // Create an execution bridge
    const mascot = {
      speak: (text: string) => new Promise((res) => {
        mascotRef.current?.speak(text);
        setTimeout(res, 2500); // Wait for speech bubble
      }),
      wave: () => new Promise((res) => {
        mascotRef.current?.wave(2000);
        setTimeout(res, 2200);
      }),
      blink: () => new Promise((res) => {
        mascotRef.current?.blink();
        setTimeout(res, 600);
      })
    };

    try {
      // Use AsyncFunction to handle the 'await' in generated code
      const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
      const fn = new AsyncFunction('mascot', code);
      await fn(mascot);
    } catch (e) {
      console.error('IDE Error:', e);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="kids-ide-container glass-card" style={{ 
      margin: '2rem 0', 
      padding: isMobile ? '1.25rem' : '2rem', 
      borderRadius: '32px',
      overflow: 'hidden',
      background: 'white',
      border: isMobile ? '4px solid rgba(255,255,255,0.8)' : '8px solid rgba(255,255,255,0.5)'
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'stretch' : 'center', 
        gap: '1rem',
        marginBottom: isMobile ? '1.5rem' : '2rem' 
      }}>
        <div style={{ textAlign: isMobile ? 'center' : 'left', width: isMobile ? '100%' : 'auto' }}>
          <h3 style={{ margin: 0, fontSize: isMobile ? '1.5rem' : '1.8rem', color: 'var(--kids-dark)' }}>The Coding Lab 🧪</h3>
          <p style={{ margin: 0, color: '#64748b', fontSize: isMobile ? '0.9rem' : '1rem' }}>Program your robot friend!</p>
        </div>
        <button 
          className="kids-button" 
          onClick={runCode}
          disabled={isRunning}
          style={{ 
            width: isMobile ? '100%' : 'auto',
            background: isRunning ? '#94a3b8' : 'var(--kids-blue)',
            boxShadow: isRunning ? 'none' : '0 10px 0 #0369a1',
            transform: isRunning ? 'translateY(5px)' : 'none',
            fontSize: isMobile ? '1.2rem' : '1.3rem',
            padding: isMobile ? '1rem 2rem' : '1rem 2.5rem'
          }}
        >
          {isRunning ? 'Running...' : '🚀 Launch Code!'}
        </button>
      </div>

      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '1rem' : '1.5rem', 
        height: isMobile ? 'auto' : '500px'
      }}>
        {/* Mascot Preview on Top on Mobile */}
        <div style={{ 
          order: isMobile ? 1 : 2,
          background: 'rgba(248, 250, 252, 0.5)', 
          borderRadius: '24px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: isMobile ? '0.5rem' : '1rem',
          border: '2px solid rgba(226, 232, 240, 0.6)',
          width: isMobile ? '100%' : '260px',
          height: isMobile ? '220px' : 'auto',
          margin: isMobile ? '0 auto' : '0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ transform: isMobile ? 'scale(0.9) translateY(10px)' : 'none' }}>
            <Mascot ref={mascotRef} />
          </div>
        </div>

        {/* Blockly Workspace container hardened for mobile */}
        <div 
          ref={blocklyDiv} 
          className="blockly-wrapper"
          style={{ 
            order: isMobile ? 2 : 1,
            flex: 1,
            display: 'block', // Force block to prevent inline collapse
            height: isMobile ? '450px' : '100%', 
            minHeight: isMobile ? '450px' : '400px', 
            width: '100%', 
            borderRadius: '24px', 
            overflow: 'hidden', 
            border: '2px solid rgba(226, 232, 240, 0.8)',
            boxShadow: 'inset 0 4px 15px rgba(0,0,0,0.05)',
            background: 'white',
            position: 'relative'
          }} 
        />
      </div>
    </div>
  );
};

export default KidsIDE;
