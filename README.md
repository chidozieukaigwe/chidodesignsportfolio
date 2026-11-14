# Chido Designs AI portfolio

An AI-focused portfolio foundation built with Next.js 14, the App Router,
TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The hero, project cards,
About, Experience & Education, and contact pages are in place. Edit
`app/about/page.tsx` to update the About story, `data/experience.ts` to update
the shared timeline, `app/page.tsx` to update the skills groups, and
`app/contact/page.tsx` to update contact details.

Edit `data/projects.ts` to update the featured Revenue Intelligence project,
its grouped technology stack, add projects, and set `demoUrl` and `githubUrl`
links. Missing
links are shown as coming soon. The featured project's GitHub URL is omitted
until a real repository URL is available. Its case study is in
`app/projects/revenue-intelligence/page.tsx`; the code snippet is illustrative
pseudocode and the website screenshot is in
`public/images/revenue-intelligence-agency-website.webp`. Replace
`public/chido-ukaigwe-cv.pdf` to update the publicly downloadable CV.

Theme tokens live in `tailwind.config.ts` and `app/globals.css`. Geist fonts
are bundled locally through `next/font` in `app/layout.tsx`.

Run `npm run lint` and `npm run build` to validate changes. Next.js 14 is
outside its supported lifecycle, and the dependency audit reports
vulnerabilities. Review `npm audit` and upgrade to a supported Next.js version
before deploying to production.

## GitHub Actions and Render

The workflow in `.github/workflows/ci-cd.yml` runs lint, deployment-script
tests, and a production build on pull requests and pushes to `main`. After
those checks pass, a push to `main` deploys that exact commit to Render and
waits for it to become live. A manual workflow run also deploys when run from
`main`. Pull requests and manual runs from other branches never deploy.

Before enabling the deployment:

1. Commit and push `render.yaml` so Render can read it. The initial GitHub
   deployment job will fail until the secret and service ID below are set.
2. In Render, create a Blueprint from this repository and `main`. The Blueprint
   defines a free Node.js web service named `chidodesignsportfolio`, with build
   command `npm ci && npm run build`, start command `npm start`, and service
   Auto-Deploy disabled. Review the name and plan before syncing: Render may
   apply the configuration to an existing service of the same name. The
   repository's `.node-version` selects Node.js 22 unless Render's
   `NODE_VERSION` environment variable overrides it.
3. Set the Blueprint's **Auto Sync** to **No** in Render. Service Auto-Deploy
   and Blueprint Auto Sync are separate settings; otherwise changes to
   `render.yaml` can trigger deploys outside CI. Initial provisioning, manual
   Blueprint syncs, and manual Render deploys remain outside this workflow.
4. In GitHub repository **Settings → Secrets and variables → Actions**, add
   `RENDER_API_KEY` as a repository secret and `RENDER_SERVICE_ID` as a
   repository variable. Use the service ID (`srv-...`) from the Render
   dashboard. Set the secret manually; the local `.env` file is not sent to
   GitHub Actions or needed by the running site.
5. Re-run the workflow from `main`, or push a new commit, and inspect the
   Actions run and Render deploy logs. If a deploy times out or Render queues
   it without a trackable ID, check the Render dashboard before retrying. Add
   and verify your custom domain in Render when ready.

The local `.env` and other environment files are ignored by Git. Never commit
the Render API key or put it in a public `NEXT_PUBLIC_` variable. Render
deployment is not enabled until the service and GitHub settings above exist.
