# xarop · landing

One-page site for **xarop.com** — built with [Astro 5](https://astro.build), zero JS framework, ~10 KB JS for behaviour only. Multi-flavour design system, CA / ES / EN, dark mode, GA4.

**Live:** [xarop.com](https://xarop.com)

## Stack

- **Astro 5** — static output, zero JS by default
- **TypeScript** — i18n type system, data types, behaviour script
- **Vanilla CSS** with design tokens + flavour palettes
- **Asap** (self-hosted, OFL) for headings — drop the `.woff2` files in `public/fonts/`
- **IntersectionObserver** for scroll reveals (zero dependency)
- **GA4** wired through `PUBLIC_GA_ID` env var
- **Bun** — package manager and CI runner
- **GitHub Actions + FTP** — auto-deploy to xarop.com on push to `main`

## Features

- 7 flavour palettes via `<html data-flavor="X">` (maduixa, nabiu, gerd, menta, llimona, taronja, regalessia) — persists in `localStorage`
- Dark / light theme toggle (auto + manual override) — persists in `localStorage`
- Hamburger drawer + popover lang/flavor switchers on mobile (hover/tap)
- i18n routing CA (default) · ES (`/es/`) · EN (`/en/`)
- 6 portfolio cards linking to `web.xarop.com/portfolio/...`
- Subtle scroll reveals, prefers-reduced-motion respected
- Sticky topbar, 2-state hamburger animation, accessible focus rings
- Inline SVG visuals (no external images) — pesa quasi res

## Run it

```bash
npm install
cp .env.example .env       # adjust PUBLIC_GA_ID if needed
npm run dev                # http://localhost:4321
npm run build              # → dist/
npm run preview            # preview the static build
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
│   ├── favicon.svg
│   ├── robots.txt
│   └── fonts/              # drop Asap .woff2 here
├── src/
│   ├── pages/
│   │   ├── index.astro       # /        (CA, default)
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
│   │   ├── Cta.astro
│   │   ├── Footer.astro
│   │   ├── Logo.astro
│   │   └── Analytics.astro   # GA4, conditional on PUBLIC_GA_ID
│   ├── data/projects.ts
│   ├── i18n/{ca,es,en,types,index}.ts
│   ├── scripts/behaviour.ts  # popovers, hamburger, reveals, theme, flavor
│   └── styles/{tokens,flavors,global}.css
└── package.json
```

## Push to github.com/xarop/landing

From inside this folder:

```bash
git init
git add .
git commit -m "feat: initial landing"
git branch -M main
git remote add origin https://github.com/xarop/landing.git
git push -u origin main
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
