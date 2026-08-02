"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Footer() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    // Main background locked exactly to pure black (#000000)
    <footer className="w-full bg-[#0b0b0b] text-white border-t border-white/5 font-sans">

      {/* Main Footer */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT: Get Support + Addresses */}
          <div className="border-r border-white/10 pr-0 lg:pr-16">
            {/* Heading + Arrow */}
            <div className="flex items-center gap-5 mb-16 flex-wrap">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-400 leading-tight">
                Get Support?
              </h2>
              <a
                href="info@sparrowlingo.com"
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group transition-all duration-300"
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#1A73E8';
                  e.currentTarget.style.borderColor = '#1A73E8';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.borderColor = '';
                }}
              >
                <span
                  className="text-white text-3xl md:text-4xl inline-block transition-transform duration-300 group-hover:rotate-45"
                >
                  ↗
                </span>
              </a>
            </div>

            {/* Addresses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <p className="text-white font-bold text-base mb-4 tracking-wide">India</p>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Unit No. 259, Tower B1, SPAZE<br />
                  ITECH PARK, Sector 49,<br />
                  Gurugram
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Links + Email */}
          <div className="pl-0 lg:pl-4">
            <p className="text-white font-bold text-xl mb-10 tracking-wide">Useful Links</p>

            {/* Links Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-5 mb-12">
              {[
                ["About Us", "Contact"],
                ["Services", "Privacy Policy"],
                ["Term & Conditions", "Help Desk"],
                ["Careers", ""],
              ].map(([left, right], i) => (
                <div key={i} className="contents">
                  {left && (
                    <a href="#" className="text-zinc-400 hover:text-white text-base transition-colors duration-200">
                      {left}
                    </a>
                  )}
                  {right && (
                    <a href="#" className="text-zinc-400 hover:text-white text-base transition-colors duration-200">
                      {right}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Email Input */}
            <div className="flex items-center border border-white/10 bg-white/[0.02] rounded-xl overflow-hidden focus-within:border-white/30 hover:border-white/20 transition-colors duration-300">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent px-6 py-5 text-base text-white placeholder-zinc-600 outline-none"
              />
              <button
                onClick={() => router.push('/contact')}
                className="px-6 py-5 text-zinc-400 hover:text-white text-xl transition-colors duration-200 cursor-pointer"
              >
                →
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar — Soft premium division line with #000 backdrop */}
      <div className="w-full px-6 md:px-12 py-6 border-t border-white/5 bg-[#050505]">
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Social Icons mapping over dark clean state */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a href="#" className="w-11 h-11 rounded-full bg-white/5 border border-white/5 hover:bg-[#1A73E8] hover:border-[#1A73E8] flex items-center justify-center transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="w-11 h-11 rounded-full bg-white/5 border border-white/5 hover:bg-[#1A73E8] hover:border-[#1A73E8] flex items-center justify-center transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="w-11 h-11 rounded-full bg-white/5 border border-white/5 hover:bg-[#1A73E8] hover:border-[#1A73E8] flex items-center justify-center transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/>
              </svg>
            </a>
            {/* X / Twitter */}
            <a href="#" className="w-11 h-11 rounded-full bg-white/5 border border-white/5 hover:bg-[#1A73E8] hover:border-[#1A73E8] flex items-center justify-center transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" className="w-11 h-11 rounded-full bg-white/5 border border-white/5 hover:bg-[#1A73E8] hover:border-[#1A73E8] flex items-center justify-center transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-zinc-600 text-sm text-center sm:text-right">
            Copyright © 2026 sparrowLingo. All Rights Reserved
          </p>

        </div>
      </div>

    </footer>
  );
}