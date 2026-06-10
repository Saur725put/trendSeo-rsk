"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "./Typewriter";

gsap.registerPlugin(ScrollTrigger);

const teamAvatars = [
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><circle cx='25' cy='25' r='25' fill='%23e4e4e7'/></svg>",
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><circle cx='25' cy='25' r='25' fill='%23d4d4d8'/></svg>",
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><circle cx='25' cy='25' r='25' fill='%23e4e4e7'/></svg>",
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><circle cx='25' cy='25' r='25' fill='%23d4d4d8'/></svg>",
];

const clients = [
  { id: "stat", type: "stat", value: 80, label: "Active Clients" },
  { id: "logo1", type: "logo", name: "Google", src: "/images/google.png" },
  { id: "logo2", type: "logo", name: "Amazon", src: "/images/amazon_logo.png" },
  { id: "logo3", type: "logo", name: "Microsoft", src: "/images/microsoft_logo.svg" },
  { id: "logo4", type: "logo", name: "Adobe", src: "/images/adobe_logo.png" },
  { id: "logo5", type: "logo", name: "Accenture", src: "/images/accenture_logo.png" },
  {
    id: "logo6",
    type: "logo",
    name: "Brand 6",
    src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='80'><rect width='160' height='80' rx='8' fill='%23f4f4f5'/><text x='50%' y='55%' font-size='12' fill='%23a1a1aa' text-anchor='middle'>BRAND 6</text></svg>",
  },
  {
    id: "logo7",
    type: "logo",
    name: "Brand 7",
    src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='80'><rect width='160' height='80' rx='8' fill='%23f4f4f5'/><text x='50%' y='55%' font-size='12' fill='%23a1a1aa' text-anchor='middle'>BRAND 7</text></svg>",
  },
];

export default function BrandShowcase() {
  const containerRef = useRef(null);
  const gridItemsRef = useRef([]);
  const countRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridItemsRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      if (countRef.current) {
        const counterObj = { value: 0 };

        gsap.to(counterObj, {
          value: 80,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: countRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (countRef.current) {
              countRef.current.innerText =
                Math.floor(counterObj.value) + "+";
            }
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#E8EAF6] text-zinc-900 py-14 px-6 md:px-12 border-t border-b border-zinc-300/40 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        <div className="lg:col-span-5 flex flex-col items-start space-y-7">
          <span className="px-7 py-2 text-lg font-bold tracking-widest uppercase bg-white/80 text-zinc-800 rounded-full border border-zinc-300/50 shadow-sm">
            Our Clients
          </span>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 uppercase leading-[1.1]">
            Worked With
            <br />
            Top B
            <Typewriter text="rands" />
          </h2>

          <p className="text-zinc-600 text-base md:text-lg font-normal leading-relaxed max-w-md antialiased">
            We’ve partnered with 105+ brands across industries, helping them
            scale through strategy, design, and execution. Our work speaks
            through the growth and trust we’ve built together.
          </p>

          <div className="flex items-center pt-2">
            {teamAvatars.map((svgData, idx) => (
              <div
                key={idx}
                className="w-14 h-14 rounded-full border-2 border-[#E8EAF6] bg-zinc-100 -mr-4 overflow-hidden relative shadow-md"
              >
                <img
                  src={svgData}
                  alt="Team"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-zinc-900 text-[#E8EAF6] flex items-center justify-center z-10 shadow-md cursor-pointer ml-1"
            >
              <Plus size={20} strokeWidth={2.5} />
            </motion.button>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-300/60 rounded-2xl overflow-hidden bg-zinc-900/5">
          {clients.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (gridItemsRef.current[index] = el)}
              className="h-56 flex flex-col items-center justify-center p-8 bg-[#E8EAF6] border-b border-r border-zinc-300/60 transition-all duration-300 hover:bg-white/40 group relative"
            >
              {item.type === "stat" ? (
                <div className="text-center flex flex-col items-center space-y-4">
                  <span
                    ref={countRef}
                    className="block text-6xl font-semibold tracking-tight text-zinc-900 tabular-nums"
                  >
                    0+
                  </span>

                  <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500 block">
                    {item.label}
                  </span>
                </div>
              ) : (
                <div className="w-full h-full max-w-[160px] max-h-[95px] relative transition-transform duration-300 group-hover:scale-105 filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    sizes="160px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              )}
            </div>
          ))}

          <div
            ref={(el) => (gridItemsRef.current[8] = el)}
            className="h-56 flex items-center justify-center p-8 bg-[#E8EAF6] border-b border-r border-zinc-300/60 transition-all duration-300 hover:bg-white/40 group"
          >
            <a
              href="#"
              className="text-xs font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-zinc-900 pb-1"
            >
              View All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}