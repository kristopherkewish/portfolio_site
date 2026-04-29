import { FadeUp } from "@/components/motion/FadeUp";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-16 md:px-10 md:pt-48"
    >
      <FadeUp>
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--color-accent)]">
          Get in touch
        </p>
      </FadeUp>

      <FadeUp delay={0.05}>
        <h2
          id="contact-title"
          className="font-display mt-4 text-5xl font-semibold tracking-tight text-balance md:text-7xl"
        >
          Let&apos;s build something.
        </h2>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-fg-muted)]">
          Always happy to chat about interesting work, side projects, or anything else
          that might lead somewhere.
        </p>
      </FadeUp>

      <FadeUp delay={0.15}>
        <a
          href={`mailto:${profile.email}`}
          className="font-display group mt-12 flex max-w-full flex-wrap items-baseline gap-x-4 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl"
        >
          <span className="border-b border-[var(--color-border)] pb-1 break-all transition-colors group-hover:border-[var(--color-accent)]">
            {profile.email}
          </span>
          <span
            aria-hidden="true"
            className="text-[var(--color-accent)] transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </FadeUp>

      <FadeUp delay={0.2}>
        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-4 text-sm">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-2 text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                <span className="font-mono text-xs tracking-[0.2em] uppercase">{s.label}</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </FadeUp>

      <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 text-xs text-[var(--color-fg-subtle)]">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">
          Built with Next.js, Tailwind, & Framer Motion
        </p>
      </footer>
    </section>
  );
}
