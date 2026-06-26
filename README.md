# Synapse — Where workflows interact

> AI automation platform. Production-grade SaaS landing page built for a hackathon.

## Tech

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + CSS Modules + CSS variables
- **Fonts**: JetBrains Mono (display) + Inter (body) via `next/font/google`
- **3D**: Three.js, lazy-loaded with `next/dynamic({ ssr: false })`
- **Animations**: Native CSS transitions + Web Animations API (WAAPI)
- **Palette**: MP025 — Arctic Powder, Forsythia, Nocturnal, Mystic Mint, Deep Saffron, Oceanic Noir

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Production build                     |
| `npm run start`   | Run the production build             |
| `npm run lint`    | ESLint via `next lint`               |
| `npm run typecheck` | TypeScript check (no emit)         |

## Architecture

```
app/
  layout.tsx          ← next/font (JetBrains Mono + Inter), full metadata + OG
  page.tsx            ← Semantic <main> shell: <header> + 4 <section> + <footer>
  globals.css         ← MP025 palette, keyframes, timing tokens, utility classes

components/
  shared/             ← NavBar, Footer, Icons (inline primitives + pkg SVGs)
  hero/               ← Hero + HeroCanvas (Three.js particle network, lazy)
  features/           ← BentoGrid + Accordion + useBentoAccordionBridge hook
  pricing/            ← CurrencySwitcher + BillingToggle + PricingMatrix
  social-proof/       ← Testimonials

lib/
  pricingMatrix.ts    ← Multi-dimensional config: tiers × currencies × cycles
  constants.ts        ← Breakpoints, features, testimonials, trusted logos

public/
  svgs/               ← Locked SVG asset package (Heroicons-style, currentColor)
  og-image.png        ← 1200×630 social card
  manifest.json       ← PWA manifest
```

## Key design decisions

### Pricing engine — isolated state

The currency and billing state lives **only** inside `PricingMatrix.tsx`. Toggles mutate
`useRef<HTMLSpanElement>` text nodes directly — `PricingSection` and the rest of the page
**do not re-render** when a user switches currency or cycle. Verify in DevTools:
React DevTools → highlight `<PricingMatrix />` on toggle → no other component flashes.

### Bento → Accordion context lock

A single `useBentoAccordionBridge` hook owns `activeIndex`. `ResizeObserver` watches
`document.documentElement`; when the viewport crosses 768px, the active index is **preserved**
across the swap, so a hovered bento card becomes the open accordion panel.

### MP025 palette enforcement

Only six colors are used across the entire codebase. Semantic tokens (`--bg-primary`,
`--accent-primary`, etc.) are derived from the palette. Light sections use
`section-light` (Arctic Powder bg, Oceanic Noir text); dark sections use `section-dark` /
`section-secondary` (Oceanic Noir / Nocturnal bg, Arctic Powder text).

### Performance budget — 500ms TTI

- Hero entry animation: pure CSS keyframe (0ms JS block)
- Three.js canvas: `next/dynamic({ ssr: false })` → not in initial bundle
- Below-fold sections: `.reveal` class with `IntersectionObserver` (lazyOnload script in `layout.tsx`)
- Micro-interactions: 150ms `cubic-bezier(0,0,0.2,1)`
- Layout transitions: 300ms `cubic-bezier(0.4,0,0.2,1)`
- `prefers-reduced-motion` respected globally

## Accessibility

- Single `<h1>` in hero, logical `<h2>`/`<h3>` hierarchy throughout
- All decorative SVGs marked `aria-hidden`; meaningful SVGs have `role="img"` + `aria-label`
- All `<img>` use descriptive `alt` text
- Keyboard navigable: every interactive element has `:focus-visible` outline (Forsythia 2px)
- Accordion uses `role="region"` + `aria-controls` + `aria-expanded`
- Toggle uses `role="switch"` + `aria-checked`
- Currency switcher uses `role="radiogroup"` + `role="radio"` + `aria-checked`

## Deploy

```bash
npx vercel
```

Or push to a Git remote and import on https://vercel.com/new.
