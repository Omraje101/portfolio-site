import { Code, Cube, Database, Plugs, Wrench } from "@phosphor-icons/react/dist/ssr";
import { skills } from "@/data/content";
import { RevealGroup, RevealHeading, RevealItem } from "@/components/motion/Reveal";

// One icon per group, in content order.
const icons = [Code, Cube, Database, Plugs, Wrench];

export function Skills() {
  return (
    <section data-nav="" aria-labelledby="skills-title" className="container-page py-24 md:py-32">
      <RevealHeading id="skills-title" className="font-display text-h2 font-bold">
        Skills
      </RevealHeading>
      {/* Bento: two wide tiles over three narrow ones. */}
      <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-6">
        {skills.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <RevealItem
              key={group.group}
              className={`glass group/skill rounded-[var(--radius-panel)] p-6 ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
            >
              <h3 className="flex items-center gap-3 font-display text-xl font-bold">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-secondary/25 to-accent/25 text-ink transition-transform duration-500 ease-(--ease-out) group-hover/skill:rotate-12 motion-reduce:transition-none">
                  <Icon size={20} weight="duotone" aria-hidden />
                </span>
                {group.group}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line-strong/50 bg-surface/50 px-3 py-1 font-mono text-[0.8125rem] transition-colors duration-200 hover:border-secondary hover:text-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
