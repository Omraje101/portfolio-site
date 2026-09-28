# Om Waghmare, portfolio

Personal portfolio of Om Waghmare, a full stack developer (MERN and Next.js) in Pune, India.

**Live:** https://portfolio-site-om-2885.vercel.app

## Stack

- **Next.js 16** (App Router, React 19) with TypeScript. Every route is statically prerendered.
- **Tailwind CSS v4**, with design tokens as CSS variables in `src/app/globals.css`.
- **Motion** for animation, loaded through `LazyMotion`.
- **next-themes** for light and dark mode (follows the system setting, with a toggle).
- **Phosphor Icons**, and the **Schibsted Grotesk** and **IBM Plex Mono** fonts via `next/font`.
- Deployed on **Vercel**.

## Sections

1. **Hero:** headline, résumé download, and an exploded diagram of the stack (interface, state, API, data).
2. **About:** photo, short bio, education and availability.
3. **Selected work:** case studies for CampusCompass, README AI and AI Orbit Tools. Each has its own stack diagram and details that expand in place.
4. **More projects:** DineSync Elite, Momentum, Async Search Control Center and PlanNGo.
5. **Experience:** Data Science Intern at Cognifyz Technologies.
6. **Skills:** languages, frontend, backend and data, APIs and testing, and tools.
7. **Achievements:** competition wins, practice milestones and certifications.
8. **Contact:** email with a copy button, plus a form that opens your mail app (no backend).

The site also includes a sitemap, `robots.txt`, a generated Open Graph image and favicon, and JSON-LD for search engines. Animations respect `prefers-reduced-motion`.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler without emitting |

## Editing content

All text, links and project data live in [`src/data/content.ts`](src/data/content.ts).

- **Site URL:** `site.url` feeds the canonical URL, Open Graph tags, sitemap and robots. Update it if you connect a custom domain.
- **Résumé:** replace `public/Om_Waghmare_Resume.pdf` (keep the filename, or update `site.resume`).
- **Screenshots:** put images in `public/screenshots/` and set `src` on the matching entry, for example
  `src: "/screenshots/campus-compass-search.png"`. Until `src` is set, a labelled placeholder shows the size and what to capture.

## Project structure

```
src/app/            layout, page, OG image, icon, sitemap, robots, design tokens (globals.css)
src/components/     nav, sections, work (stack diagram, case study toggle), motion, contact, ui, theme
src/data/content.ts all site content
public/             photo, résumé, screenshots
```

## Deployment

The repo is connected to Vercel, so every push to `main` deploys to production automatically.
