import { FadeUp } from "@/components/motion/FadeUp";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <FadeUp>
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-accent)]">
          {eyebrow}
        </p>
      </FadeUp>
      <FadeUp delay={0.05}>
        <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          {title}
        </h2>
      </FadeUp>
      {description ? (
        <FadeUp delay={0.1}>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-fg-muted)] text-balance">
            {description}
          </p>
        </FadeUp>
      ) : null}
    </div>
  );
}
