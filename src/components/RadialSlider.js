"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: "01", title: "DIGITAL STRATEGY", desc: "Maximizing ROI via automated funnels." },
  { id: "02", title: "PERFORMANCE MARKETING", desc: "Data-driven scaling tactics." },
  { id: "03", title: "CYBER BRANDING", desc: "High-end tech-centric visual identity." },
];

export default function RadialSlider() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="tech-border bg-black/60 p-6 rounded-none w-full max-w-xl">
      <div className="text-[10px] text-zinc-500 mb-4 flex justify-between">
        <span>&gt; CAROUSEL</span>
        <span>AXIS-X / LOOP-TRUE</span>
      </div>

      <div className="h-40 relative overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="text-[#00ff88] text-xs font-bold mb-2">// FIG.{slides[current].id}</div>
            <h3 className="text-xl text-white font-mono tracking-widest mb-2">{slides[current].title}</h3>
            <p className="text-sm text-zinc-400 max-w-sm">{slides[current].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-zinc-800/50">
        <button 
          onClick={() => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="text-xs text-[#00ff88] hover:text-white transition-colors"
        >
          &lt; PREV
        </button>
        <span className="text-xs text-zinc-500">{current + 1} / {slides.length}</span>
        <button 
          onClick={() => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
          className="text-xs text-[#00ff88] hover:text-white transition-colors"
        >
          NEXT &gt;
        </button>
      </div>
    </div>
  );
}