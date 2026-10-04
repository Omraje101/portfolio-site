import { GraduationCap, MapPin, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { about, site } from "@/data/content";
import { ParallaxPhoto } from "@/components/motion/ParallaxPhoto";
import { Reveal, RevealHeading } from "@/components/motion/Reveal";

export function About() {
  const facts = [
    {
      icon: GraduationCap,
      label: "Education",
      value: about.education.degree,
      detail: `${about.education.school}, ${about.education.years}`,
    },
    { icon: MapPin, label: "Based in", value: site.location },
    { icon: Sparkle, label: "Availability", value: about.availability },
  ];

  return (
    <section id="about" data-nav="#about" aria-labelledby="about-title" className="container-page py-24 md:py-32">
      <div className="glass grid gap-10 rounded-[var(--radius-panel)] p-5 sm:p-8 lg:grid-cols-12 lg:gap-14 lg:p-12">
        <div className="lg:col-span-5">
          <ParallaxPhoto src={site.photo} alt={`Portrait of ${site.name}`} />
        </div>

        <div className="lg:col-span-7 lg:py-4">
          <RevealHeading id="about-title" className="font-display text-h2 font-bold">
            About
          </RevealHeading>
          <Reveal delay={0.1}>
            <div className="mt-6 max-w-[60ch] space-y-5 text-lede">
              {about.paragraphs.map((p, i) => (
                <p key={p} className={i === 0 ? "text-ink" : "text-muted"}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {facts.map(({ icon: Icon, label, value, detail }, i) => (
                <div
                  key={label}
                  className={`border-t border-line pt-4 ${i === 0 ? "sm:col-span-2" : ""}`}
                >
                  <dt className="flex items-center gap-2 text-sm text-muted">
                    <Icon size={16} weight="duotone" aria-hidden className="text-secondary" />
                    {label}
                  </dt>
                  <dd className="mt-1.5 font-semibold">{value}</dd>
                  {detail && <dd className="text-sm text-muted">{detail}</dd>}
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
