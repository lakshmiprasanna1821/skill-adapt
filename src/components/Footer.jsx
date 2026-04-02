import C from "../constants/colors";

export default function Footer() {
  return (
    <footer style={{
      background: C.ink,
      borderTop: `3px solid ${C.amber}`,
      width: "100%",
      boxSizing: "border-box",
      padding: "1.6rem 6rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "1rem",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <span style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "1.1rem",
          color: C.white,
        }}>
          Skill<span style={{ color: C.amber }}>Map</span>
        </span>
        <span style={{ color: "#2a2218", fontSize: "1rem" }}>·</span>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.68rem",
          color: C.muted,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}>
          Role Intelligence Platform
        </span>
      </div>
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.68rem",
        color: "#444",
        letterSpacing: "0.06em",
      }}>
        © 2026 SkillMap. All rights reserved.
      </div>
    </footer>
  );
}
