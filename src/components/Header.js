"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { id: "about",    label: "About",    path: "/about" },
    { id: "services", label: "Services", path: "/services" },
    { id: "blog",     label: "Blog",     path: "/blog" },
    { id: "contact",  label: "Contact",  path: "/contact" },
  ];

  return (
    <>
      <style>{`
        .header-hamburger { display: none; }
        .header-nav        { display: flex; }
        .header-spacer     { display: none; }

        @media (max-width: 650px) {
          .header-hamburger { display: flex; }
          .header-nav        { display: none; }
          .header-spacer     { display: block; }
          .header-logo {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* Header BG set to #000000 and border changed to zinc-800 for subtle dark separation */}
      <header
        style={{ backgroundColor: "#000000" }}
        className="w-full sticky top-0 z-50 border-b "
      >
        <div
          className="w-full max-w-[1320px] mx-auto px-6 md:px-12 flex justify-between items-center relative"
          style={{ height: "72px" }}
        >

          {/* Hamburger — mobile only (Changed bars to white/#ffffff) */}
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            className="header-hamburger flex-col justify-center gap-[6px] w-10 h-10 flex-shrink-0 z-10 bg-transparent border-none cursor-pointer"
          >
            <span style={{ display:"block", height:"2.5px", width:"28px", backgroundColor:"#ffffff", borderRadius:"2px" }} />
            <span style={{ display:"block", height:"2.5px", width:"28px", backgroundColor:"#ffffff", borderRadius:"2px" }} />
            <span style={{ display:"block", height:"2.5px", width:"28px", backgroundColor:"#ffffff", borderRadius:"2px" }} />
          </button>

          {/* Logo */}
          <Link href="/" className="header-logo flex items-center group">
            <img
              src="/images/trendSeo12.jpeg"
              alt="TrendSEO Logo"
              style={{ height: "40px", width: "auto", objectFit: "contain" }}
              className="transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="header-nav items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                  className={`
                    px-4 py-2 rounded-full text-sm tracking-wide
                    font-mono font-bold outline-none transition-colors duration-200
                    ${isActive
                      ? "bg-[#1A73E8] text-white"
                      : "text-zinc-400 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right spacer for mobile centering */}
          <div className="header-spacer w-10 flex-shrink-0" />

        </div>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-[999] flex"
          onClick={() => setDrawerOpen(false)}
        >
          {/* Drawer background set to #000000 and border-right added for dark separation */}
          <div
            style={{ backgroundColor: "#000000", width: "340px", maxWidth: "85vw" }}
            className="relative h-full flex flex-col px-8 py-8 shadow-2xl border-r border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between mb-10">
              <Link href="/" onClick={() => setDrawerOpen(false)}>
                <img
                  src="/images/trendSeoLogo.jpeg"
                  alt="TrendSEO Logo"
                  style={{ height: "40px", width: "auto", objectFit: "contain" }}
                />
              </Link>
              {/* Close Button changed to white text and subtle border */}
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

          {/* Backdrop (Darkened the overlay backdrop for true dark look) */}
          <div style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }} />
        </div>
      )}
    </>
  );
}