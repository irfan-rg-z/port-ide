'use client';

import React from 'react';
import { allFiles, type VirtualFile, type Token, type CodeLine } from '@/data/fileSystem';
import { contactFile } from '@/data/fileSystem';
import {
  BuildingIcon,
  GraduationIcon,
  ZapIcon,
  GithubIcon,
  GlobeIcon,
  LaptopIcon,
  CloudIcon,
  BrainIcon,
  WrenchIcon,
  BoxIcon,
  TagIcon,
  CheckIcon,
  TerminalIcon,
  FolderIcon,
  FileIcon,
  UserIcon,
  PaletteIcon,
} from './Icons';

// ============================================================
// PreviewPane — Rendered preview of file content
// Each file type gets a custom, beautifully rendered layout.
// Uses tokenized data directly from fileSystem.ts for accuracy.
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

// Helper: extract value from a line by property name
function extractPropertyValue(lines: CodeLine[], propName: string): string | null {
  let inInterface = false;
  for (const line of lines) {
    const text = extractText(line.tokens);
    if (text.includes('interface ')) { inInterface = true; continue; }
    if (inInterface && text.includes('}')) { inInterface = false; continue; }
    if (inInterface) continue;

    const propIdx = line.tokens.findIndex(t => t.type === 'property' && t.text === propName);
    if (propIdx >= 0) {
      const valueTokens = line.tokens.slice(propIdx + 1);
      const str = extractString(valueTokens);
      if (str) return str;
      const constToken = valueTokens.find(t => t.type === 'constant');
      if (constToken) return constToken.text.replace(/^["']|["']$/g, '');
    }
  }
  return null;
}

// Helper: extract all string values from tokens (for arrays)
function extractAllStrings(tokens: Token[]): string[] {
  return tokens
    .filter(t => t.type === 'string')
    .map(t => t.text.replace(/^["']|["']$/g, ''))
    .filter(s => s.length > 0);
}

// ── Terminal Command Output Component ────────────────────────
function TerminalOutput({ command, output, icon }: { command: string; output: string | React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div className="terminal-output-block" style={{ marginBottom: '16px' }}>
      <div className="terminal-command-line" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
        {icon || <TerminalIcon size={14} />}
        <span style={{ color: 'var(--syn-comment)' }}>$</span>
        <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>{command}</span>
      </div>
      <div style={{ paddingLeft: '16px', borderLeft: '1px solid var(--border-color)', marginLeft: '8px' }}>
        {typeof output === 'string' ? (
          <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{output}</pre>
        ) : output}
      </div>
    </div>
  );
}

// ── Tag / Badge Component ──────────────────────────────────────
function Tag({ children, color = 'var(--syn-type)', bg = 'var(--bg-secondary)' }: { children: React.ReactNode; color?: string; bg?: string }) {
  return (
    <span style={{
      padding: '2px 8px',
      borderRadius: '4px',
      background: bg,
      border: '1px solid var(--border-color)',
      fontSize: '11px',
      fontWeight: 500,
      color: color,
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    }}>{children}</span>
  );
}

// ── README Preview — Terminal Dashboard ───────────────────────
function ReadmePreview() {
  const readmeFile = allFiles['readme'];
  const readmeText = readmeFile ? readmeFile.content.map(l => extractText(l.tokens)).join('\n') : '';

  // Parse projects from README
  const projectsSection = readmeText.split('## Selected Work')[1]?.split('## Contact')[0] || '';
  const projectLines = projectsSection.split('\n').filter(l => l.trim().startsWith('-')).map(l => l.replace(/^- /, '').trim());

  const projects = projectLines.slice(0, 6).map(p => {
    const match = p.match(/^([^—–]+)\s*[—–]\s*(.+)/);
    if (match) {
      return { name: match[1].trim(), details: match[2].trim() };
    }
    return { name: p, details: '' };
  });

  // Parse contact links
  const emailMatch = readmeText.match(/📧\s*([^\s]+)/);
  const githubMatch = readmeText.match(/🐙\s*([^\s]+)/);
  const linkedinMatch = readmeText.match(/💼\s*([^\s]+)/);
  const portfolioMatch = readmeText.match(/🌐\s*([^\s]+)/);

  const email = emailMatch ? emailMatch[1] : 'irfanrgulagundi@gmail.com';
  const github = githubMatch ? githubMatch[1] : 'github.com/irfan-rg';
  const linkedin = linkedinMatch ? linkedinMatch[1] : 'linkedin.com/in/irfanrg';
  const portfolio = portfolioMatch ? portfolioMatch[1] : 'irfanrg.dev';

  return (
    <div className="preview-content preview-readme">
      <div className="terminal-dashboard" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="terminal-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid var(--border-color)' }}>
          <TerminalIcon size={20} color="var(--syn-string)" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--syn-boolean)' }}>irfan@portfolio:~$</span>
          <span style={{ color: 'var(--syn-function)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>npm start</span>
        </div>

        <TerminalOutput
          command="who-am-i?"
          output={
            <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 1.6 }}>
              <span style={{ color: 'var(--syn-operator)', fontWeight: 600 }}>Irfan Gulagundi</span>
            </pre>
          }
          icon={<UserIcon size={14} />}
        />

        <TerminalOutput
          command="cat profile.json"
          icon={<FileIcon size={14} />}
          output={
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 1.8 }}>
              <span style={{ color: 'var(--syn-string)' }}>"role"</span>: <span style={{ color: 'var(--syn-type)' }}>"SDE-1 Frontend Developer"</span>,
              <br />
              <span style={{ color: 'var(--syn-string)' }}>"company"</span>: <span style={{ color: 'var(--syn-type)' }}>"Zinier Inc."</span>,
              <br />
              <span style={{ color: 'var(--syn-string)' }}>"location"</span>: <span style={{ color: 'var(--syn-type)' }}>"Bengaluru, India"</span>
            </div>
          }
        />

        <TerminalOutput
          command="ls projects/"
          icon={<FolderIcon size={14} />}
          output={
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {projects.map((p, i) => {
                const urlMatch = p.details.match(/(https?:\/\/[^\s]+)/);
                const url = urlMatch ? urlMatch[1] : null;
                const desc = url ? p.details.replace(url, '').replace(/\.\s*$/, '').trim() : p.details;
                return (
                  <div key={i} style={{
                    background: 'var(--bg-primary)',
                    borderRadius: '6px',
                    padding: '12px 14px',
                    border: '1px solid var(--border-color)',
                  }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '4px' }}>
                      {p.name}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {desc}
                    </div>
                    {url && (
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--syn-string)', marginTop: '6px' }}>
                        {url.replace('https://', '')}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          }
        />

        <TerminalOutput
          command="echo $contact"
          icon={<GlobeIcon size={14} />}
          output={
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 2 }}>
              <div style={{ color: 'var(--syn-type)' }}>{email}</div>
              <div style={{ color: 'var(--syn-function)' }}>{github}</div>
              <div style={{ color: 'var(--syn-function)' }}>{linkedin}</div>
              <div style={{ color: 'var(--syn-string)' }}>{portfolio}</div>
            </div>
          }
        />
      </div>
    </div>
  );
}

// ── About Preview — Terminal Profile ───────────────────────────
function AboutPreview() {
  const aboutFile = allFiles['about'];
  if (!aboutFile) return null;

  const name = extractPropertyValue(aboutFile.content, 'name') || 'Irfan Gulagundi';
  const role = extractPropertyValue(aboutFile.content, 'role') || 'SDE-1 Frontend Developer';
  const company = extractPropertyValue(aboutFile.content, 'company') || 'Zinier Inc.';
  const location = extractPropertyValue(aboutFile.content, 'location') || 'Bengaluru, India';
  const degree = extractPropertyValue(aboutFile.content, 'degree') || 'B.E. Computer Science';
  const institution = extractPropertyValue(aboutFile.content, 'institution') || 'SDM Institute of Technology';
  const graduated = extractPropertyValue(aboutFile.content, 'graduated') || 'May 2026';

  // Extract education location from the education sub-object specifically
  let educationLocation = 'Ujire, India';
  let inEducation = false;
  for (const line of aboutFile.content) {
    const text = extractText(line.tokens);
    if (text.includes('education') && text.includes('{')) { inEducation = true; continue; }
    if (inEducation && text.includes('}')) { break; }
    if (inEducation) {
      const locIdx = line.tokens.findIndex(t => t.type === 'property' && t.text === 'location');
      if (locIdx >= 0) {
        const val = extractString(line.tokens.slice(locIdx + 1));
        if (val) educationLocation = val;
      }
    }
  }
  const philosophy = extractPropertyValue(aboutFile.content, 'philosophy') || '';
  const superpower = extractPropertyValue(aboutFile.content, 'superpower') || '';
  const kryptonite = extractPropertyValue(aboutFile.content, 'kryptonite') || '';

  // Extract interests array from tokens (skip interface definition)
  const interests: string[] = [];
  for (let i = 0; i < aboutFile.content.length; i++) {
    const line = aboutFile.content[i];
    const hasInterestsProp = line.tokens.some(t => t.type === 'property' && t.text === 'interests');
    const hasOpenBracket = line.tokens.some(t => t.text === '[');
    if (hasInterestsProp && hasOpenBracket) {
      // Found the data interests array (not the interface) — collect strings until ]
      for (let j = i; j < aboutFile.content.length; j++) {
        const strTokens = aboutFile.content[j].tokens.filter(t => t.type === 'string');
        for (const st of strTokens) {
          interests.push(st.text.replace(/^["']|["']$/g, ''));
        }
        if (aboutFile.content[j].tokens.some(t => t.text === ']')) break;
      }
      break;
    }
  }

  // Parse story paragraphs from comment block
  const paragraphs: string[] = [];
  let currentPara: string[] = [];
  let inStory = false;

  for (const line of aboutFile.content) {
    const text = extractText(line.tokens);
    if (text.includes('/**')) { inStory = true; continue; }
    if (text.includes('*/')) { inStory = false; continue; }
    if (inStory) {
      const storyText = text.replace(/^\s*\*\s?/, '').trim();
      if (storyText && storyText !== '*') {
        currentPara.push(storyText);
      } else if (!storyText && currentPara.length > 0) {
        paragraphs.push(currentPara.join(' '));
        currentPara = [];
      }
    }
  }
  if (currentPara.length > 0) paragraphs.push(currentPara.join(' '));

  const storyTitle = paragraphs[0] || 'The human behind the commits';
  const storyContent = paragraphs.slice(1);

  return (
    <div className="preview-content preview-about">
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>

        {/* ── Name Hero ── */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '32px',
            fontWeight: 800,
            margin: '0 0 8px',
            color: 'var(--text-primary)',
            letterSpacing: '-1px',
          }}>{name}</h1>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '15px',
            color: 'var(--syn-comment)',
          }}>
            <span style={{ color: 'var(--syn-keyword)' }}>const</span>{' '}
            <span style={{ color: 'var(--syn-type)' }}>developer</span>{' '}
            <span style={{ color: 'var(--syn-operator)' }}>=</span>{' '}
            <span style={{ color: 'var(--syn-string)' }}>&quot;{role.toLowerCase()}&quot;</span>
          </div>
        </div>

        {/* ── Terminal Status Bar ── */}
        <div style={{
          background: 'var(--bg-secondary)',
          borderRadius: '8px',
          padding: '16px 20px',
          marginBottom: '32px',
          border: '1px solid var(--border-color)',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
              <span style={{ color: 'var(--syn-string)', minWidth: '80px' }}>role</span>
              <span style={{ color: 'var(--syn-comment)' }}>→</span>
              <span style={{ color: 'var(--syn-type)' }}>{role}</span>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
              <span style={{ color: 'var(--syn-string)', minWidth: '80px' }}>company</span>
              <span style={{ color: 'var(--syn-comment)' }}>→</span>
              <span style={{ color: 'var(--syn-function)' }}>{company}</span>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
              <span style={{ color: 'var(--syn-string)', minWidth: '80px' }}>location</span>
              <span style={{ color: 'var(--syn-comment)' }}>→</span>
              <span style={{ color: 'var(--syn-constant)' }}>{location}</span>
            </div>
          </div>
        </div>

        {/* ── Story Section ── */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--syn-comment)',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>
            {'// '}{storyTitle}
          </div>
          {/* First two paragraphs side by side */}
          {storyContent.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: storyContent.length >= 2 ? '1fr 1fr' : '1fr',
              gap: '20px',
              marginBottom: storyContent.length > 2 ? '20px' : '0',
            }}>
              {storyContent.slice(0, 2).map((para, i) => (
                <div key={i} style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--bg-secondary)',
                  borderRadius: '8px',
                  padding: '20px',
                  border: '1px solid var(--border-color)',
                }}>
                  <p style={{
                    margin: '0',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    fontSize: '15px',
                  }}>{para}</p>
                </div>
              ))}
            </div>
          )}
          {/* Third paragraph below both */}
          {storyContent.length > 2 && (
            <div style={{
              fontFamily: 'var(--font-mono)',
              background: 'var(--bg-secondary)',
              borderRadius: '8px',
              padding: '20px',
              border: '1px solid var(--border-color)',
            }}>
              {storyContent.slice(2).map((para, i) => (
                <p key={i + 2} style={{
                  margin: i > 0 ? '12px 0 0' : '0',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  fontSize: '15px',
                }}>{para}</p>
              ))}
            </div>
          )}
        </div>

        {/* ── Education ── */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--syn-comment)',
            marginBottom: '14px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>education</div>
          <div style={{
            background: 'var(--bg-secondary)',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            overflow: 'hidden',
          }}>
            <div style={{
              padding: '10px 16px',
              background: 'rgba(255,255,255,0.03)',
              borderBottom: '1px solid var(--border-color)',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{ color: 'var(--syn-comment)' }}>$</span>
              <span style={{ color: 'var(--syn-function)' }}>cat</span>
              <span style={{ color: 'var(--syn-string)' }}>education.json</span>
            </div>
            <div style={{ padding: '16px 20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
                <span style={{ color: 'var(--syn-comment)' }}>degree</span>
                <span style={{ color: 'var(--syn-type)' }}>{degree}</span>
                <span style={{ color: 'var(--syn-comment)' }}>school</span>
                <span style={{ color: 'var(--syn-function)' }}>{institution}</span>
                <span style={{ color: 'var(--syn-comment)' }}>where</span>
                <span style={{ color: 'var(--syn-constant)' }}>{educationLocation}</span>
                <span style={{ color: 'var(--syn-comment)' }}>year</span>
                <span style={{ color: 'var(--syn-keyword)' }}>{graduated}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Interests ── */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--syn-comment)',
            marginBottom: '14px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>interests</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {interests.map((interest, i) => (
              <div key={i} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                padding: '8px 14px',
                borderRadius: '6px',
                background: 'var(--bg-secondary)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--syn-comment)',
                  flexShrink: 0,
                }} />
                {interest}
              </div>
            ))}
          </div>
        </div>

        {/* ── Superpower & Kryptonite ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
          <div style={{
            background: 'var(--bg-secondary)',
            borderRadius: '8px',
            padding: '20px',
            border: '1px solid var(--border-color)',
            borderTop: '2px solid var(--syn-string)',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--syn-string)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '8px',
            }}>superpower</div>
            <p style={{
              margin: '0',
              color: 'var(--text-secondary)',
              fontSize: '14px',
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.6,
            }}>{superpower}</p>
          </div>
          <div style={{
            background: 'var(--bg-secondary)',
            borderRadius: '8px',
            padding: '20px',
            border: '1px solid var(--border-color)',
            borderTop: '2px solid var(--syn-keyword)',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--syn-keyword)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '8px',
            }}>kryptonite</div>
            <p style={{
              margin: '0',
              color: 'var(--text-secondary)',
              fontSize: '14px',
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.6,
            }}>{kryptonite}</p>
          </div>
        </div>

        {/* ── Closing Line ── */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: 'var(--syn-comment)',
          textAlign: 'center',
          padding: '20px 0 8px',
          borderTop: '1px solid var(--border-color)',
        }}>
          Always learning. Always improving. One iteration at a time.
        </div>

      </div>
    </div>
  );
}

// ── Experience Preview — Readable Timeline ────────────────────
function ExperiencePreview() {
  const expFile = allFiles['experience'];
  let data: { experience: any[]; education: any[] } = { experience: [], education: [] };
  try {
    const raw = expFile ? expFile.content.map(l => extractText(l.tokens)).join('\n') : '';
    data = JSON.parse(raw);
  } catch {}

  const generateHash = (s: string) => s.split('').reduce((a, b) => (((a << 5) - a) + b.charCodeAt(0)) | 0, 0).toString(16).slice(0, 7);

  return (
    <div className="preview-content preview-experience" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--syn-keyword)', fontSize: '13px', marginBottom: '24px' }}>
        <span style={{ color: 'var(--text-disabled)' }}>$</span> git log --oneline --decorateand 
      </div>

      {/* Experience Timeline */}
      {data.experience?.map((exp, idx) => {
        const isCurrent = exp.period?.includes('Present');
        const shortHash = generateHash(exp.company + exp.role);
        return (
          <div key={idx} style={{ marginBottom: '24px', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{
                color: isCurrent ? 'var(--syn-string)' : 'var(--text-muted)',
                minWidth: '80px',
                whiteSpace: 'nowrap'
              }}>
                {shortHash}
                {isCurrent && <span style={{ display: 'block', fontSize: '12px', color: 'var(--syn-constant)', marginTop: '2px', marginLeft: '6px'}}>● main</span>}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ color: isCurrent ? 'var(--syn-string)' : 'var(--syn-type)', fontWeight: 500 }}>{exp.role}</span>
                  <span style={{ color: 'var(--syn-property)' }}>@</span>
                  <span style={{ color: 'var(--syn-function)' }}>{exp.company}</span>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '12px', marginBottom: '8px' }}>
                  {exp.location} · {exp.period}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{exp.description}</p>
                {exp.highlights && exp.highlights.length > 0 && (
                  <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {exp.highlights.map((h: string, i: number) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--syn-operator)', fontSize: '12px' }}>
                        <span>+</span> <span style={{ color: 'var(--text-muted)' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
                {exp.stack && exp.stack.length > 0 && (
                  <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {exp.stack.map((s: string) => (
                      <Tag key={s} color="var(--text-muted)">{s}</Tag>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Education Branch */}
      <div style={{ marginTop: '24px', marginBottom: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var( --text-muted)' }}>
        # Education branch
      </div>

      {data.education?.map((edu, idx) => {
        const shortHash = generateHash(edu.institution);
        return (
          <div key={idx} style={{ marginBottom: '20px', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--syn-function)', minWidth: '80px', whiteSpace: 'nowrap' }}>
                {shortHash}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ color: 'var(--syn-function)', marginBottom: '2px', fontWeight: 500 }}>{edu.degree}</div>
                <div style={{ color: 'var(--syn-type)', fontSize: '12px' }}>{edu.institution}, {edu.location}</div>
                <div style={{ color: 'var(--syn---text-muted)', fontSize: '12px' }}>{edu.period} • Graduated {edu.graduated}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Skills Preview — Readable Skill Tags ──────────────────────
function SkillsPreview() {
  const skillsFile = allFiles['skills'];
  if (!skillsFile) return null;

  // Parse skills from tokenized data
  const raw = skillsFile.content.map(l => extractText(l.tokens)).join('\n');
  const parsed: Array<{ label: string; items: string[] }> = [];

  const catRegex = /label:\s*"([^"]+)"[\s\S]*?items:\s*\[([^\]]+)\]/g;
  let match;
  while ((match = catRegex.exec(raw)) !== null) {
    const label = match[1];
    const items = match[2].match(/"([^"]+)"/g)?.map(s => s.replace(/"/g, '')) || [];
    if (label && items.length > 0) {
      parsed.push({ label, items });
    }
  }

  const categoryIcons: Record<string, React.ReactNode> = {
    'Core Engineering': <LaptopIcon size={16} />,
    'Frontend Ecosystem': <PaletteIcon size={16} />,
    'Backend & Cloud': <CloudIcon size={16} />,
    'Data & AI': <BrainIcon size={16} />,
    'Web3 & Security': <BoxIcon size={16} />,
    'DevOps & Tools': <WrenchIcon size={16} />,
  };

  return (
    <div className="preview-content preview-skills" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--syn-keyword)', fontSize: '13px', marginBottom: '24px' }}>
        <span style={{ color: 'var(--text-disabled)' }}>$</span> cat skills.config.ts
      </div>

      {parsed.map((cat, i) => (
        <div key={i} style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
            {categoryIcons[cat.label] || <TagIcon size={16} />}
            <span style={{ color: 'var(--syn-string)', fontWeight: 500, fontSize: '14px' }}>{cat.label}</span>
            <span style={{ color: 'var(--syn-type)' }}>[{cat.items.length} items]</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {cat.items.map(item => (
              <div key={item} style={{
                padding: '6px 12px',
                borderRadius: '6px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-primary)',
              }}>{item}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Project Preview ───────────────────────────────────────────
function ProjectPreview({ file }: { file: VirtualFile }) {
  const lines = file.content;

  let projectName = file.name.replace('.tsx', '');
  let description = '';
  const highlights: string[] = [];
  let techItems: string[] = [];
  let category = '';
  let featured = false;
  let liveUrl = '';
  let repoUrl = '';

  for (const line of lines) {
    const text = extractText(line.tokens);
    if (text.includes('<Title>')) {
      projectName = extractString(line.tokens) || projectName;
    }
    if (text.includes('<Category>')) {
      category = extractString(line.tokens) || '';
    }
    if (text.includes('<Featured>')) {
      featured = extractString(line.tokens) === 'true';
    }
    if (text.includes('<LiveURL>')) {
      liveUrl = extractString(line.tokens) || '';
    }
    if (text.includes('<RepoURL>')) {
      repoUrl = extractString(line.tokens) || '';
    }
    if (text.includes('<Description>')) {
      description = extractString(line.tokens) || '';
    }
    if (text.includes('<Point>')) {
      const str = extractString(line.tokens);
      if (str) highlights.push(str);
    }
    if (text.includes('<TechStack')) {
      techItems = extractAllStrings(line.tokens).filter(t => t.includes(',') || t.length > 3);
      const fullMatch = extractString(line.tokens);
      if (fullMatch) {
        techItems = fullMatch.replace(/"/g, '').split(',').map(s => s.trim()).filter(Boolean);
      }
    }
  }

  const staticImages: Record<string, string> = {
    'Caliber': 'https://irfanrg.dev/projects/caliber.png',
    'F1 Race Predictor': 'https://irfanrg.dev/projects/f1.png',
  };

  const staticImg = staticImages[projectName] || staticImages[projectName.replace(/\s+/g, ' ')];
  const displayUrl = liveUrl || repoUrl || '';

  const [useIframe, setUseIframe] = React.useState(!!liveUrl);
  const [iframeError, setIframeError] = React.useState(false);

  const previewContent = staticImg ? (
    <img src={staticImg} alt={projectName} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', background: 'transparent' }} />
  ) : (liveUrl && useIframe && !iframeError) ? (
    <iframe
      src={liveUrl}
      title={`${projectName} live preview`}
      style={{ width: '100%', height: '100%', border: '0', background: 'white', display: 'block' }}
      onError={() => { setIframeError(true); setUseIframe(false); }}
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
    />
  ) : (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-elevated))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
    }}>
      <span>Project Preview Unavailable</span>
    </div>
  );

  return (
    <div className="preview-content preview-project" style={{ padding: "25px" }}>
      <div className="project-file-viewer" style={{
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
          background: 'var(--bg-secondary)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px',
          gap: '8px',
          borderBottom: '1px solid var(--border-color)',
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
        }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
          <div style={{ marginLeft: '12px', fontSize: '13px', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: 1 }}>
            {displayUrl ? <a href={displayUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{displayUrl}</a> : projectName}
          </div>
        </div>
        <div style={{ height: '67vh', background: 'white', overflow: 'hidden' }}>
          <div style={{ width: '150%', height: '154.5%', transform: 'scale(0.67)', transformOrigin: 'top left' }}>
            {previewContent}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '24px auto 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: '22px', margin: 0 }}>{projectName}</h2>
          {category && (
            <Tag color="var(--text-muted)">{category}</Tag>
          )}
          {featured && (
            <Tag color="var(--syn-constant)">Featured</Tag>
          )}
        </div>
        {description && <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>{description}</p>}
        {(liveUrl || repoUrl) && (
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '6px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text)', fontSize: '12px', fontWeight: 500, textDecoration: 'none' }}>
                <GlobeIcon size={13} /> View Live
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '6px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text)', fontSize: '12px', fontWeight: 500, textDecoration: 'none' }}>
                <GithubIcon size={13} /> View Code
              </a>
            )}
          </div>
        )}
        {highlights.length > 0 && (
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '14px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)' }}><ZapIcon size={14}/> Highlights</h3>
            <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--text-muted)' }}>
              {highlights.map((h, i) => <li key={i} style={{ marginBottom: '6px' }}>{h}</li>)}
            </ul>
          </div>
        )}
        {techItems.length > 0 && (
          <div>
            <h3 style={{ fontSize: '14px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)' }}><WrenchIcon size={14}/> Tech Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {techItems.map(t => (
                <span key={t} style={{ padding: '4px 10px', borderRadius: '4px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>{t}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Contact Preview — Terminal Interface ───────────────────────
function ContactPreview() {
  const email = extractPropertyValue(contactFile.content, 'email');
  const github = extractPropertyValue(contactFile.content, 'github');
  const linkedin = extractPropertyValue(contactFile.content, 'linkedin');
  const portfolio = extractPropertyValue(contactFile.content, 'portfolio');

  const contactLinks = [
    { label: 'Email', value: email || '', href: `mailto:${email || ''}` },
    { label: 'GitHub', value: github ? github.replace(/^https?:\/\//, '') : '', href: github || '' },
    { label: 'LinkedIn', value: linkedin ? linkedin.replace(/^https?:\/\//, '') : '', href: linkedin || '' },
    { label: 'Portfolio', value: portfolio ? portfolio.replace(/^https?:\/\//, '') : '', href: portfolio || '' },
  ];

  return (
    <div className="preview-content preview-contact" style={{ maxWidth: '700px', margin: '0 auto' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', marginBottom: '24px' }}>
        <span style={{ color: 'var(--text-disabled)' }}>$</span> <span style={{ color: 'var(--syn-keyword)' }}>cat contact/reach-out.ts</span>
      </div>

      {/* Clean contact grid - no icons, no hover effects */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '2px',
        background: 'var(--bg-secondary)',
        borderRadius: '10px',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
      }}>
        {contactLinks.map((link) => (
          link.value ? (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                background: 'transparent',
                color: 'var(--text)',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                borderBottom: link.label === 'Portfolio' ? 'none' : '1px solid var(--border-color)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'var(--syn-comment)', fontSize: '11px' }}>$ {link.label.toLowerCase()}</span>
                <span style={{ color: 'var(--text-primary)' }}>{link.value}</span>
              </div>
              <span style={{ color: 'var(--syn-operator)', fontSize: '14px' }}>→</span>
            </a>
          ) : null
        ))}
      </div>

      {/* Call to action */}
      <div style={{
        marginTop: '24px',
        padding: '20px',
        background: 'var(--bg-secondary)',
        borderRadius: '10px',
        border: '1px solid var(--border-color)',
        textAlign: 'center',
      }}>
        <div style={{ color: 'var(--syn-comment)', fontFamily: 'var(--font-mono)', fontSize: '13px', marginBottom: '8px' }}>
          <span>$</span> echo "Let's build something together"
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0 }}>
          whether it's a project, collaboration, or just a chat about web tech!
        </p>
      </div>
    </div>
  );
}

// ── Env Preview ───────────────────────────────────────────────
function EnvPreview() {
  const envFile = allFiles['env'];
  if (!envFile) return null;

  // Parse env vars from tokenized data
  const envPairs: Array<{ key: string; value: string; category: string }> = [];
  let currentCategory = '';

  for (const line of envFile.content) {
    const text = extractText(line.tokens);
    if (text.startsWith('# ') && text.length > 2) { currentCategory = text.replace(/^# /, ''); continue; }
    if (text.startsWith('#')) continue;
    if (!text.includes('=')) continue;

    const [key, ...rest] = text.split('=');
    const val = rest.join('=').replace(/^["']|["']$/g, '');
    if (key && val) envPairs.push({ key: key.trim(), value: val, category: currentCategory });
  }

  return (
    <div className="preview-content preview-env">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', marginBottom: '24px' }}>
          <span style={{ color: 'var(--syn-comment)' }}>$</span> <span style={{ color: 'var(--syn-keyword)' }}>cat .env</span>
        </div>

        <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
          {envPairs.map((pair, i) => (
            <div key={i} style={{
              display: 'flex',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              padding: '8px 16px',
              borderBottom: i < envPairs.length - 1 ? '1px solid var(--border-color)' : 'none',
            }}>
              <span style={{ color: 'var(--syn-variable)' }}>{pair.key}</span>
              <span style={{ color: 'var(--syn-operator)' }}>=</span>
              <span style={{ color: 'var(--syn-string)' }}>"{pair.value}"</span>
              {pair.category && (
                <span style={{ color: 'var(--syn-comment)', marginLeft: 'auto', fontSize: '11px' }}># {pair.category}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Package.json Preview ───────────────────────────────────────
function PackageJsonPreview() {
  const pkgFile = allFiles['packagejson'];
  if (!pkgFile) return null;

  // Build JSON from tokenized lines
  const jsonLines: string[] = [];
  let inScripts = false;
  let inDeps = false;
  let inKeywords = false;

  for (const line of pkgFile.content) {
    const text = extractText(line.tokens).trim();
    if (!text || text === '{' || text === '}' || text === '},' || text === ']') continue;

    // Detect sections
    if (text.includes('"scripts"') && text.includes('{')) { inScripts = true; inDeps = false; inKeywords = false; jsonLines.push(text.replace(/,$/, '')); continue; }
    if (text.includes('"dependencies"') && text.includes('{')) { inDeps = true; inScripts = false; inKeywords = false; jsonLines.push(text.replace(/,$/, '')); continue; }
    if (text.includes('"keywords"') && text.includes('[')) { inKeywords = true; inScripts = false; inDeps = false; continue; }
    if (inScripts && (text === '}' || text === '},')) { inScripts = false; jsonLines.push(text.replace(/,$/, '')); continue; }
    if (inDeps && (text === '}' || text === '},')) { inDeps = false; jsonLines.push(text.replace(/,$/, '')); continue; }
    if (inKeywords && (text === ']' || text === '],')) { inKeywords = false; continue; }
    if (inKeywords) continue;

    // Extract string key-value pairs
    const strTokens = line.tokens.filter(t => t.type === 'string');
    const constToken = line.tokens.find(t => t.type === 'constant');

    if (strTokens.length >= 2) {
      const key = strTokens[0].text;
      const val = strTokens[1].text;
      jsonLines.push(`  ${key}: ${val},`);
    } else if (strTokens.length === 1 && constToken) {
      const key = strTokens[0].text;
      jsonLines.push(`  ${key}: ${constToken.text},`);
    } else if (strTokens.length === 1 && text.includes(':')) {
      // Section opener like "scripts": {
      jsonLines.push(text.replace(/,$/, ''));
    }
  }

  // Parse the reconstructed JSON
  let pkg: Record<string, any> = {};
  try {
    const jsonStr = '{' + jsonLines.join('\n') + '}';
    pkg = JSON.parse(jsonStr);
  } catch {
    // Fallback: basic extraction
    const raw = pkgFile.content.map(l => extractText(l.tokens)).join('\n');
    const nameMatch = raw.match(/"name":\s*"([^"]+)"/);
    const versionMatch = raw.match(/"version":\s*"([^"]+)"/);
    const descMatch = raw.match(/"description":\s*"([^"]+)"/);
    const authorMatch = raw.match(/"author":\s*"([^"]+)"/);
    const licenseMatch = raw.match(/"license":\s*"([^"]+)"/);
    pkg = {
      name: nameMatch?.[1] || 'irfan-portfolio',
      version: versionMatch?.[1] || '2.0.0',
      description: descMatch?.[1] || '',
      author: authorMatch?.[1] || '',
      license: licenseMatch?.[1] || 'MIT',
      scripts: {},
      dependencies: {},
    };
  }

  return (
    <div className="preview-content preview-packagejson">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', marginBottom: '24px' }}>
          <span style={{ color: 'var(--syn-comment)' }}>$</span> <span style={{ color: 'var(--syn-keyword)' }}>cat package.json</span>
        </div>

        <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', padding: '20px', border: '1px solid var(--border-color)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: 1.8 }}>
            <div><span style={{ color: 'var(--syn-string)' }}>"name"</span>: <span style={{ color: 'var(--syn-constant)' }}>"{pkg.name}"</span>,</div>
            <div><span style={{ color: 'var(--syn-string)' }}>"version"</span>: <span style={{ color: 'var(--syn-constant)' }}>"{pkg.version}"</span>,</div>
            <div><span style={{ color: 'var(--syn-string)' }}>"description"</span>: <span style={{ color: 'var(--syn-constant)' }}>"{pkg.description}"</span>,</div>
            <div><span style={{ color: 'var(--syn-string)' }}>"author"</span>: <span style={{ color: 'var(--syn-constant)' }}>"{pkg.author}"</span>,</div>
            <div><span style={{ color: 'var(--syn-string)' }}>"license"</span>: <span style={{ color: 'var(--syn-constant)' }}>"{pkg.license}"</span>,</div>
            {pkg.scripts && Object.keys(pkg.scripts).length > 0 && (
              <div>
                <span style={{ color: 'var(--syn-string)' }}>"scripts"</span>: {'{'}
                <div style={{ paddingLeft: '16px' }}>
                  {Object.entries(pkg.scripts).map(([k, v]) => (
                    <div key={k}><span style={{ color: 'var(--syn-string)' }}>"{k}"</span>: <span style={{ color: 'var(--syn-constant)' }}>"{String(v)}"</span>,</div>
                  ))}
                </div>
                {'},'}
              </div>
            )}
            {pkg.dependencies && Object.keys(pkg.dependencies).length > 0 && (
              <div>
                <span style={{ color: 'var(--syn-string)' }}>"dependencies"</span>: {'{'}
                <div style={{ paddingLeft: '16px' }}>
                  {Object.entries(pkg.dependencies).map(([k, v]) => (
                    <div key={k}><span style={{ color: 'var(--syn-string)' }}>"{k}"</span>: <span style={{ color: 'var(--syn-constant)' }}>"{String(v)}"</span>,</div>
                  ))}
                </div>
                {'}'}
              </div>
            )}
          </div>
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
