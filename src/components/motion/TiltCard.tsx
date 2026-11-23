"use client";

import type { PointerEvent, ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type Props = {
  children: ReactNode;
  /** Hex colour used for the glare that follows the pointer. */
  accent: string;
  className?: string;
};

const spring = { stiffness: 180, damping: 20, mass: 0.6 };

/** Tilts its content toward the pointer in 3D, with a soft accent-coloured glare. */
export function TiltCard({ children, accent, className }: Props) {
  const reduced = useReducedMotion();
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, spring);
  const rotateY = useSpring(tiltY, spring);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useSpring(0, spring);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, ${accent}2e, transparent 55%)`;

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    tiltY.set((px - 0.5) * 9);
    tiltX.set((0.5 - py) * 7);
    glareX.set(px * 100);
    glareY.set(py * 100);
    glareOpacity.set(1);
  };

  const handleLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    glareOpacity.set(0);
  };

  return (
    <div className={className} style={{ perspective: 1400 }}>
      <motion.div
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={{ rotateX, rotateY }}
        className="relative will-change-transform"
      >
        {children}
        <motion.div
          aria-hidden="true"
          style={{ background: glare, opacity: glareOpacity }}
          className="pointer-events-none absolute inset-0 rounded-2xl"
        />
      </motion.div>
    </div>
  );
}
