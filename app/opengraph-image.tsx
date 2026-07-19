import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logo = readFileSync(join(process.cwd(), "public/logo-light.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={220} height={89} />

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
