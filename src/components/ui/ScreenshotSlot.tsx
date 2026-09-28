import Image from "next/image";
import type { Screenshot } from "@/data/content";

/**
 * Renders a project screenshot, or a clearly marked placeholder slot
 * (with the capture hint and target size) until one is added in content.ts.
 * With `href`, a real screenshot becomes a link that lifts on hover;
 * placeholders are never links.
 */
export function ScreenshotSlot({
  shot,
  sizes,
  href,
  linkLabel,
  priority = false,
  className = "",
}: {
  shot: Screenshot;
  sizes: string;
  href?: string;
  linkLabel?: string;
  priority?: boolean;
  className?: string;
}) {
  const ratio = `${shot.width} / ${shot.height}`;

  if (shot.src) {
    const image = (
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        sizes={sizes}
        priority={priority}
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-(--ease-out) group-hover:scale-[1.02]"
      />
    );
    const frame = `overflow-hidden rounded border border-line bg-surface ${className}`;

    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={linkLabel ? `${linkLabel} (opens in a new tab)` : undefined}
          className={`group shot-link block ${frame}`}
          style={{ aspectRatio: ratio }}
        >
          {image}
        </a>
      );
    }

    return (
      <div className={frame} style={{ aspectRatio: ratio }}>
        {image}
      </div>
    );
  }

  return (
    <figure
      className={`flex flex-col justify-between rounded border border-dashed border-line-strong bg-surface p-4 text-muted sm:p-5 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <figcaption className="text-sm font-medium text-ink">Screenshot to add</figcaption>
      <p className="max-w-[40ch] text-sm leading-snug">{shot.hint}</p>
      <p className="font-mono text-xs">
        {shot.width} x {shot.height}
      </p>
    </figure>
  );
}
