# Asap font (self-hosted)

The site references `Asap` at weights **400, 500, 700** via `@font-face` in `src/styles/global.css` from `/fonts/*.woff2`.

To self-host (recommended — zero external request, fastest TTI):

1. Download Asap from Google Fonts: https://fonts.google.com/specimen/Asap
   (or from the OFL repo: https://github.com/Omnibus-Type/Asap)
2. Convert/extract the **woff2** files for the three weights you need.
3. Place them at `public/fonts/`:
   - `public/fonts/asap-regular.woff2`  (400)
   - `public/fonts/asap-medium.woff2`   (500)
   - `public/fonts/asap-bold.woff2`     (700)

That's it — `font-display: swap` will use the system fallback while Asap loads.

If you want to skip self-hosting for the moment, replace the `@font-face` block in
`src/styles/global.css` with this Google Fonts include in `Base.astro`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;700&display=swap" rel="stylesheet" />
```
