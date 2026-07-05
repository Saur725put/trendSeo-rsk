"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { id: "home",     label: "Home",     path: "/" },
    { id: "services", label: "Services", path: "/services" },
    { id: "about",    label: "About",    path: "/about" },
    { id: "blog",     label: "Blog",     path: "/blog" },
    { id: "contact",  label: "Contact",  path: "/contact" },
  ];

  return (
    <>
      <style>{`
        .header-hamburger { display: none; }
        .header-nav        { display: flex; }
        .header-actions    { display: flex; }
        .header-spacer     { display: none; }

        @media (max-width: 920px) {
          .header-hamburger { display: flex !important; }
          .header-nav        { display: none !important; }
          .header-actions    { display: none !important; }
          .header-spacer     { display: block !important; }
          .header-logo {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>

      <header
        style={{ backgroundColor: "#000000" }}
        className="w-full sticky top-0 z-50 border-b border-white/5"
      >
        <div
          className="w-full max-w-[1320px] mx-auto px-6 md:px-12 flex justify-between items-center relative"
          style={{ height: "76px" }}
        >

          {/* Hamburger Menu Option — Visible on Mobile/Tablet screens (< 920px) */}
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            className="header-hamburger flex-col justify-center gap-[6px] w-10 h-10 flex-shrink-0 z-10 bg-transparent border-none cursor-pointer"
          >
            <span style={{ display:"block", height:"2.5px", width:"28px", backgroundColor:"#ffffff", borderRadius:"2px" }} />
            <span style={{ display:"block", height:"2.5px", width:"28px", backgroundColor:"#ffffff", borderRadius:"2px" }} />
            <span style={{ display:"block", height:"2.5px", width:"28px", backgroundColor:"#ffffff", borderRadius:"2px" }} />
          </button>

          {/* Logo Brand Frame */}
          <Link href="/" className="header-logo flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(26,115,232,0.4)] transition-transform duration-300 group-hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-wider text-white uppercase group-hover:text-zinc-300 transition-colors">
              SEO MITRA
            </span>
          </Link>

          {/* Desktop Navbar Center-aligned */}
          <nav className="header-nav items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                  className={`
                    text-[15px] font-medium tracking-wide transition-colors duration-200 py-1 relative flex items-center gap-1
                    ${isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-white"}
                  `}
                >
                  {item.label}
                  {item.id === "services" && (
                    <span className="text-[10px] opacity-70 mt-0.5">▼</span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Hand Side Action Block */}
          <div className="header-actions items-center shrink-0">
            {/* Free Audit Button Capsule with Blue Background & Large Font Scales */}
            <Link 
              href="/contact"
              className="bg-blue-600 text-white text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 shadow-[0_4px_20px_rgba(26,115,232,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Free Audit</span>
              <span className="text-xs font-normal font-sans">↗</span>
            </Link>
          </div>

          {/* Right spacer for mobile centering layouts */}
          <div className="header-spacer w-10 flex-shrink-0" />

        </div>
      </header>

      {/* Mobile Drawer Overlay — Preserved Original Custom Architecture */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-[999] flex"
          onClick={() => setDrawerOpen(false)}
        >
          <div
            style={{ backgroundColor: "#000000", width: "340px", maxWidth: "85vw" }}
            className="relative h-full flex flex-col px-8 py-8 shadow-2xl border-r border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between mb-10">
              <Link href="/" onClick={() => setDrawerOpen(false)}>
                <img
                  src="/images/trendSEO12.jpeg"
                  alt="TrendSEO Logo"
                  style={{ height: "40px", width: "auto", objectFit: "contain" }}
                />
              </Link>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#ffffff", fontSize: "16px", background: "transparent", cursor: "pointer"
                }}
              >
                ✕
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.id}
                    href={item.path}
                    onClick={() => setDrawerOpen(false)}
                    style={{
                      padding: "16px 0",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      fontSize: "17px",
                      fontWeight: "700",
                      fontFamily: "monospace",
                      letterSpacing: "0.05em",
                      color: isActive ? "#1A73E8" : "#e4e4e7",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Backdrop Blur Layer */}
          <div style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }} />
        </div>
      )}
    </>
  );
}