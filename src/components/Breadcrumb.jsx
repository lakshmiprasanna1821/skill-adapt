import { Link } from "react-router-dom";
import C from "../constants/colors";

export default function Breadcrumb({ crumbs }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "0.4rem",
      padding: "0.8rem 2.5rem",
      background: C.white,
      borderBottom: `1px solid ${C.border}`,
    }}>
      {crumbs.map((c, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          {i > 0 && (
            <span style={{ color: C.border, fontSize: "0.7rem" }}>›</span>
          )}
          {c.to ? (
            <Link to={c.to} style={{ textDecoration: "none" }}>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: C.muted,
                cursor: "pointer",
              }}>
                {c.label}
              </span>
            </Link>
          ) : (
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: C.amber,
              fontWeight: 600,
            }}>
              {c.label}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
