export type Lang = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      cases: 'CASES',
      about: 'SOBRE MIM',
      testimonials: 'RECOMENDAÇÕES',
      contact: 'ENTRAR EM CONTATO ▶︎',
      contactHref: 'https://wa.me/5511984221317',
      mobileContact: 'CONTATO',
      langToggle: 'EN-US',
      langFlag: '/images/flag-us.svg',
      langHref: '/en',
    },
    hero: {
      verticalLabel: 'São Paulo, Brasil — Disponível para oportunidades',
      heading1: 'Design para',
      heading2: 'experiências digitais',
      sub: 'Há mais de 6 anos criando interfaces\ne produtos digitais centradas no usuário.',
      body: 'Designer com base sólida em visual design e UI, focado em Product Design, unindo estética, arquitetura de informação e pensamento estratégico para criar experiências consistentes e funcionais.',
      cta1: 'VER PROJETOS ↗︎',
      cta1Href: '#work',
      cta2: 'VAMOS CONVERSAR ↗︎',
      cta2Href: 'https://linkedin.com/in/luskasdesign/',
    },
    marquee: [
      'Product Design', 'Design de Interfaces', 'Direção de Arte',
      'Figma', 'Photoshop', 'UI Design', 'Design System', 'IA Aplicada',
    ],
    work: {
      badge: 'Cases',
      heading1: 'Projetos recentes',
      heading2: 'desenvolvidos',
    },
    about: {
      badge: 'Sobre mim',
      infoItems: ['Lucas Santos', 'Product Designer', '+6 anos de experiência'],
      heading: 'Apaixonado por videogame, música, design e tecnologia',
      headingStrike: '',
      body1: 'Tenho mais de 6 anos de carreira em design digital, com base sólida em visual design e interfaces. Trabalhei em agências e empresas de segmentos diferentes, entregando projetos do briefing à tela final.',
      body2: 'Atualmente foco em UI e Product Design, criando interfaces centradas no usuário, com atenção a fluxos, hierarquia de informação e consistência visual. Tudo isso alinhado ao uso da inteligência artificial como parte do processo criativo e estratégico.',
      linkedin: 'LINKEDIN ↗︎',
      whatsapp: 'WHATSAPP ↗︎',
      skillsLabel: 'Competências',
      skills: ['UI DESIGN', 'IA APLICADA', 'DESIGN SYSTEM', 'PRODUCT DESIGN'],
    },
    testimonials: {
      badge: 'Recomendações',
      heading1: 'O que dizem',
      heading2: 'sobre mim',
    },
    contact: {
      heading: 'Vamos conversar',
      body: 'Aberto a oportunidades em Product Design, UI/UX e projetos freelance. Se você está construindo algo relevante, quero fazer parte.',
      location: 'São Paulo, SP — Brasil · Disponível para trabalho remoto e híbrido',
      cta1: 'LINKEDIN ↗︎',
      cta2: 'WHATSAPP ↗︎',
    },
    footer: {
      navTitle: 'Navegue',
      socialTitle: 'Social',
      copyright: '© 2026 Luskas.design — Todos os direitos reservados.',
      curriculumHref: '/Curriculo_2026-Lucas_Santos.pdf',
      curriculumLabel: 'Currículo.',
      navLinks: [
        { label: 'Home.', href: '#top' },
        { label: 'Cases.', href: '#work' },
        { label: 'Sobre mim.', href: '#about' },
        { label: 'Recomendações.', href: '#testimonials' },
      ],
    },
  },

  en: {
    nav: {
      cases: 'CASES',
      about: 'ABOUT ME',
      testimonials: 'TESTIMONIALS',
      contact: 'GET IN TOUCH ▶︎',
      contactHref: 'https://wa.me/5511984221317',
      mobileContact: 'CONTACT',
      langToggle: 'PT-BR',
      langFlag: '/images/flag-br.svg',
      langHref: '/',
    },
    hero: {
      verticalLabel: 'São Paulo, Brazil — Available for opportunities',
      heading1: 'Design for',
      heading2: 'digital experiences',
      sub: 'Over 6 years creating interfaces\nand digital products centered on the user.',
      body: 'Designer with a solid foundation in visual design and UI, focused on Product Design, combining aesthetics, information architecture and strategic thinking to create consistent and functional experiences.',
      cta1: 'VIEW PROJECTS ↗︎',
      cta1Href: '#work',
      cta2: 'LET\'S TALK ↗︎',
      cta2Href: 'https://linkedin.com/in/luskasdesign/',
    },
    marquee: [
      'Product Design', 'Interface Design', 'Art Direction',
      'Figma', 'Photoshop', 'UI Design', 'Design System', 'AI Applied',
    ],
    work: {
      badge: 'Cases',
      heading1: 'Recent projects',
      heading2: 'developed',
    },
    about: {
      badge: 'About me',
      infoItems: ['Lucas Santos', 'Product Designer', '+6 years of experience'],
      heading: 'Passionate about gaming, music, design and technology',
      headingStrike: '',
      body1: 'I have over 6 years of career in digital design, with a solid background in visual design and interfaces. I worked at agencies and companies in different segments, delivering projects from brief to final screen.',
      body2: 'Currently focused on UI and Product Design, creating user-centered interfaces with attention to flows, information hierarchy and visual consistency. All aligned with the use of artificial intelligence as part of the creative and strategic process.',
      linkedin: 'LINKEDIN ↗︎',
      whatsapp: 'WHATSAPP ↗︎',
      skillsLabel: 'Skills',
      skills: ['UI DESIGN', 'AI APPLIED', 'DESIGN SYSTEM', 'PRODUCT DESIGN'],
    },
    testimonials: {
      badge: 'Recommendations',
      heading1: 'What they say',
      heading2: 'about me',
    },
    contact: {
      heading: "Let's talk",
      body: 'Open to opportunities in Product Design, UI/UX and freelance projects. If you\'re building something relevant, I want to be part of it.',
      location: 'São Paulo, SP — Brazil · Available for remote and hybrid work',
      cta1: 'LINKEDIN ↗︎',
      cta2: 'WHATSAPP ↗︎',
    },
    footer: {
      navTitle: 'Navigate',
      socialTitle: 'Social',
      copyright: '© 2026 Luskas.design — All rights reserved.',
      curriculumHref: '/Resume_2026-Lucas_Santos.pdf',
      curriculumLabel: 'Resume.',
      navLinks: [
        { label: 'Home.', href: '/en#top' },
        { label: 'Cases.', href: '/en#work' },
        { label: 'About me.', href: '/en#about' },
        { label: 'Testimonials.', href: '/en#testimonials' },
      ],
    },
  },
} satisfies Record<Lang, unknown>;

export function useT(lang: Lang) {
  return translations[lang];
}
