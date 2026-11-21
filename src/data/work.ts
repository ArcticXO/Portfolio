export interface WorkItem {
  id: number;
  title: string;
  date: string;
  description: string;
  tech: string;
  link?: string;
  video?: string;
  image?: string;
  category?: string;
}

export const WORK_DATA: WorkItem[] = [
  {
    id: 1,
    title: 'FloodManager (Flood Reporting App)',
    date: 'Sep 2024 — Jun 2025',
    category: 'Flagship Final-Year Project',
    description:
      'Engineered a resilient, cross-platform flood reporting and alert application designed to support 10,000+ concurrent users during environmental emergencies. Built with Swift on iOS and Python (Flask) on the backend, deployed on AWS with Docker, Application Load Balancers (ALB), and database sharding to guarantee redundancy, zero-downtime failover, and secure JWT authentication.',
    tech: 'Swift · Python (Flask) · AWS · Docker · ALB · PostgreSQL · JWT',
    link: 'https://github.com/ArcticXO/FloodManager',
  },
  {
    id: 2,
    title: 'Baytal',
    date: '2024 — 2025',
    category: 'Web Platform',
    description:
      'Full-stack modern web application platform built with TypeScript and Next.js, featuring modular architecture, responsive interfaces, and optimized server-side rendering for rich user interactions.',
    tech: 'TypeScript · Next.js · React · Tailwind CSS',
    link: 'https://github.com/ArcticXO/Baytal',
  },
  {
    id: 3,
    title: 'GitHub Malware & Security Research',
    date: 'May 2025',
    category: 'Security Research',
    description:
      'Investigative security research into malicious repositories and infostealers circulating on GitHub. Explored reverse-engineering techniques, obfuscated scripts, and token exfiltration vectors that bypass multi-factor authentication.',
    tech: 'Cybersecurity · Python · Malware Analysis · Reverse Engineering',
    link: 'https://aliab.me/posts/Malware/',
  },
  {
    id: 4,
    title: 'Swift Developer Tooling & iOS Utilities',
    date: '2024',
    category: 'Native Apple Tools',
    description:
      'Collection of lightweight developer command-line tools and native Apple applications including easycommit and reglookup, built using Swift and SwiftUI to enhance terminal productivity.',
    tech: 'Swift · SwiftUI · CLI · macOS / iOS',
    link: 'https://github.com/ArcticXO/easycommit',
  },
];
