import { nav, site } from "@/data/content";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

/** Floating glass bar. Fixed, so the hero's aurora shows through behind it. */
export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-3 z-40 px-3 md:top-4">
      <nav
        aria-label="Primary"
        className="glass relative mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 rounded-full pl-5 pr-2"
      >
        <a href="#top" className="pressable flex items-center gap-2 font-display text-[1.0625rem] font-semibold tracking-tight">
          <span aria-hidden className="size-2.5 rounded-full bg-gradient-to-br from-teal to-accent" />
          {site.name}
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          <NavLinks items={nav} />
          <span aria-hidden className="mx-1 h-5 w-px bg-line-strong/40" />
          <ThemeToggle />
          <a
            href={site.resume}
            download
            className="pressable sweep ml-1 inline-flex h-10 items-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-ink [--sweep:var(--ink)] hover:text-bg"
          >
            Download résumé
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <MobileMenu items={nav} resume={site.resume} />
        </div>

        <ScrollProgress />
      </nav>
    </header>
  );
}
