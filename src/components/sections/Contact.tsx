import { site } from "@/data/content";
import { ContactForm } from "@/components/contact/ContactForm";
import { CopyEmail } from "@/components/contact/CopyEmail";
import { Reveal, RevealHeading } from "@/components/motion/Reveal";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function Contact() {
  return (
    <section
      id="contact"
      data-nav="#contact"
      aria-labelledby="contact-title"
      className="container-page grid gap-14 py-20 md:py-28 lg:grid-cols-12 lg:gap-10"
    >
      <div className="lg:col-span-6">
        <RevealHeading id="contact-title" className="text-h2 font-semibold">
          Contact
        </RevealHeading>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-[44ch] text-lede text-muted">
            Hiring for a full stack or frontend role, or have a freelance project? Email is the quickest
            way to reach me.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="link-draw break-all text-xl font-semibold tracking-tight hover:text-accent sm:text-2xl"
            >
              {site.email}
            </a>
            <CopyEmail email={site.email} />
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-8">
            <li>
              <ExternalLink href={site.socials.github}>GitHub</ExternalLink>
            </li>
            <li>
              <ExternalLink href={site.socials.linkedin}>LinkedIn</ExternalLink>
            </li>
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="lg:col-span-5 lg:col-start-8">
        <ContactForm email={site.email} />
      </Reveal>
    </section>
  );
}
