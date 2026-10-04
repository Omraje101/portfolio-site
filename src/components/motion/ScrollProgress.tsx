"use client";

import { m, useScroll, useSpring } from "motion/react";

/** Matcha-to-butter line along the nav's bottom edge showing how far down the page you are. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <m.div
      aria-hidden
      style={{ scaleX }}
      className="absolute inset-x-6 bottom-0 h-0.5 origin-left rounded-full bg-gradient-to-r from-secondary to-accent"
    />
  );
}
