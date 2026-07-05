"use client";
import React from "react";
import { Sliders, Check } from "lucide-react";

export default function TechnicalMapsDominationSection() {
  const features = [
    "Crawl & Index health",
    "Core Web Vitals pass",
    "Schema architecture",
  ];

  const miniTags = [
    "Core Web Vitals",
    "Crawl Errors",
    "Indexing",
    "XML Sitemap",
  ];

  return (
    <section
      style={{ backgroundColor: "#101010" }}
      className="w-full py-24 px-6 md:px-12 lg:px-24 antialiased text-white border-t border-zinc-900 relative overflow-hidden"
    >
      {/* Structural layout inspired by blueprint mesh inside image_94d009.jpg */}
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
          
          {/* Glassmorphic Badge Frame updated matching image_94d009.jpg */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 shadow-sm">
            <span className="text-xs font-mono font-black tracking-widest uppercase text-blue-400">
              # Foundation
            </span>
          </div>

          {/* Heading content architecture exactly updated from image_94d009.jpg */}
          <h2 className="text-4xl md:text-6xl font-light tracking-tight uppercase leading-[1.15]">
            The{" "}
            <span className="font-bold text-white">technical foundation</span>{" "}
            behind every{" "}
            <span className="text-zinc-500 font-medium">ranking</span>{" "}
            we earn.
          </h2>

          {/* Paragraph copy text updated matching image_94d009.jpg */}
          <p className="text-zinc-400 text-sm md:text-base font-normal max-w-xl leading-relaxed">
            Crawlability, Core Web Vitals, JS rendering, and schema — the unglamorous work that unlocks rankings.
          </p>

          {/* Bullet checkpoints layout with high contrast check markers */}
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

        {/* RIGHT COLUMN: Interactive Product Spec Display Card */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div
            style={{ backgroundColor: "#242424" }}
            className="w-full max-w-[460px] rounded-[2rem] border border-white/5 p-8 md:p-10 shadow-2xl flex flex-col gap-8 relative group"
          >
            {/* Updated Sliders Icon to perfectly reflect the visual inside image_94d009.jpg */}
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Sliders size={24} className="text-blue-400" strokeWidth={2} />
            </div>

            {/* Typography Labels stack matching image_94d009.jpg */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase">
                Service • Foundation
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Technical SEO
              </h3>
            </div>

            {/* Mini internal tags matrix grid structure */}
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

            {/* Bottom Counter Metric Frame */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                  Avg client ROI
                </span>
              </div>
              <span 
                style={{ color: "#BEFF44" }}
                className="text-3xl font-black tracking-tighter"
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