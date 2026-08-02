"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "918630032056";
  const defaultMessage = "Hi sparrowLingo, I want to know more about your services!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const [showTooltip, setShowTooltip] = useState(false);
  const [ping, setPing] = useState(false);

  // Trigger attention ping every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(true);
      setTimeout(() => setPing(false), 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-20 right-6 md:bottom-26 md:right-12 z-50 flex items-center gap-2">

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-[#25D366] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap"
          >
            Chat with us 👋
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button wrapper — handles ping rings */}
      <div className="relative">

        {/* Ripple rings — added pointer-events-none so clicks pass through directly to button */}
        <AnimatePresence>
          {ping && (
            <>
              <motion.span
                key="ring1"
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: "#128C7E" }}
                initial={{ opacity: 0.55, scale: 1 }}
                animate={{ opacity: 0, scale: 2.4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              />
              <motion.span
                key="ring2"
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: "#25D366" }}
                initial={{ opacity: 0.4, scale: 1 }}
                animate={{ opacity: 0, scale: 1.7 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.0, delay: 0.18, ease: "easeOut" }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Main button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onHoverStart={() => setShowTooltip(true)}
          onHoverEnd={() => setShowTooltip(false)}
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 12,
          }}
          whileHover={{
            scale: 1.12,
            rotate: [0, -8, 8, -4, 0],
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
          className="relative w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center cursor-pointer outline-none z-10"
          aria-label="Chat on WhatsApp"
          style={{
            WebkitTapHighlightColor: "transparent",
            boxShadow: "0 4px 20px rgba(37, 211, 102, 0.55), 0 2px 8px rgba(0,0,0,0.12)",
          }}
        >
          {/* Shine sweep on hover */}
          <motion.span
            className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
            initial={false}
          >
            <motion.span
              className="absolute top-0 left-[-60%] w-[40%] h-full bg-white/30 skew-x-[-20deg]"
              animate={{ left: ["-60%", "160%"] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          </motion.span>

          {/* WhatsApp icon with subtle bounce */}
          <motion.svg
            className="w-6 h-6 fill-current pointer-events-none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ y: [0, -1.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </motion.svg>
        </motion.a>
      </div>
    </div>
  );
}