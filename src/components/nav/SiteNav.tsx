import { nav, site } from "@/data/content";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md supports-[backdrop-filter]:bg-bg/80">
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="pressable -ml-2 rounded px-2 py-2 text-[0.9375rem] font-semibold tracking-tight">
          {site.name}
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          <NavLinks items={nav} />
          <span aria-hidden className="mx-2 h-5 w-px bg-line" />
          <ThemeToggle />
          <a
            href={site.resume}
            download
            className="pressable ml-1 inline-flex h-10 items-center rounded border border-line-strong px-4 text-sm font-medium hover:border-ink hover:bg-surface"
          >
            Download résumé
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <MobileMenu items={nav} resume={site.resume} />
        </div>
      </nav>
    </header>
  );
}
