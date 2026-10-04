import type { ComponentProps } from "react";

type Variant = "primary" | "secondary";

const base =
  "pressable inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-[0.9375rem] font-semibold";

// Hover fills sweep in from the left (see .sweep in globals.css).
const variants: Record<Variant, string> = {
  primary: "sweep bg-accent text-accent-ink [--sweep:var(--ink)] hover:text-bg",
  secondary: "glass sweep text-ink [--sweep:var(--secondary)] hover:text-accent-ink",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
