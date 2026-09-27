# Thomson (Tzu-Ching) Yen: personal website

A single-page React site built with [Vite](https://vite.dev) and TypeScript.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173 with hot reload
```

`npm run build` writes the static site to `dist/`. Run `npm run preview` to serve that build.

## Editing content

Almost everything (profile, links, interests, publications) lives in `src/content.ts`.
The About and Contact text are in `src/components/About.tsx` and `src/components/Contact.tsx`.
Static files (CV, avatar, favicon) are in `public/`.

## Style

`STYLEGUIDE.md` defines the colors, type, spacing, and components. `npm run check:style` enforces its
mechanical rules and runs automatically as part of `npm run build`.

## Deploying

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages on every push to `main`.
To enable it, set **Settings → Pages → Source** to **GitHub Actions**.
