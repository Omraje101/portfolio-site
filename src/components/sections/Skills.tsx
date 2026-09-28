import { skills } from "@/data/content";
import { RevealGroup, RevealHeading, RevealItem } from "@/components/motion/Reveal";

export function Skills() {
  return (
    <section data-nav="" aria-labelledby="skills-title" className="border-y border-line bg-surface">
      <div className="container-page py-20 md:py-24">
        <RevealHeading id="skills-title" className="text-h2 font-semibold">
          Skills
        </RevealHeading>
        <RevealGroup className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-14 lg:grid-cols-5">
          {skills.map((group) => (
            <RevealItem key={group.group} className="group/skill">
              <h3 className="relative pb-3 text-[0.9375rem] font-semibold">
                {group.group}
                {/* Rule under each group: slate at rest, drawn over in saffron on hover. */}
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-line-strong" />
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-(--ease-out) group-hover/skill:scale-x-100"
                />
              </h3>
              <ul className="mt-4 space-y-2 font-mono text-sm">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
