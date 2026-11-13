"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Boxes, CodeXml } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const linkClass =
    "inline-flex items-center gap-1.5 text-sm font-medium text-slate-200 transition-colors hover:text-[#ccff00]";
  const unavailableClass =
    "inline-flex cursor-not-allowed items-center gap-1.5 text-sm font-medium text-slate-500";

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className={`group flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition-[border-color,box-shadow] duration-300 hover:border-[#ccff00]/40 hover:shadow-[0_0_32px_rgba(204,255,0,0.12)] focus-within:border-[#ccff00]/40 focus-within:shadow-[0_0_32px_rgba(204,255,0,0.12)] motion-reduce:transition-none sm:p-7 ${project.featured ? "lg:col-span-2" : ""}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ccff00]/15 bg-[#ccff00]/10 text-[#ccff00]">
          <Boxes aria-hidden="true" size={20} />
        </div>
        <span className="font-mono text-xs text-slate-500">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-8 text-xs font-medium uppercase tracking-[0.16em] text-[#ccff00]">
        {project.category}
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
        {project.stack.map((technology) => (
          <li
            key={technology}
            className="rounded-md border border-white/[0.07] bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5">
        {project.caseStudyUrl && (
          <Link href={project.caseStudyUrl} className={linkClass}>
            Case Study <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
        )}
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Live Demo <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        ) : (
          <span className={unavailableClass}>Live Demo · Coming soon</span>
        )}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <CodeXml aria-hidden="true" size={15} /> GitHub Repo
          </a>
        ) : (
          <span className={unavailableClass}>GitHub Repo · Coming soon</span>
        )}
      </div>
    </motion.article>
  );
}
