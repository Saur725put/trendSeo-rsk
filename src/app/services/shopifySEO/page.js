import FaqAccordion from '@/components/FaqAccordion/FaqAccordion'
import React from 'react'

const FAQ_DATA = [
  {
    question: "How quickly can we start?",
    answer: "We typically initiate onboarding within 3 to 5 business days of contract signing. The first 48 hours focus on establishing API linkages, auditing your Google Business Profile, and deploying our tracking infrastructure to capture clean baseline metrics right from day one.",
  },
  {
    question: "Do you work with our existing team?",
    answer: "Absolutely. We routinely operate as an extension of your in-house marketing, design, or engineering teams. We sync via dedicated Slack channels and integrate seamless task tracking into your existing project workflows like Jira or Asana for zero friction.",
  },
  {
    question: "What's the minimum engagement?",
    answer: "Our standard agreements operate on a 3-month foundational cycle. This gives the local search engine algorithms sufficient observation runway to index, calibrate, and recognize the aggressive NAP cleanups and authority building we implement.",
  },
  {
    question: "How is success measured?",
    answer: "Success is anchored directly on your core business metrics: rank positioning inside the local 3-Pack, growth in geo-targeted phone calls, direction clicks, and transparent form conversions. We review these metrics side-by-side with you on custom live reporting dashboards.",
  },
  {
    question: "Can you guarantee rankings?",
    answer: "No reputable agency can guarantee specific number-one slots due to real-time algorithm variance and competitive shifts. However, we guarantee strict execution of battle-tested signals and white-hat methodologies that have consistently produced double-to-triple-digit visibility lifts for over 600+ client networks.",
  },
];

const page = () => {
  return (
    <>
      <FaqAccordion FAQ_DATA={FAQ_DATA} /> 
    </>
  )
}

export default page
