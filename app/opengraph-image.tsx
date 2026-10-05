import { ImageResponse } from "next/og";

export const alt = "Tran Nguyen Quoc Bao — Software / DevOps Engineer";
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
        background: "#030406",
        color: "#F4F6FA",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 20, color: "#9299A6" }}>Software / DevOps Engineer</span>
        <span style={{ color: "#9299A6", fontSize: 20 }}>quocbao.gauas.com</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.04em" }}>Tran Nguyen Quoc Bao</span>
        <span style={{ color: "#AAB2BD", fontSize: 27, marginTop: 24 }}>
          Backend systems · DevOps · Application infrastructure
        </span>
      </div>
      <div style={{ height: 2, width: 86, background: "#1246A3" }} />
    </div>,
    size,
  );
}
