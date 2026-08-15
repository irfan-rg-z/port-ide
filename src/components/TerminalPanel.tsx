'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { terminalSequence, TERMINAL_PROMPT, TERMINAL_CWD } from '@/data/terminal';
import { TerminalIcon } from './Icons';

// ============================================================
// TerminalPanel — Animated terminal with typing effect
// Shows portfolio info via simulated CLI commands
// ============================================================

interface TerminalPanelProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface RenderedLine {
  type: 'prompt' | 'command' | 'output' | 'blank';
  text: string;
}

function TerminalPanel({ isOpen, onToggle }: TerminalPanelProps) {
  const [renderedLines, setRenderedLines] = useState<RenderedLine[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const animationStarted = useRef(false);

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, []);

  // Type a command character by character
  const typeCommand = useCallback((command: string): Promise<void> => {
    return new Promise((resolve) => {
      let charIndex = 0;
      setIsTyping(true);
      setCurrentCommand('');

      const typeInterval = setInterval(() => {
        if (charIndex < command.length) {
          setCurrentCommand(prev => prev + command[charIndex]);
          charIndex++;
          scrollToBottom();
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          resolve();
        }
      }, 45 + Math.random() * 35); // Slightly randomized typing speed
    });
  }, [scrollToBottom]);

  // Run the full terminal animation sequence
  useEffect(() => {
    if (!isOpen || animationStarted.current) return;
    animationStarted.current = true;

    const runSequence = async () => {
      for (let i = 0; i < terminalSequence.length; i++) {
        const entry = terminalSequence[i];

        // Wait before typing
        await new Promise(r => setTimeout(r, entry.delay || 800));

        // Type the command
        await typeCommand(entry.command);

        // Small pause after typing before showing output
        await new Promise(r => setTimeout(r, 300));

        // Add the command to rendered lines and show output
        setRenderedLines(prev => [
          ...prev,
          { type: 'prompt', text: `${TERMINAL_PROMPT} ${TERMINAL_CWD} %` },
          { type: 'command', text: entry.command },
          ...entry.output.map(line => ({ type: 'output' as const, text: line })),
          { type: 'blank', text: '' },
        ]);
        setCurrentCommand('');
        setSequenceIndex(i + 1);

        // Scroll after output appears
        await new Promise(r => setTimeout(r, 50));
        scrollToBottom();
      }

      setAnimationComplete(true);
    };

    runSequence();
  }, [isOpen, typeCommand, scrollToBottom]);

  // Scroll whenever lines change
  useEffect(() => {
    scrollToBottom();
  }, [renderedLines, currentCommand, scrollToBottom]);

  if (!isOpen) return null;

  return (
    <div className="terminal-panel">
      {/* Terminal tab bar */}
      <div className="terminal-tabs">
        <div className="terminal-tab active">
          <TerminalIcon size={12} />
          <span>terminal — zsh</span>
        </div>
        <div className="terminal-tab">
          <TerminalIcon size={12} />
          <span>terminal — zsh</span>
        </div>
        <div className="terminal-tabs-spacer" />
        <button
          className="terminal-toggle-btn"
          onClick={onToggle}
          aria-label="Toggle terminal"
        >
          ▾
        </button>
      </div>

      {/* Terminal body */}
      <div className="terminal-body" ref={terminalBodyRef}>
        {/* Welcome message */}
        <div className="terminal-welcome">
          <span className="terminal-output">Welcome to irfan-portfolio v2.0.0</span>
        </div>
        <div className="terminal-line-blank">&nbsp;</div>

        {/* Rendered lines from completed commands */}
        {renderedLines.map((line, i) => {
          if (line.type === 'blank') {
            return <div key={i} className="terminal-line-blank">&nbsp;</div>;
          }
          if (line.type === 'prompt') {
            // The prompt line and command are on the same visual line
            // We render prompt + command together in the next iteration
            return null;
          }
          if (line.type === 'command') {
            // Find the prompt line right before this command
            const promptLine = renderedLines[i - 1];
            return (
              <div key={i} className="terminal-line">
                {promptLine && (
                  <span className="terminal-prompt">{promptLine.text} </span>
                )}
                <span className="terminal-command">{line.text}</span>
              </div>
            );
          }
          // Output line
          return (
            <div key={i} className="terminal-line">
              <span className="terminal-output">{line.text}</span>
            </div>
          );
        })}

        {/* Current typing line */}
        {!animationComplete && (
          <div className="terminal-line">
            <span className="terminal-prompt">
              {TERMINAL_PROMPT} {TERMINAL_CWD} %{' '}
            </span>
            <span className="terminal-command">{currentCommand}</span>
            <span className="terminal-cursor" />
          </div>
        )}

        {/* Final prompt after animation completes */}
        {animationComplete && (
          <div className="terminal-line">
            <span className="terminal-prompt">
              {TERMINAL_PROMPT} {TERMINAL_CWD} %{' '}
            </span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(TerminalPanel);
