import { useState } from "react";
import { useNavigate } from "react-router-dom";
import C from "../constants/colors";
import { FLASHCARDS } from "../constants/data";
import Breadcrumb from "../components/Breadcrumb";
import Btn from "../components/Btn";

const PROGRESS = [38, 55, 72, 24, 61, 45, 80, 33];

function CategoryCard({ catName, catData, pct, onClick }) {
  const [hov, setHov] = useState(false);
  const totalCards = Object.values(catData.skills).reduce((s, arr) => s + arr.length, 0);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}
      style={{
        background: C.white,
        borderRadius: 10,
        padding: "1.4rem",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        border: `1.5px solid ${hov ? C.amber : C.border}`,
        boxShadow: hov ? "0 4px 16px rgba(26,18,8,0.1)" : "none",
        transform: hov ? "translateY(-3px)" : "none",
        transition: "all 0.2s",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 4,
        background: C.amber,
        opacity: hov ? 1 : 0,
        transition: "opacity 0.2s",
      }} />
      <div style={{ fontSize: "1.7rem", marginBottom: "0.7rem" }}>{catData.icon}</div>
      <div style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.25rem", color: C.ink }}>
        {catName}
      </div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: C.muted }}>
        {totalCards} card{totalCards !== 1 ? "s" : ""} · {Object.keys(catData.skills).length} skills
      </div>
      <div style={{ marginTop: "1rem", height: 4, background: C.border, borderRadius: 2, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: C.amber, borderRadius: 2, transition: "width 0.6s ease" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.3rem" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: C.muted }}>{pct}% complete</div>
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.65rem", fontWeight: 700, color: hov ? C.amber : C.muted, transition: "color 0.2s" }}>
          Practice →
        </div>
      </div>
    </div>
  );
}

export default function Learn() {
  const navigate = useNavigate();
  const cats = Object.entries(FLASHCARDS);
  const totalCards = cats.reduce(
    (s, [, cd]) => s + Object.values(cd.skills).reduce((ss, arr) => ss + arr.length, 0), 0
  );

  return (
    <div className="fade-in" style={{ flex: 1, display: "flex", flexDirection: "column", overflowY: "auto" }}>
      <Breadcrumb crumbs={[{ label: "Home", to: "/" }, { label: "Employee View" }]} />

      {/* Hero */}
      <div style={{
        background: C.ink,
        padding: "3.5rem 5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.8rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", right: -80, bottom: -80, width: 320, height: 320, borderRadius: "50%", background: C.amber, opacity: 0.06, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 60, top: 30, width: 120, height: 120, borderRadius: "50%", border: `1px solid rgba(245,130,31,0.2)`, pointerEvents: "none" }} />

        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.amber }}>
          Your Learning Journey
        </div>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.2rem", color: C.white, lineHeight: 1.15, maxWidth: 520, margin: 0 }}>
          Master the skills that matter for your role.
        </h1>
        <p style={{ color: C.muted, fontSize: "0.9rem", maxWidth: 460, lineHeight: 1.65, margin: 0 }}>
          Browse skill categories, explore what's expected, and sharpen your knowledge through interactive flashcards.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
          <Btn variant="primary" onClick={() => navigate("/flashcards")}>Start Flashcards →</Btn>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[{ n: cats.length, l: "Categories" }, { n: totalCards, l: "Flashcards" }].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", color: C.amber }}>{s.n}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: C.muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ padding: "2.2rem 5rem", flex: 1, background: C.surface }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.4rem" }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.3rem", color: C.ink, margin: 0 }}>Skill Categories</h2>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: C.muted }}>
            {cats.length} categories · {totalCards} cards total
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "1.2rem" }}>
          {cats.map(([catName, catData], i) => (
            <CategoryCard
              key={catName}
              catName={catName}
              catData={catData}
              pct={PROGRESS[i % PROGRESS.length]}
              onClick={() => navigate(`/flashcards?cat=${encodeURIComponent(catName)}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
