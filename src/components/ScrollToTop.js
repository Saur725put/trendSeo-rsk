"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? scrolled / total : 0);
      setIsVisible(scrolled > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - scrollProgress);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-12 z-50 w-11 h-11 flex items-center justify-center cursor-pointer outline-none"
          aria-label="Scroll to top"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          {/* SVG ring progress + button bg */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 44 44"
          >
            {/* Track ring */}
            <circle
              cx="22" cy="22" r={radius}
              fill="white"
              stroke="#E5E7EB"
              strokeWidth="2.5"
              style={{
                filter: "drop-shadow(0 4px 14px rgba(26,115,232,0.18)) drop-shadow(0 1px 4px rgba(0,0,0,0.10))"
              }}
            />
            {/* Progress ring */}
            <motion.circle
              cx="22" cy="22" r={radius}
              fill="none"
              stroke="#1A73E8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{ transition: "stroke-dashoffset 0.15s linear" }}
            />
          </svg>

          {/* Arrow — animates upward on hover */}
          <motion.span
            className="relative z-10 text-[#1A73E8] font-bold text-base leading-none select-none"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↑
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}