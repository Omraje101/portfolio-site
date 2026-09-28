"use client";

import { m, type Variants } from "motion/react";

const EASE = [0.23, 1, 0.32, 1] as const;
const VIEWPORT = { once: true, amount: 0.2 } as const;

/** Fades and lifts its content into place the first time it scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </m.div>
  );
}

/**
 * Section heading reveal: the text wipes up from behind a mask.
 * Renders the heading element itself so the document outline is unchanged.
 */
export function RevealHeading({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) {
  // The in-view check runs on the unclipped <h2>: Chrome measures an element's
  // visibility after its own clip-path, so a fully masked span never "enters".
  return (
    <m.h2 id={id} className={className} initial="hidden" whileInView="shown" viewport={VIEWPORT}>
      <m.span className="inline-block pb-[0.08em]" variants={headingVariants}>
        {children}
      </m.span>
    </m.h2>
  );
}

const headingVariants: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", y: "35%" },
  shown: { clipPath: "inset(0 0 0% 0)", y: "0%", transition: { duration: 0.9, ease: EASE } },
};

const groupVariants: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

type GroupTag = "ul" | "ol" | "div";

/** Container whose RevealItem children enter one after another. */
export function RevealGroup({
  as = "div",
  children,
  className,
}: {
  as?: GroupTag;
  children: React.ReactNode;
  className?: string;
}) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({
  as = "div",
  children,
  className,
}: {
  as?: "li" | "div";
  children: React.ReactNode;
  className?: string;
}) {
  const Tag = m[as];
  return (
    <Tag className={className} variants={itemVariants}>
      {children}
    </Tag>
  );
}
