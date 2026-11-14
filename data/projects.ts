export interface ProjectStackGroup {
  category: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  category: string;
  stack: ProjectStackGroup[];
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
}

export const revenueIntelligenceProject: Project = {
  title: "Revenue Intelligence Agency & Baseline Recovery Tool",
  category: "AI Engineering / Full Stack / GenAI",
  description:
    "An AI-augmented diagnostic engine that ingests GA4 session data to calculate traffic baselines and uses a bounded DeepSeek LLM layer to generate executive recovery reports.",
  stack: [
    { category: "AI & Data", technologies: ["DeepSeek API", "Python"] },
    { category: "Backend", technologies: ["Node.js (Express)", "TypeScript", "REST APIs", "Python"] },
    { category: "Infrastructure", technologies: ["Render", "Docker", "PostgreSQL", "CI/CD", "Linux", "GitHub Actions"] },
    { category: "Frontend & Integration", technologies: ["Next.js", "Tailwind CSS", "GA4 Integration"] },
  ],
  demoUrl: "https://revenueintelligence.agency",
  caseStudyUrl: "/projects/revenue-intelligence",
  featured: true,
};

export const projects: Project[] = [revenueIntelligenceProject];
