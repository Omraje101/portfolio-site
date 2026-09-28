import { experience } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" data-nav="#experience" aria-labelledby="experience-title" className="container-page py-20 md:py-28">
      <h2 id="experience-title" className="text-h2 font-semibold">
        Experience
      </h2>

      <ol className="mt-12 md:mt-16">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="grid gap-6 border-t border-line pt-8 md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-4">
              <p className="font-mono text-sm text-muted">{job.period}</p>
              <p className="mt-1 text-sm text-muted">{job.mode}</p>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-h3 font-semibold">{job.role}</h3>
              <p className="mt-1 text-lede text-muted">{job.company}</p>
              <ul className="mt-6 max-w-[62ch] space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden className="mt-[0.8em] h-px w-3 shrink-0 bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-[0.8125rem] text-muted">{job.tools.join(", ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
