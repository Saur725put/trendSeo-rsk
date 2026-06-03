"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-7 h-7 bg-black border border-zinc-700 rounded-full pointer-events-none z-50 flex items-center justify-center shadow-lg mix-blend-difference"
      animate={{ x: mousePos.x - 14, y: mousePos.y - 14 }}
      transition={{ type: "spring", stiffness: 500, damping: 32 }}
    >
      <div className="w-1.5 h-1.5 bg-white rounded-full" />
    </motion.div>
  );
}