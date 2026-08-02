import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const AboutHeader = () => {
    return (
        <section className="relative w-full bg-[#000000] py-24 px-4 flex flex-col items-center justify-center text-center select-none">
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                    About sparrowLingo
                </h1>
                <Breadcrumb />
            </div>
        </section>
    );
}

export default AboutHeader;