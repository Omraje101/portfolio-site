"use client";

import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

/**
 * About portrait: the cutout sits on a matcha-to-blush glow. As the frame scrolls
 * through the viewport the photo rises into its seat while the glow drifts and
 * turns the other way, for depth. The photo only moves between "slightly low"
 * and "seated", so the cutout never lifts off the frame's bottom edge.
 */
export function ParallaxPhoto({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 0.5], reduce ? [0, 0] : [56, 0], { clamp: true });
  const glowY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-40, 40]);
  const glowRotate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-25, 25]);

  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-[35/41] w-full max-w-md overflow-hidden rounded-[var(--radius-panel)] bg-surface-2 lg:mx-0"
    >
      <m.div
        aria-hidden
        style={{ y: glowY, rotate: glowRotate }}
        className="absolute -inset-x-1/4 bottom-[-30%] h-[95%] rounded-full bg-[conic-gradient(from_180deg,var(--aurora-a),var(--aurora-b),var(--aurora-a))] opacity-70 blur-3xl"
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
