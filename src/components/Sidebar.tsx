'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { fileTree, type FileTreeNode, type FileType } from '@/data/fileSystem';
import { FolderIcon, FolderOpenIcon, ChevronRight, getFileIconComponent } from './Icons';

// ============================================================
// Sidebar — File explorer with expandable tree
// Renders the virtual file system like ZED's sidebar
// ============================================================

interface SidebarProps {
  activeFileId: string;
  onFileClick: (fileId: string) => void;
  isOpen: boolean;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

function Sidebar({ activeFileId, onFileClick, isOpen, isMobileOpen, onCloseMobile }: SidebarProps) {
  // Initialize open folders from tree defaults
  const defaultOpenFolders = useMemo(() => {
    const result: Record<string, boolean> = {};
    function walk(nodes: FileTreeNode[]) {
      for (const node of nodes) {
        if (node.type === 'folder') {
          result[node.id] = node.isOpen ?? false;
          if (node.children) walk(node.children);
        }
      }
    }
    walk(fileTree);
    return result;
  }, []);

  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>(defaultOpenFolders);

  const toggleFolder = useCallback((folderId: string) => {
    setOpenFolders(prev => ({ ...prev, [folderId]: !prev[folderId] }));
  }, []);

  // Recursive tree renderer
  const renderNode = useCallback((node: FileTreeNode, depth: number): React.ReactNode => {
    const paddingLeft = depth * 16 + 8;

    if (node.type === 'folder') {
      const isExpanded = openFolders[node.id] ?? false;
      return (
        <React.Fragment key={node.id}>
          <div
            className="file-tree-item file-tree-folder"
            style={{ paddingLeft: `${paddingLeft}px` }}
            onClick={() => toggleFolder(node.id)}
            role="treeitem"
            aria-expanded={isExpanded}
          >
            <span className={`folder-chevron${isExpanded ? ' open' : ''}`}>
              <ChevronRight size={11} />
            </span>
            {isExpanded
              ? <FolderOpenIcon size={15} />
              : <FolderIcon size={15} />
            }
            <span>{node.name}</span>
          </div>
          {isExpanded && node.children?.map(child => renderNode(child, depth + 1))}
        </React.Fragment>
      );
    }

    // File node
    const isActive = node.id === activeFileId;

    return (
      <div
        key={node.id}
        className={`file-tree-item${isActive ? ' active' : ''}`}
        style={{ paddingLeft: `${paddingLeft + 12}px` }}
        onClick={() => onFileClick(node.id)}
        role="treeitem"
        aria-selected={isActive}
      >
        {getFileIconComponent(node.fileType || '', 14, node.name)}
        <span>{node.name}</span>
      </div>
    );
  }, [activeFileId, openFolders, onFileClick, toggleFolder]);

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`sidebar-overlay${isMobileOpen ? ' open' : ''}`}
        onClick={onCloseMobile}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`sidebar${isMobileOpen ? ' open' : ''}`}
        role="tree"
        aria-label="File Explorer"
      >
        <div className="sidebar-header">Explorer</div>
        {fileTree.map(node => renderNode(node, 0))}
      </aside>
    </>
  );
}

export default React.memo(Sidebar);
