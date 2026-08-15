'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { allFiles, fileTree, type FileTreeNode } from '@/data/fileSystem';
import { getFileIconComponent } from './Icons';

// ============================================================
// CommandPalette — Cmd+K quick navigation
// A searchable overlay for quickly jumping to any file
// ============================================================

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onFileSelect: (fileId: string) => void;
}

interface PaletteItem {
  id: string;
  label: string;
  path: string;
  fileType: string;
}

// Flatten the file tree into a searchable list
function flattenTree(nodes: FileTreeNode[], parentPath: string = ''): PaletteItem[] {
  const items: PaletteItem[] = [];
  for (const node of nodes) {
    const currentPath = parentPath ? `${parentPath}/${node.name}` : node.name;
    if (node.type === 'file') {
      const file = allFiles[node.id];
      items.push({
        id: node.id,
        label: node.name,
        path: file?.path || currentPath,
        fileType: node.fileType || '',
      });
    }
    if (node.children) {
      items.push(...flattenTree(node.children, currentPath));
    }
  }
  return items;
}

function CommandPalette({ isOpen, onClose, onFileSelect }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const allItems = useMemo(() => flattenTree(fileTree), []);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return allItems;
    const lowerQuery = query.toLowerCase();
    return allItems.filter(
      item =>
        item.label.toLowerCase().includes(lowerQuery) ||
        item.path.toLowerCase().includes(lowerQuery)
    );
  }, [query, allItems]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      // Small delay to ensure the input is rendered
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [isOpen]);

  // Reset selected index when filter changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredItems.length]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev =>
          prev < filteredItems.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev =>
          prev > 0 ? prev - 1 : filteredItems.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          onFileSelect(filteredItems[selectedIndex].id);
          onClose();
        }
        break;
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
    }
  }, [filteredItems, selectedIndex, onFileSelect, onClose]);

  // Handle item click
  const handleItemClick = useCallback((id: string) => {
    onFileSelect(id);
    onClose();
  }, [onFileSelect, onClose]);

  if (!isOpen) return null;

  return (
    <div className="command-palette-overlay" onClick={onClose}>
      <div
        className="command-palette"
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <input
          ref={inputRef}
          className="command-palette-input"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search files..."
          autoComplete="off"
          spellCheck={false}
        />
        <div className="command-palette-results">
          {filteredItems.length === 0 ? (
            <div className="command-palette-empty">
              No files matching &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`command-palette-item${
                  index === selectedIndex ? ' active' : ''
                }`}
                onClick={() => handleItemClick(item.id)}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <span className="command-palette-item-icon">{getFileIconComponent(item.fileType, 14)}</span>
                <div className="command-palette-item-text">
                  <span className="command-palette-item-label">{item.label}</span>
                  <span className="command-palette-item-path">{item.path}</span>
                </div>
                {index === 0 && query === '' && (
                  <span className="command-palette-item-shortcut">Enter ↵</span>
                )}
              </div>
            ))
          )}
        </div>
        <div className="command-palette-footer">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CommandPalette);
