import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import C from "../constants/colors";

/* ----  inject keyframes once --------- */
if (!document.getElementById("landing-keyframes")) {
  const s = document.createElement("style");
  s.id = "landing-keyframes";
  s.textContent = `
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(30px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes badgePop {
      0%   { opacity: 0; transform: scale(0.75) translateY(10px); }
      70%  { transform: scale(1.05) translateY(0); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }
    @keyframes shimmerFlow {
      0%   { background-position: -300% center; }
      100% { background-position: 300% center; }
    }
    @keyframes floatY {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-18px); }
    }
    @keyframes floatYSlow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33%       { transform: translateY(-12px) rotate(2deg); }
      66%       { transform: translateY(-6px) rotate(-1.5deg); }
    }
    @keyframes spinRing {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes spinRingRev {
      from { transform: rotate(0deg); }
      to   { transform: rotate(-360deg); }
    }
    @keyframes pulseDot {
      0%, 100% { box-shadow: 0 0 0 0 rgba(245,130,31,0.6); }
      50%       { box-shadow: 0 0 0 7px rgba(245,130,31,0); }
    }
    @keyframes revealBar {
      from { width: 0; }
      to   { width: 100%; }
    }
    @keyframes countUp {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes cardReveal {
      from { opacity: 0; transform: translateY(28px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes scrollBounce {
      0%, 100% { transform: translateY(0) translateX(-50%); opacity: 0.5; }
      50%       { transform: translateY(10px) translateX(-50%); opacity: 1; }
    }
    @keyframes glowPulse {
      0%, 100% { opacity: 0.12; }
      50%       { opacity: 0.22; }
    }

    .anim-badge  { animation: badgePop 0.65s cubic-bezier(0.34,1.56,0.64,1) 0.15s both; }
    .anim-h1     { animation: fadeSlideUp 0.7s ease 0.3s both; }
    .anim-sub    { animation: fadeSlideUp 0.7s ease 0.48s both; }
    .anim-ctas   { animation: fadeSlideUp 0.7s ease 0.62s both; }
    .anim-stats  { animation: fadeSlideUp 0.5s ease 0.8s both; }

    .card-0 { animation: cardReveal 0.65s cubic-bezier(0.34,1.2,0.64,1) 0.85s both; }
    .card-1 { animation: cardReveal 0.65s cubic-bezier(0.34,1.2,0.64,1) 1.0s  both; }
    .card-2 { animation: cardReveal 0.65s cubic-bezier(0.34,1.2,0.64,1) 1.15s both; }
    .card-3 { animation: cardReveal 0.65s cubic-bezier(0.34,1.2,0.64,1) 1.3s  both; }

    .float-main { animation: floatYSlow 7s ease-in-out infinite; }
    .float-b    { animation: floatY    5s ease-in-out 0.5s infinite; }
    .float-c    { animation: floatY    9s ease-in-out 1.5s infinite; }

    .shimmer-text {
      background: linear-gradient(
        100deg,
        #F5821F 0%, #FFD9A8 25%, #FF9A2E 45%, #FFD9A8 65%, #F5821F 80%, #FF9A2E 100%
      );
      background-size: 300% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmerFlow 4s linear infinite;
    }
  `;
  document.head.appendChild(s);
}

/* ------------  data -----------------*/
const CARDS = [
  { icon: "🏢", title: "Company View",  desc: "Explore role hierarchies across every domain and see which skills each position truly requires.",  to: "/company",    cta: "Explore Roles",  color: "#F5821F" },
  { icon: "🎓", title: "Employee View", desc: "Your personal skill journey — browse categories, track progress, and jump straight into practice.", to: "/learn",      cta: "View Dashboard", color: "#5B9BD5" },
];

/* ----- animated counter --------------*/
function Counter({ target, delay }) {
  const [val, setVal] = useState("0");
  const ran = useRef(false);

  useEffect(() => {
    // Reset the animation flag when target changes
    ran.current = false;
  }, [target]);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const num = parseInt(target, 10);
    const hasSuffix = target.includes("+");
    let current = 0;
    const STEPS = 28;
    const inc = num / STEPS;
    const wait = setTimeout(() => {
      const iv = setInterval(() => {
        current += inc;
        if (current >= num) {
          setVal(hasSuffix ? `${num}+` : `${num}`);
          clearInterval(iv);
        } else {
          setVal(`${Math.floor(current)}${hasSuffix ? "+" : ""}`);
        }
      }, 45);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(wait);
  }, [target, delay]);

  return <>{val}</>;
}

/* ------- feature card ----------- */
function FeatureCard({ icon, title, desc, to, cta, color, animClass }) {
  const navigate = useNavigate();
  const [hov, setHov] = useState(false);
  return (
    <div
      className={animClass}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => navigate(to)}
      style={{
        background: hov ? "#FFFEFB" : C.white,
        borderRadius: 18,
        border: `1.5px solid ${hov ? color : C.border}`,
        padding: "2rem 1.8rem",
        cursor: "pointer",
        transform: hov ? "translateY(-7px) scale(1.015)" : "translateY(0) scale(1)",
        boxShadow: hov
          ? `0 20px 48px rgba(26,18,8,0.13), 0 0 0 1px ${color}22`
          : "0 2px 10px rgba(26,18,8,0.05)",
        transition: "all 0.28s cubic-bezier(0.34,1.3,0.64,1)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* sweep bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 4,
        background: `linear-gradient(90deg, ${color}, ${color}99)`,
        transform: hov ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.32s ease",
        borderRadius: "4px 4px 0 0",
      }} />
      {/* bg glow */}
      <div style={{
        position: "absolute", bottom: -30, right: -30,
        width: 130, height: 130, borderRadius: "50%",
        background: `radial-gradient(circle, ${color}18 0%, transparent 70%)`,
        transition: "opacity 0.3s",
        opacity: hov ? 1 : 0,
        pointerEvents: "none",
      }} />

      {/* icon box */}
      <div style={{
        width: 56, height: 56, borderRadius: 15,
        background: `${color}15`,
        border: `1.5px solid ${color}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.7rem",
        transform: hov ? "scale(1.08)" : "scale(1)",
        transition: "transform 0.25s ease",
      }}>
        {icon}
      </div>

      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.2rem", color: C.ink }}>
        {title}
      </div>
      <div style={{ fontSize: "0.85rem", color: C.slate, lineHeight: 1.68, flex: 1 }}>
        {desc}
      </div>
      <div style={{
        display: "flex", alignItems: "center", gap: "0.35rem",
        fontFamily: "'Syne', sans-serif",
        fontSize: "0.76rem",
        fontWeight: 700,
        color: color,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}>
        {cta}
        <span style={{
          display: "inline-block",
          transform: hov ? "translateX(5px)" : "translateX(0)",
          transition: "transform 0.22s ease",
        }}>→</span>
      </div>
    </div>
  );
}

/* ----- main -------------------------- */
export default function Landing() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const [stats, setStats] = useState(() => {
    const savedStats = JSON.parse(localStorage.getItem("stats") || '{"totalUsers": 0, "recruiters": 0, "learners": 0}');
    return [
      { n: savedStats.totalUsers.toString(), label: "Total Users", icon: "👥" },
      { n: savedStats.recruiters.toString(), label: "Recruiters", icon: "🏢" },
      { n: savedStats.learners.toString(), label: "Learners", icon: "🎓" },
      { n: "40+", label: "Flashcards", icon: "🃏" },
    ];
  });

  // Update stats when component mounts or when localStorage changes
  useEffect(() => {
    const updateStats = () => {
      const savedStats = JSON.parse(localStorage.getItem("stats") || '{"totalUsers": 0, "recruiters": 0, "learners": 0}');
      setStats([
        { n: savedStats.totalUsers.toString(), label: "Total Users", icon: "👥" },
        { n: savedStats.recruiters.toString(), label: "Recruiters", icon: "🏢" },
        { n: savedStats.learners.toString(), label: "Learners", icon: "🎓" },
        { n: "40+", label: "Flashcards", icon: "🃏" },
      ]);
    };

    // Update stats immediately
    updateStats();

    // Listen for storage changes (in case stats are updated in another tab/window)
    const handleStorageChange = (e) => {
      if (e.key === 'stats') {
        updateStats();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Also check for changes when the component becomes visible (user navigates back)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        updateStats();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflowX: "hidden" }}>

      {/* ══ HERO ══ */}
      <section style={{
        background: C.ink,
        padding: "6rem 6rem 5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1.6rem",
        position: "relative",
        overflow: "hidden",
        minHeight: "58vh",
      }}>

        {/* ── background decoration ── */}
        {/* large glow blob */}
        <div className="float-main" style={{
          position: "absolute", right: "6%", top: "5%",
          width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,130,31,0.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* small glow */}
        <div className="float-b" style={{
          position: "absolute", right: "24%", top: "40%",
          width: 130, height: 130, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,130,31,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* bottom left glow */}
        <div className="float-c" style={{
          position: "absolute", left: "2%", bottom: "5%",
          width: 200, height: 200, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,130,31,0.08) 0%, transparent 70%)",
          animation: "glowPulse 4s ease-in-out infinite",
          pointerEvents: "none",
        }} />

        {/* spinning outer ring */}
        <div style={{
          position: "absolute", right: "4%", top: "3%",
          width: 430, height: 430, borderRadius: "50%",
          border: "1px solid rgba(245,130,31,0.14)",
          animation: "spinRing 50s linear infinite",
          pointerEvents: "none",
        }} />
        {/* counter-spin inner ring */}
        <div style={{
          position: "absolute", right: "9%", top: "12%",
          width: 280, height: 280, borderRadius: "50%",
          border: "1px dashed rgba(245,130,31,0.1)",
          animation: "spinRingRev 35s linear infinite",
          pointerEvents: "none",
        }} />
        {/* grid dots pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(245,130,31,0.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          pointerEvents: "none",
          maskImage: "radial-gradient(ellipse 80% 80% at 80% 50%, transparent 30%, black 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 80% 50%, transparent 30%, black 100%)",
        }} />

        {/* ── badge ── */}
        <div className="anim-badge" style={{
          display: "inline-flex", alignItems: "center", gap: "0.55rem",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.68rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: C.amber,
          background: "rgba(245,130,31,0.1)",
          padding: "0.38rem 1rem",
          borderRadius: 7,
          border: "1px solid rgba(245,130,31,0.3)",
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: C.amber, display: "inline-block",
            animation: "pulseDot 2s ease-in-out infinite",
          }} />
          Role Intelligence Platform
        </div>

        {/* ------ welcome message ---- */}
        {user && (
          <div style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1.2rem",
            color: C.white,
            background: "rgba(245,130,31,0.1)",
            padding: "0.5rem 1rem",
            borderRadius: 8,
            border: "1px solid rgba(245,130,31,0.3)",
          }}>
            Welcome back, {user.name}!
          </div>
        )}

        {/* ----- headline ----- */}
        <h1 className="anim-h1" style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
          color: C.white,
          lineHeight: 1.07,
          maxWidth: 660,
          margin: 0,
        }}>
          Know exactly what skills<br />
          <span className="shimmer-text">your role demands.</span>
        </h1>

        {/* ----- subtext ------ */}
        <p className="anim-sub" style={{
          color: "#7a7168",
          fontSize: "1.08rem",
          maxWidth: 510,
          lineHeight: 1.72,
          margin: 0,
        }}>
          SkillMap maps role expectations across every domain — so individuals know
          what to learn, and teams know what to hire for.
        </p>

        {/* -----  CTAs ---- */}
        <div className="anim-ctas" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <button
            onClick={() => navigate("/register")}
            style={{
              background: C.amber,
              color: C.ink,
              border: "none",
              borderRadius: 10,
              padding: "0.82rem 2rem",
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 800,
              cursor: "pointer",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              boxShadow: "0 6px 24px rgba(245,130,31,0.38)",
              transition: "all 0.2s cubic-bezier(0.34,1.4,0.64,1)",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px) scale(1.03)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(245,130,31,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(245,130,31,0.38)"; }}
          >
            Get Started →
          </button>
        </div>

        {/* ----- scroll indicator ----  */}
        <div style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
          animation: "scrollBounce 2.4s ease-in-out infinite",
          pointerEvents: "none",
        }}>
          <div style={{ width: 1, height: 36, background: `linear-gradient(to bottom, transparent, ${C.amber})` }} />
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.18em", textTransform: "uppercase", color: C.amber, opacity: 0.6 }}>
            scroll
          </div>
        </div>
      </section>

      {/* ----- STATS SECTION ------ */}
      <section style={{
        background: "#E3F2FD", // Light blue background
        padding: "4rem 6rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "2.2rem",
            color: C.ink,
            margin: 0,
            marginBottom: "0.5rem",
          }}>
            Platform Statistics
          </h2>
          <p style={{
            color: C.slate,
            fontSize: "1rem",
            margin: 0,
            maxWidth: "600px",
          }}>
            See how our community is growing and engaging with skill development
          </p>
        </div>

        {/* ----- stats ----- */}
        <div className="anim-stats" style={{
          display: "flex",
          gap: "3rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              background: C.white,
              padding: "1.5rem 2rem",
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              border: `1px solid ${C.border}`,
              minWidth: "180px",
              justifyContent: "center",
            }}>
              <div style={{
                fontSize: "2.2rem",
              }}>
                {stat.icon}
              </div>
              <div>
                <div style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "2rem",
                  color: C.ink,
                  lineHeight: 1,
                  fontWeight: "bold",
                }}>
                  <Counter target={stat.n} delay={i * 200} />
                </div>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.8rem",
                  color: C.slate,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginTop: "0.3rem",
                  fontWeight: 600,
                }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------ FEATURE CARDS ------ */}
      <div style={{
        padding: "4.5rem 6rem",
        background: C.surface,
        flex: 1,
      }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.67rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: C.amber,
            marginBottom: "0.7rem",
          }}>
            Everything you need
          </p>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "2.1rem",
            color: C.ink,
            margin: 0,
          }}>
            Two views. One platform.
          </h2>
          <p style={{ color: C.muted, fontSize: "0.9rem", marginTop: "0.6rem" }}>
            Each view is built for a different way of interacting with your skills.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}>
          {CARDS.map((c, i) => (
            <FeatureCard key={i} {...c} animClass={`card-${i}`} />
          ))}
        </div>
      </div>

      {/* ------ BOTTOM CTA -------- */}
      <div style={{
        background: C.ink,
        padding: "4rem 6rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "2rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* decorative blobs */}
        <div style={{ position: "absolute", left: -80, top: -80, width: 280, height: 280, borderRadius: "50%", background: C.amber, opacity: 0.04, pointerEvents: "none", animation: "glowPulse 5s ease-in-out infinite" }} />
        <div style={{ position: "absolute", right: "15%", bottom: -60, width: 200, height: 200, borderRadius: "50%", background: C.amber, opacity: 0.05, pointerEvents: "none" }} />

        <div>
          <h3 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "1.9rem",
            color: C.white,
            margin: 0,
            marginBottom: "0.5rem",
          }}>
            Ready to map your skills?
          </h3>
          <p style={{ color: C.muted, fontSize: "0.92rem", margin: 0, lineHeight: 1.6 }}>
            Start with flashcards or explore what your role demands today.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap" }}>
          <button
            onClick={() => navigate("/learn")}
            style={{
              background: C.amber, color: C.ink,
              border: "none", borderRadius: 10,
              padding: "0.78rem 1.8rem",
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.88rem", fontWeight: 800,
              cursor: "pointer", letterSpacing: "0.05em",
              textTransform: "uppercase",
              transition: "opacity 0.15s, transform 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
          >
            Track Progress →
          </button>
        </div>
      </div>
    </div>
  );
}
