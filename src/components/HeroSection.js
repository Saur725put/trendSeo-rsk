"use client";
import React from 'react'
import Typewriter from './Typewriter'
import { motion, useScroll, useSpring } from "framer-motion";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div style={{ backgroundColor: "#ddd5f2" }} className="w-full min-h-screen text-black transition-colors duration-300">
      
      {/* Top Scroll Line */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#1A73E8] transform origin-left z-50" 
        style={{ scaleX }} 
      />

      <div className="w-full max-w-7xl mx-auto py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Pill Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-400 bg-white/40 text-zinc-800 text-[10px] font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] animate-pulse"></span>
              AI-Driven Creative Studio
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-zinc-900">
              Make your <br />
              brand <span className="text-zinc-500 font-light italic inline-block"><Typewriter text="impossible" /></span> <br />
              to ignore.
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-lg text-zinc-600 max-w-xl leading-relaxed font-normal">
              TrendSEO blends performance marketing, SEO, and AI-powered creative to turn scrolls 
              into sales — built for founders and store owners who want growth that compounds.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              
              {/* Primary Blue Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1A73E8] text-white text-sm font-semibold rounded-xl shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Start a project</span>
                <span className="relative z-10 text-sm inline-block transition-transform duration-300 group-hover:rotate-45">
                  →
                </span>
                {/* Shine sweep on hover */}
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-zinc-900 text-sm font-semibold rounded-xl border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300"
              >
                <span>See our work</span>
                <span className="text-sm inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Large Capsule */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-[400px] rounded-[50px] overflow-hidden bg-white/30 border border-zinc-300 relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" 
                alt="Marketing Infrastructure Node" 
                className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
              <div className="absolute top-6 right-6 font-mono text-[10px] bg-white/80 px-3 py-1 rounded-full border border-zinc-300 text-zinc-700">
                NODE_01 // VISUAL_ARRAY
              </div>
            </motion.div>

            {/* Bottom row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="md:col-span-8 h-[120px] rounded-full overflow-hidden bg-white/30 border border-zinc-300 relative group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f" 
                  alt="Architecture Stream" 
                  className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </motion.div>

              <div className="md:col-span-4 flex justify-end md:justify-center items-center">
                <a href="/services" className="group flex items-center gap-2 font-mono text-xs font-bold text-zinc-700 hover:text-black transition-colors py-2">
                  <span>More Details</span>
                  <motion.span 
                    animate={{ y: [0, 4, 0] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-[#1A73E8]"
                  >
                    ↓
                  </motion.span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default HeroSection