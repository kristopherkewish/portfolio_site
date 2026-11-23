"use client";

import { useRef, type ComponentType } from "react";
import Image from "next/image";
import { useInView, useReducedMotion } from "framer-motion";
import type { Project } from "@/content/projects";
import type { PreviewProps } from "./types";
import { RunLatePreview } from "./RunLatePreview";
import { TimeboxPreview } from "./TimeboxPreview";
import { BwbCoachPreview } from "./BwbCoachPreview";
import { ZyzzAiPreview } from "./ZyzzAiPreview";
import { KaizenPreview } from "./KaizenPreview";
import { OpsHubPreview } from "./OpsHubPreview";

/**
 * Live, coded miniatures of each project, keyed by slug. They are illustrations of
 * the product, not screenshots. A project without one falls back to its static image.
 */
const previews: Record<string, ComponentType<PreviewProps>> = {
  runlate: RunLatePreview,
  timebox: TimeboxPreview,
  "bwb-coach": BwbCoachPreview,
  "zyzz-ai": ZyzzAiPreview,
  "kaizen-dojo-manager": KaizenPreview,
  "customer-operations-hub": OpsHubPreview,
};

type Props = {
  project: Project;
  priority?: boolean;
};

export function ProjectPreview({ project, priority = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduced = useReducedMotion();
  const Preview = previews[project.slug];
  const address = project.liveUrl ? new URL(project.liveUrl).host : project.slug;

  return (
    <div
      ref={ref}
      className="@container overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
      style={{ boxShadow: `0 30px 80px -40px ${project.accent}70` }}
    >
      {/* Window chrome */}
      <div
        aria-hidden="true"
        className="flex items-center gap-3 border-b border-[var(--color-border)] px-4 py-2.5"
      >
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-border-strong)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-border-strong)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-border-strong)]" />
        </span>
        <span className="mx-auto truncate rounded-md bg-[var(--color-bg)] px-3 py-0.5 font-mono text-[11px] text-[var(--color-fg-subtle)]">
          {address}
        </span>
        <span className="w-[42px]" />
      </div>

      <div className="relative aspect-[16/10]" role="img" aria-label={project.imageAlt}>
        {Preview ? (
          // Everything inside is sized in em, so the miniature scales with the frame.
          <div aria-hidden="true" className="absolute inset-0 select-none" style={{ fontSize: "2cqw" }}>
            <Preview active={inView && !reduced} accent={project.accent} />
          </div>
        ) : (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover"
            priority={priority}
          />
        )}
      </div>
    </div>
  );
}
