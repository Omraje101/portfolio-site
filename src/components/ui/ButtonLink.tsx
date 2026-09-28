import type { ComponentProps } from "react";

type Variant = "primary" | "secondary";

const base =
  "pressable inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded px-5 text-[0.9375rem] font-medium";

// Hover fills sweep in from the left (see .sweep in globals.css).
const variants: Record<Variant, string> = {
  primary: "sweep bg-accent text-accent-ink [--sweep:var(--ink)] hover:text-bg",
  secondary: "sweep border border-line-strong text-ink [--sweep:var(--accent)] hover:border-accent hover:text-accent-ink",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
