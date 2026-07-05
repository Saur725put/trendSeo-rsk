"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const tools = [
  { id: "gsc", name: "Google Search Console", hoverBg: "#F97316" }, 
  { id: "ga4", name: "Google Analytics 4", hoverBg: "#EAB308" },  
  { id: "gmc", name: "Google Merchant Center", hoverBg: "#1A73E8" }, 
  { id: "gbp", name: "Google Business Profile", hoverBg: "#7C4DFF" }, 
  { id: "gkp", name: "Google Keyword Planner", hoverBg: "#00C07F" },
  { id: "gtrends", name: "Google Trends", hoverBg: "#2563EB" },  
  { id: "semrush", name: "SEMrush", hoverBg: "#EA580C" },        
  { id: "screaming", name: "Screaming Frog", hoverBg: "#16A34A" }, 
  { id: "ahrefs", name: "Ahrefs", hoverBg: "#2563EB" },           
  { id: "psi", name: "PageSpeed Insights", hoverBg: "#9333EA" },  
  { id: "shopify", name: "Shopify Plus", hoverBg: "#95BF47" },     
  { id: "looker", name: "Looker Studio", hoverBg: "#DB2777" },     
];

export default function TechStackSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      // Strictly set to Theme 2 Canvas Background (#181818)
      style={{ backgroundColor: "#181818" }}
      className="w-full py-24 px-6 md:px-12 lg:px-24 antialiased text-white border-t border-zinc-800"
    >
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header Block exactly following image_1b622d.jpg specs but tuned for Theme 2 */}
        <div className="flex flex-col items-start space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-7 py-2 rounded-full border border-white/10 bg-white/5 shadow-sm">
            <span className="text-lg font-mono font-bold tracking-widest uppercase text-zinc-400">
              The Tech Stack
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight ">
            The tools we deploy on every engagement.
          </h2>

          <p className="text-zinc-400 text-sm md:text-base font-normal max-w-xl">
            Best-in-class SEO infrastructure — no shortcuts.
          </p>
        </div>

        {/* 4-Column Grid Architecture exactly matching image_1b622d.jpg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool) => {
            const isHovered = hoveredCard === tool.id;

            return (
              <motion.div
                key={tool.id}
                onMouseEnter={() => setHoveredCard(tool.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -3 }}
                style={{
                  // Dynamic Hover Effect: Unique custom color on hover, default Theme 2 solid card background
                  backgroundColor: isHovered ? tool.hoverBg : "#242424",
                  transition: "background-color 0.35s ease, transform 0.2s ease",
                }}
                className="relative rounded-2xl p-5 flex items-center gap-4 cursor-pointer overflow-hidden border border-white/5 shadow-sm group"
              >
                {/* Icon Wrapper Layer */}
                <div
                  style={{
                    backgroundColor: isHovered ? "rgba(0,0,0,0.2)" : "rgba(255, 255, 255, 0.05)",
                  }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-400 border border-white/5 shrink-0"
                >
                  <Globe 
                    size={18} 
                    // High contrast neon alignment when resting, clean white when active
                    color={isHovered ? "#ffffff" : "#BEFF44"} 
                    strokeWidth={2} 
                  />
                </div>

                {/* Tool Name Typography */}
                <span 
                  className="text-sm font-semibold tracking-tight text-white transition-colors duration-400 truncate"
                >
                  {tool.name}
                </span>

                {/* Subtle Overlapping radial glow reflection for smooth finish */}
                {isHovered && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 75% 20%, rgba(255,255,255,0.1) 0%, transparent 60%)",
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}