"use client";

import { m, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useRef } from "react";

const PULL = 0.3; // fraction of the pointer offset the element follows
const MAX = 10; // px cap so it never drifts far from its slot

/**
 * Pulls its child gently toward the pointer on hover, then springs back.
 * Pointer (mouse/pen) only; touch and reduced motion get a still element.
 */
export function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function onPointerMove(e: React.PointerEvent) {
    if (reduce || e.pointerType === "touch" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const clamp = (v: number) => Math.max(-MAX, Math.min(MAX, v));
    x.set(clamp((e.clientX - (r.left + r.width / 2)) * PULL));
    y.set(clamp((e.clientY - (r.top + r.height / 2)) * PULL));
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <m.div
      ref={ref}
      className="inline-flex"
      style={{ x: sx, y: sy }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
    </m.div>
  );
}
