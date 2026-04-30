import type { Translation } from './types';

export const es: Translation = {
  meta: {
    title: 'xarop — Desarrollo a medida con IA',
    description:
      'Estudio pequeño que construye webs y apps a medida con IA. Rápido, bien hecho y sin deuda técnica. Barcelona.',
  },
  nav: {
    services: 'Servicios',
    process: 'Proceso',
    work: 'Proyectos',
    faq: 'FAQ',
    about: 'Sobre nosotros',
    contact: 'Contacto',
    menu: 'Menú',
    flavor: 'Sabor',
    language: 'Idioma',
    theme: 'Cambiar tema',
  },
  hero: {
    eyebrow: 'Estudio de desarrollo · Barcelona',
    titleHtml: 'Webs y apps<br><em>a medida</em>.',
    lead:
      'Somos una agencia pequeña que usa IA para construir productos digitales rápidos, bien hechos y sin deuda técnica. Elige el sabor que más te guste.',
    ctaPrimary: 'Empecemos un proyecto',
    ctaSecondary: 'Ver proyectos',
  },
  stats: [
    { num: '2–4', label: 'semanas para lanzar de media' },
    { num: '+30', label: 'proyectos desde 2020' },
    { num: '100%', label: 'código abierto y auditable, sin lock-in' },
  ],
  services: {
    tag: '01 — Qué hacemos',
    title: 'Producto digital, de la idea a producción.',
    lead:
      'Todo lo que necesitas para sacar una idea al mundo: web, app, integración con IA o reescribir lo que ya tienes. Un equipo pequeño, sin intermediarios.',
    items: [
      {
        num: '/01',
        title: 'Webs a medida',
        desc:
          'Landings, corporativos, portales editoriales, e-commerce. Estático cuando toca, dinámico cuando hace falta. Animaciones sutiles, accesibles, rápidos.',
        tags: ['Astro', 'Next.js', 'Headless CMS'],
      },
      {
        num: '/02',
        title: 'Migraciones web',
        desc:
          'De WordPress a tecnologías modernas. Libérate de Elementor y plugins: arquitectura ligera, rápida y sin deuda técnica.',
        tags: ['Astro', 'Next.js', 'WordPress'],
      },
      {
        num: '/03',
        title: 'Integraciones con IA',
        desc:
          'Chatbots de soporte, automatización de procesos, RAG sobre tu documentación, generación de contenido. Modelos OpenAI, Anthropic u open-source.',
        tags: ['RAG', 'Agents', 'Embeddings'],
      },
      {
        num: '/04',
        title: 'Optimización y refactor',
        desc:
          '¿Tu site va lento? ¿Código heredado lleno de deuda? Auditamos, priorizamos y lo dejamos volando. Core Web Vitals en verde.',
        tags: ['Performance', 'SEO', 'DX'],
      },
    ],
  },
  process: {
    tag: '02 — Cómo trabajamos',
    title: 'Cuatro pasos. Sin sorpresas.',
    lead:
      'Presupuesto cerrado, fechas concretas, releases visibles cada semana. Tú miras cómo crece tu producto; nosotros lo lanzamos a producción.',
    steps: [
      { num: '01', title: 'Brief',     desc: 'Una llamada de 30 min. Nos cuentas el problema. Te enviamos un plan y precio cerrado.', time: '→ 1 día' },
      { num: '02', title: 'Prototipo', desc: 'Primer build navegable en 3-5 días. Validamos rumbo antes de gastar más tiempo.',       time: '→ 1 semana' },
      { num: '03', title: 'Build',     desc: 'Sprints cortos con una nueva versión desplegada cada viernes.',                          time: '→ 2–6 semanas' },
      { num: '04', title: 'Deploy',    desc: 'Puesta en marcha, formación y 3 meses de garantía. Código e infraestructura, tuyos.',   time: '→ Para siempre' },
    ],
  },
  work: {
    tag: '03 — Proyectos',
    title: 'Cosas que hemos llevado a producción.',
    lead: 'Seis proyectos recientes. Stack, duración y qué hemos resuelto. Pide referencias si quieres más detalles.',
  },
  faq: {
    tag: '04 — Preguntas',
    title: 'Respuestas rápidas.',
    lead: 'Lo que te pregunta todo el mundo antes de empezar. Si falta alguna, escríbenos.',
    items: [
      { q: '¿Cuánto tarda un proyecto?', a: 'Una landing simple, 2 semanas. Una app a medida, 4-8 semanas. Te damos fechas concretas en el brief y no se mueven una vez firmadas.' },
      { q: '¿Cuánto cuesta?', a: 'Trabajamos con presupuestos a medida. La IA nos ayuda a ir más rápido, pero la creatividad humana no tiene precio. Tras una primera llamada te enviamos un plan y precio cerrado para tu proyecto concreto.' },
      { q: '¿De quién es el código?', a: 'Siempre tuyo. Repositorio en tu cuenta de GitHub desde el primer commit. Sin lock-in.' },
      { q: '¿Trabajáis en remoto o presencial?', a: 'Remoto por defecto. Estamos en Barcelona si quieres quedar para café o un kick-off presencial.' },
      { q: '¿Qué pasa después del lanzamiento?', a: 'Tres meses de garantía incluidos. Después puedes contratar soporte mensual o ir por tu cuenta.' },
      { q: '¿Por qué "xarop"?', a: 'Porque cada cliente tiene un sabor distinto. Elegimos la paleta y el tono del producto como quien elige un jarabe (xarop, en catalán).' },
    ],
  },
  contact: {
    name: 'Nombre',
    email: 'Email',
    subject: 'Asunto',
    subjectOptions: [
      'Pedir presupuesto',
      'Pedir mantenimiento',
      'Contratar para un proyecto',
      'Traspasar de WordPress a tecnología moderna',
      'Otra consulta',
    ],
    message: 'Mensaje (opcional)',
    send: 'Enviar',
  },
  cta: {
    questionHtml: '¿Tienes un proyecto?<br>',
    sub: 'Respuesta en menos de 24h. Sin compromiso.',
    primary: 'Escribir email',
    secondary: 'Reservar 30 min',
  },
  footer: {
    rights: '© 2026 xarop · Barcelona',
  },
};
