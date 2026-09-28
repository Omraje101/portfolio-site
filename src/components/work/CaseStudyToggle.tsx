"use client";

import { Plus } from "@phosphor-icons/react";
import { useId, useState } from "react";

/**
 * "Read case study" disclosure. The detail stays in the DOM when closed
 * (inert + collapsed) so it is still indexed, and expands in place.
 */
export function CaseStudyToggle({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const regionId = useId();

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={regionId}
        onClick={() => setOpen((o) => !o)}
        className="pressable group inline-flex h-12 items-center gap-3 rounded border border-line-strong pl-4 pr-5 font-medium hover:border-ink hover:bg-surface"
      >
        <Plus
          size={18}
          weight="bold"
          aria-hidden
          className={`text-accent transition-transform duration-200 ease-(--ease-out) ${open ? "rotate-45" : ""}`}
        />
        {open ? "Close case study" : "Read case study"}
        <span className="sr-only">: {title}</span>
      </button>

      <div
        id={regionId}
        role="region"
        aria-label={`${title} case study`}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-(--ease-out) ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
