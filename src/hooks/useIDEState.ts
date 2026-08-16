'use client';

import { useState, useCallback } from 'react';
import { DEFAULT_FILE_ID, DEFAULT_OPEN_TABS } from '@/data/fileSystem';

// ============================================================
// IDE State Management Hook
// Manages tabs, active file, sidebar, terminal, command palette
// ============================================================

export interface IDEState {
  activeFileId: string;
  openTabs: string[];
  sidebarOpen: boolean;
  terminalOpen: boolean;
  commandPaletteOpen: boolean;
  mobileSidebarOpen: boolean;
}

export function useIDEState() {
  const [state, setState] = useState<IDEState>({
    activeFileId: DEFAULT_FILE_ID,
    openTabs: [...DEFAULT_OPEN_TABS],
    sidebarOpen: true,
    terminalOpen: false,
    commandPaletteOpen: false,
    mobileSidebarOpen: false,
  });

  // Open a file — add to tabs if not already open, make it active
  const openFile = useCallback((fileId: string) => {
    setState(prev => ({
      ...prev,
      activeFileId: fileId,
      openTabs: prev.openTabs.includes(fileId)
        ? prev.openTabs
        : [...prev.openTabs, fileId],
      mobileSidebarOpen: false, // Close mobile sidebar on file open
    }));
  }, []);

  // Close a tab — if closing active tab, switch to adjacent tab
  const closeTab = useCallback((fileId: string) => {
    setState(prev => {
      const newTabs = prev.openTabs.filter(id => id !== fileId);
      
      // Don't allow closing the last tab
      if (newTabs.length === 0) return prev;

      let newActiveId = prev.activeFileId;
      if (prev.activeFileId === fileId) {
        // Switch to the tab to the left, or the first tab
        const closedIndex = prev.openTabs.indexOf(fileId);
        newActiveId = newTabs[Math.max(0, closedIndex - 1)] || newTabs[0];
      }

      return {
        ...prev,
        openTabs: newTabs,
        activeFileId: newActiveId,
      };
    });
  }, []);

  // Set active tab
  const setActiveFile = useCallback((fileId: string) => {
    setState(prev => ({ ...prev, activeFileId: fileId }));
  }, []);

  // Toggle sidebar
  const toggleSidebar = useCallback(() => {
    setState(prev => ({ ...prev, sidebarOpen: !prev.sidebarOpen }));
  }, []);

  // Toggle terminal
  const toggleTerminal = useCallback(() => {
    setState(prev => ({ ...prev, terminalOpen: !prev.terminalOpen }));
  }, []);

  // Toggle command palette
  const toggleCommandPalette = useCallback(() => {
    setState(prev => ({ ...prev, commandPaletteOpen: !prev.commandPaletteOpen }));
  }, []);

  // Toggle mobile sidebar
  const toggleMobileSidebar = useCallback(() => {
    setState(prev => ({ ...prev, mobileSidebarOpen: !prev.mobileSidebarOpen }));
  }, []);

  return {
    state,
    openFile,
    closeTab,
    setActiveFile,
    toggleSidebar,
    toggleTerminal,
    toggleCommandPalette,
    toggleMobileSidebar,
  };
}
