"use client";
import React from "react";

export default function ShopifyWhyBusinessNeedsThis() {
  const points = [
    {
      num: "01",
      title: "Platform-Native",
      desc: "We know Shopify's quirks — handles, tags, vendor URLs, paginated collections.",
      hoverBg: "hover:bg-[#101e36]",
      hoverBorder: "hover:border-blue-500/40",
      numColor: "text-blue-400"
    },
    {
      num: "02",
      title: "Speed That Tells",
      desc: "Sub-2s LCP without ripping out your stack.",
      hoverBg: "hover:bg-[#0f2620]",
      hoverBorder: "hover:border-emerald-500/40",
      numColor: "text-emerald-400"
    },
    {
      num: "03",
      title: "App-Aware",
      desc: "We audit every app for bloat, schema conflicts, and render-blocking JS.",
      hoverBg: "hover:bg-[#262412]",
      hoverBorder: "hover:border-amber-500/40",
      numColor: "text-amber-400"
    },
    {
      num: "04",
      title: "Migration Safe",
      desc: "Theme 2.0 migrations without losing rankings.",
      hoverBg: "hover:bg-[#221630]",
      hoverBorder: "hover:border-purple-500/40",
      numColor: "text-purple-400"
    },
  ];

  return (
    <section
      style={{ backgroundColor: "#101010" }}
      className="w-full py-24 px-6 md:px-12 lg:px-24 antialiased text-white border-t border-zinc-900 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Upper Header Meta Block from image_93e308.jpg */}
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="text-[10px] font-mono font-black tracking-widest uppercase text-blue-400">
              Why it matters
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Why your business needs this.
          </h2>

          <p className="text-zinc-400 text-sm md:text-base font-normal max-w-xl">
            Four reasons this service moves the needle on your P&L.
          </p>
        </div>

        {/* Dynamic Multi-Color Variant Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {points.map((item, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: "#242424" }}
              className={`
                group relative rounded-2xl border border-white/5 p-8 md:p-10 flex flex-col items-start space-y-4 
                transition-all duration-300 ease-out hover:scale-[1.01] shadow-xl
                ${item.hoverBg} ${item.hoverBorder}
              `}
            >
              {/* Dynamic matching label color setup */}
              <span className={`text-xs font-mono font-bold ${item.numColor}`}>
                {item.num}
              </span>

              {/* Text content framework */}
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}