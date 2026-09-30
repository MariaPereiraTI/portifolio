import type { Project } from '../types';
import xiaoleeAgentImg from '../assets/xiaolee-agent.png';
import xiaoleeLandingImg from '../assets/xiaolee-landing.png';
import jurisenseImg from '../assets/jurisense.png';

export const projects: Project[] = [
  {
    tag: 'App · IA & Web3',
    tagBg: '#617A55',
    title: 'Xiaolee — AI Agent',
    desc: 'Interface de chat estilo kawaii para um assistente de IA que ajuda com swaps, campanhas e pagamentos em cripto. Construí toda a experiência conversacional e o dashboard do usuário.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    url: 'https://xiaolee-frontend-production.up.railway.app/',
    mockBg: 'linear-gradient(135deg,#1D2B22,#354F3A)',
    emoji: '💬',
    image: xiaoleeAgentImg,
  },
  {
    tag: 'Landing Page',
    tagBg: '#354F3A',
    title: 'Xiaolee — Landing Page',
    desc: 'Landing page de marketing para a plataforma Xiaolee, que transforma presença digital em renda. Foco em storytelling visual, seções animadas e forte call-to-action.',
    stack: ['Next.js', 'Framer Motion', 'CSS'],
    url: 'https://xiaolee-landing-production.up.railway.app/',
    mockBg: 'linear-gradient(135deg,#354F3A,#617A55)',
    emoji: '🚀',
    image: xiaoleeLandingImg,
  },
  {
    tag: 'Landing Page · Tech',
    tagBg: '#55483A',
    title: 'Jurisense',
    desc: 'Landing page para produto de tecnologia jurídica, com identidade visual sóbria e foco em conversão para o público de advocacia e escritórios de direito.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://jurisense-frontend-36pu.onrender.com/',
    mockBg: 'linear-gradient(135deg,#101510,#354F3A)',
    emoji: '⚖️',
    image: jurisenseImg,
  },
];
