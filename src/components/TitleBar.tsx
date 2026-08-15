'use client';

import React from 'react';
import { FolderIcon, GitBranchIcon, GitWorktreeIcon } from './Icons';

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
        {/*<FolderIcon size={14} color="var(--syn-type)" />*/}
        <span className="titlebar-project-name">port-ide</span>
      </div>

      {/* Main Branch Icon: ⎇ main / ⑂ content/port-ide */}
      <span className="titlebar-branch">
        <GitWorktreeIcon size={12} />
        <span>main</span>
      </span>

      <span className="titlebar-sep">/</span>

      <span className="titlebar-branch feature">
        <GitBranchIcon size={12} />
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


