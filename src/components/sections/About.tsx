import { FadeUp } from "@/components/motion/FadeUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative mx-auto w-full max-w-6xl px-6 py-32 md:px-10 md:py-40"
    >
      <SectionHeading eyebrow="About" title="A short introduction." />

      <div className="mt-16 grid gap-12 md:grid-cols-12">
        <FadeUp className="md:col-span-7">
          <p className="text-xl leading-relaxed text-[var(--color-fg-muted)] md:text-2xl">
            {profile.bio}
          </p>
        </FadeUp>

        <FadeUp className="md:col-span-5" delay={0.1}>
          <h3 id="about-title" className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-fg-subtle)]">
            Currently
          </h3>
          <dl className="mt-4 divide-y divide-[var(--color-border)]">
            {profile.currently.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-3 gap-4 py-4">
                <dt className="col-span-1 font-mono text-xs tracking-wider uppercase text-[var(--color-fg-subtle)]">
                  {label}
                </dt>
                <dd className="col-span-2 text-sm text-[var(--color-fg)]">{value}</dd>
              </div>
            ))}
          </dl>
        </FadeUp>
      </div>
    </section>
  );
}
