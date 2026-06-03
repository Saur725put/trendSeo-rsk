"use client";
import HeroSection from "@/components/HeroSection";
import HowWeWork from "@/components/HowWeWork";
import ServicesSection from "@/components/ServiceSection";
import TrustedBrands from "@/components/TrustedBrands";

export default function Home() {
  return (
    <>
    <HeroSection />
    <TrustedBrands />
    <ServicesSection />
    <HowWeWork />
    </>
  );
}