"use client";

import React, { useState } from "react";

export default function FaqAccordion({ FAQ_DATA }) {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Section background locked to #181818 and base text color changed to white
    <section className="w-full bg-[#181818] text-white py-12 px-4 sm:px-6 md:py-20 md:px-12 lg:px-20 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12 text-left text-white">
          Frequently Asked Questions
        </h2>

        {/* Accordion List Container */}
        <div className="flex flex-col w-full">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className="flex group w-full">
                
                {/* Left Timeline Tracker Rail */}
                <div className="flex flex-col items-center mr-4 md:mr-5 flex-shrink-0 select-none">
                  {/* Plus/Minus Controller Icon adjusted for dark mode contrast */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer ${
                      isOpen
                        ? "border-white bg-transparent text-white"
                        : "border-neutral-600 bg-transparent text-neutral-400 group-hover:border-white group-hover:text-white"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold leading-none select-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Inter-node line track updated from neutral-300 to subtle white opacity line */}
                  {index !== FAQ_DATA.length - 1 && (
                    <div className="w-[1px] grow bg-white/10 my-1.5 min-h-[20px]"></div>
                  )}
                </div>

                {/* Right Text Fields Content Panel */}
                <div className="w-full pb-6">
                  {/* Interactive Question */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left font-bold text-base sm:text-lg md:text-xl text-neutral-200 hover:text-white transition-colors duration-150 focus:outline-none mb-2 cursor-pointer"
                  >
                    {item.question}
                  </button>

                  {/* Smooth Collapse Transform Layout Element Box */}
                  <div
                    className={`grid transition-all duration-200 ease-in-out overflow-hidden ${
                      isOpen 
                        ? "grid-rows-[1fr] opacity-100 visible" 
                        : "grid-rows-[0fr] opacity-0 invisible"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {/* Formatted Paragraph Answer changed from text-neutral-600 to text-zinc-400 */}
                      <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-5xl">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}