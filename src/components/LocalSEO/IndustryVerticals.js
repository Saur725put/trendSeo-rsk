"use client";
import React from "react";

export default function IndustryVerticals() {
  const verticals = [
    { name: "Restaurants", hoverStyle: "hover:bg-[#151c28] hover:border-blue-500/30 group-hover:text-blue-400" },
    { name: "Med Spas & Clinics", hoverStyle: "hover:bg-[#11241d] hover:border-emerald-500/30 group-hover:text-emerald-400" },
    { name: "Law Firms", hoverStyle: "hover:bg-[#22132b] hover:border-purple-500/30 group-hover:text-purple-400" },
    { name: "Home Services", hoverStyle: "hover:bg-[#261f12] hover:border-amber-500/30 group-hover:text-amber-400" },
    { name: "Auto Dealers", hoverStyle: "hover:bg-[#281414] hover:border-rose-500/30 group-hover:text-rose-400" },
    { name: "Retail Chains", hoverStyle: "hover:bg-[#122328] hover:border-cyan-500/30 group-hover:text-cyan-400" },
  ];

  return (
    <section
      // Locked safely to Theme 1 Pitch Dark Canvas Color (#101010)
      style={{ backgroundColor: "#101010" }}
      className="w-full py-24 px-6 md:px-12 lg:px-24 antialiased text-white border-t border-zinc-900 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col space-y-14">
        
        {/* Upper Typography Header block from image_945046.png */}
        <div className="flex flex-col items-start space-y-4">
          {/* Micro Category Pill Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-blue-400">
              Industries
            </span>
          </div>

          {/* Master Display Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-none">
            Verticals we ship results in.
          </h2>
        </div>

        {/* Industry Link Cards Grid Framework (3 Columns responsive layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {verticals.map((item, idx) => (
            <div
              key={idx}
              // Base solid Theme 1 card background shape allocation
              style={{ backgroundColor: "#242424" }}
              className={`
                group relative rounded-2xl border border-white/5 p-7 flex items-center justify-between
                transition-all duration-300 ease-out hover:scale-[1.015] shadow-xl cursor-pointer
                ${item.hoverStyle.split(' group-hover')[0]}
              `}
            >
              {/* Niche Industry Title */}
              <h3 className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                {item.name}
              </h3>

              {/* Action Vector Indicator Node matching image_945046.png */}
              <span 
                className={`
                  text-sm font-light text-zinc-500 transition-all duration-300 transform 
                  group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                  ${item.hoverStyle.split('group-hover:')[1]}
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