import { skills } from "@/data/content";

export function Skills() {
  return (
    <section data-nav="" aria-labelledby="skills-title" className="border-y border-line bg-surface">
      <div className="container-page py-20 md:py-24">
        <h2 id="skills-title" className="text-h2 font-semibold">
          Skills
        </h2>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-14 lg:grid-cols-5">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="border-b border-line-strong pb-3 text-[0.9375rem] font-semibold">
                {group.group}
              </h3>
              <ul className="mt-4 space-y-2 font-mono text-sm">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
