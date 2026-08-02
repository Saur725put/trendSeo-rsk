"use client";

const stats = [
  {
    id: "traffic-lift",
    value: "+312%",
    label: "Avg organic traffic lift (12mo)",
  },
  {
    id: "revenue-attributed",
    value: "$184M",
    label: "Client revenue attributed",
  },
  {
    id: "retention-rate",
    value: "92%",
    label: "Client retention rate",
  },
  {
    id: "markets-served",
    value: "147",
    label: "Markets served globally",
  },
];

export default function MetricsCounter() {
  return (
    <section style={{ backgroundColor: "#101010" }} className="w-full py-12 px-6 md:px-12 lg:px-24 antialiased text-white">
      <div className="w-full max-w-7xl mx-auto">
        {/* Changed grid-cols-1 to grid-cols-2 for mobile/tablet */}
        <div className="w-full py-12 border-t border-b border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 items-start relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.015] pointer-events-none" 
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {stats.map((stat) => {
            return (
              <div  key={stat.id}  className="flex flex-col space-y-3 pl-2 sm:pl-4 z-10" >
                <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white select-none">
                  {stat.value}
                </span>
                <p className="text-zinc-400 text-xs md:text-sm font-normal leading-relaxed max-w-[220px]">
                  {stat.label}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}