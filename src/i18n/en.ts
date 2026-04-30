import type { Translation } from './types';

export const en: Translation = {
  meta: {
    title: 'xarop — Custom development with AI',
    description:
      'A small studio that builds bespoke websites and apps with AI. Fast, well-built, no tech debt. Barcelona.',
  },
  nav: {
    services: 'Services',
    process: 'Process',
    work: 'Work',
    faq: 'FAQ',
    about: 'About us',
    contact: 'Contact',
    menu: 'Menu',
    flavor: 'Flavor',
    language: 'Language',
    theme: 'Toggle theme',
  },
  hero: {
    eyebrow: 'Development studio · Barcelona',
    titleHtml: 'Websites<br>and apps,<br>in <em>weeks</em>.',
    lead:
      'A small agency that uses AI to build digital products fast, well, and without tech debt. Pick the flavor you like best.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'See projects',
  },
  stats: [
    { num: '2–4', label: 'weeks to launch on average' },
    { num: '+30', label: 'projects shipped since 2020' },
    { num: '100%', label: 'open, auditable code — no lock-in' },
  ],
  services: {
    tag: '01 — What we do',
    title: 'Digital product, from idea to production.',
    lead:
      'Everything you need to ship: web, app, AI integration, or a rewrite of what you already have. A small team, no middlemen.',
    items: [
      {
        num: '/01',
        title: 'Bespoke websites',
        desc:
          'Landings, corporate, editorial portals, e-commerce. Static where it matters, dynamic where it must. Subtle, accessible, fast animations.',
        tags: ['Astro', 'Next.js', 'Headless CMS'],
      },
      {
        num: '/02',
        title: 'Web migrations',
        desc:
          'From WordPress to modern tech. Break free from Elementor and plugins: a lightweight, fast, debt-free architecture.',
        tags: ['Astro', 'Next.js', 'WordPress'],
      },
      {
        num: '/03',
        title: 'AI integrations',
        desc:
          'Support chatbots, process automation, RAG on your docs, content generation. OpenAI, Anthropic, or open-source models.',
        tags: ['RAG', 'Agents', 'Embeddings'],
      },
      {
        num: '/04',
        title: 'Performance & refactor',
        desc:
          'Your site is slow? Legacy code piling up debt? We audit, prioritize, and ship it flying. Core Web Vitals in the green.',
        tags: ['Performance', 'SEO', 'DX'],
      },
    ],
  },
  process: {
    tag: '02 — How we work',
    title: 'Four steps. No surprises.',
    lead:
      "Fixed price, concrete dates, visible releases every week. You watch your product grow; we ship it to production.",
    steps: [
      { num: '01', title: 'Brief',     desc: 'A 30-min call. You explain the problem. We send a plan and a fixed price.',     time: '→ 1 day' },
      { num: '02', title: 'Prototype', desc: 'A first navigable build in 3-5 days. We validate direction before spending more.', time: '→ 1 week' },
      { num: '03', title: 'Build',     desc: 'Short sprints with a new version deployed every Friday.',                          time: '→ 2–6 weeks' },
      { num: '04', title: 'Deploy',    desc: 'Launch, training, and 3 months of warranty. Code and infrastructure are yours.',   time: '→ Forever' },
    ],
  },
  work: {
    tag: '03 — Work',
    title: 'Things we shipped to production.',
    lead: 'Six recent projects. Stack, duration, and what we solved. Ask for references if you want more detail.',
  },
  faq: {
    tag: '04 — Questions',
    title: 'Quick answers.',
    lead: "What everyone asks before starting. If something's missing, drop us a line.",
    items: [
      { q: 'How long does a project take?', a: 'A simple landing, 2 weeks. A bespoke app, 4-8 weeks. We commit to concrete dates in the brief and they hold once signed.' },
      { q: 'How much does it cost?', a: 'We work with custom quotes. AI helps us move faster, but human creativity is priceless. After a first call we send you a plan and a fixed price for your specific project.' },
      { q: 'Who owns the code?', a: 'You do, always. Repository in your GitHub from commit one. No lock-in.' },
      { q: 'Remote or in-person?', a: 'Remote by default. We are in Barcelona if you fancy a coffee or an in-person kick-off.' },
      { q: 'What happens after launch?', a: 'Three months of warranty included. Then you can subscribe to monthly support or go solo.' },
      { q: "Why 'xarop'?", a: "Because every client has a different flavor. We pick the brand palette and product tone like picking a syrup ('xarop' in Catalan)." },
    ],
  },
  contact: {
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    subjectOptions: [
      'Request a quote',
      'Request maintenance',
      'Hire for a project',
      'Migrate from WordPress to modern tech',
      'Other enquiry',
    ],
    message: 'Message (optional)',
    send: 'Send',
  },
  cta: {
    questionHtml: 'Have a project?<br>',
    sub: 'We reply in under 24h. No commitment.',
    primary: 'Send email',
    secondary: 'Book 30 min',
  },
  footer: {
    rights: '© 2026 xarop · Barcelona',
  },
};
