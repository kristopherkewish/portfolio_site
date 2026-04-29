"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import type { Skill } from "@/content/skills";

type RingProps = {
  skills: Skill[];
  radius: number;
  iconSize: number;
  duration: number;
  direction?: 1 | -1;
  paused: boolean;
  onHover: (name: string | null) => void;
};

type OrbitalIconProps = {
  skill: Skill;
  angle: number;
  rotation: ReturnType<typeof useMotionValue<number>>;
  radius: number;
  iconSize: number;
  onHover: (name: string | null) => void;
};

function OrbitalIcon({ skill, angle, rotation, radius, iconSize, onHover }: OrbitalIconProps) {
  // Counter-rotate against (parent rotation + static angle) so the icon stays upright.
  const counter = useTransform(rotation, (r) => -(r + angle));
  const Icon = skill.icon;

  const handleEnter = () => onHover(skill.name);
  const handleLeave = () => onHover(null);

  return (
    <button
      type="button"
      aria-label={skill.name}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      className="absolute top-1/2 left-1/2 grid place-items-center rounded-full bg-[var(--color-bg-elevated)] ring-1 ring-[var(--color-border)] transition-all duration-200 hover:ring-[var(--color-accent)] focus-visible:ring-[var(--color-accent)]"
      style={{
        width: iconSize,
        height: iconSize,
        marginTop: -iconSize / 2,
        marginLeft: -iconSize / 2,
        transform: `rotate(${angle}deg) translateY(-${radius}px)`,
      }}
    >
      <motion.span style={{ rotate: counter }} className="grid place-items-center">
        <Icon
          aria-hidden="true"
          style={{ color: skill.color, fontSize: iconSize * 0.5 }}
        />
      </motion.span>
    </button>
  );
}

function Ring({ skills, radius, iconSize, duration, direction = 1, paused, onHover }: RingProps) {
  const rotation = useMotionValue(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || paused) return;
    const controls = animate(rotation, rotation.get() + 360 * direction, {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
    return () => controls.stop();
  }, [paused, direction, duration, rotation, reduced]);

  return (
    <motion.div
      style={{
        rotate: rotation,
        width: radius * 2,
        height: radius * 2,
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--color-border)]/60"
    >
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * 360;
        return (
          <OrbitalIcon
            key={skill.name + skill.category}
            skill={skill}
            angle={angle}
            rotation={rotation}
            radius={radius}
            iconSize={iconSize}
            onHover={onHover}
          />
        );
      })}
    </motion.div>
  );
}

type Props = {
  innerRing: Skill[];
  outerRing: Skill[];
  monogram: string;
};

export function SkillOrbit({ innerRing, outerRing, monogram }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Track viewport size to scale the orbit on mobile.
  const [size, setSize] = useState(520);

  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth;
      if (w < 480) setSize(300);
      else if (w < 768) setSize(380);
      else if (w < 1024) setSize(440);
      else setSize(520);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const innerRadius = size * 0.28;
  const outerRadius = size * 0.46;
  const innerIcon = size < 380 ? 36 : 44;
  const outerIcon = size < 380 ? 40 : 52;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto"
      style={{ width: size, height: size }}
      onMouseLeave={() => setHovered(null)}
    >
      {/* Soft glow behind the orbit */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in oklab, var(--color-accent) 12%, transparent) 0%, transparent 65%)",
        }}
      />

      <Ring
        skills={innerRing}
        radius={innerRadius}
        iconSize={innerIcon}
        duration={50}
        direction={-1}
        paused={hovered !== null}
        onHover={setHovered}
      />

      <Ring
        skills={outerRing}
        radius={outerRadius}
        iconSize={outerIcon}
        duration={80}
        direction={1}
        paused={hovered !== null}
        onHover={setHovered}
      />

      {/* Centre monogram */}
      <div className="absolute top-1/2 left-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
        <span className="font-display text-2xl font-bold tracking-tight">
          <span aria-hidden="true">{monogram}</span>
        </span>
      </div>

      {/* Hover label */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[calc(50%+4.5rem)] left-1/2 -translate-x-1/2 text-sm tracking-wide uppercase"
      >
        <span
          className={`inline-block rounded-full bg-[var(--color-bg-elevated)] px-3 py-1 text-[var(--color-fg-muted)] ring-1 ring-[var(--color-border)] transition-opacity duration-200 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {hovered ?? ""}
        </span>
      </div>
    </div>
  );
}
