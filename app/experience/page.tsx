import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight, GraduationCap } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience & Education | Chido Designs",
  description:
    "Explore Chido Ukaigwe's engineering experience and education, from enterprise development to AI.",
};

export default function ExperiencePage() {
  return (
    <main>
      <div className="hero-background relative isolate overflow-hidden">
        <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0 -z-10" />
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl px-6">
          <SiteHeader />
          <section aria-labelledby="experience-page-title" className="max-w-4xl pb-20 pt-24 sm:pb-28 sm:pt-32">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
              Experience / Education
            </p>
            <h1 id="experience-page-title" className="mt-6 text-balance text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-6xl">
              A foundation in engineering.{" "}
              <span className="text-slate-400">A focus on what&apos;s next.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              From enterprise applications to AI-powered diagnostics, my work
              connects technical problem-solving with business impact.
            </p>
            <a href="/chido-ukaigwe-cv.pdf" download className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/10 px-5 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:bg-white/5">
              <ArrowDownToLine aria-hidden="true" size={16} /> Download CV
            </a>
          </section>
        </div>
      </div>

      <section aria-labelledby="work-title" className="border-t border-white/[0.07] px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">01 / Career</p>
            <h2 id="work-title" className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Experience
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              Selected roles across AI, publishing, and enterprise engineering.
            </p>
          </div>
          <ol className="space-y-0 border-l border-white/10">
            {experience.map((item) => (
              <li key={`${item.organization}-${item.period}`} className="relative pb-10 pl-7 last:pb-0 sm:pl-10">
                <span aria-hidden="true" className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-accent-blue ring-4 ring-background" />
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent-blue">{item.period}</p>
                <article className="mt-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 sm:p-7">
                  <h3 className="text-xl font-semibold tracking-tight text-white">{item.role}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-200">{item.organization}</p>
                  <p className="mt-1 text-xs text-slate-400">{item.detail}</p>
                  <ul className="mt-5 space-y-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-300">
                        <span aria-hidden="true" className="mt-3 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  {item.caseStudy && (
                    <Link href="/projects/revenue-intelligence" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-200 transition-colors hover:text-white">
                      Read the case study <ArrowUpRight aria-hidden="true" size={15} />
                    </Link>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="education-title" className="border-t border-white/[0.07] px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">02 / Education</p>
            <h2 id="education-title" className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Education
            </h2>
          </div>
          <article className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 sm:p-7">
            <GraduationCap aria-hidden="true" className="text-accent-blue" size={24} />
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
              BA, Business Management &amp; Commercial Law
            </h3>
            <p className="mt-2 text-sm text-slate-300">Westminster University · 2:2</p>
          </article>
        </div>
      </section>
    </main>
  );
}
