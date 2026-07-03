import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #000000 0%, #0a1628 50%, #1a1a2e 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect width="80" height="80" rx="16" fill="#FFFFFF" />
            <path
              d="M24 40L36 52L56 28"
              stroke="#000000"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: "48px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "-1px" }}>
            Next Switch
          </span>
        </div>
        <div
          style={{
            fontSize: "32px",
            fontWeight: 400,
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Lighting Africa. Building the Future.
        </div>
      </div>
    ),
    { ...size },
  );
}
