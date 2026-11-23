"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { PreviewProps } from "./types";

const SETS = ["80 kg × 5", "80 kg × 5", "82.5 kg × 4"];
const WEEK = [45, 70, 30, 85, 55, 0, 65];
const SYNCED = SETS.length + 1;

export function BwbCoachPreview({ active, accent }: PreviewProps) {
  // 0..3 = sets logged while offline, 4 = back online and synced
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setStep((s) => (s + 1) % (SYNCED + 2)), 1100);
    return () => clearInterval(id);
  }, [active]);

  const logged = Math.min(step, SETS.length);
  const synced = step >= SYNCED;

  return (
    <div className="flex h-full items-center gap-[2em] bg-[#12070b] px-[2.4em] py-[1.6em]">
      {/* Trainee's phone */}
      <div className="flex h-full w-[36%] flex-col rounded-[1.8em] border border-white/15 bg-[#0b0b10] p-[1em]">
        <div className="mx-auto h-[0.35em] w-[28%] rounded-full bg-white/15" />
        <div className="mt-[1em] flex items-center justify-between">
          <span className="text-[1.15em] font-semibold text-white">Back squat</span>
          <span
            className="rounded-full px-[0.7em] py-[0.25em] font-mono text-[0.7em] tracking-wide transition-colors duration-300"
            style={{
              color: synced ? "#86efac" : "#fbbf24",
              background: synced ? "rgba(134,239,172,0.12)" : "rgba(251,191,36,0.12)",
            }}
          >
            {synced ? "Synced" : logged > 0 ? `Offline · ${logged} queued` : "Offline"}
          </span>
        </div>

        <div className="mt-[1em] flex flex-col gap-[0.6em]">
          {SETS.map((set, i) => {
            const done = i < logged;
            return (
              <div
                key={i}
                className="flex items-center justify-between rounded-[0.7em] border px-[0.8em] py-[0.7em] transition-colors duration-300"
                style={{
                  borderColor: done ? `${accent}66` : "rgba(255,255,255,0.08)",
                  background: done ? `${accent}1f` : "transparent",
                }}
              >
                <span className="font-mono text-[0.75em] text-[#a1a1aa]">SET {i + 1}</span>
                <span className="text-[0.95em] text-white">{set}</span>
                <motion.span
                  initial={false}
                  animate={{ scale: done ? 1 : 0.6, opacity: done ? 1 : 0.25 }}
                  transition={{ type: "spring", stiffness: 420, damping: 18 }}
                  className="grid h-[1.4em] w-[1.4em] place-items-center rounded-full text-[0.8em] font-bold text-[#12070b]"
                  style={{ background: done ? accent : "rgba(255,255,255,0.3)" }}
                >
                  ✓
                </motion.span>
              </div>
            );
          })}
        </div>

        <div
          className="mt-auto rounded-[0.7em] py-[0.7em] text-center text-[0.9em] font-semibold text-white"
          style={{ background: accent }}
        >
          Finish session
        </div>
      </div>

      {/* Coach's view */}
      <div className="flex h-full flex-1 flex-col gap-[1em]">
        <div className="flex-1 rounded-[1em] border border-white/10 bg-white/[0.03] p-[1.2em]">
          <span className="font-mono text-[0.8em] tracking-[0.2em] text-[#a1a1aa]/70 uppercase">
            Coach review · this week
          </span>
          <div className="mt-[1em] flex h-[62%] items-end gap-[0.7em]">
            {WEEK.map((height, i) => (
              <motion.span
                key={i}
                initial={false}
                animate={{ height: active ? `${Math.max(height, 4)}%` : "4%" }}
                transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 rounded-t-[0.3em]"
                style={{ background: height ? accent : "rgba(255,255,255,0.12)", opacity: 0.45 + height / 180 }}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: synced ? 1 : 0.35, y: synced ? 0 : 4 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-[0.8em] rounded-[1em] border border-white/10 bg-white/[0.03] px-[1.2em] py-[0.9em]"
        >
          <span className="h-[0.6em] w-[0.6em] rounded-full bg-[#86efac]" />
          <span className="text-[0.95em] text-white">Session received</span>
          <span className="ml-auto font-mono text-[0.75em] text-[#a1a1aa]">
            {synced ? "just now" : "waiting"}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
