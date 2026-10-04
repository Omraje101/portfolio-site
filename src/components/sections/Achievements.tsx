import { Certificate, Code, Medal, Trophy } from "@phosphor-icons/react/dist/ssr";
import { achievements } from "@/data/content";
import { CountUp } from "@/components/motion/CountUp";
import { RevealGroup, RevealHeading, RevealItem } from "@/components/motion/Reveal";

export function Achievements() {
  return (
    <section data-nav="" aria-labelledby="achievements-title" className="container-page py-24 md:py-32">
      <RevealHeading id="achievements-title" className="font-display text-h2 font-bold">
        Achievements
      </RevealHeading>

      <RevealGroup className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-12">
        {achievements.wins.map((win, i) => {
          const Icon = i === 0 ? Trophy : Medal;
          return (
            <RevealItem
              key={win.event}
              className="glass group/win relative overflow-hidden rounded-[var(--radius-panel)] p-7 lg:col-span-4"
            >
              {/* Winner gets the matcha glow, runner-up the blush one. */}
              <span
                aria-hidden
                className={`absolute -right-10 -top-10 size-40 rounded-full blur-3xl ${i === 0 ? "bg-accent/30" : "bg-secondary/25"}`}
              />
              <Icon
                size={36}
                weight="duotone"
                aria-hidden
                className={`motion-nudge relative transition-[translate,rotate] duration-500 ease-(--ease-out) group-hover/win:-translate-y-1 group-hover/win:-rotate-8 ${i === 0 ? "text-accent" : "text-secondary"}`}
              />
              <p className="relative mt-6 font-display text-h3 font-bold">{win.title}</p>
              <p className="relative mt-1 text-lede">{win.event}</p>
              <p className="relative text-muted">{win.by}</p>
            </RevealItem>
          );
        })}

        <RevealItem className="glass rounded-[var(--radius-panel)] p-7 lg:col-span-4">
          <Code size={36} weight="duotone" aria-hidden className="text-secondary" />
          <ul className="mt-6 space-y-3">
            {achievements.practice.map((item) => (
              <li key={item} className="text-lede">
                <CountUp text={item} />
              </li>
            ))}
          </ul>
        </RevealItem>

        <RevealItem className="glass rounded-[var(--radius-panel)] p-7 lg:col-span-12">
          <h3 className="flex items-center gap-3 font-display text-xl font-bold">
            <Certificate size={24} weight="duotone" aria-hidden className="text-accent" />
            Certifications
          </h3>
          <ul className="mt-5 grid gap-3 md:grid-cols-3">
            {achievements.certifications.map((cert) => (
              <li key={cert.name} className="border-t border-line pt-3">
                <p className="font-semibold">{cert.name}</p>
                <p className="text-sm text-muted">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
