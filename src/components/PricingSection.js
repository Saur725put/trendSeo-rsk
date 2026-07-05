"use client";
import { Check } from "lucide-react";

const plans = [
  {
    id: "starter",
    badge: "STARTER",
    price: "$2,800",
    period: "/month",
    description: "For early-stage brands ready to build organic as a real channel.",
    buttonText: "Start Growing",
    features: [
      "Up to 30 target keywords",
      "Monthly technical audit",
      "On-page optimization (12 pages/mo)",
      "4 link placements / month",
      "Monthly reporting dashboard",
      "Email support",
    ],
    isFeatured: false,
  },
  {
    id: "growth",
    badge: "GROWTH",
    tag: "MOST POPULAR",
    price: "$6,500",
    period: "/month",
    description: "For scaling teams that need predictable organic pipeline.",
    buttonText: "Scale Faster",
    features: [
      "Up to 150 target keywords",
      "Bi-weekly audits + CRO recs",
      "On-page optimization (40 pages/mo)",
      "12 DR50+ link placements / mo",
      "Content briefs + editorial review",
      "Dedicated strategist + Slack channel",
    ],
    isFeatured: true,
  },
  {
    id: "enterprise",
    badge: "ENTERPRISE",
    price: "Custom",
    period: "",
    description: "For multi-domain, multi-market, and category-defining brands.",
    buttonText: "Talk to Sales",
    features: [
      "Unlimited keywords & markets",
      "Custom Looker dashboards",
      "Programmatic SEO + dev sprints",
      "Digital PR + DR70+ placements",
      "Quarterly strategy off-sites",
      "C-suite reporting cadence",
    ],
    isFeatured: false,
  },
];

export default function PricingSection() {
  return (
    <section
      style={{ backgroundColor: "#101010" }}
      className="w-full py-24 px-6 md:px-12 antialiased text-white"
    >
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header Badge & Text Block matching image_1a7c76.png profile style */}
        <div className="text-center flex flex-col items-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 shadow-sm mb-6">
            <span className="text-lg font-mono font-bold tracking-[0.2em] uppercase text-zinc-400">
              Transparent Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight uppercase leading-[1.1] mb-4">
            <span className="text-zinc-500">Growth </span>
            <span className="font-medium text-white">Plans.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl font-normal leading-relaxed">
            No retainers in disguise. No 18-month lock-ins. Cancel any time after the 6-month minimum.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {plans.map((plan) => {
            return (
              <div
                key={plan.id}
                style={{
                  // Middle card stands out in deep dark blue-ish navy block, side cards match translucent Theme 1
                  backgroundColor: plan.isFeatured ? "#0A1128" : "rgba(255, 255, 255, 0.03)",
                }}
                className={`relative rounded-[2rem] p-8 flex flex-col min-h-[610px] border transition-transform duration-300 ${
                  plan.isFeatured 
                    ? "border-blue-500/40 shadow-[0_0_40px_rgba(26,115,232,0.15)] lg:py-12 z-10" 
                    : "border-white/10 shadow-sm"
                }`}
              >
                {/* Most Popular Top Badge */}
                {plan.isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-[14px] font-mono font-bold tracking-widest uppercase px-5 py-1.5 rounded-full text-white shadow-md">
                    {plan.tag}
                  </div>
                )}

                {/* Plan Metadata */}
                <div className="mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest block mb-4 text-zinc-400">
                    {plan.badge}
                  </span>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs font-medium text-zinc-400">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed min-h-[44px] text-zinc-400">
                    {plan.description}
                  </p>
                </div>

                {/* CTA Action Button */}
                <button
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-1.5 transition-colors mb-8 ${
                    plan.isFeatured 
                      ? "bg-white text-black hover:bg-zinc-200" 
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {plan.buttonText}
                  <span className="text-xs">↗</span>
                </button>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-white/10 mb-8" />

                {/* Feature Checklist */}
                <ul className="space-y-4 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <div className="mt-0.5 flex-shrink-0">
                        {/* Clean neon-ish check marks for dark visibility */}
                        <Check 
                          size={16} 
                          className={plan.isFeatured ? "text-blue-400" : "text-zinc-400"} 
                          strokeWidth={2.5} 
                        />
                      </div>
                      <span className="leading-tight text-zinc-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}