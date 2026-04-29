"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/70 backdrop-blur-md"
          : "bg-transparent"
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
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 font-mono text-xs tracking-wider uppercase text-[var(--color-fg-muted)] transition-colors hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-fg)]"
              >
                {l.label}
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
      </nav>
    </header>
  );
}
