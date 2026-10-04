/**
 * Static colour fields placed down the page behind the sections, so the glass
 * panels below the hero have colour to blur. No animation, so they cost nothing
 * after first paint.
 */
const glows = [
  { top: "12%", left: "-12%", size: "38rem", color: "var(--aurora-a)" },
  { top: "26%", left: "70%", size: "34rem", color: "var(--aurora-b)" },
  { top: "44%", left: "-8%", size: "32rem", color: "var(--aurora-b)" },
  { top: "58%", left: "68%", size: "36rem", color: "var(--aurora-a)" },
  { top: "76%", left: "20%", size: "30rem", color: "var(--aurora-c)" },
];

export function AmbientGlows() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {glows.map((g) => (
        <span
          key={`${g.top}-${g.left}`}
          className="absolute rounded-full opacity-[0.22] dark:opacity-[0.2]"
          // Radial gradient instead of a blur filter: same soft edge, far cheaper to paint.
          style={{
            top: g.top,
            left: g.left,
            width: g.size,
            height: g.size,
            background: `radial-gradient(closest-side, ${g.color}, transparent)`,
          }}
        />
      ))}
    </div>
  );
}
