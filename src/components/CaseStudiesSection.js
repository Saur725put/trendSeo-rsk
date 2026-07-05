"use client";
import Image from "next/image";

const caseStudies = [
  {
    id: "dtc-fashion",
    tag: "DTC FASHION",
    title: "Atlas Apparel",
    description: "Replatformed a Shopify Plus store and rebuilt the collection architecture — organic now drives 41% of revenue.",
    image: "/images/b2s/Transparency-and-integrity.png", 
    metrics: [
      { label: "TRAFFIC", value: "+418%" },
      { label: "REVENUE", value: "+$6.2M" },
      { label: "KEYWORDS", value: "1,847 page-1" },
    ],
  },
  {
    id: "telehealth-saas",
    tag: "TELEHEALTH SAAS",
    title: "Vertex Health",
    description: "Programmatic SEO + topical authority unlocked the bottom-of-funnel category in 11 months.",
    image: "/images/b2s/client-centric-innovation.png", 
    metrics: [
      { label: "TRAFFIC", value: "+267%" },
      { label: "ARR REVENUE", value: "+$3.8M" },
      { label: "KEYWORDS", value: "612 page-1" },
    ],
  },
  {
    id: "law-firm-network",
    tag: "LAW FIRM NETWORK",
    title: "Brightline Legal",
    description: "Multi-location service × city matrix drove qualified case intake across 47 metros.",
    image: "/images/b2s/Transparency-and-integrity.png", 
    metrics: [
      { label: "TRAFFIC", value: "+184%" },
      { label: "REVENUE", value: "+$4.1M" },
      { label: "KEYWORDS", value: "923 page-1" },
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section
      // Main section layout wrapped strictly with Theme 2 (#181818)
      style={{ backgroundColor: "#181818" }}
      className="w-full py-24 px-6 md:px-12 antialiased text-white border-t border-zinc-800"
    >
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header Block matching the layout of image_1a8813.jpg */}
        <div className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-7 py-2 my-4 rounded-full border border-white/10 bg-white/5 shadow-sm">
            <span className="text-lg font-mono font-bold tracking-widest uppercase text-zinc-400">
              Case Studies
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 text-white mb-4">
            Real revenue. Real receipts.
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl font-normal">
            A sample of recent engagements — full case decks available under NDA.
          </p>
        </div>

        {/* Cards Grid Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((item) => {
            return (
              <div key={item.id} style={{ backgroundColor: "#242424" }} className="rounded-[1.75rem] overflow-hidden border border-white/5 shadow-md flex flex-col min-h-[460px]" >
                {/* Upper Image Layer Wrapper */}
                <div className="w-full h-56 relative overflow-hidden bg-zinc-800">
                  {/* Standard Next.js Image component handles visual load */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                {/* Content Block Layer */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Header Dot and Tags */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                      <span className="text-[11px] font-mono font-bold tracking-wider text-zinc-400">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Metrics Counter Footer Grid */}
                  <div>
                    <div className="w-full h-[1px] bg-white/5 mb-5" />
                    <div className="grid grid-cols-3 gap-2">
                      {item.metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-base md:text-lg font-black tracking-tight text-blue-400 mb-0.5">
                            {metric.value}
                          </span>
                          <span className="text-[10px] font-mono font-bold tracking-wide text-zinc-500">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}