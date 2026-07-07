"use client";
import React from "react";
import { ShoppingBag, Check } from "lucide-react";

export default function EcommerceMapsDominationSection() {
  const features = [
    "+218% organic transactions",
    "Product Schema & CRO",
    "Category dominance",
  ];

  const miniTags = [
    "Product SEO",
    "Category SEO",
    "Technical Ecommerce SEO",
    "Product Schema",
  ];

  return (
    <section
      // Explicitly locked to Theme 1 Canvas Color (#101010)
      style={{ backgroundColor: "#101010" }}
      className="w-full py-24 px-6 md:px-12 lg:px-24 antialiased text-white border-t border-zinc-900 relative overflow-hidden"
    >
      {/* Structural blueprint mesh layout */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: Main Typography & CTA Blocks */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-[10px] font-mono font-black tracking-widest uppercase text-blue-400">
              # Revenue Growth
            </span>
          </div>

          {/* Heading content architecture explicitly mapped from reference image */}
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Ecommerce SEO that compounds revenue, not just traffic.
          </h2>

          <p className="text-zinc-400 text-sm md:text-base font-normal max-w-xl leading-relaxed">
            Turn product pages into 24/7 sales engines with structured data, CRO, and category authority.
          </p>

          {/* Bullet checkpoints layout with check markers */}
          <div className="flex flex-col space-y-3.5">
            {features.map((text, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-blue-400" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-zinc-300 tracking-wide">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons Framework */}
          <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-blue-600 text-white text-sm font-bold tracking-wide hover:bg-blue-700 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-600/20"
            >
              Book Consultation ↗
            </a>
            <a
              href="#audit"
              className="px-7 py-3.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium tracking-wide hover:bg-white/10 hover:text-white transition-all"
            >
              Get Free Audit
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: Product Spec Display Card */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div
            // Theme 1 Solid Component Card Background Fill (#242424)
            style={{ backgroundColor: "#242424" }}
            className="w-full max-w-[460px] rounded-[2rem] border border-white/5 p-8 md:p-10 shadow-2xl flex flex-col gap-8 relative group"
          >
            {/* Upper Highlight Icon */}
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <ShoppingBag size={24} className="text-blue-400" strokeWidth={2} />
            </div>

            {/* Typography Labels stack */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                Service • Revenue Growth
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Ecommerce SEO
              </h3>
            </div>

            {/* Internal tags matrix grid structure */}
            <div className="grid grid-cols-2 gap-3">
              {miniTags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-white/[0.03] border border-white/5 rounded-xl p-3 flex items-center justify-start min-h-[52px]"
                >
                  <span className="text-[11px] font-medium text-zinc-400 leading-tight">
                    {tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Metric Counter Frame */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                  Avg client ROI
                </span>
              </div>
              <span 
                className="text-3xl font-black tracking-tight text-blue-400"
              >
                14.6x
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}