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
        zoom: { controls: true, wheel: true, startScale: 1.1, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2 }
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
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), workspace.current);
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
      padding: '2rem', 
      borderRadius: '32px',
      overflow: 'hidden',
      background: 'white',
      border: '8px solid rgba(255,255,255,0.5)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--kids-dark)' }}>The Coding Lab 🧪</h3>
          <p style={{ margin: 0, color: '#64748b' }}>Drag blocks to program your robot friend!</p>
        </div>
        <button 
          className="kids-button" 
          onClick={runCode}
          disabled={isRunning}
          style={{ 
            background: isRunning ? '#94a3b8' : 'var(--kids-blue)',
            boxShadow: isRunning ? 'none' : '0 10px 0 #0369a1',
            transform: isRunning ? 'translateY(5px)' : 'none'
          }}
        >
          {isRunning ? 'Running...' : '🚀 Launch Code!'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 240px', gap: '1.5rem', height: '500px' }}>
        <div ref={blocklyDiv} style={{ height: '100%', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '2px solid #e2e8f0' }} />
        
        <div style={{ 
          background: 'var(--kids-bg)', 
          borderRadius: '16px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '1rem',
          border: '2px solid #e2e8f0'
        }}>
          <Mascot ref={mascotRef} />
        </div>
      </div>
    </div>
  );
};

export default KidsIDE;
