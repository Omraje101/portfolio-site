"use client";

import { m, useScroll, useSpring } from "motion/react";

/** Saffron line along the nav's bottom edge showing how far down the page you are. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <m.div
      aria-hidden
      style={{ scaleX }}
      className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-accent"
    />
  );
}
