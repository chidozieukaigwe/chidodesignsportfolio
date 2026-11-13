import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ChartNoAxesCombined,
  CircleCheck,
  FileText,
  Image as ImageIcon,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import SiteHeader from "@/components/SiteHeader";
import { revenueIntelligenceProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Revenue Intelligence | Case Study | Chido Designs",
  description:
    "A case study on bounded GenAI for publisher traffic diagnostics and executive recovery reports.",
};

const architecture = [
  {
    icon: Layers3,
    title: "Constrained Metric Interpretation",
    description:
      "DeepSeek interprets a bounded packet of calculated metrics, connecting the diagnostic results to a clear executive narrative.",
  },
  {
    icon: ShieldCheck,
    title: "Policy Validation",
    description:
      "Generated output is checked against reporting policies, including rejecting claims that imply guaranteed revenue.",
  },
  {
    icon: Workflow,
    title: "Deterministic Fallbacks",
    description:
      "When AI output cannot be accepted, a deterministic fallback keeps the report grounded in the underlying data.",
  },
];

const implementation = [
  {
    title: "GA4 data ingestion",
    description: "Ingest session data from Google Analytics 4 to establish a picture of traffic performance.",
  },
  {
    title: "Baseline calculation",
    description: "Calculate traffic baselines before passing a bounded metric packet to the interpretation layer.",
  },
  {
    title: "PDF generation",
    description: "Present the diagnostic findings and recovery narrative in an executive-ready PDF report.",
  },
];

const code = `// Example of the bounded AI interpretation layer
const aiResponse = await deepseek.interpretMetrics(packet);

// Policy Validation: Reject if LLM hallucinates revenue
if (aiResponse.claimsGuaranteedRevenue) {
   return deterministicFallback(reportData);
}`;

export default function RevenueIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_25%,rgba(204,255,0,0.10),transparent_48%)]"
        />
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl px-6">
          <SiteHeader />
          <section aria-labelledby="case-study-title" className="max-w-5xl pb-24 pt-20 sm:pb-32 sm:pt-28">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
              <ArrowLeft aria-hidden="true" size={16} /> All projects
            </Link>
            <p className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-[#ccff00]">
              Featured case study / AI engineering
            </p>
            <h1 id="case-study-title" className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              {revenueIntelligenceProject.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              How I engineered a bounded GenAI layer to diagnose publisher revenue constraints
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={revenueIntelligenceProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#ccff00] px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-[#ddff66]"
              >
                View Live Tool <ArrowUpRight aria-hidden="true" size={16} />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
            <ul aria-label="Technology stack" className="mt-10 flex flex-wrap gap-2">
              {revenueIntelligenceProject.stack.map((item) => (
                <li key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <article className="border-t border-white/10">
        <section aria-labelledby="problem-title" className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:py-28 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ccff00]">01 / The problem</p>
            <h2 id="problem-title" className="mt-4 text-3xl font-semibold tracking-tight text-white">Visibility has a cost.</h2>
          </div>
          <div className="max-w-3xl space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            <p>
              Publishers can lose valuable traffic when technical constraints keep content from being discovered.
              Pages marked as crawled but not indexed are one signal that a site&apos;s content may not be reaching its audience.
            </p>
            <p>
              The Baseline Recovery Tool brings traffic data and executive reporting together to help surface
              potential constraints. Rather than promising a revenue outcome, it frames the data as a starting
              point for investigation and recovery planning.
            </p>
          </div>
        </section>

        <section aria-labelledby="architecture-title" className="border-t border-white/10 bg-white/[0.02] px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ccff00]">02 / The AI architecture</p>
            <h2 id="architecture-title" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Intelligence, with boundaries.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              DeepSeek turns calculated metrics into an accessible narrative. The interpretation layer is bounded
              by policy checks and deterministic alternatives, so the model does not have the final word unchecked.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {architecture.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-[#111411] p-6">
                  <Icon aria-hidden="true" className="text-[#ccff00]" size={22} />
                  <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="implementation-title" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:py-28 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ccff00]">03 / Implementation</p>
            <h2 id="implementation-title" className="mt-4 text-3xl font-semibold tracking-tight text-white">
              From sessions to a story.
            </h2>
          </div>
          <ul className="space-y-6">
            {implementation.map(({ title, description }) => (
              <li key={title} className="flex gap-4 border-b border-white/10 pb-6">
                <CircleCheck aria-hidden="true" className="mt-1 shrink-0 text-[#ccff00]" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="policy-title" className="border-t border-white/10 bg-white/[0.02] px-6 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ccff00]">04 / Guardrails in practice</p>
              <h2 id="policy-title" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Validate before you communicate.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                The DeepSeek response is evaluated against reporting policy before it reaches the executive report.
                If it claims guaranteed revenue, the response is rejected and the deterministic report is used instead.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                This illustrative pseudocode shows the intent of the validation, not production source code.
              </p>
            </div>
            <CodeBlock label="interpretation.ts" code={code} />
          </div>
        </section>

        <section aria-labelledby="showcase-title" className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ccff00]">05 / Visual showcase</p>
          <h2 id="showcase-title" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The dashboard.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            A closer look at the diagnostic experience.
          </p>
          <div className="mt-10 flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-600 bg-slate-800/60 px-6 text-center sm:min-h-96">
            <ImageIcon aria-hidden="true" className="text-slate-400" size={32} />
            <p className="mt-4 text-sm font-medium text-slate-300">Dashboard screenshot placeholder</p>
            <p className="mt-2 text-xs text-slate-400">A visual of the live tool can be added here.</p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href={revenueIntelligenceProject.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[#ccff00] hover:text-white">
              <ChartNoAxesCombined aria-hidden="true" size={18} /> View Live Tool
              <ArrowUpRight aria-hidden="true" size={15} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white">
              <FileText aria-hidden="true" size={18} /> Discuss a project
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
