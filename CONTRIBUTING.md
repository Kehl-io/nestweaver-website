# Contributing

Thanks for your interest in contributing to the NestWeaver website.

## Getting Started

1. Fork the repo and clone your fork.
2. Create a feature branch from `main`.
3. Install dependencies: `npm install`
4. Start the dev server: `npm run dev`

## Before Submitting a PR

Run the full check suite:

```sh
npm run lint && npm run type-check && npm run build
```

All three must pass.

## Pull Request Guidelines

- PR titles must follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced by CI).
- CI runs lint, type-check, and build on all PRs.
- Keep changes focused — one feature or fix per PR.

## Releases

Releases are automated via [release-please](https://github.com/googleapis/release-please). No manual versioning needed.
