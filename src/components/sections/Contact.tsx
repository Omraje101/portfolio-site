import { site } from "@/data/content";
import { ContactForm } from "@/components/contact/ContactForm";
import { CopyEmail } from "@/components/contact/CopyEmail";
import { Reveal, RevealHeading } from "@/components/motion/Reveal";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function Contact() {
  return (
    <section id="contact" data-nav="#contact" aria-labelledby="contact-title" className="container-page py-24 md:py-32">
      {/* The page's second aurora: a closing panel that mirrors the hero. */}
      <div className="relative isolate overflow-hidden rounded-[calc(var(--radius-panel)+8px)] border border-line px-5 py-12 sm:px-10 md:py-16 lg:px-14">
        <div aria-hidden className="aurora -z-10">
          <span />
          <span />
          <span />
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <RevealHeading id="contact-title" className="font-display text-h2 font-bold">
              Contact
            </RevealHeading>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[42ch] text-lede text-ink/85">
                Hiring for a full stack or frontend role, or have a freelance project? Email is the quickest
                way to reach me.
              </p>

              <a
                href={`mailto:${site.email}`}
                className="link-draw mt-10 inline-block font-display text-[clamp(1.375rem,0.9rem+1.5vw,2.125rem)] font-bold tracking-tight hover:text-accent"
              >
                {/* Allow a line break only before the @, never mid-word. */}
                {site.email.split("@")[0]}
                <wbr />@{site.email.split("@")[1]}
              </a>
              <div className="mt-5 flex flex-wrap items-center gap-3">
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
        </div>
      </div>
    </section>
  );
}
