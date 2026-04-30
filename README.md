# xarop · landing

One-page site for **xarop.com** — built with [Astro 5](https://astro.build), zero JS framework, ~10 KB JS for behaviour only. Multi-flavour design system, CA / ES / EN, dark mode, GA4.

**Live:** [xarop.com](https://xarop.com)

## Stack

- **Astro 5** — static output, zero JS by default
- **TypeScript** — i18n type system, data types, behaviour script
- **Vanilla CSS** with design tokens + flavour palettes
- **Asap** (self-hosted, OFL) for headings — drop the `.woff2` files in `public/fonts/`
- **IntersectionObserver** for scroll reveals (zero dependency)
- **@astrojs/sitemap** — auto-generates `sitemap-index.xml` on build
- **GA4** wired through `PUBLIC_GA_ID` env var
- **Bun** — package manager and CI runner
- **GitHub Actions + FTP** — auto-deploy to xarop.com on push to `main`

## Features

- 7 flavour palettes via `<html data-flavor="X">` (maduixa, nabiu, gerd, menta, llimona, taronja, regalessia) — persists in `localStorage`
- Dark / light theme toggle (auto + manual override) — persists in `localStorage`
- Hamburger drawer + popover lang/flavor switchers on mobile (hover/tap)
- i18n routing CA (default) · ES (`/es/`) · EN (`/en/`)
- Custom 404 page (`/404.html`) served via Apache `ErrorDocument`
- 6 portfolio cards with inline SVG visuals (no external images)
- Inline contact form (name, email, subject dropdown, optional message) → `contact.php` AJAX
- Auto-generated sitemap (`/sitemap-index.xml`)
- Subtle scroll reveals, prefers-reduced-motion respected
- Sticky topbar, 2-state hamburger animation, accessible focus rings

## Run it

```bash
bun install
cp .env.example .env       # adjust PUBLIC_GA_ID if needed
bun dev                    # http://localhost:4321
bun run build              # → dist/
bun run preview            # preview the static build
```

## Add the Asap font (one-time)

See `src/assets/fonts/README.md`. Drop `asap-regular.woff2`, `asap-medium.woff2`, and `asap-bold.woff2` into `public/fonts/`. Until you do, headings fall back to system UI fonts gracefully (no flash, no layout shift).

## Configure Google Analytics

The Measurement ID is `G-8XCG02PLVB`. Override per environment via:

```bash
PUBLIC_GA_ID=G-XXXXXXXXXX
```

If `PUBLIC_GA_ID` is unset, the GA tag is omitted entirely (handy for dev).

## Project layout

```
landing/
├── astro.config.mjs        # i18n routes, site URL
├── public/
│   ├── .htaccess             # ErrorDocument 404 /404.html
│   ├── favicon.svg
│   ├── robots.txt
│   └── fonts/              # drop Asap .woff2 here
├── src/
│   ├── pages/
│   │   ├── index.astro       # /        (CA, default)
│   │   ├── 404.astro         # /404.html
│   │   ├── es/index.astro    # /es/
│   │   └── en/index.astro    # /en/
│   ├── layouts/Base.astro
│   ├── components/
│   │   ├── Topbar.astro      # logo + nav + lang/flavor popovers + hamburger
│   │   ├── Hero.astro
│   │   ├── Stats.astro
│   │   ├── Services.astro
│   │   ├── Process.astro
│   │   ├── Work.astro        # consumes data/projects.ts
│   │   ├── ProjectViz.astro  # 6 abstract SVG visuals
│   │   ├── Faq.astro
│   │   ├── Cta.astro         # contact section with inline form
│   │   ├── Footer.astro
│   │   ├── Logo.astro
│   │   └── Analytics.astro   # GA4, conditional on PUBLIC_GA_ID
│   ├── data/projects.ts
│   ├── i18n/{ca,es,en,types,index}.ts
│   ├── scripts/behaviour.ts  # popovers, hamburger, reveals, theme, flavor, form AJAX
│   └── styles/{tokens,flavors,global}.css
└── package.json
```

## Deploy

Push to `main` → GitHub Actions builds with Bun and uploads `dist/` to `xarop.com` via FTP automatically.

Secrets required in the repo settings:

| Secret | Value |
|---|---|
| `FTP_USERNAME` | FTP user for xarop.com |
| `FTP_PASSWORD` | FTP password |

## License

Site code: MIT.

Asap typeface: SIL Open Font License 1.1.
