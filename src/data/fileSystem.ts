// ============================================================
// Virtual File System — Portfolio content structured as code files
// Each file maps to a section of the portfolio
// ============================================================

export type FileType = 'md' | 'ts' | 'tsx' | 'json' | 'env' | 'config';

export interface VirtualFile {
  id: string;
  name: string;
  path: string;           // Full path for breadcrumbs
  type: FileType;
  content: CodeLine[];
  gitBlame?: string;      // Optional blame annotation for flavor
}

export interface CodeLine {
  lineNumber: number;
  tokens: Token[];
  indent?: number;        // Indentation level (in spaces)
  isBlank?: boolean;
  blameAnnotation?: string;
}

export interface Token {
  text: string;
  type: 'keyword' | 'string' | 'function' | 'type' | 'comment' | 'constant' | 'operator' | 'variable' | 'property' | 'plain' | 'punctuation';
}

export interface FileTreeNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  fileType?: FileType;
  children?: FileTreeNode[];
  isOpen?: boolean;
}

// ============================================================
// Helper: Create a token quickly
// ============================================================
const t = (text: string, type: Token['type']): Token => ({ text, type });
const plain = (text: string): Token => t(text, 'plain');
const kw = (text: string): Token => t(text, 'keyword');
const str = (text: string): Token => t(text, 'string');
const fn = (text: string): Token => t(text, 'function');
const tp = (text: string): Token => t(text, 'type');
const cmt = (text: string): Token => t(text, 'comment');
const cnst = (text: string): Token => t(text, 'constant');
const op = (text: string): Token => t(text, 'operator');
const v = (text: string): Token => t(text, 'variable');
const prop = (text: string): Token => t(text, 'property');
const punc = (text: string): Token => t(text, 'punctuation');

// ============================================================
// Helper: Build lines from token arrays
// ============================================================
function buildLines(tokenArrays: (Token[] | null)[]): CodeLine[] {
  return tokenArrays.map((tokens, i) => ({
    lineNumber: i + 1,
    tokens: tokens || [],
    isBlank: tokens === null || tokens.length === 0,
  }));
}

// ============================================================
// FILE: README.md — Hero / Landing
// ============================================================
export const readmeFile: VirtualFile = {
  id: 'readme',
  name: 'README.md',
  path: '.github/README.md',
  type: 'md',
  content: buildLines([
    [cmt('<!-- irfan-portfolio -->')],
    null,
    [plain('# '), fn('Hey, I\'m Irfan'), plain(' 👋')],
    null,
    [plain('> '), str('Full-Stack Developer'), plain(' crafting modern web experiences')],
    [plain('> with '), str('clean architecture'), plain(' and '), str('type-safe systems'), plain('.')],
    null,
    [plain('---')],
    null,
    [plain('## '), fn('What I Do')],
    null,
    [plain('I build things that live on the internet. My engineering')],
    [plain('philosophy revolves around:')],
    null,
    [plain('- '), str('🏗️  Clean, maintainable architecture')],
    [plain('- '), str('⚡ High-performance, smooth user experiences')],
    [plain('- '), str('🔮 Predictable behavior & scalable design')],
    [plain('- '), str('🎨 Attention to visual detail')],
    null,
    [plain('## '), fn('Selected Work')],
    null,
    [plain('- '), fn('The Swift Dictionary'), plain(' — Full-stack lexical product across 12 Taylor Swift eras. '), str('the-swift-dictionary.me')],
    [plain('- '), fn('Inkwell'), plain(' — Creator-first CMS with tRPC + Drizzle. ~43% API latency reduction. '), str('inkwelll.vercel.app')],
    [plain('- '), fn('The XO Store'), plain(' — Production merch storefront. Stripe + Auth0 + Cloudinary. '), str('thexostore.vercel.app')],
    [plain('- '), fn('Caliber'), plain(' — AI agent evaluation platform. 60-70% faster eval cycles, ~30% retrieval accuracy gain. '), str('caliber-ai.vercel.app')],
    [plain('- '), fn('F1 Race Predictor'), plain(' — ML pipeline with Ergast + OpenF1 data. ~82% prediction accuracy. '), str('github.com/irfan-rg/f1-predictor')],
    [plain('- '), fn('Birthday Present'), plain(' — Interactive digital keepsake. Cinematic scroll + physics. '), str('my-present.vercel.app')],
    [plain('- '), fn('Qube AI'), plain(' — Low-latency conversational AI. Groq Llama, 14k req/day. '), str('qube-chat.vercel.app')],
    null,
    [plain('## '), fn('Contact')],
    null,
    [plain('📧 '), str('irfanrgulagundi@gmail.com')],
    [plain('🐙 '), str('github.com/irfan-rg')],
    [plain('💼 '), str('linkedin.com/in/irfanrg')],
    [plain('🌐 '), str('irfanrg.dev')],
    null,
    [cmt('<!-- Built with ❤️ and way too much coffee -->')],
  ]),
};

// ============================================================
// FILE: about.ts — About Me
// ============================================================
export const aboutFile: VirtualFile = {
  id: 'about',
  name: 'about.ts',
  path: 'src/about.ts',
  type: 'ts',
  content: buildLines([
    [cmt('/**')],
    [cmt(' * about.ts — The human behind the commits')],
    [cmt(' * ')],
    [cmt(' * Growing up, I was the kid who took apart electronics to see how')],
    [cmt(' * they worked — and sometimes reassembled them better. That curiosity')],
    [cmt(' * found its home in code the first time I wrote a loop and watched the')],
    [cmt(' * screen fill with patterns. I was hooked on the idea that a few')],
    [cmt(' * lines of text could become something alive.')],
    [cmt(' * ')],
    [cmt(' * University deepened that obsession. I went from writing scripts')],
    [cmt(' * to building full-stack apps that people actually used. Somewhere')],
    [cmt(' * along the way, I realized I care less about the framework and more')],
    [cmt(' * about the architecture. I care about how pieces connect, how data')],
    [cmt(' * flows, and whether the system stays sane at 3 AM on a Friday night.')],
    // [cmt(' * when production misbehaves.')],
    [cmt(' * ')],
    [cmt(' * Now I build web applications. React on the frontend, Node on the')],
    [cmt(' * backend, and a lot of TypeScript in between. I gravitate toward')],
    [cmt(' * problems where clean design meets real users — dashboards, creator')],
    [cmt(' * tools, prediction systems. The kind of work that makes me lose')],
    [cmt(' * track of time.')],
    [cmt(' * ')],
    [cmt(' */')],
    null,
    [kw('interface'), plain(' '), tp('Developer'), plain(' '), punc('{')],
    [plain('  '), prop('name'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('role'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('company'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('location'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('education'), punc(':'), plain(' '), tp('Education'), punc(';')],
    [plain('  '), prop('philosophy'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('interests'), punc(':'), plain(' '), tp('string'), punc('[]'), punc(';')],
    [plain('  '), prop('superpower'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('kryptonite'), punc(':'), plain(' '), tp('string'), punc(';')],
    [punc('}')],
    null,
    [kw('interface'), plain(' '), tp('Education'), plain(' '), punc('{')],
    [plain('  '), prop('degree'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('institution'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('location'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('graduated'), punc(':'), plain(' '), tp('string'), punc(';')],
    [punc('}')],
    null,
    [kw('export'), plain(' '), kw('const'), plain(' '), v('irfan'), op(':'), plain(' '), tp('Developer'), plain(' '), op('='), plain(' '), punc('{')],
    [plain('  '), prop('name'), punc(':'), plain(' '), str('"Irfan Gulagundi"'), punc(',')],
    [plain('  '), prop('role'), punc(':'), plain(' '), str('"SDE-1 Frontend Developer"'), punc(',')],
    [plain('  '), prop('company'), punc(':'), plain(' '), str('"Zinier Inc."'), punc(',')],
    [plain('  '), prop('location'), punc(':'), plain(' '), str('"Bengaluru, India"'), punc(',')],
    null,
    [plain('  '), prop('education'), punc(':'), plain(' '), punc('{')],
    [plain('    '), prop('degree'), punc(':'), plain(' '), str('"B.E. Computer Science"'), punc(',')],
    [plain('    '), prop('institution'), punc(':'), plain(' '), str('"SDM Institute of Technology"'), punc(',')],
    [plain('    '), prop('location'), punc(':'), plain(' '), str('"Ujire, India"'), punc(',')],
    [plain('    '), prop('graduated'), punc(':'), plain(' '), str('"May 2026"'), punc(',')],
    [plain('  '), punc('}'), punc(',')],
    null,
    [plain('  '), prop('philosophy'), punc(':'), plain(' '), str('"Write code that reads like a good story. Optimize for clarity first, performance second, cleverness never."'), punc(',')],
    null,
    [plain('  '), prop('interests'), punc(':'), plain(' '), punc('[')],
    [plain('    '), str('"Reading Docs"'), punc(','), plain(' '), str('"Dark R&B"'), punc(','), plain(' '), str('"Cycling"'), punc(','), plain(' '), str('"Typography"'), punc(','), plain(' '), str('"F1 Racing"'), punc(','), plain(' '), str('"Coffee"'), punc(','), plain(' '), str('"Pixel Art"'), punc(','), plain(' '), str('"Sci-Fi Movies"'), punc(','), plain(' '), str('"Minimal Design"')],
    [plain('  '), punc(']'), punc(',')],
    null,
    [plain('  '), prop('superpower'), punc(':'), plain(' '), str('"can debug any CSS issue by staring at it long enough"'), punc(',')],
    [plain('  '), prop('kryptonite'), punc(':'), plain(' '), str('"will spend 4 hours perfecting a border-radius"'), punc(',')],
    [punc('}'), punc(';')],
    null,
    [kw('export'), plain(' '), kw('default'), plain(' '), v('irfan'), punc(';')],
  ]),
};

// ============================================================
// FILE: experience.json — Work Experience
// ============================================================
export const experienceFile: VirtualFile = {
  id: 'experience',
  name: 'experience.json',
  path: 'src/experience.json',
  type: 'json',
  content: buildLines([
    [punc('{')],
    [plain('  '), str('"experience"'), punc(':'), plain(' '), punc('[')],
    [plain('    '), punc('{')],
    [plain('      '), str('"company"'), punc(':'), plain(' '), str('"Zinier Inc."'), punc(',')],
    [plain('      '), str('"role"'), punc(':'), plain(' '), str('"SDE-1 Frontend Developer"'), punc(',')],
    [plain('      '), str('"type"'), punc(':'), plain(' '), str('"Full-time"'), punc(',')],
    [plain('      '), str('"period"'), punc(':'), plain(' '), str('"Jun 2026 — Present"'), punc(',')],
    [plain('      '), str('"location"'), punc(':'), plain(' '), str('"Bengaluru, India"'), punc(',')],
    [plain('      '), str('"description"'), punc(':'), plain(' '), str('"Building and maintaining enterprise-grade Field Service Management applications with React, JavaScript, and modern frontend architecture."'), punc(',')],
    [plain('      '), str('"highlights"'), punc(':'), plain(' '), punc('[')],
    [plain('        '), str('"Working on frontend-core design system & components"'), punc(',')],
    [plain('        '), str('"Contributing to design token migration initiatives"'), punc(',')],
    [plain('        '), str('"Building accessible, performant UI at scale"')],
    [plain('      '), punc(']'), punc(',')],
    [plain('      '), str('"stack"'), punc(':'), plain(' '), punc('[')],
    [plain('        '), str('"React"'), punc(','), plain(' '), str('"JavaScript"'), punc(','), plain(' '), str('"Storybook"'), punc(',')],
    [plain('        '), str('"Design Tokens"'), punc(','), plain(' '), str('"CSS Modules"')],
    [plain('      '), punc(']')],
    [plain('    '), punc('}')],
    [plain('  '), punc(']'), punc(',')],
    null,
    [plain('  '), str('"education"'), punc(':'), plain(' '), punc('[')],
    [plain('    '), punc('{')],
    [plain('      '), str('"institution"'), punc(':'), plain(' '), str('"SDM Institute of Technology"'), punc(',')],
    [plain('      '), str('"degree"'), punc(':'), plain(' '), str('"B.E. Computer Science"'), punc(',')],
    [plain('      '), str('"location"'), punc(':'), plain(' '), str('"Ujire, India"'), punc(',')],
    [plain('      '), str('"period"'), punc(':'), plain(' '), str('"2022 — 2026"'), punc(',')],
    [plain('      '), str('"graduated"'), punc(':'), plain(' '), str('"May 2026"')],
    [plain('    '), punc('}')],
    [plain('  '), punc(']')],
    [punc('}')],
  ]),
};

// ============================================================
// FILE: skills.config.ts — Technical Arsenal
// ============================================================
export const skillsFile: VirtualFile = {
  id: 'skills',
  name: 'skills.config.ts',
  path: 'src/skills.config.ts',
  type: 'ts',
  content: buildLines([
    [cmt('/**')],
    [cmt(' * skills.config.ts — Technical Arsenal')],
    [cmt(' * Every tool in the developer\'s toolkit')],
    [cmt(' */')],
    null,
    [kw('import'), plain(' '), kw('type'), plain(' '), punc('{'), plain(' '), tp('SkillConfig'), plain(' '), punc('}'), plain(' '), kw('from'), plain(' '), str('"@/types"'), punc(';')],
    null,
    [kw('export'), plain(' '), kw('const'), plain(' '), v('skills'), op(':'), plain(' '), tp('SkillConfig'), plain(' '), op('='), plain(' '), punc('{')],
    null,
    [plain('  '), prop('coreEngineering'), punc(':'), plain(' '), punc('{')],
    [plain('    '), prop('label'), punc(':'), plain(' '), str('"Core Engineering"'), punc(',')],
    [plain('    '), prop('items'), punc(':'), plain(' '), punc('[')],
    [plain('      '), str('"C/C++"'), punc(','), plain(' '), str('"Python"'), punc(','), plain(' '), str('"Java"'), punc(',')],
    [plain('      '), str('"JavaScript"'), punc(','), plain(' '), str('"TypeScript"')],
    [plain('    '), punc(']'), punc(',')],
    [plain('  '), punc('}'), punc(',')],
    null,
    [plain('  '), prop('frontend'), punc(':'), plain(' '), punc('{')],
    [plain('    '), prop('label'), punc(':'), plain(' '), str('"Frontend Ecosystem"'), punc(',')],
    [plain('    '), prop('items'), punc(':'), plain(' '), punc('[')],
    [plain('      '), str('"React.js"'), punc(','), plain(' '), str('"Next.js"'), punc(','), plain(' '), str('"Tailwind CSS"'), punc(',')],
    [plain('      '), str('"HTML5/CSS3"'), punc(','), plain(' '), str('"Framer Motion"')],
    [plain('    '), punc(']'), punc(',')],
    [plain('  '), punc('}'), punc(',')],
    null,
    [plain('  '), prop('backend'), punc(':'), plain(' '), punc('{')],
    [plain('    '), prop('label'), punc(':'), plain(' '), str('"Backend & Cloud"'), punc(',')],
    [plain('    '), prop('items'), punc(':'), plain(' '), punc('[')],
    [plain('      '), str('"Node.js"'), punc(','), plain(' '), str('"Express"'), punc(','), plain(' '), str('"REST APIs"'), punc(',')],
    [plain('      '), str('"AWS"'), punc(','), plain(' '), str('"Google Cloud"'), punc(',')],
    [plain('      '), str('"MongoDB"'), punc(','), plain(' '), str('"PostgreSQL"')],
    [plain('    '), punc(']'), punc(',')],
    [plain('  '), punc('}'), punc(',')],
    null,
    [plain('  '), prop('dataAndAI'), punc(':'), plain(' '), punc('{')],
    [plain('    '), prop('label'), punc(':'), plain(' '), str('"Data & AI"'), punc(',')],
    [plain('    '), prop('items'), punc(':'), plain(' '), punc('[')],
    [plain('      '), str('"Machine Learning"'), punc(','), plain(' '), str('"Predictive Modeling"'), punc(',')],
    [plain('      '), str('"Big Data (Hadoop, Spark)"'), punc(',')],
    [plain('    '), punc(']'), punc(',')],
    [plain('  '), punc('}'), punc(',')],
    null,
    [plain('  '), prop('web3AndSecurity'), punc(':'), plain(' '), punc('{')],
    [plain('    '), prop('label'), punc(':'), plain(' '), str('"Web3 & Security"'), punc(',')],
    [plain('    '), prop('items'), punc(':'), plain(' '), punc('[')],
    [plain('      '), str('"Solidity"'), punc(','), plain(' '), str('"Smart Contracts"'), punc(',')],
    [plain('      '), str('"Cryptography"'), punc(','), plain(' '), str('"Network Security"'), punc(',')],
    [plain('      '), str('"Blockchain"')],
    [plain('    '), punc(']'), punc(',')],
    [plain('  '), punc('}'), punc(',')],
    null,
    [plain('  '), prop('devops'), punc(':'), plain(' '), punc('{')],
    [plain('    '), prop('label'), punc(':'), plain(' '), str('"DevOps & Tools"'), punc(',')],
    [plain('    '), prop('items'), punc(':'), plain(' '), punc('[')],
    [plain('      '), str('"Git/GitHub"'), punc(','), plain(' '), str('"Docker"'), punc(','), plain(' '), str('"Vercel"'), punc(',')],
    [plain('      '), str('"Linux/Ubuntu"'), punc(','), plain(' '), str('"VS Code"')],
    [plain('    '), punc(']'), punc(',')],
    [plain('  '), punc('}'), punc(',')],
    null,
    [punc('}'), punc(';')],
  ]),
};

// ============================================================
// FILE: reach-out.ts — Contact
// ============================================================
export const contactFile: VirtualFile = {
  id: 'contact',
  name: 'reach-out.ts',
  path: 'contact/reach-out.ts',
  type: 'ts',
  content: buildLines([
    [cmt('/**')],
    [cmt(' * reach-out.ts — Let\'s connect!')],
    [cmt(' * ')],
    [cmt(' * Whether it\'s about a project, an opportunity,')],
    [cmt(' * or just to say hi — I\'d love to hear from you.')],
    [cmt(' */')],
    null,
    [kw('interface'), plain(' '), tp('ContactInfo'), plain(' '), punc('{')],
    [plain('  '), prop('email'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('github'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('linkedin'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('portfolio'), punc(':'), plain(' '), tp('string'), punc(';')],
    [punc('}')],
    null,
    [kw('export'), plain(' '), kw('const'), plain(' '), v('contact'), op(':'), plain(' '), tp('ContactInfo'), plain(' '), op('='), plain(' '), punc('{')],
    [plain('  '), prop('email'), punc(':'), plain(' '), str('"irfanrgulagundi@gmail.com"'), punc(',')],
    [plain('  '), prop('github'), punc(':'), plain(' '), str('"https://github.com/irfan-rg"'), punc(',')],
    [plain('  '), prop('linkedin'), punc(':'), plain(' '), str('"https://linkedin.com/in/irfanrg"'), punc(',')],
    [plain('  '), prop('portfolio'), punc(':'), plain(' '), str('"https://irfanrg.dev"'), punc(',')],
    [punc('}'), punc(';')],
    null,
    [kw('export'), plain(' '), kw('const'), plain(' '), fn('getInTouch'), plain(' '), op('='), plain(' '), kw('async'), plain(' '), punc('(')],
    [plain('  '), v('message'), op(':'), plain(' '), tp('string')],
    [punc(')'), op(':'), plain(' '), tp('Promise'), op('<'), tp('void'), op('>'), plain(' '), op('=>'), plain(' '), punc('{')],
    [plain('  '), kw('const'), plain(' '), v('subject'), plain(' '), op('='), plain(' '), fn('encodeURIComponent'), punc('(')],
    [plain('    '), str('"Hey Irfan! Let\'s connect 👋"')],
    [plain('  '), punc(')'), punc(';')],
    null,
    [plain('  '), v('window'), punc('.'), fn('open'), punc('(')],
    [plain('    '), str('`mailto:${'), v('contact'), str('.email}?subject=${'), v('subject'), str('}`')],
    [plain('  '), punc(')'), punc(';')],
    [punc('}'), punc(';')],
    null,
    [cmt('// Pro tip: Just shoot me an email! 📬')],
  ]),
};

// ============================================================
// FILE: .env — Social Links (Easter Egg!)
// ============================================================
export const envFile: VirtualFile = {
  id: 'env',
  name: '.env',
  path: '.env',
  type: 'env',
  content: buildLines([
    [cmt('# =======================================')],
    [cmt('# Environment Variables')],
    [cmt('# ⚠️  Do not commit to version control!')],
    [cmt('# =======================================')],
    null,
    [cmt('# Identity')],
    [v('DEVELOPER_NAME'), op('='), str('"Irfan Gulagundi"')],
    [v('DEVELOPER_ALIAS'), op('='), str('"irfan"')],
    [v('DEVELOPER_ROLE'), op('='), str('"SDE-1 Frontend Developer"')],
    [v('DEVELOPER_COMPANY'), op('='), str('"Zinier Inc."')],
    [v('DEVELOPER_STATUS'), op('='), str('"Building at Zinier"')],
    null,
    [cmt('# Social Links')],
    [v('GITHUB_URL'), op('='), str('"https://github.com/irfan-rg"')],
    [v('LINKEDIN_URL'), op('='), str('"https://linkedin.com/in/irfanrg"')],
    [v('EMAIL'), op('='), str('"irfanrgulagundi@gmail.com"')],
    [v('PORTFOLIO_URL'), op('='), str('"https://irfanrg.dev"')],
    null,
    [cmt('# Secret 🤫')],
    [v('COFFEE_PREFERENCE'), op('='), str('"black, no sugar, yes code"')],
    [v('FAVORITE_EDITOR'), op('='), str('"Zed"')],
    [v('DARK_MODE'), op('='), str('"always"')],
    [v('GRADUATED'), op('='), str('"May 2026"')],
    null,
    [cmt('# Build Config')],
    [v('NODE_ENV'), op('='), str('"production"')],
    [v('NEXT_PUBLIC_SITE_URL'), op('='), str('"https://irfanrg.dev"')],
  ]),
};

// ============================================================
// FILE: package.json — Meta Info
// ============================================================
export const packageJsonFile: VirtualFile = {
  id: 'packagejson',
  name: 'package.json',
  path: 'package.json',
  type: 'json',
  content: buildLines([
    [punc('{')],
    [plain('  '), str('"name"'), punc(':'), plain(' '), str('"irfan-portfolio"'), punc(',')],
    [plain('  '), str('"version"'), punc(':'), plain(' '), str('"2.0.0"'), punc(',')],
    [plain('  '), str('"description"'), punc(':'), plain(' '), str('"Portfolio of Irfan Gulagundi —"')],
    [plain('    '), op('+'), plain(' '), str('"SDE-1 Frontend Developer at Zinier Inc."'), punc(',')],
    [plain('  '), str('"author"'), punc(':'), plain(' '), str('"Irfan Gulagundi <irfanrgulagundi@gmail.com>"'), punc(',')],
    [plain('  '), str('"license"'), punc(':'), plain(' '), str('"MIT"'), punc(',')],
    [plain('  '), str('"private"'), punc(':'), plain(' '), cnst('true'), punc(',')],
    null,
    [plain('  '), str('"scripts"'), punc(':'), plain(' '), punc('{')],
    [plain('    '), str('"dev"'), punc(':'), plain(' '), str('"next dev"'), punc(',')],
    [plain('    '), str('"build"'), punc(':'), plain(' '), str('"next build"'), punc(',')],
    [plain('    '), str('"start"'), punc(':'), plain(' '), str('"next start"'), punc(',')],
    [plain('    '), str('"lint"'), punc(':'), plain(' '), str('"next lint"')],
    [plain('  '), punc('}'), punc(',')],
    null,
    [plain('  '), str('"dependencies"'), punc(':'), plain(' '), punc('{')],
    [plain('    '), str('"next"'), punc(':'), plain(' '), str('"^15.0.0"'), punc(',')],
    [plain('    '), str('"react"'), punc(':'), plain(' '), str('"^19.0.0"'), punc(',')],
    [plain('    '), str('"react-dom"'), punc(':'), plain(' '), str('"^19.0.0"')],
    [plain('  '), punc('}'), punc(',')],
    null,
    [plain('  '), str('"keywords"'), punc(':'), plain(' '), punc('[')],
    [plain('    '), str('"portfolio"'), punc(','), plain(' '), str('"frontend"'), punc(','), plain(' '), str('"react"'), punc(',')],
    [plain('    '), str('"typescript"'), punc(','), plain(' '), str('"nextjs"'), punc(','), plain(' '), str('"zed-ide"')],
    [plain('  '), punc(']')],
    [punc('}')],
  ]),
};

// ============================================================
// PROJECT FILES — Individual project showcase files
// ============================================================

function createProjectFile(
  id: string,
  name: string,
  projectName: string,
  description: string,
  highlights: string[],
  techStack: string[],
  category: string,
  featured: boolean = false,
  liveUrl?: string,
  repoUrl?: string,
): VirtualFile {
  const lines: (Token[] | null)[] = [
    [cmt('/**')],
    [cmt(` * ${name} — Project Showcase`)],
    [cmt(' */')],
    null,
    [kw('import'), plain(' '), tp('React'), plain(' '), kw('from'), plain(' '), str('"react"'), punc(';')],
    null,
    [kw('interface'), plain(' '), tp('ProjectProps'), plain(' '), punc('{')],
    [plain('  '), prop('featured'), op('?'), punc(':'), plain(' '), tp('boolean'), punc(';')],
    [plain('  '), prop('category'), punc(':'), plain(' '), tp('string'), punc(';')],
    [punc('}')],
    null,
    [kw('export'), plain(' '), kw('const'), plain(' '), fn(projectName), op(':'), plain(' '), tp('React.FC'), op('<'), tp('ProjectProps'), op('>'), plain(' '), op('='), plain(' '), punc('('), punc(')'), plain(' '), op('='), plain(' '), kw('async'), plain(' '), punc('{')],
    [plain('  '), kw('return'), plain(' '), punc('(')],
    [plain('    '), op('<'), tp('Project'), op('>')],
    [plain('      '), op('<'), tp('Title'), op('>'), str(projectName), op('<'), op('/'), tp('Title'), op('>')],
    [plain('      '), op('<'), tp('Category'), op('>'), str(category), op('<'), op('/'), tp('Category'), op('>')],
    [plain('      '), op('<'), tp('Featured'), op('>'), cnst(String(featured)), op('<'), op('/'), tp('Featured'), op('>')],
    null,
    [plain('      '), op('<'), tp('Description'), op('>')],
    [plain('        '), str(`"${description}"`)],
    [plain('      '), op('<'), op('/'), tp('Description'), op('>')],
    null,
    [plain('      '), op('<'), tp('Highlights'), op('>')],
  ];

  highlights.forEach(h => {
    lines.push([plain('        '), op('<'), tp('Point'), op('>'), str(`"${h}"`), op('<'), op('/'), tp('Point'), op('>')]);
  });

  lines.push(
    [plain('      '), op('<'), op('/'), tp('Highlights'), op('>')],
    null,
    [plain('      '), op('<'), tp('TechStack'), plain(' '), prop('items'), op('='), punc('{'), punc('[')],
  );

  const techStr = techStack.map(t => `"${t}"`).join(', ');
  lines.push([plain('        '), str(techStr)]);

  if (liveUrl) {
    lines.push(
      null,
      [plain('      '), op('<'), tp('LiveURL'), op('>'), str(`"${liveUrl}"`), op('<'), op('/'), tp('LiveURL'), op('>')],
    );
  }
  if (repoUrl) {
    lines.push(
      [plain('      '), op('<'), tp('RepoURL'), op('>'), str(`"${repoUrl}"`), op('<'), op('/'), tp('RepoURL'), op('>')],
    );
  }

  lines.push(
    [plain('      '), punc(']'), punc('}'), plain(' '), op('/'), op('>')],
    [plain('    '), op('<'), op('/'), tp('Project'), op('>')],
    [plain('  '), punc(')'), punc(';')],
    [punc('}'), punc(';')],
    null,
    [kw('export'), plain(' '), kw('default'), plain(' '), fn(projectName), punc(';')],
  );

  return {
    id,
    name,
    path: `src/projects/${name}`,
    type: 'tsx',
    content: buildLines(lines),
  };
}

export const projectFiles: VirtualFile[] = [
  createProjectFile(
    'the-swift-dictionary',
    'the-swift-dictionary.tsx',
    'The Swift Dictionary',
    'A full-stack lexical product that transforms Taylor Swift lyrics into a searchable vocabulary engine across all 12 eras. Includes dictionary filters, era/song exploration, Word of the Day, and saved words with Supabase Auth + RLS.',
    [
      '1,200+ vocab entries with definition, lyric snippet, era badge',
      'Era-specific colour palettes with Cormorant Garamond / Bricolage Grotesque typography',
      'Supabase Auth + RLS for per-user favorite collections',
      'Framer Motion page transitions, dark mode persistence, responsive design',
      'Python data pipeline: lyrics scrape → GPT-4 vocab extraction → Supabase seed',
    ],
    ['Next.js 15', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion', 'Python'],
    'Content Platform',
    true,
    'https://the-swift-dictionary.me',
    'https://github.com/irfan-rg/the-swift-dictionary',
  ),
  createProjectFile(
    'inkwell',
    'inkwell.tsx',
    'Inkwell',
    'A creator-first CMS platform for publishing and managing long-form content with a type-safe tRPC + Drizzle backend. Optimized editorial workflows and reduced API latency by ~43% for faster content shipping.',
    [
      'Next.js + React + TypeScript with App Router and Server Actions',
      'tRPC end-to-end type safe APIs, Drizzle ORM with PostgreSQL on Supabase',
      'Tailwind CSS + Radix UI primitives, clean editorial design system',
      'Split-pane Markdown editor with live preview, drag-and-drop image uploads',
      'Role-based access, SEO optimized SSR, sub-second loads via Server Components + ISR',
      '~43% API latency reduction, optimized editorial workflows',
    ],
    ['Next.js', 'TypeScript', 'tRPC', 'Drizzle ORM', 'Supabase', 'Tailwind CSS', 'Radix UI'],
    'CMS Platform',
    true,
    'https://inkwelll.vercel.app',
    'https://github.com/irfan-rg/inkwell',
  ),
  createProjectFile(
    'the-xo-store',
    'the-xo-store.tsx',
    'The XO Store',
    'A production-style merchandise storefront focused on conversion and trust. Integrated Stripe checkout, Auth0 identity, and media handling to deliver reliable transactions and a polished buying journey.',
    [
      'React + Vite SPA with Tailwind CSS, client-side routing, dark theme',
      'Auth0 JWT verification for protected routes, Stripe Checkout sessions for payments',
      'Express + MongoDB Mongoose backend for products, orders, webhooks',
      'Cloudinary signed uploads with automatic responsive variants',
      'Vercel frontend + Render backend, zero-downtime deploys',
    ],
    ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Auth0', 'Cloudinary'],
    'Commerce',
    true,
    'https://thexostore.vercel.app',
    'https://github.com/irfan-rg/the-xo-store',
  ),
  createProjectFile(
    'caliber',
    'caliber.tsx',
    'Caliber',
    'An AI agent evaluation platform for benchmarking prompt chains and response quality at scale. Built repeatable scoring workflows that accelerated evaluation cycles by 60-70% and improved retrieval accuracy by ~30%.',
    [
      'KPI cards: total evaluations, avg score, latency, success rate',
      'Interactive trend chart with 7/14/30 day window selection',
      'Category breakdown visualization and recent activity panel',
      'Paginated evaluations table with search across ID/prompt/response and category/date filters',
      'Role-based UI: Admin vs Viewer toggle persisted in localStorage, UI adapts actions',
      '60-70% faster evaluation cycles, ~30% retrieval accuracy improvement',
      'CSV/JSON export, repeatable scoring workflows',
    ],
    ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'ShadCN UI', 'Recharts'],
    'AI Platform',
    true,
    'https://caliber-ai.vercel.app',
    'https://github.com/irfan-rg/caliber',
  ),
  createProjectFile(
    'f1-predictor',
    'f1-predictor.tsx',
    'F1 Race Predictor',
    'A race outcome prediction system combining historical Formula 1 performance data with real-time qualifying signals. Built a multi-season ML training workflow and reached ~82% prediction accuracy.',
    [
      'Historical data from Ergast API spanning multiple seasons, feature engineering: grid, weather, tyre, team form',
      'Real-time qualifying ingestion via OpenF1 API for up-to-date predictions',
      'Scikit-learn GradientBoostingClassifier with calibrated probability output',
      'CLI UX: python predict.py --race "Monaco 2024" --qualifying-file quali.json',
      'Reproducible pipeline: preprocess → train_model → predict with versioned model artifacts',
      '~82% prediction accuracy on test seasons',
    ],
    ['Python 3.11', 'Pandas', 'Scikit-learn', 'OpenF1 API', 'Ergast API', 'Joblib', 'GitHub Actions'],
    'ML Analytics',
    false,
    undefined,
    'https://github.com/irfan-rg/f1-predictor',
  ),
  createProjectFile(
    'birthday-present',
    'birthday-present.tsx',
    'Birthday Present',
    'An interactive web storytelling piece built as a digital keepsake, blending cinematic motion and playful physics for emotional impact. Designed custom scene choreography for an immersive experience.',
    [
      'Envelope reveal animation with animated hero and atmospheric backgrounds',
      'Cinematic scroll narrative with Framer Motion choreography',
      'Particle physics with Particles.js for interactive elements',
      'Custom scene transitions, parallax effects, ambient audio',
      'Fully responsive with mobile-optimized interactions',
    ],
    ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Particles.js'],
    'Interactive Experience',
    false,
    'https://my-present.vercel.app',
    'https://github.com/irfan-rg/birthday-present',
  ),
  createProjectFile(
    'qube-ai',
    'qube-ai.tsx',
    'Qube AI',
    'A low-latency conversational AI app engineered for speed and throughput. Integrated Groq-hosted Llama models with lightweight backend orchestration to support up to 14k requests per day.',
    [
      'Groq Cloud API for sub-second Llama inference',
      'Node.js + Express lightweight backend orchestration',
      'Optimized for 14k requests/day throughput',
      'Clean conversational UI with streaming responses',
    ],
    ['Node.js', 'Express', 'Groq Cloud API', 'HTML/CSS', 'TypeScript'],
    'AI Product',
    false,
    'https://qube-chat.vercel.app',
    'https://github.com/irfan-rg/qube-ai',
  ),
];

// ============================================================
// FILE TREE STRUCTURE
// ============================================================
export const fileTree: FileTreeNode[] = [
  {
    id: 'github-folder',
    name: '.github',
    type: 'folder',
    isOpen: true,
    children: [
      { id: 'readme', name: 'README.md', type: 'file', fileType: 'md' },
    ],
  },
  {
    id: 'src-folder',
    name: 'src',
    type: 'folder',
    isOpen: true,
    children: [
      { id: 'about', name: 'about.ts', type: 'file', fileType: 'ts' },
      { id: 'experience', name: 'experience.json', type: 'file', fileType: 'json' },
      { id: 'skills', name: 'skills.config.ts', type: 'file', fileType: 'ts' },
      {
        id: 'projects-folder',
        name: 'projects',
        type: 'folder',
        isOpen: false,
        children: projectFiles.map(p => ({
          id: p.id,
          name: p.name,
          type: 'file' as const,
          fileType: 'tsx' as FileType,
        })),
      },
    ],
  },
  {
    id: 'contact-folder',
    name: 'contact',
    type: 'folder',
    isOpen: false,
    children: [
      { id: 'contact', name: 'reach-out.ts', type: 'file', fileType: 'ts' },
    ],
  },
  { id: 'env', name: '.env', type: 'file', fileType: 'env' },
  { id: 'packagejson', name: 'package.json', type: 'file', fileType: 'json' },
];

// ============================================================
// ALL FILES MAP — Quick lookup by ID
// ============================================================
export const allFiles: Record<string, VirtualFile> = {
  readme: readmeFile,
  about: aboutFile,
  experience: experienceFile,
  skills: skillsFile,
  contact: contactFile,
  env: envFile,
  packagejson: packageJsonFile,
  ...Object.fromEntries(projectFiles.map(f => [f.id, f])),
};

// Default open file
export const DEFAULT_FILE_ID = 'readme';
export const DEFAULT_OPEN_TABS = ['readme'];