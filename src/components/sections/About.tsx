import { FadeUp } from "@/components/motion/FadeUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollRevealText } from "@/components/motion/ScrollRevealText";
import { LocalTime } from "@/components/ui/LocalTime";
import { profile } from "@/content/profile";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative mx-auto w-full max-w-6xl scroll-mt-10 px-6 py-24 md:px-10 md:py-32"
    >
      <SectionHeading eyebrow="About" title="A short introduction." />

      <div className="mt-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <ScrollRevealText
            text={profile.bio}
            className="font-display text-2xl leading-snug font-medium tracking-tight text-[var(--color-fg)] md:text-4xl md:leading-[1.25]"
          />
        </div>

        <FadeUp
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/60 p-6 md:col-span-5 md:self-start md:p-8"
          delay={0.1}
        >
          <h3 id="about-title" className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-fg-subtle)]">
            Currently
          </h3>
          <dl className="mt-2 divide-y divide-[var(--color-border)]">
            {profile.currently.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-3 gap-4 py-4">
                <dt className="col-span-1 font-mono text-xs tracking-wider uppercase text-[var(--color-fg-subtle)]">
                  {label}
                </dt>
                <dd className="col-span-2 text-sm text-[var(--color-fg)]">{value}</dd>
              </div>
            ))}
            <div className="grid grid-cols-3 gap-4 py-4">
              <dt className="col-span-1 font-mono text-xs tracking-wider uppercase text-[var(--color-fg-subtle)]">
                Based in
              </dt>
              <dd className="col-span-2 text-sm text-[var(--color-fg)]">
                {profile.location}
                <LocalTime />
              </dd>
            </div>
          </dl>
        </FadeUp>
      </div>
    </section>
  );
}
