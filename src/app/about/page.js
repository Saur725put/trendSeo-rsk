"use client";
import { motion } from "framer-motion";
import ScrambleText from "@/components/ScrambleText";

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl tech-border bg-black/40 p-8 space-y-6"
    >
      <div className="text-[10px] text-zinc-500">&gt; ABOUT_CORE_SYS</div>
      
      <h2 className="text-2xl text-white font-mono tracking-widest border-b border-zinc-800 pb-2">
        [ MISSION_STATEMENT ]
      </h2>

      <p className="text-zinc-400 text-sm leading-relaxed font-mono">
        <ScrambleText text="Red Cat Panda is a specialized engineering and performance marketing collective. We remove the guesswork from scaling by employing aggressive tracking, robust multi-channel funnels, and stunning cyberpunk layouts that retain high-value customer attention." />
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        {[
          { label: "FOUNDED", val: "2024.08" },
          { label: "CLIENTS", val: "42+ GLOBAL" },
          { label: "ROI_AVG", val: "+340%" },
          { label: "OPERATIONS", val: "DECENTRALIZED" }
        ].map((stat, i) => (
          <div key={i} className="border border-zinc-800/80 p-3 bg-black/60">
            <div className="text-[9px] text-zinc-500">{stat.label}</div>
            <div className="text-sm font-bold text-[#00ff88] mt-1 font-mono">{stat.val}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}