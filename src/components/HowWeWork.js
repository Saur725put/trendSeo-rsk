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
    iconBg: "#FFF3E0",
    iconColor: "#F97316",
    cardBg: "#F97316",
  },
  {
    id: "02",
    title: "Strategize",
    description: "A clear roadmap with channels, creative angles, and targets mapped to revenue.",
    Icon: Lightbulb,
    iconBg: "#E8F5E9",
    iconColor: "#00C07F",
    cardBg: "#00C07F",
  },
  {
    id: "03",
    title: "Create",
    description: "Humans direct the vision; AI accelerates production across every asset and variant.",
    Icon: Paintbrush,
    iconBg: "#EDE7F6",
    iconColor: "#7C4DFF",
    cardBg: "#7C4DFF",
  },
  {
    id: "04",
    title: "Scale",
    description: "We double down on what converts and kill what doesn't — weekly, ruthlessly.",
    Icon: Rocket,
    iconBg: "#E3F2FD",
    iconColor: "#1A73E8",
    cardBg: "#1A73E8",
  },
];

export default function HowWeWork() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{ backgroundColor: "#ffffff" }}
      className="w-full py-24 px-6 md:px-12"
    >
      <div className="w-full max-w-7xl mx-auto">

        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-3">
            A process built to compound.
          </h2>
          <p className="text-zinc-500 text-base">
            Four focused steps. One compounding system.
          </p>
        </div>

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
                  backgroundColor: isHovered ? step.cardBg : "#ffffff",
                  transition: "background-color 0.4s ease",
                }}
                className="relative rounded-2xl p-6 flex flex-col gap-4 shadow-sm cursor-pointer overflow-hidden"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-400"
                  style={{
                    backgroundColor: isHovered ? "rgba(0,0,0,0.2)" : step.iconBg,
                  }}
                >
                  <step.Icon size={22} color={isHovered ? "#ffffff" : step.iconColor} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3
                  style={{ color: isHovered ? "#ffffff" : "#18181b" }}
                  className="text-lg font-bold transition-colors duration-400"
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{ color: isHovered ? "rgba(255,255,255,0.8)" : "#71717a" }}
                  className="text-sm leading-relaxed flex-1 transition-colors duration-400"
                >
                  {step.description}
                </p>

                {/* Know more */}
                <a
                  href="#"
                  style={{ color: isHovered ? "#ffffff" : "#18181b" }}
                  className="flex items-center gap-1 text-sm font-bold transition-colors duration-400"
                >
                  Know more
                  <motion.span
                    className="text-base inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </a>

                {/* Glow */}
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