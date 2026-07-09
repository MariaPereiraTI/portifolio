import type { Project } from '../types';
import xiaoleeLandingImg from '../assets/xiaolee-landing.png';
import jurisenseImg from '../assets/jurisense.png';

export const projects: Project[] = [
  {
    tag: 'App · IA & Web3',
    tagBg: '#E9D5FF',
    title: 'Xiaolee — AI Agent',
    desc: 'Interface de chat estilo kawaii para um assistente de IA que ajuda com swaps, campanhas e pagamentos em cripto. Construí toda a experiência conversacional e o dashboard do usuário.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    url: 'https://xiaolee-frontend-production.up.railway.app/',
    mockBg: 'linear-gradient(135deg,#7C3AED,#A855F7)',
    emoji: '💬',
  },
  {
    tag: 'Landing Page',
    tagBg: '#DDD6FE',
    title: 'Xiaolee — Landing Page',
    desc: 'Landing page de marketing para a plataforma Xiaolee, que transforma presença digital em renda. Foco em storytelling visual, seções animadas e forte call-to-action.',
    stack: ['Next.js', 'Framer Motion', 'CSS'],
    url: 'https://xiaolee-landing-production.up.railway.app/',
    mockBg: 'linear-gradient(135deg,#6D28D9,#A855F7)',
    emoji: '🚀',
    image: xiaoleeLandingImg,
  },
  {
    tag: 'Landing Page · Tech',
    tagBg: '#C4B5FD',
    title: 'Jurisense',
    desc: 'Landing page para produto de tecnologia jurídica, com identidade visual sóbria e foco em conversão para o público de advocacia e escritórios de direito.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://jurisense-frontend-36pu.onrender.com/',
    mockBg: 'linear-gradient(135deg,#2E1065,#7C3AED)',
    emoji: '⚖️',
    image: jurisenseImg,
  },
];
