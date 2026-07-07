"use client";
import React from "react";
import { Check } from "lucide-react";

export default function ShopifyEngineFeaturesSection() {
  const coreFeatures = [
    {
      id: "F01",
      title: "Shopify Store Optimization",
      hoverStyle: "hover:bg-[#121c2c] hover:border-blue-500/30",
      accentTextColor: "text-blue-400"
    },
    {
      id: "F02",
      title: "Collections SEO",
      hoverStyle: "hover:bg-[#10241e] hover:border-emerald-500/30",
      accentTextColor: "text-emerald-400"
    },
    {
      id: "F03",
      title: "Product Optimization",
      hoverStyle: "hover:bg-[#282214] hover:border-amber-500/30",
      accentTextColor: "text-amber-400"
    },
    {
      id: "F04",
      title: "Speed Optimization",
      hoverStyle: "hover:bg-[#24162e] hover:border-purple-500/30",
      accentTextColor: "text-purple-400"
    },
    {
      id: "F05",
      title: "Duplicate Content Fixes",
      hoverStyle: "hover:bg-[#201c1c] hover:border-rose-500/30",
      accentTextColor: "text-rose-400"
    },
    {
      id: "F06",
      title: "Shopify Apps SEO",
      hoverStyle: "hover:bg-[#102428] hover:border-cyan-500/30",
      accentTextColor: "text-cyan-400"
    },
    {
      id: "F07",
      title: "Shopify Technical SEO",
      hoverStyle: "hover:bg-[#1c241c] hover:border-green-500/30",
      accentTextColor: "text-green-400"
    }
  ];

  return (
    <section
      style={{ backgroundColor: "#101010" }}
      className="w-full py-24 px-6 md:px-12 lg:px-24 antialiased text-white border-t border-zinc-900 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col space-y-16">
        
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-[10px] font-mono font-black tracking-widest uppercase text-blue-400">
              What's Included
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.15]">
            Every feature engineered into the engagement.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreFeatures.map((feat) => (
            <div
              key={feat.id}
              style={{ backgroundColor: "#242424" }}
              className={`
                group relative rounded-2xl border border-white/5 p-6 flex items-center gap-5
                transition-all duration-300 ease-out hover:scale-[1.015] shadow-xl
                ${feat.hoverStyle}
              `}
            >
              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                <Check size={14} className="text-zinc-400 group-hover:text-white transition-colors" strokeWidth={3} />
              </div>

              <div className="flex flex-col space-y-1">
                <span className={`text-[10px] font-mono font-bold tracking-wider ${feat.accentTextColor}`}>
                  {feat.id}
                </span>
                
                <h3 className="text-sm md:text-base font-bold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                  {feat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}