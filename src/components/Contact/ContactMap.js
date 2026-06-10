"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-full mx-auto" // Responsive width with max constraint & clean top separation
    >
      {/* Map Embed Container - Height boosted to 750px on desktop screens */}
      <div className="w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden border border-zinc-200 bg-zinc-50 relative group shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.1834217112046!2d77.04092437631393!3d28.413225993297127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193264f549fb%3A0xc392a21c6500fe64!2sDigirocket%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1718045000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale-[10%] contrast-[105%] group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </motion.div>
  );
}