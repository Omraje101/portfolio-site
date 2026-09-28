"use client";

import { Check, Copy } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

type Status = "idle" | "copied" | "failed";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status !== "copied") return;
    const t = setTimeout(() => setStatus("idle"), 2000);
    return () => clearTimeout(t);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      // Clipboard can be blocked (permissions, insecure context).
      setStatus("failed");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="pressable sweep inline-flex h-10 items-center gap-2 rounded border border-line-strong px-3 text-sm font-medium [--sweep:var(--accent)] hover:border-accent hover:text-accent-ink"
      >
        {status === "copied" ? (
          <Check size={16} weight="bold" aria-hidden className="text-accent" />
        ) : (
          <Copy size={16} aria-hidden />
        )}
        {status === "copied" ? "Copied" : "Copy email"}
      </button>
      <p aria-live="polite" className={status === "failed" ? "basis-full text-sm text-muted" : "sr-only"}>
        {status === "copied" && "Email address copied."}
        {status === "failed" && "Couldn’t copy automatically. Select the address above and copy it."}
      </p>
    </>
  );
}
