"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How fast can my request start?",
    answer:
      "Most requests are acknowledged within a few business hours and picked up within 1 business day, depending on scope and stack."
  },
  {
    question: "What technologies do you support?",
    answer:
      "We focus on modern web stacks – React, Next.js, Node.js, TypeScript, Python, Java, Flutter, AWS, and more. Share your stack and we’ll match accordingly."
  },
  {
    question: "How do I track my project?",
    answer:
      "Every request comes with a live status timeline, activity log, and clear milestones so you always know what’s happening."
  },
  {
    question: "Do I need to create an account?",
    answer:
      "Not to get started. Submit a request, and we’ll handle onboarding if it’s a fit for both sides."
  }
];

export function FAQSection() {
  return (
    <SectionContainer>
      <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Questions, answered
          </h2>
          <p className="mt-4 text-base text-muted">
            The short version: we work like an extension of your senior
            engineering team, not another generic marketplace.
          </p>
        </div>
        <div className="space-y-3.5">
          {faqs.map((faq, index) => (
            <motion.details
              key={faq.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.05 * index, duration: 0.4 }}
              className="soft-card soft-card-hover group p-4 text-left"
            >
              <summary className="cursor-pointer list-none text-sm font-medium text-foreground">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

