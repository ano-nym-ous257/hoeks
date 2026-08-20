import { ImageResponse } from "next/og";

export const alt =
  "Gamefreak — Network Engineering, Cybersecurity and AWS Cloud Infrastructure";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #07080b 0%, #0b0d12 58%, #160b10 100%)",
          color: "#f2f4f7",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -110,
            right: -80,
            width: 430,
            height: 430,
            display: "flex",
            border: "2px solid rgba(232,93,93,0.38)",
            transform: "rotate(14deg)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 95,
            bottom: 75,
            width: 280,
            height: 180,
            display: "flex",
            border: "1px solid rgba(242,244,247,0.14)",
            background: "rgba(255,255,255,0.018)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          <span
            style={{
              color: "#e85d5d",
            }}
          >
            GF
          </span>

          <span>GAMEFREAK ENGINEERING</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 850,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#e85d5d",
              fontSize: 19,
              fontWeight: 700,
              letterSpacing: "0.12em",
              marginBottom: 24,
            }}
          >
            GAMEFREAK ENGINEERING
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.065em",
            }}
          >
            <span>Building secure</span>
            <span
              style={{
                color: "#9da5b1",
              }}
            >
              systems.
            </span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 32,
              color: "#a6adb7",
              fontSize: 23,
            }}
          >
            Network Engineering · Cybersecurity · AWS Cloud Infrastructure
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#7f8792",
            fontSize: 18,
          }}
        >
          <span>gamefreakdev.xyz</span>
          <span>Systems online · Open to opportunities</span>
        </div>
      </div>
    ),
    size,
  );
}
