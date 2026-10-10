# Fishing · Yu Hao Huang portfolio

Personal portfolio built with Next.js (App Router, TypeScript) and Tailwind CSS v4. The visual style (color tokens, typography, cards, buttons, animations, dark/light mode) follows [yuhao-codes-world](https://github.com/sam821203/yuhao-codes-world).

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
app/          layout, home page, 404, global styles and design tokens (globals.css)
components/   header, hero orbit, project grid, cards, small client helpers
lib/          content.ts holds all project entries and site info
public/       images, headshot and the original static demos
```

To add or edit a project, change `lib/content.ts`.

## Static demos

These live under `public/` unchanged and are linked from the project list:

- `/chart-challenge.html` (and the charts in `/chartjs/`)
- `/following-touch-firecracker/index.html`
- `/falling-random/index.html`

`public/style.css` and `public/lazyload.jpg` are kept because `chart-challenge.html` still uses them.
