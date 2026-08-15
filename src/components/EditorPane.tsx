'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { allFiles, type Token, type CodeLine } from '@/data/fileSystem';

// ============================================================
// EditorPane — The main code editor area
// Renders syntax-highlighted code with line numbers,
// active line tracking, and git blame annotations.
// ============================================================

interface EditorPaneProps {
  activeFileId: string;
}

// Render a single token with its syntax class
const TokenSpan = React.memo(function TokenSpan({ token }: { token: Token }) {
  if (token.type === 'plain' || token.type === 'punctuation') {
    return <span>{token.text}</span>;
  }
  return <span className={`syn-${token.type}`}>{token.text}</span>;
});

// Render a single editor line
const EditorLine = React.memo(function EditorLine({
  line,
  isActive,
  onMouseEnter,
}: {
  line: CodeLine;
  isActive: boolean;
  onMouseEnter: () => void;
}) {
  return (
    <div
      className={`editor-line${isActive ? ' active' : ''}`}
      onMouseEnter={onMouseEnter}
    >
      <span className="line-number">{line.lineNumber}</span>
      <span className="line-content">
        {line.isBlank ? '\n' : (
          <>
            {line.tokens.map((token, i) => (
              <TokenSpan key={i} token={token} />
            ))}
            {line.blameAnnotation && (
              <span className="git-blame">
                &nbsp;&nbsp;&nbsp;&nbsp;{'// '}
                {line.blameAnnotation}
              </span>
            )}
          </>
        )}
      </span>
    </div>
  );
});

function EditorPane({ activeFileId }: EditorPaneProps) {
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const editorRef = useRef<HTMLDivElement>(null);
  const prevFileRef = useRef(activeFileId);

  const file = allFiles[activeFileId];

  // Reset active line and scroll to top when file changes
  useEffect(() => {
    if (prevFileRef.current !== activeFileId) {
      setActiveLineIndex(0);
      if (editorRef.current) {
        editorRef.current.scrollTop = 0;
      }
      prevFileRef.current = activeFileId;
    }
  }, [activeFileId]);

  const handleLineHover = useCallback((index: number) => {
    setActiveLineIndex(index);
  }, []);

  if (!file) {
    return (
      <div className="editor-content" ref={editorRef}>
        <div className="editor-empty-state">
          <span className="editor-empty-icon">📂</span>
          <span className="editor-empty-text">Select a file to begin</span>
        </div>
      </div>
    );
  }

  return (
    <div className="editor-content" ref={editorRef}>
      {file.content.map((line, index) => (
        <EditorLine
          key={`${activeFileId}-${line.lineNumber}`}
          line={line}
          isActive={index === activeLineIndex}
          onMouseEnter={() => handleLineHover(index)}
        />
      ))}
      {/* Extra empty lines at the bottom for natural scroll feel */}
      {Array.from({ length: 8 }, (_, i) => (
        <div key={`empty-${i}`} className="editor-line">
          <span className="line-number">{file.content.length + i + 1}</span>
          <span className="line-content">{'\n'}</span>
        </div>
      ))}
    </div>
  );
}

export default React.memo(EditorPane);
