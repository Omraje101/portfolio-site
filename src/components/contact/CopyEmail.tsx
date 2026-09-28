"use client";

import { Check, Copy } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (permissions, insecure context); the address stays selectable.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="pressable inline-flex h-10 items-center gap-2 rounded border border-line-strong px-3 text-sm font-medium hover:border-ink hover:bg-surface"
    >
      {copied ? (
        <Check size={16} weight="bold" aria-hidden className="text-accent" />
      ) : (
        <Copy size={16} aria-hidden />
      )}
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
