import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { hero, site } from "@/data/content";
import { Magnetic } from "@/components/motion/Magnetic";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { StackDiagram } from "@/components/work/StackDiagram";

/*
 * The page's one load sequence, in order:
 * headline words rise (CSS, runs before hydration) -> lede -> buttons -> stack explodes.
 */
export function Hero() {
  const words = hero.headline.split(" ");
  const afterWords = words.length * 70 + 250; // ms, when the last word is mostly in

  return (
    <section
      id="top"
      data-nav=""
      aria-labelledby="hero-title"
      className="container-page grid items-center gap-12 pb-20 pt-12 md:pt-20 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-16"
    >
      <div className="lg:col-span-7">
        <h1 id="hero-title" aria-label={hero.headline} className="max-w-[17ch] text-display font-semibold">
          {words.map((word, i) => (
            <span key={`${word}-${i}`} aria-hidden>
              <span className="word" style={{ "--i": i } as React.CSSProperties}>
                {word}
              </span>
              {i < words.length - 1 && " "}
            </span>
          ))}
        </h1>
        <p
          className="enter mt-6 max-w-[46ch] text-lede text-muted"
          style={{ "--d": `${afterWords}ms` } as React.CSSProperties}
        >
          {hero.subtext}
        </p>
        <div
          className="enter mt-10 flex flex-wrap gap-3"
          style={{ "--d": `${afterWords + 120}ms` } as React.CSSProperties}
        >
          <Magnetic>
            <ButtonLink href="#work">See the work</ButtonLink>
          </Magnetic>
          <Magnetic>
            <ButtonLink href={site.resume} download variant="secondary">
              <DownloadSimple size={18} weight="bold" aria-hidden />
              Download résumé
            </ButtonLink>
          </Magnetic>
        </div>
      </div>

      <div className="lg:col-span-5 lg:pl-6">
        <StackDiagram
          layers={hero.stack}
          trigger="load"
          label="The layers I work across, from the interface down to the database."
        />
      </div>
    </section>
  );
}
