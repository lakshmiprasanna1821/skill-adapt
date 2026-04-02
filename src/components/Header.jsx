import { Link, useLocation, useNavigate } from "react-router-dom";
import C from "../constants/colors";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const navItems = [
    { label: "Home",          to: "/" },
    { label: "Company View",  to: "/company" },
    { label: "Employee View", to: "/learn" },
  ];

  return (
    <header style={{
      background: C.ink,
      padding: "0 6rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 76,
      position: "sticky",
      top: 0,
      zIndex: 200,
      borderBottom: `3px solid ${C.amber}`,
      width: "100%",
      boxSizing: "border-box",
    }}>
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none", flexShrink: 0 }}>
        <div style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "1.7rem",
          color: C.white,
          cursor: "pointer",
          userSelect: "none",
          letterSpacing: "0.01em",
        }}>
          Skill<span style={{ color: C.amber }}>Map</span>
        </div>
      </Link>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
        {navItems.map((item) => {
          const active = path === item.to;
          return (
            <Link key={item.to} to={item.to} style={{ textDecoration: "none" }}>
              <button style={{
                background: active ? "rgba(245,130,31,0.14)" : "transparent",
                border: "none",
                borderBottom: `3px solid ${active ? C.amber : "transparent"}`,
                borderTop: "3px solid transparent",
                borderLeft: "none",
                borderRight: "none",
                color: active ? C.amber : "#9a9186",
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.95rem",
                fontWeight: active ? 800 : 700,
                padding: "0.6rem 1.3rem",
                cursor: "pointer",
                transition: "all 0.18s",
                letterSpacing: "0.03em",
                height: 76,
                borderRadius: 0,
              }}>
                {item.label}
              </button>
            </Link>
          );
        })}
      </nav>

      {/* Profile */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        flexShrink: 0,
      }}>
        {user && (
          <div style={{
            color: C.white,
            fontSize: "0.9rem",
            fontFamily: "'Syne', sans-serif",
          }}>
            Welcome, {user.name}!
          </div>
        )}
        <button
          onClick={() => navigate("/profile")}
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: C.white,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "0.25rem 0.65rem",
            borderRadius: 4,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,130,31,0.1)"; e.currentTarget.style.borderColor = "rgba(245,130,31,0.3)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
        >
          Profile
        </button>
      </div>
    </header>
  );
}
