# DESIGN.md

## Xarop Landing - Diseño

### Estructura general
- Proyecto basado en Astro.
- Estructura de carpetas clara: `src/components`, `src/pages`, `src/styles`, etc.
- Uso de layouts para consistencia visual.

### Principios de diseño
- Minimalismo y claridad visual.
- Paleta de colores coherente con la marca Xarop.
- Tipografía legible y jerarquía clara.
- Responsive: diseño adaptativo para móvil, tablet y escritorio.

### Componentes principales
- **Hero**: Mensaje principal y llamada a la acción.
- **Cta**: Botón destacado para conversión.
- **Faq**: Preguntas frecuentes.
- **Footer**: Información de contacto y enlaces.
- **Topbar**: Navegación principal.

### Accesibilidad
- Contraste suficiente en textos y botones.
- Navegación por teclado y etiquetas ARIA donde sea necesario.

### Internacionalización
- Archivos de idioma en `src/i18n/`.
- Soporte para ca, es, en.


### Colores y Sabores
- Paleta base neutra definida en `tokens.css` (fondos, textos, líneas).
- Sistema de sabores (flavors) en `flavors.css` para acentos de marca:
	- maduixa: #FF0000 (rojo)
	- nabiu: #3B4CCA (azul)
	- gerd: #CF255E (rosa)
	- menta: #00A878 (verde)
	- llimona: #D4A300 (amarillo)
	- taronja: #FF6B35 (naranja)
	- regalessia: #1A1A1A (negro, invierte en dark mode)
- Cada sabor define: `--color-accent`, `--color-accent-deep`, `--color-accent-soft`.
- Cambia el sabor con `<html data-flavor="X">`.

### Tipografías
- **Principal:** Asap (self-hosted, pesos 400, 500, 700)
	- Descargada de Google Fonts y servida desde `/fonts/`.
	- Declarada en `global.css` vía `@font-face`.
- **Secundarias:**
	- Sans-serif: system-ui, Segoe UI, Inter
	- Serif: Georgia, Newsreader
	- Monospace: JetBrains Mono, SF Mono, Menlo
- Jerarquía:
	- Títulos: var(--font-headings) → Asap
	- Texto base: var(--font-sans)

### Estilos
- Variables CSS en `src/styles/tokens.css`.
- Estilos globales en `src/styles/global.css`.
- Tematización sencilla para futuros cambios de branding.

---

Este documento debe actualizarse con cada cambio relevante en el diseño o estructura visual del proyecto.