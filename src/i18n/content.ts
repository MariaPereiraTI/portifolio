import { useLanguage, type Lang } from './LanguageContext';

interface Stat {
  value: string;
  label: string;
}

interface Highlight {
  tag: string;
  title: string;
  desc: string;
  stats?: Stat[];
  badge?: string;
}

interface ProjectText {
  tag: string;
  title: string;
  desc: string;
}

interface SkillGroupText {
  title: string;
}

interface ExperienceText {
  period: string;
  role: string;
  desc: string;
}

interface Content {
  nav: {
    about: string;
    projects: string;
    skills: string;
    experience: string;
    home: string;
    mainNav: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    role: string;
    education: string;
    educationValue: string;
    status: string;
    statusValue: string;
    bioBefore: string;
    bioAfter: string;
    viewProjects: string;
    getInTouch: string;
    emailLabel: string;
  };
  about: {
    title: string;
    subtitle: string;
    introBefore: string;
    introAfter: string;
    highlights: Highlight[];
  };
  projects: {
    title: string;
    subtitle: string;
    viewLive: string;
    viewRepo: string;
    items: ProjectText[];
  };
  skills: {
    title: string;
    subtitle: string;
    groups: SkillGroupText[];
  };
  experience: {
    title: string;
    items: ExperienceText[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  languageSwitcher: {
    selectLanguage: string;
    selectedLanguage: string;
  };
}

export const content: Record<Lang, Content> = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      skills: 'Skills',
      experience: 'Experiência',
      home: 'Início',
      mainNav: 'Principal',
      contact: 'Contato',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
    },
    hero: {
      role: 'Engenheira de Software · Dev Front-end',
      education: 'Formação',
      educationValue: 'Sistemas de Computação (TSC)',
      status: 'Status',
      statusValue: 'Atuando na ParaDevs',
      bioBefore:
        'Comecei a programar aos 16 anos e, desde então, tenho sido péssima em ficar parada. Hoje sou Engenheira de Software na ',
      bioAfter:
        ', exploro Web3 e estou levando essa trajetória ainda mais longe como intercambista na China. Gosto de transformar ideias em coisas que funcionam, entrar em projetos que parecem difíceis demais e descobrir, no processo, até onde consigo chegar.',
      viewProjects: 'Ver projetos',
      getInTouch: 'Falar comigo',
      emailLabel: 'E-mail',
    },
    about: {
      title: 'Sobre mim',
      subtitle: 'Minha formação e as conquistas que mais me orgulham até aqui.',
      introBefore:
        'Sou formada pelo CETI Liceu Parnaibano, onde desenvolvi habilidades práticas em manutenção de computadores, redes, desenvolvimento em ',
      introAfter: ', banco de dados e estruturas de dados — uma base sólida que carrego em cada projeto que construo.',
      highlights: [
        {
          tag: 'Programa "Do Piauí para o Mundo"',
          title: '1º lugar na trilha UESPI e intercâmbio para a China',
          desc: 'A convite do Prof. Dr. Rodrigo Baluz, integrei o programa "Do Piauí para o Mundo", liderando uma equipe ao lado de Jeiel Santos, Josué Klaysler e Matheus Wallace Alves Cunha. Passamos por ideação, documentação, construção do MVP, pitch técnico e pitch de negócio, resolvendo uma dor real vivida pela Universidade Estadual do Piauí (UESPI), até a grande final em Teresina, onde conquistamos o 1º lugar da trilha UESPI.',
          stats: [{ value: '1º', label: 'lugar na trilha UESPI' }],
          badge: 'Intercâmbio conquistado para a China 🇨🇳✈️',
        },
        {
          tag: 'Projeto acadêmico · Dupla',
          title: 'Nota máxima com metade da equipe',
          desc: 'Em um projeto pensado para times de três pessoas, eu e Jeiel Santos assumimos sozinhos todas as etapas do desenvolvimento de software — levantamento de requisitos, casos de uso, documentação e criação do protótipo funcional. Mesmo com a carga extra, fomos uma das duas únicas duplas a alcançar nota máxima entre as equipes.',
          badge: 'Convite para bolsa estudantil e continuidade do projeto',
        },
        {
          tag: 'Maratona Tech 2024 · Olimpíada Nacional de Soluções Tecnológicas',
          title: '35º lugar nacional entre mais de 2 mil escolas',
          desc: 'Ainda no CETI Liceu Parnaibano, participei da Maratona Tech 2024 com a Saude na Zona Rural — um chatbot criado para levar informação, suporte e saúde á zonas rurais a zonas rurais. Nossa equipe conquistou o 35º lugar entre mais de 2 mil escolas e 200 mil estudantes de todo o Brasil.',
          stats: [
            { value: '35º', label: 'lugar entre +2 mil escolas' },
            { value: '200 mil+', label: 'estudantes em todo o Brasil' },
          ],
        },
      ],
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Alguns trabalhos de front-end que construí do zero, do design à implementação.',
      viewLive: 'Ver ao vivo',
      viewRepo: 'Ver repositório',
      items: [
        {
          tag: 'App · IA & Web3',
          title: 'Xiaolee — AI Agent',
          desc: 'Interface de chat estilo kawaii para um assistente de IA que ajuda com swaps, campanhas e pagamentos em cripto. Construí toda a experiência conversacional e o dashboard do usuário.',
        },
        {
          tag: 'Landing Page',
          title: 'Xiaolee — Landing Page',
          desc: 'Landing page de marketing para a plataforma Xiaolee, que transforma presença digital em renda. Foco em storytelling visual, seções animadas e forte call-to-action.',
        },
        {
          tag: 'Landing Page · Tech',
          title: 'Jurisense',
          desc: 'Landing page para produto de tecnologia jurídica, com identidade visual sóbria e foco em conversão para o público de advocacia e escritórios de direito.',
        },
        {
          tag: 'App Mobile · IA & Web3',
          title: 'Xiaolee Mobile',
          desc: 'Versão mobile do assistente de IA Xiaolee, com download disponível direto na landing page da plataforma.',
        },
        {
          tag: 'Landing Page & App · Mobilidade',
          title: 'ChegaJunto',
          desc: 'Landing page e app mobile (React Native) de caronas universitárias com recompensas em cripto na Solana, com piloto ativo no campus da UESPI.',
        },
        {
          tag: 'Bot · Web3',
          title: 'Recall',
          desc: 'Bot de grupo que registra decisões e compromissos no Walrus Memory e responde com recibos verificáveis. Desenvolvido na ParaDevs para o hackathon Walrus Sessions 8.',
        },
        {
          tag: 'Backend · Web3',
          title: 'TrackFund3',
          desc: 'Plataforma para investir em música na Solana, com NFTs de músicas tokenizadas e participação vitalícia em royalties. Responsável pelo desenvolvimento do backend em TypeScript.',
        },
        {
          tag: 'App · Web3 & Games',
          title: 'ChainPlay',
          desc: 'Minigames de futebol com apostas on-chain na Solana, usando dados reais da Copa do Mundo. Cada aposta gera um NFT-ticket que resgata o prêmio. Desenvolvido na ParaDevs.',
        },
      ],
    },
    skills: {
      title: 'Stack & Skills',
      subtitle: 'Ferramentas que uso no dia a dia para construir interfaces e explorar dados.',
      groups: [{ title: 'Front-end' }, { title: 'Dados' }, { title: 'Ferramentas' }],
    },
    experience: {
      title: 'Experiência',
      items: [
        {
          period: '2026 — atual',
          role: 'Engenheira de Software Web3 | Front-end',
          desc: 'Atuação focada no desenvolvimento frontend de aplicações descentralizadas, transformando arquiteturas complexas de blockchain em experiências de usuário (UX) fluidas, intuitivas e seguras.',
        },
        {
          period: '2025 — 2026',
          role: 'Analista de TI',
          desc: 'Atuação técnica focada na sustentação de sistemas, garantia de qualidade e suporte à infraestrutura de tecnologia da empresa. Responsável por assegurar a estabilidade das ferramentas corporativas e apoiar a continuidade dos processos de negócio através de diagnósticos precisos e melhoria contínua.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos criar algo juntos?',
      subtitle: 'Estou aberta a oportunidades, freelas e boas conversas sobre front-end e dados.',
    },
    languageSwitcher: {
      selectLanguage: 'Selecionar idioma',
      selectedLanguage: 'Idioma selecionado',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      home: 'Home',
      mainNav: 'Main',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      role: 'Software Engineer · Front-end Dev',
      education: 'Education',
      educationValue: 'Computer Systems (TSC)',
      status: 'Status',
      statusValue: 'Working at ParaDevs',
      bioBefore:
        "I started coding at 16 and, ever since, I've been terrible at sitting still. Today I'm a Software Engineer at ",
      bioAfter:
        ", exploring Web3 and taking that journey even further as an exchange student in China. I like turning ideas into things that actually work, taking on projects that look too hard, and finding out, along the way, how far I can go.",
      viewProjects: 'View projects',
      getInTouch: 'Get in touch',
      emailLabel: 'Email',
    },
    about: {
      title: 'About me',
      subtitle: "My education and the achievements I'm most proud of so far.",
      introBefore:
        "I'm a graduate of CETI Liceu Parnaibano, where I built hands-on skills in computer maintenance, networking, ",
      introAfter: ' development, databases, and data structures — a solid foundation I carry into every project I build.',
      highlights: [
        {
          tag: '"From Piauí to the World" Program',
          title: '1st place in the UESPI track and an exchange trip to China',
          desc: 'At the invitation of Prof. Dr. Rodrigo Baluz, I joined the "From Piauí to the World" program, leading a team alongside Jeiel Santos, Josué Klaysler, and Matheus Wallace Alves Cunha. We went through ideation, documentation, MVP development, and both technical and business pitches, solving a real pain point faced by the State University of Piauí (UESPI), all the way to the final in Teresina, where we won 1st place in the UESPI track.',
          stats: [{ value: '1st', label: 'place in the UESPI track' }],
          badge: 'Exchange trip to China earned 🇨🇳✈️',
        },
        {
          tag: 'Academic Project · Pair',
          title: 'Top grade with half the team',
          desc: 'In a project designed for three-person teams, Jeiel Santos and I handled every stage of software development on our own — requirements gathering, use cases, documentation, and a working prototype. Despite the extra workload, we were one of only two pairs to reach the top grade among all the teams.',
          badge: 'Invited for a student scholarship and to continue the project',
        },
        {
          tag: 'Maratona Tech 2024 · National Olympiad of Technological Solutions',
          title: '35th place nationally among more than 2,000 schools',
          desc: 'Still at CETI Liceu Parnaibano, I took part in Maratona Tech 2024 with Saúde na Zona Rural — a chatbot built to bring information, support, and healthcare access to rural areas. Our team placed 35th among more than 2,000 schools and 200,000 students across Brazil.',
          stats: [
            { value: '35th', label: 'place among 2,000+ schools' },
            { value: '200k+', label: 'students across Brazil' },
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: 'A few front-end projects I built from scratch, from design to implementation.',
      viewLive: 'View live',
      viewRepo: 'View repository',
      items: [
        {
          tag: 'App · AI & Web3',
          title: 'Xiaolee — AI Agent',
          desc: 'A kawaii-style chat interface for an AI assistant that helps with swaps, campaigns, and crypto payments. I built the entire conversational experience and the user dashboard.',
        },
        {
          tag: 'Landing Page',
          title: 'Xiaolee — Landing Page',
          desc: 'Marketing landing page for the Xiaolee platform, which turns digital presence into income. Focused on visual storytelling, animated sections, and a strong call-to-action.',
        },
        {
          tag: 'Landing Page · Tech',
          title: 'Jurisense',
          desc: 'Landing page for a legal-tech product, with a sober visual identity focused on conversion for lawyers and law firms.',
        },
        {
          tag: 'Mobile App · AI & Web3',
          title: 'Xiaolee Mobile',
          desc: 'Mobile version of the Xiaolee AI assistant, available to download straight from the platform landing page.',
        },
        {
          tag: 'Landing Page & App · Mobility',
          title: 'ChegaJunto',
          desc: 'Landing page and mobile app (React Native) for university carpooling with crypto rewards on Solana, with an active pilot at the UESPI campus.',
        },
        {
          tag: 'Bot · Web3',
          title: 'Recall',
          desc: 'A group-chat bot that records decisions and commitments in Walrus Memory and answers with verifiable receipts. Built at ParaDevs for the Walrus Sessions 8 hackathon.',
        },
        {
          tag: 'Backend · Web3',
          title: 'TrackFund3',
          desc: 'A platform to invest in music on Solana, with NFTs of tokenized songs and lifetime royalty participation. I built the backend in TypeScript.',
        },
        {
          tag: 'App · Web3 & Games',
          title: 'ChainPlay',
          desc: 'Football minigames with on-chain betting on Solana, powered by real World Cup data. Every bet mints an NFT ticket that redeems the prize. Built at ParaDevs.',
        },
      ],
    },
    skills: {
      title: 'Stack & Skills',
      subtitle: 'Tools I use day to day to build interfaces and explore data.',
      groups: [{ title: 'Front-end' }, { title: 'Data' }, { title: 'Tools' }],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          period: '2026 — present',
          role: 'Web3 Software Engineer | Front-end',
          desc: 'Focused on front-end development for decentralized applications, turning complex blockchain architectures into fluid, intuitive, and secure user experiences.',
        },
        {
          period: '2025 — 2026',
          role: 'IT Analyst',
          desc: "Technical role focused on systems support, quality assurance, and the company's IT infrastructure. Responsible for ensuring the stability of corporate tools and supporting business continuity through precise diagnostics and continuous improvement.",
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's build something together?",
      subtitle: "I'm open to opportunities, freelance work, and good conversations about front-end and data.",
    },
    languageSwitcher: {
      selectLanguage: 'Select language',
      selectedLanguage: 'Selected language',
    },
  },
  es: {
    nav: {
      about: 'Sobre',
      projects: 'Proyectos',
      skills: 'Skills',
      experience: 'Experiencia',
      home: 'Inicio',
      mainNav: 'Principal',
      contact: 'Contacto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    hero: {
      role: 'Ingeniera de Software · Dev Front-end',
      education: 'Formación',
      educationValue: 'Sistemas de Computación (TSC)',
      status: 'Estado',
      statusValue: 'Trabajando en ParaDevs',
      bioBefore:
        'Empecé a programar a los 16 años y, desde entonces, he sido pésima para quedarme quieta. Hoy soy Ingeniera de Software en ',
      bioAfter:
        ', exploro Web3 y estoy llevando esa trayectoria aún más lejos como intercambista en China. Me gusta transformar ideas en cosas que funcionan, meterme en proyectos que parecen demasiado difíciles y descubrir, en el proceso, hasta dónde puedo llegar.',
      viewProjects: 'Ver proyectos',
      getInTouch: 'Hablemos',
      emailLabel: 'Correo',
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'Mi formación y los logros de los que más me enorgullezco hasta ahora.',
      introBefore:
        'Me gradué del CETI Liceu Parnaibano, donde desarrollé habilidades prácticas en mantenimiento de computadoras, redes, desarrollo en ',
      introAfter: ', bases de datos y estructuras de datos — una base sólida que llevo a cada proyecto que construyo.',
      highlights: [
        {
          tag: 'Programa "De Piauí para el Mundo"',
          title: '1er lugar en la pista UESPI e intercambio a China',
          desc: 'Por invitación del Prof. Dr. Rodrigo Baluz, me uní al programa "De Piauí para el Mundo", liderando un equipo junto a Jeiel Santos, Josué Klaysler y Matheus Wallace Alves Cunha. Pasamos por ideación, documentación, construcción del MVP, pitch técnico y pitch de negocio, resolviendo un problema real de la Universidad Estatal de Piauí (UESPI), hasta la gran final en Teresina, donde conquistamos el 1er lugar de la pista UESPI.',
          stats: [{ value: '1er', label: 'lugar en la pista UESPI' }],
          badge: 'Intercambio conquistado a China 🇨🇳✈️',
        },
        {
          tag: 'Proyecto académico · Dupla',
          title: 'Nota máxima con la mitad del equipo',
          desc: 'En un proyecto pensado para equipos de tres personas, Jeiel Santos y yo asumimos solos todas las etapas del desarrollo de software — levantamiento de requisitos, casos de uso, documentación y creación del prototipo funcional. Aun con la carga extra, fuimos una de las dos únicas duplas en alcanzar la nota máxima entre los equipos.',
          badge: 'Invitación para beca estudiantil y continuidad del proyecto',
        },
        {
          tag: 'Maratona Tech 2024 · Olimpiada Nacional de Soluciones Tecnológicas',
          title: '35º lugar nacional entre más de 2 mil escuelas',
          desc: 'Todavía en el CETI Liceu Parnaibano, participé en la Maratona Tech 2024 con Saúde na Zona Rural — un chatbot creado para llevar información, apoyo y salud a zonas rurales. Nuestro equipo conquistó el 35º lugar entre más de 2 mil escuelas y 200 mil estudiantes de todo Brasil.',
          stats: [
            { value: '35º', label: 'lugar entre +2 mil escuelas' },
            { value: '200 mil+', label: 'estudiantes en todo Brasil' },
          ],
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Algunos trabajos de front-end que construí desde cero, del diseño a la implementación.',
      viewLive: 'Ver en vivo',
      viewRepo: 'Ver repositorio',
      items: [
        {
          tag: 'App · IA & Web3',
          title: 'Xiaolee — AI Agent',
          desc: 'Interfaz de chat estilo kawaii para un asistente de IA que ayuda con swaps, campañas y pagos en cripto. Construí toda la experiencia conversacional y el dashboard del usuario.',
        },
        {
          tag: 'Landing Page',
          title: 'Xiaolee — Landing Page',
          desc: 'Landing page de marketing para la plataforma Xiaolee, que transforma presencia digital en ingresos. Enfocada en storytelling visual, secciones animadas y un fuerte call-to-action.',
        },
        {
          tag: 'Landing Page · Tech',
          title: 'Jurisense',
          desc: 'Landing page para un producto de tecnología jurídica, con identidad visual sobria y enfoque en conversión para abogados y despachos jurídicos.',
        },
        {
          tag: 'App Móvil · IA & Web3',
          title: 'Xiaolee Mobile',
          desc: 'Versión móvil del asistente de IA Xiaolee, con descarga disponible directamente desde la landing page de la plataforma.',
        },
        {
          tag: 'Landing Page & App · Movilidad',
          title: 'ChegaJunto',
          desc: 'Landing page y app móvil (React Native) de viajes compartidos universitarios con recompensas en cripto en Solana, con piloto activo en el campus de la UESPI.',
        },
        {
          tag: 'Bot · Web3',
          title: 'Recall',
          desc: 'Bot de grupo que registra decisiones y compromisos en Walrus Memory y responde con recibos verificables. Desarrollado en ParaDevs para el hackathon Walrus Sessions 8.',
        },
        {
          tag: 'Backend · Web3',
          title: 'TrackFund3',
          desc: 'Plataforma para invertir en música en Solana, con NFTs de canciones tokenizadas y participación vitalicia en regalías. Responsable del desarrollo del backend en TypeScript.',
        },
        {
          tag: 'App · Web3 & Games',
          title: 'ChainPlay',
          desc: 'Minijuegos de fútbol con apuestas on-chain en Solana, con datos reales del Mundial. Cada apuesta genera un NFT-ticket que canjea el premio. Desarrollado en ParaDevs.',
        },
      ],
    },
    skills: {
      title: 'Stack & Skills',
      subtitle: 'Herramientas que uso en el día a día para construir interfaces y explorar datos.',
      groups: [{ title: 'Front-end' }, { title: 'Datos' }, { title: 'Herramientas' }],
    },
    experience: {
      title: 'Experiencia',
      items: [
        {
          period: '2026 — actual',
          role: 'Ingeniera de Software Web3 | Front-end',
          desc: 'Enfoque en el desarrollo frontend de aplicaciones descentralizadas, transformando arquitecturas complejas de blockchain en experiencias de usuario (UX) fluidas, intuitivas y seguras.',
        },
        {
          period: '2025 — 2026',
          role: 'Analista de TI',
          desc: 'Actuación técnica enfocada en el soporte de sistemas, garantía de calidad y soporte a la infraestructura tecnológica de la empresa. Responsable de asegurar la estabilidad de las herramientas corporativas y apoyar la continuidad de los procesos de negocio mediante diagnósticos precisos y mejora continua.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿Creamos algo juntos?',
      subtitle: 'Estoy abierta a oportunidades, freelances y buenas conversaciones sobre front-end y datos.',
    },
    languageSwitcher: {
      selectLanguage: 'Seleccionar idioma',
      selectedLanguage: 'Idioma seleccionado',
    },
  },
};

export function useContent(): Content {
  const { lang } = useLanguage();
  return content[lang];
}
