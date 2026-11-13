export interface Project {
  title: string;
  description: string;
  category: string;
  stack: string[];
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
  stack: ["Next.js", "TypeScript", "DeepSeek API", "Node.js", "GA4 Integration", "Tailwind CSS"],
  demoUrl: "https://revenueintelligence.agency",
  caseStudyUrl: "/projects/revenue-intelligence",
  featured: true,
};

export const projects: Project[] = [revenueIntelligenceProject];
