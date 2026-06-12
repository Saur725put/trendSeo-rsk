"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { TrendingUp, BarChart3, Cpu, Megaphone } from "lucide-react";
import Typewriter from "./Typewriter";

const services = [
  {
    id: "01",
    title: "Performance Marketing",
    description:
      "Full-funnel paid media across Meta, Google & TikTok — engineered around ROAS, not vanity metrics.",
    tags: ["Paid Social", "Google Ads", "Funnels", "CRO"],
    Icon: TrendingUp,
    cardBg: "#1A73E8",
  },
  {
    id: "02",
    title: "SEO & Content",
    description:
      "Rank for what your buyers actually search. Technical SEO, content engines, and authority that compounds.",
    tags: ["Technical SEO", "Content", "Link Building"],
    Icon: BarChart3,
    cardBg: "#7C4DFF",
  },
  {
    id: "03",
    title: "AI & Automation",
    description:
      "Custom AI workflows that draft, personalize, and optimize at a scale no human team could match.",
    tags: ["AI Content", "Personalization", "Workflows"],
    Icon: Cpu,
    cardBg: "#00C07F",
  },
  {
    id: "04",
    title: "Social & Brand",
    description:
      "Scroll-stopping creative and community building that turns followers into a culture around your brand.",
    tags: ["Creative", "Community", "Influencer"],
    Icon: Megaphone,
    cardBg: "#F97316",
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      // Changed background to #181818
      style={{ backgroundColor: "#181818" }}
      className="w-full min-h-screen py-24 px-6 md:px-12"
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#1A73E8]" />
            {/* text-zinc-500 to text-zinc-400 for better dark layout visibility */}
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-400">
              What We Do
            </span>
          </div>
          {/* Headline changed from text-zinc-900 to text-white */}
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-6">
            Four engines. <br /> O<Typewriter text="ne growth machine." />
          </h2>
          {/* Subtext changed from text-zinc-600 to text-zinc-400 */}
          <p className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed">
            Most agencies bolt services together. We run them as one system — so every
            channel feeds the next and your budget works harder.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const isHovered = hovered === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  // Changed default state color from #ffffff to a smooth dark #242424 card color
                  backgroundColor: isHovered ? service.cardBg : "#242424",
                  transition: "background-color 0.4s ease",
                }}
                className="relative rounded-3xl p-6 cursor-pointer overflow-hidden group"
              >
                {/* Number & Arrow Row */}
                <div className="flex justify-between items-start mb-5">
                  <span
                    style={{ color: isHovered ? "rgba(255,255,255,0.5)" : "#71717a" }}
                    className="font-mono text-sm transition-colors duration-400"
                  >
                    {service.id}
                  </span>
                  <motion.span
                    animate={{ x: isHovered ? 2 : 0, y: isHovered ? -2 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: isHovered ? "rgba(255,255,255,0.7)" : "#71717a" }}
                    className="text-lg transition-colors duration-400"
                  >
                    ↗
                  </motion.span>
                </div>

                {/* Icon Container (Changed default state background to transparent/lighter dark overlay) */}
                <div
                  style={{
                    backgroundColor: isHovered ? "rgba(0,0,0,0.25)" : "rgba(255, 255, 255, 0.08)",
                  }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-400"
                >
                  <service.Icon size={22} color="#BEFF44" strokeWidth={1.8} />
                </div>

                {/* Title (Changed text color from #18181b to #ffffff) */}
                <h3
                  style={{ color: isHovered ? "#ffffff" : "#ffffff" }}
                  className="text-xl font-bold mb-2 transition-colors duration-400"
                >
                  {service.title}
                </h3>

                {/* Description (Changed text color from #71717a to #a1a1aa) */}
                <p
                  style={{ color: isHovered ? "rgba(255,255,255,0.8)" : "#a1a1aa" }}
                  className="text-sm leading-relaxed mb-5 transition-colors duration-400"
                >
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: isHovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)",
                        borderColor: isHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.15)",
                        color: isHovered ? "#ffffff" : "#e4e4e7",
                      }}
                      className="text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtle glow on hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
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