# NestWeaver Website

Marketing site for NestWeaver — [nestweaver.kehl.io](https://nestweaver.kehl.io)

## Tech Stack

- **Astro 5** — static site generation
- **Tailwind v4** — styling via Vite plugin
- **TypeScript** — type-safe components
- **Satori + resvg** — OG image generation
- **Cloudflare Pages** — hosting and deployment

## Prerequisites

- Node 24+

## Local Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Output goes to `dist/`.

## Check Suite

```sh
npm run lint && npm run type-check && npm run build
```

## Deployment

Automated via GitHub Actions:

- Push to `main` triggers [release-please](https://github.com/googleapis/release-please) to create/update a release PR.
- Merging a version tag triggers a Cloudflare Pages deploy.

## Links

- **Live site:** https://nestweaver.kehl.io
- **NestWeaver repo:** https://github.com/Kehl-io/nestweaver
- **Docs site:** https://docs.nestweaver.kehl.io

## License

[MIT](LICENSE)
