"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { m } from "motion/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // Theme is only known on the client; render a stable shell until then.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="pressable inline-flex size-11 items-center justify-center rounded text-ink hover:bg-surface hover:text-accent"
    >
      {mounted ? (
        // Keyed on the theme so the new icon turns in each time it swaps.
        <m.span
          key={isDark ? "sun" : "moon"}
          className="inline-flex"
          initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.45, bounce: 0.3 }}
        >
          {isDark ? <Sun size={20} aria-hidden /> : <Moon size={20} aria-hidden />}
        </m.span>
      ) : (
        <span className="size-5" aria-hidden />
      )}
    </button>
  );
}
