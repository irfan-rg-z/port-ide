// ============================================================
// Terminal commands and their outputs
// Used by the TerminalPanel for the typing animation
// ============================================================

export interface TerminalEntry {
  command: string;
  output: string[];
  delay?: number;
}

export const terminalSequence: TerminalEntry[] = [
  {
    command: 'info',
    output: [
      'Irfan Gulagundi',
      'Full‑Stack Engineer — 2026 B.Tech CS Grad',
    ],
    delay: 600,
  },
  {
    command: 'cat profile.json',
    output: [
      '{',
      '  "role": "Full‑Stack Engineer",',
      '  "focus": ["Type‑safe full‑stack", "ML pipelines", "Design systems"],',
      '  "status": "currently_employed",',
      '  "location": "Bengaluru / Remote"',
      '}',
    ],
    delay: 800,
  },
  {
    command: 'cat contact.txt',
    output: [
      'Email:      irfanrgulagundi@gmail.com',
      'GitHub:     https://github.com/irfan-rg',
      'LinkedIn:   https://linkedin.com/in/irfanrg',
      'Portfolio:  https://irfanrg.dev',
    ],
    delay: 600,
  },
];

export const TERMINAL_PROMPT = 'irfan@';
export const TERMINAL_CWD = '~/portfolio';