import type { Project } from '../types';
import xiaoleeAgentImg from '../assets/xiaolee-agent.png';
import xiaoleeLandingImg from '../assets/xiaolee-landing.png';
import jurisenseImg from '../assets/jurisense.png';

export type ProjectStatic = Omit<Project, 'tag' | 'title' | 'desc'>;

/** Non-text fields only — tag/title/desc are translated, see i18n/content.ts. */
export const projectsStatic: ProjectStatic[] = [
  {
    tagBg: '#617A55',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    url: 'https://xiaolee-frontend-production.up.railway.app/',
    mockBg: 'linear-gradient(135deg,#1D2B22,#354F3A)',
    emoji: '💬',
    image: xiaoleeAgentImg,
  },
  {
    tagBg: '#354F3A',
    stack: ['Next.js', 'Framer Motion', 'CSS'],
    url: 'https://xiaolee-landing-production.up.railway.app/',
    mockBg: 'linear-gradient(135deg,#354F3A,#617A55)',
    emoji: '🚀',
    image: xiaoleeLandingImg,
  },
  {
    tagBg: '#55483A',
    stack: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://jurisense-frontend-36pu.onrender.com/',
    mockBg: 'linear-gradient(135deg,#101510,#354F3A)',
    emoji: '⚖️',
    image: jurisenseImg,
  },
];
