export interface Translation {
  meta: { title: string; description: string };
  nav: {
    services: string;
    process: string;
    work: string;
    faq: string;
    about: string;
    contact: string;
    menu: string;
    flavor: string;
    language: string;
    theme: string;
  };
  hero: {
    eyebrow: string;
    titleHtml: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: { num: string; label: string }[];
  services: {
    tag: string;
    title: string;
    lead: string;
    items: { num: string; title: string; desc: string; tags: string[] }[];
  };
  process: {
    tag: string;
    title: string;
    lead: string;
    steps: { num: string; title: string; desc: string; time: string }[];
  };
  work: { tag: string; title: string; lead: string };
  faq: {
    tag: string;
    title: string;
    lead: string;
    items: { q: string; a: string }[];
  };
  contact: {
    name: string;
    email: string;
    subject: string;
    subjectOptions: string[];
    message: string;
    send: string;
  };
  cta: { questionHtml: string; sub: string; primary: string; secondary: string };
  footer: { rights: string };
}

export type Locale = 'ca' | 'es' | 'en';
