"use client";

import { List, X } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

type Item = { label: string; href: string };

/** Small-screen menu: a disclosure panel under the nav. Esc or a link closes it. */
export function MobileMenu({ items, resume }: { items: Item[]; resume: string }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !buttonRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="pressable inline-flex size-11 items-center justify-center rounded hover:bg-surface"
      >
        {open ? <X size={22} aria-hidden /> : <List size={22} aria-hidden />}
      </button>

      <div
        ref={panelRef}
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-16 border-b border-line bg-bg px-4 pb-6 pt-2 motion-safe:animate-[menu-in_200ms_var(--ease-out)]"
      >
        <ul className="flex flex-col">
          {items.map((item) => (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-14 items-center text-lg font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={resume}
          download
          className="pressable mt-4 inline-flex h-12 w-full items-center justify-center rounded bg-accent font-medium text-accent-ink"
        >
          Download résumé
        </a>
      </div>
    </>
  );
}
