import Image from "next/image";
import { about, site } from "@/data/content";

export function About() {
  return (
    <section
      id="about"
      data-nav="#about"
      aria-labelledby="about-title"
      className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16"
    >
      <div className="lg:col-span-5">
        <div className="relative mx-auto aspect-[35/41] max-w-md overflow-hidden rounded border border-line bg-surface lg:mx-0">
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-accent-tint to-transparent"
          />
          <Image
            src={site.photo}
            alt={`Portrait of ${site.name}`}
            width={700}
            height={820}
            sizes="(min-width: 1024px) 28rem, (min-width: 480px) 28rem, 100vw"
            className="relative h-full w-full object-contain object-bottom"
          />
        </div>
      </div>

      <div className="lg:col-span-7 lg:pt-4">
        <h2 id="about-title" className="text-h2 font-semibold">
          About
        </h2>
        <div className="mt-6 max-w-[60ch] space-y-5 text-lede">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

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
      </div>
    </section>
  );
}
