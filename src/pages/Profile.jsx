import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import C from "../constants/colors";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user') || 'null');
    if (!userData) {
      navigate('/register');
      return;
    }
    setUser(userData);
  }, [navigate]);

  if (!user) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: C.surface,
      }}>
        <div style={{ fontSize: "1.2rem", color: C.ink }}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: `linear-gradient(135deg, ${C.surface} 0%, ${C.amberLight} 100%)`,
      padding: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        background: C.white,
        borderRadius: 20,
        padding: "3rem",
        boxShadow: "0 25px 50px rgba(26,18,8,0.15)",
        border: `2px solid ${C.amber}`,
        maxWidth: 500,
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative element */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: `linear-gradient(90deg, ${C.amber}, ${C.amberMid}, ${C.amber})`,
        }}></div>

        {/* Welcome Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "2.5rem",
        }}>
          <div style={{
            fontSize: "3rem",
            marginBottom: "0.5rem",
          }}>
            👋
          </div>
          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "2.5rem",
            color: C.ink,
            margin: "0 0 0.5rem 0",
          }}>
            Welcome back, {user.name}!
          </h1>
          <p style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1.1rem",
            color: C.slate,
            margin: 0,
          }}>
            Here's your profile information
          </p>
        </div>

        {/* Profile Information Cards */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}>
          {/* Name Card */}
          <div style={{
            background: C.surface,
            borderRadius: 12,
            padding: "1.5rem",
            border: `1px solid ${C.border}`,
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(26,18,8,0.1)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}>
            <div style={{
              fontSize: "1.5rem",
              color: C.amber,
            }}>
              👤
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: C.muted,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "0.25rem",
              }}>
                Full Name
              </div>
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "1.2rem",
                color: C.ink,
                fontWeight: 500,
              }}>
                {user.name}
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div style={{
            background: C.surface,
            borderRadius: 12,
            padding: "1.5rem",
            border: `1px solid ${C.border}`,
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(26,18,8,0.1)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}>
            <div style={{
              fontSize: "1.5rem",
              color: C.amber,
            }}>
              📧
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: C.muted,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "0.25rem",
              }}>
                Email Address
              </div>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.1rem",
                color: C.ink,
                fontWeight: 500,
              }}>
                {user.email}
              </div>
            </div>
          </div>

          {/* Mobile Card */}
          <div style={{
            background: C.surface,
            borderRadius: 12,
            padding: "1.5rem",
            border: `1px solid ${C.border}`,
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(26,18,8,0.1)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}>
            <div style={{
              fontSize: "1.5rem",
              color: C.amber,
            }}>
              🆔
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: C.muted,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "0.25rem",
              }}>
                Employee ID
              </div>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.1rem",
                color: C.ink,
                fontWeight: 500,
              }}>
                {user.employeeId}
              </div>
            </div>
          </div>

          {/* Designation Card */}
          <div style={{
            background: C.surface,
            borderRadius: 12,
            padding: "1.5rem",
            border: `1px solid ${C.border}`,
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(26,18,8,0.1)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}>
            <div style={{
              fontSize: "1.5rem",
              color: C.amber,
            }}>
              💼
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: C.muted,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "0.25rem",
              }}>
                Designation
              </div>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.1rem",
                color: C.ink,
                fontWeight: 500,
              }}>
                {user.designation}
              </div>
            </div>
          </div>

          {/* User Type Card */}
          <div style={{
            background: C.surface,
            borderRadius: 12,
            padding: "1.5rem",
            border: `1px solid ${C.border}`,
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(26,18,8,0.1)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}>
            <div style={{
              fontSize: "1.5rem",
              color: C.amber,
            }}>
              {user.userType === 'recruiter' ? '🏢' : '🎓'}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: C.muted,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "0.25rem",
              }}>
                Role
              </div>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.1rem",
                color: C.ink,
                fontWeight: 500,
              }}>
                {user.userType === 'recruiter' ? "I'm a recruiter" : "I'm a learner"}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => navigate('/')}
          style={{
            background: `linear-gradient(135deg, ${C.amber} 0%, ${C.amberMid} 100%)`,
            color: C.ink,
            border: "none",
            borderRadius: 12,
            padding: "1rem 2rem",
            fontSize: "1.1rem",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.3s",
            marginTop: "2.5rem",
            width: "100%",
            boxShadow: "0 4px 15px rgba(245,130,31,0.3)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(245,130,31,0.4)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(245,130,31,0.3)";
          }}
        >
          🏠 Back to Home
        </button>

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.removeItem('user');
            localStorage.removeItem('stats');
            navigate('/');
          }}
          style={{
            background: "#ff6b6b",
            color: C.white,
            border: "none",
            borderRadius: 12,
            padding: "1rem 2rem",
            fontSize: "1.1rem",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.3s",
            marginTop: "1rem",
            width: "100%",
            boxShadow: "0 4px 15px rgba(255,107,107,0.3)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(255,107,107,0.4)";
            e.currentTarget.style.background = "#ff5252";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(255,107,107,0.3)";
            e.currentTarget.style.background = "#ff6b6b";
          }}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}