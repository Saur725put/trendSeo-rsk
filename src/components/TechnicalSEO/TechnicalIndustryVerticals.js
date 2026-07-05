"use client";
import React from "react";

export default function TechnicalIndustryVerticals() {
  const verticals = [
    { name: "Enterprise SaaS", hoverStyle: "hover:bg-[#151c28] hover:border-blue-500/30 text-blue-400" },
    { name: "Publishers", hoverStyle: "hover:bg-[#11241d] hover:border-emerald-500/30 text-emerald-400" },
    { name: "Marketplaces", hoverStyle: "hover:bg-[#22132b] hover:border-purple-500/30 text-purple-400" },
    { name: "Ecommerce", hoverStyle: "hover:bg-[#261f12] hover:border-amber-500/30 text-amber-400" },
    { name: "News & Media", hoverStyle: "hover:bg-[#281414] hover:border-rose-500/30 text-rose-400" },
    { name: "Healthcare Networks", hoverStyle: "hover:bg-[#122328] hover:border-cyan-500/30 text-cyan-400" },
  ];

  return (
    <section
      style={{ backgroundColor: "#101010" }}
      className="w-full py-24 px-6 md:px-12 lg:px-24 antialiased text-white border-t border-zinc-900 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col space-y-14">
        
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-blue-400">
              Industries
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-none">
            Verticals we ship results in.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {verticals.map((item, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: "#242424" }}
              className={`
                group relative rounded-2xl border border-white/5 p-7 flex items-center justify-between
                transition-all duration-300 ease-out hover:scale-[1.015] shadow-xl cursor-pointer
                ${item.hoverStyle.split(' ')[0]} ${item.hoverStyle.split(' ')[1]}
              `}
            >
              <h3 className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                {item.name}
              </h3>

              <span 
                className={`
                  text-sm font-light transition-all duration-300 transform 
                  group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                  text-zinc-500 ${item.hoverStyle.split(' ').pop()}
                `}
              >
                ↗
              </span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}