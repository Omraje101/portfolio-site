import { ImageResponse } from "next/og";
import { hero, site } from "@/data/content";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#e8f1f2";
const MUTED = "#93a9ad";
const BG = "#070f12";
const SURFACE = "#0e1a1e";
const LINE = "#56707a";
const ACCENT = "#ff7a59";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: BG,
          // Static stand-in for the site's aurora: teal top-left, coral right.
          backgroundImage:
            "radial-gradient(circle at 8% 0%, rgba(20,184,166,0.45), transparent 55%), radial-gradient(circle at 100% 30%, rgba(255,122,89,0.38), transparent 50%)",
          color: INK,
          padding: 72,
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 660, flexShrink: 0 }}>
          <div style={{ fontSize: 30, color: MUTED }}>{site.name}</div>
          <div
            style={{
              marginTop: 28,
              display: "flex",
              flexDirection: "column",
              fontSize: 54,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {/* Break after the comma so the headline sets as two clean lines. */}
            {hero.headline
              .replace("‑", "-")
              .split(/(?<=,) /)
              .map((line) => (
                <span key={line} style={{ whiteSpace: "nowrap" }}>
                  {line}
                </span>
              ))}
          </div>
          <div style={{ marginTop: 32, fontSize: 28, color: MUTED }}>
            {`${site.role}, ${site.location}`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", width: 360 }}>
          {hero.stack.map((layer, i) => (
            <div
              key={layer.layer}
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: i === 0 ? 0 : 20,
                padding: "16px 22px",
                background: SURFACE,
                border: `2px solid ${i === 0 ? ACCENT : LINE}`,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 18, color: MUTED }}>{layer.layer}</div>
              <div style={{ marginTop: 6, fontSize: 22 }}>{layer.tech.join("  ")}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
