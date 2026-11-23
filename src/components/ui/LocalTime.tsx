"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-AU", {
  timeZone: "Australia/Melbourne",
  hour: "numeric",
  minute: "2-digit",
});

const subscribe = (onChange: () => void) => {
  const id = setInterval(onChange, 10_000);
  return () => clearInterval(id);
};

const getSnapshot = () => formatter.format(new Date());
const getServerSnapshot = () => "";

/** Current time in Melbourne, kept live. Renders nothing until hydrated. */
export function LocalTime() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!time) return null;
  return (
    <span className="text-[var(--color-fg-subtle)]">
      {" · "}
      <time>{time}</time> local
    </span>
  );
}
