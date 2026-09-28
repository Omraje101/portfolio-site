import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { ComponentProps } from "react";

/** Text link that opens a new tab, with an icon and a screen-reader hint. */
export function ExternalLink({
  children,
  className = "",
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-11 items-center gap-1 font-medium text-ink ${className}`}
      {...props}
    >
      <span className="link-draw">{children}</span>
      <ArrowUpRight
        size={16}
        weight="bold"
        aria-hidden
        className="text-accent transition-transform duration-200 ease-(--ease-out) group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
