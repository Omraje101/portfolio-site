"use client";

import { Pause, Play } from "@phosphor-icons/react";
import { useState } from "react";
import { skills } from "@/data/content";

/**
 * The tech stack scrolling past in one continuous band. Pauses on hover, and
 * the button pauses it for keyboard and touch users (WCAG 2.2.2). Reduced
 * motion: CSS leaves it still.
 */
export function Marquee() {
  const [paused, setPaused] = useState(false);
  const items = skills.flatMap((g) => g.items);

  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 font-display text-2xl font-semibold tracking-tight text-ink/80 md:text-3xl">
            {item}
          </span>
          <span aria-hidden className="size-1.5 rounded-full bg-gradient-to-br from-teal to-accent" />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Technologies I use" className="marquee relative border-y border-line py-6">
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track" style={{ animationPlayState: paused ? "paused" : undefined }}>
          {row(false)}
          {row(true)}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? "Play technology ticker" : "Pause technology ticker"}
        className="pressable glass absolute right-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-ink motion-reduce:hidden"
      >
        {paused ? <Play size={14} weight="fill" aria-hidden /> : <Pause size={14} weight="fill" aria-hidden />}
      </button>
    </section>
  );
}
