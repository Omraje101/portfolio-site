"use client";

import { useEffect, useState } from "react";

type Item = { label: string; href: string };

/** Desktop nav links; highlights the section currently in view. */
export function NavLinks({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((i) => document.querySelector<HTMLElement>(i.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      // A thin band just below the nav decides which section is "current".
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => {
        const isActive = active === item.href;
        return (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={isActive ? "location" : undefined}
              className={`relative inline-flex h-10 items-center rounded px-3 text-sm transition-colors duration-150 hover:text-ink ${
                isActive ? "text-ink" : "text-muted"
              }`}
            >
              {item.label}
              <span
                aria-hidden
                className={`absolute inset-x-3 -bottom-[13px] h-0.5 origin-left bg-accent transition-transform duration-200 ease-(--ease-out) ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
