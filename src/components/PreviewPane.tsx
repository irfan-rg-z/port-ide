'use client';

import React from 'react';
import { allFiles, type VirtualFile, type Token } from '@/data/fileSystem';
import { contactFile } from '@/data/fileSystem';
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
  const aboutFile = allFiles['about'];
  const readmeFile = allFiles['readme'];
  const aboutText = aboutFile ? aboutFile.content.map(l => extractText(l.tokens)).join('\n') : '';
  const readmeText = readmeFile ? readmeFile.content.map(l => extractText(l.tokens)).join('\n') : '';

  const roleMatch = aboutText.match(/role:\s*["']([^"']+)["']/);
  const companyMatch = aboutText.match(/company:\s*["']([^"']+)["']/);
  const nameMatch = aboutText.match(/name:\s*["']([^"']+)["']/);
  const degreeMatch = aboutText.match(/degree:\s*["']([^"']+)["']/);
  const instMatch = aboutText.match(/institution:\s*["']([^"']+)["']/);

  const name = nameMatch ? nameMatch[1] : 'Irfan Gulagundi';
  const role = roleMatch ? roleMatch[1] : 'Full-Stack Developer';
  const company = companyMatch ? companyMatch[1] : 'Zinier Inc.';
  const education = `${degreeMatch ? degreeMatch[1] : 'B.E. Computer Science'} — ${instMatch ? instMatch[1] : 'SDM Institute of Technology, Dharwad'}`;

  // Extract projects list from readme text
  const projectsSection = readmeText.split('Projects I Built')[1]?.split('Contact')[0] || '';
  const projectLines = projectsSection.split('\n').filter(l => l.trim().startsWith('-')).map(l => l.replace(/^- /, '').trim());

  return (
    <div className="preview-content preview-readme">
      <div className="preview-hero">
        <div className="preview-avatar" style={{ overflow: 'hidden' }}>
          <img src="/placeholder-profile.png" alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h1 className="preview-title">Hey, I&apos;m {name.split(' ')[0]} 👋</h1>
        <p className="preview-subtitle">
          {role} crafting modern web experiences<br />
          with clean architecture and type-safe systems.
        </p>
        <div className="preview-badges">
          <span className="preview-badge badge-green">{role}</span>
          <span className="preview-badge badge-blue">{company}</span>
        </div>
      </div>

      <div className="preview-divider" />

      <div className="preview-section">
        <h2 className="preview-section-title">Current Status</h2>
        <div className="preview-info-grid">
          <div className="preview-info-item">
            <span className="preview-info-icon"><BuildingIcon size={16} /></span>
            <div>
              <span className="preview-info-label">Current</span>
              <span className="preview-info-value">{company}</span>
            </div>
          </div>
          <div className="preview-info-item">
            <span className="preview-info-icon"><GraduationIcon size={16} /></span>
            <div>
              <span className="preview-info-label">Education</span>
              <span className="preview-info-value">{education}</span>
            </div>
          </div>
          <div className="preview-info-item">
            <span className="preview-info-icon"><LeafIcon size={16} /></span>
            <div>
              <span className="preview-info-label">Focus</span>
              <span className="preview-info-value">Type-safe full-stack & AI pipelines</span>
            </div>
          </div>
        </div>
      </div>

      <div className="preview-section">
        <h2 className="preview-section-title">Projects I Built</h2>
        <ul className="preview-list">
          {projectLines.length > 0 ? projectLines.map((p, i) => (
            <li key={i}><span style={{marginRight: '8px', color: 'var(--text-muted)'}}><BoxIcon size={14}/></span> {p}</li>
          )) : (
            <>
              <li><span style={{marginRight: '8px', color: 'var(--text-muted)'}}><BoxIcon size={14}/></span> Clean, maintainable architecture</li>
              <li><span style={{marginRight: '8px', color: 'var(--syn-keyword)'}}><ZapIcon size={14}/></span> High-performance, smooth user experiences</li>
            </>
          )}
        </ul>
      </div>

      <div className="preview-section">
        <h2 className="preview-section-title">Contact</h2>
        <div className="preview-links">
          <a href="mailto:irfanrgulagundi@gmail.com" className="preview-link" target="_blank" rel="noopener noreferrer">
            <span style={{display: 'flex'}}><MailIcon size={14} /></span> irfanrgulagundi@gmail.com
          </a>
          <a href="https://github.com/irfan-rg" className="preview-link" target="_blank" rel="noopener noreferrer">
            <span style={{display: 'flex'}}><GithubIcon size={14} /></span> github.com/irfan-rg
          </a>
          <a href="https://linkedin.com/in/irfanrg" className="preview-link" target="_blank" rel="noopener noreferrer">
            <span style={{display: 'flex'}}><LinkedinIcon size={14} /></span> linkedin.com/in/irfanrg
          </a>
        </div>
      </div>
    </div>
  );
}

// ── About Preview ─────────────────────────────────────────────
function AboutPreview() {
  const aboutFile = allFiles['about'];
  const aboutText = aboutFile ? aboutFile.content.map(l => extractText(l.tokens)).join('\n') : '';
  const nameMatch = aboutText.match(/name:\s*["']([^"']+)["']/);
  const roleMatch = aboutText.match(/role:\s*["']([^"']+)["']/);
  const companyMatch = aboutText.match(/company:\s*["']([^"']+)["']/);
  const degreeMatch = aboutText.match(/degree:\s*["']([^"']+)["']/);
  const instMatch = aboutText.match(/institution:\s*["']([^"']+)["']/);
  const philMatch = aboutText.match(/philosophy:\s*["']([^"']+)["']/);

  const name = nameMatch ? nameMatch[1] : 'Irfan Gulagundi';
  const role = roleMatch ? roleMatch[1] : 'SDE-1 Frontend Developer';
  const company = companyMatch ? companyMatch[1] : 'Zinier Inc.';
  const degree = degreeMatch ? degreeMatch[1] : 'B.E. Computer Science';
  const institution = instMatch ? instMatch[1] : 'SDM Institute of Technology';
  const philosophy = philMatch ? philMatch[1] : 'Build small, composable pieces, ship early, iterate with real users.';

  // Passions from about.ts
  const passions = [
    'End-to-end type-safe full-stack',
    'ML side-projects',
    'Design-system thinking',
    'Open-source maintainer'
  ];

  return (
    <div className="preview-content preview-about">
      <div className="preview-section">
        <span className="preview-tag">interface Developer</span>
        <h1 className="preview-title" style={{ fontSize: '28px' }}>{name}</h1>
        <p className="preview-role">{role} at <strong>{company}</strong></p>
      </div>

      <div className="preview-card">
        <h3 className="preview-card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <GraduationIcon size={16} /> Education
        </h3>
        <p className="preview-card-text">{degree}</p>
        <p className="preview-card-sub">{institution}, Dharwad, India</p>
      </div>

      <div className="preview-card">
        <h3 className="preview-card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ZapIcon size={16} /> Passions
        </h3>
        <div className="preview-tags-list">
          {passions.map(p => <span key={p} className="preview-tag-item">{p}</span>)}
        </div>
      </div>

      <div className="preview-card">
        <h3 className="preview-card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BrainIcon size={16} /> Philosophy
        </h3>
        <blockquote className="preview-quote">
          &ldquo;{philosophy}&rdquo;
        </blockquote>
      </div>
    </div>
  );
}
 
// ── Experience Preview ────────────────────────────────────────
function ExperiencePreview() {
  const expFile = allFiles['experience'];
  let data: any = { experience: [], education: [] };
  try {
    const raw = expFile ? expFile.content.map(l => extractText(l.tokens)).join('\n') : '';
    data = JSON.parse(raw);
  } catch {}

  return (
    <div className="preview-content preview-experience">
      <h2 className="preview-section-title">Experience</h2>
      <div className="preview-timeline">
        {data.experience?.map((exp: any, idx: number) => (
          <div key={idx} className="preview-timeline-item">
            <div className={`preview-timeline-dot${idx===0?' active':''}`} />
            <div className="preview-timeline-content">
              <div className="preview-timeline-header">
                <h3>{exp.company}</h3>
                <span className="preview-badge badge-green">{exp.period?.includes('Present') ? 'Current' : exp.period}</span>
              </div>
              <p className="preview-timeline-role">{exp.role}</p>
              <p className="preview-timeline-meta">{exp.location} · {exp.period}</p>
              <p className="preview-timeline-desc">{exp.focus}</p>
              {exp.metrics && (
                <ul className="preview-highlights">
                  {Object.entries(exp.metrics).map(([k,v]) => <li key={k}>{k}: {String(v)}</li>)}
                </ul>
              )}
              {exp.stack && (
                <div className="preview-tech-stack">
                  {exp.stack.map((s:string)=><span key={s}>{s}</span>)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="preview-divider" />

      <h2 className="preview-section-title">Education</h2>
      <div className="preview-timeline">
        {data.education?.map((edu:any, idx:number)=>(
          <div key={idx} className="preview-timeline-item">
            <div className="preview-timeline-dot" />
            <div className="preview-timeline-content">
              <h3>{edu.institution}</h3>
              <p className="preview-timeline-role">{edu.degree}</p>
              <p className="preview-timeline-meta">{edu.location} · {edu.period || ''}</p>
            </div>
          </div>
        ))}
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

  const proxyUrl = (url: string) => `/api/proxy?url=${encodeURIComponent(url)}`;

  const originalUrls: Record<string, string> = {
    TheSwiftDictionary: 'https://the-swift-dictionary.vercel.app/',
    Inkwell: 'https://inkwelll.vercel.app',
    TheXOStore: 'https://thexostore.vercel.app',
    Caliber: 'https://caliber-ai.vercel.app',
  };

  const liveUrls: Record<string, string> = {
    TheSwiftDictionary: proxyUrl(originalUrls.TheSwiftDictionary),
    Inkwell: originalUrls.Inkwell,
    TheXOStore: originalUrls.TheXOStore,
    // Caliber will use static image instead of live embed
  };

  const staticImages: Record<string, string> = {
    Caliber: 'https://irfanrg.dev/projects/caliber.png',
    BirthdayPresent: 'https://raw.githubusercontent.com/irfan-rg/portfolio/v2/public/projects/present.png',
    QubeAI: 'https://raw.githubusercontent.com/irfan-rg/portfolio/v2/public/projects/qube.png',
    F1RacePredictor: 'https://raw.githubusercontent.com/irfan-rg/portfolio/v2/public/projects/f1.png',
  };

  const liveUrl = liveUrls[projectName];
  const staticImg = staticImages[projectName];
  const displayUrl = originalUrls[projectName] || '';

  const previewContent = liveUrl ? (
    <iframe
      src={liveUrl}
      title={`${projectName} live preview`}
      style={{ width: '100%', height: '100%', border: '0', background: 'white', display: 'block' }}
    />
  ) : staticImg ? (
    <img src={staticImg} alt={projectName} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', background: 'transparent' }} />
  ) : (
    <div style={{ 
      width: '100%', 
      height: '100%',
      background: 'linear-gradient(135deg, var(--bg-elevated), var(--bg-subtle))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-muted)'
    }}>
      <span style={{fontSize: '13px'}}>Project Preview</span>
    </div>
  );

  return (
    <div className="preview-content preview-project" style={{ padding: "25px" }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '1100px',
        margin: '0 auto',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        background: 'var(--bg-elevated)'
      }}>
        <div style={{ 
          height: '36px', 
          background: 'var(--bg-subtle)', 
          display: 'flex', 
          alignItems: 'center', 
          padding: '0 12px',
          gap: '8px',
          borderBottom: '1px solid var(--border-color)',
          overflow: 'hidden'
        }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
          <div style={{ marginLeft: '12px', fontSize: '13px', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: 1 }}>
            {displayUrl ? <a href={displayUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{displayUrl}</a> : projectName}
          </div>
        </div>
        <div style={{ height: '67vh', background: 'white', overflow: 'hidden'}}>
          <div style={{ width: '150%', height: '154.5%', transform: 'scale(0.67)', transformOrigin: 'top left' }}>
            {previewContent}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '24px auto 0' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>{projectName}</h2>
        {description && <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>{description}</p>}
        {highlights.length > 0 && (
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '14px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><ZapIcon size={14}/> Highlights</h3>
            <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--text-muted)' }}>
              {highlights.map((h,i) => <li key={i} style={{ marginBottom: '6px' }}>{h}</li>)}
            </ul>
          </div>
        )}
        {techItems.length > 0 && (
          <div>
            <h3 style={{ fontSize: '14px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><WrenchIcon size={14}/> Tech Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {techItems.map(t => (
                <span key={t} style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', fontSize: '12px' }}>{t}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Contact Preview ───────────────────────────────────────────
function ContactPreview() {
  const fileText = contactFile.content.map(l => extractText(l.tokens)).join('\n');
  // Extract the contact object values
  const emailMatch = fileMatch(fileText, 'email');
  const githubMatch = fileMatch(fileText, 'github');
  const linkedinMatch = fileMatch(fileText, 'linkedin');
  const portfolioMatch = fileMatch(fileText, 'portfolio');

  return (
    <div className="preview-content preview-contact">
      <h2 className="preview-section-title">Let&apos;s Connect!</h2>
      <p className="preview-subtitle" style={{ marginBottom: '24px' }}>
        Whether it&apos;s about a project, an opportunity, or just to say hi — I&apos;d love to hear from you.
      </p>

      <div className="preview-contact-grid">
        {emailMatch && (
          <a href={`mailto:${emailMatch}`} className="preview-contact-card" target="_blank" rel="noopener noreferrer">
            <span className="preview-contact-icon"><MailIcon size={16} color="var(--text-muted)" /></span>
            <span className="preview-contact-label">Email</span>
            <span className="preview-contact-value">{emailMatch}</span>
          </a>
        )}
        {githubMatch && (
          <a href={githubMatch} className="preview-contact-card" target="_blank" rel="noopener noreferrer">
            <span className="preview-contact-icon"><GithubIcon size={16} color="var(--text-muted)" /></span>
            <span className="preview-contact-label">GitHub</span>
            <span className="preview-contact-value">{githubMatch.replace(/^https?:\/\//, '')}</span>
          </a>
        )}
        {linkedinMatch && (
          <a href={linkedinMatch} className="preview-contact-card" target="_blank" rel="noopener noreferrer">
            <span className="preview-contact-icon"><LinkedinIcon size={16} color="var(--text-muted)" /></span>
            <span className="preview-contact-label">LinkedIn</span>
            <span className="preview-contact-value">{linkedinMatch.replace(/^https?:\/\//, '')}</span>
          </a>
        )}
        {portfolioMatch && (
          <a href={portfolioMatch} className="preview-contact-card" target="_blank" rel="noopener noreferrer">
            <span className="preview-contact-icon"><GlobeIcon size={16} color="var(--text-muted)" /></span>
            <span className="preview-contact-label">Portfolio</span>
            <span className="preview-contact-value">{portfolioMatch.replace(/^https?:\/\//, '')}</span>
          </a>
        )}
      </div>
    </div>
  );
}

function fileMatch(text: string, key: string): string | null {
  const re = new RegExp(`${key}\\s*:\\s*"([^"]+)"`);
  const m = text.match(re);
  return m ? m[1] : null;
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
