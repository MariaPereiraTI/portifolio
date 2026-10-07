import type { Project } from '../types';
import xiaoleeAgentImg from '../assets/xiaolee-agent.png';
import xiaoleeLandingImg from '../assets/xiaolee-landing.png';
import jurisenseImg from '../assets/jurisense.png';
import xiaoleeMobileImg from '../assets/xiaolee-mobile.png';
import chegaJuntoImg from '../assets/chegajunto.png';
import trackfund3Img from '../assets/trackfund3.png';
import chainplayImg from '../assets/chainplay.png';

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
  {
    tagBg: '#617A55',
    stack: ['React Native', 'TypeScript'],
    url: 'https://xiaolee-landing-production.up.railway.app/',
    mockBg: 'linear-gradient(135deg,#1D2B22,#617A55)',
    emoji: '📱',
    image: xiaoleeMobileImg,
  },
  {
    tagBg: '#7C3AED',
    stack: ['React Native', 'React', 'TypeScript'],
    url: 'https://chegajunto.app',
    mockBg: 'linear-gradient(135deg,#2A1B4D,#7C3AED)',
    emoji: '🚗',
    image: chegaJuntoImg,
  },
  {
    tagBg: '#354F3A',
    stack: ['TypeScript', 'Walrus', 'SQLite'],
    url: 'https://github.com/Astreus-J/recall',
    mockBg: 'linear-gradient(135deg,#101510,#354F3A)',
    emoji: '🧠',
    isRepo: true,
  },
  {
    tagBg: '#22A45D',
    stack: ['TypeScript', 'Backend'],
    url: 'https://trackfund3.com/',
    mockBg: 'linear-gradient(135deg,#0B0F0C,#1F6B3E)',
    emoji: '🎵',
    image: trackfund3Img,
  },
  {
    tagBg: '#84CC16',
    stack: ['React', 'TypeScript', 'Solana', 'Rust'],
    url: 'https://github.com/ParaDevs-Brasil/Chainplay',
    mockBg: 'linear-gradient(135deg,#0B0F0C,#3F5F12)',
    emoji: '⚽',
    image: chainplayImg,
    isRepo: true,
  },
];
