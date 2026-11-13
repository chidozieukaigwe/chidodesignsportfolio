import Link from "next/link";
import { ArrowUpRight, Braces, Cloud, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

const skillGroups = [
  {
    title: "AI & Data",
    icon: Sparkles,
    skills: ["Python", "LangChain", "OpenAI API", "RAG", "DeepSeek API"],
  },
  {
    title: "Backend",
    icon: Braces,
    skills: ["FastAPI", "Node.js", "TypeScript", "PHP", "REST APIs"],
  },
  {
    title: "Infrastructure",
    icon: Cloud,
    skills: ["AWS", "Docker", "PostgreSQL", "CI/CD", "Linux"],
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="projects" className="scroll-mt-8 border-t border-white/[0.07] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
                01 / Selected work
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                AI projects
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                Exploring practical applications of language models, retrieval,
                and intelligent workflows.
              </p>
            </div>
            <p className="text-xs text-slate-400">Featured work</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" aria-labelledby="skills-title" className="scroll-mt-8 border-t border-white/[0.07] bg-white/[0.02] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
            02 / Capabilities
          </p>
          <h2 id="skills-title" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Technical arsenal
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-400">
            Tools for building intelligent applications and the systems that support them.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {skillGroups.map(({ title, icon: Icon, skills }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 sm:p-7">
                <Icon aria-hidden="true" className="text-accent-blue" size={22} />
                <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
                <ul aria-label={`${title} skills`} className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li key={skill} className="rounded-md border border-white/[0.07] bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300">
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="experience-title" className="border-t border-white/[0.07] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
              03 / The journey
            </p>
            <h2 id="experience-title" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Experience snapshot
            </h2>
            <p className="mt-4 max-w-xs leading-7 text-slate-400">
              Enterprise foundations, practical AI, and business impact.
            </p>
            <Link href="/experience" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-200 transition-colors hover:text-white">
              Full experience &amp; education <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </div>
          <ol className="border-l border-white/10">
            {experience.slice(0, 3).map((item) => (
              <li key={`${item.organization}-${item.period}`} className="relative pb-8 pl-7 last:pb-0 sm:pl-10">
                <span aria-hidden="true" className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-accent-blue ring-4 ring-background" />
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent-blue">{item.period}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.role}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.organization}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.highlights[0]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="contact-title" className="border-t border-white/[0.07] px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
              04 / Get in touch
            </p>
            <h2 id="contact-title" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something intelligent.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-400">
              Have an AI challenge or an idea worth exploring? I&apos;d love to hear about it.
            </p>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-blue-100">
            Get in touch <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
