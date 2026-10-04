"use client";

import { m, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

/**
 * A soft matcha glow that trails the pointer across its parent section.
 * Mouse/pen only; touch and reduced motion get no glow. Motion values only,
 * so pointer movement never re-renders React.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 120, damping: 24, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 24, mass: 0.6 });
  const background = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, color-mix(in oklab, var(--accent) 22%, transparent), transparent 70%)`;

  useEffect(() => {
    const host = ref.current?.parentElement;
    if (!host || reduce || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
    };
    const onLeave = () => {
      x.set(-1000);
      y.set(-1000);
    };
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce, x, y]);

  return <m.div ref={ref} aria-hidden style={{ background }} className="pointer-events-none absolute inset-0" />;
}
