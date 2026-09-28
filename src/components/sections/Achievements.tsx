import { Medal, Trophy } from "@phosphor-icons/react/dist/ssr";
import { achievements } from "@/data/content";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal, RevealGroup, RevealHeading, RevealItem } from "@/components/motion/Reveal";

export function Achievements() {
  return (
    <section data-nav="" aria-labelledby="achievements-title" className="container-page py-20 md:py-28">
      <RevealHeading id="achievements-title" className="text-h2 font-semibold">
        Achievements
      </RevealHeading>

      <div className="mt-12 grid gap-16 md:mt-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <RevealGroup as="ul" className="grid gap-10 sm:grid-cols-2">
            {achievements.wins.map((win, i) => {
              const Icon = i === 0 ? Trophy : Medal;
              return (
                <RevealItem as="li" key={win.event} className="group/win">
                  <Icon
                    size={28}
                    weight="duotone"
                    aria-hidden
                    className="motion-nudge text-accent transition-[translate,rotate] duration-500 ease-(--ease-out) group-hover/win:-translate-y-1 group-hover/win:-rotate-8"
                  />
                  <p className="mt-4 text-h3 font-semibold">{win.title}</p>
                  <p className="mt-1 text-lede">{win.event}</p>
                  <p className="text-muted">{win.by}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
          <Reveal delay={0.15}>
            <ul className="mt-12 space-y-2 border-t border-line pt-6 text-muted">
              {achievements.practice.map((item) => (
                <li key={item}>
                  <CountUp text={item} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal>
            <h3 className="text-[0.9375rem] font-semibold">Certifications</h3>
          </Reveal>
          <RevealGroup as="ul" className="mt-4 divide-y divide-line border-y border-line">
            {achievements.certifications.map((cert) => (
              <RevealItem
                as="li"
                key={cert.name}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
              >
                <span className="font-medium">{cert.name}</span>
                <span className="text-sm text-muted">{cert.issuer}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
