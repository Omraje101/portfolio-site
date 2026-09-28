# Om Waghmare, portfolio

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Motion.
Every page is statically rendered.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts: `npm run build`, `npm start` (serve the production build), `npm run lint`, `npm run typecheck`.

## Editing content

All text, links and project data live in [`src/data/content.ts`](src/data/content.ts).

- **Site URL:** update `site.url` once you have a domain. It feeds the canonical URL, Open Graph tags, sitemap and robots.
- **Résumé:** replace `public/Om_Waghmare_Resume.pdf` (keep the filename, or update `site.resume`).
- **Screenshots:** put images in `public/screenshots/` and set `src` on the matching entry, e.g.
  `src: "/screenshots/campus-compass-search.png"`. Until `src` is set, a labelled placeholder shows the size and what to capture.

## Structure

```
src/app/            layout, page, OG image, icon, sitemap, robots, global tokens (globals.css)
src/components/     nav, sections, work (stack diagram, case study toggle), contact, ui, theme
src/data/content.ts all content
public/             photo, résumé, screenshots
```

## Deploy (Vercel)

1. Push this repo to GitHub.
2. In Vercel, choose **Add New → Project** and import the repo. The framework is detected as Next.js; keep the defaults.
3. Deploy, then copy the production URL (or add a custom domain) into `site.url` in `content.ts` and push again.
