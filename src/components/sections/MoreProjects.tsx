import { Trophy } from "@phosphor-icons/react/dist/ssr";
import { moreProjects } from "@/data/content";
import { RevealGroup, RevealHeading, RevealItem } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ScreenshotSlot } from "@/components/ui/ScreenshotSlot";

// Checkerboard of wide and narrow cells: 7/5 on the first row, 5/7 on the second.
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export function MoreProjects() {
  return (
    <section data-nav="#work" aria-labelledby="more-title" className="container-page py-24 md:py-32">
      <RevealHeading id="more-title" className="font-display text-h2 font-bold">
        More projects
      </RevealHeading>

      <RevealGroup as="ul" className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-12">
        {moreProjects.map((project, i) => (
          <RevealItem as="li" key={project.slug} className={spans[i % spans.length]}>
            <TiltCard className="glass flex h-full flex-col rounded-[var(--radius-panel)] p-3">
              <ScreenshotSlot
                shot={project.screenshot}
                href={project.live ?? project.code}
                linkLabel={project.live ? `Open the ${project.title} live site` : `Open the ${project.title} code`}
                sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <h3 className="font-display text-2xl font-bold tracking-tight">{project.title}</h3>
                  {project.highlight && (
                    <p className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-ink">
                      <Trophy size={15} weight="fill" aria-hidden />
                      {project.highlight}
                    </p>
                  )}
                </div>
                <p className="mt-2 max-w-[52ch] text-muted">{project.summary}</p>
                <ul aria-label="Tags" className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line-strong/50 px-2.5 py-0.5 text-xs text-ink/85">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-6 pt-4">
                  {project.live && <ExternalLink href={project.live}>Live site</ExternalLink>}
                  <ExternalLink href={project.code}>Code</ExternalLink>
                </div>
              </div>
            </TiltCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
