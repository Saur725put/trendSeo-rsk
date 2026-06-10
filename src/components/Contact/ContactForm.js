"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const locations = [
    {
        country: "United States",
        address: ["8 The Green #26133,", "Dover, DE 19901"],
    },
    {
        country: "India",
        address: ["9A, Tower B4, SPAZE ITECH PARK", "Sector 49 Gurugram"],
    },
    {
        country: "United Kingdom",
        address: ["71-75, Shelton Street, Covent Garden", "London, WC2H 9JQ"],
    },
];

const FacebookIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const XIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
);

const socialLinks = [
    { icon: FacebookIcon, label: "Facebook", href: "#" },
    { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
    { icon: XIcon, label: "X", href: "#" },
    { icon: InstagramIcon, label: "Instagram", href: "#" },
];

export default function ContactForm() {
    return (
        <section
            style={{ backgroundColor: "#ffffff" }}
            className="w-full py-24 px-6 md:px-12"
        >
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* LEFT SIDE — Locations, Email, Socials */}
                    <div className="lg:col-span-5 flex flex-col justify-start gap-8">

                        {/* Office Locations */}
                        <div className="flex flex-col gap-4 px-6">
                            {locations.map((loc, i) => (
                                <motion.div
                                    key={loc.country}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="flex flex-col gap-1"
                                >
                                    <span className="text-lg font-bold text-zinc-900">
                                        {loc.country}
                                    </span>
                                    {loc.address.map((line) => (
                                        <span key={line} className="text-sm text-zinc-500 leading-relaxed">
                                            {line}
                                        </span>
                                    ))}
                                </motion.div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-zinc-100" />

                        {/* Email */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.35 }}
                            className="flex flex-col gap-1"
                        >
                            <span className="text-lg font-bold px-6 text-zinc-900">Email</span>
                            <a
                                href="mailto:info@digirocket.io"
                                className="text-sm text-zinc-500 px-6 hover:text-zinc-900 transition-colors duration-200"
                            >
                                info@trendSEO.com
                            </a>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.45 }}
                            className="flex items-center gap-3 px-6"
                        >
                            {socialLinks.map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 transition-all duration-200"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </motion.div>

                    </div>

                    {/* RIGHT SIDE — Form */}
                    <div className="lg:col-span-7">
                        <motion.form
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-6 max-w-2xl"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all duration-200 text-sm"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="companyName" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        required
                                        placeholder="Red Cat Panda"
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all duration-200 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                                        Work Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="john@company.com"
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all duration-200 text-sm"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all duration-200 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="websiteUrl" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                                    Website URL
                                </label>
                                <input
                                    type="url"
                                    id="websiteUrl"
                                    required
                                    placeholder="https://example.com"
                                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all duration-200 text-sm"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="projectDetails" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                                    Tell us about your project
                                </label>
                                <textarea
                                    id="projectDetails"
                                    rows={5}
                                    required
                                    placeholder="Tell us about your product, targets, or specific milestones you want to hit..."
                                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all duration-200 text-sm resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-full font-bold text-sm transition-colors duration-200 hover:bg-blue-700 shadow-sm cursor-pointer"
                            >
                                Get My Free Proposal
                                <ArrowUpRight size={16} strokeWidth={2.5} />
                            </motion.button>

                        </motion.form>
                    </div>

                </div>
            </div>
        </section>
    );
}