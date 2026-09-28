"use client";

import { LazyMotion, MotionConfig } from "motion/react";

const loadFeatures = () => import("./features").then((mod) => mod.default);

/**
 * One place for motion settings.
 * - LazyMotion + `m` components keep the Motion bundle small; the animation
 *   features themselves load asynchronously after hydration.
 * - reducedMotion="user": when the OS asks for less motion, Motion skips
 *   transform animations but keeps opacity, so reveals still happen, just without movement.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
