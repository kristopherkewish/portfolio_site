"use client";

import { FadeUp } from "@/components/motion/FadeUp";
import { SkillOrbit } from "@/components/motion/SkillOrbit";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { skills, skillsByCategory, type SkillCategory } from "@/content/skills";
import { profile } from "@/content/profile";

const categories: SkillCategory[] = ["Languages", "Frameworks", "Tools"];

export function Skills() {
  // Inner ring = the 5 languages, outer ring = frameworks + tools (9 items)
  const inner = skillsByCategory("Languages");
  const outer = [...skillsByCategory("Frameworks"), ...skillsByCategory("Tools")];

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative mx-auto w-full max-w-6xl px-6 py-32 md:px-10 md:py-40"
    >
      <div className="mb-20">
        <SectionHeading
          eyebrow="Skills"
          title="The tools I reach for."
          description="The orbit holds the things I use most days. The list underneath is the full picture."
        />
      </div>

      <FadeUp>
        <SkillOrbit innerRing={inner} outerRing={outer} monogram={profile.initials} />
      </FadeUp>

      <h3 id="skills-title" className="sr-only">
        Skills, grouped by category
      </h3>

      <div className="mt-24 grid gap-10 md:grid-cols-3">
        {categories.map((category, idx) => (
          <FadeUp key={category} delay={idx * 0.05}>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-fg-subtle)]">
              {category}
            </h4>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills
                .filter((s) => s.category === category)
                .map((s) => (
                  <li key={s.name + s.category}>
                    <Chip>{s.name}</Chip>
                  </li>
                ))}
            </ul>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
