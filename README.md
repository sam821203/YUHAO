# Fishing · Yu Hao Huang portfolio

Personal portfolio built with Next.js (App Router, TypeScript) and Tailwind CSS v4. The layout started from [yuhao-codes-world](https://github.com/sam821203/yuhao-codes-world); the starfield layout follows [soumyajit.vercel.app](https://soumyajit.vercel.app/) and the palette uses Ant Design Lime on a dark slate background. The site is dark only.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build, every route is prerendered as static
npm run start    # serve the production build
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected defaults (Framework: Next.js, Build: `next build`). No environment variables or `vercel.json` are needed.

Every push to the default branch then deploys to production, and every pull request gets a preview URL.

## Structure

```
app/          layout, pages (/, /about, /experience, /projects, /projects/[slug], /contact), 404, design tokens (globals.css)
components/   header, starfield, hero orbit, page sections, project grid, cards, small client helpers
lib/          content.ts holds all project entries and site info
public/       images, headshot and the original static demos
```

To add or edit a project, change `lib/content.ts`.

## Static demos

These live under `public/` unchanged and are linked from the project list:

- `/chart-challenge.html` (and the charts in `/chartjs/`)

`public/style.css` and `public/lazyload.jpg` are kept because `chart-challenge.html` still uses them.
