import React, { useState } from 'react';
import { Copy, Check, Download, FileCode, Sparkles, Terminal, Code2 } from 'lucide-react';
import { sounds } from '../utils/sounds';

interface CodeInspectorProps {
  pythonCode: string;
  javascriptCode: string;
  isDark: boolean;
  isMobile: boolean;
  initialLanguage?: 'python' | 'javascript';
  onClose?: () => void;
}

const CodeInspector: React.FC<CodeInspectorProps> = ({
  pythonCode,
  javascriptCode,
  isDark,
  isMobile,
  initialLanguage = 'python',
  onClose
}) => {
  const [language, setLanguage] = useState<'python' | 'javascript'>(initialLanguage);
  const [copied, setCopied] = useState(false);

  const activeCode = language === 'python' 
    ? (pythonCode.trim() || '# Snap blocks into the workspace to see Python code generated here!\nimport time\n\n# Your logic will appear here...') 
    : (javascriptCode.trim() || '// Snap blocks into the workspace to see JavaScript code generated here!\nasync function run() {\n  // Your logic will appear here...\n}');

  const handleCopy = () => {
    sounds.playClick();
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    sounds.playClick();
    const extension = language === 'python' ? 'py' : 'js';
    const blob = new Blob([activeCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kone_program.${extension}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const lineCount = activeCode.split('\n').length;

  return (
    <div className="code-inspector-container" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: '#0d1117',
      borderRadius: '16px',
      border: '1px solid #30363d',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
      fontFamily: '"Fira Code", monospace'
    }}>
      {/* Top Header Bar */}
      <div style={{
        background: '#161b22',
        borderBottom: '1px solid #30363d',
        padding: isMobile ? '0.4rem 0.6rem' : '0.6rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.4rem'
      }}>
        {/* Language Tabs */}
        <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
          <button
            type="button"
            onClick={() => { sounds.playClick(); setLanguage('python'); }}
            style={{
              background: language === 'python' ? '#38bdf8' : 'rgba(255,255,255,0.06)',
              color: language === 'python' ? '#0f172a' : '#94a3b8',
              border: 'none',
              borderRadius: '8px',
              padding: isMobile ? '3px 8px' : '4px 12px',
              fontWeight: 800,
              fontSize: isMobile ? '0.72rem' : '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.15s ease'
            }}
          >
            <span>🐍 Python</span>
          </button>

          <button
            type="button"
            onClick={() => { sounds.playClick(); setLanguage('javascript'); }}
            style={{
              background: language === 'javascript' ? '#fbbf24' : 'rgba(255,255,255,0.06)',
              color: language === 'javascript' ? '#0f172a' : '#94a3b8',
              border: 'none',
              borderRadius: '8px',
              padding: isMobile ? '3px 8px' : '4px 12px',
              fontWeight: 800,
              fontSize: isMobile ? '0.72rem' : '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.15s ease'
            }}
          >
            <span>⚡ JavaScript</span>
          </button>
        </div>

        {/* Action Tools */}
        <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
          <button
            type="button"
            onClick={handleCopy}
            title="Copy text code"
            style={{
              background: copied ? '#22c55e' : 'rgba(255,255,255,0.08)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '8px',
              padding: isMobile ? '3px 8px' : '4px 10px',
              fontSize: isMobile ? '0.7rem' : '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            title="Download script file"
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '8px',
              padding: isMobile ? '3px 8px' : '4px 10px',
              fontSize: isMobile ? '0.7rem' : '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            <Download size={13} />
            <span>{!isMobile && 'Download'}</span>
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div style={{
        flex: 1,
        display: 'flex',
        overflow: 'auto',
        position: 'relative',
        background: '#0d1117'
      }}>
        {/* Line Numbers Gutter */}
        <div style={{
          padding: '1rem 0.5rem',
          textAlign: 'right',
          color: '#484f58',
          fontSize: isMobile ? '0.75rem' : '0.85rem',
          userSelect: 'none',
          borderRight: '1px solid #21262d',
          background: '#090d13',
          minWidth: '32px'
        }}>
          {Array.from({ length: lineCount }).map((_, i) => (
            <div key={i} style={{ height: '1.45rem', lineHeight: '1.45rem' }}>
              {i + 1}
            </div>
          ))}
        </div>

        {/* Code Content */}
        <pre style={{
          margin: 0,
          padding: '1rem',
          color: '#e6edf3',
          fontSize: isMobile ? '0.75rem' : '0.85rem',
          lineHeight: '1.45rem',
          fontFamily: '"Fira Code", monospace',
          whiteSpace: 'pre',
          overflowX: 'auto',
          flex: 1
        }}>
          <code>{activeCode}</code>
        </pre>
      </div>

      {/* Code.org Bridge Explainer Footer */}
      <div style={{
        background: '#161b22',
        borderTop: '1px solid #30363d',
        padding: '0.4rem 0.8rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.7rem',
        color: '#8b949e'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Sparkles size={12} style={{ color: '#38bdf8' }} />
          <span>Real {language === 'python' ? 'Python 3' : 'JavaScript (ES6)'} generated from your visual blocks</span>
        </div>
        <div>
          <span>{lineCount} lines</span>
        </div>
      </div>
    </div>
  );
};

export default CodeInspector;
