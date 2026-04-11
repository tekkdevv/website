"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { motion } from "framer-motion";
import { ClipboardList, Users, Ship } from "lucide-react";

const steps = [
  {
    title: "Submit Your Request",
    description:
      "Share a short brief, repo link, and what “done” looks like in minutes.",
    icon: ClipboardList
  },
  {
    title: "We Match You With an Expert",
    description:
      "We route your request to a vetted specialist in your exact stack.",
    icon: Users
  },
  {
    title: "Receive Production-Ready Code",
    description:
      "Get clean, documented, and test-ready code shipped directly to your repo.",
    icon: Ship
  }
];

export function HowItWorksSection() {
  return (
    <SectionContainer id="how-it-works">
      <div className="flex flex-col gap-10 sm:gap-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            How TekkDevv works
          </h2>
          <p className="mt-4 text-base text-muted">
            A straight line from “problem found” to “code merged”. No endless
            calls. No proposal roulette.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="soft-card soft-card-hover group relative h-full p-6 text-left"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-md">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/40 transition group-hover:ring-primary/40" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}

