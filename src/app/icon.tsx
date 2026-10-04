import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// A three-layer stack: the site's cross-section motif at favicon size.
export default function Icon() {
  const bar = (opacity: number) => ({
    width: 40,
    height: 10,
    borderRadius: 2,
    background: `rgba(255,255,255,${opacity})`,
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          background: "linear-gradient(135deg, #6f8f5e, #e8b4a6)",
          borderRadius: 12,
        }}
      >
        <div style={bar(1)} />
        <div style={bar(0.75)} />
        <div style={bar(0.5)} />
      </div>
    ),
    size,
  );
}
