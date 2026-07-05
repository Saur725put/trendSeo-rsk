"use client";
import { motion } from "framer-motion";
import { Search, Lightbulb, Paintbrush, Rocket } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    id: "01",
    title: "Discover",
    description: "We audit your funnel, market, and data to find the highest-leverage growth levers.",
    Icon: Search,
    cardBg: "#F97316", // Orange accent on hover
  },
  {
    id: "02",
    title: "Strategize",
    description: "A clear roadmap with channels, creative angles, and targets mapped to revenue.",
    Icon: Lightbulb,
    cardBg: "#00C07F", // Emerald Green accent on hover
  },
  {
    id: "03",
    title: "Create",
    description: "Humans direct the vision; AI accelerates production across every asset and variant.",
    Icon: Paintbrush,
    cardBg: "#7C4DFF", // Purple/Violet accent on hover
  },
  {
    id: "04",
    title: "Scale",
    description: "We double down on what converts and kill what doesn't — weekly, ruthlessly.",
    Icon: Rocket,
    cardBg: "#1A73E8", // Brand Blue accent on hover
  },
];

export default function HowWeWork() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      // ONLY BACKGROUND CHANGED TO THEME 1 (#101010)
      style={{ backgroundColor: "#101010" }}
      className="w-full py-24 px-6 md:px-12 border-t border-zinc-800 antialiased"
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-3">
            A process built to compound.
          </h2>
          <p className="text-zinc-400 text-base max-w-md">
            Four focused steps. One compounding system.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => {
            const isHovered = hovered === step.id;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onMouseEnter={() => setHovered(step.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  backgroundColor: isHovered ? step.cardBg : "#242424",
                  transition: "background-color 0.4s ease",
                }}
                className="relative rounded-2xl p-6 flex flex-col gap-5 cursor-pointer overflow-hidden group border border-white/5 shadow-sm"
              >
                {/* Icon Wrapper */}
                <div
                  style={{
                    backgroundColor: isHovered ? "rgba(0,0,0,0.25)" : "rgba(255, 255, 255, 0.08)",
                  }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-400"
                >
                  <step.Icon 
                    size={22} 
                    color="#BEFF44" 
                    strokeWidth={1.8} 
                  />
                </div>

                {/* Content Block */}
                <div className="flex-1 flex flex-col gap-2">
                  <h3 
                    style={{ color: "#ffffff" }}
                    className="text-lg font-bold transition-colors duration-400"
                  >
                    {step.title}
                  </h3>
                  <p 
                    style={{ color: isHovered ? "rgba(255,255,255,0.8)" : "#a1a1aa" }}
                    className="text-sm leading-relaxed transition-colors duration-400"
                  >
                    {step.description}
                  </p>
                </div>

                {/* Know more Link */}
                <a
                  href="#"
                  style={{ color: isHovered ? "#ffffff" : "#e4e4e7" }}
                  className="flex items-center gap-1 text-sm font-medium transition-colors duration-400 group-hover:underline decoration-white/40 mt-2"
                >
                  Know more
                  <motion.span
                    className="text-base inline-block"
                    animate={isHovered ? { x: 4 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </a>

                {/* Subtle White Glow Over the Color Fill */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.12) 0%, transparent 60%)",
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