"use client";

import React, { useState } from "react";

const FAQ_DATA = [
  {
    question: "What Is Ecommerce SEO And How Can It Help My Online Store?",
    answer: "Ecommerce SEO is the process of optimizing your online store to rank higher in search engines like Google. It helps increase organic traffic, boost product visibility, and ultimately drive more sales without relying solely on paid ads.",
  },
  {
    question: "How Is Your Ecommerce SEO Service Different From General SEO?",
    answer: "Our Ecommerce SEO focus centers tightly on conversion intent, product structural schema markup, catalog-wide pagination handling, and continuous conversion rate optimization (CRO) sync loops that standard content websites do not require.",
  },
  {
    question: "Will You Do Keyword Research For My Products??",
    answer: "Yes, we dive deep into high-intent transactional search terms, competitor gap analyses, and long-tail semantic variations to ensure shoppers who are ready to purchase land directly on your collection and item variants.",
  },
  {
    question: "Do You Optimize All My Product Pages Individually?",
    answer: "We employ a hybrid programmatic template approach for mass catalog normalization combined with direct, custom handcrafted updates tailored specifically for your highest-revenue-driving anchor product pillars.",
  },
  {
    question: "How Long Does It Take To See Results From Ecommerce SEO?",
    answer: "While initial structural health crawl performance jumps happen within weeks, true compound organic traffic indexing shifts generally manifest clearly over an iterative window of 3 to 6 months.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#E8EAF6] text-neutral-900 py-12 px-4 sm:px-6 md:py-20 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Section Title — Font size bumped to text-3xl to text-5xl range */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12 text-left text-neutral-900">
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
                  {/* Plus/Minus Controller Icon */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 focus:outline-none ${
                      isOpen
                        ? "border-neutral-900 bg-transparent text-neutral-900"
                        : "border-neutral-400 bg-transparent text-neutral-500 group-hover:border-neutral-900 group-hover:text-neutral-900"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold leading-none select-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Inter-node line track — Adjusted padding context for slightly larger text flow */}
                  {index !== FAQ_DATA.length - 1 && (
                    <div className="w-[1px] grow bg-neutral-300 my-1.5 min-h-[20px]"></div>
                  )}
                </div>

                {/* Right Text Fields Content Panel */}
                <div className="w-full pb-6">
                  {/* Interactive Question — Size bumped to base / lg / xl */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left font-bold text-base sm:text-lg md:text-xl text-neutral-900 hover:text-black transition-colors duration-150 focus:outline-none mb-2"
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
                      {/* Formatted Paragraph Answer — Size bumped to sm / base / lg */}
                      <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-5xl">
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