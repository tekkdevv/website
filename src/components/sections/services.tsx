"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { motion } from "framer-motion";
import {
  Bug,
  Puzzle,
  Gauge,
  Box,
  Braces,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Bug Fix & Debugging",
    description:
      "Unblock your team fast with targeted fixes, clear root-cause notes, and regression-safe changes.",
    icon: Bug
  },
  {
    title: "Feature Development",
    description:
      "Ship scoped features that plug cleanly into your existing architecture and conventions.",
    icon: Puzzle
  },
  {
    title: "Code Optimization",
    description:
      "Improve performance, reliability, and readability without changing your product behavior.",
    icon: Gauge
  },
  {
    title: "Full Project Development",
    description:
      "Spin up greenfield builds with a modern stack, opinionated patterns, and real-world DX.",
    icon: Box
  },
  {
    title: "Code Review & Architecture",
    description:
      "Get deep dives on critical paths, architecture decisions, and scaling plans.",
    icon: Braces
  }
];

export function ServicesSection() {
  return (
    <SectionContainer id="services">
      <div className="flex flex-col gap-10 sm:gap-12">
        <div className="mx-auto max-w-3xl text-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              Services built for shipping
            </h2>
            <p className="mt-4 text-base text-muted">
              From “quick fix” to “greenfield build”, TekDev slots into your
              existing stack with senior-level execution.
            </p>
          </div>
          <p className="mt-4 text-sm text-muted">
            All work is production-ready, documented, and merge-friendly by
            default.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.05 * index, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="soft-card soft-card-hover group relative flex h-full flex-col p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted transition group-hover:text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}

