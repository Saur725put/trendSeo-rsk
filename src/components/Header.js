"use client";
import { useState } from "react";
import Link from "next/link"; // Standard Next.js Link client-side navigation के लिए
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { id: "about", label: "About", path: "/about" },
    { id: "services", label: "Services", path: "/services" },
    { id: "blog", label: "Blog", path: "/blog" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  return (
    <header 
      style={{ backgroundColor: "#ddd5f2" }} 
      className="w-full sticky top-0 z-50 py-4 border-b border-zinc-300"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        <Link href="/" className="flex items-center gap-2 group">
          <img 
            src="/images/trendSeoLogo.jpeg" 
            alt="TrendSEO Logo" 
            className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        <div className="flex items-center gap-2 bg-white/60 p-1 rounded-full border border-zinc-300 shadow-sm overflow-hidden">
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.nav
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex items-center gap-1 sm:gap-2 overflow-hidden whitespace-nowrap"
              >
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.id}
                      href={item.path}
                      className="relative px-3 md:px-4 py-1.5 rounded-full text-[11px] md:text-xs tracking-wide transition-colors duration-300 outline-none"
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-pill"
                          className="absolute inset-0 bg-[#1A73E8] rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      
                      <span
                        className={`relative z-10 font-mono font-bold transition-colors duration-200 ${
                          isActive ? "text-white" : "text-zinc-900 hover:text-black"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </motion.nav>
            )}
          </AnimatePresence>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-mono font-bold border transition-all duration-300 ml-1 ${
              isOpen 
                ? "text-zinc-900 border-zinc-400 hover:text-black hover:bg-white" 
                : "text-white border-[#1A73E8] bg-[#1A73E8]"
            }`}
            title={isOpen ? "Hide Menu" : "Show Menu"}
          >
            {isOpen ? "···" : "⁝"}
          </button>
        </div>

      </div>
    </header>
  );
}