import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0D1F3C",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(13,148,136,0.45) 0%, rgba(13,148,136,0) 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #0D1F3C 0%, #0D9488 100%)",
              fontSize: 26,
              fontWeight: 700,
              color: "#F8FAFC",
            }}
          >
            Cf
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            <span style={{ color: "#F8FAFC" }}>Care</span>
            <span style={{ color: "#2DD4BF" }}>flow</span>
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            fontSize: 52,
            fontWeight: 700,
            color: "#F8FAFC",
            maxWidth: 880,
            lineHeight: 1.15,
          }}
        >
          Care software that gets out of the way.
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "rgba(248,250,252,0.65)",
            maxWidth: 820,
          }}
        >
          Rostering, compliance and care planning for domiciliary &amp; residential
          care — built for CQC and CIW.
        </div>
      </div>
    ),
    { ...size },
  );
}
