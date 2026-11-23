"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { PreviewProps } from "./types";

const PLAN = [
  { day: "Mon", session: "Push", load: 80 },
  { day: "Tue", session: "Pull", load: 70 },
  { day: "Wed", session: "Rest", load: 0 },
  { day: "Thu", session: "Legs", load: 95 },
  { day: "Fri", session: "Upper", load: 60 },
  { day: "Sat", session: "Lower", load: 75 },
];

const MESSAGE =
  "Week 3: adding a set to your rows and holding squat load steady. Recovery looks good, so the deload stays in week 5.";

// Characters of "typing", then a pause before the loop restarts.
const HOLD = 70;

export function ZyzzAiPreview({ active, accent }: PreviewProps) {
  const [count, setCount] = useState(MESSAGE.length);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setCount((c) => (c >= MESSAGE.length + HOLD ? 0 : c + 1)), 38);
    return () => clearInterval(id);
  }, [active]);

  const typed = MESSAGE.slice(0, count);
  const done = count >= MESSAGE.length;

  return (
    <div className="flex h-full gap-[1.6em] bg-[#0a0d05] p-[2em]">
      {/* Weekly plan */}
      <div className="flex w-[40%] flex-col rounded-[1em] border border-white/10 bg-white/[0.03] p-[1.2em]">
        <span className="font-mono text-[0.8em] tracking-[0.2em] text-[#a1a1aa]/70 uppercase">
          Week 3 plan
        </span>
        <div className="mt-[0.9em] flex flex-1 flex-col justify-between">
          {PLAN.map((item, i) => (
            <div key={item.day} className="flex items-center gap-[0.8em]">
              <span className="w-[2.4em] font-mono text-[0.8em] text-[#a1a1aa]">{item.day}</span>
              <span className="w-[3.4em] text-[0.95em] text-white">{item.session}</span>
              <span className="h-[0.5em] flex-1 overflow-hidden rounded-full bg-white/[0.07]">
                <motion.span
                  initial={false}
                  animate={{ width: active ? `${item.load}%` : "0%" }}
                  transition={{ duration: 0.9, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-full rounded-full"
                  style={{ background: accent }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Coach conversation */}
      <div className="flex flex-1 flex-col gap-[1em]">
        <div className="self-end rounded-[1em] rounded-br-[0.25em] bg-white/[0.08] px-[1em] py-[0.7em] text-[0.95em] text-white">
          How should I progress this week?
        </div>

        <div
          className="rounded-[1em] rounded-bl-[0.25em] border px-[1em] py-[0.8em] text-[0.95em] leading-[1.5] text-white"
          style={{ borderColor: `${accent}40`, background: `${accent}12` }}
        >
          <span
            className="mb-[0.4em] block font-mono text-[0.75em] tracking-[0.2em] uppercase"
            style={{ color: accent }}
          >
            Coach
          </span>
          {typed}
          {!done ? (
            <span
              className="ml-[0.15em] inline-block h-[1em] w-[0.12em] translate-y-[0.15em] animate-pulse"
              style={{ background: accent }}
            />
          ) : null}
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 6 }}
          transition={{ duration: 0.3 }}
          className="mt-auto flex items-center gap-[0.6em] self-start rounded-full border border-white/10 px-[0.9em] py-[0.4em] font-mono text-[0.75em] text-[#a1a1aa]"
        >
          <span style={{ color: accent }}>✓</span>
          Checked against programming rules
        </motion.div>
      </div>
    </div>
  );
}
