'use client';

import React from 'react';
import {
  GitBranchIcon,
  FileTreeIcon,
  SearchIcon,
  BoltIcon,
  CheckIcon,
  CollaboratorsIcon,
  TerminalIcon,
  StarIcon,
  ListIcon,
  DebugIcon,
  SplitHorizontalIcon,
} from './Icons';

interface StatusBarProps {
  activeFileName: string;
  activeFileType: string;
  cursorLine: number;
  cursorCol: number;
  onToggleSidebar: () => void;
  onToggleTerminal: () => void;
  sidebarOpen: boolean;
  terminalOpen: boolean;
}

function StatusBar({
  activeFileType,
  cursorLine,
  cursorCol,
  onToggleSidebar,
  onToggleTerminal,
  sidebarOpen,
  terminalOpen,
}: StatusBarProps) {
  return (
    <div className="statusbar" role="status" aria-label="Editor status">
      {/* Left section — Panel toggles */}
      <div className="statusbar-section">
        <button
          className={`statusbar-btn${sidebarOpen ? ' active' : ''}`}
          onClick={onToggleSidebar}
          title="Toggle File Explorer (⌘B)"
          aria-label="Toggle sidebar"
        >
          <FileTreeIcon size={14} />
        </button>

        <button className="statusbar-btn" title="Git">
          <GitBranchIcon size={14} />
        </button>

        <button className="statusbar-btn" title="Outline">
          <ListIcon size={14} />
        </button>

        <button className="statusbar-btn" title="Debugger">
          <DebugIcon size={14} />
        </button>

        <span className="statusbar-divider" />

        <button className="statusbar-btn" title="Search (⌘K)">
          <SearchIcon size={14} />
        </button>

        <button className="statusbar-btn" title="AI Assistant">
          <BoltIcon size={14} />
        </button>

        <button className="statusbar-btn statusbar-success" title="No errors">
          <CheckIcon size={14} />
        </button>
      </div>

      {/* Right section — Info + toggles */}
      <div className="statusbar-section">
        <span className="statusbar-item" title="Cursor position">
          {cursorLine}:{cursorCol}
        </span>

        <span className="statusbar-item statusbar-lang-label" title="File language">
          {activeFileType}
        </span>

        <span className="statusbar-item statusbar-zed-label" title="Zed Predict">
          Z»
        </span>

        <span className="statusbar-divider" />

        <button
          className={`statusbar-btn${terminalOpen ? ' active' : ''}`}
          onClick={onToggleTerminal}
          title={terminalOpen ? 'Close Terminal (⌘`)' : 'Open Terminal (⌘`)'}
          aria-label="Toggle terminal"
        >
          <TerminalIcon size={14} />
        </button>

        <span className="statusbar-divider" />

        <button className="statusbar-btn" title="Collaborators">
          <CollaboratorsIcon size={14} />
        </button>

        <button className="statusbar-btn" title="Assistant / Pin">
          <StarIcon size={14} />
        </button>

        <span className="statusbar-divider" />

        <button className="statusbar-btn" title="Split View">
          <SplitHorizontalIcon size={14} />
        </button>
      </div>
    </div>
  );
}


export default React.memo(StatusBar);
