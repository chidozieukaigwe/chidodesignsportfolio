import type { ProjectStackGroup } from "@/data/projects";

type ProjectTechStackProps = {
  groups: ProjectStackGroup[];
};

export default function ProjectTechStack({ groups }: ProjectTechStackProps) {
  return (
    <div className="space-y-4" aria-label="Technology stack">
      {groups.map((group) => (
        <div key={group.category}>
          <p className="mb-2 text-xs font-medium text-slate-400">{group.category}</p>
          <ul aria-label={`${group.category} technologies`} className="flex flex-wrap gap-2">
            {group.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-md border border-white/[0.07] bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
