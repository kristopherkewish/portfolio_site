"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { profile } from "@/content/profile";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function TopNav() {
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section is crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id === "hero" ? null : entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ["hero", ...links.map((l) => l.id)]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-40 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/70 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <a
          href="#main"
          className="absolute -translate-y-full bg-[var(--color-accent)] px-3 py-1 text-sm text-[var(--color-bg)] focus:translate-y-0"
        >
          Skip to main content
        </a>
        <nav
          aria-label="Primary"
          className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10"
        >
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="font-display text-sm font-bold tracking-tight"
            aria-label={`${profile.name} — home`}
          >
            {profile.initials}
            <span aria-hidden="true" className="text-[var(--color-accent)]">
              .
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? "location" : undefined}
                  className={`relative block rounded-full px-3 py-1.5 font-mono text-xs tracking-wider uppercase transition-colors hover:text-[var(--color-fg)] ${
                    active === l.id ? "text-[var(--color-fg)]" : "text-[var(--color-fg-muted)]"
                  }`}
                >
                  {active === l.id ? (
                    <motion.span
                      layoutId="nav-active"
                      aria-hidden="true"
                      transition={
                        reduced ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }
                      }
                      className="absolute inset-0 rounded-full bg-[var(--color-bg-elevated)] ring-1 ring-[var(--color-border-strong)]"
                    />
                  ) : null}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/60 px-3 py-1.5 font-mono text-xs tracking-wider uppercase text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-fg)] md:inline-block"
          >
            Say hi
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative -mr-2 grid h-10 w-10 place-items-center md:hidden"
          >
            <span
              aria-hidden="true"
              className={`absolute h-px w-5 bg-[var(--color-fg)] transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-px w-5 bg-[var(--color-fg)] transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 flex flex-col justify-center bg-[var(--color-bg)]/95 px-6 backdrop-blur-lg md:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.li
                    key={l.id}
                    initial={{ opacity: 0, y: reduced ? 0 : 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className="font-display flex items-baseline gap-4 py-2 text-4xl font-semibold tracking-tight"
                    >
                      <span className="font-mono text-xs tracking-wider text-[var(--color-accent)]">
                        0{i + 1}
                      </span>
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
