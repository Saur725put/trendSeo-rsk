"use client";

import '@/styles/OurteamStyle.css'
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Ourteam3 from './Ourteam3';

// Register ScrollTrigger safely for Next.js SSR environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const crewCards = [
  { id: 6, src: "/images/teams/garvit.png", rot: 4, depth: 11 },
  { id: 1, src: "/images/teams/sourav.png", rot: -9, depth: 14 },
  { id: 3, src: "/images/teams/shaswat.png", rot: -2, depth: 8 },
  { id: 4, src: "/images/teams/Pratyaksh.png", rot: 3, depth: 12 },
  { id: 5, src: "/images/teams/Sumit.png", rot: 0, depth: 6 },
  { id: 2, src: "/images/teams/navneet.png", rot: -5, depth: 10 },
  { id: 7, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=faces&q=80", rot: 7, depth: 9 },
  { id: 8, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=faces&q=80", rot: -4, depth: 13 },
];

const Ourteam2 = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const bigResultsWrapRef = useRef(null);
  const cardsRowRef = useRef(null);
  const sublineRef = useRef(null);

  // Parallax mouse variables kept outside re-renders via a mutable ref object
  const mouseCoords = useRef({ mx: 0, my: 0, tx: 0, ty: 0 });

  useEffect(() => {
    // gsap.context handles scoping class matches to our current component container
    const ctx = gsap.context(() => {
      // 1. Set Initial Properties
      gsap.set(".small-team .word > span", { y: "105%" });
      gsap.set(".big-results .letter", { y: 80, opacity: 0 });
      gsap.set(sublineRef.current, { opacity: 0, y: 20 });

      const cards = gsap.utils.toArray(".card");
      cards.forEach((card) => {
        const rot = parseFloat(card.dataset.rot || "0");
        gsap.set(card, { y: -800, rotation: rot + 25, opacity: 0, scale: 0.7 });
      });

      // 2. Intro Loading Sequence Animation Timeline
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .to(".small-team .word > span", { y: "0%", duration: 0.9, stagger: 0.08 }, 0.2)
        .to(".big-results .letter", { y: 0, opacity: 1, duration: 0.9, stagger: 0.05, ease: "back.out(1.6)" }, 0.45)
        .to(cards, {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: (i, el) => parseFloat(el.dataset.rot || "0"),
          duration: 1.1,
          stagger: { each: 0.08, from: "center" },
          ease: "back.out(1.4)",
        }, 0.6)
        .to(sublineRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1.4);

      // 3. Ambient Infinite Float Loop For Hero Portraits
      cards.forEach((card, i) => {
        const rot = parseFloat(card.dataset.rot || "0");
        gsap.to(card, {
          y: `+=${8 + (i % 3) * 5}`,
          rotation: rot + (i % 2 === 0 ? 1.5 : -1.5),
          duration: 3 + (i % 4) * 0.5,
          delay: 1.8 + i * 0.1,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      // 4. Hero Dispersal & Scaling Triggered By Page Scroll
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(".big-results", { scale: 1 + 0.15 * p, opacity: 1 - 0.4 * p });
          gsap.set(".small-team", { y: -60 * p, opacity: 1 - p * 1.5 });
          gsap.set(sublineRef.current, { opacity: 1 - p * 2 });

          const moves = [
            { x: -260, y: -40, rot: -25 },
            { x: -200, y: 20, rot: -18 },
            { x: -120, y: 80, rot: -10 },
            { x: -40, y: 120, rot: -4 },
            { x: 40, y: 120, rot: 4 },
            { x: 120, y: 80, rot: 12 },
            { x: 200, y: 20, rot: 22 },
            { x: 260, y: -40, rot: 28 },
          ];

          cards.forEach((card, i) => {
            const m = moves[i] || { x: 0, y: 0, rot: 0 };
            const rest = parseFloat(card.dataset.rot || "0");
            gsap.set(card, {
              x: m.x * p,
              y: m.y * p,
              rotation: rest + m.rot * p,
            });
          });
        },
      });
    }, containerRef);

    // 5. Dynamic Parallax Mouse Tracking Matrix Loops
    const heroEl = heroRef.current;
    const handleMouseMove = (e) => {
      if (!heroEl) return;
      const r = heroEl.getBoundingClientRect();
      mouseCoords.current.mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      mouseCoords.current.my = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const handleMouseLeave = () => {
      mouseCoords.current.mx = 0;
      mouseCoords.current.my = 0;
    };

    heroEl?.addEventListener("mousemove", handleMouseMove);
    heroEl?.addEventListener("mouseleave", handleMouseLeave);

    let animFrameId;
    const parallaxLoop = () => {
      const coords = mouseCoords.current;
      coords.tx += (coords.mx - coords.tx) * 0.05;
      coords.ty += (coords.my - coords.ty) * 0.05;

      const cards = heroEl?.querySelectorAll(".card");
      cards?.forEach((card) => {
        const d = parseFloat(card.dataset.depth || "8");
        card.style.transform = `translate(${coords.tx * d}px, ${coords.ty * d * 0.5}px)`;
      });
      animFrameId = requestAnimationFrame(parallaxLoop);
    };
    parallaxLoop();

    // Clean up loops and contextual animation scopes on Component Unmount
    return () => {
      ctx.revert();
      heroEl?.removeEventListener("mousemove", handleMouseMove);
      heroEl?.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  // 6. Individual Card Hover Focus Matrices (3D Tilt Effect)
  const handleCard3DMove = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(card, {
      rotateX: -py * 16,
      rotateY: px * 16,
      scale: 1.12,
      zIndex: 20,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 700,
      overwrite: "auto",
    });
  };

  const handleCard3DLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      zIndex: "",
      duration: 0.8,
      ease: "elastic.out(1, 0.6)",
      overwrite: "auto",
    });
  };

  const handleCardClick = (e) => {
    gsap.fromTo(e.currentTarget, { scale: 1.15 }, {
      scale: 1.05,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  };

  // 7. Letter Spacing/Hover Staggers for Header Content
  const handleBigResultsHover = () => {
    gsap.to(".big-results .letter", {
      y: -8,
      duration: 0.5,
      stagger: 0.03,
      ease: "back.out(1.6)",
    });
  };

  const handleBigResultsLeave = () => {
    gsap.to(".big-results .letter", {
      y: 0,
      duration: 0.6,
      stagger: 0.03,
      ease: "elastic.out(1, 0.6)",
    });
  };

  const handleButtonPress = (e) => {
    gsap.fromTo(e.currentTarget, { scale: 1 }, {
      scale: 0.93,
      duration: 0.12,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <div className="grain"></div>

      {/* HERO SECTION */}
      <section ref={heroRef} className="hero">
        <h1 className="small-team" id="smallTeam">
          <span className="word"><span>Small</span></span>&nbsp;
          <span className="word"><span>team,</span></span>
        </h1>

        <div 
          ref={bigResultsWrapRef} 
          className="big-results-wrap"
          onMouseEnter={handleBigResultsHover}
          onMouseLeave={handleBigResultsLeave}
        >
          <div className="big-results" id="bigResults">
            {"big results".split("").map((char, index) => (
              <span key={index} className="letter">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>

        {/* Card Row of Portraits */}
        <div ref={cardsRowRef} className="cards-row" id="cardsRow">
          {crewCards.map((card) => (
            <div
              key={card.id}
              className={`card card-${card.id}`}
              data-rot={card.rot}
              data-depth={card.depth}
              onMouseMove={handleCard3DMove}
              onMouseLeave={handleCard3DLeave}
              onClick={handleCardClick}
              style={{ willChange: "transform, opacity" }}
            >
              <Image 
                src={card.src} 
                alt="Crew member portrait" 
                width={400} 
                height={600}
                priority={card.id <= 4}
              />
            </div>
          ))}
        </div>

        <div ref={sublineRef} className="subline" id="subline">
          <button className="arrow-pill" onClick={handleButtonPress}>
            Meet the crew
            <span className="ar">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </button>
          <div className="subline-text">8 people. 60+ shipped projects. Zero filler.</div>
        </div>
      </section>

      {/* NEW INTEGRATED LANDSCAPE TEAM GRID SECTION */}
      <Ourteam3 />
    </div>
  );
};

export default Ourteam2;