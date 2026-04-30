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
  viz: 'blocs' | 'napptilius' | 'iusintegra' | 'vaivera' | 'xarop' | 'vueling';
  i18n: Record<'ca' | 'es' | 'en', { client: string; year: string; title: string; desc: string }>;
}

export const projects: Project[] = [
  {
    slug: 'frontend-developer-desenvolupament-de-blocs',
    url: 'https://web.xarop.com/portfolio/frontend-developer-desenvolupament-de-blocs/',
    viz: 'blocs',
    i18n: {
      ca: {
        client: 'ByteBerry Studio', year: '2021',
        title: 'Desenvolupament de blocs',
        desc: "Estratègia tècnica i desenvolupament d'ecosistemes corporatius robustos amb arquitectures multilingües i backends a mida.",
      },
      es: {
        client: 'ByteBerry Studio', year: '2021',
        title: 'Desarrollo de bloques',
        desc: 'Estrategia técnica y desarrollo de ecosistemas corporativos robustos con arquitecturas multilingües y backends a medida.',
      },
      en: {
        client: 'ByteBerry Studio', year: '2021',
        title: 'Block development',
        desc: 'Technical strategy and robust corporate ecosystems with multilingual architectures and bespoke backends.',
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
    slug: 'vaivera-disseny-dinteriors',
    url: 'https://web.xarop.com/portfolio/vaivera-disseny-dinteriors/',
    viz: 'vaivera',
    i18n: {
      ca: {
        client: "Estudi d'interiors", year: '2025',
        title: 'Vaivera',
        desc: 'Presència digital com a catàleg dinàmic, amb un desenvolupament frontend centrat en el detall visual.',
      },
      es: {
        client: 'Estudio de interiores', year: '2025',
        title: 'Vaivera',
        desc: 'Presencia digital como catálogo dinámico, con un desarrollo frontend centrado en el detalle visual.',
      },
      en: {
        client: 'Interior design studio', year: '2025',
        title: 'Vaivera',
        desc: 'A digital presence as a dynamic catalogue, with frontend development focused on visual detail.',
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
    slug: 'frontend-engineer-vueling-airlines-newshore',
    url: 'https://web.xarop.com/portfolio/frontend-engineer-vueling-airlines-newshore/',
    viz: 'vueling',
    i18n: {
      ca: {
        client: 'Newshore · Vueling', year: '2018',
        title: 'Vueling Airlines',
        desc: "Interfícies d'alt tràfic i webapps amb components modulars, Design Systems i APIs REST en entorn SCRUM.",
      },
      es: {
        client: 'Newshore · Vueling', year: '2018',
        title: 'Vueling Airlines',
        desc: 'Interfaces de alto tráfico y webapps con componentes modulares, Design Systems y APIs REST en entorno SCRUM.',
      },
      en: {
        client: 'Newshore · Vueling', year: '2018',
        title: 'Vueling Airlines',
        desc: 'High-traffic interfaces and web apps with modular components, design systems, and REST APIs in a SCRUM environment.',
      },
    },
  },
];
