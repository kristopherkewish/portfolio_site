"use client";

import { motion } from "framer-motion";
import type { PreviewProps } from "./types";

const TILES = [
  { label: "Requests", path: "M0 22 L12 18 L24 20 L36 11 L48 14 L60 6 L72 9 L84 3" },
  { label: "Latency", path: "M0 8 L12 12 L24 9 L36 16 L48 13 L60 19 L72 15 L84 21" },
  { label: "Jobs", path: "M0 18 L12 18 L24 10 L36 10 L48 15 L60 7 L72 7 L84 4" },
];

const CHART = "M0 70 C30 62 45 30 75 38 S120 74 150 50 S200 8 230 22 S275 54 300 30";

const SERVICES = ["Scheduled jobs", "Analytics sync", "Deployments", "Alerts"];

export function OpsHubPreview({ active, accent }: PreviewProps) {
  const draw = { pathLength: active ? 1 : 0, opacity: active ? 1 : 0 };

  return (
    <div className="flex h-full flex-col gap-[1.2em] bg-[#04101a] p-[2em]">
      <div className="grid grid-cols-3 gap-[1.2em]">
        {TILES.map((tile, i) => (
          <div
            key={tile.label}
            className="rounded-[0.9em] border border-white/10 bg-white/[0.03] p-[1em]"
          >
            <span className="font-mono text-[0.75em] tracking-[0.2em] text-[#a1a1aa]/70 uppercase">
              {tile.label}
            </span>
            <svg viewBox="0 0 84 24" className="mt-[0.7em] w-full overflow-visible" fill="none">
              <motion.path
                d={tile.path}
                stroke={accent}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={false}
                animate={draw}
                transition={{ duration: 1.2, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>
          </div>
        ))}
      </div>

      <div className="flex min-h-0 flex-1 gap-[1.2em]">
        <div className="flex flex-1 flex-col rounded-[0.9em] border border-white/10 bg-white/[0.03] p-[1em]">
          <span className="font-mono text-[0.75em] tracking-[0.2em] text-[#a1a1aa]/70 uppercase">
            Customer activity
          </span>
          <svg
            viewBox="0 0 300 80"
            preserveAspectRatio="none"
            className="mt-[0.6em] min-h-0 w-full flex-1"
            fill="none"
          >
            <defs>
              <linearGradient id="ops-hub-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
                <stop offset="100%" stopColor={accent} stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d={`${CHART} L300 80 L0 80 Z`}
              fill="url(#ops-hub-fill)"
              initial={false}
              animate={{ opacity: active ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            />
            <motion.path
              d={CHART}
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={false}
              animate={draw}
              transition={{ duration: 1.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
        </div>

        <div className="flex w-[34%] flex-col justify-between rounded-[0.9em] border border-white/10 bg-white/[0.03] p-[1em]">
          <span className="font-mono text-[0.75em] tracking-[0.2em] text-[#a1a1aa]/70 uppercase">
            Operations
          </span>
          {SERVICES.map((service, i) => (
            <div key={service} className="flex items-center gap-[0.7em] text-[0.9em] text-white">
              <span className="relative flex h-[0.55em] w-[0.55em]">
                {active ? (
                  <span
                    className="absolute inset-0 animate-ping rounded-full bg-[#86efac] opacity-60"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                ) : null}
                <span className="relative h-full w-full rounded-full bg-[#86efac]" />
              </span>
              {service}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
