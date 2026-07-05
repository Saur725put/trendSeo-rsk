"use client";
import React from "react";
import { TrendingUp, Users, ShoppingCart, MousePointerClick, DollarSign } from "lucide-react";

export default function TechnicalExpectedResultsSection() {
  const metricsData = [
    {
      icon: <TrendingUp size={18} />,
      metric: "+218%",
      label: "Organic Traffic",
      subLabel: "Avg 12-mo session lift",
      hoverBg: "hover:bg-[#121c2c]",
      hoverBorder: "hover:border-blue-500/30",
      textColor: "text-blue-400"
    },
    {
      icon: <Users size={18} />,
      metric: "+184%",
      label: "Qualified Leads",
      subLabel: "Form fills + calls tracked",
      hoverBg: "hover:bg-[#1c241c]",
      hoverBorder: "hover:border-green-500/30",
      textColor: "text-green-400"
    },
    {
      icon: <ShoppingCart size={18} />,
      metric: "+247%",
      label: "Sales",
      subLabel: "Attributed transactions",
      hoverBg: "hover:bg-[#281c14]",
      hoverBorder: "hover:border-orange-500/30",
      textColor: "text-orange-400"
    },
    {
      icon: <MousePointerClick size={18} />,
      metric: "+92%",
      label: "Conversions",
      subLabel: "CRO + on-page lift",
      hoverBg: "hover:bg-[#24162e]",
      hoverBorder: "hover:border-purple-500/30",
      textColor: "text-purple-400"
    },
    {
      icon: <DollarSign size={18} />,
      metric: "14.6x",
      label: "ROI",
      subLabel: "Engagement-to-revenue ratio",
      hoverBg: "hover:bg-[#282214]",
      hoverBorder: "hover:border-amber-500/30",
      textColor: "text-amber-400"
    }
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
              Results
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-none">
            Results you can expect.
          </h2>

          <p className="text-zinc-400 text-sm md:text-base font-normal max-w-xl">
            Benchmarks from our last 50 engagements in this service line.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {metricsData.map((data, idx) => (
            <div
              key={idx}
              className={`
                group relative rounded-2xl border border-white/5 bg-white/[0.01] p-6 flex flex-col justify-between items-start space-y-6
                transition-all duration-300 ease-out hover:scale-[1.02] shadow-xl cursor-default
                ${data.hoverBg} ${data.hoverBorder}
              `}
              style={{ minHeight: "220px" }}
            >
              <div 
                className={`w-9 h-9 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/20 ${data.textColor}`}
              >
                {data.icon}
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white group-hover:text-zinc-50 transition-colors">
                  {data.metric}
                </h3>
                
                <span className="text-sm font-bold text-zinc-300 tracking-tight">
                  {data.label}
                </span>

                <span className="text-[11px] font-normal text-zinc-500 leading-tight">
                  {data.subLabel}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}