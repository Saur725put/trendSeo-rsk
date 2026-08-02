"use client";
import React from "react";

export default function EcommerceTechDeploySection() {
  const toolsList = [
    { name: "Google Search Console", letter: "G", color: "text-blue-400", bg: "bg-blue-500/10" },
    { name: "Google Analytics 4", letter: "G", color: "text-blue-400", bg: "bg-blue-500/10" },
    { name: "Google Merchant Center", letter: "G", color: "text-blue-400", bg: "bg-blue-500/10" },
    { name: "Google Business Profile", letter: "G", color: "text-blue-400", bg: "bg-blue-500/10" },
    { name: "Google Keyword Planner", letter: "G", color: "text-blue-400", bg: "bg-blue-500/10" },
    { name: "Google Trends", letter: "G", color: "text-blue-400", bg: "bg-blue-500/10" },
    { name: "SEMrush", letter: "S", color: "text-orange-400", bg: "bg-orange-500/10" },
    { name: "Screaming Frog", letter: "S", color: "text-green-400", bg: "bg-green-500/10" },
  ];

  return (
    <section
      style={{ backgroundColor: "#181818" }}
      className="w-full py-24 px-6 md:px-12 lg:px-24 antialiased text-white border-t border-zinc-800/50 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col space-y-14">
        
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-blue-400">
              Tools
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-tight">
            The tech we deploy on this engagement.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {toolsList.map((tool, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl border border-white/5 bg-white/[0.01] p-5 flex items-center gap-4 transition-all duration-300 ease-out hover:bg-white/[0.03] hover:border-zinc-700/80 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div 
                className={`w-9 h-9 rounded-full ${tool.bg} flex items-center justify-center shrink-0 font-mono text-sm font-bold ${tool.color} border border-white/5 group-hover:border-white/10 transition-colors`}
              >
                {tool.letter}
              </div>
              <span className="text-sm md:text-base font-semibold text-zinc-300 group-hover:text-white transition-colors tracking-tight">
                {tool.name}
              </span>
              <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}