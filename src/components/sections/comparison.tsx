"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { motion } from "framer-motion";
import { CheckCircle2, MinusCircle } from "lucide-react";

const traditional = [
  "Slow matching and long back-and-forth.",
  "Endless bidding and proposal roulette.",
  "Hard to validate real seniority.",
  "Inconsistent quality and handoff.",
  "Little visibility once work starts."
];

const tekdev = [
  "Direct access to battle-tested experts.",
  "No bidding – scoped requests, clear pricing.",
  "Verified experience in your exact stack.",
  "Production-ready, review-friendly code every time.",
  "Live status tracking from request to delivery."
];

export function ComparisonSection() {
  return (
    <SectionContainer>
      <div className="grid gap-8 lg:grid-cols-[1.1fr,1.1fr]">
        <div className="mx-auto max-w-3xl text-center lg:col-span-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Why TekDev beats freelance roulette
          </h2>
          <p className="mt-4 text-base text-muted">
            Traditional platforms make you manage sourcing, vetting, and
            delivery. TekDev handles the entire pipeline so you can stay focused
            on the roadmap.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="soft-card p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Traditional platforms
            </p>
            <ul className="mt-3 space-y-2.5 text-sm text-muted">
              {traditional.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <MinusCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="soft-card p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              TekDev
            </p>
            <ul className="mt-3 space-y-2.5 text-sm text-foreground">
              {tekdev.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}

