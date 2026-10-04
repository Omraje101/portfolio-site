import { Briefcase } from "@phosphor-icons/react/dist/ssr";
import { experience } from "@/data/content";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal, RevealGroup, RevealHeading, RevealItem } from "@/components/motion/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      data-nav="#experience"
      aria-labelledby="experience-title"
      className="container-page py-24 md:py-32"
    >
      <RevealHeading id="experience-title" className="font-display text-h2 font-bold">
        Experience
      </RevealHeading>

      {/* Timeline: a glowing butter-to-matcha rail with a node per role. */}
      <div className="relative mt-12 md:mt-16 md:pl-16">
        <span
          aria-hidden
          className="absolute bottom-0 left-[1.375rem] top-0 hidden w-px bg-gradient-to-b from-secondary via-accent to-transparent shadow-[0_0_16px_var(--secondary)] md:block"
        />
        <ol>
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-16 top-7 hidden size-11 items-center justify-center rounded-full border border-line-strong bg-bg text-secondary md:inline-flex"
            >
              <Briefcase size={20} weight="duotone" />
            </span>
            <Reveal>
              <div className="glass grid gap-6 rounded-[var(--radius-panel)] p-6 sm:p-8 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-4">
                  <p className="inline-flex rounded-full bg-secondary/15 px-3 py-1 text-sm font-semibold tabular-nums text-secondary">
                    {job.period}
                  </p>
                  <p className="mt-3 text-sm text-muted">{job.mode}</p>
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-display text-h3 font-bold">{job.role}</h3>
                  <p className="mt-1 text-lede text-muted">{job.company}</p>
                  <RevealGroup as="ul" className="mt-6 max-w-[62ch] space-y-3">
                    {job.points.map((point) => (
                      <RevealItem as="li" key={point} className="flex gap-3">
                        <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" />
                        <span>
                          <CountUp text={point} />
                        </span>
                      </RevealItem>
                    ))}
                  </RevealGroup>
                  <ul aria-label="Tools used" className="mt-6 flex flex-wrap gap-1.5">
                    {job.tools.map((t) => (
                      <li key={t} className="rounded-full border border-line-strong/50 px-2.5 py-0.5 font-mono text-xs text-ink/85">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
        </ol>
      </div>
    </section>
  );
}
