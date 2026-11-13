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
About page, and contact page are in place; dedicated skills and experience
sections have not yet been built. Edit `app/about/page.tsx` to update the About
story and `app/contact/page.tsx` to update contact details.

Edit `data/projects.ts` to replace the example concepts with real projects and
add their `demoUrl` and `githubUrl` links. Missing links are shown as coming
soon. Replace `public/chido-ukaigwe-cv.pdf` to update the publicly downloadable
CV.

Theme tokens live in `tailwind.config.ts` and `app/globals.css`. Geist fonts
are bundled locally through `next/font` in `app/layout.tsx`.

Run `npm run lint` and `npm run build` to validate changes. Next.js 14 is
outside its supported lifecycle, and the dependency audit reports
vulnerabilities. Review `npm audit` and upgrade to a supported Next.js version
before deploying to production.
