"use client";
import BrandShowcase from "@/components/BrandShowcase";
import FaqAccordion from "@/components/FaqAccordion/FaqAccordion";
import HeroSection from "@/components/HeroSection";
import HowWeWork from "@/components/HowWeWork";
import OurPartner from "@/components/OurPartner";
import ServicesSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";
import TrustedBrands from "@/components/TrustedBrands";

const FAQ_DATA = [
  {
    question: "What makes TrendSEO different from traditional SEO agencies?",
    answer: "Traditional SEO focuses strictly on keywords, but search engines have evolved. At TrendSEO, we track real-time search trends, leverage AI-driven content data, and combine technical SEO with broad digital marketing strategies to make sure your brand adapts faster than your competitors.",
  },
  {
    question: "What digital marketing services do you provide alongside SEO?",
    answer: "While SEO is in our DNA, we offer a comprehensive suite of digital marketing services. This includes content marketing, high-intent keyword research, technical website audits, conversion rate optimization (CRO), and growth frameworks designed to convert your organic traffic into paying clients.",
  },
  {
    question: "How long does it take to see measurable results from an SEO campaign?",
    answer: "While critical technical fixes can yield quick indexing jumps within weeks, a sustainable digital marketing strategy compounds over time. Most of our clients see substantial growth in organic traffic, keyword rankings, and conversions within 3 to 6 months.",
  },
  {
    question: "Will you provide regular reports on our website's marketing performance?",
    answer: "Absolutely. Transparency is a core value at TrendSEO. We provide intuitive, clear monthly performance dashboards tracking your organic impressions, keyword progression, ranking trends, and explicit conversion goals so you always see your exact ROI.",
  },
  {
    question: "Do you work with small businesses, or only established enterprise brands?",
    answer: "We design tailored digital marketing frameworks for companies across all growth phases. Whether you are a local startup looking to capture your regional market or an established enterprise seeking complex programmatic catalog optimization, we scale our execution to meet your goals.",
  },
];

export default function Home() {
  return (
    <>
    <HeroSection />
    <TrustedBrands />
    <ServicesSection />
    <HowWeWork />
    <BrandShowcase />
    <OurPartner />
    <TestimonialSection />
    <FaqAccordion FAQ_DATA={FAQ_DATA} />
    </>
  );
}