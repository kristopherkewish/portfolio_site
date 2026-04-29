import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Chip({ children, className }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/60 px-3 py-1 font-mono text-xs tracking-wide text-[var(--color-fg-muted)] ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
