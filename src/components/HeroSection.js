import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 40;
    const dots = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 4,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const STAR_COUNT = 12;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      len: Math.random() * 18 + 10,
      speed: Math.random() * 2.5 + 1.5,
      alpha: Math.random() * 0.6 + 0.3,
      width: Math.random() * 1.2 + 0.4,
    }));

    const resetStar = (s) => {
      s.x = Math.random() * canvas.width;
      s.y = -s.len;
      s.len = Math.random() * 18 + 10;
      s.speed = Math.random() * 2.5 + 1.5;
      s.alpha = Math.random() * 0.6 + 0.3;
      s.width = Math.random() * 1.2 + 0.4;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(26,115,232,${0.1 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      dots.forEach(d => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26,115,232,${d.alpha})`;
        ctx.fill();
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      });

      stars.forEach(s => {
        const angle = Math.PI / 5;
        const ex = s.x + Math.cos(angle) * s.len;
        const ey = s.y + Math.sin(angle) * s.len;
        const grad = ctx.createLinearGradient(s.x, s.y, ex, ey);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(0.4, `rgba(180,210,255,${s.alpha * 0.5})`);
        grad.addColorStop(1, `rgba(26,115,232,${s.alpha})`);
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.lineCap = "round";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(ex, ey, s.width * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26,115,232,${s.alpha})`;
        ctx.fill();
        s.x += Math.cos(angle) * s.speed;
        s.y += Math.sin(angle) * s.speed;
        if (s.y > canvas.height + s.len || s.x > canvas.width + s.len) resetStar(s);
      });

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

function Typewriter({ words = ["impossible", "unforgettable", "unstoppable"] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
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
    <span style={{ color: "#6b7280", fontStyle: "italic", fontWeight: 300 }}>
      {displayed}
      <span style={{ borderRight: "2px solid #1A73E8", marginLeft: 1, animation: "blink 1s step-end infinite" }} />
    </span>
  );
}

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div style={{
      backgroundColor: "#ddd5f2",
      minHeight: "100vh",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      fontFamily: "system-ui, sans-serif",
    }}>
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
          background:transparent; color:#18181b;
          border:2px solid #18181b; border-radius:12px;
          font-size:14px; font-weight:600;
          cursor:pointer;
          white-space: nowrap;
          transition: background 0.25s, color 0.25s, transform 0.15s;
        }
        .btn-secondary:hover { background:#18181b; color:white; transform:scale(1.05); }
        .img-card { position:relative; overflow:hidden; border:1px solid rgba(0,0,0,0.12); background:rgba(255,255,255,0.3); }
        .img-card img { width:100%; height:100%; object-fit:cover; filter:grayscale(1) contrast(1.2); opacity:0.8; transition:transform 0.7s ease, filter 0.7s ease; }
        .img-card:hover img { transform:scale(1.05); filter:grayscale(0); }
        .bounce-arr { animation: bounce-arrow 1.5s ease-in-out infinite; display:inline-block; }
      `}</style>

      {/* ── BACKGROUND LAYERS ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(26,115,232,0.15) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div style={{
        position:"absolute", top:"30%", right:"-120px",
        width:"440px", height:"440px", borderRadius:"50%",
        background:"radial-gradient(circle at 60% 50%, rgba(139,92,246,0.18) 0%, transparent 70%)",
        filter:"blur(55px)", pointerEvents:"none",
        animation:"orb2 18s ease-in-out infinite",
      }} />
      <div style={{
        position:"absolute", bottom:"-100px", left:"35%",
        width:"380px", height:"380px", borderRadius:"50%",
        background:"radial-gradient(circle at 50% 50%, rgba(26,115,232,0.15) 0%, transparent 70%)",
        filter:"blur(60px)", pointerEvents:"none",
        animation:"orb3 20s ease-in-out infinite",
      }} />
      <div style={{
        position:"absolute", top:"60px", right:"-60px",
        width:"320px", height:"1px",
        background:"linear-gradient(to left, rgba(26,115,232,0.5), transparent)",
        transform:"rotate(-35deg)", pointerEvents:"none",
      }} />
      <div style={{
        position:"absolute", top:"100px", right:"-40px",
        width:"220px", height:"1px",
        background:"linear-gradient(to left, rgba(139,92,246,0.35), transparent)",
        transform:"rotate(-35deg)", pointerEvents:"none",
      }} />

      <ParticleCanvas />

      {/* ── CONTENT ── */}
      <div style={{
        position:"relative", zIndex:10,
        maxWidth:"1280px", margin:"0 auto",
        padding: isMobile ? "48px 20px" : "64px 48px",
      }}>
        <div style={{
          display:"grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "40px" : "48px",
          alignItems:"center",
          minHeight: isMobile ? "auto" : "75vh",
        }}>

          {/* LEFT */}
          <div style={{ display:"flex", flexDirection:"column", gap: isMobile ? "20px" : "32px" }}>

            {/* Pill */}
            <div className="fade-up-1" style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              padding:"4px 12px", borderRadius:"999px",
              border:"1px solid rgba(0,0,0,0.2)",
              background:"rgba(255,255,255,0.45)",
              backdropFilter:"blur(8px)",
              fontSize:"10px", fontFamily:"monospace",
              letterSpacing:"0.12em", textTransform:"uppercase", color:"#3f3f46",
              width:"fit-content",
            }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#1A73E8", animation:"blink 1.2s step-end infinite" }} />
              AI-Driven Creative Studio
            </div>

            {/* Headline */}
            <h1 className="fade-up-2" style={{
              fontSize: isMobile ? "clamp(36px,10vw,52px)" : "clamp(40px,5vw,68px)",
              fontWeight:700, lineHeight:1.05, color:"#18181b", margin:0,
            }}>
              Make your <br />
              brand <Typewriter /> <br />
              to ignore.
            </h1>

            {/* Sub */}
            <p className="fade-up-3" style={{
              fontSize: isMobile ? "15px" : "16px",
              color:"#52525b", maxWidth:"480px", lineHeight:1.7, margin:0,
            }}>
              TrendSEO blends performance marketing, SEO, and AI-powered creative to turn scrolls
              into sales — built for founders and store owners who want growth that compounds.
            </p>

            {/* Buttons */}
            <div className="fade-up-4" style={{
              display:"flex", gap:"12px", flexWrap:"wrap",
              flexDirection: "row",
              alignItems: "center",
            }}>
              <button className="btn-primary">
                Start a project <span>→</span>
              </button>
              <button className="btn-secondary">
                See our work <span>→</span>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ display:"flex", flexDirection:"column", gap:"24px" }}>

            {/* Big capsule */}
            <div className="img-card fade-up-2" style={{
              height: isMobile ? "240px" : "360px",
              borderRadius: isMobile ? "28px" : "48px",
              boxShadow:"0 8px 40px rgba(26,115,232,0.12), 0 2px 12px rgba(0,0,0,0.07)",
            }}>
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800" alt="Visual Array" />
              <div style={{
                position:"absolute", top:16, right:16,
                fontFamily:"monospace", fontSize:"10px",
                background:"rgba(255,255,255,0.85)", backdropFilter:"blur(6px)",
                padding:"4px 12px", borderRadius:"999px",
                border:"1px solid rgba(0,0,0,0.1)", color:"#3f3f46",
              }}>
                NODE_01 // VISUAL_ARRAY
              </div>
            </div>

            {/* Bottom row */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:"16px", alignItems:"center" }}>
              <div className="img-card fade-up-3" style={{
                height: isMobile ? "80px" : "110px",
                borderRadius:"999px",
                boxShadow:"0 4px 20px rgba(26,115,232,0.09)",
              }}>
                <img src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600" alt="Stream" />
              </div>
              <a href="/services" style={{
                display:"flex", alignItems:"center", gap:"6px",
                fontFamily:"monospace", fontSize:"11px", fontWeight:700,
                color:"#3f3f46", textDecoration:"none", whiteSpace:"nowrap",
              }}>
                More Details
                <span className="bounce-arr" style={{ color:"#1A73E8" }}>↓</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}