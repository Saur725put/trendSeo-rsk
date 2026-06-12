"use client";
import React from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "Google", logo: "/images/google.png" },
  { name: "Amazon", logo: "/images/amazon_logo.png" },
  { name: "Microsoft", logo: "/images/microsoft_logo.svg" },
  { name: "Adobe", logo: "/images/adobe_logo.png" },
  { name: "Accenture", logo: "/images/accenture_logo.png" },
];

const duplicatedBrands = [...brands, ...brands, ...brands];

export default function TrustedBrands() {
  return (
    // Background changed to #303030 using arbitrary Tailwind class bg-[#303030]
    <section className="w-full bg-[#181818] py-12 overflow-hidden flex flex-col items-center justify-center">
      {/* Changed text-black to text-zinc-300 for readability on dark background */}
      <h4 className="text-zinc-300 font-sans text-base md:text-lg font-semibold mb-8 tracking-wide">
        Trusted by your favorite brands
      </h4>

      {/* Infinite Marquee Container */}
      <div className="w-full relative max-w-7xl flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <motion.div
          className="flex space-x-16 md:space-x-24 justify-start items-center min-w-full shrink-0"
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 18,
            repeat: Infinity,
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-9 w-28 md:w-36 shrink-0 select-none"
            >
              {/* Added 'invert brightness-200' to make dark/colored logos stand out beautifully on #303030 */}
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-h-full max-w-full object-contain grayscale invert brightness-200 opacity-50 hover:opacity-100 hover:grayscale-0 hover:invert-0 hover:brightness-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}