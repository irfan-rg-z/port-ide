'use client';

import React from 'react';
import { SearchIcon, ArrowLeftIcon, ArrowRightIcon } from './Icons';

// ============================================================
// Breadcrumbs — File path navigation with nav arrows
// Shows path segments separated by › like ZED's breadcrumbs
// ============================================================

interface BreadcrumbsProps {
  filePath: string;
}

function Breadcrumbs({ filePath }: BreadcrumbsProps) {
  const segments = filePath.split('/').filter(Boolean);

  return (
    <div className="breadcrumbs" aria-label="File path">
      {/* Navigation arrows (like ZED's ← → next to breadcrumbs) */}
      <div className="breadcrumbs-nav" aria-hidden="true">
        <button className="breadcrumbs-nav-btn" title="Go Back">
          <ArrowLeftIcon size={14} color="var(--text-muted)" />
        </button>
        <button className="breadcrumbs-nav-btn" title="Go Forward">
          <ArrowRightIcon size={14} color="var(--text-muted)" />
        </button>
      </div>

      <div className="breadcrumb-path">
        {segments.map((segment, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="breadcrumb-separator" aria-hidden="true">›</span>
            )}
            <span className="breadcrumb-item">{segment}</span>
          </React.Fragment>
        ))}
      </div>

      {/* Right-side actions */}
      <div className="breadcrumbs-actions" aria-hidden="true">
        <button className="breadcrumbs-action-btn" title="Search in file">
          <SearchIcon size={13} color="var(--text-muted)" />
        </button>
      </div>
    </div>
  );
}

export default React.memo(Breadcrumbs);
