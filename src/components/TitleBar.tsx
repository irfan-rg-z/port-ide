'use client';

import React from 'react';
import { FolderIcon, GitBranchIcon, HamburgerIcon } from './Icons';

// ============================================================
// TitleBar — macOS-style title bar with traffic lights
// Matches ZED exactly: traffic lights → project → branch path
// ============================================================

interface TitleBarProps {
  activeFilePath: string;
  onToggleSidebar: () => void;
  onToggleMobileSidebar: () => void;
}

function TitleBar({ activeFilePath, onToggleSidebar, onToggleMobileSidebar }: TitleBarProps) {
  return (
    <div className="titlebar">
      {/* macOS Traffic Lights */}
      <div className="traffic-lights">
        <div className="traffic-light close" aria-hidden="true" />
        <div className="traffic-light minimize" aria-hidden="true" />
        <div className="traffic-light maximize" aria-hidden="true" />
      </div>

      {/* Project Name */}
      <div className="titlebar-project">
        <FolderIcon size={14} color="var(--syn-type)" />
        <span className="titlebar-project-name">irfan-portfolio</span>
      </div>

      {/* Branch Breadcrumb: ⊹ main / ↗ feature/... */}
      <span className="titlebar-branch">
        <GitBranchIcon size={12} />
        <span>main</span>
      </span>

      <span className="titlebar-sep">/</span>

      <span className="titlebar-branch feature">
        <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 12L12 4M12 4H6M12 4V10" />
        </svg>
        <span>feature/portfolio-v2</span>
      </span>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={onToggleMobileSidebar}
        aria-label="Toggle file explorer"
      >
        <HamburgerIcon size={18} />
      </button>
    </div>
  );
}

export default React.memo(TitleBar);
