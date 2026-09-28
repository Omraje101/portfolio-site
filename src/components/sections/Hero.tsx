import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { hero, site } from "@/data/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { StackDiagram } from "@/components/work/StackDiagram";

export function Hero() {
  return (
    <section
      id="top"
      data-nav=""
      aria-labelledby="hero-title"
      className="container-page grid items-center gap-12 pb-20 pt-12 md:pt-20 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-16"
    >
      <div className="lg:col-span-7">
        <p className="text-[0.9375rem] font-medium text-muted">
          {site.name}, {site.role.toLowerCase()}
        </p>
        <h1
          id="hero-title"
          className="mt-5 max-w-[17ch] text-display font-semibold"
        >
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-[46ch] text-lede text-muted">{hero.subtext}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="#work">See the work</ButtonLink>
          <ButtonLink href={site.resume} download variant="secondary">
            <DownloadSimple size={18} weight="bold" aria-hidden />
            Download résumé
          </ButtonLink>
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
