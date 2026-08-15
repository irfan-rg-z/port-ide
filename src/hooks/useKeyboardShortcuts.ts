'use client';

import { useEffect } from 'react';

// ============================================================
// Keyboard Shortcuts Hook
// Handles Cmd+K (command palette), Cmd+B (sidebar),
// Cmd+` (terminal) — mirrors real ZED shortcuts
// ============================================================

interface KeyboardShortcuts {
  onToggleCommandPalette: () => void;
  onToggleSidebar: () => void;
  onToggleTerminal: () => void;
}

export function useKeyboardShortcuts({
  onToggleCommandPalette,
  onToggleSidebar,
  onToggleTerminal,
}: KeyboardShortcuts) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMeta = e.metaKey || e.ctrlKey;

      // Cmd+K — Command Palette
      if (isMeta && e.key === 'k') {
        e.preventDefault();
        onToggleCommandPalette();
        return;
      }

      // Cmd+B — Toggle Sidebar
      if (isMeta && e.key === 'b') {
        e.preventDefault();
        onToggleSidebar();
        return;
      }

      // Cmd+` — Toggle Terminal
      if (isMeta && e.key === '`') {
        e.preventDefault();
        onToggleTerminal();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onToggleCommandPalette, onToggleSidebar, onToggleTerminal]);
}
