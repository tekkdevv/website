"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Code2, Scale, ArrowUpRight } from "lucide-react";
import { MarketingNavigation } from "@/components/marketing/navigation";
import { MarketingFooter } from "@/components/marketing/footer";
import { CosmicBackground } from "@/components/marketing/home-sections";

const storyBeats = [
  {
    label: "Where we started",
    heading: "Freelancers who were good at what they did.",
    body: "TekDev started as a small group of independent developers building things for clients. The work was going well — clients were happy, projects shipped, and quality was solid. But we kept hitting the same ceiling: we could only reach so many people. Every inquiry that came in while we were heads-down on something else was a missed opportunity. There had to be a better way to scale without losing the craft.",
  },
  {
    label: "What we saw",
    heading: "The industry had a quality problem.",
    body: "As we looked around, we kept seeing the same pattern. Agencies charging premium rates for websites built entirely by AI generators. Projects that looked functional in the demo but fell apart under real use. Clients burned by slow agencies that took weeks to respond. The space was full of AI slop dressed up as deliverables. Quality was being sacrificed at the altar of speed — and worse, neither speed nor quality was actually being delivered.",
  },
  {
    label: "What we built",
    heading: "An agency built on a different obsession.",
    body: "TekDev became the answer to that gap. We built the agency around one core obsession: the balance between speed and craft. Fast, because we are experienced — not because we cut corners or outsource to tools that don't care about the outcome. Every line of code is written with intent. Every design decision is made with the user in mind. We don't ship until we're proud of it, and we don't stop until you are too.",
  },
  {
    label: "Our standard",
    heading: "Fast because we've done it before.",
    body: "Speed at TekDev comes from experience, not shortcuts. We've built enough applications across enough domains to move quickly without compromising. We know the patterns, we anticipate the edge cases, and we execute with precision. The work is only done when the user is satisfied — not when the invoice is sent, not when the deadline passes, but when the thing actually works the way it should.",
  },
];

const values = [
  {
    icon: Zap,
    title: "Speed without shortcuts",
    description:
      "We move fast because we've built this before — not because we're cutting corners. Experience is the engine, not recklessness.",
  },
  {
    icon: Code2,
    title: "No AI slop",
    description:
      "Every deliverable is the result of real craft, real thought, and real code. We use tools where they help, not as a substitute for thinking.",
  },
  {
    icon: Scale,
    title: "Any scale, no bias",
    description:
      "A local vendor site gets the same care as an enterprise platform. The size of the budget doesn't dictate the quality of the work.",
  },
];

export function AboutPageContent() {
  return (
    <div className="relative min-h-screen bg-[hsl(201,100%,8%)]">
      <CosmicBackground />
      <MarketingNavigation />

      {/* Hero */}
      <section className="relative z-10 pt-40 pb-20 sm:pt-48 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="liquid-glass inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-foreground/80 mb-6">
              Our Story
            </span>
            <h1
              className="text-4xl font-normal text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              We got tired{" "}
              <span className="text-foreground/50">of the wait.</span>
            </h1>
            <p
              className="mt-4 text-xl text-foreground/40 sm:text-2xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              So we built something better.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Beats */}
      <section className="relative z-10 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-px">
            {storyBeats.map((beat, i) => (
              <motion.div
                key={beat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 sm:p-10 mb-4"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {beat.label}
                </p>
                <h2
                  className="mb-4 text-2xl font-normal text-foreground sm:text-3xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {beat.heading}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base max-w-3xl">
                  {beat.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 border-t border-white/[0.06] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <span className="liquid-glass inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-foreground/80 mb-5">
              What We Believe
            </span>
            <h2
              className="text-3xl font-normal text-foreground sm:text-4xl md:text-5xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Three things we never compromise on.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-foreground/70" />
                  </div>
                  <h3
                    className="mb-3 text-xl font-normal text-foreground"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 border-t border-white/[0.06] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-3xl font-normal text-foreground sm:text-4xl md:text-5xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Want to work with us?
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Tell us what you&apos;re building and we&apos;ll show you how fast
              it can happen.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="liquid-glass inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm text-foreground transition-transform hover:scale-[1.03]"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
