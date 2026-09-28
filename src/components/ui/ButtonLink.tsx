import type { ComponentProps } from "react";

type Variant = "primary" | "secondary";

const base =
  "pressable inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded px-5 text-[0.9375rem] font-medium";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-ink hover:bg-ink hover:text-bg",
  secondary: "border border-line-strong text-ink hover:border-ink hover:bg-surface",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
