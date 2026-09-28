"use client";

import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

/**
 * About portrait: as the plate scrolls through the viewport the photo rises
 * into its seat while the tinted backdrop drifts the other way, for depth.
 * The photo only moves between "slightly low" and "seated", so the cutout
 * never lifts off the plate's bottom edge.
 */
export function ParallaxPhoto({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 0.5], reduce ? [0, 0] : [48, 0], { clamp: true });
  const glowY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-30, 30]);

  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-[35/41] max-w-md overflow-hidden rounded border border-line bg-surface lg:mx-0"
    >
      <m.div
        aria-hidden
        style={{ y: glowY }}
        className="absolute inset-x-0 -bottom-8 h-3/4 bg-gradient-to-t from-accent-tint to-transparent"
      />
      <m.div style={{ y: photoY }} className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          width={700}
          height={820}
          sizes="(min-width: 480px) 28rem, 100vw"
          className="h-full w-full object-contain object-bottom"
        />
      </m.div>
    </div>
  );
}
