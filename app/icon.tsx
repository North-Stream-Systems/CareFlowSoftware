import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          background: "linear-gradient(135deg, #0D1F3C 0%, #0D9488 100%)",
        }}
      >
        <span
          style={{
            fontSize: 17,
            fontWeight: 700,
            color: "#F8FAFC",
            fontFamily: "sans-serif",
          }}
        >
          Cf
        </span>
      </div>
    ),
    { ...size },
  );
}
