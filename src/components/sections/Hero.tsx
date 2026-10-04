import { ArrowDownRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { hero, site } from "@/data/content";
import { Magnetic } from "@/components/motion/Magnetic";
import { Spotlight } from "@/components/motion/Spotlight";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { StackDiagram } from "@/components/work/StackDiagram";

/*
 * Full-screen hero over a drifting aurora and a blueprint dot grid.
 * Load sequence: status chip -> name rises word by word (CSS, pre-hydration)
 * -> tagline -> buttons -> the stack cross-section explodes.
 */
export function Hero() {
  const nameWords = site.name.split(" ");
  const afterName = nameWords.length * 80 + 450; // ms

  return (
    <section
      id="top"
      data-nav=""
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100dvh] items-center overflow-hidden"
    >
      <div aria-hidden className="aurora -z-10">
        <span />
        <span />
        <span />
      </div>
      <div aria-hidden className="blueprint -z-10" />
      <Spotlight />
      {/* Fade the hero into the page background so the aurora has no hard edge. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-bg" />

      <div className="container-page grid w-full items-center gap-14 pb-16 pt-32 lg:grid-cols-12 lg:gap-10 lg:pt-28">
        <div className="lg:col-span-7">
          <p className="enter glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-3 pr-4 text-sm font-medium" style={{ "--d": "0ms" } as React.CSSProperties}>
            <span aria-hidden className="live-dot relative size-2 rounded-full bg-teal after:absolute after:inset-0 after:rounded-full after:bg-teal" />
            {hero.status}
          </p>

          <h1 id="hero-title" className="mt-6 font-display text-giant font-bold">
            {nameWords.map((word, i) => (
              <span key={word} className="block">
                <span className="word" style={{ "--i": i } as React.CSSProperties}>
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="enter mt-7 max-w-[34ch] text-[clamp(1.25rem,1rem+0.9vw,1.75rem)] font-medium leading-snug text-ink/85"
            style={{ "--d": `${afterName}ms` } as React.CSSProperties}
          >
            {hero.tagline}
          </p>

          <div
            className="enter mt-10 flex flex-wrap gap-3"
            style={{ "--d": `${afterName + 140}ms` } as React.CSSProperties}
          >
            <Magnetic>
              <ButtonLink href="#work">
                See the work
                <ArrowDownRight size={18} weight="bold" aria-hidden />
              </ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink href={site.resume} download variant="secondary">
                <DownloadSimple size={18} weight="bold" aria-hidden />
                Download résumé
              </ButtonLink>
            </Magnetic>
          </div>
        </div>

        <div
          className="enter lg:col-span-5"
          style={{ "--d": `${afterName + 260}ms` } as React.CSSProperties}
        >
          <div className="glass rounded-[var(--radius-panel)] p-4 sm:p-6">
            <StackDiagram
              layers={hero.stack}
              trigger="load"
              label="The layers I work across, from the interface down to the database."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
