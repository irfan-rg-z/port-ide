'use client';

import React from 'react';
import { allFiles, type VirtualFile, type Token } from '@/data/fileSystem';
import {
  BuildingIcon,
  GraduationIcon,
  LeafIcon,
  ZapIcon,
  PaletteIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  GlobeIcon,
  LaptopIcon,
  CloudIcon,
  BrainIcon,
  WrenchIcon,
  BoxIcon,
  TagIcon,
  CheckIcon
} from './Icons';

// ============================================================
// PreviewPane — Rich rendered preview of file content
// Like VS Code's markdown preview or ZED's rendered view.
// Each file type gets a custom, beautifully rendered layout.
// ============================================================

interface PreviewPaneProps {
  activeFileId: string;
}

// Helper: extract text from tokens
function extractText(tokens: Token[]): string {
  return tokens.map(t => t.text).join('');
}

// Helper: extract string values (strips quotes)
function extractString(tokens: Token[]): string {
  return tokens
    .filter(t => t.type === 'string')
    .map(t => t.text.replace(/^["']|["']$/g, ''))
    .join('');
}

// ── README Preview ────────────────────────────────────────────
function ReadmePreview() {
  return (
    <div className="preview-content preview-readme">
      <div className="preview-hero">
        <div className="preview-avatar" style={{ overflow: 'hidden' }}>
          {/* TODO: Add your profile image here */}
          <img src="/placeholder-profile.png" alt="Irfan Gulagundi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h1 className="preview-title">Hey, I&apos;m Irfan 👋</h1>
        <p className="preview-subtitle">
          Full-Stack Developer crafting modern web experiences<br />
          with clean architecture and buttery-smooth UX.
        </p>
        <div className="preview-badges">
          <span className="preview-badge badge-green">SDE-1 Frontend Developer</span>
          <span className="preview-badge badge-blue">Zinier Inc.</span>
        </div>
      </div>

      <div className="preview-divider" />

      <div className="preview-section">
        <h2 className="preview-section-title">Current Status</h2>
        <div className="preview-info-grid">
          <div className="preview-info-item">
            <span className="preview-info-icon"><BuildingIcon size={16} /></span>
            <div>
              <span className="preview-info-label">Company</span>
              <span className="preview-info-value">Zinier Inc.</span>
            </div>
          </div>
          <div className="preview-info-item">
            <span className="preview-info-icon"><GraduationIcon size={16} /></span>
            <div>
              <span className="preview-info-label">Education</span>
              <span className="preview-info-value">SDM Institute of Technology, Dharwad</span>
            </div>
          </div>
          <div className="preview-info-item">
            <span className="preview-info-icon"><LeafIcon size={16} /></span>
            <div>
              <span className="preview-info-label">Focus</span>
              <span className="preview-info-value">Scalable systems & pixel-perfect interfaces</span>
            </div>
          </div>
        </div>
      </div>

      <div className="preview-section">
        <h2 className="preview-section-title">What I Do</h2>
        <ul className="preview-list">
          <li><span style={{marginRight: '8px', color: 'var(--text-muted)'}}><BoxIcon size={14}/></span> Clean, maintainable architecture</li>
          <li><span style={{marginRight: '8px', color: 'var(--syn-keyword)'}}><ZapIcon size={14}/></span> High-performance, smooth user experiences</li>
          <li><span style={{marginRight: '8px', color: 'var(--syn-type)'}}><BrainIcon size={14}/></span> Predictable behavior & scalable design</li>
          <li><span style={{marginRight: '8px', color: 'var(--syn-function)'}}><PaletteIcon size={14}/></span> Attention to visual detail</li>
        </ul>
      </div>

      <div className="preview-section">
        <h2 className="preview-section-title">Quick Links</h2>
        <div className="preview-links">
          <a href="mailto:irfanrgulagundi@gmail.com" className="preview-link" target="_blank" rel="noopener noreferrer">
            <span style={{display: 'flex'}}><MailIcon size={14} /></span> irfanrgulagundi@gmail.com
          </a>
          <a href="https://github.com/irfan-rg" className="preview-link" target="_blank" rel="noopener noreferrer">
            <span style={{display: 'flex'}}><GithubIcon size={14} /></span> github.com/irfan-rg
          </a>
          <a href="https://irfan-rg.github.io" className="preview-link" target="_blank" rel="noopener noreferrer">
            <span style={{display: 'flex'}}><LinkedinIcon size={14} /></span> irfan-rg.github.io
          </a>
        </div>
      </div>
    </div>
  );
}

// ── About Preview ─────────────────────────────────────────────
function AboutPreview() {
  return (
    <div className="preview-content preview-about">
      <div className="preview-section">
        <span className="preview-tag">interface Developer</span>
        <h1 className="preview-title" style={{ fontSize: '28px' }}>Irfan Gulagundi</h1>
        <p className="preview-role">SDE-1 Frontend Developer at <strong>Zinier Inc.</strong></p>
      </div>

      <div className="preview-card">
        <h3 className="preview-card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <GraduationIcon size={16} /> Education
        </h3>
        <p className="preview-card-text">B.E. in Computer Science</p>
        <p className="preview-card-sub">SDM Institute of Technology, Dharwad, India</p>
      </div>

      <div className="preview-card">
        <h3 className="preview-card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ZapIcon size={16} /> Passions
        </h3>
        <div className="preview-tags-list">
          <span className="preview-tag-item">Building modern web apps</span>
          <span className="preview-tag-item">Clean architecture</span>
          <span className="preview-tag-item">Pixel-perfect interfaces</span>
          <span className="preview-tag-item">Open-source software</span>
        </div>
      </div>

      <div className="preview-card">
        <h3 className="preview-card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BrainIcon size={16} /> Philosophy
        </h3>
        <blockquote className="preview-quote">
          &ldquo;I believe great software is invisible — it just works, beautifully and predictably.&rdquo;
        </blockquote>
      </div>
    </div>
  );
}

// ── Experience Preview ────────────────────────────────────────
function ExperiencePreview() {
  return (
    <div className="preview-content preview-experience">
      <h2 className="preview-section-title">Experience</h2>

      <div className="preview-timeline">
        <div className="preview-timeline-item">
          <div className="preview-timeline-dot active" />
          <div className="preview-timeline-content">
            <div className="preview-timeline-header">
              <h3>Zinier Inc.</h3>
              <span className="preview-badge badge-green">Current</span>
            </div>
            <p className="preview-timeline-role">SDE-1 Frontend Developer</p>
            <p className="preview-timeline-meta">Full-time · 2025 — Present · Bengaluru, India</p>
            <p className="preview-timeline-desc">
              Building and maintaining enterprise-grade field service management applications
              with React, TypeScript, and modern frontend architecture.
            </p>
            <ul className="preview-highlights">
              <li>Working on frontend-core design system & components</li>
              <li>Contributing to design token migration initiatives</li>
              <li>Building accessible, performant UI at scale</li>
            </ul>
            <div className="preview-tech-stack">
              <span>React</span><span>TypeScript</span><span>Storybook</span>
              <span>Design Tokens</span><span>CSS Modules</span>
            </div>
          </div>
        </div>
      </div>

      <div className="preview-divider" />

      <h2 className="preview-section-title">Education</h2>
      <div className="preview-timeline">
        <div className="preview-timeline-item">
          <div className="preview-timeline-dot" />
          <div className="preview-timeline-content">
            <h3>SDM Institute of Technology</h3>
            <p className="preview-timeline-role">B.E. Computer Science</p>
            <p className="preview-timeline-meta">2021 — 2025 · Dharwad, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Skills Preview ────────────────────────────────────────────
function SkillsPreview() {
  const categories = [
    {
      title: 'Core Languages',
      icon: <LaptopIcon size={16} />,
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++'],
      color: 'var(--syn-keyword)',
    },
    {
      title: 'Frontend Ecosystem',
      icon: <PaletteIcon size={16} />,
      items: ['React.js', 'Next.js', 'HTML5 / CSS3', 'Tailwind CSS', 'Framer Motion'],
      color: 'var(--syn-type)',
    },
    {
      title: 'Backend & Cloud',
      icon: <CloudIcon size={16} />,
      items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'AWS', 'Google Cloud'],
      color: 'var(--syn-string)',
    },
    {
      title: 'Data & AI',
      icon: <BrainIcon size={16} />,
      items: ['Machine Learning', 'Predictive Modeling', 'Big Data (Hadoop, Spark)'],
      color: 'var(--syn-constant)',
    },
    {
      title: 'DevOps & Tools',
      icon: <WrenchIcon size={16} />,
      items: ['Git / GitHub', 'Docker', 'Vercel', 'Linux / Ubuntu', 'VS Code', 'Zed'],
      color: 'var(--syn-operator)',
    },
  ];

  return (
    <div className="preview-content preview-skills">
      <h2 className="preview-section-title">Technical Arsenal</h2>
      <div className="preview-skills-grid">
        {categories.map(cat => (
          <div key={cat.title} className="preview-skill-card" style={{ '--accent': cat.color } as React.CSSProperties}>
            <h3 className="preview-skill-title">
              <span style={{display: 'flex'}}>{cat.icon}</span> {cat.title}
            </h3>
            <div className="preview-skill-items">
              {cat.items.map(item => (
                <span key={item} className="preview-skill-item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Project Preview (generic for all project files) ───────────
function ProjectPreview({ file }: { file: VirtualFile }) {
  // Parse project info from tokens
  const lines = file.content;
  let projectName = file.name.replace('.tsx', '');
  let description = '';
  const highlights: string[] = [];
  let techLine = '';

  for (const line of lines) {
    const text = extractText(line.tokens);
    if (text.includes('<Title>')) {
      projectName = text.replace(/<\/?Title>/g, '').trim();
    }
    if (text.includes('<Description>') || (description && !text.includes('</Description>'))) {
      const str = extractString(line.tokens);
      if (str) description += (description ? ' ' : '') + str;
    }
    if (text.includes('<Point>')) {
      const str = extractString(line.tokens);
      if (str) highlights.push(str);
    }
    if (line.tokens.some(t => t.type === 'string') && description && highlights.length > 0 && !text.includes('<Point>') && !text.includes('<Description>')) {
      const str = extractString(line.tokens);
      if (str && str.includes(',')) techLine = str;
    }
  }

  const techItems = techLine ? techLine.split(',').map(s => s.replace(/"/g, '').trim()).filter(Boolean) : [];

  return (
    <div className="preview-content preview-project">
      <div className="preview-project-header">
        <h1 className="preview-project-name">{projectName}</h1>
        <span className="preview-badge badge-blue">.tsx</span>
      </div>

      <div className="preview-project-image-placeholder" style={{ 
        width: '100%', 
        height: '240px', 
        backgroundColor: 'var(--bg-elevated)', 
        borderRadius: '8px',
        border: '1px dashed var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px',
        color: 'var(--text-muted)'
      }}>
        {/* TODO: Add your project screenshot image here */}
        <span>[Project Screenshot Placeholder]</span>
      </div>

      {description && (
        <p className="preview-project-desc">{description}</p>
      )}

      {highlights.length > 0 && (
        <div className="preview-section">
          <h3 className="preview-card-title"><span style={{marginRight: '8px'}}><ZapIcon size={14}/></span> Highlights</h3>
          <ul className="preview-highlights">
            {highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      )}

      {techItems.length > 0 && (
        <div className="preview-section">
          <h3 className="preview-card-title"><span style={{marginRight: '8px'}}><WrenchIcon size={14}/></span> Tech Stack</h3>
          <div className="preview-tech-stack">
            {techItems.map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Contact Preview ───────────────────────────────────────────
function ContactPreview() {
  return (
    <div className="preview-content preview-contact">
      <h2 className="preview-section-title">Let&apos;s Connect!</h2>
      <p className="preview-subtitle" style={{ marginBottom: '24px' }}>
        Whether it&apos;s about a project, an opportunity, or just to say hi — I&apos;d love to hear from you.
      </p>

      <div className="preview-contact-grid">
        <a href="mailto:irfanrgulagundi@gmail.com" className="preview-contact-card" target="_blank" rel="noopener noreferrer">
          <span className="preview-contact-icon"><MailIcon size={20} /></span>
          <span className="preview-contact-label">Email</span>
          <span className="preview-contact-value">irfanrgulagundi@gmail.com</span>
        </a>
        <a href="https://github.com/irfan-rg" className="preview-contact-card" target="_blank" rel="noopener noreferrer">
          <span className="preview-contact-icon"><GithubIcon size={20} /></span>
          <span className="preview-contact-label">GitHub</span>
          <span className="preview-contact-value">irfan-rg</span>
        </a>
        <a href="https://irfan-rg.github.io" className="preview-contact-card" target="_blank" rel="noopener noreferrer">
          <span className="preview-contact-icon"><LinkedinIcon size={20} /></span>
          <span className="preview-contact-label">LinkedIn</span>
          <span className="preview-contact-value">irfan-rg</span>
        </a>
        <a href="https://irfanrg.dev" className="preview-contact-card" target="_blank" rel="noopener noreferrer">
          <span className="preview-contact-icon"><GlobeIcon size={20} /></span>
          <span className="preview-contact-label">Portfolio</span>
          <span className="preview-contact-value">irfanrg.dev</span>
        </a>
      </div>
    </div>
  );
}

// ── Env Preview ───────────────────────────────────────────────
function EnvPreview() {
  const vars = [
    { key: 'DEVELOPER_NAME', val: 'Irfan Gulagundi', section: 'Identity' },
    { key: 'DEVELOPER_ALIAS', val: 'irfan', section: 'Identity' },
    { key: 'GITHUB_URL', val: 'github.com/irfangulagundi', section: 'Social Links', link: 'https://github.com/irfangulagundi' },
    { key: 'LINKEDIN_URL', val: 'linkedin.com/in/irfangulagundi', section: 'Social Links', link: 'https://linkedin.com/in/irfangulagundi' },
    { key: 'EMAIL', val: 'irfanrgulagundi@gmail.com', section: 'Social Links', link: 'mailto:irfanrgulagundi@gmail.com' },
    { key: 'HIRING_STATUS', val: 'employed_and_loving_it', section: 'Secret 🤫' },
    { key: 'COFFEE_PREFERENCE', val: 'black, no sugar, yes code', section: 'Secret 🤫' },
    { key: 'FAVORITE_EDITOR', val: 'Zed', section: 'Secret 🤫' },
    { key: 'DARK_MODE', val: 'always', section: 'Secret 🤫' },
  ];

  const sections = [...new Set(vars.map(v => v.section))];

  return (
    <div className="preview-content preview-env">
      <h2 className="preview-section-title">Environment Variables</h2>
      <p className="preview-subtitle" style={{ marginBottom: '24px', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '6px' }}>
        <CheckIcon size={14} color="var(--syn-operator)" /> Do not commit to version control!
      </p>

      {sections.map(section => (
        <div key={section} className="preview-section" style={{ marginBottom: '20px' }}>
          <h3 className="preview-card-title">{section}</h3>
          <div className="preview-env-list">
            {vars.filter(v => v.section === section).map(v => (
              <div key={v.key} className="preview-env-item">
                <span className="preview-env-key">{v.key}</span>
                <span className="preview-env-eq">=</span>
                {'link' in v && v.link ? (
                  <a href={v.link} className="preview-env-val preview-env-link" target="_blank" rel="noopener noreferrer">{v.val}</a>
                ) : (
                  <span className="preview-env-val">{v.val}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Package.json Preview ──────────────────────────────────────
function PackageJsonPreview() {
  return (
    <div className="preview-content preview-package">
      <div className="preview-project-header">
        <h1 className="preview-project-name">irfan-portfolio</h1>
        <span className="preview-badge badge-green">v2.0.0</span>
      </div>
      <p className="preview-project-desc">
        Portfolio of Irfan Gulagundi — Full-Stack Developer & SDE-1 at Zinier Inc.
      </p>

      <div className="preview-card">
        <h3 className="preview-card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BoxIcon size={14} /> Scripts
        </h3>
        <div className="preview-env-list">
          <div className="preview-env-item"><span className="preview-env-key">dev</span><span className="preview-env-eq">→</span><span className="preview-env-val">next dev</span></div>
          <div className="preview-env-item"><span className="preview-env-key">build</span><span className="preview-env-eq">→</span><span className="preview-env-val">next build</span></div>
          <div className="preview-env-item"><span className="preview-env-key">start</span><span className="preview-env-eq">→</span><span className="preview-env-val">next start</span></div>
          <div className="preview-env-item"><span className="preview-env-key">lint</span><span className="preview-env-eq">→</span><span className="preview-env-val">next lint</span></div>
        </div>
      </div>

      <div className="preview-card">
        <h3 className="preview-card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TagIcon size={14} /> Keywords
        </h3>
        <div className="preview-tags-list">
          {['portfolio', 'frontend', 'react', 'nextjs', 'typescript', 'zed-ide'].map(kw => (
            <span key={kw} className="preview-tag-item">{kw}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Preview Dispatcher ───────────────────────────────────
function PreviewPane({ activeFileId }: PreviewPaneProps) {
  const file = allFiles[activeFileId];

  if (!file) {
    return (
      <div className="preview-content">
        <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '48px' }}>
          No preview available
        </p>
      </div>
    );
  }

  switch (activeFileId) {
    case 'readme':     return <ReadmePreview />;
    case 'about':      return <AboutPreview />;
    case 'experience': return <ExperiencePreview />;
    case 'skills':     return <SkillsPreview />;
    case 'contact':    return <ContactPreview />;
    case 'env':        return <EnvPreview />;
    case 'packagejson': return <PackageJsonPreview />;
    default:
      // Project files
      if (file.path.includes('projects/')) {
        return <ProjectPreview file={file} />;
      }
      return (
        <div className="preview-content">
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '48px' }}>
            No preview available for this file type
          </p>
        </div>
      );
  }
}

export default React.memo(PreviewPane);
