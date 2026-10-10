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

export const PythonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M11.9 2C8.6 2 6.7 3.4 6.7 5.7V7.5H12V8.3H4.4C2.1 8.3 1 10.2 1 12.6C1 15.2 2.6 16.8 5.1 16.8H6.5V14.6C6.5 12.3 8.3 10.5 10.6 10.5H15.2C16.5 10.5 17.5 9.5 17.5 8.2V5.7C17.5 3.4 15.6 2 11.9 2ZM9.3 4C9.8 4 10.2 4.4 10.2 4.9C10.2 5.4 9.8 5.8 9.3 5.8C8.8 5.8 8.4 5.4 8.4 4.9C8.4 4.4 8.8 4 9.3 4Z" fill="#38BDF8"/>
    <path d="M12.1 22C15.4 22 17.3 20.6 17.3 18.3V16.5H12V15.7H19.6C21.9 15.7 23 13.8 23 11.4C23 8.8 21.4 7.2 18.9 7.2H17.5V9.4C17.5 11.7 15.7 13.5 13.4 13.5H8.8C7.5 13.5 6.5 14.5 6.5 15.8V18.3C6.5 20.6 8.4 22 12.1 22ZM14.7 20C14.2 20 13.8 19.6 13.8 19.1C13.8 18.6 14.2 18.2 14.7 18.2C15.2 18.2 15.6 18.6 15.6 19.1C15.6 19.6 15.2 20 14.7 20Z" fill="#FBBF24"/>
  </svg>
);

export const JavaScriptIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ borderRadius: '2.5px', flexShrink: 0 }}>
    <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
    <path d="M6 16.5C6.5 17.5 7.5 18 8.8 18C10.5 18 11.5 17 11.5 15V8H9.3V15C9.3 15.8 8.8 16.2 8.1 16.2C7.3 16.2 6.8 15.7 6.5 14.8L6 16.5ZM13.2 16.2C13.8 17.3 15 18 16.7 18C18.6 18 20 16.8 20 15.2C20 13.5 18.9 12.8 17.2 12.1C16 11.5 15.3 11.1 15.3 10.2C15.3 9.4 16 8.7 17.1 8.7C18.1 8.7 18.8 9.2 19.3 10.1L20.1 8.8C19.4 7.7 18.3 7.2 17 7.2C15.2 7.2 13.9 8.3 13.9 10C13.9 11.6 14.9 12.3 16.6 13C17.9 13.6 18.6 14.1 18.6 15.1C18.6 16 17.8 16.7 16.6 16.7C15.3 16.7 14.4 15.9 13.8 14.8L13.2 16.2Z" fill="#000000"/>
  </svg>
);

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
            title="Python 3"
            aria-label="Python"
            style={{
              background: language === 'python' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255,255,255,0.06)',
              color: language === 'python' ? '#38bdf8' : '#94a3b8',
              border: language === 'python' ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid transparent',
              borderRadius: '8px',
              padding: isMobile ? '4px 8px' : '4px 12px',
              fontWeight: 800,
              fontSize: isMobile ? '0.72rem' : '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.15s ease'
            }}
          >
            <PythonIcon />
            {!isMobile && <span>Python</span>}
          </button>

          <button
            type="button"
            onClick={() => { sounds.playClick(); setLanguage('javascript'); }}
            title="JavaScript (ES6)"
            aria-label="JavaScript"
            style={{
              background: language === 'javascript' ? '#fbbf24' : 'rgba(255,255,255,0.06)',
              color: language === 'javascript' ? '#0f172a' : '#94a3b8',
              border: 'none',
              borderRadius: '8px',
              padding: isMobile ? '4px 8px' : '4px 12px',
              fontWeight: 800,
              fontSize: isMobile ? '0.72rem' : '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.15s ease'
            }}
          >
            <JavaScriptIcon />
            {!isMobile && <span>JavaScript</span>}
          </button>
        </div>

        {/* Action Tools */}
        <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
          <button
            type="button"
            onClick={handleCopy}
            title={copied ? "Copied to clipboard!" : "Copy code"}
            aria-label="Copy"
            style={{
              background: copied ? '#22c55e' : 'rgba(255,255,255,0.08)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '8px',
              padding: isMobile ? '4px 7px' : '4px 10px',
              fontSize: isMobile ? '0.7rem' : '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {!isMobile && <span>{copied ? 'Copied!' : 'Copy'}</span>}
          </button>

          <button
            type="button"
            onClick={handleDownload}
            title={`Download ${language === 'python' ? '.py' : '.js'} file`}
            aria-label="Download"
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '8px',
              padding: isMobile ? '4px 7px' : '4px 10px',
              fontSize: isMobile ? '0.7rem' : '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            <Download size={14} />
            {!isMobile && <span>Download</span>}
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
