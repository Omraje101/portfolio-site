"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

const NUMBER = /\d[\d,]*/;

/**
 * Renders text as-is, but counts the first number in it up from zero the
 * first time it scrolls into view. The server-rendered HTML already holds the
 * final value, so crawlers, no-JS and reduced-motion visitors see real numbers.
 */
export function CountUp({ text }: { text: string }) {
  const match = text.match(NUMBER);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();

  const raw = match?.[0];
  const target = raw ? Number(raw.replace(/,/g, "")) : 0;
  const useCommas = raw?.includes(",") ?? false;

  useEffect(() => {
    const el = ref.current;
    if (!el || !raw || reduce) return;
    const format = (v: number) =>
      useCommas ? Math.round(v).toLocaleString("en-US") : String(Math.round(v));

    if (!inView) {
      el.textContent = format(0);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => (el.textContent = format(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, target, useCommas, raw]);

  if (!match || match.index === undefined) return <>{text}</>;

  const before = text.slice(0, match.index);
  const after = text.slice(match.index + match[0].length);

  return (
    <>
      {before}
      {/* Tabular digits stop the width jittering while counting; skipped when the
          number has separators, because this font gives commas a digit-wide slot. */}
      <span ref={ref} className={useCommas ? undefined : "tabular-nums"}>
        {match[0]}
      </span>
      {after}
    </>
  );
}
