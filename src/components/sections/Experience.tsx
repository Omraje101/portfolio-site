import { experience } from "@/data/content";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal, RevealGroup, RevealHeading, RevealItem } from "@/components/motion/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      data-nav="#experience"
      aria-labelledby="experience-title"
      className="container-page py-20 md:py-28"
    >
      <RevealHeading id="experience-title" className="text-h2 font-semibold">
        Experience
      </RevealHeading>

      <ol className="mt-12 md:mt-16">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="grid gap-6 border-t border-line pt-8 md:grid-cols-12 md:gap-10"
          >
            <Reveal className="md:col-span-4">
              <p className="text-sm font-medium tabular-nums text-muted">{job.period}</p>
              <p className="mt-1 text-sm text-muted">{job.mode}</p>
            </Reveal>
            <div className="md:col-span-8">
              <Reveal delay={0.08}>
                <h3 className="text-h3 font-semibold">{job.role}</h3>
                <p className="mt-1 text-lede text-muted">{job.company}</p>
              </Reveal>
              <RevealGroup as="ul" className="mt-6 max-w-[62ch] space-y-3">
                {job.points.map((point) => (
                  <RevealItem as="li" key={point} className="flex gap-3">
                    <span aria-hidden className="mt-[0.8em] h-px w-3 shrink-0 bg-accent" />
                    <span>
                      <CountUp text={point} />
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
              <Reveal delay={0.2}>
                <p className="mt-6 font-mono text-[0.8125rem] text-muted">{job.tools.join(", ")}</p>
              </Reveal>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
