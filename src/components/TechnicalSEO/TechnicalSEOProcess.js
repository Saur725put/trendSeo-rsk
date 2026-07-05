"use client";
import React from "react";

export default function TechnicalSEOProcess() {
  const phases = [
    { num: "PHASE 01", title: "Discover" },
    { num: "PHASE 02", title: "Audit" },
    { num: "PHASE 03", title: "Plan" },
    { num: "PHASE 04", title: "Execute" },
    { num: "PHASE 05", title: "Measure" },
    { num: "PHASE 06", title: "Compound" },
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
              Our Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-none">
            How we deliver Technical SEO.
          </h2>

          <p className="text-zinc-400 text-sm md:text-base font-normal max-w-xl">
            Six-phase methodology, refined across 600+ engagements.
          </p>
        </div>

        <div className="w-full overflow-x-auto pb-6 scrollbar-none flex items-center gap-4 snap-x snap-mandatory">
          {phases.map((phase, idx) => (
            <React.Fragment key={idx}>
              
              <div
                className="min-w-[200px] md:min-w-[190px] flex-1 snap-start rounded-2xl border border-white/5 bg-white/[0.02] p-6 flex flex-col justify-between items-start space-y-6 transition-all duration-300 hover:bg-white/[0.04] hover:border-zinc-700 shadow-lg"
                style={{ height: "140px" }}
              >
                <span className="text-[10px] font-mono font-bold tracking-wider text-blue-400">
                  {phase.num}
                </span>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {phase.title}
                </h3>
              </div>

              {idx < phases.length - 1 && (
                <div className="hidden lg:flex items-center justify-center text-zinc-600 px-1 font-sans font-light select-none text-xl">
                  →
                </div>
              )}

            </React.Fragment>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}