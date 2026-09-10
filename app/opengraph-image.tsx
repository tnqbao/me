import { ImageResponse } from "next/og";

export const alt = "Tran Nguyen Quoc Bao — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "82px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0E1116",
        color: "#F3F5F7",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 27, fontWeight: 700 }}>Bao<span style={{ color: "#E1BB67" }}>.</span></span>
        <span style={{ color: "#91A4B5", fontSize: 20, letterSpacing: "0.16em" }}>GAUAS</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ color: "#E1BB67", fontSize: 24, marginBottom: 18 }}>Software Engineer</span>
        <span style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.04em" }}>Tran Nguyen Quoc Bao</span>
        <span style={{ color: "#AAB2BD", fontSize: 27, marginTop: 24 }}>
          Backend Engineering · DevOps · Cloud Infrastructure
        </span>
      </div>
      <div style={{ height: 6, width: 86, borderRadius: 99, background: "#E1BB67" }} />
    </div>,
    size,
  );
}
