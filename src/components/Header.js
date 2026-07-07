"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo/Black.jpg";

export default function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navItems = [
    { id: "home",     label: "Home",     path: "/" },
    { id: "services", label: "Services", path: "/services" },
    { id: "about",    label: "About",    path: "/about" },
    { id: "blog",     label: "Blog",     path: "/blog" },
    { id: "contact",  label: "Contact",  path: "/contact" },
  ];

  const serviceItems = [
    { id: "LocalSEO",     label: "Local SEO",     path: "/services/LocalSEO" },
    { id: "technicalSEO", label: "Technical SEO", path: "/services/technicalSEO" },
    { id: "ecommerceSEO", label: "Ecommerce SEO", path: "/services/ecommerceSEO" },
    { id: "shopifySEO",   label: "Shopify SEO",   path: "/services/shopifySEO" },
  ];
  

  return (
    <>
      <style>{`
        .header-hamburger { display: none; }
        .header-nav        { display: flex; }
        .header-actions    { display: flex; }
        .header-spacer     { display: none; }

        .services-dropdown {
          opacity: 0;
          visibility: hidden;
          transform: translateY(6px);
          transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s;
        }
        .services-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

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
            <img
              src="/images/logo/Black.jpg"
              alt="SEO Mitra Logo"
              style={{ height: "40px", width: "auto", objectFit: "contain" }}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navbar Center-aligned */}
          <nav className="header-nav items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              if (item.id === "services") {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        setServicesOpen((prev) => !prev);
                      }}
                      style={{ WebkitTapHighlightColor: "transparent" }}
                      className={`
                        text-[15px] font-medium tracking-wide transition-colors duration-200 py-1 relative flex items-center gap-1
                        ${isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-white"}
                      `}
                    >
                      {item.label}
                      <span
                        className="text-[10px] opacity-70 mt-0.5 transition-transform duration-200"
                        style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        ▼
                      </span>
                    </Link>

                    {/* Services Dropdown Panel */}
                    <div
                      className={`services-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-4 ${servicesOpen ? "open" : ""}`}
                    >
                      <div
                        style={{ backgroundColor: "#0a0a0a" }}
                        className="min-w-[220px] rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-2 overflow-hidden"
                      >
                        {serviceItems.map((sub) => (
                          <Link
                            key={sub.id}
                            href={sub.path}
                            onClick={() => setServicesOpen(false)}
                            className="block px-5 py-3 text-[14px] font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors duration-150"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

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
            className="relative h-full flex flex-col px-8 py-8 shadow-2xl border-r border-zinc-800 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between mb-10">
              <Link href="/" onClick={() => setDrawerOpen(false)}>
                <img
                  src="/images/logo/Black.jpg"
                  alt="SEO Mitra Logo"
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

                if (item.id === "services") {
                  return (
                    <div key={item.id} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                      <button
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        style={{
                          padding: "16px 0",
                          fontSize: "17px",
                          fontWeight: "700",
                          fontFamily: "monospace",
                          letterSpacing: "0.05em",
                          color: isActive ? "#1A73E8" : "#e4e4e7",
                          background: "transparent",
                          border: "none",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          cursor: "pointer",
                        }}
                      >
                        {item.label}
                        <span
                          style={{
                            fontSize: "12px",
                            transition: "transform 0.2s ease",
                            transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        >
                          ▼
                        </span>
                      </button>

                      {mobileServicesOpen && (
                        <div style={{ paddingBottom: "12px" }}>
                          {serviceItems.map((sub) => (
                            <Link
                              key={sub.id}
                              href={sub.path}
                              onClick={() => {
                                setDrawerOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              style={{
                                display: "block",
                                padding: "12px 0 12px 16px",
                                fontSize: "15px",
                                fontWeight: "600",
                                fontFamily: "monospace",
                                letterSpacing: "0.03em",
                                color: "#a1a1aa",
                                textDecoration: "none",
                              }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

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