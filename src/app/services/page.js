import FaqAccordion from '@/components/FaqAccordion/FaqAccordion';
import PopularService1 from '@/components/Services/PopularService1'
import ServiceImageSlider from '@/components/Services/ServiceImageSlider'
import ServicesHeader from '@/components/Services/ServicesHeader'
import React from 'react'

const SERVICES_FAQ = [
  {
    question: "Do you offer custom digital marketing packages?",
    answer: "Yes, entirely. We don't believe in one-size-fits-all checklists. After conducting an initial audit of your current digital footprint and competitor landscape, we map out a bespoke strategy containing the exact mix of SEO, content optimization, and growth marketing you need.",
  },
  {
    question: "Can you optimize websites built on Next.js, Shopify, or WordPress?",
    answer: "Absolutely. Our technical team is highly proficient across modern web stacks. Whether handling complex Server-Side Rendering (SSR) routing configurations in Next.js, headless architectures, or standard storefront implementations like Shopify and WordPress, your technical health is covered.",
  },
  {
    question: "What does your conversion rate optimization (CRO) service involve?",
    answer: "Getting traffic to your site is only half the battle. Our CRO process analyzes user behavior using advanced heatmaps, session recordings, and custom sync loops to restructure UI layouts, copy elements, and call-to-actions—effectively turning casual visitors into buyers.",
  },
  {
    question: "How long does it take to see real results from your SEO services?",
    answer: "While paid performance marketing can drive immediate visibility, organic SEO compounds over time. Initial indexing and structural optimization improvements typically surface within 30 to 60 days, while significant organic revenue growth scales sustainably between months 3 and 6.",
  },
  {
    question: "Do you handle content creation and copywriting internally?",
    answer: "Yes, we handle the entire pipeline. Our service includes comprehensive keyword mapping, content brief engineering, high-intent copy generation, and on-page formatting. Every piece of content is built to satisfy both search algorithms and target consumers.",
  },
  {
    question: "Will I receive regular performance reports?",
    answer: "Yes, we send comprehensive data lookbooks every month alongside access to a transparent live client dashboard. You'll see real-time updates regarding search engine ranking shifts, organic traffic acquisitions, conversion benchmarks, and direct campaign wins.",
  },
];

const page = () => {
  return (
    <>
      <ServicesHeader />
      <PopularService1 />
      <ServiceImageSlider />
      <FaqAccordion FAQ_DATA={SERVICES_FAQ} />
    </>
  )
}

export default page
