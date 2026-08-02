import React from "react";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-[#181818] text-white py-12 px-6 md:py-20 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
          {/* Height badhane ke liye aspect-ratio ko update kiya gaya hai (aspect-[0.9/1]) */}
          <div className="relative w-full max-w-[440px] aspect-[0.9/1] bg-white/5 rounded-xl border border-white/10 flex items-center justify-center group overflow-hidden">
            <Image
              src="/images/marketing_image/digital4.jpg"
              alt="Digital Marketing"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col items-start gap-5">
          <div className="border border-white/10 bg-white/5 text-sm md:text-base uppercase tracking-widest font-extrabold px-6 py-2.5 rounded-full text-zinc-300 select-none">
            Who We Are?
          </div>

          <h2 className="text-xl md:text-3xl lg:text-[28px] font-bold text-zinc-200 leading-[1.4] tracking-tight">
            With over three years of industry experience and a proven track
            record of working with 300+ clients, we have become a trusted
            partner in turning visions into powerful brands.
          </h2>

          <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
            If there were two words to describe us, it would be &ldquo;Pushing
            boundaries&rdquo;. Not bound by traditional thinking or restricted
            to conventional approaches, as a digital agency we are innovators,
            creatives, and problem solvers determined to forge our own path
            forward. Our relentless pursuit of excellence has led us to create
            leading-edge solutions that yield real results for our clients.
          </p>

          <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
            With an emphasis on innovation and creativity, We are always looking
            for new ways to improve ourselves, re-organize and grow anew in the
            arena of digital media.
          </p>
        </div>
      </div>
    </section>
  );
}