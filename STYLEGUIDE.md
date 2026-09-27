# Style guide

This is the source of truth for how the site looks. Every change must follow it.
`npm run check:style` checks the mechanical rules and runs automatically before every `npm run build`,
so a violation fails the build and blocks deploys.

## Principles

- **Quiet and typographic.** Serif for headings and paper titles, sans for everything else. Color is used sparingly: one accent.
- **Content first.** Data lives in `src/content.ts`; components only render it. Never hard-code content in components.
- **Both themes, always.** Every color comes from a token so light and dark mode stay in sync.
- **Phone-ready.** The layout works at 360px wide with a 16px gutter and no horizontal page scroll.
- **Clicked things stay put.** Any button, toggle, or disclosure must stay at the same position on screen
  when clicked, every time. Put it **above** the content it reveals or hides (never below), and if a layout
  change could still shift it, pin it the way `Publications.tsx` pins `.pubs-toggle` (measure its top before
  the state change, `scrollBy` the difference after, `overflow-anchor: none`). Verify this before shipping
  any new interactive element.

## Tokens

All tokens are CSS custom properties defined at the top of `src/styles.css`. The token block is the **only**
place raw color values, font stacks, or radius sizes may appear.

### Color

| Token            | Light     | Dark      | Use                                              |
| ---------------- | --------- | --------- | ------------------------------------------------ |
| `--bg`           | `#faf8f5` | `#131416` | Page background; inset panels (e.g. BibTeX box)  |
| `--surface`      | `#ffffff` | `#1b1c1f` | Cards, chips, icon buttons                       |
| `--text`         | `#1d1c1a` | `#ecebe8` | Body text, titles, the user's own name           |
| `--text-muted`   | `#6b6760` | `#9b9891` | Secondary text: authors, summaries, years, labels |
| `--border`       | `#e7e2da` | `#2b2c30` | All 1px borders and dividers                     |
| `--accent`       | `#2c5d8f` | `#8cb8e8` | Links, hover state, focus ring, conference badge |
| `--accent-soft`  | `#e6eef7` | `#1e2a38` | Badge / callout / nav-hover fill                 |
| `--shadow`       | —         | —         | Card hover elevation only                        |

Tints are derived, never invented: `color-mix(in srgb, var(--accent) 40%, var(--border))` for a hovered
border, `color-mix(in srgb, var(--text-muted) 14%, transparent)` for a neutral fill.

Dark values are declared twice (the `prefers-color-scheme` block and `:root[data-theme='dark']`).
When you change one, change both.

### Type

| Token          | Stack                         | Use                                         |
| -------------- | ----------------------------- | ------------------------------------------- |
| `--font-serif` | Newsreader                    | Name, section titles, paper titles, brand   |
| `--font-sans`  | Inter                         | Everything else                             |
| `--font-mono`  | ui-monospace / SF Mono / Menlo | Code and BibTeX only                       |

Scale (rem): section title `1.75` · paper title `1.18` · hero role `1.08` · body `1` (16px) ·
secondary `0.92–0.95` · authors `0.88` · small labels / badges `0.78`.
Weights: `400`, `500` (titles, buttons), `600` (emphasis, badges, uppercase labels).

### Shape and spacing

| Token           | Value   | Use                                      |
| --------------- | ------- | ---------------------------------------- |
| `--radius-sm`   | `8px`   | Small buttons (`.pub__link`), nav links, focus ring |
| `--radius-md`   | `10px`  | Standard buttons, icon buttons, inset panels |
| `--radius`      | `14px`  | Cards, callouts, full-width toggles      |
| `--radius-pill` | `999px` | Badges and chips                         |
| `--max`         | `760px` | Content column width                     |

Spacing uses a 2px grid (common: 6, 8, 12, 14, 20, 28, 40px). Card padding is `20px 22px` (`18px` on phones).

### Motion

Transitions are `0.15s ease` for color/border changes and `0.2s ease` for elevation. Hover lift is
`translateY(-1px)` for buttons and `translateY(-2px)` for cards. Nothing moves on its own.

## Components

| Class              | What it is                                    | Key parameters |
| ------------------ | --------------------------------------------- | -------------- |
| `.button`          | Primary filled button (CV)                    | 38px tall, `--text` fill, `--bg` text, `--radius-md` |
| `.icon-button`     | Square icon button (socials, theme toggle)    | 38×38, `--surface`, 1px `--border`, `--radius-md` |
| `.pub`             | Publication card                              | Grid `72px 1fr`, gap 16px (72px fits the widest badge, "Preprint"/"NeurIPS"; widen only if a longer venue is added); single column below 640px |
| `.badge`           | Conference name on a card                     | Pill, padding `3px 8px`, `--accent-soft` fill, `--accent` text, 0.78rem/600 |
| `.badge--muted`    | "Preprint" badge                              | Neutral tint fill, `--text-muted` text |
| `.pub__link`       | Secondary outline button (Paper, arXiv, Website, Cite, OpenReview) | 30px tall, 1px `--border`, `--radius-sm`, icon + label |
| `.pubs-toggle`     | Full-width "show more / fewer" row            | 48px tall, 1px **dashed** `--border`, `--radius`; solid + `--surface` on hover |
| `.pub__tldr`       | Collapsible TL;DR inside every card           | `--bg` fill (inset against the `--surface` card), `--radius-md`; text `--text-muted` 0.95rem; header row is a full-width `<button>`: chevron + "TL;DR" in 0.78rem/600, `0.08em` tracking, `--text-muted` (→ `--accent` on hover); chevron points right when closed, down when open; text appears **below** the header |
| `.chip`            | Interest tag                                  | Pill, `--surface`, 1px `--border`; on hover lights up to `--accent-soft` fill with a 40% accent-tinted border (no movement) |
| `.fav`             | Linked paper card on `/quantum/` (whole card is the link) | Same card as `.pub` (surface, `--radius`, `20px 22px`, hover lift + accent-tinted border); uppercase 0.78rem venue · year, serif 1.18rem title + `FiArrowUpRight` (→ `--accent` on hover), note in a `--bg` inset like the TL;DR |
| `.subheading`      | Small uppercase group label                   | 0.78rem/600, `0.08em` tracking, `--text-muted` |
| `.callout`         | Highlighted note                              | 3px `--accent` left rule, `--accent-soft` fill |

### Publications

- Badge text is the conference short name only (`NeurIPS`, never a track like "E&D") or `Preprint`. The year sits under it,
  both centered in the 72px venue column.
- The title is plain text, not a link; the link row is the only way to open a paper.
- Equal-contribution authors get a superscript `*` after their name (set `equalContribution` to how many leading authors share it); the section's closing note explains the `*`.
- The link row is always in this order: `Paper` (always the neurips.cc virtual page, e.g. `neurips.cc/virtual/2025/loc/san-diego/poster/118592`; omitted for preprints) · `arXiv` · `Website` (project page, if any) · `Cite` · `OpenReview` (only when accepted but the neurips.cc page isn't live yet; never alongside `Paper`).
  Icons: `FiFileText`, `SiArxiv`, `FiGlobe`, `LuQuote`, `FiMessageSquare`.
- Every paper's TL;DR is collapsed inside a `.pub__tldr` block (not a link-row button). **Selected** papers
  (`selected: true`) are always listed; all other papers sit directly **below** the `.pubs-toggle`, hidden until it is clicked.
- Expanding or collapsing must never move the reader's screen: toggles sit **above** the content they
  reveal, and `Publications.tsx` pins the `.pubs-toggle` to its on-screen position (`overflow-anchor: none`
  keeps the browser from fighting it). Any new expander follows the same rule.
- The user's name (`selfName`) is bold in author lists. Every entry has a `bibtex`.

## Code rules (enforced by `npm run check:style`)

1. No color literals (`#hex`, `rgb()`, `hsl()`) in `src/styles.css` outside the token block, and none in `.tsx` files.
2. `font-family` must be `var(--font-*)` or `inherit`.
3. `border-radius` must use `var(--radius*)`, `0`, or `50%`.
4. No inline `style={{…}}` in components; add a class in `src/styles.css`.

Also follow, though not machine-checked:

- Icons come from `react-icons` (`fi` for UI, `si`/`fa` for brands, `lu` only where `fi` lacks one), always with `aria-hidden` next to a text label.
- Interactive toggles are `<button type="button">` with `aria-expanded`.
- Class names follow BEM-ish `block__element--modifier`.
- New visual patterns get a row in the Components table above in the same change.
