"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Maya Patel",
    company: "RelayOps",
    quote:
      "TekDev shipped our internal platform in weeks, not months. Their code quality and delivery discipline gave us confidence immediately."
  },
  {
    name: "Daniel Kim",
    company: "FinTrack",
    quote:
      "We brought TekDev in for backend modernization and ended up with a stable platform we could scale without firefighting."
  },
  {
    name: "Alicia Gomez",
    company: "CareFlow",
    quote:
      "Communication was clear, timelines were realistic, and execution was senior-level from day one."
  }
];

export function TestimonialsSection() {
  return (
    <Section>
      <div className="flex flex-col gap-10 sm:gap-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Teams trust TekDev to deliver
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Our clients choose us for product thinking, technical depth, and
            predictable delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.05 * index, duration: 0.6 }}
              className="flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-white p-8 text-left transition hover:-translate-y-[4px] hover:shadow-lg"
            >
              <blockquote className="text-base leading-relaxed text-slate-600">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm text-slate-500">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p>{item.company}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

