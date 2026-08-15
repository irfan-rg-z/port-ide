'use client';

import React, { useCallback } from 'react';
import { allFiles } from '@/data/fileSystem';
import {
  PlusIcon,
  SplitHorizontalIcon,
  CloseIcon,
  SearchIcon,
} from './Icons';

// ============================================================
// TabBar — Separate row below title bar
// Matches ZED: ← → nav arrows | tabs | + split expand actions
// ============================================================

// Maximize icon (diagonal arrows expanding)
const MaximizeIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12L12 4M9 4h3v3M7 12H4V9" />
  </svg>
);

interface TabBarProps {
  openTabs: string[];
  activeFileId: string;
  onTabClick: (fileId: string) => void;
  onTabClose: (fileId: string) => void;
}

function TabBar({ openTabs, activeFileId, onTabClick, onTabClose }: TabBarProps) {
  const handleClose = useCallback((e: React.MouseEvent, fileId: string) => {
    e.stopPropagation();
    onTabClose(fileId);
  }, [onTabClose]);

  return (
    <div className="tabbar" role="tablist" aria-label="Open files">
      {/* Nav Arrows */}
      <div className="tabbar-nav">
        {/*<button className="tabbar-nav-btn" aria-label="Go back">
          <ArrowLeftIcon size={14} />
        </button>
        <button className="tabbar-nav-btn" aria-label="Go forward">
          <ArrowRightIcon size={14} />
        </button>*/}
      </div>

      {/* Tabs */}
      <div className="tabbar-tabs-scroll">
        {openTabs.map(tabId => {
          const file = allFiles[tabId];
          if (!file) return null;
          const isActive = tabId === activeFileId;

          return (
            <div
              key={tabId}
              className={`tab${isActive ? ' active' : ''}`}
              onClick={() => onTabClick(tabId)}
              role="tab"
              aria-selected={isActive}
              aria-label={file.name}
            >
              <span className="tab-name">{file.name}</span>
              {openTabs.length > 1 && (
                <button
                  className="tab-close"
                  onClick={(e) => handleClose(e, tabId)}
                  aria-label={`Close ${file.name}`}
                >
                  <CloseIcon size={10} />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Right Actions: search, +, split, maximize */}
      <div className="tabbar-actions">
        <button className="tabbar-action-btn" title="Search files (⌘K)" aria-label="Search files">
          <SearchIcon size={14} />
        </button>
        <button className="tabbar-action-btn" title="New file" aria-label="New file">
          <PlusIcon size={14} />
        </button>
        <button className="tabbar-action-btn" title="Split editor" aria-label="Split editor">
          <SplitHorizontalIcon size={14} />
        </button>
        <button className="tabbar-action-btn" title="Maximize editor" aria-label="Maximize editor">
          <MaximizeIcon size={14} />
        </button>
      </div>
    </div>
  );
}


export default React.memo(TabBar);
