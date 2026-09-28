"use client";

import {
  animate,
  domAnimation,
  LazyMotion,
  m,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef } from "react";
import type { StackLayer } from "@/data/content";

const SLAB = 68; // slab height, px
const GAP = 22; // gap between slabs when fully exploded
const DECK = 12; // how much each slab peeks out when assembled

/**
 * Exploded-view drawing of an app's stack, top layer (what users see) first.
 *
 * - trigger "load": assembles, then pulls apart once on mount (hero).
 * - trigger "scroll": pulls apart as the diagram scrolls into view (case studies).
 * Reduced motion: rendered fully exploded, no movement.
 */
export function StackDiagram({
  layers,
  label,
  trigger,
}: {
  layers: StackLayer[];
  label: string;
  trigger: "load" | "scroll";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const loadProgress = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "center 0.6"],
  });
  const scrollProgress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.6 });

  useEffect(() => {
    if (trigger !== "load") return;
    if (reduce) {
      loadProgress.set(1);
      return;
    }
    const controls = animate(loadProgress, 1, {
      type: "spring",
      duration: 1.1,
      bounce: 0.12,
      delay: 0.35,
    });
    return () => controls.stop();
  }, [trigger, reduce, loadProgress]);

  const fixed = useMotionValue(1);
  const progress = reduce ? fixed : trigger === "load" ? loadProgress : scrollProgress;

  const n = layers.length;
  const height = n * SLAB + (n - 1) * GAP;

  return (
    <LazyMotion features={domAnimation} strict>
      <figure ref={ref} className="w-full">
        <figcaption className="sr-only">{label}</figcaption>
        <div className="relative" style={{ height }}>
          {/* Alignment lines between slabs, the dashed "bolts" of an exploded view. */}
          {layers.slice(0, -1).map((_, i) => (
            <Connector key={`c-${i}`} index={i} progress={progress} />
          ))}

          <ol className="relative h-full">
            {layers.map((layer, i) => (
              <Slab key={layer.layer} layer={layer} index={i} count={n} progress={progress} />
            ))}
          </ol>
        </div>
      </figure>
    </LazyMotion>
  );
}

function Slab({
  layer,
  index,
  count,
  progress,
}: {
  layer: StackLayer;
  index: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const transform = useTransform(progress, (p) => {
    const step = DECK + (SLAB + GAP - DECK) * p;
    return `translateY(${index * step}px)`;
  });

  const isTop = index === 0;

  return (
    <m.li
      style={{ transform, zIndex: count - index, height: SLAB }}
      className={`absolute inset-x-0 top-0 flex flex-col justify-center gap-1 rounded border bg-surface px-4 ${
        isTop ? "border-accent" : "border-line-strong/60"
      }`}
    >
      <span className="text-[0.8125rem] leading-none text-muted">{layer.layer}</span>
      <span className="flex flex-wrap gap-x-3 font-mono text-[0.8125rem] leading-tight text-ink">
        {layer.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </span>
    </m.li>
  );
}

function Connector({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.55, 1], [0, 1]);
  const top = (index + 1) * SLAB + index * GAP;

  return (
    <m.div
      aria-hidden
      style={{ opacity, top, height: GAP }}
      className="pointer-events-none absolute inset-x-6 flex justify-between"
    >
      <span className="h-full border-l border-dashed border-line-strong" />
      <span className="h-full border-l border-dashed border-line-strong" />
    </m.div>
  );
}
