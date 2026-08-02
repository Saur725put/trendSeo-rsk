"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    rating: 5.0,
    text: "Working with sparrowLingo has been an experience. They improved our SEO, fixed product issues, and ran effective Google Ads. Communication was smooth and consistent throughout.",
    name: "Jolene",
    company: "Sole Design Studio",
    themeColor: "#F97316", // Discover Color
  },
  {
    id: 2,
    rating: 5.0,
    text: "We love working with them! Very professional and so great to work with and great to communicate with. Available anytime for support and to answer questions. Highly Recommended.",
    name: "Martin",
    company: "Marinela Makeup",
    themeColor: "#00C07F", // Strategize Color
  },
  {
    id: 3,
    rating: 4.9,
    text: "Their execution speed is unmatched. They optimized our entire Next.js setup for Server-Side Rendering (SSR) and our organic revenue compounded within weeks.",
    name: "Sarahathan",
    company: "SaaSify Inc",
    themeColor: "#7C4DFF", // Create Color
  },
  {
    id: 4,
    rating: 5.0,
    text: "We double down on what converts and kill what doesn't. This team helped us scale our ad spend ruthlessly while preserving net margins. Highly recommend their system.",
    name: "Alex",
    company: "ScaleOps",
    themeColor: "#1A73E8", // Scale Color
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="w-full bg-[#181818] text-white py-10 sm:py-14 px-4 sm:px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">

        {/* HEADER & AGGREGATE RATING */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-16">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-6xl font-bold tracking-tight text-white uppercase break-words">
              Testimonials
            </h2>
          </div>

          {/* RATING BADGE SECTION - Scaled up for Mobile & Tablet */}
          <div className="flex items-center gap-3 sm:gap-4 self-start md:self-auto">
            {/* Circle badge - Bigger on Mobile & Tablet */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-white/80 text-white font-bold text-base sm:text-xl md:text-2xl flex items-center justify-center font-mono shrink-0">
              4.7
            </div>
            <div>
              {/* Star Icons - Size Increased */}
              <div className="flex gap-1 text-[#1A73E8] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4" fill="currentColor" />
                ))}
              </div>
              {/* 79 Reviews Text - Font Size Increased */}
              <span className="text-xs sm:text-sm md:text-sm font-mono font-bold tracking-wider text-zinc-300 uppercase">
                79 Reviews
              </span>
            </div>
          </div>
        </div>

        {/* SYNCED TESTIMONIAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch mb-10 sm:mb-12">
          {[0, 1].map((offset) => {
            const dataIndex = (activeIndex + offset) % testimonialsData.length;
            const item = testimonialsData[dataIndex];
            const isCardHovered = hoveredCardId === item.id;

            return (
              <motion.div
                key={item.id}
                layout
                onMouseEnter={() => setHoveredCardId(item.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                style={{
                  backgroundColor: isCardHovered ? item.themeColor : "#121212",
                  borderColor: isCardHovered ? "transparent" : "rgba(255, 255, 255, 0.06)",
                  transition: "background-color 0.4s ease, border-color 0.4s ease",
                }}
                className="border rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between shadow-sm cursor-pointer relative overflow-hidden group"
              >
                <div>
                  {/* Rating Badge */}
                  <div
                    style={{ color: isCardHovered ? "#ffffff" : item.themeColor }}
                    className="flex items-center gap-1 mb-4 sm:mb-6 transition-colors duration-400"
                  >
                    <span style={{ color: "#ffffff" }} className="text-xs sm:text-sm font-bold font-mono transition-colors duration-400">
                      {item.rating.toFixed(1)}
                    </span>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p
                    style={{ color: isCardHovered ? "rgba(255,255,255,0.9)" : "#e4e4e7" }}
                    className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 transition-colors duration-400 antialiased"
                  >
                    "{item.text}"
                  </p>
                </div>

                {/* User footer profile */}
                <div
                  style={{ borderColor: isCardHovered ? "rgba(255,255,255,0.2)" : "rgba(255, 255, 255, 0.08)" }}
                  className="flex items-center gap-3 border-t pt-4 sm:pt-6 transition-colors duration-400"
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden relative border border-white/10 shrink-0">
                    <div style={{ backgroundColor: isCardHovered ? "rgba(255,255,255,0.2)" : "#27272a", color: "#ffffff" }} className="w-full h-full flex items-center justify-center font-bold text-xs uppercase transition-colors duration-400">
                      {item.name[0]}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ color: "#ffffff" }} className="text-xs sm:text-sm font-bold transition-colors duration-400">
                      {item.name}
                    </h4>
                    <p style={{ color: isCardHovered ? "rgba(255,255,255,0.6)" : "#a1a1aa" }} className="text-[11px] sm:text-xs font-medium transition-colors duration-400">
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* Glow Mask matching process cards */}
                {isCardHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{ background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 60%)" }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* PAGINATION NAVIGATION TRACK BAR */}
        <div className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8 mt-10 sm:mt-14">
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#1557B0" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-[#1A73E8] text-white rounded-xl font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-blue-500/5 cursor-pointer text-center"
          >
            View All Success Stories
          </motion.button>

          <div className="w-full flex items-center justify-between max-w-2xl gap-4 sm:gap-6 pt-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all duration-200 cursor-pointer shrink-0"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Syced Blue Track Pagination Progress */}
            <div className="flex-1 flex gap-2 h-[3px]">
              {testimonialsData.map((_, idx) => {
                const isCurrent = idx === activeIndex;
                return (
                  <div key={idx} className="flex-1 bg-white/10 rounded-full overflow-hidden relative">
                    {isCurrent && (
                      <motion.div
                        layoutId="activeTrackBar"
                        className="absolute inset-0 bg-[#1A73E8]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.4 }}
                        style={{ originX: 0 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all duration-200 cursor-pointer shrink-0"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}