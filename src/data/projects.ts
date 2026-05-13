/**
 * Featured projects (linked from the Work section).
 *
 * Each project has its own visual SVG ("viz") rendered inline so it picks up
 * the active flavour via currentColor / CSS variables. Translatable copy
 * comes from src/i18n/projects via the `i18n` map keyed by slug.
 */

export interface Project {
  slug: string;
  url: string;
  viz: 'blocs' | 'napptilius' | 'iusintegra' | 'junglemows' | 'xarop' | 'landing' | 'somespai' | 'paumirabet' | 'filmfestival';
  i18n: Record<'ca' | 'es' | 'en', { client: string; year: string; title: string; desc: string }>;
}

export const projects: Project[] = [
  {
    slug: 'app-somespai',
    url: 'https://web.xarop.com/portfolio/app-somespai/',
    viz: 'somespai',
    i18n: {
      ca: {
        client: 'Projecte propi', year: '2026',
        title: 'Somespai',
        desc: "Marketplace P2P d'espais a Barcelona i Catalunya. Minimalisme radical, geolocalització prioritària i orientació mobile-first.",
      },
      es: {
        client: 'Proyecto propio', year: '2026',
        title: 'Somespai',
        desc: 'Marketplace P2P de espacios en Cataluña. Minimalismo radical, geolocalización prioritaria y orientación mobile-first.',
      },
      en: {
        client: 'Own project', year: '2026',
        title: 'Somespai',
        desc: 'P2P spaces marketplace in Catalonia. Radical minimalism, priority geolocation, and mobile-first orientation.',
      },
    },
  },
  {
    slug: 'napptilius',
    url: 'https://web.xarop.com/portfolio/napptilius/',
    viz: 'napptilius',
    i18n: {
      ca: {
        client: 'Zara Web Challenge', year: '2026',
        title: 'Napptilius',
        desc: 'Catàleg de smartphones responsive, accessible i multillengua amb frontend React i backend BFF opcional.',
      },
      es: {
        client: 'Zara Web Challenge', year: '2026',
        title: 'Napptilius',
        desc: 'Catálogo de smartphones responsive, accesible y multilingüe con frontend React y backend BFF opcional.',
      },
      en: {
        client: 'Zara Web Challenge', year: '2026',
        title: 'Napptilius',
        desc: 'Responsive, accessible, multilingual smartphone catalog with React frontend and optional BFF backend.',
      },
    },
  },
  {
    slug: 'iusintegra-serveis-juridics',
    url: 'https://web.xarop.com/portfolio/iusintegra-serveis-juridics/',
    viz: 'iusintegra',
    i18n: {
      ca: {
        client: 'Despatx jurídic', year: '2026',
        title: 'IusIntegra',
        desc: "Web centrada en la usabilitat jurídica: claredat informativa i arquitectura optimitzada sota els estàndards del Kit Digital.",
      },
      es: {
        client: 'Despacho jurídico', year: '2026',
        title: 'IusIntegra',
        desc: 'Web centrada en la usabilidad jurídica: claridad informativa y arquitectura optimizada bajo los estándares del Kit Digital.',
      },
      en: {
        client: 'Law firm', year: '2026',
        title: 'IusIntegra',
        desc: 'Site focused on legal usability: information clarity and architecture optimised against the Spanish Kit Digital standards.',
      },
    },
  },
  {
    slug: 'xarop-com',
    url: 'https://web.xarop.com/portfolio/xarop-com/',
    viz: 'xarop',
    i18n: {
      ca: {
        client: 'Web personal', year: '2026',
        title: 'xarop.com',
        desc: 'Aquesta web. Set sabors, zero base de dades, Markdown, auto-allotjada.',
      },
      es: {
        client: 'Web personal', year: '2026',
        title: 'xarop.com',
        desc: 'Esta web. Siete sabores, cero base de datos, Markdown, autoalojada.',
      },
      en: {
        client: 'Personal site', year: '2026',
        title: 'xarop.com',
        desc: 'This site. Seven flavors, no database, Markdown, self-hosted.',
      },
    },
  },
  {
    slug: 'pott-landing',
    url: 'https://web.xarop.com/portfolio/landing/',
    viz: 'landing',
    i18n: {
      ca: {
        client: 'Projecte propi', year: '2026',
        title: 'Landing',
        desc: 'One-pager construïda amb Astro 5 i TypeScript, sense frameworks JS, sistema de disseny multi-sabor i rutes multilingüe.',
      },
      es: {
        client: 'Proyecto propio', year: '2026',
        title: 'Landing',
        desc: 'One-pager construida con Astro 5 y TypeScript, sin frameworks JS, sistema de diseño multi-sabor y rutas multilingüe.',
      },
      en: {
        client: 'Own project', year: '2026',
        title: 'Landing',
        desc: 'One-pager built with Astro 5 and TypeScript — no JS framework, multi-flavour design system, multilingual routing.',
      },
    },
  },
  {
    slug: 'frontend-developer-desenvolupament-de-blocs',
    url: 'https://web.xarop.com/portfolio/frontend-developer-desenvolupament-de-blocs/',
    viz: 'blocs',
    i18n: {
      ca: {
        client: 'ByteBerry Studio', year: '2025',
        title: 'Desenvolupament de blocs',
        desc: "Estratègia tècnica i desenvolupament d'ecosistemes corporatius robustos amb arquitectures multilingües i backends a mida.",
      },
      es: {
        client: 'ByteBerry Studio', year: '2025',
        title: 'Desarrollo de bloques',
        desc: 'Estrategia técnica y desarrollo de ecosistemas corporativos robustos con arquitecturas multilingües y backends a medida.',
      },
      en: {
        client: 'ByteBerry Studio', year: '2025',
        title: 'Block development',
        desc: 'Technical strategy and robust corporate ecosystems with multilingual architectures and bespoke backends.',
      },
    },
  },
  {
    slug: 'pau-mirabet-direccio-dart-i-disseny',
    url: 'https://web.xarop.com/portfolio/pau-mirabet-direccio-dart-i-disseny/',
    viz: 'paumirabet',
    i18n: {
      ca: {
        client: 'Pau Mirabet', year: '2024',
        title: "Direcció d'art i disseny",
        desc: "Desenvolupament de web minimalista per al portfolio de Pau Mirabet. Transicions fluïdes i arquitectura de la informació centrada en el visual.",
      },
      es: {
        client: 'Pau Mirabet', year: '2024',
        title: 'Dirección de arte y diseño',
        desc: 'Desarrollo de web minimalista para el portfolio de Pau Mirabet. Transiciones fluidas y arquitectura de la información centrada en lo visual.',
      },
      en: {
        client: 'Pau Mirabet', year: '2024',
        title: 'Art and Design Direction',
        desc: "Minimalist website development for Pau Mirabet's portfolio. Smooth transitions and visual-first information architecture.",
      },
    },
  },
  {
    slug: 'junglemows-com',
    url: 'https://web.xarop.com/portfolio/junglemows-com/',
    viz: 'junglemows',
    i18n: {
      ca: {
        client: 'Botiga online', year: '2024',
        title: 'Junglemows',
        desc: 'Ecommerce amb alt volum de tràfic construït amb WordPress, optimitzat per a la conversió i l\'escalabilitat.',
      },
      es: {
        client: 'Tienda online', year: '2024',
        title: 'Junglemows',
        desc: 'Ecommerce con alto volumen de tráfico construido con WordPress, optimizado para la conversión y la escalabilidad.',
      },
      en: {
        client: 'Online store', year: '2024',
        title: 'Junglemows',
        desc: 'High-traffic ecommerce built with WordPress, optimised for conversion and scalability.',
      },
    },
  },
  {
    slug: 'film-festival-web-redesign',
    url: 'https://web.xarop.com/portfolio/film-festival-web-redesign/',
    viz: 'filmfestival',
    i18n: {
      ca: {
        client: 'Memorimage', year: '2023',
        title: 'Film Festival Web',
        desc: 'Redisseny de la pàgina web del Festival Internacional de Cinema de Reus, mantenint el backend i actualitzant el frontend.',
      },
      es: {
        client: 'Memorimage', year: '2023',
        title: 'Film Festival Web',
        desc: 'Rediseño de la página web del Festival Internacional de Cine de Reus, manteniendo el backend y actualizando el frontend.',
      },
      en: {
        client: 'Memorimage', year: '2023',
        title: 'Film Festival website',
        desc: 'Redesign of the Reus International Film Festival website, maintaining the backend and updating the frontend design.',
      },
    },
  },
];
