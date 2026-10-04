"use client";

import { ThemeProvider as NextThemes } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    // Light is the default; the toggle switches to dark and remembers the choice.
    // A new storage key, so choices saved by the previous design (which
    // defaulted to dark) don't override the light default.
    <NextThemes
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="om-theme"
      disableTransitionOnChange
    >
      {children}
    </NextThemes>
  );
}
