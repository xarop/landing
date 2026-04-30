# DESIGN.md

## Xarop Landing - Design

### General Structure
- Project based on Astro.
- Clear folder structure: `src/components`, `src/pages`, `src/styles`, etc.
- Use of layouts for visual consistency.

### Design Principles
- Minimalism and visual clarity.
- Color palette consistent with Xarop branding.
- Readable typography and clear hierarchy.
- Responsive: adaptive design for mobile, tablet, and desktop.

### Main Components
- **Hero**: Main message and call to action.
- **Cta**: Highlighted button for conversion.
- **Faq**: Frequently asked questions.
- **Footer**: Contact info and links.
- **Topbar**: Main navigation.

### Accessibility
- Sufficient contrast in text and buttons.
- Keyboard navigation and ARIA labels where needed.

### Internationalization
- Language files in `src/i18n/`.
- Support for ca, es, en.

### Colors & Flavors
- Neutral base palette defined in `tokens.css` (backgrounds, text, lines).
- Flavor system in `flavors.css` for brand accents:
  - maduixa: #FF0000 (red)
  - nabiu: #3B4CCA (blue)
  - gerd: #CF255E (pink)
  - menta: #00A878 (green)
  - llimona: #D4A300 (yellow)
  - taronja: #FF6B35 (orange)
  - regalessia: #1A1A1A (black, inverts in dark mode)
- Each flavor defines: `--color-accent`, `--color-accent-deep`, `--color-accent-soft`.
- Change flavor with `<html data-flavor="X">`.

### Typography
- **Primary:** Asap (self-hosted, weights 400, 500, 700)
  - Downloaded from Google Fonts and served from `/fonts/`.
  - Declared in `global.css` via `@font-face`.
- **Secondary:**
  - Sans-serif: system-ui, Segoe UI, Inter
  - Serif: Georgia, Newsreader
  - Monospace: JetBrains Mono, SF Mono, Menlo
- Hierarchy:
  - Headings: var(--font-headings) → Asap
  - Body text: var(--font-sans)

### Styles
- CSS variables in `src/styles/tokens.css`.
- Global styles in `src/styles/global.css`.
- Simple theming for future branding changes.

---

Update this document with every relevant change in the design or visual structure of the project.
