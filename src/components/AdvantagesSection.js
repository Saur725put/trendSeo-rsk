"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Eye, ShieldCheck, Award, BarChart3, Sparkles } from "lucide-react";

const advantages = [
  {
    id: "roi-seo",
    title: "ROI-Focused SEO",
    description: "Every initiative tied to a revenue line item. No vanity metrics, no fluff.",
    Icon: TrendingUp,
    cardBg: "#F97316", // Orange on hover
  },
  {
    id: "transparency",
    title: "Radical Transparency",
    description: "Live dashboards, weekly stand-ups, and source-of-truth reporting.",
    Icon: Eye,
    cardBg: "#00C07F", // Emerald Green on hover
  },
  {
    id: "white-hat",
    title: "White-Hat Only",
    description: "Future-proof tactics. Zero penalty risk. Built to compound.",
    Icon: ShieldCheck,
    cardBg: "#7C4DFF", // Purple on hover
  },
  {
    id: "experts",
    title: "Certified Experts",
    description: "Google Premier, Ahrefs, SEMrush, and Shopify Plus certified team.",
    Icon: Award,
    cardBg: "#1A73E8", // Brand Blue on hover
  },
  {
    id: "data-driven",
    title: "Data-Driven Strategy",
    description: "Every decision modeled, every hypothesis tested, every dollar tracked.",
    Icon: BarChart3,
    cardBg: "#EC4899", // Pink on hover
  },
  {
    id: "growth",
    title: "Proven Growth",
    description: "92% of clients hit their year-one growth target with us.",
    Icon: Sparkles,
    cardBg: "#EAB308", // Yellow-Gold on hover
  },
];

export default function AdvantagesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      // Strictly set to Theme 1 Canvas Background (#101010)
      style={{ backgroundColor: "#101010" }}
      className="w-full py-24 px-6 md:px-12 lg:px-24 antialiased text-white border-t border-zinc-800"
    >
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header Block styled EXACTLY like OurPartner section */}
        <div className="flex flex-col items-start space-y-10 mb-20">
          
          {/* Badge styled with transparent glassmorphism from OurPartner */}
          <div className="inline-flex items-center gap-2 px-7 py-2 rounded-full border border-white/10 bg-white/5 shadow-sm">
            <span className="text-lg font-mono font-bold tracking-widest uppercase text-zinc-400">
              The Rankforge Advantage
            </span>
          </div>

          {/* Typography layout following OurPartner architecture */}
          <h2 className="text-5xl md:text-7xl font-light tracking-tight uppercase leading-[1.0]">
            <span className="text-zinc-500">
              Why Industry{" "}
            </span>
            <span className="font-medium text-white">
              Leaders Choose Us.
            </span>
          </h2>

          <p className="text-zinc-400 text-base md:text-lg font-normal leading-relaxed">
            Six reasons CMOs, founders, and growth teams trust us with their organic channel. We build sustainable systems designed to outperform and outlast.
          </p>
        </div>

        {/* Advantages 6-Card Grid Layout matching image_1b035a.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((item) => {
            const isHovered = hoveredCard === item.id;
            
            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -4 }}
                style={{
                  // Dynamic Hover Effect: Custom unique color on hover, default Theme 1 dark block
                  backgroundColor: isHovered ? item.cardBg : "#242424",
                  transition: "background-color 0.4s ease, transform 0.2s ease",
                }}
                className="relative rounded-3xl p-8 flex flex-col gap-6 cursor-pointer overflow-hidden border border-white/5 shadow-sm group"
              >
                {/* Icon Box wrapper matching individual high contrast specs */}
                <div
                  style={{
                    backgroundColor: isHovered ? "rgba(0,0,0,0.2)" : "rgba(255, 255, 255, 0.06)",
                  }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-400 border border-white/5"
                >
                  <item.Icon 
                    size={22} 
                    // High-contrast neon-green if normal, crisp white if dynamic hover matches card background
                    color={isHovered ? "#ffffff" : "#BEFF44"} 
                    strokeWidth={1.8} 
                  />
                </div>

                {/* Content Area */}
                <div className="flex flex-col gap-2">
                  <h3 
                    style={{ color: "#ffffff" }}
                    className="text-lg font-bold transition-colors duration-400"
                  >
                    {item.title}
                  </h3>
                  <p 
                    style={{ color: isHovered ? "rgba(255,255,255,0.85)" : "#a1a1aa" }}
                    className="text-sm leading-relaxed transition-colors duration-400 font-normal"
                  >
                    {item.description}
                  </p>
                </div>

                {/* Subtle White Glow Over the Dynamic Color Fill */}
                {isHovered && (
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
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