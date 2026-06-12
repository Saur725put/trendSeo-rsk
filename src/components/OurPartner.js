"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "./Typewriter";

export default function OurPartner() {
  return (
    <section className="w-full bg-[#101010] text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden antialiased">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

        {/* Left Column (Image Wrapper with subtle translucent dark border) */}
        <div className="lg:col-span-5 w-full min-h-[580px] max-w-[540px] border border-white/10 rounded-3xl relative shadow-sm overflow-hidden mx-auto lg:mx-0">
          <Image
            src="/images/b2s/collaborate-to-elevate.png"
            alt="Collaborate to Elevate"
            fill
            sizes="(max-width: 1024px) 100vw, 540px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-10">

          {/* Badge styled with transparent glassmorphism */}
          <div className="inline-flex items-center gap-2 px-7 py-2 rounded-full border border-white/10 bg-white/5 shadow-sm">
            <span className="text-lg font-mono font-bold tracking-widest uppercase text-zinc-400">
              Our Partner
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-light tracking-tight uppercase leading-[1.1]">
            <span className="text-zinc-500">
              Our{" "}
            </span>

            <span className="font-medium text-zinc-300">
              Trusted
            </span>

            <br />

            <span className="font-medium text-white">
              P
              <Typewriter text="artner." />
            </span>
          </h2>

          <p className="text-zinc-400 text-base md:text-lg font-normal leading-relaxed max-w-xl">
            We collaborate with leading brands and platforms to ensure the best
            solutions for your business. By combining our expertise with their
            industry-leading tools, we drive innovation and sustainable growth.
            Together, we create meaningful, long-term results for our clients.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

            {/* Amazon Logo Card */}
            {/* Kept original colors by removing filter classes. Container is styled with a subtle glass effect */}
            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-center justify-center p-8 bg-white/[0.03] border border-white/10 rounded-2xl shadow-sm hover:bg-white/[0.07] transition-all duration-200 cursor-pointer h-28 group"
            >
              <div className="w-32 h-12 relative transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/amazon_logo.png"
                  alt="Amazon"
                  fill
                  sizes="160px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </motion.div>

            {/* Microsoft Logo Card */}
            {/* Kept original colors by removing filter classes */}
            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-center justify-center p-8 bg-white/[0.03] border border-white/10 rounded-2xl shadow-sm hover:bg-white/[0.07] transition-all duration-200 cursor-pointer h-28 group"
            >
              <div className="w-32 h-12 relative transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/microsoft_logo.svg"
                  alt="Microsoft"
                  fill
                  sizes="160px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}