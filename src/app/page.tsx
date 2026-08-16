'use client';

import React, { useMemo, useState } from 'react';
import { allFiles } from '@/data/fileSystem';
import { useIDEState } from '@/hooks/useIDEState';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';

import TitleBar from '@/components/TitleBar';
import Sidebar from '@/components/Sidebar';
import TabBar from '@/components/TabBar';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditorPane from '@/components/EditorPane';
import PreviewPane from '@/components/PreviewPane';
import TerminalPanel from '@/components/TerminalPanel';
import StatusBar from '@/components/StatusBar';
import CommandPalette from '@/components/CommandPalette';
import { CodeIcon, EyeIcon } from '@/components/Icons';

// ============================================================
// IDE Portfolio — Main Page
// Assembles all IDE components into the full layout
// ============================================================

export default function IDEPortfolio() {
  const {
    state,
    openFile,
    closeTab,
    setActiveFile,
    toggleSidebar,
    toggleTerminal,
    toggleCommandPalette,
    toggleMobileSidebar,
  } = useIDEState();

  // Editor mode: 'code' or 'preview'
  const [editorMode, setEditorMode] = useState<'code' | 'preview'>('preview');

  // Set default mode based on file type
  React.useEffect(() => {
    if (state.activeFileId === 'env' || state.activeFileId === 'packagejson') {
      setEditorMode('code');
    } else {
      setEditorMode('preview');
    }
  }, [state.activeFileId]);

  // Register keyboard shortcuts
  useKeyboardShortcuts({
    onToggleCommandPalette: toggleCommandPalette,
    onToggleSidebar: toggleSidebar,
    onToggleTerminal: toggleTerminal,
  });

  // Get active file info
  const activeFile = useMemo(
    () => allFiles[state.activeFileId],
    [state.activeFileId]
  );

  // File type to language display name
  const fileLanguage = useMemo(() => {
    if (!activeFile) return 'Plain Text';
    const langMap: Record<string, string> = {
      ts: 'TypeScript',
      tsx: 'TypeScript React',
      json: 'JSON',
      md: 'Markdown',
      env: 'Environment',
      config: 'TypeScript',
    };
    return langMap[activeFile.type] || 'Plain Text';
  }, [activeFile]);

  // Cursor position (simulated — uses line count of active file)
  const cursorLine = activeFile ? Math.min(4, activeFile.content.length) : 1;
  const cursorCol = 20;

  return (
    <>
      <div
        className={`ide-container${!state.sidebarOpen ? ' sidebar-collapsed' : ''}${!state.terminalOpen ? ' terminal-collapsed' : ''}`}
      >
        {/* Title Bar */}
        <TitleBar
          activeFilePath={activeFile?.path || ''}
          onToggleSidebar={toggleSidebar}
          onToggleMobileSidebar={toggleMobileSidebar}
        />

        {/* Sidebar — File Explorer */}
        <Sidebar
          activeFileId={state.activeFileId}
          onFileClick={openFile}
          isOpen={state.sidebarOpen}
          isMobileOpen={state.mobileSidebarOpen}
          onCloseMobile={toggleMobileSidebar}
        />

        {/* Tab Bar */}
        <TabBar
          openTabs={state.openTabs}
          activeFileId={state.activeFileId}
          onTabClick={setActiveFile}
          onTabClose={closeTab}
        />

        {/* Main Editor Area */}
        <div className="editor-area">
          {/* Breadcrumbs + Mode Toggle */}
          <div className="breadcrumbs-row">
            <Breadcrumbs filePath={activeFile?.path || ''} />
            <div className="editor-mode-toggle">
              <button
                className={`editor-mode-btn${editorMode === 'code' ? ' active' : ''}`}
                onClick={() => setEditorMode('code')}
                title="View source code"
              >
                <CodeIcon size={13} />
                <span>Code</span>
              </button>
              <button
                className={`editor-mode-btn${editorMode === 'preview' ? ' active' : ''}`}
                onClick={() => setEditorMode('preview')}
                title="View rendered preview"
              >
                <EyeIcon size={13} />
                <span>Preview</span>
              </button>
            </div>
          </div>

          {/* Editor or Preview Content */}
          {editorMode === 'code' ? (
            <EditorPane activeFileId={state.activeFileId} />
          ) : (
            <PreviewPane activeFileId={state.activeFileId} />
          )}

          {/* Terminal Panel */}
          <TerminalPanel
            isOpen={state.terminalOpen}
            onToggle={toggleTerminal}
          />
        </div>

        {/* Status Bar */}
        <StatusBar
          activeFileName={activeFile?.name || ''}
          activeFileType={fileLanguage}
          cursorLine={cursorLine}
          cursorCol={cursorCol}
          onToggleSidebar={toggleSidebar}
          onToggleTerminal={toggleTerminal}
          sidebarOpen={state.sidebarOpen}
          terminalOpen={state.terminalOpen}
        />
      </div>

      {/* Command Palette Overlay */}
      <CommandPalette
        isOpen={state.commandPaletteOpen}
        onClose={toggleCommandPalette}
        onFileSelect={openFile}
      />

      {/* Keyboard shortcut hint — shows briefly on first visit */}
      <div className="shortcut-hint" role="status" aria-live="polite">
        press <span style={{color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '2px 6px' }}>⌘ K</span> to search files
      </div>
    </>
  );
}
