/* ─── Projects ─────────────────────────────────────────────────────────────── */
export interface Project {
  id: number;
  slug: string;
  title: string;        // may contain \n for line break on cards
  description: string;
  descriptionEn?: string;
  tags: string[];
  year: string;
  type: string;
  featured?: boolean;
  image?: string;
  imageSize?: string;
  behanceUrl?: string;  // temporary: redirect to Behance until internal case pages are ready
}

export const projects: Project[] = [
  {
    id: 7, slug: 'dead-by-daylight',
    title: 'Dead by Daylight',
    description: 'Projeto de estudo de redesign do site',
    descriptionEn: 'Website redesign concept study',
    tags: ['UI DESIGN'], year: '2026', type: 'UI Design', featured: true,
    image: '/images/projects/dbd.png',
    behanceUrl: 'https://www.behance.net/gallery/251034467/Dead-by-Daylight-Website-Redesign-Case-Study',
  },
  {
    id: 1, slug: 'bb-hotels',
    title: 'B&B HOTELS',
    description: 'Landing page com foco em conversão',
    descriptionEn: 'Landing page focused on conversion',
    tags: ['UI DESIGN'], year: '2026', type: 'UI Design',
    image: '/images/projects/bb-hotels.jpg',
    behanceUrl: 'https://www.behance.net/gallery/240787675/B-B-HOTELS-Landing-Page-UI-Design-Prototype',
  },
  {
    id: 3, slug: 'runboost',
    title: 'RunBoost',
    description: 'Projeto de estudo de UI para um app de corrida',
    descriptionEn: 'UI concept study for a running app',
    tags: ['APP DESIGN'], year: '2026', type: 'App Design',
    image: '/images/projects/runboost.jpg',
    behanceUrl: 'https://www.behance.net/gallery/247827709/RunBoost-Running-App-UI-Concept-UI-Challenge',
  },
  {
    id: 4, slug: 'tate-mcrae',
    title: 'Poster Tate McRae',
    description: "Projeto fictício de divulgação do single 'It's Ok I'm Ok'",
    descriptionEn: "Fictional promotional poster for the single 'It's Ok I'm Ok'",
    tags: ['PÓS-PRODUÇÃO'], year: '2025', type: 'Pós-Produção',
    image: '/images/projects/tate-mcrae.jpg',
    behanceUrl: 'https://www.behance.net/gallery/209173895/Tate-McRae-Its-Ok-Im-Ok-Music-Video-Poster',
  },
  {
    id: 5, slug: 'bb-hotels-social',
    title: 'B&B HOTELS',
    description: 'Criação de conteúdo para as redes sociais',
    descriptionEn: 'Social media content creation',
    tags: ['DESIGN GRÁFICO'], year: '2026', type: 'Design Gráfico',
    image: '/images/projects/bb-hotels-social.jpg',
    behanceUrl: 'https://www.behance.net/gallery/249526257/B-B-HOTELS-Social-Media-Design',
  },
  {
    id: 6, slug: 'treeal',
    title: 'Treeal',
    description: 'Criação de conteúdo para as redes sociais',
    descriptionEn: 'Social media content creation',
    tags: ['DESIGN GRÁFICO'], year: '2026', type: 'Design Gráfico',
    image: '/images/projects/treeal.jpg',
    behanceUrl: 'https://www.behance.net/gallery/249528495/Treeal-Social-Media-Design',
  },
];

/* ─── Testimonials ──────────────────────────────────────────────────────────── */
export const testimonials = [
  {
    id: 1,
    quote: 'O Lucas é extremamente comprometido, focado e sempre busca entregar o melhor em cada projeto. Ele entende rapidamente as necessidades do projeto e propõe soluções eficientes e inovadoras através do seu feeling apurado. Trabalhar com o Lucas é uma experiência leve, fluida e MUITO produtiva.',
    quoteEn: 'Lucas is extremely committed, focused and always seeks to deliver the best in each project. He quickly understands project needs and proposes efficient, innovative solutions. Working with Lucas is a light, fluid and VERY productive experience.',
    name: 'Renata Ferrari',
    role: 'Estrategista de Conteúdo · Agência WB.P',
    roleEn: 'Content Strategist · Agência WB.P',
    initials: 'RF',
    photo: '/images/testimonials/renata.jpg',
  },
  {
    id: 2,
    quote: 'Ele entende o KV do cliente com precisão e já propõe soluções visuais com agilidade, repertório e um olhar criativo muito apurado. O Lucas tem aquele algo a mais que transforma processo em parceria, e uma ideia em uma peça memorável.',
    quoteEn: 'He understands the client\'s key visual with precision and proposes visual solutions with agility, background and a sharp creative eye. Lucas has that something extra that transforms a process into a partnership, and an idea into a memorable piece.',
    name: 'Giovanna Gundim',
    role: 'Social Media · Agência WB.P',
    roleEn: 'Social Media · Agência WB.P',
    initials: 'GG',
    photo: '/images/testimonials/giovanna.jpg',
  },
  {
    id: 3,
    quote: 'Ele tem um olhar super apurado pro design e, mais do que isso, consegue entender direitinho o que o cliente quer — às vezes até antes do cliente saber! Dá pra confiar de olhos fechados no trabalho dele.',
    quoteEn: 'He has a very sharp eye for design and understands exactly what the client wants — sometimes even before the client knows! You can trust his work completely, because it always comes out great, beautiful and well thought out.',
    name: 'Julia Gandin',
    role: 'Especialista em Growth Marketing · Agência WB.P',
    roleEn: 'Growth Marketing Specialist · Agência WB.P',
    initials: 'JG',
    photo: '/images/testimonials/julia.jpg',
  },
  {
    id: 4,
    quote: 'Lucas é um profissional altamente talentoso, com uma visão estética refinada e uma abordagem inovadora em todos os projetos que desenvolve. Seu esforço constante para se desenvolver o torna cada vez mais qualificado.',
    quoteEn: 'Lucas is a highly talented professional with a refined aesthetic vision and an innovative approach in every project he develops. His constant effort to grow makes him increasingly qualified and capable of adding value to any team.',
    name: 'Alexandra Borghi',
    role: 'Analista de Marketing · UNICSUL',
    roleEn: 'Marketing Analyst · UNICSUL',
    initials: 'AB',
    photo: '/images/testimonials/alexandra.jpg',
  },
  {
    id: 5,
    quote: 'No que diz respeito a desempenho, compromisso, esforço e dedicação, não existe meio termo — o Lucas realiza trabalhos esplêndidos e espetaculares! Preza pela empatia, ética e um bom relacionamento no ambiente de trabalho.',
    quoteEn: 'When it comes to performance, commitment, effort and dedication, there is no middle ground — Lucas delivers splendid and spectacular work! He values empathy, ethics and good relationships in the workplace.',
    name: 'Vinicius Migalhães',
    role: 'Endomarketing · S.I.N. Implant System',
    roleEn: 'Internal Marketing · S.I.N. Implant System',
    initials: 'VM',
    photo: '/images/testimonials/vinicius.jpg',
  },
  {
    id: 6,
    quote: 'Lucas é um profissional excepcional. Sempre em busca de aprimorar-se, nos traz uma visão nova a cada design minuciosamente pensado. O recomendaria a todo aquele que deseja profissionalismo, obstinação e criatividade.',
    quoteEn: 'Lucas is an exceptional professional. Always seeking improvement, he brings a fresh perspective with each meticulously crafted design. I would recommend him to anyone looking for professionalism, determination and creativity.',
    name: 'Gabriel Barbosa',
    role: 'Especialista em Serviços Financeiros · Santander',
    roleEn: 'Financial Services Specialist · Santander',
    initials: 'GB',
    photo: '/images/testimonials/gabriel.jpg',
  },
  {
    id: 7,
    quote: 'Lucas é o melhor Designer que já conheci, uma pessoa competente e prestativa. Sua criatividade e excelência o tornam ímpar — o recomendaria a qualquer empresa. É um enorme prazer fazer parte de um time em que o Lucas participa.',
    quoteEn: 'Lucas is the best Designer I have ever known, a competent and helpful person. His creativity and excellence make him one of a kind — I would recommend him to any company. It is a great pleasure to be part of a team where Lucas participates.',
    name: 'Beatriz Borgo',
    role: 'Produtora Audiovisual · UNICSUL',
    roleEn: 'Audiovisual Producer · UNICSUL',
    initials: 'BB',
    photo: '/images/testimonials/beatriz.jpg',
  },
];

/* ─── Skills (about section) ────────────────────────────────────────────────── */
export const skills = [
  { name: 'UI Design', detail: 'Figma · Design System', level: 75 },
  { name: 'Pós-Produção', detail: 'Photoshop · Retouching', level: 95 },
  { name: 'Direção de Arte', detail: 'Campanhas · Conceito', level: 90 },
  { name: 'IA Aplicada', detail: 'Midjourney · Prompting', level: 85 },
];

/* ─── Marquee items ─────────────────────────────────────────────────────────── */
export const marqueeItems = [
  'UI Design',
  'Product Design',
  'Pós-Produção',
  'Direção de Arte',
  'Figma',
  'Photoshop',
  'UX Research',
  'Design System',
  'Inteligência Artificial',
];

/* ─── Brands carousel (About section) ──────────────────────────────────────── */
// colorize: false → PNG already has colored fills, skip the dark→orange filter
export const brands: { name: string; logo: string; colorize?: boolean }[] = [
  { name: 'Clube da Giu',         logo: '/images/logos/clube-da-giu.svg' },
  { name: 'Girando Sol',          logo: '/images/logos/girando-sol.svg' },
  { name: 'WEG',                  logo: '/images/logos/weg.svg' },
  { name: 'B&B Hotels',           logo: '/images/logos/b-and-b.png',    colorize: false },
  { name: 'MBigucci',             logo: '/images/logos/mbigucci.png',   colorize: false },
  { name: 'Treeal',               logo: '/images/logos/treeal.svg' },
  { name: 'NTT Data',             logo: '/images/logos/ntt-data.svg' },
  { name: 'Alfacon',              logo: '/images/logos/alfacon.svg' },
  { name: 'Pernambuco da Sorte',  logo: '/images/logos/pernambuco-da-sorte.svg' },
  { name: 'Acelerador Racing',    logo: '/images/logos/acelerador-racing.svg' },
  { name: 'Sunlife',              logo: '/images/logos/sunlife.svg' },
  { name: 'LBF',                  logo: '/images/logos/lbf.svg' },
  { name: 'Session Store',        logo: '/images/logos/session-store.svg' },
  { name: 'Caos',                 logo: '/images/logos/caos.svg' },
  { name: 'Grupo Amazonas',       logo: '/images/logos/grupo-amazonas.svg' },
  { name: 'Atacadão',             logo: '/images/logos/atacadao.svg' },
  { name: 'ESAMC',                logo: '/images/logos/esamc.svg' },
];

/* ─── Contact links ─────────────────────────────────────────────────────────── */
export const contactLinks = [
  { label: 'E-mail', value: 'lucasantosprofiss@gmail.com', href: 'mailto:lucasantosprofiss@gmail.com' },
  { label: 'LinkedIn', value: 'luskasdesign', href: 'https://linkedin.com/in/luskasdesign/' },
  { label: 'Behance', value: 'luskasdesign', href: 'https://www.behance.net/luskasdesign' },
  { label: 'Instagram', value: '@luskas.design', href: 'https://www.instagram.com/luskas.design/' },
  { label: 'WhatsApp', value: '(11) 98422-1317', href: 'https://wa.me/5511984221317' },
];

/* ─── Case Studies ──────────────────────────────────────────────────────────── */
export interface CaseStudy {
  slug: string;
  title: string;
  titleDisplay: string; // with \n for hero
  tags: string[];
  year: string;
  type: string;
  info: { label: string; value: string; highlight?: boolean }[];
  overview: {
    lead: string;
    body: string[];
    infoList: { label: string; value: string; highlight?: boolean }[];
  };
  process: { num: string; title: string; desc: string }[];
  results: { intro: string; items: { num: string; label: string }[] };
  nextSlug?: string;
  nextTitle?: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  'bb-hotels': {
    slug: 'bb-hotels',
    title: 'B&B Hotels Landing Page',
    titleDisplay: 'B&B Hotels\nLanding Page',
    tags: ['UI Design', 'UX', 'Landing Page'],
    year: '2024',
    type: 'Estudo de caso',
    info: [
      { label: 'Tipo', value: 'Estudo de caso' },
      { label: 'Área', value: 'UI / UX Design' },
      { label: 'Ferramentas', value: 'Figma' },
      { label: 'Ano', value: '2024' },
    ],
    overview: {
      lead: 'Redesign focado em conversão e clareza visual.',
      body: [
        'A B&B Hotels é uma rede hoteleira europeia com presença em mais de 700 localizações. O desafio deste estudo de caso foi redesenhar a landing page com foco em aumentar a taxa de conversão e tornar a experiência de reserva mais intuitiva.',
        'A proposta partiu de uma análise crítica da interface existente: hierarquia visual pouco clara, calls-to-action genéricas e falta de ritmo na leitura da página. O redesign priorizou componentes modulares, tipografia mais expressiva e um fluxo que guia o usuário naturalmente até a ação de reserva.',
      ],
      infoList: [
        { label: 'Desafio', value: 'Baixa conversão na LP' },
        { label: 'Abordagem', value: 'UI redesign conceitual' },
        { label: 'Foco', value: 'UX · Hierarquia · CTA' },
        { label: 'Entregável', value: 'Protótipo no Figma' },
        { label: 'Status', value: 'Estudo pessoal', highlight: true },
      ],
    },
    process: [
      {
        num: '01',
        title: 'Análise',
        desc: 'Auditoria da interface existente: hierarquia, fluxo, componentes e pontos de fricção na jornada do usuário.',
      },
      {
        num: '02',
        title: 'Referências',
        desc: 'Benchmark de landing pages de hotelaria com alto índice de conversão. Mapeamento de padrões eficientes.',
      },
      {
        num: '03',
        title: 'Wireframe',
        desc: 'Estruturação da nova hierarquia: hero, busca, diferenciais, quartos e CTA. Validação de fluxo antes do visual.',
      },
      {
        num: '04',
        title: 'UI Final',
        desc: 'Aplicação visual com sistema de componentes, tipografia refinada e paleta que transmite confiança e modernidade.',
      },
    ],
    results: {
      intro:
        'Trabalhar com um produto real exigiu pesquisa antes de execução — entender o contexto da marca, o público e as limitações antes de abrir o Figma. Foi o primeiro projeto onde me forcei a justificar cada decisão de design.',
      items: [
        {
          num: '3×',
          label: 'Melhora estimada na clareza visual da hierarquia em comparação com a versão original',
        },
        {
          num: '12+',
          label: 'Componentes criados e documentados no Figma para o design system da página',
        },
        { num: '100%', label: 'Responsivo — mobile-first com adaptação para tablet e desktop' },
      ],
    },
    nextSlug: 'tate-mcrae',
    nextTitle: 'Tate McRae\nAlbum Art',
  },
  'tate-mcrae': {
    slug: 'tate-mcrae',
    title: 'Tate McRae Album Art',
    titleDisplay: 'Tate McRae\nAlbum Art',
    tags: ['Pós-Produção', 'Photoshop'],
    year: '2024',
    type: 'Estudo de caso',
    info: [
      { label: 'Tipo', value: 'Estudo de caso' },
      { label: 'Área', value: 'Pós-Produção Digital' },
      { label: 'Ferramentas', value: 'Photoshop' },
      { label: 'Ano', value: '2024' },
    ],
    overview: {
      lead: 'Composição digital de alta complexidade para cover de álbum.',
      body: [
        'Manipulação e composição desenvolvida no Photoshop, explorando técnicas avançadas de mascaramento, correção de cor e criação de atmosfera visual para uma capa de álbum conceitual.',
      ],
      infoList: [
        { label: 'Desafio', value: 'Composição realista' },
        { label: 'Técnicas', value: 'Mascaramento · Cor · Luz' },
        { label: 'Entregável', value: 'Composição final' },
        { label: 'Status', value: 'Estudo pessoal', highlight: true },
      ],
    },
    process: [
      { num: '01', title: 'Referências', desc: 'Pesquisa de referências visuais de álbuns com alta qualidade de pós-produção.' },
      { num: '02', title: 'Seleção', desc: 'Curadoria e seleção de imagens base para a composição.' },
      { num: '03', title: 'Composição', desc: 'Trabalho de mascaramento, ajuste de luz e integração dos elementos.' },
      { num: '04', title: 'Finalização', desc: 'Color grading final e ajustes de detalhe para coesão visual.' },
    ],
    results: {
      intro: 'Projeto que aprofundou o domínio técnico em Photoshop e a sensibilidade para linguagem visual de álbuns.',
      items: [
        { num: '40+', label: 'Camadas no arquivo final do Photoshop' },
        { num: '8h', label: 'Tempo total de execução da composição' },
        { num: '4K', label: 'Resolução final do arquivo entregue' },
      ],
    },
    nextSlug: 'girando-sol',
    nextTitle: 'Girando Sol\nSocial Media',
  },
  'girando-sol': {
    slug: 'girando-sol',
    title: 'Girando Sol Social Media',
    titleDisplay: 'Girando Sol\nSocial Media',
    tags: ['Social Media', 'Direção de Arte'],
    year: '2023',
    type: 'Projeto real',
    info: [
      { label: 'Tipo', value: 'Projeto real' },
      { label: 'Área', value: 'Social Media · Identidade' },
      { label: 'Ferramentas', value: 'Photoshop · Illustrator' },
      { label: 'Ano', value: '2023' },
    ],
    overview: {
      lead: 'Identidade visual e gestão de conteúdo para redes sociais.',
      body: [
        'Criação de identidade visual para redes sociais e gestão de conteúdo para a Girando Sol, marca de produtos de limpeza. O trabalho envolveu desenvolvimento de templates, direção de arte e produção consistente de posts.',
      ],
      infoList: [
        { label: 'Cliente', value: 'Girando Sol' },
        { label: 'Segmento', value: 'Produtos de limpeza' },
        { label: 'Escopo', value: 'Social Media · Arte' },
        { label: 'Status', value: 'Entregue', highlight: true },
      ],
    },
    process: [
      { num: '01', title: 'Briefing', desc: 'Alinhamento com o cliente sobre tom de voz, público e objetivos.' },
      { num: '02', title: 'Identidade', desc: 'Criação de linguagem visual para redes sociais: tipografia, cores e elementos.' },
      { num: '03', title: 'Templates', desc: 'Desenvolvimento de templates reutilizáveis para posts e stories.' },
      { num: '04', title: 'Gestão', desc: 'Produção contínua de conteúdo e adaptação conforme resultados.' },
    ],
    results: {
      intro: 'Projeto que consolidou habilidades em direção de arte aplicada a redes sociais e gestão de marca.',
      items: [
        { num: '6+', label: 'Meses de gestão de conteúdo para a marca' },
        { num: '20+', label: 'Templates criados para o banco de conteúdo' },
        { num: '3×', label: 'Crescimento de engajamento durante a gestão' },
      ],
    },
    nextSlug: 'campanhas-digitais',
    nextTitle: 'Campanhas\nDigitais',
  },
  'campanhas-digitais': {
    slug: 'campanhas-digitais',
    title: 'Campanhas Digitais',
    titleDisplay: 'Campanhas\nDigitais',
    tags: ['Campanhas', 'IA + Design'],
    year: '2024',
    type: 'Estudo de caso',
    info: [
      { label: 'Tipo', value: 'Estudo de caso' },
      { label: 'Área', value: 'Publicidade Digital' },
      { label: 'Ferramentas', value: 'Photoshop · Midjourney' },
      { label: 'Ano', value: '2024' },
    ],
    overview: {
      lead: 'Campanhas digitais integrando IA como ferramenta criativa.',
      body: [
        'Criação de campanhas publicitárias digitais integrando inteligência artificial como ferramenta de produção e conceituação. O processo combina geração com Midjourney e refinamento em Photoshop para resultados de alta qualidade.',
      ],
      infoList: [
        { label: 'Abordagem', value: 'IA + Pós-produção' },
        { label: 'Ferramentas', value: 'Midjourney · Photoshop' },
        { label: 'Formato', value: 'Digital · Social' },
        { label: 'Status', value: 'Estudo pessoal', highlight: true },
      ],
    },
    process: [
      { num: '01', title: 'Conceito', desc: 'Desenvolvimento de briefing criativo e referências visuais.' },
      { num: '02', title: 'Geração IA', desc: 'Uso de Midjourney para geração de base visual com prompts refinados.' },
      { num: '03', title: 'Refinamento', desc: 'Tratamento em Photoshop: composição, cor, texto e identidade de marca.' },
      { num: '04', title: 'Adaptação', desc: 'Adaptação para diferentes formatos: feed, stories, banner.' },
    ],
    results: {
      intro: 'Projeto que demonstrou como IA e design manual se complementam para criar resultados refinados e únicos.',
      items: [
        { num: '5×', label: 'Mais rápido que o processo tradicional de produção de imagens' },
        { num: '100%', label: 'Das imagens refinadas manualmente no Photoshop após geração' },
        { num: '0%', label: 'De imagens entregues sem curadoria e ajuste humano' },
      ],
    },
    nextSlug: 'bb-hotels',
    nextTitle: 'B&B Hotels\nLanding Page',
  },
};
