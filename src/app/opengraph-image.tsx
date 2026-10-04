import { ImageResponse } from "next/og";
import { hero, site } from "@/data/content";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#eef1ea";
const MUTED = "#a3b0a5";
const BG = "#0f1411";
const SURFACE = "#18201b";
const LINE = "#5f6f63";
const ACCENT = "#a9c493";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: BG,
          // Static stand-in for the site's aurora: matcha top-left, butter right.
          backgroundImage:
            "radial-gradient(circle at 8% 0%, rgba(111,143,94,0.5), transparent 55%), radial-gradient(circle at 100% 30%, rgba(201,168,74,0.38), transparent 50%)",
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
