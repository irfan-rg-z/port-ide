// ============================================================
// Terminal commands and their outputs
// Used by the TerminalPanel for the typing animation
// ============================================================

export interface TerminalEntry {
  command: string;
  output: string[];
  delay?: number; // ms delay before typing this command
}

export const terminalSequence: TerminalEntry[] = [
  {
    command: 'whoami',
    output: [
      'Irfan Gulagundi',
      'SDE-1 Frontend Developer @ Zinier Inc.',
      'CS Graduate — SDM Institute of Technology, Dharwad',
    ],
    delay: 800,
  },
  {
    command: 'cat skills.txt',
    output: [
      '┌─────────────────────────────────────────┐',
      '│  Languages:  JS • TS • Python • Java    │',
      '│  Frontend:   React • Next.js • CSS      │',
      '│  Backend:    Node • Express • PostgreSQL │',
      '│  Cloud:      AWS • GCP • Vercel          │',
      '│  Tools:      Git • Docker • Linux        │',
      '└─────────────────────────────────────────┘',
    ],
    delay: 1200,
  },
  {
    command: 'ls projects/',
    output: [
      'caliber/          inkwell/          swift-dictionary/',
      'f1-predictor/     qube-ai/          xo-store/',
      'birthday-present/',
    ],
    delay: 1000,
  },
  {
    command: 'echo $STATUS',
    output: [
      '🏢 Working at Zinier Inc. — building the future of field service management',
    ],
    delay: 1500,
  },
  {
    command: 'cat contact.md',
    output: [
      '📧  irfanrgulagundi@gmail.com',
      '🐙  github.com/irfangulagundi',
      '💼  linkedin.com/in/irfangulagundi',
      '🌐  irfanrg.dev',
    ],
    delay: 1200,
  },
];

// Terminal prompt prefix
export const TERMINAL_PROMPT = 'irfan@portfolio';
export const TERMINAL_CWD = '~/irfan-portfolio';
