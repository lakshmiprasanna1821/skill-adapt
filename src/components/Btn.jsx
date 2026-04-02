import { useState } from "react";
import C from "../constants/colors";

export default function Btn({ children, onClick, disabled, style: extra = {}, variant = "ghost" }) {
  const [hov, setHov] = useState(false);
  const isPrimary = variant === "primary";

  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}
      disabled={disabled}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: isPrimary ? "0.65rem 1.4rem" : "0.5rem 1rem",
        background: isPrimary ? (hov ? "#e0720f" : C.amber) : "none",
        border: isPrimary ? "none" : `1.5px solid ${hov && !disabled ? C.amber : C.border}`,
        borderRadius: 6,
        fontFamily: "'Syne', sans-serif",
        fontSize: "0.78rem",
        fontWeight: 700,
        color: isPrimary ? C.ink : hov && !disabled ? C.amber : C.slate,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.35 : 1,
        transition: "all 0.15s",
        letterSpacing: isPrimary ? "0.05em" : 0,
        textTransform: isPrimary ? "uppercase" : "none",
        ...extra,
      }}
    >
      {children}
    </button>
  );
}
