import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 30% 20%, rgba(163,230,53,0.18), transparent 60%), #07070a",
          color: "#f4f4f5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#a3e635",
            display: "flex",
          }}
        >
          {profile.role}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 132,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              display: "flex",
            }}
          >
            {profile.name}.
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#a1a1aa",
              maxWidth: 900,
              display: "flex",
            }}
          >
            I build React apps, Node.js APIs, and full-stack tools.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#71717a",
          }}
        >
          <div style={{ display: "flex" }}>kriskewish.dev</div>
          <div style={{ display: "flex" }}>{profile.location}</div>
        </div>
      </div>
    ),
    size,
  );
}
