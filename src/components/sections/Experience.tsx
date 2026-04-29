"use client";

import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/content/experience";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 40%"],
  });

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative mx-auto w-full max-w-6xl px-6 py-32 md:px-10 md:py-40"
    >
      <SectionHeading eyebrow="Experience" title="A short history." />

      <div ref={containerRef} className="relative mt-20 grid gap-x-12 md:grid-cols-12">
        {/* Vertical track */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-[1.1rem] w-px bg-[var(--color-border)] md:left-[calc(33.333%+0.6rem)]"
        />
        {/* Animated progress overlay */}
        <motion.div
          aria-hidden="true"
          style={{ scaleY: reduced ? 1 : scrollYProgress, transformOrigin: "top" }}
          className="absolute top-0 bottom-0 left-[1.1rem] w-px bg-[var(--color-accent)] md:left-[calc(33.333%+0.6rem)]"
        />

        <ol className="contents">
          {experience.map((entry, i) => (
            <li
              key={entry.year}
              className="relative col-span-full grid gap-4 pb-16 last:pb-0 md:grid-cols-12 md:gap-x-12"
            >
              {/* Year */}
              <div className="md:col-span-4">
                <FadeUp>
                  <div className="relative pl-10 md:pl-12">
                    {/* Dot on the timeline */}
                    <span
                      aria-hidden="true"
                      className="absolute top-2 left-[0.6rem] block h-3 w-3 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg)] md:left-[calc(100%+0.1rem)]"
                    />
                    <p className="font-display text-4xl font-semibold tracking-tight text-[var(--color-fg)] md:text-5xl">
                      {entry.year}
                    </p>
                  </div>
                </FadeUp>
              </div>

              {/* Body */}
              <div className="md:col-span-8">
                <FadeUp delay={0.05 + i * 0.02}>
                  <div className="ml-10 md:ml-0">
                    <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                      {entry.title}
                    </h3>
                    {entry.org ? (
                      <p className="mt-1 text-sm text-[var(--color-fg-subtle)]">{entry.org}</p>
                    ) : null}
                    <p className="mt-3 leading-relaxed text-[var(--color-fg-muted)]">
                      {entry.body}
                    </p>
                  </div>
                </FadeUp>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <h3 id="experience-title" className="sr-only">
        Experience timeline
      </h3>
    </section>
  );
}
