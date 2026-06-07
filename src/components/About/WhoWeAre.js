import React from 'react';

export default function WhoWeAre() {
    return (
        <section className="w-full bg-white text-neutral-900 py-12 px-6 md:py-20 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

                {/* LEFT COLUMN: Graphic Placeholder */}
                <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-[440px] aspect-[1.1/1] bg-neutral-100/80 rounded-xl border border-neutral-200 flex items-center justify-center group overflow-hidden">
                        <img src='https://plus.unsplash.com/premium_photo-1683872921964-25348002a392?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFya2V0aW5nJTIwZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D' />
                    </div>
                </div>

                {/* RIGHT COLUMN: Content (Slightly Compact) */}
                <div className="lg:col-span-7 flex flex-col items-start gap-5">

                    {/* Pill Badge */}
                    <div className="border border-neutral-300 bg-neutral-50 text-sm md:text-base uppercase tracking-widest font-extrabold px-6 py-2.5 rounded-full text-neutral-600 select-none">
                        Who We Are?
                    </div>

                    {/* Main Statement */}
                    <h2 className="text-xl md:text-3xl lg:text-[28px] font-bold text-neutral-700 leading-[1.4] tracking-tight">
                        With over three years of industry experience and a proven track record of working with{" "}
                        300+ clients, we have become a trusted partner in turning
                        visions into powerful brands.
                    </h2>

                    {/* Paragraph 1 */}
                    <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-normal">
                        If there were two words to describe us, it would be &ldquo;Pushing boundaries&rdquo;. Not bound by
                        traditional thinking or restricted to conventional approaches, as a digital agency we are
                        innovators, creatives, and problem solvers determined to forge our own path forward. Our
                        relentless pursuit of excellence has led us to create leading-edge solutions that yield real
                        results for our clients.
                    </p>

                    {/* Paragraph 2 */}
                    <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-normal">
                        With an emphasis on innovation and creativity, We are always looking for new ways to
                        improve ourselves, re-organize and grow anew in the arena of digital media.
                    </p>

                </div>

            </div>
        </section>
    );
}