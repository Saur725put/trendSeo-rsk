import React from 'react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import AboutHeader from '@/components/About/AboutHeader';
import WhoWeAre from '@/components/About/WhoWeAre';
import Ourteam2 from '@/components/About/Ourteam2';
import FaqAccordion from '@/components/FaqAccordion/FaqAccordion';
import Ourteam3 from '@/components/About/Ourteam3';

const ABOUT_FAQ = [
  {
    question: "Why was sparrowLingo founded?",
    answer: "sparrowLingo was built to bridge the gap between static, slow-moving traditional optimization and the fast-paced nature of modern digital algorithms. We recognized that businesses didn't just need static keywords—they needed an agile partner capable of capitalizing on real-time market trends.",
  },
  {
    question: "What industries does your team specialize in?",
    answer: "Our collective expertise spans across e-commerce platforms, B2B SaaS applications, tech startups, and local service providers. Because our growth frameworks are data-driven, our optimization methodologies scale effectively across almost any consumer vertical.",
  },
  {
    question: "How do you combine AI with human marketing strategy?",
    answer: "We use AI models for deep data processing, pattern analysis, and predictive keyword modeling. However, all creative execution, final strategy design, and brand voice alignment are fully conceptualized and refined by our senior human marketers.",
  },
  {
    question: "What makes sparrowLingo different from a traditional marketing agency?",
    answer: "Traditional agencies often rely on generic, out-of-the-box SEO templates and slow reporting cycles. We treat marketing as a performance engineering problem—combining deep data diagnostics, modern web architecture optimizations, and high-velocity content frameworks.",
  },
  {
    question: "Where is the sparrowLingo team located?",
    answer: "We operate as a distributed network of technical SEO specialists, performance marketers, and conversion designers. This remote-first operational structure allows us to source elite marketing talent globally to support your brand's growth.",
  },
  {
    question: "What are your core operational values?",
    answer: "We run on absolute transparency, compounding data growth, and proactive strategy adjustments. We don't hide behind vanity metrics like impressions; our focus is on metrics that directly correlate with your bottom-line revenue.",
  },
];

export default function About() {
  return (
    <>
      <AboutHeader />
      <WhoWeAre />
      {/* <Ourteam2 /> */}
      <Ourteam3 />
      <FaqAccordion FAQ_DATA={ABOUT_FAQ} />
    </>
  );
}