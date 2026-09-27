# Personal website

- Content (profile, publications, BibTeX) lives in `src/content.ts`; components only render it.
- **Follow `STYLEGUIDE.md` for every visual change.** Use the existing tokens and component classes; if you add a new pattern, add it to the guide's Components table in the same change.
- Buttons and toggles must never move on screen when clicked (see "Clicked things stay put" in the style guide).
- Run `npm run build` before finishing. It runs `npm run check:style` first, which fails on style-guide violations.
