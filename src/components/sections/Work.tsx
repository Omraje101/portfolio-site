import { featuredProjects, type FeaturedProject } from "@/data/content";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ScreenshotSlot } from "@/components/ui/ScreenshotSlot";
import { CaseStudyToggle } from "@/components/work/CaseStudyToggle";
import { StackDiagram } from "@/components/work/StackDiagram";

export function Work() {
  return (
    <section id="work" data-nav="#work" aria-labelledby="work-title" className="container-page py-20 md:py-28">
      <h2 id="work-title" className="text-h2 font-semibold">
        Selected work
      </h2>
      <p className="mt-4 max-w-[52ch] text-lede text-muted">
        Three full-stack apps, each one live and open source.
      </p>

      <div className="mt-14 flex flex-col gap-24 md:mt-20 md:gap-32">
        {featuredProjects.map((project, i) => (
          <CaseStudy key={project.slug} project={project} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function CaseStudy({ project, flip }: { project: FeaturedProject; flip: boolean }) {
  const [main, ...more] = project.screenshots;
  const titleId = `${project.slug}-title`;

  return (
    <article aria-labelledby={titleId} className="border-t border-line pt-8 md:pt-10">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 id={titleId} className="text-h3 font-semibold">
            {project.title}
          </h3>
          <p className="mt-1 text-muted">{project.kind}</p>
        </div>
        <div className="flex gap-6">
          <ExternalLink href={project.live}>Live site</ExternalLink>
          <ExternalLink href={project.code}>Code</ExternalLink>
        </div>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className={`lg:col-span-8 ${flip ? "lg:order-2" : ""}`}>
          <ScreenshotSlot shot={main} sizes="(min-width: 1024px) 66vw, 100vw" />
        </div>
        <div className={`lg:col-span-4 ${flip ? "lg:order-1" : ""}`}>
          <p className="max-w-[48ch] text-lede">{project.summary}</p>
          <div className="mt-8">
            <StackDiagram
              layers={project.stack}
              trigger="scroll"
              label={`${project.title} stack, from interface down to data.`}
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <CaseStudyToggle title={project.title}>
          <div className="grid gap-x-10 gap-y-10 pt-10 md:grid-cols-2">
            {project.features.map((group) => (
              <div key={group.id}>
                <h4 className="font-semibold">{group.title}</h4>
                <ul className="mt-3 space-y-2 text-muted">
                  {group.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {more.length > 0 && (
            <div className="grid gap-6 pt-12 md:grid-cols-2">
              {more.map((shot) => (
                <ScreenshotSlot key={shot.alt} shot={shot} sizes="(min-width: 768px) 50vw, 100vw" />
              ))}
            </div>
          )}
        </CaseStudyToggle>
      </div>
    </article>
  );
}
