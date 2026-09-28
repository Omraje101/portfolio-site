import { site } from "@/data/content";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
        <ul className="flex flex-wrap gap-x-8 text-sm">
          <li>
            <ExternalLink href={site.socials.github}>GitHub</ExternalLink>
          </li>
          <li>
            <ExternalLink href={site.socials.linkedin}>LinkedIn</ExternalLink>
          </li>
          <li>
            <a href={site.resume} download className="inline-flex min-h-11 items-center font-medium">
              <span className="link-draw">Download résumé</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
