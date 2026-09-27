# Thomson (Tzu-Ching) Yen: personal website

A single-page React site built with [Vite](https://vite.dev) and TypeScript.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173 with hot reload
```

`npm run build` writes the static site to `dist/`. Run `npm run preview` to serve that build.

## Editing content

Almost everything (profile, links, interests) lives in `src/content.ts`. Each paper has its own file in
`src/publications/` (title, authors, links, TL;DR `summary`, BibTeX); to add one, create a file there and
list it in `publications` in `src/content.ts`, which sets the order (newest first).
The About and Contact text are in `src/components/About.tsx` and `src/components/Contact.tsx`.
Static files (CV, avatar, favicon) are in `public/`.

The CV has two versions that share their content in `cv/shared_data/` (publications in `publications.bib`,
everything else in `body.tex`); each version only has its own header in `cv.tex`:

- `cv/cv-website`: the public CV. Run `npm run cv` (needs a local TeX install) to rebuild `public/files/YenCV.pdf`.
- `cv/cv-professional`: adds private details such as the phone number, read from the untracked
  `cv/cv-professional/private.tex`. Build it with `make professional` in `cv/`; it is never published.

## Style

`STYLEGUIDE.md` defines the colors, type, spacing, and components. `npm run check:style` enforces its
mechanical rules and runs automatically as part of `npm run build`.

## Deploying

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages on every push to `main`.
To enable it, set **Settings → Pages → Source** to **GitHub Actions**.
