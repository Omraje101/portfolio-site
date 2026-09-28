import { Trophy } from "@phosphor-icons/react/dist/ssr";
import { moreProjects } from "@/data/content";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ScreenshotSlot } from "@/components/ui/ScreenshotSlot";

// Checkerboard of wide and narrow cells: 7/5 on the first row, 5/7 on the second.
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export function MoreProjects() {
  return (
    <section data-nav="#work" aria-labelledby="more-title" className="container-page py-20 md:py-28">
      <h2 id="more-title" className="text-h2 font-semibold">
        More projects
      </h2>

      <ul className="mt-12 grid gap-x-8 gap-y-16 md:mt-16 md:grid-cols-2 lg:grid-cols-12">
        {moreProjects.map((project, i) => (
          <li key={project.slug} className={`flex flex-col ${spans[i % spans.length]}`}>
            <ScreenshotSlot
              shot={project.screenshot}
              sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
            />
            <h3 className="mt-6 text-xl font-semibold tracking-tight">{project.title}</h3>
            {project.highlight && (
              <p className="mt-2 inline-flex items-center gap-2 font-medium text-accent">
                <Trophy size={18} weight="fill" aria-hidden />
                {project.highlight}
              </p>
            )}
            <p className="mt-2 max-w-[52ch] text-muted">{project.summary}</p>
            <p className="mt-3 text-sm text-muted">
              {project.tags.join(", ")}
            </p>
            <div className="mt-3 flex gap-6">
              {project.live && <ExternalLink href={project.live}>Live site</ExternalLink>}
              <ExternalLink href={project.code}>Code</ExternalLink>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
