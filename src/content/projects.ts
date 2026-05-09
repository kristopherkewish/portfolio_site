export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  /** Display label when there's no live link (e.g. "Internal · Interfi Systems") */
  context?: string;
  liveUrl?: string;
  repoUrl?: string;
  /** path under /public — placeholder until a real screenshot exists */
  image: string;
  imageAlt: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "timebox",
    name: "Timebox",
    tagline: "A day-planning web app built around the timebox method.",
    description:
      "A personal productivity app that lets you plan your day in concrete time blocks on a configurable timeline, with weekly and monthly planners at higher levels of abstraction. Solo full-stack build — React SPA on Cloudflare Pages, with Pages Functions, D1, and Drizzle handling auth and persistence at the edge for $0/month.",
    stack: ["React", "TypeScript", "Vite", "Drizzle", "Cloudflare"],
    liveUrl: "https://timebox2.pages.dev/",
    repoUrl: "https://github.com/kristopherkewish/timebox",
    image: "/projects/timebox.svg",
    imageAlt: "Timebox — day-planning web app preview",
    accent: "#8B5CF6",
  },
  {
    slug: "zyzz-ai",
    name: "ZyzzAI",
    tagline: "An AI personal trainer that competes with online coaches.",
    description:
      "A SaaS platform that pairs LLM-driven coaching with structured workout planning, delivering personalised training programs at a fraction of human-coach cost. Built end-to-end as a freelance project — frontend, backend, auth, billing, and AI workflow orchestration.",
    stack: ["React", "TypeScript", "Next.js", "Supabase"],
    context: "Freelance project",
    image: "/projects/zyzz-ai.svg",
    imageAlt: "ZyzzAI — AI personal trainer SaaS preview",
    accent: "#A3E635",
  },
  {
    slug: "kaizen-dojo-manager",
    name: "Kaizen Dojo Manager",
    tagline: "Member, class, and payment management for a martial arts business.",
    description:
      "An admin platform built for a real martial arts business to manage members, schedule classes, and handle recurring payments. Sole engineer on the project — responsible for architecture, database design, and full-stack implementation across the React frontend, .NET backend, and Azure-hosted infrastructure.",
    stack: ["React", ".NET", "SQL Server", "Azure"],
    context: "Freelance project",
    image: "/projects/kaizen-dojo-manager.svg",
    imageAlt: "Kaizen Dojo Manager admin platform preview",
    accent: "#F97316",
  },
  {
    slug: "customer-operations-hub",
    name: "Customer Operations Hub",
    tagline: "A centralised internal tool consolidating analytics and DevOps.",
    description:
      "Led development of an internal platform that brings customer analytics and DevOps operations into one place for the team. Implemented Azure Functions for scheduled background work, a CosmosDB serverless backend, and Application Insights instrumentation throughout for performance and behaviour tracking.",
    stack: ["React", ".NET", "CosmosDB", "Azure Functions", "App Insights"],
    context: "Internal · Interfi Systems",
    image: "/projects/customer-operations-hub.svg",
    imageAlt: "Customer Operations Hub internal tool preview",
    accent: "#06B6D4",
  },
];
