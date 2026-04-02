"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Brain,
  Smartphone,
  Users,
  Chrome,
  Wrench,
  Server,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { MarketingNavigation } from "@/components/marketing/navigation";
import { MarketingFooter } from "@/components/marketing/footer";
import { CosmicBackground } from "@/components/marketing/home-sections";

const services = [
  {
    icon: Globe,
    title: "Full Stack Web Apps",
    description:
      "From landing pages to complex SaaS — built on Next.js, React, and TypeScript. We architect for performance, scalability, and long-term maintainability from day one.",
    specifics: [
      "Custom web applications",
      "Admin dashboards",
      "SaaS platforms",
      "Landing pages & marketing sites",
    ],
  },
  {
    icon: Brain,
    title: "AI / ML Projects",
    description:
      "Custom models, LLM integrations, and intelligent features that go beyond surface-level chatbot wrappers. We build AI that actually does something useful in your product.",
    specifics: [
      "LLM-powered features",
      "Custom ML models",
      "AI chatbots & assistants",
      "Data pipelines",
    ],
  },
  {
    icon: Smartphone,
    title: "Android Applications",
    description:
      "Native and cross-platform mobile apps that feel like they belong on the device. From Play Store submission to ongoing performance optimisation — we handle it all.",
    specifics: [
      "Native Android apps",
      "React Native cross-platform",
      "Play Store deployment",
      "Performance optimization",
    ],
  },
  {
    icon: Users,
    title: "HRMS & Portals",
    description:
      "Internal tools that actually work. We build HR management systems and employee portals that scale with your team, with proper access control and clean audit trails.",
    specifics: [
      "HR management systems",
      "Employee portals",
      "Payroll & attendance",
      "Role-based access control",
    ],
  },
  {
    icon: Chrome,
    title: "Chrome Extensions",
    description:
      "Browser tools that fit seamlessly into daily workflows. Whether it's productivity automation, intelligent web assistance, or data capture — we ship extensions that people actually keep.",
    specifics: [
      "Productivity tools",
      "Web scrapers",
      "AI-powered assistants",
      "Tab & session managers",
    ],
  },
  {
    icon: Wrench,
    title: "Bug Fixing & Optimization",
    description:
      "Struggling with a codebase that someone else left behind? We triage, fix, and optimise. Slower loads, mysterious crashes, and years of tech debt — all fair game.",
    specifics: [
      "Bug triage & fixes",
      "Performance audits",
      "Code refactoring",
      "Load time optimization",
    ],
  },
  {
    icon: Server,
    title: "Domain & Deployment",
    description:
      "Everything from DNS setup to production CI/CD. We get your project live securely and reliably, and make sure it stays that way with proper SSL and monitoring in place.",
    specifics: [
      "Domain purchase & DNS setup",
      "Hosting configuration",
      "CI/CD pipelines",
      "SSL & security setup",
    ],
  },
];

export function ServicesPageContent() {
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
              What We Build
            </span>
            <h1
              className="text-4xl font-normal text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              The full stack{" "}
              <span className="text-foreground/50">of what we do.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Whatever you&apos;re building — web, mobile, AI, internal tools —
              we&apos;ve done it. We take on projects of any size without bias.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-foreground/70" />
                  </div>
                  <h2
                    className="mb-3 text-xl font-normal text-foreground sm:text-2xl"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {service.title}
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {service.description}
                  </p>
                  <ul className="mb-6 space-y-2">
                    {service.specifics.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-foreground/60"
                      >
                        <Check className="h-3.5 w-3.5 flex-shrink-0 text-foreground/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm text-foreground/60 transition-colors hover:text-foreground"
                  >
                    Start a Project
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
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
              Not sure which service you need?
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Describe your problem and we&apos;ll figure it out together.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="liquid-glass inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm text-foreground transition-transform hover:scale-[1.03]"
              >
                Get a Quote
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
