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
  ArrowUpRight,
} from "lucide-react";
import { MarketingNavigation } from "@/components/marketing/navigation";
import { MarketingFooter } from "@/components/marketing/footer";
import { CosmicBackground } from "@/components/marketing/home-sections";

const services = [
  {
    icon: Globe,
    accentColor: "#3b82f6",
    from: "₹5,000",
    timeline: "2–20 days",
    title: "Full Stack Web Applications",
    hook: "Need a site or app that actually works and brings in business — not just looks the part?",
    description:
      "From landing pages to complex software platforms — built on Next.js, React, and TypeScript. We architect for performance, scalability, and long-term maintainability from day one.",
    specifics: [
      "Custom web applications and portals",
      "Admin dashboards and control panels",
      "Software platforms with billing and teams",
      "Landing pages and marketing websites",
    ],
  },
  {
    icon: Brain,
    accentColor: "#8b5cf6",
    from: "₹8,000",
    timeline: "3–60+ days",
    title: "Artificial Intelligence and Machine Learning",
    hook: "Want to actually use AI in your product — not just slap a chatbot on top of it?",
    description:
      "Custom models, large language model integrations, and intelligent features that go beyond surface-level chatbot wrappers. We build artificial intelligence that actually does something useful in your product.",
    specifics: [
      "Large language model-powered product features",
      "Custom machine learning model development",
      "AI chatbots and intelligent assistants",
      "Data retrieval pipelines and processing",
    ],
  },
  {
    icon: Smartphone,
    accentColor: "#10b981",
    from: "₹25,000",
    timeline: "20–60+ days",
    title: "Android Mobile Applications",
    hook: "Your customers are on their phones. Your business should be there too.",
    description:
      "Native and cross-platform mobile apps that feel like they belong on the device. From Google Play Store submission to ongoing performance optimisation — we handle it all.",
    specifics: [
      "Native Android application development",
      "React Native cross-platform builds",
      "Google Play Store deployment and listing",
      "Performance optimisation and updates",
    ],
  },
  {
    icon: Users,
    accentColor: "#f59e0b",
    from: "₹25,000",
    timeline: "15–75 days",
    title: "HR Management Systems and Internal Portals",
    hook: "Still managing payroll, leaves, and attendance on Excel and WhatsApp groups? Let's end that.",
    description:
      "Internal tools that actually work. We build human resource management systems and employee portals that scale with your team, with proper access control and clean audit trails.",
    specifics: [
      "Human resource management systems",
      "Employee self-service portals",
      "Payroll processing and attendance tracking",
      "Role-based access control and audit logs",
    ],
  },
  {
    icon: Chrome,
    accentColor: "#06b6d4",
    from: "₹5,000",
    timeline: "2–30 days",
    title: "Google Chrome Browser Extensions",
    hook: "Got a repetitive task you do in your browser every day? We can automate it.",
    description:
      "Browser tools that fit seamlessly into daily workflows. Whether it is productivity automation, intelligent web assistance, or data capture — we ship extensions that people actually keep installed.",
    specifics: [
      "Productivity and workflow automation tools",
      "Web scraping and data capture extensions",
      "Artificial intelligence-powered browser assistants",
      "Tab management and session tools",
    ],
  },
  {
    icon: Wrench,
    accentColor: "#f43f5e",
    from: "₹2,000",
    timeline: "1–10 days",
    title: "Bug Fixing and Performance Optimisation",
    hook: "Inherited a broken app or hit a wall with your own code? Send it over — we'll fix it.",
    description:
      "Struggling with a codebase that someone else left behind? We triage, fix, and optimise. Slower load times, mysterious crashes, and years of accumulated technical debt — all fair game.",
    specifics: [
      "Bug triage, root cause analysis, and documented fixes",
      "Performance profiling and load time audits",
      "Code refactoring and technical debt reduction",
      "Regression testing after every fix",
    ],
  },
  {
    icon: Server,
    accentColor: "#64748b",
    from: "₹2,000",
    timeline: "1–3 days",
    title: "Domain Setup, Hosting, and Deployment",
    hook: "Built something but have no idea how to get it live and keep it running? We've got it.",
    description:
      "Everything from domain name server setup to production deployment pipelines. We get your project live securely and reliably, and make sure it stays that way with proper security certificates and monitoring.",
    specifics: [
      "Domain purchase and name server configuration",
      "Hosting setup on Vercel, Amazon Web Services, or your choice",
      "Automated deployment pipelines for every push",
      "Security certificate and environment secrets management",
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
              Whatever you are building — web, mobile, artificial intelligence, internal tools —
              we have done it. We take on projects of any size without bias.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                  className="relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015] p-7 transition-all duration-300 hover:bg-white/[0.025] group"
                >
                  {/* Colored top accent line */}
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{
                      background: `linear-gradient(90deg, ${service.accentColor}70, transparent)`,
                    }}
                  />

                  {/* Icon + pricing header */}
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl border"
                      style={{
                        backgroundColor: `${service.accentColor}15`,
                        borderColor: `${service.accentColor}30`,
                      }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{ color: `${service.accentColor}cc` }}
                      />
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-mono uppercase tracking-widest text-white/20">
                        starting from
                      </p>
                      <p className="font-mono text-lg font-semibold text-white/75">
                        {service.from}
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] text-white/20">
                        {service.timeline}
                      </p>
                    </div>
                  </div>

                  <h2
                    className="mb-2 text-xl font-normal text-foreground sm:text-2xl"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {service.title}
                  </h2>

                  {/* Hook — client pain point */}
                  <p
                    className="mb-4 text-[12px] font-medium italic leading-snug"
                    style={{ color: `${service.accentColor}99` }}
                  >
                    {service.hook}
                  </p>

                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mb-7 space-y-2.5">
                    {service.specifics.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-[13px] text-foreground/55"
                      >
                        <div
                          className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: `${service.accentColor}70` }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm transition-colors group-hover:opacity-90"
                    style={{ color: `${service.accentColor}aa` }}
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
              Describe your problem and we will figure it out together.
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
