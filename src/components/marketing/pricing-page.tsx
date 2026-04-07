"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe, Code2, Rocket, Smartphone, Zap, Brain,
  Users, BarChart3, Wrench, Cpu, RefreshCw, Package,
  Check, ArrowRight, IndianRupee,
} from "lucide-react";
import { MarketingNavigation } from "@/components/marketing/navigation";
import { MarketingFooter } from "@/components/marketing/footer";
import { CosmicBackground } from "@/components/marketing/home-sections";

const pricingServices = [
  {
    title: "Websites & Landing Pages",
    description: "Responsive, SEO-ready websites — from a single landing page to a full multi-page business site.",
    icon: Globe,
    from: "₹5,000",
    timeline: "2–20 days",
    tags: ["Next.js", "React", "SEO"],
    features: [
      "Fully responsive across all devices",
      "SEO-optimised with fast load times",
      "Contact form + WhatsApp integration",
      "Free deployment to Vercel / Netlify",
    ],
  },
  {
    title: "Web Apps & Admin Panels",
    description: "Full-featured web applications with dashboards, authentication, databases, and role-based access.",
    icon: Code2,
    from: "₹8,000",
    timeline: "5–45 days",
    tags: ["Auth", "Database", "CRUD"],
    features: [
      "User authentication (email + social login)",
      "Admin dashboard with full CRUD",
      "Database design and schema setup",
      "REST API for all core features",
    ],
  },
  {
    title: "Full-Stack SaaS & Platforms",
    description: "End-to-end products — from MVP to scale-ready SaaS. Payments, multi-tenancy, APIs, CI/CD.",
    icon: Rocket,
    from: "₹18,000",
    timeline: "15–60+ days",
    tags: ["SaaS", "API", "Payments"],
    features: [
      "Auth + roles + billing integration",
      "Core feature set built to spec",
      "Admin panel + analytics dashboard",
      "Deployed with CI/CD pipeline",
    ],
  },
  {
    title: "Mobile Apps",
    description: "Android and cross-platform apps built with React Native. Play Store deployment + backend included.",
    icon: Smartphone,
    from: "₹25,000",
    timeline: "20–60+ days",
    tags: ["Android", "React Native", "Play Store"],
    features: [
      "4–6 core screens with polished UI",
      "User auth + local storage",
      "REST API backend included",
      "Google Play Store submission",
    ],
  },
  {
    title: "Chrome Extensions",
    description: "Custom browser extensions for productivity, AI, automation, or team tooling — including Web Store submission.",
    icon: Zap,
    from: "₹5,000",
    timeline: "2–30 days",
    tags: ["Manifest V3", "Content Scripts", "OAuth"],
    features: [
      "Manifest V3 compliant build",
      "Popup UI + background workers",
      "Chrome Web Store submission included",
      "Settings page + persistent storage",
    ],
  },
  {
    title: "AI / ML Projects",
    description: "Chatbots, RAG pipelines, LLM integrations — real AI that does something useful, not just a GPT wrapper.",
    icon: Brain,
    from: "₹8,000",
    timeline: "3–60+ days",
    tags: ["OpenAI", "Claude", "LangChain"],
    features: [
      "ChatGPT / Claude API integration",
      "Custom prompt engineering",
      "RAG pipeline with your data (if needed)",
      "Deployed and integrated into your app",
    ],
  },
  {
    title: "HRMS, Payroll & Portals",
    description: "Employee management, payroll with tax compliance, leave tracking, attendance — built to your workflow.",
    icon: Users,
    from: "₹25,000",
    timeline: "15–75 days",
    tags: ["Multi-role", "Payroll", "Reports"],
    features: [
      "Employee directory + leave management",
      "Attendance tracking + basic payroll",
      "Multi-role access (HR, admin, employee)",
      "PDF report generation",
    ],
  },
  {
    title: "Data Tracking & Analytics",
    description: "Custom dashboards, real-time analytics, data pipelines — unified visibility for your operations.",
    icon: BarChart3,
    from: "₹30,000",
    timeline: "12–40 days",
    tags: ["Dashboards", "Real-time", "Exports"],
    features: [
      "Custom dashboard with key metrics",
      "Data ingestion from your sources",
      "CSV / Excel export support",
      "Real-time updates + alerts",
    ],
  },
  {
    title: "Bug Fixing & Optimization",
    description: "We triage, fix, and optimize broken or slow codebases — and hand it back better than we found it.",
    icon: Wrench,
    from: "₹2,000",
    timeline: "1–10 days",
    tags: ["Debug", "Performance", "Refactor"],
    features: [
      "Root-cause analysis + documented fix",
      "Performance profiling included",
      "Regression test for the fix",
      "Written explanation of what changed",
    ],
  },
  {
    title: "API & Integrations",
    description: "Stripe, Razorpay, CRMs, AI APIs — connected cleanly into your existing or new stack.",
    icon: Cpu,
    from: "₹10,000",
    timeline: "5–20 days",
    tags: ["REST", "Webhooks", "Stripe"],
    features: [
      "Auth handled (OAuth, API keys, JWT)",
      "Error handling + retry logic",
      "Webhook listeners where needed",
      "Integration documentation included",
    ],
  },
  {
    title: "Migrations",
    description: "Moving platforms or modernising a legacy stack — clean, zero data loss, with post-migration support.",
    icon: RefreshCw,
    from: "₹10,000",
    timeline: "5–20 days",
    tags: ["WordPress", "Next.js", "DB Migration"],
    features: [
      "Full codebase + data audit first",
      "Zero data loss, verified post-migration",
      "SEO redirect map for site migrations",
      "2-week post-migration support",
    ],
  },
  {
    title: "Domain, Hosting & Deployment",
    description: "DNS, SSL, CI/CD, Vercel, AWS — we get your product live and keep it stable.",
    icon: Package,
    from: "₹2,000",
    timeline: "1–3 days",
    tags: ["Vercel", "AWS", "CI/CD"],
    features: [
      "Domain DNS + SSL configuration",
      "Hosting setup on Vercel, AWS, or your choice",
      "CI/CD pipeline for automatic deploys",
      "Environment variables + secrets managed",
    ],
  },
];

export function PricingPageContent() {
  return (
    <div className="relative min-h-screen bg-[hsl(201,100%,8%)]">
      <CosmicBackground />
      <MarketingNavigation />

      <div className="relative z-10">
        {/* Hero */}
        <section className="pt-36 pb-16 sm:pt-44 sm:pb-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="liquid-glass mb-5 inline-flex rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase sm:mb-6"
            >
              Pricing
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-5 max-w-3xl text-5xl font-normal leading-tight text-foreground sm:text-6xl md:text-7xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Transparent pricing.{" "}
              <em className="not-italic text-muted-foreground">No surprises.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              Every price below is a starting point. Final cost depends on scope, complexity, and timeline — all confirmed in writing before work begins.
            </motion.p>

            {/* Key guarantees */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {[
                "Written quote before any work starts",
                "Advance payment to kick off",
                "No hidden fees, no scope creep",
                "2 months post-launch support included",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[12px] text-white/40">
                  <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400/60" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing grid */}
        <section className="pb-24 sm:pb-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {pricingServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                  className="group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.025]"
                >
                  {/* Icon + price */}
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] transition-transform duration-500 group-hover:-translate-y-0.5">
                      <service.icon className="h-5 w-5 text-foreground/55 transition-colors group-hover:text-foreground/90" />
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-medium tracking-[0.15em] uppercase text-white/25">starting from</p>
                      <p className="font-mono text-base font-semibold text-white/80">{service.from}</p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-2 text-lg font-medium text-foreground/90 sm:text-xl"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground/70">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mb-5 flex flex-col gap-2 border-t border-white/[0.05] pt-4">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-[12px] leading-snug text-white/40">
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-400/60" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="mt-auto flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <span key={tag} className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-white/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="shrink-0 text-[10px] font-mono text-white/20">{service.timeline}</span>
                    </div>
                    <Link
                      href="/contact"
                      className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/[0.07] bg-white/[0.03] py-2.5 text-[12px] font-medium text-white/50 transition-all hover:border-white/[0.15] hover:bg-white/[0.07] hover:text-white/80"
                    >
                      Get a Quote <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom note + CTA */}
            <div className="mt-16 flex flex-col items-center gap-6 border-t border-white/[0.05] pt-16 text-center">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2">
                <IndianRupee className="h-3.5 w-3.5 text-white/30" />
                <p className="text-[11px] text-white/30">
                  All prices are starting points — final quote depends on scope, complexity, and timeline.
                </p>
              </div>
              <h2
                className="text-3xl font-normal text-foreground sm:text-4xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Not sure what you need?
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Send us a rough description of what you want to build. We&apos;ll figure out the right scope, give you a written quote, and you decide from there.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-95"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </div>
  );
}
