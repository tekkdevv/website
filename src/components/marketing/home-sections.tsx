"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, type MotionValue } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, FileSearch, MessageSquare, Rocket,
  Sparkles, Check, Globe, Brain, Smartphone, Users,
  ChevronLeft, ChevronRight, ExternalLink,
  FileText, Shield, Clock, ChevronDown, Zap, Code2,
  RefreshCw, Package, IndianRupee, BarChart3, Cpu, Wrench,
} from "lucide-react";
import { ScrollSplitText } from "@/components/marketing/scroll-split-text";
import { Magnetic } from "@/components/marketing/magnetic";

/* ─────────────── Cosmic Background ─────────────── */
// Static star positions — fixed at module level so they never re-render
const STARS = [
  { top: "8%",  left: "12%", opacity: 0.5 }, { top: "15%", left: "78%", opacity: 0.3 },
  { top: "22%", left: "45%", opacity: 0.4 }, { top: "31%", left: "91%", opacity: 0.2 },
  { top: "42%", left: "6%",  opacity: 0.5 }, { top: "55%", left: "33%", opacity: 0.3 },
  { top: "63%", left: "67%", opacity: 0.4 }, { top: "71%", left: "19%", opacity: 0.2 },
  { top: "79%", left: "84%", opacity: 0.5 }, { top: "87%", left: "52%", opacity: 0.3 },
  { top: "94%", left: "28%", opacity: 0.4 }, { top: "5%",  left: "60%", opacity: 0.2 },
];

export function CosmicBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#030208]">
      {/* Atmospheric top glow */}
      <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-blue-900/15 to-transparent opacity-50" />

      {/* Static nebula glows */}
      <div className="absolute -left-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-blue-600/18 blur-[140px] sm:h-[800px] sm:w-[800px]" />
      <div className="absolute right-[-5%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-indigo-500/12 blur-[160px] sm:h-[700px] sm:w-[700px]" />

      {/* Noise/Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* 12 static star points */}
      <div className="absolute inset-0 opacity-40">
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute h-px w-px rounded-full bg-white"
            style={{ top: s.top, left: s.left, opacity: s.opacity }}
          />
        ))}
      </div>
    </div>
  );
}


/* ─────────────── Trust Strip ─────────────── */
const trustItems = [
  { label: "Written Scope on Every Project", detail: "No work starts without sign-off" },
  { label: "Starting from ₹5,000", detail: "Transparent, no hidden fees" },
  { label: "2 Months Post-Launch Support", detail: "Free bug fixes after delivery" },
  { label: "Fast Turnaround", detail: "2 days to 60 days depending on scope" },
  { label: "No Outsourcing", detail: "Built in-house, start to finish" },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 border-y border-white/[0.05] bg-white/[0.01] py-5 sm:py-6">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-10">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex items-center gap-2.5"
            >
              <div className="h-1 w-1 rounded-full bg-emerald-400/50 shrink-0" />
              <div>
                <span className="text-[11px] font-medium text-white/55 sm:text-xs">{item.label}</span>
                <span className="ml-1.5 hidden text-[10px] text-white/20 sm:inline">— {item.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ─────────────── Our Story ─────────────── */
export function OurStory() {
  const storyBeats = [
    {
      label: "Where it started",
      text: "We started out doing freelance projects — writing clean code, shipping on time, building things that actually worked. But something kept nagging at us.",
    },
    {
      label: "The problem we saw",
      text: "Why do people wait weeks just to get a website built? And when it finally arrives, it's bloated, slow, or clearly AI-generated slop. The market had a gap — and we stepped into it.",
    },
    {
      label: "Why TekkDevv?",
      text: "We stopped freelancing and built a team that obsesses over craft. Fast means experienced — not careless. Every project we touch has to genuinely work for the user. That's the only bar we know.",
    },
  ];

  return (
    <section id="story" className="relative z-10 w-full overflow-hidden py-24 sm:py-40">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-800/8 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 sm:mb-24">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass mb-5 inline-flex rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase sm:mb-6"
          >
            Our Story
          </motion.span>
          <h2
            className="mt-5 max-w-3xl text-4xl font-normal leading-[1.05] text-foreground sm:text-5xl md:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            <ScrollSplitText text="From freelancers who got tired" delay={0} />{" "}
            <em className="not-italic text-muted-foreground inline-block">
              <ScrollSplitText text="of the wait." delay={0.4} />
            </em>
          </h2>
        </div>

        {/* Story beats grid */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {storyBeats.map((beat, i) => (
            <motion.div
              key={beat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 backdrop-blur-sm sm:rounded-[1.5rem] sm:p-8"
            >
              <p className="mb-3 text-[10px] font-medium tracking-[0.2em] text-muted-foreground/60 uppercase sm:mb-4 sm:text-xs">
                {beat.label}
              </p>
              <p className="text-base leading-relaxed text-foreground/75 sm:text-lg">
                {beat.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:mt-12 sm:rounded-[1.5rem] sm:p-10"
        >
          <p
            className="text-2xl font-normal leading-relaxed text-foreground sm:text-3xl md:text-4xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            &ldquo;Why wait days for a website?{" "}
            <span className="text-muted-foreground">
              Why settle for AI slop?
            </span>{" "}
            There&apos;s a better way — and that&apos;s exactly what we built TekkDevv to be.&rdquo;
          </p>
          <p className="mt-5 text-sm text-muted-foreground sm:mt-6 sm:text-base">— The TekkDevv Team</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── Projects ─────────────── */
const showcaseProjects = [
  {
    id: 1,
    title: "CyberSecurity Train",
    category: "Cybersecurity Learning Platform",
    description: "A full cybersecurity training platform built for aspiring professionals — structured courses, hands-on labs, and a clean modern interface that keeps learners engaged.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    result: "Live at cybersecuritytrain.com",
    url: "https://www.cybersecuritytrain.com/",
    image: "/images/project-cst.jpg",
  },
  {
    id: 2,
    title: "The Cyber Seal",
    category: "Cybersecurity Agency",
    description: "A sharp, authoritative web presence for a cybersecurity consultancy — built to convert trust into enquiries with a clean dark aesthetic and focused messaging.",
    tech: ["React", "Tailwind CSS", "Motion Design"],
    result: "Live at thecyberseal.com",
    url: "https://www.thecyberseal.com/",
    image: "/images/project-cyberseal.jpg",
  },
  {
    id: 3,
    title: "Fresh Coconuts",
    category: "Local Vendor Web Presence",
    description: "A clean, conversion-focused storefront for a small coconut vendor — farm-fresh branding, bulk order flow, and a warm design that turns visitors into customers.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    result: "Live at coconut-beta.vercel.app",
    url: "https://coconut-beta.vercel.app/",
    image: "/images/project-coconut.jpg",
  },
];

/* Mobile/tablet card — matches desktop visual language */
function ProjectCard({ project, index }: { project: typeof showcaseProjects[0]; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  const n = showcaseProjects.length;
  const domain = project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group block overflow-hidden rounded-none border border-white/[0.07] bg-[hsl(201,100%,4%)] shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset,0_20px_60px_rgba(0,0,0,0.5)]"
    >
      {/* Screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/30">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[hsl(201,100%,4%)] to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/15 pointer-events-none" />

        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center border border-white/[0.10] bg-black/55 px-2 py-1 font-mono text-[10px] font-medium text-white/45 backdrop-blur-md">
            {num}&thinsp;/&thinsp;{String(n).padStart(2, "0")}
          </span>
        </div>

        <div className="absolute right-4 top-4">
          <span className="inline-flex items-center gap-1.5 border border-emerald-500/[0.15] bg-black/55 px-2 py-1 text-[10px] font-medium text-emerald-400/55 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400/75" />
            Live
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 border-t border-white/[0.06] bg-white/[0.012] px-5 py-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
          <Globe className="h-4 w-4 text-white/40" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[15px] font-semibold leading-none text-white/88 tracking-tight truncate">
            {project.title}
          </p>
          <p className="mt-1.5 font-mono text-[11px] leading-none text-white/25 truncate">{domain}</p>
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 text-white/20 transition-all group-hover:translate-x-0.5 group-hover:text-white/50" />
      </div>

      <div className="px-5 pb-5 pt-3">
        <p className="text-[13px] leading-relaxed text-white/40 line-clamp-2">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="inline-flex items-center rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-white/30">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

/* ─────────────── 3D Sticky Stack Card ─────────────── */
export function CosmicProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  /* Added an extra 'n' to the scroll length to let the last card breathe and transition out */
  const n = showcaseProjects.length;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="work" className="relative z-10 w-full" ref={containerRef}>
      {/* Container height is now total projects + 1 extra 'page' for the intro and 1 for the exit */}
      <div className="relative" style={{ height: `${(n + 1.2) * 100}vh` }}>
        
        {/* Section Heading — stays sticky for the first 'scene' */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 lg:px-12 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-500 blur-[150px]" />
          </div>

          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.12], [1, 0]),
              y: useTransform(scrollYProgress, [0, 0.12], [0, -80]),
              scale: useTransform(scrollYProgress, [0, 0.12], [1, 0.9]),
            }}
            className="relative z-10 text-center max-w-4xl"
          >
            <span className="liquid-glass mb-8 inline-flex rounded-full px-5 py-2 text-[10px] font-medium tracking-[0.25em] text-foreground/70 uppercase">
              Our Work
            </span>
            <h2
              className="mb-8 text-5xl font-normal leading-[0.95] text-foreground sm:text-7xl md:text-8xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Work we&apos;ve<br />
              <em className="not-italic text-muted-foreground">shipped.</em>
            </h2>
            <p className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground/60 sm:text-lg">
              Real clients, real results. Scroll through what we&apos;ve built.
            </p>
            <div className="mt-12 flex flex-col items-center gap-4">
               <motion.span 
                 animate={{ opacity: [0.2, 0.5, 0.2] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="text-[10px] font-medium tracking-[0.5em] uppercase text-white/20"
               >
                 Scroll to Explore
               </motion.span>
               <motion.div 
                 animate={{ scaleY: [0.5, 1, 0.5], originY: 0 }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="h-12 w-[1px] bg-gradient-to-b from-white/20 to-transparent" 
               />
            </div>
          </motion.div>
        </div>

        {/* The Stacked Cards */}
        <div className="relative">
          {showcaseProjects.map((project, i) => {
            // Adjust start/end to account for the intro and exit padding
            const cardStart = (i + 1) / (n + 1.2);
            const cardEnd = (i + 2) / (n + 1.2);
            
            return (
              <StickyStackCard 
                key={project.id} 
                project={project} 
                index={i} 
                progress={scrollYProgress}
                customRange={[cardStart, cardEnd]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Redesigned StickyStackCard — full-bleed image, no browser chrome ─── */
function StickyStackCard({
  project,
  index,
  progress,
  customRange
}: {
  project: typeof showcaseProjects[number],
  index: number,
  progress: MotionValue<number>,
  customRange: [number, number]
}) {
  const [startAt, endAt] = customRange;
  const n = showcaseProjects.length;

  const y = useTransform(progress, [startAt - 0.1, startAt], ["100vh", "0vh"]);
  const scale = useTransform(progress, [endAt, endAt + 0.1], [1, 0.94]);
  const opacity = useTransform(progress, [endAt, endAt + 0.1], [1, 0]);
  const imgScale = useTransform(progress, [startAt, endAt], [1.07, 1.0]);

  const springConfig = { stiffness: 50, damping: 25, mass: 1 };
  const smoothY = useSpring(y, springConfig);
  const smoothScale = useSpring(scale, springConfig);
  const smoothOpacity = useSpring(opacity, springConfig);

  const num = String(index + 1).padStart(2, "0");
  const domain = project.url.replace(/^https?:\/\/(www\.)?/, "").split('/')[0];

  return (
    <motion.div
      style={{ y: smoothY, scale: smoothScale, opacity: smoothOpacity, zIndex: index + 10 }}
      className="sticky top-0 h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-12"
    >
      <div
        className="group relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/[0.08] bg-[#09090e] shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.025)_inset]"
        style={{ height: "clamp(460px, 74vh, 680px)" }}
      >
        <div className="flex h-full flex-col lg:flex-row">

          {/* ── Left: Content ── */}
          <div className="relative z-10 flex flex-col justify-between p-7 sm:p-10 lg:w-[44%] lg:p-14">

            {/* Counter + live badge */}
            <div>
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.22em] text-white/15">
                  {num}&thinsp;/&thinsp;{String(n).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400/50">Live</span>
                </div>
              </div>

              {/* Category pill */}
              <span className="mb-5 inline-flex rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
                {project.category}
              </span>

              {/* Title */}
              <h3
                className="mb-5 mt-4 text-3xl font-normal leading-tight text-white sm:text-4xl lg:text-[2.5rem] xl:text-5xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-7 max-w-sm text-sm leading-relaxed text-white/42 sm:text-[15px]">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-[11px] text-white/30 transition-colors hover:border-white/15 hover:text-white/55"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA row */}
            <div className="flex items-center gap-4 pt-8">
              <Magnetic>
                <Link
                  href={project.url}
                  target="_blank"
                  className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all hover:bg-white/90 active:scale-95"
                >
                  <div className="absolute -inset-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                  <span className="relative">Visit Live Site</span>
                  <ExternalLink className="relative h-3.5 w-3.5" />
                </Link>
              </Magnetic>
              <span className="max-w-[160px] truncate font-mono text-[10px] uppercase tracking-widest text-white/18">
                {domain}
              </span>
            </div>
          </div>

          {/* ── Right: Full-bleed screenshot — desktop only ── */}
          <div className="hidden lg:flex relative flex-1 overflow-hidden lg:border-l">
            {/* Left blend: content panel fades into image */}
            <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#09090e] to-transparent pointer-events-none" />
            {/* Top vignette */}
            <div className="absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-[#09090e] to-transparent pointer-events-none" />
            {/* Bottom vignette */}
            <div className="absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-[#09090e] to-transparent pointer-events-none" />
            {/* Right edge */}
            <div className="absolute inset-y-0 right-0 z-10 w-4 bg-gradient-to-l from-[#09090e] to-transparent pointer-events-none" />

            <motion.img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              style={{ scale: imgScale }}
              className="h-full w-full object-cover object-top"
            />
          </div>

        </div>
      </div>
    </motion.div>
  );
}


/* ─────────────── Services ─────────────── */
const agencyServices = [
  {
    title: "Websites & Landing Pages",
    description: "Responsive, fast, SEO-ready websites. From single landing pages to multi-page business sites — built with Next.js, React, or whatever your project needs.",
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
    description: "Full-featured web applications with dashboards, authentication, databases, and role-based access. Built to scale from day one.",
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
    description: "End-to-end products — from MVP to scale-ready SaaS. Payments, multi-tenancy, APIs, CI/CD, and everything in between.",
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
    description: "Android and cross-platform apps built with React Native. Play Store deployment, push notifications, and a backend that holds up.",
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
    description: "Custom browser extensions for productivity, automation, AI assistance, scraping, or team tooling. We handle everything including Chrome Web Store submission.",
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
    description: "Chatbots, RAG pipelines, LLM integrations, custom model workflows — real AI that does something useful, not just a GPT wrapper.",
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
    description: "Employee management systems, payroll with tax compliance, leave tracking, attendance, reporting — built to your exact internal workflow.",
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
    description: "Custom dashboards, real-time analytics, data ingestion pipelines, and reporting platforms — unified visibility for your operations.",
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
    description: "Inherited a broken codebase? We triage, fix, and optimize. Performance issues, crashes, tech debt — we'll hand it back better than we found it.",
    icon: Wrench,
    from: "₹2,000",
    timeline: "1–10 days",
    tags: ["Debug", "Performance", "Refactor"],
    features: [
      "Root-cause analysis + documented fix",
      "Performance profiling included",
      "Regression test for the fix",
      "Written explanation of what we changed",
    ],
  },
  {
    title: "API & Integrations",
    description: "Stripe, Razorpay, CRMs, third-party services, AI APIs — connected cleanly into your existing or new stack.",
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
    description: "Moving from WordPress to Next.js, legacy PHP to modern stack, or consolidating services — we've done it before. Clean, zero data loss.",
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
    description: "DNS setup, hosting config, SSL, CI/CD pipelines, Vercel, AWS — we get your product live and keep it running.",
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

export function CosmicServices() {
  return (
    <section id="services" className="relative z-10 w-full py-24 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <div className="mb-14 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass mb-5 inline-flex rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase sm:mb-6"
          >
            What We Build
          </motion.span>
          <h2
            className="mt-5 text-4xl font-normal leading-[1.0] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            <ScrollSplitText text="We make your" delay={0} />{" "}
            <em className="not-italic text-muted-foreground inline-block">
              <ScrollSplitText text="dream ideas real." delay={0.3} />
            </em>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base transform-gpu"
          >
            Full stack. AI. Mobile. Portals. Extensions. Even your domain setup — we cover it all.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {agencyServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
              className="group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 transition-colors duration-300 md:hover:border-white/[0.1] md:hover:bg-white/[0.025] transform-gpu will-change-[transform,opacity]"
            >
              {/* Icon + price row */}
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] transition-transform duration-500 md:group-hover:-translate-y-0.5 transform-gpu">
                  <service.icon className="h-5 w-5 text-foreground/55 transition-colors md:group-hover:text-foreground/90" />
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

              {/* What's included */}
              <ul className="mb-5 flex flex-col gap-2 border-t border-white/[0.05] pt-4">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-[12px] leading-snug text-white/40">
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-400/60" />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Footer: tags + timeline + CTA */}
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
                  href="/#contact"
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/[0.07] bg-white/[0.03] py-2.5 text-[12px] font-medium text-white/50 transition-colors active:bg-white/[0.05] md:hover:border-white/[0.15] md:hover:bg-white/[0.07] md:hover:text-white/80"
                >
                  Get a Quote <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 text-center text-xs text-white/20 transform-gpu"
        >
          All prices are starting points. Final quote depends on scope, complexity, and timeline. Every project gets a written estimate before work begins.
        </motion.p>
      </div>
    </section>
  );
}

/* ─────────────── Process ─────────────── */
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

export function CosmicProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative z-10 w-full py-24 sm:py-40" ref={containerRef}>
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-28"
        >
          <span className="liquid-glass mb-5 inline-flex rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase sm:mb-6">
            How It Works
          </span>
          <h2
            className="mt-5 text-4xl font-normal text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            How we work — <em className="not-italic text-muted-foreground">no surprises.</em>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Every project starts with documentation, ends with clean delivery, and comes with post-launch support. Here&apos;s exactly what to expect.
          </p>
        </motion.div>

        {/* Mobile: vertical stack */}
        <div className="flex flex-col gap-6 sm:hidden">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                <step.icon className="h-4 w-4 text-foreground/60" />
              </div>
              <div>
                <p className="mb-1 text-[10px] font-medium tracking-[0.18em] text-muted-foreground/50 uppercase">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className="mb-2 text-xl font-normal text-foreground"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
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
                      <h3
                        className="mb-4 text-2xl font-normal text-foreground group-hover:text-foreground/80 md:text-3xl"
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                      >
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
  );
}
/* ─────────────── FAQ ─────────────── */
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
    a: "Yes. Once the 2-month free support window ends, we offer paid monthly maintenance plans starting from ₹2,000/month. This covers updates, small changes, hosting issues, and general upkeep. Ongoing work outside that is billed by scope.",
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

export function CosmicFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative z-10 w-full py-24 sm:py-40">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <div className="mb-14 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass mb-5 inline-flex rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase sm:mb-6"
          >
            FAQ
          </motion.span>
          <h2
            className="mt-5 text-4xl font-normal leading-[1.0] text-foreground sm:text-5xl md:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Questions we <em className="not-italic text-muted-foreground">always get asked.</em>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
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
                <span className="text-base font-medium text-foreground/85 sm:text-lg">
                  {item.q}
                </span>
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
                    <p className="pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.a}
                    </p>
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

/* ─────────────── Testimonials ─────────────── */
const testimonials = [
  {
    quote: "TekkDevv stepped into a messy codebase, fixed the performance issues, and got our release back on track in days.",
    author: "Sarah Johnson",
    role: "Founder, HealthStack",
    avatar: "S"
  },
  {
    quote: "They felt like a true product partner, not just a dev shop. Clear communication, strong execution, and zero drama.",
    author: "Michael Chen",
    role: "COO, BrightFlow",
    avatar: "M"
  },
  {
    quote: "We hired TekkDevv for bug fixes and ended up trusting them with a full rebuild. The quality was consistently strong.",
    author: "Emily Rodriguez",
    role: "CTO, Northlane",
    avatar: "E"
  },
];

export function CosmicTestimonials() {
  return (
    <section className="relative z-10 w-full py-24 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="liquid-glass mb-5 inline-flex rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase"
          >
            Client Perspective
          </motion.span>
          <h2
            className="mt-5 text-4xl font-normal text-foreground sm:text-5xl md:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            What founders <em className="text-muted-foreground not-italic">say about us.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative rounded-[2rem] border border-white/[0.08] bg-white/[0.01] p-8 backdrop-blur-md transition-colors hover:bg-white/[0.03]"
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-[10px] font-bold text-white/40 border border-white/5">
                {t.avatar}
              </div>
              <p className="mb-8 text-lg font-light leading-relaxed text-white/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">{t.author}</span>
                <span className="text-xs text-white/30 uppercase tracking-widest mt-1 font-mono">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Home Services Teaser ─────────────── */
const homeServiceCards = [
  {
    icon: Globe,
    title: "Websites & Landing Pages",
    from: "₹5,000",
    tags: ["Next.js", "React", "Search Optimised"],
    desc: "Fast, responsive, search-engine-ready sites — from a single landing page to a full business website.",
    accentColor: "#3b82f6",
  },
  {
    icon: Code2,
    title: "Web Apps & Admin Panels",
    from: "₹8,000",
    tags: ["Login System", "Database", "Data Management"],
    desc: "Dashboards, portals, and full web apps with user authentication, roles, and database.",
    accentColor: "#6366f1",
  },
  {
    icon: Rocket,
    title: "Full-Stack Software Platforms",
    from: "₹18,000",
    tags: ["Software Platform", "Integrations", "Payments"],
    desc: "End-to-end products — first version to production-ready. Payments, multi-tenancy, automated deployment.",
    accentColor: "#8b5cf6",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    from: "₹25,000",
    tags: ["Android", "React Native", "Play Store"],
    desc: "Cross-platform apps with login, backend, push notifications, and Google Play Store deployment.",
    accentColor: "#a855f7",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence Projects",
    from: "₹8,000",
    tags: ["OpenAI", "Claude", "Retrieval Pipeline"],
    desc: "Real AI — chatbots, data retrieval pipelines, language model integrations. Not just a wrapper.",
    accentColor: "#10b981",
  },
  {
    icon: Zap,
    title: "Chrome Browser Extensions",
    from: "₹5,000",
    tags: ["Chrome Standard", "Content Scripts"],
    desc: "Productivity, automation, or AI browser tools — Chrome Web Store submission included.",
    accentColor: "#06b6d4",
  },
];

export function HomeServices() {
  return (
    <section id="services" className="relative z-10 w-full py-24 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <div className="mb-14 flex flex-col gap-4 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="liquid-glass mb-5 inline-flex rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase sm:mb-6"
            >
              What We Build
            </motion.span>
            <h2
              className="mt-5 text-4xl font-normal leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              <ScrollSplitText text="We make your" delay={0} />{" "}
              <em className="not-italic text-muted-foreground inline-block">
                <ScrollSplitText text="dream ideas real." delay={0.3} />
              </em>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="shrink-0"
          >
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm text-white/50 transition-all hover:border-white/[0.15] hover:text-white/80"
            >
              See all services and pricing <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Horizontal list layout */}
        <div className="rounded-2xl border border-white/[0.07] overflow-hidden">
          {homeServiceCards.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
              className="group relative flex items-center gap-4 sm:gap-6 border-b border-white/[0.05] last:border-0 bg-white/[0.01] px-5 sm:px-7 py-5 sm:py-6 transition-colors hover:bg-white/[0.03]"
            >
              {/* Left accent line on hover */}
              <div
                className="absolute left-0 top-0 h-full w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(180deg, ${service.accentColor}80, transparent)` }}
              />

              {/* Index */}
              <span className="shrink-0 hidden sm:block font-mono text-[11px] text-white/15 w-5 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:-translate-y-0.5"
                style={{
                  backgroundColor: `${service.accentColor}14`,
                  borderColor: `${service.accentColor}28`,
                }}
              >
                <service.icon
                  className="h-4 w-4"
                  style={{ color: `${service.accentColor}cc` }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors sm:text-base">
                  {service.title}
                </h3>
                <p className="mt-0.5 text-xs text-white/30 sm:text-[13px] line-clamp-1">{service.desc}</p>
                <div className="mt-2 hidden sm:flex gap-1.5 flex-wrap">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/[0.05] bg-white/[0.02] px-2.5 py-0.5 text-[10px] text-white/25">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price + CTA */}
              <div className="shrink-0 flex items-center gap-3 sm:gap-5">
                <div className="text-right hidden sm:block">
                  <p className="text-[9px] font-mono uppercase tracking-widest text-white/20">from</p>
                  <p className="font-mono text-sm font-semibold text-white/60">{service.from}</p>
                </div>
                <Link
                  href="/pricing"
                  className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs text-white/30 transition-all hover:border-white/[0.15] hover:bg-white/[0.04] hover:text-white/70 whitespace-nowrap"
                >
                  View pricing
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6"
        >
          <p className="text-xs text-white/20">
            Plus HR management portals, data analytics, third-party integrations, migrations, and deployment — all on the pricing page.
          </p>
          <Link
            href="/pricing"
            className="text-xs font-medium text-white/35 underline-offset-2 transition-colors hover:text-white/60 hover:underline"
          >
            View full pricing
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── Home Process Teaser ─────────────── */
const homeProcessHighlights = [
  {
    icon: FileText,
    step: "01",
    title: "Everything documented first",
    desc: "Scope, features, timeline, and price — all confirmed in writing before a single line of code. You sign off on the deliverables. No surprises.",
  },
  {
    icon: Clock,
    step: "02",
    title: "Regular check-ins, no ghosting",
    desc: "We share progress at every stage. If something changes on our end, you hear it first. Any scope additions need written sign-off before we build.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Clean delivery + 2 months support",
    desc: "We hand over everything cleanly — code, credentials, deployment. Then stay on for ~2 months fixing any bugs or errors at no extra charge.",
  },
];

export function HomeProcess() {
  return (
    <section id="process" className="relative z-10 w-full py-24 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <div className="mb-14 flex flex-col gap-4 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="liquid-glass mb-5 inline-flex rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase sm:mb-6"
            >
              How It Works
            </motion.span>
            <h2
              className="mt-5 text-4xl font-normal text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              How we work —{" "}
              <em className="not-italic text-muted-foreground">no surprises.</em>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="shrink-0"
          >
            <Link
              href="/process"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm text-white/50 transition-all hover:border-white/[0.15] hover:text-white/80"
            >
              Full process & FAQ <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {homeProcessHighlights.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.01] p-7"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                  <item.icon className="h-5 w-5 text-foreground/55" />
                </div>
                <span className="font-mono text-3xl font-light text-white/[0.06]">{item.step}</span>
              </div>
              <h3 className="mb-3 text-xl font-medium text-foreground/90" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {item.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <Link
            href="/process"
            className="text-sm text-white/30 underline-offset-2 transition-colors hover:text-white/60 hover:underline"
          >
            See all 8 steps + full FAQ →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── CTA ─────────────── */
export function CosmicCTA() {
  return (
    <section className="relative z-10 w-full py-24 sm:py-40">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[3rem] border border-white/[0.1] bg-gradient-to-br from-white/[0.05] to-transparent p-12 text-center sm:p-20"
        >
          {/* Background effects */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-[100px]" />

          <div className="relative z-10">
            <h2
              className="mb-8 text-5xl font-normal leading-tight text-white sm:text-7xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Let&apos;s <em className="text-muted-foreground not-italic">build it.</em>
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-lg text-white/50 leading-relaxed">
              Tell us what you need. We&apos;ll scope it, document it, and ship it — without the wait.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95"
              >
                Start a Project <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#work"
                className="text-sm font-medium text-white/40 transition-colors hover:text-white"
              >
                View our selected work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
