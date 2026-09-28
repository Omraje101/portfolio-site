import { about, site } from "@/data/content";
import { ParallaxPhoto } from "@/components/motion/ParallaxPhoto";
import { Reveal, RevealHeading } from "@/components/motion/Reveal";

export function About() {
  return (
    <section
      id="about"
      data-nav="#about"
      aria-labelledby="about-title"
      className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16"
    >
      <div className="lg:col-span-5">
        <ParallaxPhoto src={site.photo} alt={`Portrait of ${site.name}`} />
      </div>

      <div className="lg:col-span-7 lg:pt-4">
        <RevealHeading id="about-title" className="text-h2 font-semibold">
          About
        </RevealHeading>
        <Reveal delay={0.1}>
          <div className="mt-6 max-w-[60ch] space-y-5 text-lede">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="mt-12 grid gap-x-10 gap-y-8 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-muted">Education</dt>
              <dd className="mt-1 font-medium">{about.education.degree}</dd>
              <dd className="text-muted">{about.education.school}</dd>
              <dd className="text-sm tabular-nums text-muted">{about.education.years}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Based in</dt>
              <dd className="mt-1 font-medium">{site.location}</dd>
              <dt className="mt-6 text-sm text-muted">Availability</dt>
              <dd className="mt-1 font-medium">{about.availability}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
