import Image from "next/image";
import type { Screenshot } from "@/data/content";

/**
 * Renders a project screenshot, or a clearly marked placeholder slot
 * (with the capture hint and target size) until one is added in content.ts.
 */
export function ScreenshotSlot({
  shot,
  sizes,
  priority = false,
  className = "",
}: {
  shot: Screenshot;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const ratio = `${shot.width} / ${shot.height}`;

  if (shot.src) {
    return (
      <div
        className={`overflow-hidden rounded border border-line bg-surface ${className}`}
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          sizes={sizes}
          priority={priority}
          className="h-full w-full object-cover object-top"
        />
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
