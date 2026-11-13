export interface Project {
  title: string;
  description: string;
  category: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

// Replace these examples and add real URLs when the projects are ready.
export const projects: Project[] = [
  {
    title: "Knowledge Retrieval Assistant",
    category: "Retrieval augmented generation",
    description:
      "A RAG application concept for finding relevant answers across a collection of documents.",
    stack: ["Python", "LangChain", "Pinecone", "OpenAI"],
  },
  {
    title: "AI Research Agent",
    category: "Autonomous agents",
    description:
      "An agent concept that brings research, synthesis, and structured outputs into one workflow.",
    stack: ["Python", "LangGraph", "OpenAI", "FastAPI"],
  },
  {
    title: "Intelligent Workflow Assistant",
    category: "AI automation",
    description:
      "A workflow concept exploring how LLMs can help automate repetitive business processes.",
    stack: ["Python", "LangChain", "FastAPI", "Docker"],
  },
];
