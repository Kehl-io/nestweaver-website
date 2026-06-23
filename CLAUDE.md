# NestWeaver Website — Agent Instructions

## Commands

| Task             | Command              |
| ---------------- | -------------------- |
| Dev server       | `npm run dev`        |
| Production build | `npm run build`      |
| Lint             | `npm run lint`       |
| Lint + fix       | `npm run lint:fix`   |
| Format           | `npm run format`     |
| Type check       | `npm run type-check` |

## Before Every Commit

```sh
npm run lint && npm run type-check && npm run build
```

All three must pass before committing.

## Architecture

Single-page static marketing site. Astro 5 with static output (no SSR). Tailwind v4 via Vite plugin.

### File Structure

- `src/styles/tokens.css` — NestWeaver brand OKLCH color tokens
- `src/styles/global.css` — Tailwind theme mapping, base styles, font imports
- `src/layouts/BaseLayout.astro` — HTML shell with SEO meta, OG tags, JSON-LD, font preloads
- `src/components/*.astro` — Page sections: Header, Hero, Problem, HowItWorks, TokenEfficiency, Features, GetStarted, Footer
- `src/pages/index.astro` — Assembles all sections with JSON-LD SoftwareApplication schema
- `src/pages/og/default.png.ts` — Satori + resvg OG image generation
- `src/pages/sitemap.xml.ts` — Static XML sitemap
- `src/assets/` — NestWeaver logo SVGs
- `public/images/` — Static images (screenshots, logos)

## Conventions

- **Dark-mode only.** No light theme toggle.
- **NestWeaver brand palette:** cobalt, halo, deep, dusk, spark — defined as OKLCH tokens.
- **Typography:** Michroma for headings, Inter for body, JetBrains Mono for code.
- **No kehl.io circuit motifs** — use graph/node visuals instead.
