"use client";

import { motion } from "framer-motion";
import type { PreviewProps } from "./types";

const HOURS = ["09", "10", "11", "12", "13", "14"];

// start / length are in hours from the top of the timeline
const BLOCKS = [
  { label: "Deep work", start: 0.1, length: 1.7, opacity: 0.85, left: "0", right: "30%" },
  { label: "Stand-up", start: 2.0, length: 0.5, opacity: 0.5, left: "0", right: "55%" },
  { label: "Review PRs", start: 2.0, length: 1.0, opacity: 0.35, left: "48%", right: "0" },
  { label: "Lunch", start: 3.2, length: 0.8, opacity: 0.22, left: "0", right: "40%" },
  { label: "Ship it", start: 4.2, length: 1.6, opacity: 0.65, left: "0", right: "15%" },
];

const WEEK = [
  [3, 2, 4],
  [5, 2],
  [2, 3, 2],
  [4, 4],
  [3, 1, 2],
];

export function TimeboxPreview({ active, accent }: PreviewProps) {
  return (
    <div className="flex h-full gap-[1.6em] bg-[#0c0a17] p-[2em]">
      {/* Day timeline */}
      <div className="relative flex-1">
        {HOURS.map((hour, i) => (
          <div
            key={hour}
            className="absolute right-0 left-0 flex items-start gap-[0.8em]"
            style={{ top: `${(i / HOURS.length) * 100}%` }}
          >
            <span className="w-[2.6em] -translate-y-1/2 font-mono text-[0.85em] text-[#a1a1aa]/60">
              {hour}:00
            </span>
            <span className="h-px flex-1" style={{ background: `${accent}26` }} />
          </div>
        ))}

        <div className="absolute inset-y-0 right-0 left-[3.6em]">
          {BLOCKS.map((block, i) => (
            <motion.div
              key={block.label}
              initial={false}
              animate={active ? { opacity: 1, scaleX: 1 } : { opacity: 0.6, scaleX: 0.96 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="absolute origin-left"
              style={{
                top: `${(block.start / HOURS.length) * 100}%`,
                height: `${(block.length / HOURS.length) * 100}%`,
                left: block.left,
                right: block.right,
                padding: "0.2em 0",
              }}
            >
              <div
                className="flex h-full items-start rounded-[0.5em] px-[0.8em] py-[0.5em] text-[0.95em] font-medium text-white"
                style={{
                  background: `color-mix(in oklab, ${accent} ${block.opacity * 100}%, #0c0a17)`,
                }}
              >
                {block.label}
              </div>
            </motion.div>
          ))}

          {/* The "now" line sweeping through the day */}
          <motion.div
            className="absolute right-0 left-0 flex items-center"
            initial={false}
            animate={active ? { top: ["4%", "96%"] } : { top: "38%" }}
            transition={
              active ? { duration: 18, ease: "linear", repeat: Infinity } : { duration: 0 }
            }
          >
            <span className="h-[0.7em] w-[0.7em] -translate-x-1/2 rounded-full bg-[#F472B6]" />
            <span className="h-[0.14em] flex-1 bg-[#F472B6]" />
          </motion.div>
        </div>
      </div>

      {/* Week overview */}
      <div className="flex w-[26%] flex-col rounded-[0.8em] border border-white/10 bg-white/[0.03] p-[1em]">
        <span className="font-mono text-[0.8em] tracking-[0.2em] text-[#a1a1aa]/70 uppercase">
          This week
        </span>
        <div className="mt-[0.9em] flex flex-1 gap-[0.45em]">
          {WEEK.map((day, d) => (
            <div key={d} className="flex flex-1 flex-col gap-[0.35em]">
              {day.map((size, b) => (
                <motion.span
                  key={b}
                  initial={false}
                  animate={{ opacity: active ? 1 : 0.4 }}
                  transition={{ duration: 0.5, delay: 0.3 + d * 0.07 + b * 0.05 }}
                  className="rounded-[0.3em]"
                  style={{
                    flexGrow: size,
                    background: `color-mix(in oklab, ${accent} ${30 + ((d + b) % 3) * 25}%, #0c0a17)`,
                  }}
                />
              ))}
              <span className="grow-[2]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
