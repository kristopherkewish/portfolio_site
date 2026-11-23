"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { PreviewProps } from "./types";

const DESTINATIONS = [
  "Flinders Street",
  "Sunbury",
  "Werribee",
  "Williamstown",
  "Flinders Street",
  "Watergardens",
  "Laverton",
];

type Row = { id: number; mins: number };

const destination = (id: number) => DESTINATIONS[id % DESTINATIONS.length];
const platform = (id: number) => (id % 4) + 1;
const isLate = (id: number) => id % 4 === 2;

const initialRows: Row[] = [
  { id: 0, mins: 1 },
  { id: 1, mins: 4 },
  { id: 2, mins: 7 },
  { id: 3, mins: 11 },
  { id: 4, mins: 16 },
];

/** Advance the board one "minute": everything counts down, departed trains roll off. */
const tick = (rows: Row[]): Row[] => {
  const next = rows.map((r) => ({ ...r, mins: r.mins - 1 }));
  if (next[0].mins < 0) {
    const last = next[next.length - 1];
    next.shift();
    next.push({ id: last.id + 1, mins: last.mins + 3 + (last.id % 3) * 2 });
  }
  return next;
};

const clock = new Intl.DateTimeFormat("en-AU", {
  timeZone: "Australia/Melbourne",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export function RunLatePreview({ active }: PreviewProps) {
  const [rows, setRows] = useState(initialRows);
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    if (!active) return;
    const board = setInterval(() => setRows(tick), 1700);
    const seconds = setInterval(() => setTime(clock.format(new Date())), 1000);
    return () => {
      clearInterval(board);
      clearInterval(seconds);
    };
  }, [active]);

  return (
    <div
      className="flex h-full flex-col bg-[#0a0703] p-[2em] font-mono text-[#F59E0B]"
      style={{ textShadow: "0 0 0.6em rgba(245, 158, 11, 0.55)" }}
    >
      <div className="flex items-baseline justify-between border-b border-[#F59E0B]/25 pb-[0.9em]">
        <span className="text-[1.5em] font-semibold tracking-[0.18em] uppercase">Departures</span>
        <span className="text-[1.3em] tabular-nums opacity-80">{time}</span>
      </div>

      <div className="mt-[0.9em] grid grid-cols-[1fr_4em_6em] gap-x-[1em] text-[0.85em] tracking-[0.2em] uppercase opacity-50">
        <span>Destination</span>
        <span className="text-center">Plat</span>
        <span className="text-right">Departs</span>
      </div>

      <div className="relative mt-[0.4em] flex-1 overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          {rows.map((row) => (
            <motion.div
              key={row.id}
              layout
              initial={{ opacity: 0, y: "60%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: "-6%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-[1fr_4em_6em] items-center gap-x-[1em] border-b border-[#F59E0B]/10 py-[0.72em] text-[1.45em]"
            >
              <span className="truncate">
                {destination(row.id)}
                {isLate(row.id) ? (
                  <span
                    className="ml-[0.8em] text-[0.7em] text-[#F87171]"
                    style={{ textShadow: "0 0 0.6em rgba(248, 113, 113, 0.6)" }}
                  >
                    +3 late
                  </span>
                ) : null}
              </span>
              <span className="text-center opacity-70">{platform(row.id)}</span>
              <span className="text-right tabular-nums">
                {row.mins <= 0 ? <span className="animate-pulse">NOW</span> : `${row.mins} min`}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
