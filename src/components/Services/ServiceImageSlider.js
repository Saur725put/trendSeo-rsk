"use client";
import React, { useRef, useEffect, useCallback, useState } from "react";

const DATA = [
  {
    id: "fashion",
    title: "Fashion & Apparel",
    img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "food",
    title: "Food & Beverage",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "beauty",
    title: "Beauty & Cosmetics",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "electronics",
    title: "Consumer Electronics",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "automotive",
    title: "Automotive Parts",
    img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
  },
];

const N = DATA.length;
const ITEMS = [...DATA, ...DATA, ...DATA];
const TOTAL = ITEMS.length;
const INIT = N;

export default function IndustryExpertise() {
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);
  const lockRef = useRef(false);
  const [center, setCenter] = useState(INIT);
  const [isMobile, setIsMobile] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cols = isMobile ? 1 : 3;

  const move = useCallback((idx, animate) => {
    const track = trackRef.current;
    if (!track) return;
    const cardW = track.parentElement.offsetWidth / cols;
    const offset = cols === 1 ? idx : idx - 1;
    const tx = -(offset * cardW);
    track.style.transition = animate
      ? "transform 0.85s cubic-bezier(0.45, 0, 0.2, 1)"
      : "none";
    track.style.transform = `translateX(${tx}px)`;
  }, [cols]);

  useEffect(() => { move(center, false); }, [cols, move]);

  useEffect(() => {
    const onResize = () => move(center, false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [center, move]);

  const slide = useCallback((dir) => {
    if (lockRef.current) return;
    lockRef.current = true;
    setCenter((prev) => {
      const next = prev + dir;
      move(next, true);
      return next;
    });
  }, [move]);

  const goNext = useCallback(() => slide(1), [slide]);
  const goPrev = useCallback(() => slide(-1), [slide]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onEnd = () => {
      lockRef.current = false;
      setCenter((cur) => {
        const needsReset = cur >= N * 2 || cur < N;
        if (!needsReset) return cur;
        const r = cur >= N * 2 ? cur - N : cur + N;
        setIsJumping(true);
        move(r, false);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setIsJumping(false))
        );
        return r;
      });
    };
    track.addEventListener("transitionend", onEnd);
    return () => track.removeEventListener("transitionend", onEnd);
  }, [move]);

  const resetAutoplay = useCallback(() => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(goNext, 3500);
  }, [goNext]);

  useEffect(() => {
    autoplayRef.current = setInterval(goNext, 3000);
    return () => clearInterval(autoplayRef.current);
  }, [goNext]);

  const touchStartX = useRef(null);
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { resetAutoplay(); diff > 0 ? goNext() : goPrev(); }
    touchStartX.current = null;
  };

  const cardTransition = isJumping
    ? "none"
    : "filter 0.85s ease, opacity 0.85s ease, transform 0.85s cubic-bezier(0.45,0,0.2,1)";

  const titleTransition = isJumping
    ? "none"
    : "opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s";

  return (
    <section style={{
      width: "100%",
      background: "#101010", // Changed background color parameter to exact #101010
      color: "#ffffff",     // Handled text standard layout contrast parameters
      padding: isMobile ? "48px 24px" : "80px 48px",
      boxSizing: "border-box",
      fontFamily: "inherit",
      overflow: "hidden",
      userSelect: "none",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        <h2 style={{
          fontSize: isMobile ? "24px" : "clamp(28px, 4vw, 40px)",
          fontWeight: 700,
          letterSpacing: "-0.5px",
          color: "#ffffff", // Sharp contrast alignment
          margin: isMobile ? "0 0 32px" : "0 0 56px",
        }}>
          Industry Expertise
        </h2>

        <div
          style={{ overflow: "hidden", position: "relative" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={trackRef}
            style={{
              display: "flex",
              width: `${(TOTAL / cols) * 100}%`,
              willChange: "transform",
            }}
          >
            {ITEMS.map((item, i) => {
              const dist = i - center;
              const isCenter   = dist === 0;
              const isAdjacent = !isMobile && Math.abs(dist) === 1;

              return (
                <div
                  key={`${item.id}-${i}`}
                  style={{
                    flex: `0 0 ${100 / TOTAL}%`,
                    padding: isMobile ? "0" : "0 2px",
                    boxSizing: "border-box",
                    cursor: isAdjacent ? "pointer" : "default",
                  }}
                  onClick={() => {
                    if (dist === 1)  { resetAutoplay(); goNext(); }
                    if (dist === -1) { resetAutoplay(); goPrev(); }
                  }}
                >
                  <div style={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    borderRadius: "4px",
                    overflow: "hidden",
                    background: "#111111",
                    transition: cardTransition,
                    // Kept non-centered cards slightly grayscaled/muted for high-end cinematic layer split over dark bg
                    filter:    isCenter ? "grayscale(0%)"   : "grayscale(40%)",
                    opacity:   isCenter ? 1 : isAdjacent ? 0.45 : (isMobile ? 0 : 0.1),
                    transform: isCenter ? "scale(1)"        : (isAdjacent ? "scale(0.94)" : "scale(0.9)"),
                  }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>

                  <div style={{
                    textAlign: "center",
                    marginTop: "20px",
                    minHeight: "32px",
                    transition: titleTransition,
                    opacity:   isCenter ? 1 : 0,
                    transform: isCenter ? "translateY(0)" : "translateY(8px)",
                  }}>
                    <h3 style={{
                      fontSize: isMobile ? "18px" : "clamp(18px, 2vw, 24px)",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      color: "#ffffff", // Typography optimized
                      margin: 0,
                    }}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{
          display: "flex",
          justify: "flex-end",
          justifyContent: "flex-end",
          gap: "32px",
          marginTop: isMobile ? "28px" : "48px",
        }}>
          {[["←", goPrev], ["→", goNext]].map(([arrow, fn]) => (
            <button
              key={arrow}
              onClick={() => { resetAutoplay(); fn(); }}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "8px", fontSize: "24px",
                color: "#ffffff", // Standard dark controller visibility parameters
                lineHeight: 1, transition: "opacity 0.2s",
                opacity: 0.5,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
            >
              {arrow}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}