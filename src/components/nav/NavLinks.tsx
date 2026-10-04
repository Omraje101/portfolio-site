"use client";

import { useEffect, useState } from "react";

type Item = { label: string; href: string };

/** Desktop nav links; highlights the section currently in view. */
export function NavLinks({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // Every section declares which nav item it belongs to via data-nav
    // ("" for sections with no nav entry, e.g. the hero and skills).
    const sections = document.querySelectorAll<HTMLElement>("section[data-nav]");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive((entry.target as HTMLElement).dataset.nav || null);
          }
        }
      },
      // A thin band just below the nav decides which section is "current".
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => {
        const isActive = active === item.href;
        return (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={isActive ? "location" : undefined}
              className={`relative inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors duration-200 hover:text-ink ${
                isActive ? "bg-ink/[0.07] text-ink" : "text-muted"
              }`}
            >
              {item.label}
              <span
                aria-hidden
                className={`absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent transition-transform duration-200 ease-(--ease-out) ${
                  isActive ? "scale-100" : "scale-0"
                }`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
