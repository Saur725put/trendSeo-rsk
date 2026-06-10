"use client";
import BrandShowcase from "@/components/BrandShowcase";
import FaqAccordion from "@/components/FaqAccordion/FaqAccordion";
import HeroSection from "@/components/HeroSection";
import HowWeWork from "@/components/HowWeWork";
import OurPartner from "@/components/OurPartner";
import ServicesSection from "@/components/ServiceSection";
import TrustedBrands from "@/components/TrustedBrands";

export default function Home() {
  return (
    <>
    <HeroSection />
    <TrustedBrands />
    <ServicesSection />
    <HowWeWork />
    <BrandShowcase />
    <OurPartner />
    <FaqAccordion />
    </>
  );
}