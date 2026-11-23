"use client";

import { useEffect, useState } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa6";

type Props = {
  email: string;
};

export function CopyEmail({ email }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard unavailable (permissions / insecure context): the mailto link still works.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/60 px-4 py-2 font-mono text-xs tracking-wider text-[var(--color-fg-muted)] uppercase transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]"
    >
      {copied ? (
        <FaCheck aria-hidden="true" className="text-[var(--color-accent)]" />
      ) : (
        <FaRegCopy aria-hidden="true" />
      )}
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
