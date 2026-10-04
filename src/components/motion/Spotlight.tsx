"use client";

import { m, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect } from "react";

/**
 * A soft matcha glow that trails the pointer across the whole page. Fixed to
 * the viewport and layered behind the content, so it shows through the glass
 * panels. Mouse/pen only; touch and reduced motion get no glow. Motion values
 * only, so pointer movement never re-renders React.
 */
export function Spotlight() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 120, damping: 24, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 24, mass: 0.6 });
  const opacity = useSpring(0, { stiffness: 120, damping: 24 });
  const background = useMotionTemplate`radial-gradient(560px circle at ${sx}px ${sy}px, color-mix(in oklab, var(--accent) 20%, transparent), transparent 70%)`;

  useEffect(() => {
    if (reduce || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      x.set(e.clientX);
      y.set(e.clientY);
      opacity.set(1);
    };
    // Fade out when the pointer leaves the window.
    const onLeave = () => opacity.set(0);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce, x, y, opacity]);

  return (
    <m.div
      aria-hidden
      style={{ background, opacity }}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
