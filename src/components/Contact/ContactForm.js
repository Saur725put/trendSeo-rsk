"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";

const locations = [
  { country: "India", address: ["9A, Tower B4, SPAZE ITECH PARK", "Sector 49 Gurugram"] }
];

const Facebook = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const Linkedin = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
const XIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
const Instagram = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" /></svg>;

const socialLinks = [ { icon: Facebook, label: "Facebook" }, { icon: Linkedin, label: "LinkedIn" }, { icon: XIcon, label: "X" }, { icon: Instagram, label: "Instagram" } ];

export default function ContactForm() {
  const [formData, setFormData] = useState({ fullName: "", companyName: "", workEmail: "", phoneNumber: "", websiteUrl: "", projectDetails: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Submitting your proposal..." });
    try {
      const res = await fetch("http://localhost:8000/api/v1/lead/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to submit. Please try again.");
      setStatus({ type: "success", message: "Thank you! Your proposal request has been submitted successfully." });
      setFormData({ fullName: "", companyName: "", workEmail: "", phoneNumber: "", websiteUrl: "", projectDetails: "" });
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Connection failed. Please check your backend is running." });
    }
  };

  return (
    <section style={{ backgroundColor: "#181818" }} className="w-full py-24 px-6 md:px-12 text-white">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Info Panel */}
        <div className="lg:col-span-5 flex flex-col justify-start gap-8">
          <div className="flex flex-col gap-4 px-6">
            {locations.map((loc, i) => (
              <motion.div key={loc.country} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col gap-1">
                <span className="text-lg font-bold">{loc.country}</span>
                {loc.address.map(line => <span key={line} className="text-sm text-zinc-400">{line}</span>)}
              </motion.div>
            ))}
          </div>
          <div className="w-full h-px bg-white/10" />
          <div className="flex flex-col gap-1 px-6">
            <span className="text-lg font-bold">Email</span>
            <a href="mailto:info@sparrowLingo.com" className="text-sm text-zinc-400 hover:text-white transition-colors">info@sparrowLingo.com</a>
          </div>
          <div className="flex items-center gap-3 px-6">
            {socialLinks.map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5 transition-all"><Icon /></a>
            ))}
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="lg:col-span-7">
          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Full Name</label>
                <input type="text" id="fullName" required value={formData.fullName} onChange={handleChange} placeholder="John Doe" className="w-full px-4 py-3 bg-[#242424] border border-white/10 rounded-xl focus:outline-none focus:border-white focus:bg-[#2a2a2a] text-sm text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="companyName" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Company Name</label>
                <input type="text" id="companyName" required value={formData.companyName} onChange={handleChange} placeholder="SparrowLingo" className="w-full px-4 py-3 bg-[#242424] border border-white/10 rounded-xl focus:outline-none focus:border-white focus:bg-[#2a2a2a] text-sm text-white" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="workEmail" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Work Email</label>
                <input type="email" id="workEmail" required value={formData.workEmail} onChange={handleChange} placeholder="john@company.com" className="w-full px-4 py-3 bg-[#242424] border border-white/10 rounded-xl focus:outline-none focus:border-white focus:bg-[#2a2a2a] text-sm text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phoneNumber" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Phone Number</label>
                <input type="tel" id="phoneNumber" required value={formData.phoneNumber} onChange={handleChange} placeholder="709163211" className="w-full px-4 py-3 bg-[#242424] border border-white/10 rounded-xl focus:outline-none focus:border-white focus:bg-[#2a2a2a] text-sm text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="websiteUrl" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Website URL</label>
              <input type="url" id="websiteUrl" required value={formData.websiteUrl} onChange={handleChange} placeholder="https://digirocket.io/" className="w-full px-4 py-3 bg-[#242424] border border-white/10 rounded-xl focus:outline-none focus:border-white focus:bg-[#2a2a2a] text-sm text-white" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="projectDetails" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Tell us about your project</label>
              <textarea id="projectDetails" rows={5} required value={formData.projectDetails} onChange={handleChange} placeholder="this is about seciton" className="w-full px-4 py-3 bg-[#242424] border border-white/10 rounded-xl focus:outline-none focus:border-white focus:bg-[#2a2a2a] text-sm text-white resize-none" />
            </div>

            {status.type !== "idle" && (
              <div className={`p-4 rounded-xl text-sm font-medium border ${status.type === "loading" ? "bg-zinc-800 text-zinc-300 border-zinc-700" : status.type === "success" ? "bg-emerald-950/55 text-emerald-300 border-emerald-500/30" : "bg-rose-950/55 text-rose-300 border-rose-500/30"}`}>
                {status.message}
              </div>
            )}

            <motion.button type="submit" disabled={status.type === "loading"} whileHover={{ scale: status.type === "loading" ? 1 : 1.02 }} whileTap={{ scale: status.type === "loading" ? 1 : 0.98 }} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 disabled:bg-blue-800/80 disabled:cursor-not-allowed cursor-pointer transition-colors">
              {status.type === "loading" ? <>Submitting...<Loader2 size={16} className="animate-spin" /></> : <>Get My Free Proposal<ArrowUpRight size={16} strokeWidth={2.5} /></>}
            </motion.button>

          </motion.form>
        </div>

      </div>
    </section>
  );
}