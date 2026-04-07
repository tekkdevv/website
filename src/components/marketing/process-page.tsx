"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  MessageSquare, FileSearch, FileText, IndianRupee,
  Clock, Shield, Rocket, Sparkles, ChevronDown, Check, ArrowRight,
} from "lucide-react";
import { MarketingNavigation } from "@/components/marketing/navigation";
import { MarketingFooter } from "@/components/marketing/footer";
import { CosmicBackground } from "@/components/marketing/home-sections";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Share your idea",
    desc: "Send us a message, voice note, or rough doc — anything that gets the idea across. No lengthy forms, no jargon. We'll figure out the rest together.",
  },
  {
    icon: FileSearch,
    title: "We dig into requirements",
    desc: "We ask the right questions, map out what you need, and clarify what's in and out of scope. No vague estimates — just a clear picture before anything starts.",
  },
  {
    icon: FileText,
    title: "Everything locked in writing",
    desc: "Scope, features, timeline, and pricing are all confirmed in a written document before work begins. You sign off on the deliverables. No surprises, no disputes.",
  },
  {
    icon: IndianRupee,
    title: "Advance & kickoff",
    desc: "Work starts after the advance payment is settled. Once that's done, we move fast. Larger projects use milestone-based payments tied to delivery stages.",
  },
  {
    icon: Clock,
    title: "Build with regular check-ins",
    desc: "We share progress at every stage. You're never in the dark for weeks. If anything shifts on our end, you hear it from us first.",
  },
  {
    icon: Shield,
    title: "Changes get documented first",
    desc: "If you want something added mid-project, we document it, adjust the quote, and wait for your sign-off before building it. No scope creep, no bill shock.",
  },
  {
    icon: Rocket,
    title: "Clean delivery & handoff",
    desc: "We hand over everything — source code, credentials, documentation, and deployment. Domain setup to go-live, we handle it all cleanly.",
  },
  {
    icon: Sparkles,
    title: "Post-launch support included",
    desc: "We stay on for roughly 2 months after delivery. Any bugs, errors, or failures that come up are on us — fixed at no extra charge.",
  },
];

const faqItems = [
  {
    q: "Do you require documentation before starting a project?",
    a: "Yes — always. Before any work begins, we send you a project brief template covering scope, features, timeline, and pricing. You review it, we align on every deliverable, and both sides sign off in writing. This protects you and us both.",
  },
  {
    q: "What happens if I want to add something mid-project?",
    a: "Any change to the agreed scope gets documented first. We write up what's being added, how it affects the timeline, and the revised cost — then wait for your written sign-off before building it. No surprise charges, no scope creep.",
  },
  {
    q: "How does payment work?",
    a: "We take an advance payment to kick off work. For smaller projects (under ₹15,000), it's typically the full amount upfront. Larger projects are split into milestones tied to delivery stages — you pay as work gets done and reviewed.",
  },
  {
    q: "What's covered in post-launch support?",
    a: "After we deliver and you go live, we stay on for roughly 2 months. Any bugs, errors, crashes, or unexpected failures that show up are fixed at no extra charge. This doesn't cover new features — just fixing what we built.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Absolutely. If your project involves sensitive data, proprietary processes, or anything you want kept confidential, we sign an NDA before any details are shared. Just ask and we'll send one.",
  },
  {
    q: "What tech stack do you work with?",
    a: "Primarily Next.js, React, Node.js, TypeScript, and Tailwind for web. React Native or Flutter for mobile. Python for AI/ML. PostgreSQL or MongoDB for databases. We choose the stack that fits the project — not the one we're comfortable with by default.",
  },
  {
    q: "Can you take over a project someone else started?",
    a: "Yes. We regularly pick up codebases mid-stream — whether it's a freelancer handoff, an abandoned project, or a mess that needs untangling. We'll audit it first, document what we find, and give you an honest scope before touching anything.",
  },
  {
    q: "Do you offer maintenance after the support period?",
    a: "Yes. Once the 2-month free support window ends, we offer paid monthly maintenance plans starting from ₹2,000/month. Ongoing work outside that is billed by scope.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A landing page takes 2–4 days. A business website 5–10 days. A full-stack app with admin panel could be 15–35 days. We give you a timeline in the written agreement — and we stick to it.",
  },
  {
    q: "What if I only have a rough idea, no spec?",
    a: "That's fine — most clients start there. We'll have a discovery conversation, ask the right questions, and help you shape it into a concrete spec. The documentation step is part of our process, not your job to figure out alone.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="relative z-10 w-full py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass mb-5 inline-flex rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase"
          >
            FAQ
          </motion.span>
          <h2
            className="mt-5 text-4xl font-normal text-foreground sm:text-5xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Questions we <em className="not-italic text-muted-foreground">always get asked.</em>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Straight answers. No corporate speak.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-white/[0.05]">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="text-base font-medium text-foreground/85 sm:text-lg">{item.q}</span>
                <ChevronDown
                  className={`mt-1 h-4 w-4 shrink-0 text-white/30 transition-transform duration-300 ${open === i ? "rotate-180 text-white/60" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessPageContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative min-h-screen bg-[hsl(201,100%,8%)]">
      <CosmicBackground />
      <MarketingNavigation />

      <div className="relative z-10">
        {/* Hero */}
        <section className="pt-36 pb-16 sm:pt-44 sm:pb-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-12">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="liquid-glass mb-5 inline-flex rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase"
            >
              How It Works
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-5 max-w-3xl text-5xl font-normal leading-tight text-foreground sm:text-6xl md:text-7xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              How we work —{" "}
              <em className="not-italic text-muted-foreground">no surprises.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              Every project starts with documentation, ends with clean delivery, and comes with post-launch support. Here&apos;s exactly what to expect.
            </motion.p>

            {/* Quick guarantees */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {[
                "Written scope before work starts",
                "Changes require written sign-off",
                "Regular progress check-ins",
                "2 months free post-launch support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[12px] text-white/40">
                  <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400/60" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process timeline */}
        <section className="pb-24 sm:pb-32" ref={containerRef}>
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-12">
            {/* Mobile: vertical stack */}
            <div className="flex flex-col gap-6 sm:hidden">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="flex gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                    <step.icon className="h-4 w-4 text-foreground/60" />
                  </div>
                  <div>
                    <p className="mb-1 text-[10px] font-medium tracking-[0.18em] text-muted-foreground/50 uppercase">
                      Step {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mb-2 text-xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop: zigzag timeline */}
            <div className="relative hidden sm:block">
              <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-white/[0.06]" />
              <motion.div
                className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-foreground/40 via-foreground/20 to-transparent"
                style={{ height }}
              />
              <div className="flex flex-col gap-20 lg:gap-24">
                {processSteps.map((step, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div key={step.title} className={`relative flex items-center ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        className="absolute left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-white/[0.1] bg-[hsl(201,100%,8%)]"
                      >
                        <step.icon className="h-3.5 w-3.5 text-foreground/60" />
                      </motion.div>
                      <div className={`w-1/2 ${isEven ? "pr-16 text-right" : "pl-16 text-left"}`}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                          <p className="mb-2 text-[10px] font-medium tracking-[0.18em] text-muted-foreground/50 uppercase">
                            Step {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mb-4 text-2xl font-normal text-foreground md:text-3xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
                            {step.title}
                          </h3>
                          <p className="text-sm font-light leading-relaxed text-muted-foreground/80 md:text-base lg:text-lg">
                            {step.desc}
                          </p>
                        </motion.div>
                      </div>
                      <div className="w-1/2" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <FAQ />

        {/* CTA */}
        <section className="pb-24 sm:pb-40">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-12 sm:p-16"
            >
              <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-[80px]" />
              <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-indigo-500/10 blur-[80px]" />
              <div className="relative z-10">
                <h2 className="mb-4 text-4xl font-normal text-white sm:text-5xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  Ready to start?
                </h2>
                <p className="mb-8 text-sm leading-relaxed text-white/50 sm:text-base">
                  Tell us what you&apos;re building and we&apos;ll handle the rest — documentation, scope, quote, and delivery.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-95"
                >
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </div>
  );
}
