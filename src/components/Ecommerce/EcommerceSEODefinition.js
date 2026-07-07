"use client";
import React from "react";

export default function EcommerceSEODefinition() {
  return (
    <section
      style={{ backgroundColor: "#181818" }}
      className="w-full py-24 px-6 md:px-12 lg:px-24 antialiased text-white border-t border-zinc-800/60"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-start">
        
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-blue-400">
            What is it?
          </span>
        </div>

        <div className="relative pl-0 md:pl-8 flex flex-col items-start space-y-6">
          <div className="hidden md:block absolute left-0 top-2 bottom-2 w-[3px] bg-gradient-to-b from-blue-600 via-zinc-700 to-transparent rounded-full opacity-60" />
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-none">
            What is Ecommerce SEO?
          </h2>

          <p className="text-zinc-400 text-base md:text-xl font-normal leading-relaxed max-w-3xl">
            Ecommerce SEO is a revenue-engineered discipline that aligns search demand with product, category, and 
            collection architecture. We engineer Shopify, WooCommerce, Magento, and headless stores to rank for high-intent 
            commercial queries — and convert them.
          </p>
        </div>
      </div>
    </section>
  );
}