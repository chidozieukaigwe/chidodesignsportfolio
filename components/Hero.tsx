import { ArrowDown, Download, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";

export default function Hero() {
  return (
    <section className="hero-background relative isolate overflow-hidden">
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        <SiteHeader />

        <div className="relative max-w-4xl pb-24 pt-24 sm:pb-32 sm:pt-36 lg:pb-40 lg:pt-44">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3 py-1.5 text-xs font-medium tracking-wide text-blue-200">
            <Sparkles aria-hidden="true" size={14} />
            Building with intelligence
          </div>
          <h1 className="mt-8 text-balance text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            AI Engineer &amp; Strategist
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            I&apos;m Chido. I bridge the gap between complex LLM architectures and
            production-ready business applications.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            LLMs, RAG &amp; AI-augmented development.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-blue-100"
            >
              View AI Projects <ArrowDown aria-hidden="true" size={16} />
            </a>
            <a
              href="/chido-ukaigwe-cv.pdf"
              download
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/10 px-5 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <Download aria-hidden="true" size={16} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
