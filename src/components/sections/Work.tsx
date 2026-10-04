import { featuredProjects, type FeaturedProject } from "@/data/content";
import { Reveal, RevealHeading } from "@/components/motion/Reveal";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ScreenshotSlot } from "@/components/ui/ScreenshotSlot";
import { CaseStudyDialog } from "@/components/work/CaseStudyDialog";
import { HorizontalGallery } from "@/components/work/HorizontalGallery";

export function Work() {
  return (
    <section id="work" data-nav="#work" aria-labelledby="work-title" className="relative py-16 lg:py-0">
      <HorizontalGallery
        header={
          <div className="container-page flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <RevealHeading id="work-title" className="font-display text-h2 font-bold">
              Selected work
            </RevealHeading>
            <Reveal delay={0.1}>
              <p className="max-w-[38ch] text-lede text-muted md:text-right">
                Three full-stack apps, each one live and open source.
              </p>
            </Reveal>
          </div>
        }
      >
        {featuredProjects.map((project) => (
          <ProjectSlide key={project.slug} project={project} />
        ))}
      </HorizontalGallery>
    </section>
  );
}

function ProjectSlide({ project }: { project: FeaturedProject }) {
  const [main, ...more] = project.screenshots;
  const titleId = `${project.slug}-title`;
  const tech = project.stack.flatMap((l) => l.tech);

  return (
    <article
      aria-labelledby={titleId}
      // Sized by the viewport height too, so the whole card fits on short screens.
      className="relative w-[86vw] shrink-0 snap-center sm:w-[78vw] lg:w-[min(68vw,calc((100dvh-15rem)*1.83))]"
    >
      <div className="glass rounded-[var(--radius-panel)] p-2.5 sm:p-3">
        <ScreenshotSlot
          shot={main}
          href={project.live}
          linkLabel={`Open the ${project.title} live site`}
          sizes="(min-width: 1024px) 68vw, 86vw"
         
        />
      </div>

      {/* Caption: overlaid on the screenshot on large screens, stacked below on small ones. */}
      <div className="glass mt-3 rounded-[var(--radius-panel)] p-5 lg:absolute lg:bottom-6 lg:left-6 lg:mt-0 lg:max-w-[27rem] lg:bg-surface/80 lg:p-6">
        <h3 id={titleId} className="font-display text-h3 font-bold">
          {project.title}
        </h3>
        <p className="mt-1 text-muted">{project.kind}</p>
        <p className="mt-3 text-[0.9375rem]">{project.summary}</p>
        <ul aria-label="Tech used" className="mt-4 flex flex-wrap gap-1.5 lg:hidden">
          {tech.slice(0, 6).map((t) => (
            <li key={t} className="rounded-full border border-line-strong/50 px-2.5 py-0.5 font-mono text-xs text-ink/85">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          <CaseStudyDialog title={project.title} kind={project.kind} stack={project.stack}>
            <p className="text-lede">{project.summary}</p>
            <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {project.features.map((group) => (
                <div key={group.id}>
                  <h4 className="font-semibold">{group.title}</h4>
                  <ul className="mt-3 space-y-2 text-muted">
                    {group.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span aria-hidden className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {more.length > 0 && (
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {more.map((shot) => (
                  <ScreenshotSlot
                    key={shot.alt}
                    shot={shot}
                    href={project.live}
                    linkLabel={`Open the ${project.title} live site`}
                    sizes="(min-width: 768px) 30rem, 90vw"
                   
                  />
                ))}
              </div>
            )}
            <div className="mt-8 flex gap-6">
              <ExternalLink href={project.live}>Live site</ExternalLink>
              <ExternalLink href={project.code}>Code</ExternalLink>
            </div>
          </CaseStudyDialog>
          <ExternalLink href={project.live}>Live site</ExternalLink>
          <ExternalLink href={project.code}>Code</ExternalLink>
        </div>
      </div>
    </article>
  );
}
