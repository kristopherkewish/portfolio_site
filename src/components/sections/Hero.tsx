"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";
import { Typewriter } from "@/components/motion/Typewriter";
import { DotField } from "@/components/motion/DotField";
import { profile } from "@/content/profile";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 200]);
  const orbOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -60]);

  // Split the name into words and letters for the staggered reveal.
  const words = `${profile.name}.`.split(" ").reduce<{ text: string; offset: number }[]>(
    (acc, text) => {
      const prev = acc[acc.length - 1];
      return [...acc, { text, offset: prev ? prev.offset + prev.text.length : 0 }];
    },
    [],
  );

  return (
    <section
      ref={ref}
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden grain"
    >
      {/* Animated gradient orb */}
      <motion.div
        aria-hidden="true"
        style={{ y: orbY, opacity: orbOpacity }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, color-mix(in oklab, var(--color-accent) 25%, transparent), transparent 70%)",
          }}
        />
      </motion.div>

      {/* Interactive dot field */}
      <DotField className="pointer-events-none absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,black_70%,transparent)]" />

      <motion.div
        style={{ y: titleY }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] uppercase text-[var(--color-accent)]"
        >
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          </span>
          {profile.role} · {profile.location}
        </motion.p>

        <h1
          id="hero-title"
          aria-label={`${profile.name}.`}
          className="font-display mt-6 text-6xl font-bold tracking-tight text-balance md:text-8xl lg:text-[9rem]"
        >
          {words.map((word, w) => (
            <span key={w} aria-hidden="true">
              <span className="inline-block whitespace-nowrap">
                {Array.from(word.text).map((char, c) => (
                  <span key={c} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                    <motion.span
                      initial={{ y: reduced ? 0 : "110%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.15 + (word.offset + c) * 0.045,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`inline-block ${char === "." ? "text-[var(--color-accent)]" : ""}`}
                    >
                      {char}
                    </motion.span>
                  </span>
                ))}
              </span>{" "}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-2xl leading-relaxed text-[var(--color-fg-muted)] md:text-3xl"
        >
          I build{" "}
          <Typewriter
            phrases={profile.typewriter}
            className="font-display font-semibold text-[var(--color-fg)]"
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 font-medium text-[var(--color-bg)] transition-transform hover:scale-[1.02]"
          >
            See projects
            <FaArrowDown className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/60 px-5 py-3 font-medium text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase text-[var(--color-fg-subtle)]"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block"
        >
          Scroll ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
