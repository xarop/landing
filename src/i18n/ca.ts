import type { Translation } from './types';

export const ca: Translation = {
  meta: {
    title: 'xarop — Desenvolupament a mida amb IA',
    description:
      "Estudi petit que construeix webs i apps a mida amb IA. Ràpid, ben fet i sense deute tècnic. Barcelona.",
  },
  nav: {
    services: 'Serveis',
    process: 'Procés',
    work: 'Projectes',
    faq: 'FAQ',
    about: 'Sobre nosaltres',
    contact: 'Contacte',
    menu: 'Menú',
    flavor: 'Sabor',
    language: 'Idioma',
    theme: 'Canvia tema',
  },
  hero: {
    eyebrow: 'Estudi de desenvolupament · Barcelona',
    titleHtml: 'Webs i apps<br>a mida.',
    lead:
      "Som una agència petita que utilitza IA per construir productes digitals ràpids, ben fets i sense deute tècnic. Tria el sabor que més t'agradi.",
    ctaPrimary: 'Comencem un projecte',
    ctaSecondary: 'Veure projectes',
  },
  stats: [
    { num: '2–4', label: 'setmanes per llançar de mitjana' },
    { num: '+30', label: 'projectes des de 2020' },
    { num: '100%', label: 'codi obert i auditable, sense lock-in' },
  ],
  services: {
    tag: '01 — Què fem',
    title: 'Producte digital, de la idea a producció.',
    lead:
      'Tot el que necessites per posar una idea al món: web, app, integració amb IA o reescriure el que ja tens. Un equip petit, sense intermediaris.',
    items: [
      {
        num: '/01',
        title: 'Webs a mida',
        desc:
          'Landings, corporatius, portals editorials, e-commerce. Estàtic on cal, dinàmic quan toca. Animacions sutils, accessibles, ràpids.',
        tags: ['Astro', 'Next.js', 'Headless CMS'],
      },
      {
        num: '/02',
        title: 'Migracions web',
        desc:
          "De WordPress a tecnologies modernes. Allibera't d'Elementor i plugins: arquitectura lleugera, ràpida i sense deute tècnic.",
        tags: ['Astro', 'Next.js', 'WordPress'],
      },
      {
        num: '/03',
        title: 'Integracions amb IA',
        desc:
          'Chatbots de suport, automatització de processos, RAG sobre la teva documentació, generació de continguts. Models OpenAI, Anthropic o open-source.',
        tags: ['RAG', 'Agents', 'Embeddings'],
      },
      {
        num: '/04',
        title: 'Optimització i refactor',
        desc:
          'El teu site és lent? Tens un codi heretat ple de deute? Auditem, prioritzem i el deixem volant. Core Web Vitals al verd.',
        tags: ['Performance', 'SEO', 'DX'],
      },
    ],
  },
  process: {
    tag: '02 — Com treballem',
    title: 'Quatre passos. Sense sorpreses.',
    lead:
      "Pressupost tancat, dates concretes, releases visibles cada setmana. Tu mires com creix el teu producte; nosaltres l'enviem a producció.",
    steps: [
      { num: '01', title: 'Brief',    desc: "Una trucada de 30 min. Ens expliques el problema. T'enviem un pla i un preu tancat.", time: '→ 1 dia' },
      { num: '02', title: 'Prototip', desc: 'Primer build navegable en 3-5 dies. Validem rumb abans de gastar més temps.',         time: '→ 1 setmana' },
      { num: '03', title: 'Build',    desc: 'Sprints curts amb una nova versió desplegada cada divendres.',                         time: '→ 2–6 setmanes' },
      { num: '04', title: 'Deploy',   desc: 'Posada en marxa, formació i 3 mesos de garantia inclosos. Codi i infra, teus.',        time: '→ Per sempre' },
    ],
  },
  work: {
    tag: '03 — Projectes',
    title: 'Coses que hem enviat a producció.',
    lead: "Sis projectes recents. Stack, durada i una idea de què hem resolt. Demana referències si en vols més detalls.",
  },
  faq: {
    tag: '04 — Preguntes',
    title: 'Respostes ràpides.',
    lead: "El que et pregunta tothom abans de començar. Si en falta alguna, escriu-nos.",
    items: [
      { q: 'Quan triga un projecte?', a: 'Una landing simple en 2 setmanes. Una app a mida, 4-8 setmanes. Et donem dates concretes al brief, i no es belluguen un cop signades.' },
      { q: 'Quant costa?', a: "Treballem amb pressupostos a mida. La IA ens ajuda a anar més ràpid, però la creativitat humana no té preu. Després d'una primera trucada t'enviem un pla i un preu tancat per al teu projecte concret." },
      { q: 'De qui és el codi?', a: 'Sempre teu. Repositori al teu compte de GitHub des del primer commit. Sense lock-in.' },
      { q: 'Treballeu remot o presencial?', a: 'Remot per defecte. Som a Barcelona si vols quedar per cafè o un kick-off presencial.' },
      { q: 'Què passa després del llançament?', a: 'Tres mesos de garantia inclosos. Després pots contractar suport mensual o anar pel teu compte.' },
      { q: "Per què 'xarop'?", a: "Perquè cada client té un sabor diferent. Triem la paleta i el to del producte com qui tria un xarop." },
    ],
  },
  contact: {
    name: 'Nom',
    email: 'Email',
    subject: 'Assumpte',
    subjectOptions: [
      'Demanar pressupost',
      'Demanar manteniment',
      'Contractar per un projecte',
      'Traspassar de WordPress a tecnologia moderna',
      'Altra consulta',
    ],
    message: 'Missatge (opcional)',
    send: 'Enviar',
  },
  cta: {
    questionHtml: 'Tens un projecte?<br>',
    sub: 'Resposta en menys de 24h. Sense compromís.',
    primary: 'Escriure email',
    secondary: 'Reservar 30 min',
  },
  footer: {
    rights: '© 2026 xarop · Barcelona',
  },
};
