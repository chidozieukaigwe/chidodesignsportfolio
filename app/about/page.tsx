import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight, Braces, Layers3, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About | Chido Designs",
  description:
    "Discover how Chido Ukaigwe connects enterprise engineering experience with modern AI capabilities.",
};

const strengths = [
  {
    icon: Layers3,
    title: "Enterprise foundations",
    description:
      "Experience navigating established codebases, understanding business constraints, and building software designed to deliver real impact.",
  },
  {
    icon: Braces,
    title: "From PHP to Python",
    description:
      "A full-stack foundation across PHP and modern application development, extended with Python for diagnostics, data, and AI workflows.",
  },
  {
    icon: Sparkles,
    title: "AI with purpose",
    description:
      "A practical focus on LLMs, retrieval-augmented generation, and AI-assisted development: capabilities that fit the problem, not the other way around.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <div className="hero-background relative isolate overflow-hidden">
        <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0 -z-10" />
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl px-6">
          <SiteHeader />
          <section aria-labelledby="about-title" className="max-w-4xl pb-20 pt-24 sm:pb-28 sm:pt-32">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
              About / The story
            </p>
            <h1 id="about-title" className="mt-6 text-balance text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-6xl">
              Connecting the systems we rely on with{" "}
              <span className="text-slate-400">the possibilities of AI.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I&apos;m Chido, an engineer who brings a full-stack perspective to
              building practical, business-focused AI solutions.
            </p>
          </section>
        </div>
      </div>

      <section aria-labelledby="story-title" className="border-t border-white/[0.07] px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
              The journey
            </p>
            <h2 id="story-title" className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Built on experience. Focused on what&apos;s next.
            </h2>
          </div>
          <div className="max-w-3xl space-y-6 text-base leading-8 text-slate-300 sm:text-lg">
            <p>
              My foundation is in full-stack engineering: more than seven years
              building applications and solving complex problems for businesses,
              including global brands such as Sony Music. Working across PHP and
              established enterprise codebases taught me to look beyond a single
              feature and understand the systems, people, and business outcomes
              around it.
            </p>
            <p>
              Today, I bring that same practical mindset to AI. I use Python and
              LLM workflows to build diagnostic tools, explore complex codebases,
              and turn difficult technical questions into useful insights. I also
              use AI-assisted development to learn new stacks and deliver
              enterprise-grade features more efficiently.
            </p>
            <p>
              My value is in bridging the gap: understanding the realities of
              legacy enterprise systems while exploring how modern AI capabilities,
              including retrieval-augmented generation, can work alongside them.
              The goal is not AI for its own sake, but solutions grounded in
              real business needs.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="approach-title" className="border-t border-white/[0.07] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
            The approach
          </p>
          <h2 id="approach-title" className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Experience meets intelligent technology.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {strengths.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-7">
                <Icon aria-hidden="true" className="text-accent-blue" size={22} />
                <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/#projects" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-blue-100">
              Explore AI projects <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
            <a href="/chido-ukaigwe-cv.pdf" download className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/10 px-5 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:bg-white/5">
              <ArrowDownToLine aria-hidden="true" size={16} /> Download CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
