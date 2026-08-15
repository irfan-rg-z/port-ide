'use client';

import React from 'react';
import { FolderIcon, GitBranchIcon } from './Icons';

interface TitleBarProps {
  activeFilePath: string;
  onToggleSidebar: () => void;
  onToggleMobileSidebar: () => void;
}

function TitleBar({ activeFilePath, onToggleSidebar, onToggleMobileSidebar }: TitleBarProps) {
  return (
    <div className="titlebar">
      {/* Left: Project Name */}
      <div className="titlebar-project">
        <FolderIcon size={14} color="var(--syn-type)" />
        <span className="titlebar-project-name">port-ide</span>
      </div>

      {/* Branch Breadcrumb: ⎇ main / ↗ feature/... */}
      <span className="titlebar-branch">
        <GitBranchIcon size={12} />
        <span>main</span>
      </span>

      <span className="titlebar-sep">/</span>

      <span className="titlebar-branch feature">
        <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 12L12 4M12 4H6M12 4V10" />
        </svg>
        <span>content/port-ide</span>
      </span>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Top Right: Circular Profile Avatar */}
      <div className="titlebar-avatar-wrapper" title="Irfan">
        <div className="titlebar-avatar">
          <span>I</span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(TitleBar);


