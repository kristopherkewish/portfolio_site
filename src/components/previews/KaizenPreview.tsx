"use client";

import { useEffect, useState } from "react";
import type { PreviewProps } from "./types";

const NAV = ["Members", "Classes", "Gradings", "Payments"];

const MEMBERS = [
  { name: "Mia T.", belt: "#facc15", klass: "Juniors", status: "Paid" },
  { name: "Arjun P.", belt: "#22c55e", klass: "Adults", status: "Paid" },
  { name: "Leo K.", belt: "#f4f4f5", klass: "Juniors", status: "Trial" },
  { name: "Sofia R.", belt: "#3b82f6", klass: "Adults", status: "Due" },
  { name: "Noah W.", belt: "#f97316", klass: "Teens", status: "Paid" },
];

const STATUS_COLOUR: Record<string, string> = {
  Paid: "#86efac",
  Due: "#fca5a5",
  Trial: "#fcd34d",
};

export function KaizenPreview({ active, accent }: PreviewProps) {
  const [row, setRow] = useState(1);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setRow((r) => (r + 1) % MEMBERS.length), 1500);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div className="flex h-full bg-[#110a05]">
      {/* Sidebar */}
      <div className="flex w-[22%] flex-col gap-[0.5em] border-r border-white/10 p-[1.4em]">
        <span className="mb-[0.8em] text-[1.1em] font-bold text-white">
          kaizen<span style={{ color: accent }}>.</span>
        </span>
        {NAV.map((item, i) => (
          <span
            key={item}
            className="rounded-[0.5em] px-[0.7em] py-[0.45em] text-[0.9em]"
            style={
              i === 0
                ? { background: `${accent}26`, color: "#fff" }
                : { color: "rgba(161,161,170,0.8)" }
            }
          >
            {item}
          </span>
        ))}
      </div>

      {/* Members table */}
      <div className="flex flex-1 flex-col p-[1.6em]">
        <div className="flex items-center justify-between">
          <span className="text-[1.3em] font-semibold text-white">Members</span>
          <span
            className="rounded-full px-[0.9em] py-[0.35em] text-[0.8em] font-semibold text-[#110a05]"
            style={{ background: accent }}
          >
            + Add member
          </span>
        </div>

        <div className="mt-[1.2em] grid grid-cols-[1.6fr_1fr_1fr] px-[0.8em] font-mono text-[0.72em] tracking-[0.18em] text-[#a1a1aa]/60 uppercase">
          <span>Name</span>
          <span>Class</span>
          <span className="text-right">Status</span>
        </div>

        <div className="mt-[0.5em] flex flex-1 flex-col justify-between">
          {MEMBERS.map((member, i) => (
            <div
              key={member.name}
              className="grid grid-cols-[1.6fr_1fr_1fr] items-center rounded-[0.6em] px-[0.8em] py-[0.6em] text-[0.95em] transition-colors duration-500"
              style={{ background: i === row ? "rgba(255,255,255,0.06)" : "transparent" }}
            >
              <span className="flex items-center gap-[0.7em] text-white">
                <span
                  className="h-[0.45em] w-[1.6em] rounded-full"
                  style={{ background: member.belt }}
                />
                {member.name}
              </span>
              <span className="text-[#a1a1aa]">{member.klass}</span>
              <span className="text-right">
                <span
                  className="rounded-full px-[0.7em] py-[0.2em] font-mono text-[0.78em]"
                  style={{
                    color: STATUS_COLOUR[member.status],
                    background: `${STATUS_COLOUR[member.status]}1f`,
                  }}
                >
                  {member.status}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
