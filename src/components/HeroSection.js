"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

function Typewriter({ words = ["impossible", "too massive", "far too big"] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((idx + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, words]);

  return (
    <span style={{ color: "#a1a1aa", fontStyle: "italic", fontWeight: 300 }}>
      {displayed}
      <span
        style={{
          borderRight: "2px solid #1A73E8",
          marginLeft: 1,
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter(); // ✅ Fixed: Declared inside HeroSection component!

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes orb2 {
          0%,100%{ transform: translate(0,0) scale(1); }
          50%{ transform: translate(-30px,40px) scale(1.12); }
        }
        @keyframes orb3 {
          0%,100%{ transform: translate(0,0) scale(1); }
          50%{ transform: translate(20px,25px) scale(0.95); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes shimmer {
          from { transform: translateX(-100%) skewX(-15deg); }
          to   { transform: translateX(300%) skewX(-15deg); }
        }
        @keyframes bounce-arrow {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(5px); }
        }
        .fade-up-1 { animation: fadeUp 0.7s ease both; animation-delay: 0.1s; }
        .fade-up-2 { animation: fadeUp 0.7s ease both; animation-delay: 0.25s; }
        .fade-up-3 { animation: fadeUp 0.7s ease both; animation-delay: 0.4s; }
        .fade-up-4 { animation: fadeUp 0.7s ease both; animation-delay: 0.55s; }
        .btn-primary {
          position:relative; overflow:hidden;
          display:inline-flex; align-items:center; gap:8px;
          padding:12px 28px;
          background:#1A73E8; color:white;
          border:none; border-radius:12px;
          font-size:14px; font-weight:600;
          cursor:pointer;
          box-shadow: 0 4px 20px rgba(26,115,232,0.35);
          transition: transform 0.15s, box-shadow 0.15s;
          white-space: nowrap;
        }
        .btn-primary:hover { transform:scale(1.05); box-shadow:0 6px 28px rgba(26,115,232,0.45); }
        .btn-primary::after {
          content:''; position:absolute; top:0; left:0; width:40%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent);
          animation: shimmer 2.5s infinite;
        }
        .btn-secondary {
          display:inline-flex; align-items:center; gap:8px;
          padding:12px 28px;
          background:transparent; color:#ffffff;
          border:2px solid #ffffff; border-radius:12px;
          font-size:14px; font-weight:600;
          cursor:pointer;
          white-space: nowrap;
          transition: background 0.25s, color 0.25s, transform 0.15s;
        }
        .btn-secondary:hover { background:#ffffff; color:#000000; transform:scale(1.05); }
        
        .img-card { 
          position: relative; 
          overflow: hidden; 
          border: 1px solid rgba(255, 255, 255, 0.15); 
          background: rgba(255, 255, 255, 0.05); 
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .img-card:hover {
          border-color: rgba(26, 115, 232, 0.4);
          box-shadow: 0 12px 40px rgba(26, 115, 232, 0.2);
        }
        .img-card img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          filter: none; 
          opacity: 1; 
          transition: transform 0.5s ease; 
        }
        .img-card:hover img { 
          transform: scale(1.04); 
        }
        .bounce-arr { animation: bounce-arrow 1.5s ease-in-out infinite; display:inline-block; }
      `}</style>

      {/* ── BACKGROUND LAYERS ── */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-120px",
          width: "440px",
          height: "440px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 60% 50%, rgba(139,92,246,0.25) 0%, transparent 70%)",
          filter: "blur(65px)",
          pointerEvents: "none",
          animation: "orb2 18s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "35%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(26,115,232,0.22) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          animation: "orb3 20s ease-in-out infinite",
        }}
      />

      {/* ── CONTENT ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: isMobile ? "48px 20px" : "64px 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "40px" : "48px",
            alignItems: "center",
            minHeight: isMobile ? "auto" : "75vh",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "20px" : "32px",
            }}
          >
            <div
              className="fade-up-1"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 12px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(8px)",
                fontSize: "10px",
                fontFamily: "monospace",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#e4e4e7",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#1A73E8",
                  animation: "blink 1.2s step-end infinite",
                }}
              />
              AI-Driven Creative Studio
            </div>

            <h1
              className="fade-up-2"
              style={{
                fontSize: isMobile
                  ? "clamp(36px,10vw,52px)"
                  : "clamp(40px,5vw,68px)",
                fontWeight: 700,
                lineHeight: 1.05,
                color: "#ffffff",
                margin: 0,
              }}
            >
              Make your <br />
              brand <Typewriter /> <br />
              to ignore.
            </h1>

            <p
              className="fade-up-3"
              style={{
                fontSize: isMobile ? "15px" : "16px",
                color: "#a1a1aa",
                maxWidth: "480px",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              sparrowLingo weaves data-driven search engine optimization,
              performance marketing, and precision targeting frameworks into a
              cohesive customer acquisition engine. We help scaling brands own
              the search results.
            </p>

            <div
              className="fade-up-4"
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <button onClick={() => router.push('/contact')} className="btn-primary">
                Start a project <span>→</span>
              </button>
              <button onClick={() => router.push('/services/local-seo')} className="btn-secondary">
                See our work <span>→</span>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {/* Big capsule */}
            <div
              className="img-card fade-up-2"
              style={{
                height: isMobile ? "240px" : "360px",
                borderRadius: isMobile ? "28px" : "48px",
                boxShadow:
                  "0 8px 40px rgba(26,115,232,0.08), 0 2px 12px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src="/images/marketing_image/digital1.jpg"
                alt="Digital Marketing"
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  fontFamily: "monospace",
                  fontSize: "10px",
                  background: "rgba(0,0,0,0.75)",
                  backdropFilter: "blur(6px)",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#e4e4e7",
                }}
              >
                NODE_01 // VISUAL_ARRAY
              </div>
            </div>

            {/* Bottom row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <div
                className="img-card fade-up-3"
                style={{
                  height: isMobile ? "80px" : "110px",
                  borderRadius: "999px",
                  boxShadow: "0 4px 20px rgba(26,115,232,0.05)",
                }}
              >
                <Image
                  src="/images/marketing_image/digital4.jpg"
                  alt="Digital Marketing"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <button
                onClick={() => router.push('/services/local-seo')}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "monospace",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#e4e4e7",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                More Details
                <span className="bounce-arr" style={{ color: "#1A73E8" }}>
                  ↓
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}