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
    description: "Responsive, search-engine-ready websites — from a single landing page to a full multi-page business site.",
    icon: Globe,
    accentColor: "#3b82f6",
    from: "₹5,000",
    timeline: "2–20 days",
    features: [
      "Fully responsive across all screen sizes",
      "Search-engine optimised with fast load times",
      "Contact form and WhatsApp chat integration",
      "Free deployment to Vercel or Netlify",
    ],
  },
  {
    title: "Web Applications and Admin Panels",
    description: "Full-featured web applications with dashboards, user login, databases, and role-based access control.",
    icon: Code2,
    accentColor: "#6366f1",
    from: "₹8,000",
    timeline: "5–45 days",
    features: [
      "User login with email and social sign-in",
      "Admin dashboard with full data management",
      "Database design and schema setup",
      "Web Application Programming Interface for all core features",
    ],
  },
  {
    title: "Full-Stack Software Platforms",
    description: "End-to-end products — from first working version to production-ready software platform. Payments, multi-tenancy, and automated deployment.",
    icon: Rocket,
    accentColor: "#8b5cf6",
    from: "₹18,000",
    timeline: "15–60+ days",
    features: [
      "Login system, user roles, and billing integration",
      "Core feature set built to your specification",
      "Admin panel and analytics dashboard",
      "Deployed with automated continuous deployment pipeline",
    ],
  },
  {
    title: "Mobile Applications",
    description: "Android and cross-platform apps built with React Native. Google Play Store deployment and backend server included.",
    icon: Smartphone,
    accentColor: "#a855f7",
    from: "₹25,000",
    timeline: "20–60+ days",
    features: [
      "Four to six core screens with polished user interface",
      "User login and local device storage",
      "Backend server and database included",
      "Google Play Store submission and listing",
    ],
  },
  {
    title: "Chrome Browser Extensions",
    description: "Custom browser extensions for productivity, artificial intelligence, automation, or team tooling — Chrome Web Store submission included.",
    icon: Zap,
    accentColor: "#06b6d4",
    from: "₹5,000",
    timeline: "2–30 days",
    features: [
      "Chrome Manifest Version 3 compliant build",
      "Popup user interface and background service workers",
      "Chrome Web Store submission and review handling",
      "Settings page and persistent local storage",
    ],
  },
  {
    title: "Artificial Intelligence and Machine Learning Projects",
    description: "Chatbots, data retrieval pipelines, large language model integrations — real artificial intelligence that does something useful, not just a wrapper.",
    icon: Brain,
    accentColor: "#10b981",
    from: "₹8,000",
    timeline: "3–60+ days",
    features: [
      "OpenAI ChatGPT or Anthropic Claude integration",
      "Custom prompt engineering and optimisation",
      "Retrieval-augmented generation pipeline with your data",
      "Deployed and integrated into your existing application",
    ],
  },
  {
    title: "HR Management Systems, Payroll, and Portals",
    description: "Employee management, payroll with tax compliance, leave tracking, and attendance — built exactly to your internal workflow.",
    icon: Users,
    accentColor: "#f59e0b",
    from: "₹25,000",
    timeline: "15–75 days",
    features: [
      "Employee directory and leave management",
      "Attendance tracking and basic payroll processing",
      "Multi-role access for HR managers, admins, and employees",
      "Printable and downloadable report generation",
    ],
  },
  {
    title: "Data Tracking and Analytics",
    description: "Custom dashboards, real-time analytics, data ingestion pipelines — unified visibility for your business operations.",
    icon: BarChart3,
    accentColor: "#f97316",
    from: "₹30,000",
    timeline: "12–40 days",
    features: [
      "Custom dashboard with your key performance metrics",
      "Data ingestion from your existing sources",
      "Comma-separated values and Excel export support",
      "Real-time live updates and alert notifications",
    ],
  },
  {
    title: "Bug Fixing and Performance Optimisation",
    description: "We triage, fix, and optimise broken or slow codebases — and hand it back in better shape than we found it.",
    icon: Wrench,
    accentColor: "#f43f5e",
    from: "₹2,000",
    timeline: "1–10 days",
    features: [
      "Root-cause analysis with a documented fix report",
      "Performance profiling and bottleneck identification",
      "Regression testing to verify the fix holds",
      "Written explanation of every change made",
    ],
  },
  {
    title: "Third-Party Connections and Integrations",
    description: "Stripe, Razorpay, customer management systems, artificial intelligence interfaces — connected cleanly into your existing or new stack.",
    icon: Cpu,
    accentColor: "#14b8a6",
    from: "₹10,000",
    timeline: "5–20 days",
    features: [
      "Authentication handled via standard protocols and key pairs",
      "Error handling and automatic retry logic",
      "Webhook listeners and event processing where needed",
      "Full integration documentation included",
    ],
  },
  {
    title: "Platform and Database Migrations",
    description: "Moving platforms or modernising a legacy technology stack — clean transition, zero data loss, with post-migration support included.",
    icon: RefreshCw,
    accentColor: "#0ea5e9",
    from: "₹10,000",
    timeline: "5–20 days",
    features: [
      "Full codebase and data audit before work begins",
      "Zero data loss — verified with checksums post-migration",
      "Search-engine redirect map for all moved pages",
      "Two-week post-migration support included",
    ],
  },
  {
    title: "Domain Setup, Hosting, and Deployment",
    description: "Name server configuration, security certificates, automated deployment pipelines, Vercel, Amazon Web Services — we get your product live and keep it stable.",
    icon: Package,
    accentColor: "#64748b",
    from: "₹2,000",
    timeline: "1–3 days",
    features: [
      "Domain name server and security certificate configuration",
      "Hosting setup on Vercel, Amazon Web Services, or your choice",
      "Automated deployment pipeline for every code push",
      "Environment variables and application secrets managed securely",
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
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pricingServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: "easeOut" }}
                  className="relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 transition-all duration-300 hover:bg-white/[0.03] group"
                >
                  {/* Colored top accent line */}
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{
                      background: `linear-gradient(90deg, ${service.accentColor}65, transparent)`,
                    }}
                  />

                  {/* Icon + price */}
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border"
                      style={{
                        backgroundColor: `${service.accentColor}14`,
                        borderColor: `${service.accentColor}28`,
                      }}
                    >
                      <service.icon
                        className="h-5 w-5"
                        style={{ color: `${service.accentColor}cc` }}
                      />
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-mono uppercase tracking-widest text-white/20">from</p>
                      <p className="font-mono text-base font-semibold text-white/75">{service.from}</p>
                      <p className="mt-0.5 font-mono text-[10px] text-white/20">{service.timeline}</p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-2 text-lg font-normal text-foreground sm:text-[1.2rem]"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-5 text-[13px] leading-relaxed text-muted-foreground/75">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mb-6 flex flex-col gap-2.5 flex-1">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-[12px] leading-snug text-white/45">
                        <div
                          className="mt-1.5 h-1 w-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: `${service.accentColor}70` }}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="mt-auto flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/[0.07] bg-white/[0.03] py-2.5 text-[12px] font-medium text-white/50 transition-all hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white/80"
                  >
                    Get a Quote <ArrowRight className="h-3 w-3" />
                  </Link>
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
