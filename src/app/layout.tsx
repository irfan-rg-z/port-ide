import type { Metadata } from 'next';
import './globals.css';
import './ide-layout.css';
import './preview.css';

export const metadata: Metadata = {
  title: 'Irfan Gulagundi — SDE-1 Frontend Developer',
  description:
    'Portfolio of Irfan Gulagundi — Full-Stack Developer and SDE-1 Frontend Developer at Zinier Inc. Explore projects, skills, and experience through an interactive IDE experience.',
  keywords: [
    'Irfan Gulagundi',
    'Frontend Developer',
    'SDE-1',
    'Zinier',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
    'Full-Stack Developer',
  ],
  authors: [{ name: 'Irfan Gulagundi', url: 'https://irfanrg.dev' }],
  openGraph: {
    title: 'Irfan Gulagundi — SDE-1 Frontend Developer',
    description:
      'Full-Stack Developer crafting modern web experiences. Currently building at Zinier Inc.',
    url: 'https://irfanrg.dev',
    type: 'website',
    locale: 'en_US',
    siteName: 'Irfan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irfan Gulagundi — Frontend Developer Portfolio',
    description:
      'An interactive IDE-style portfolio. Explore my code, projects, and journey.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
