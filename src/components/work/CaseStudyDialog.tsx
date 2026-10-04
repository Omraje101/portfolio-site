"use client";

import { ArrowsOut, X } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import type { StackLayer } from "@/data/content";
import { StackDiagram } from "./StackDiagram";

/**
 * "Read case study" button plus a native modal <dialog> (focus trap, Esc and
 * an inert page come from the platform). The detail is server-rendered into
 * the dialog, so it is in the HTML for search engines even while closed.
 * The stack diagram mounts on open so its explode plays each time.
 */
export function CaseStudyDialog({
  title,
  kind,
  stack,
  children,
}: {
  title: string;
  kind: string;
  stack: StackLayer[];
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const titleId = `${title.toLowerCase().replace(/\W+/g, "-")}-dialog-title`;

  function show() {
    ref.current?.showModal();
    setOpen(true);
  }

  function close() {
    ref.current?.close();
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={show}
        aria-haspopup="dialog"
        className="pressable sweep inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-bg [--sweep:var(--accent)] hover:text-accent-ink"
      >
        <ArrowsOut size={16} weight="bold" aria-hidden />
        Read case study
        <span className="sr-only">: {title}</span>
      </button>

      <dialog
        ref={ref}
        aria-labelledby={titleId}
        onClose={() => {
          setOpen(false);
          // Return focus to the button that opened it, wherever the page has moved.
          triggerRef.current?.focus({ preventScroll: true });
        }}
        // Click on the backdrop (outside the panel) closes it.
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="case-dialog m-auto w-[min(72rem,calc(100vw-1.5rem))] max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-[var(--radius-panel)] border border-line bg-surface p-0 text-ink"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-line bg-surface/90 px-5 py-4 backdrop-blur-md sm:px-8">
          <div>
            <h3 id={titleId} className="font-display text-h3 font-bold">
              {title}
            </h3>
            <p className="text-muted">{kind}</p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close case study"
            className="pressable inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line-strong hover:border-accent hover:text-accent"
          >
            <X size={18} weight="bold" aria-hidden />
          </button>
        </div>

        <div className="grid gap-10 px-5 py-8 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-8">{children}</div>
          <aside className="lg:col-span-4">
            <h4 className="font-semibold">Stack</h4>
            <div className="mt-4">
              {open && (
                <StackDiagram
                  layers={stack}
                  trigger="load"
                  label={`${title} stack, from interface down to data.`}
                />
              )}
            </div>
          </aside>
        </div>
      </dialog>
    </>
  );
}
