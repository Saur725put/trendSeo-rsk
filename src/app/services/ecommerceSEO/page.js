import EcommerceEngineFeaturesSection from '@/components/Ecommerce/EcommerceEngineFeaturesSection';
import EcommerceMapsDominationSection from '@/components/Ecommerce/EcommerceMapsDominationSection';
import EcommerceSEODefinition from '@/components/Ecommerce/EcommerceSEODefinition';
import EcommerceSEOProcess from '@/components/Ecommerce/EcommerceSEOProcess';
import EcommerceTechDeploySection from '@/components/Ecommerce/EcommerceTechDeploySection';
import EcommerceWhyBusinessNeedsThis from '@/components/Ecommerce/EcommerceWhyBusinessNeedsThis';
import FaqAccordion from '@/components/FaqAccordion/FaqAccordion';
import React from 'react';

const FAQ_DATA = [
    {
      question: "How quickly can we start?",
      answer: "We typically initiate onboarding within 3 to 5 business days of contract signing. The first 48 hours focus on establishing secure Shopify partner access, creating a duplicate theme environment for safe technical staging, and verifying tracking setups to capture clean baseline metrics right from day one.",
    },
    {
      question: "Do you work with our existing team?",
      answer: "Absolutely. We routinely operate as an extension of your in-house e-commerce managers, content teams, or web developers. We sync via dedicated Slack channels and integrate task tracking into your existing project workflows like Jira, Linear, or Asana for zero friction.",
    },
    {
      question: "What's the minimum engagement?",
      answer: "Our standard agreements operate on a 3-month foundational cycle. This gives collection architectures, structured product descriptions, and technical collection page hierarchy fixes sufficient runway to be completely indexed, calibrated, and ranked by search engines.",
    },
    {
      question: "How is success measured?",
      answer: "Success is anchored directly on your store's core performance metrics: growth in organic e-commerce revenue, non-branded search impressions, collection-level keyword rankings, and transparent organic conversion rates tracked via integrated dashboards.",
    },
    {
      question: "Can you guarantee rankings?",
      answer: "No reputable agency can guarantee specific number-one slots due to real-time algorithm updates and market fluctuations. However, we guarantee strict execution of battle-tested Shopify SEO frameworks and white-hat methodologies that have consistently produced double-to-triple-digit visibility lifts for over 600+ stores.",
    },
  ];

const page = () => {
  return (
    <>
      <EcommerceMapsDominationSection />
      <EcommerceSEODefinition />
      <EcommerceWhyBusinessNeedsThis />
      <EcommerceSEOProcess />
      <EcommerceEngineFeaturesSection />
      <EcommerceTechDeploySection />
      <FaqAccordion FAQ_DATA={FAQ_DATA}/>
    </>
  );
}

export default page;
