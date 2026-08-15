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
    [plain('> with '), str('clean architecture'), plain(' and '), str('buttery-smooth UX'), plain('.')],
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
    [plain('## '), fn('Projects I Built')],
    null,
    [plain('- '), fn('Inkwell'), plain(' — Swiss-design blogging platform. Next.js 16 + tRPC + Drizzle + Supabase. '), str('inkwelll.vercel.app')],
    [plain('- '), fn('TheSwiftDictionary'), plain(' — Taylor Swift lyrical vocab explorer. Next.js 15 + Supabase + Framer Motion. '), str('the-swift-dictionary.me')],
    [plain('- '), fn('Caliber'), plain(' — AI evaluation dashboard with KPIs, trends, role-based UI. '), str('caliber-ai.vercel.app')],
    [plain('- '), fn('TheXOStore'), plain(' — The Weeknd merch store. React 19 + Vite + Stripe + Auth0 + Cloudinary. '), str('thexostore.vercel.app')],
    [plain('- '), fn('F1RacePredictor'), plain(' — ML race winner predictor with Ergast + OpenF1 data. Python + Scikit-learn. '), str('github.com/irfan-rg/f1-predictor')],
    [plain('- '), fn('BirthdayPresent'), plain(' — Interactive birthday keepsake with envelope reveal + audio. React 19 + Vite. ')],
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
    [cmt(' * Started with tinkering on school PCs, fell in love with building')],
    [cmt(' * things that people actually use. Now shipping full-stack products,')],
    [cmt(' * from Swiss-design blogs to ML pipelines, with a bias for type safety')],
    [cmt(' * and clean UX. Still learning every day.')],
    [cmt(' */')],
    null,
    [kw('interface'), plain(' '), tp('Developer'), plain(' '), punc('{')],
    [plain('  '), prop('name'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('role'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('company'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('education'), punc(':'), plain(' '), tp('Education'), punc(';')],
    [plain('  '), prop('passions'), punc(':'), plain(' '), tp('string'), punc('[]'), punc(';')],
    [plain('  '), prop('philosophy'), punc(':'), plain(' '), tp('string'), punc(';')],
    [punc('}')],
    null,
    [kw('interface'), plain(' '), tp('Education'), plain(' '), punc('{')],
    [plain('  '), prop('degree'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('institution'), punc(':'), plain(' '), tp('string'), punc(';')],
    [plain('  '), prop('location'), punc(':'), plain(' '), tp('string'), punc(';')],
    [punc('}')],
    null,
    [kw('export'), plain(' '), kw('const'), plain(' '), v('irfan'), op(':'), plain(' '), tp('Developer'), plain(' '), op('='), plain(' '), punc('{')],
    [plain('  '), prop('name'), punc(':'), plain(' '), str('"Irfan Gulagundi"'), punc(',')],
    [plain('  '), prop('role'), punc(':'), plain(' '), str('"SDE-1 Frontend Developer"'), punc(',')],
    [plain('  '), prop('company'), punc(':'), plain(' '), str('"Zinier Inc."'), punc(',')],
    null,
    [plain('  '), prop('education'), punc(':'), plain(' '), punc('{')],
    [plain('    '), prop('degree'), punc(':'), plain(' '), str('"B.E. in Computer Science"'), punc(',')],
    [plain('    '), prop('institution'), punc(':'), plain(' '), str('"SDM Institute of Technology"'), punc(',')],
    [plain('    '), prop('location'), punc(':'), plain(' '), str('"Dharwad, India"'), punc(',')],
    [plain('  '), punc('}'), punc(',')],
    null,
    [plain('  '), prop('passions'), punc(':'), plain(' '), punc('[')],
    [plain('    '), str('"Building modern web applications"'), punc(',')],
    [plain('    '), str('"Clean architecture & scalable systems"'), punc(',')],
    [plain('    '), str('"Pixel-perfect interfaces"'), punc(',')],
    [plain('    '), str('"Open-source software"'), punc(',')],
    [plain('  '), punc(']'), punc(',')],
    null,
    [plain('  '), prop('philosophy'), punc(':'), plain(' '), str('"Build small, composable pieces, ship early, iterate with real users."'), punc(',')],
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
    [plain('      '), str('"period"'), punc(':'), plain(' '), str('"2025 — Present"'), punc(',')],
    [plain('      '), str('"location"'), punc(':'), plain(' '), str('"Bengaluru, India"'), punc(',')],
    [plain('      '), str('"description"'), punc(':'), plain(' '), str('"Building and maintaining enterprise-grade field service management applications with React, TypeScript, and modern frontend architecture."'), punc(',')],
    [plain('      '), str('"highlights"'), punc(':'), plain(' '), punc('[')],
    [plain('        '), str('"Working on frontend-core design system & components"'), punc(',')],
    [plain('        '), str('"Contributing to design token migration initiatives"'), punc(',')],
    [plain('        '), str('"Building accessible, performant UI at scale"')],
    [plain('      '), punc(']'), punc(',')],
    [plain('      '), str('"stack"'), punc(':'), plain(' '), punc('[')],
    [plain('        '), str('"React"'), punc(','), plain(' '), str('"TypeScript"'), punc(','), plain(' '), str('"Storybook"'), punc(',')],
    [plain('        '), str('"Design Tokens"'), punc(','), plain(' '), str('"CSS Modules"')],
    [plain('      '), punc(']')],
    [plain('    '), punc('}')],
    [plain('  '), punc(']'), punc(',')],
    null,
    [plain('  '), str('"education"'), punc(':'), plain(' '), punc('[')],
    [plain('    '), punc('{')],
    [plain('      '), str('"institution"'), punc(':'), plain(' '), str('"SDM Institute of Technology"'), punc(',')],
    [plain('      '), str('"degree"'), punc(':'), plain(' '), str('"B.E. Computer Science"'), punc(',')],
    [plain('      '), str('"location"'), punc(':'), plain(' '), str('"Dharwad, India"'), punc(',')],
    [plain('      '), str('"period"'), punc(':'), plain(' '), str('"2021 — 2025"')],
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
    [plain('  '), prop('languages'), punc(':'), plain(' '), punc('{')],
    [plain('    '), prop('label'), punc(':'), plain(' '), str('"Core Languages"'), punc(',')],
    [plain('    '), prop('items'), punc(':'), plain(' '), punc('[')],
    [plain('      '), str('"JavaScript"'), punc(','), plain(' '), str('"TypeScript"'), punc(','), plain(' '), str('"Python"'), punc(',')],
    [plain('      '), str('"Java"'), punc(','), plain(' '), str('"C/C++"'), punc(',')],
    [plain('    '), punc(']'), punc(',')],
    [plain('  '), punc('}'), punc(',')],
    null,
    [plain('  '), prop('frontend'), punc(':'), plain(' '), punc('{')],
    [plain('    '), prop('label'), punc(':'), plain(' '), str('"Frontend Ecosystem"'), punc(',')],
    [plain('    '), prop('items'), punc(':'), plain(' '), punc('[')],
    [plain('      '), str('"React.js"'), punc(','), plain(' '), str('"Next.js"'), punc(','), plain(' '), str('"HTML5 / CSS3"'), punc(',')],
    [plain('      '), str('"Tailwind CSS"'), punc(','), plain(' '), str('"Framer Motion"'), punc(',')],
    [plain('    '), punc(']'), punc(',')],
    [plain('  '), punc('}'), punc(',')],
    null,
    [plain('  '), prop('backend'), punc(':'), plain(' '), punc('{')],
    [plain('    '), prop('label'), punc(':'), plain(' '), str('"Backend & Cloud"'), punc(',')],
    [plain('    '), prop('items'), punc(':'), plain(' '), punc('[')],
    [plain('      '), str('"Node.js"'), punc(','), plain(' '), str('"Express"'), punc(','), plain(' '), str('"REST APIs"'), punc(',')],
    [plain('      '), str('"PostgreSQL"'), punc(','), plain(' '), str('"MongoDB"'), punc(',')],
    [plain('      '), str('"AWS"'), punc(','), plain(' '), str('"Google Cloud"'), punc(',')],
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
    [plain('  '), prop('devops'), punc(':'), plain(' '), punc('{')],
    [plain('    '), prop('label'), punc(':'), plain(' '), str('"DevOps & Tools"'), punc(',')],
    [plain('    '), prop('items'), punc(':'), plain(' '), punc('[')],
    [plain('      '), str('"Git / GitHub"'), punc(','), plain(' '), str('"Docker"'), punc(','), plain(' '), str('"Vercel"'), punc(',')],
    [plain('      '), str('"Linux / Ubuntu"'), punc(','), plain(' '), str('"VS Code"'), punc(','), plain(' '), str('"Zed"'), punc(',')],
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
    [plain('  '), prop('github'), punc(':'), plain(' '), str('"https://github.com/irfangulagundi"'), punc(',')],
    [plain('  '), prop('linkedin'), punc(':'), plain(' '), str('"https://linkedin.com/in/irfangulagundi"'), punc(',')],
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
    null,
    [cmt('# Social Links')],
    [v('GITHUB_URL'), op('='), str('"https://github.com/irfan-rg"')],
    [v('LINKEDIN_URL'), op('='), str('"https://irfan-rg.github.io"')],
    [v('EMAIL'), op('='), str('"irfanrgulagundi@gmail.com"')],
    [v('PORTFOLIO_URL'), op('='), str('"https://irfanrg.dev"')],
    null,
    [cmt('# Secret 🤫')],
    [v('HIRING_STATUS'), op('='), str('"employed_and_loving_it"')],
    [v('COFFEE_PREFERENCE'), op('='), str('"black, no sugar, yes code"')],
    [v('FAVORITE_EDITOR'), op('='), str('"Zed"')],
    [v('DARK_MODE'), op('='), str('"always"')],
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
    [plain('    '), op('+'), plain(' '), str('"Full-Stack Developer & SDE-1 at Zinier Inc."'), punc(',')],
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
    [plain('    '), str('"nextjs"'), punc(','), plain(' '), str('"typescript"'), punc(','), plain(' '), str('"zed-ide"')],
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
    [punc('}')],
    null,
    [kw('export'), plain(' '), kw('const'), plain(' '), fn(projectName), op(':'), plain(' '), tp('React.FC'), op('<'), tp('ProjectProps'), op('>'), plain(' '), op('='), plain(' '), punc('('), punc(')'), plain(' '), op('=>'), plain(' '), punc('{')],
    [plain('  '), kw('return'), plain(' '), punc('(')],
    [plain('    '), op('<'), tp('Project'), op('>')],
    [plain('      '), op('<'), tp('Title'), op('>'), str(projectName), op('<'), op('/'), tp('Title'), op('>')],
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

  // Split tech stack into chunks for readability
  const techStr = techStack.map(t => `"${t}"`).join(', ');
  lines.push([plain('        '), str(techStr)]);
  lines.push(
    [plain('      '), punc(']'), punc('}'), plain(' '), op('/')  , op('>')],
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
    'TheSwiftDictionary',
    'Curated lyrical vocabulary explorer across 12 Taylor Swift eras — prefix-matched search, era timeline, Word-of-the-Day, per-user favorites.',
    [
      '1,200+ vocab entries with definition, lyric snippet, era badge',
      'Era-specific colour palettes with Cormorant Garamond / Bricolage Grotesque typography',
      'Supabase Auth + RLS for per-user favorite collections',
      'Framer Motion page transitions, dark mode persistence, responsive design',
      'Python data pipeline: lyrics scrape → GPT-4 vocab extraction → Supabase seed',
    ],
    ['Next.js 15', 'TypeScript', 'Tailwind CSS 4', 'Supabase', 'Framer Motion', 'Python', 'Pandas', 'OpenAI API'],
  ),
  createProjectFile(
    'inkwell',
    'inkwell.tsx',
    'Inkwell',
    'Swiss-design multi-user blogging platform — distraction-free Markdown editor, category management, role-based publishing, Supabase auth/RLS, end-to-end type safety with tRPC + Drizzle.',
    [
      'Next.js 16 + React 19 + TypeScript with App Router and Server Actions',
      'Tailwind CSS v4 + Radix UI primitives, Swiss design system with zero radius and high contrast',
      'Split-pane Markdown editor with live preview, drag-and-drop image uploads via Supabase Storage',
      'tRPC end-to-end type safe APIs, Drizzle ORM with PostgreSQL on Supabase, React Query state',
      'Role-based access, SEO optimized SSR, sub-second loads via Server Components + ISR',
    ],
    ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Radix UI', 'tRPC', 'Drizzle ORM', 'Supabase', 'Vercel'],
  ),
  createProjectFile(
    'the-xo-store',
    'the-xo-store.tsx',
    'TheXOStore',
    'Full-stack e-commerce storefront for The Weeknd merch — Stripe Checkout, Auth0, Cloudinary, React 19 Vite SPA with Node/Express MongoDB backend.',
    [
      'React 19 + Vite SPA with Tailwind CSS 4, client-side routing, dark theme',
      'Auth0 JWT verification for protected routes, Stripe Checkout sessions for payments',
      'Express + MongoDB Mongoose backend for products, orders, webhooks',
      'Cloudinary signed uploads with automatic responsive variants',
      'Vercel frontend + Render backend, zero-downtime deploys',
    ],
    ['React 19', 'Vite', 'Tailwind CSS 4', 'TypeScript', 'Stripe', 'Auth0', 'Cloudinary', 'Express', 'MongoDB'],
  ),
  createProjectFile(
    'caliber',
    'caliber.tsx',
    'Caliber',
    'Production-style dashboard for AI evaluation tracking — KPI cards, 7/14/30 day trends, category breakdowns, paginated evaluations table with search/filter, Admin/Viewer role toggle, CSV/JSON export.',
    [
      'KPI cards: total evaluations, avg score, latency, success rate',
      'Interactive trend chart with 7/14/30 day window selection',
      'Category breakdown visualization and recent activity panel',
      'Paginated evaluations table with search across ID/prompt/response and category/date filters',
      'Role-based UI: Admin vs Viewer toggle persisted in localStorage, UI adapts actions',
    ],
    ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Recharts', 'Framer Motion'],
  ),
  createProjectFile(
    'birthday-present',
    'birthday-present.tsx',
    'BirthdayPresent',
    'Interactive digital keepsake — cinematic scroll narrative, photo gallery, envelope reveal, shooting star wisher with ambient audio.',
    [
      'Envelope reveal animation with animated hero and northern lights background',
      'Photo gallery with elegant layout and personalized messages',
      'Shooting star wish-maker with animated stars and background music',
      'React 19 + TypeScript + Vite + Tailwind CSS, custom cursor and smooth parallax',
      'Fully responsive with mobile-optimized audio handling',
    ],
    ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'FontAwesome'],
  ),
  createProjectFile(
    'qube-ai',
    'qube-ai.tsx',
    'QubeAI',
    'AI-powered productivity dashboard with task clustering, smart summaries and real-time collaboration.',
    [
      'Task clustering with embeddings',
      'Smart weekly summaries',
      'Real-time collaboration',
      'Dark mode and keyboard shortcuts',
    ],
    ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'WebSockets'],
  ),
  createProjectFile(
    'f1-predictor',
    'f1-predictor.tsx',
    'F1RacePredictor',
    'ML pipeline predicting F1 race winners from historical Ergast data + real-time OpenF1 qualifying signals.',
    [
      'Historical data from Ergast API spanning multiple seasons, feature engineering: grid, weather, tyre, team form',
      'Real-time qualifying ingestion via OpenF1 API for up-to-date predictions',
      'Scikit-learn GradientBoostingClassifier with calibrated probability output',
      'CLI UX: python predict.py --race "Monaco 2024" --qualifying-file quali.json',
      'Reproducible pipeline: preprocess → train_model → predict with versioned model artifacts',
    ],
    ['Python 3.11', 'Pandas', 'Scikit-learn', 'OpenF1 API', 'Ergast API', 'Joblib', 'GitHub Actions'],
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
