"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
  className?: string;
};

const jitter = (ms: number) => ms * (0.85 + Math.random() * 0.3);

export function Typewriter({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseAfterType = 1500,
  pauseAfterDelete = 350,
  className,
}: Props) {
  const reduced = useReducedMotion();
  const [text, setText] = useState(phrases[0] ?? "");
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reduced || phrases.length <= 1) return;

    let cancelled = false;
    let phase: "typing" | "pausing-typed" | "deleting" | "pausing-deleted" = "typing";
    let charIndex = phrases[0]?.length ?? 0;

    const tick = () => {
      if (cancelled) return;
      const phrase = phrases[indexRef.current];

      switch (phase) {
        case "typing": {
          if (charIndex < phrase.length) {
            charIndex += 1;
            setText(phrase.slice(0, charIndex));
            timerRef.current = setTimeout(tick, jitter(typingSpeed));
          } else {
            phase = "pausing-typed";
            timerRef.current = setTimeout(tick, pauseAfterType);
          }
          break;
        }
        case "pausing-typed": {
          phase = "deleting";
          timerRef.current = setTimeout(tick, deletingSpeed);
          break;
        }
        case "deleting": {
          if (charIndex > 0) {
            charIndex -= 1;
            setText(phrase.slice(0, charIndex));
            timerRef.current = setTimeout(tick, jitter(deletingSpeed));
          } else {
            phase = "pausing-deleted";
            indexRef.current = (indexRef.current + 1) % phrases.length;
            timerRef.current = setTimeout(tick, pauseAfterDelete);
          }
          break;
        }
        case "pausing-deleted": {
          phase = "typing";
          timerRef.current = setTimeout(tick, jitter(typingSpeed));
          break;
        }
      }
    };

    timerRef.current = setTimeout(tick, pauseAfterType);

    return () => {
      cancelled = true;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phrases, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete, reduced]);

  return (
    <span className={className}>
      <span aria-live="polite" aria-atomic="true">
        {text}
      </span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.85em] w-[2px] translate-y-[0.12em] animate-pulse bg-[var(--color-accent)] align-baseline"
      />
      {/* For SEO + screen readers: keep the full list discoverable */}
      <span className="sr-only">{phrases.join(", ")}</span>
    </span>
  );
}
