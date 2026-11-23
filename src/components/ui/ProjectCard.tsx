"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import type { Project } from "@/content/projects";
import { TiltCard } from "@/components/motion/TiltCard";
import { ProjectPreview } from "@/components/previews/ProjectPreview";
import { Chip } from "./Chip";

type Props = {
  project: Project;
  reverse?: boolean;
  index: number;
};

export function ProjectCard({ project, reverse = false, index }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: reduced ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      className={`grid items-center gap-8 md:grid-cols-12 md:gap-12 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <TiltCard accent={project.accent} className="col-span-7">
        <ProjectPreview project={project} priority={index === 0} />
      </TiltCard>

      <div className="col-span-5">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-fg-subtle)]">
          {String(index + 1).padStart(2, "0")} · Project
        </p>
        <h3 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          {project.name}
        </h3>
        <p className="mt-2 text-lg text-[var(--color-fg-muted)]">{project.tagline}</p>
        <p className="mt-4 leading-relaxed text-[var(--color-fg-muted)]">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Chip>{tech}</Chip>
            </li>
          ))}
        </ul>

        {project.liveUrl || project.repoUrl ? (
          <div className="mt-6 flex flex-wrap gap-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)]/10 px-4 py-2 text-sm font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/20"
              >
                Visit live
                <FaArrowUpRightFromSquare className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-2 text-sm font-medium text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
              >
                <FaGithub />
                Source
              </a>
            ) : null}
          </div>
        ) : project.context ? (
          <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-fg-subtle)]">
            <span className="h-px w-6 bg-[var(--color-border-strong)]" aria-hidden="true" />
            {project.context}
          </p>
        ) : null}
      </div>
    </motion.article>
  );
}
