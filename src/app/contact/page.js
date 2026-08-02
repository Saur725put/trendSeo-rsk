import ContactForm from '@/components/Contact/ContactForm'
import ContactHeader from '@/components/Contact/ContactHeader'
import ContactMap from '@/components/Contact/ContactMap'
import FaqAccordion from '@/components/FaqAccordion/FaqAccordion';
import React from 'react'

const CONTACT_FAQ = [
  {
    question: "Is there a fee for the initial strategy consultation?",
    answer: "No, your initial discovery call is completely complimentary. We use this brief session to review your core business goals, inspect your digital roadblocks, and mutually evaluate if sparrowLingo is the right operational fit for your brand.",
  },
  {
    question: "How quickly can we kick off a project after signing?",
    answer: "Once a proposal is approved and contracts are secure, onboarding typically begins within 5 business days. This begins with a deep-dive structural setup phase, platform access synchronization, and your official campaign alignment meeting.",
  },
  {
    question: "Do you require long-term contract lock-ins?",
    answer: "We work on highly transparent, milestone-oriented retainer models. While sustainable search engine optimization naturally requires an iterative window of 3 to 6 months to mature, we keep our terms direct and partner-friendly to match your brand's operational flexibility.",
  },
  {
    question: "What do I need to prepare for our discovery call?",
    answer: "You only need to bring a clear view of your primary business goals, your current core challenges, and access to any existing growth metrics you'd like to share. We will handle all the preliminary competitor and search analysis on our side ahead of the call.",
  },
  {
    question: "Who will be my primary point of contact during the campaign?",
    answer: "You will be matched with a dedicated Growth Marketing Strategist who acts as your direct operational bridge. They orchestrate our internal SEO engineers and copywriters to ensure your deliverables are executed flawlessly and on schedule.",
  },
  {
    question: "Can we book a consultation if we are a small business or startup?",
    answer: "Definitely. We love working with forward-thinking founders and scaling teams. As long as your business is ready to invest in serious, long-term digital growth channels, our strategies can be tailored to match your precise developmental stage.",
  },
];

const page = () => {
  return (
    <>
     <ContactHeader />
     <ContactForm />
     <ContactMap />
     <FaqAccordion FAQ_DATA={CONTACT_FAQ} />
    </>
  )
}

export default page
