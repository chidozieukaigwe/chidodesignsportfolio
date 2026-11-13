import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

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
            <p className="text-xs text-slate-400">Example projects · Coming soon</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
