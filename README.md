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
add projects, and set `demoUrl` and `githubUrl` links. Missing
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
