"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, BarChart3, Package } from "lucide-react";

const SERVICES_DATA = [
  {
    id: "sxo",
    title: "SXO",
    description: "Great rankings mean nothing without great user experience. Our SXO approach delivers both traffic and performance.",
    Icon: Globe,
    iconBg: "#FFF3E0",
    iconColor: "#F97316",
    cardBg: "#F97316",
  },
  {
    id: "marketing",
    title: "Performance Marketing",
    description: "Results you can measure. We run data-driven campaigns that convert clicks into revenue across every platform.",
    Icon: BarChart3,
    iconBg: "#E8F5E9",
    iconColor: "#00C07F",
    cardBg: "#00C07F",
  },
  {
    id: "dropshipping",
    title: "Dropshipping",
    description: "From product research to fulfillment, our data-backed approach turns dropshipping into a real business.",
    Icon: Package,
    iconBg: "#E3F2FD",
    iconColor: "#1A73E8",
    cardBg: "#1A73E8",
  },
];

export default function PopularService1() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full bg-white text-zinc-900 py-20 px-6 md:py-24 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-3">
            Most Popular Services
          </h2>
          <p className="text-zinc-500 text-sm md:text-base">
            Tailored growth mechanisms optimized directly for scaling your transactional ecosystem.
          </p>
        </div>

        {/* Responsive 3-Column Interactive Grid Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const isHovered = hovered === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  backgroundColor: isHovered ? service.cardBg : "#ffffff",
                  transition: "background-color 0.4s ease, border-color 0.4s ease",
                }}
                className={`relative rounded-2xl p-8 flex flex-col gap-5 cursor-pointer overflow-hidden border ${
                  isHovered ? "border-transparent shadow-lg" : "border-zinc-200/80 shadow-sm"
                }`}
              >
                {/* Icon Wrapper Area */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-400"
                  style={{
                    backgroundColor: isHovered ? "rgba(0,0,0,0.18)" : service.iconBg,
                  }}
                >
                  <service.Icon 
                    size={26} 
                    color={isHovered ? "#ffffff" : service.iconColor} 
                    strokeWidth={1.8} 
                  />
                </div>

                {/* Service Dynamic Title Segment */}
                <h3
                  style={{ color: isHovered ? "#ffffff" : "#18181b" }}
                  className="text-xl font-bold transition-colors duration-400"
                >
                  {service.title}
                </h3>

                {/* Service Dynamic Content Description Area */}
                <p
                  style={{ color: isHovered ? "rgba(255,255,255,0.9)" : "#52525b" }}
                  className="text-sm md:text-base leading-relaxed flex-1 transition-colors duration-400"
                >
                  {service.description}
                </p>

                {/* Interactive Smooth Link Trigger Action */}
                <a
                  href="#"
                  style={{ color: isHovered ? "#ffffff" : "#18181b" }}
                  className="flex items-center gap-1.5 text-sm font-bold transition-colors duration-400 mt-2"
                >
                  Know more
                  <motion.span
                    className="text-base inline-block"
                    animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </a>

                {/* Light Custom Radial Blend Radial Glow Overlays */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 65%)",
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