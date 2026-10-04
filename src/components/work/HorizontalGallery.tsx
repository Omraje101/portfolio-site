"use client";

import { m, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

/**
 * Pinned horizontal gallery.
 * - Large screens with a fine pointer: the section pins and vertical scroll
 *   moves the track sideways, 1px of scroll per 1px of travel.
 * - Phones, tablets and reduced motion: a native swipeable row with snap
 *   points; nothing hijacks the scroll.
 */
export function HorizontalGallery({
  header,
  children,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [pinned, setPinned] = useState(false);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({ target: outerRef, offset: ["start start", "end end"] });
  const travel = useMotionValue(0);
  const x = useTransform(() => -scrollYProgress.get() * travel.get());
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    const measure = () => {
      const enable = mq.matches && !reduce;
      setPinned(enable);
      const track = trackRef.current;
      if (!track) return;
      const d = enable ? Math.max(0, track.scrollWidth - window.innerWidth) : 0;
      travel.set(d);
      setDistance(d);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    mq.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
    };
  }, [reduce, travel]);

  return (
    <div
      ref={outerRef}
      className="relative"
      // Pinned: the section is as tall as the sideways travel plus one screen.
      style={pinned ? { height: `calc(${distance}px + 100dvh)` } : undefined}
    >
      <div className={pinned ? "sticky top-0 flex h-[100dvh] flex-col justify-center overflow-hidden" : ""}>
        {header}
        <m.div
          ref={trackRef}
          style={pinned ? { x } : undefined}
          className={
            pinned
              ? "flex w-max gap-8 px-[max(2rem,calc((100vw-80rem)/2+2rem))] pt-10"
              : "flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 pt-8 [scrollbar-width:thin] md:px-8"
          }
        >
          {children}
        </m.div>
        {pinned && (
          <div aria-hidden className="container-page mt-8">
            <div className="h-0.5 overflow-hidden rounded-full bg-line">
              <m.div
                style={{ scaleX: progress }}
                className="h-full origin-left rounded-full bg-gradient-to-r from-teal to-accent"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
