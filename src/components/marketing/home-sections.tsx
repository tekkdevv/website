"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, FileSearch, MessageSquare, Rocket,
  Sparkles, Check, Globe, Brain, Smartphone, Users,
  ChevronLeft, ChevronRight,
} from "lucide-react";

/* ─────────────── Cosmic Background ─────────────── */
export function CosmicBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[hsl(201,100%,8%)]">
      <div className="absolute -left-[20%] top-[30%] h-[600px] w-[600px] rounded-full bg-blue-900/20 blur-[200px] sm:h-[800px] sm:w-[800px]" />
      <div className="absolute right-[-10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-indigo-900/15 blur-[180px] sm:h-[600px] sm:w-[600px]" />
    </div>
  );
}

/* ─────────────── Animated Number ─────────────── */
function AnimatedNumber({ value }: { value: string }) {
  const numericMatch = value.match(/\d+/);
  const numericPart = numericMatch ? parseInt(numericMatch[0]) : 0;
  const suffix = value.replace(numericPart.toString(), "");
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const end = numericPart;
        const duration = 2000;
        const startTime = performance.now();
        const update = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setCount(Math.floor(end * easeOut));
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericPart]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─────────────── Stats ─────────────── */
const homeStats = [
  { value: "50+", label: "Projects Delivered", description: "Successfully shipped across multiple industries." },
  { value: "8x", label: "Faster Delivery", description: "Lean execution without the agency bloat." },
  { value: "24/7", label: "Reliable Support", description: "A technical partner you can actually reach." },
];

export function CosmicStats() {
  return (
    <section className="relative z-10 w-full py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-0 divide-y divide-white/[0.06] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {homeStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className={`flex flex-col items-center py-10 text-center sm:items-start sm:text-left ${i > 0 ? "sm:pl-12" : ""}`}
            >
              <div
                className="mb-3 text-5xl font-normal tracking-tight text-foreground sm:text-6xl md:text-7xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="mb-1.5 text-base font-medium text-foreground/80 sm:text-lg">{stat.label}</div>
              <p className="max-w-[240px] text-sm leading-relaxed text-muted-foreground sm:max-w-[260px] sm:text-base">
                {stat.description}
              </p>
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
      text: "We started out doing freelance projects — writing clean code, shipping on time, building things that actually worked. It was going well. But something kept nagging at us.",
    },
    {
      label: "The problem we saw",
      text: "Why do people wait days — sometimes weeks — just to get a website or an app built? And when it finally arrives, it's either bloated, slow, or clearly AI-generated slop with no soul. The market had a gap.",
    },
    {
      label: "What we decided",
      text: "We wanted to reach more people. Not just the ones who found us by luck, but anyone who had a real idea and needed a real team. So we stopped freelancing and started TekDev — built around one obsession: finding the right balance between speed and craft.",
    },
    {
      label: "Our standard",
      text: "Fast doesn't mean careless. We move fast because we're experienced — not because we're cutting corners. Every project we touch has to genuinely satisfy the user. That's the only bar we hold ourselves to.",
    },
  ];

  return (
    <section id="story" className="relative z-10 w-full overflow-hidden py-24 sm:py-40">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-800/8 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <span className="liquid-glass mb-5 inline-flex rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase sm:mb-6">
            Our Story
          </span>
          <h2
            className="mt-5 max-w-3xl text-4xl font-normal leading-[1.05] text-foreground sm:text-5xl md:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            From freelancers <em className="not-italic text-muted-foreground">who got tired</em> of the wait.
          </h2>
        </motion.div>

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
            There&apos;s a better way — and that&apos;s exactly what we built TekDev to be.&rdquo;
          </p>
          <p className="mt-5 text-sm text-muted-foreground sm:mt-6 sm:text-base">— The TekDev Team</p>
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
];

/* Mobile card — simple, clean */
function ProjectCard({ project }: { project: typeof showcaseProjects[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-black/20">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>
      {/* Content */}
      <div className="p-6 sm:p-8">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3
              className="text-2xl font-normal text-foreground sm:text-3xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {project.title}
            </h3>
            <p className="mt-1 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              {project.category}
            </p>
          </div>
          <span className="liquid-glass shrink-0 rounded-full px-3 py-1.5 text-[9px] font-medium tracking-wider text-foreground/70 uppercase">
            Live Project
          </span>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-foreground/65 sm:text-base">{project.description}</p>
        <div className="mb-5 border-l border-white/[0.08] pl-4">
          <p className="text-xs font-medium text-foreground/70 uppercase tracking-wide">
            <span className="font-normal normal-case text-muted-foreground">{project.result}</span>
          </p>
          <div className="mt-2 flex flex-wrap gap-2 text-[10px] text-muted-foreground/50">
            {project.tech.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          <span className="relative">
            Visit Live Site
            <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-foreground transition-all group-hover:w-full" />
          </span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

/* Desktop sticky scroll — only rendered on md+ */
function ProjectsDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "300vh" }}>
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden py-24">
        {/* Header */}
        <div className="pointer-events-none absolute left-0 right-0 top-24 z-20 px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="mb-4 inline-block text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Selected Work
              </span>
              <h2
                className="text-4xl font-normal leading-[1.15] text-foreground lg:text-5xl xl:text-6xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Sleek engineering.<br />
                <span className="text-muted-foreground">Premium execution.</span>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Stacked cards */}
        <div className="relative mt-32 flex h-[65vh] w-full max-w-6xl items-center justify-center">
          {showcaseProjects.map((project, i) => {
            const targetScale = 1 - (showcaseProjects.length - i) * 0.05;
            const scale = useTransform(scrollYProgress, [i * 0.5, 1], [1, targetScale]);
            const y = useTransform(scrollYProgress, [i * 0.5 - 0.5, i * 0.5], [i === 0 ? 0 : 800, 0]);
            const rotateX = useTransform(scrollYProgress, [i * 0.5 - 0.5, i * 0.5], [45, 0]);
            const opacity = useTransform(scrollYProgress, [i * 0.5 - 0.1, i * 0.5], [0, 1]);

            return (
              <motion.div
                key={project.id}
                className="absolute top-0 flex h-full w-full origin-top items-center justify-center px-6 lg:px-12"
                style={{ y: i === 0 ? 0 : y, scale, rotateX: i === 0 ? 0 : rotateX, opacity: i === 0 ? 1 : opacity }}
              >
                <div className="relative flex h-full max-h-[560px] w-full flex-row overflow-hidden rounded-[2rem] border border-white/[0.06] bg-black/40 backdrop-blur-2xl">
                  <div className="relative z-10 flex w-1/2 flex-col justify-center p-10 xl:p-16">
                    <span className="liquid-glass mb-6 inline-flex w-fit rounded-full px-3 py-1.5 text-[10px] font-medium tracking-wider text-foreground/70 uppercase">
                      Live Project
                    </span>
                    <h3
                      className="mb-3 text-4xl font-normal text-foreground xl:text-5xl"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="mb-5 text-xs font-medium tracking-widest text-muted-foreground uppercase">
                      {project.category}
                    </p>
                    <p className="mb-7 text-base leading-relaxed text-foreground/70 lg:text-lg">{project.description}</p>
                    <div className="mb-8 border-l border-white/[0.08] pl-5">
                      <p className="text-sm font-normal text-muted-foreground">{project.result}</p>
                      <div className="mt-2 flex flex-wrap gap-2 border-t border-white/[0.06] pt-2.5 text-xs text-muted-foreground/50">
                        {project.tech.map((t) => <span key={t}>{t}</span>)}
                      </div>
                    </div>
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <span className="relative">
                        Visit Live Site
                        <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-foreground transition-all group-hover:w-full" />
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </div>
                  <div className="group relative w-1/2 overflow-hidden bg-black/20">
                    <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <img
                      src={project.image} alt={project.title}
                      className="absolute inset-0 h-full w-full scale-100 object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function CosmicProjects() {
  return (
    <section id="work" className="relative z-10 w-full">
      {/* Mobile: simple cards */}
      <div className="md:hidden px-5 py-20 sm:px-6">
        <div className="mb-12">
          <span className="mb-4 inline-block text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Selected Work
          </span>
          <h2
            className="mt-4 text-4xl font-normal leading-[1.1] text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Sleek engineering.<br />
            <span className="text-muted-foreground">Premium execution.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          {showcaseProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Desktop: sticky scroll */}
      <div className="hidden md:block">
        <ProjectsDesktop />
      </div>
    </section>
  );
}

/* ─────────────── Services ─────────────── */
const agencyServices = [
  {
    title: "Full Stack Web Apps",
    description: "Next.js, React, TypeScript — end to end. From landing pages to complex SaaS platforms. Built fast, built properly.",
    icon: Globe,
    colSpan: "md:col-span-2",
  },
  {
    title: "AI / ML Projects",
    description: "Custom models, integrations, intelligent features — we build AI into products that actually need it.",
    icon: Brain,
    colSpan: "md:col-span-1",
  },
  {
    title: "Android Applications",
    description: "Native and cross-platform mobile apps that are smooth, performant, and user-tested.",
    icon: Smartphone,
    colSpan: "md:col-span-1",
  },
  {
    title: "HRMS & Portals",
    description: "Employee management systems, admin dashboards, internal tools — we build complex portals that teams actually love using.",
    icon: Users,
    colSpan: "md:col-span-2",
  },
  {
    title: "Bug Fixing & Optimization",
    description: "Inherited a mess? We triage fast, fix clean, and hand it back better than we found it.",
    icon: Rocket,
    colSpan: "md:col-span-1",
  },
  {
    title: "API & Complex Integrations",
    description: "Stripe, CRMs, third-party APIs, AI models — connected gracefully into your existing stack.",
    icon: Sparkles,
    colSpan: "md:col-span-1",
  },
  {
    title: "Chrome Extensions",
    description: "Custom browser extensions that fit into users' daily workflows — productivity tools, scrapers, AI assistants, whatever you need.",
    icon: FileSearch,
    colSpan: "md:col-span-1",
  },
  {
    title: "Domain & Deployment Help",
    description: "We help you buy the right domain, configure DNS, set up hosting, and get your product live — end to end, no confusion.",
    icon: Globe,
    colSpan: "md:col-span-1",
  },
];

export function CosmicServices() {
  return (
    <section id="services" className="relative z-10 w-full py-24 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20"
        >
          <span className="liquid-glass mb-5 inline-flex rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase sm:mb-6">
            What We Build
          </span>
          <h2
            className="mt-5 text-4xl font-normal leading-[1.0] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            We make your <em className="not-italic text-muted-foreground">dream ideas</em> real.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Full stack. AI. Mobile. Portals. Extensions. Even your domain setup — we cover it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-6">
          {agencyServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.07, ease: "easeOut" }}
              className={`group rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.03] sm:rounded-[1.5rem] sm:p-8 ${service.colSpan}`}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] transition-transform duration-500 group-hover:-translate-y-1 sm:h-14 sm:w-14 sm:rounded-2xl">
                <service.icon className="h-5 w-5 text-foreground/60 transition-colors group-hover:text-foreground sm:h-6 sm:w-6" />
              </div>
              <h3
                className="mb-3 text-xl font-normal text-foreground sm:text-2xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {service.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Process ─────────────── */
const processSteps = [
  {
    icon: MessageSquare,
    title: "Just reach out",
    desc: "No lengthy forms, no discovery questionnaires. Send us a message telling us what you're building. That's it — we'll take it from there.",
  },
  {
    icon: FileSearch,
    title: "We scope it together",
    desc: "We listen, ask the right questions, and figure out the cleanest path forward. You get a clear plan — no vague estimates, no jargon.",
  },
  {
    icon: Check,
    title: "You're always in the loop",
    desc: "We share progress regularly. No disappearing for weeks. If something changes, you hear it from us first — not when it's too late.",
  },
  {
    icon: Sparkles,
    title: "We refine until it's right",
    desc: "Feedback is part of the process. We iterate, polish, and don't consider it done until you're genuinely satisfied with what you're seeing.",
  },
  {
    icon: Rocket,
    title: "We launch & stay with you",
    desc: "From domain setup to deployment — we handle the go-live. And we don't vanish after. You have a team you can actually reach whenever you need.",
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
            We make it <em className="not-italic text-muted-foreground">effortless</em> for you.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            From first message to live product — clear communication, zero guesswork, and a team that actually shows up.
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
                  Step 0{i + 1}
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
                        Step 0{index + 1}
                      </p>
                      <h3
                        className="mb-3 text-2xl font-normal text-foreground lg:text-3xl"
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-base font-light leading-relaxed text-muted-foreground">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Testimonials ─────────────── */
const testimonials = [
  { text: "TekDev stepped into a messy codebase, fixed the performance issues, and got our release back on track in days.", author: "Sarah J.", role: "HealthStack" },
  { text: "They felt like a true product partner, not just a dev shop. Clear communication, strong execution, and zero drama.", author: "Michael C.", role: "BrightFlow" },
  { text: "We hired TekDev for bug fixes and ended up trusting them with a full rebuild. The quality was consistently strong.", author: "Emily R.", role: "Northlane" },
];

export function CosmicTestimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [index]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <section className="relative z-10 w-full overflow-hidden py-24 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-20"
        >
          <span className="liquid-glass mb-5 inline-flex rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase">
            Testimonials
          </span>
          <h2
            className="mt-5 text-4xl font-normal text-foreground sm:text-5xl md:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Client <em className="not-italic text-muted-foreground">Reflections.</em>
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] sm:rounded-[2rem]">
          <div className="relative h-[280px] sm:h-[320px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={(_, { offset, velocity }) => {
                  if (Math.abs(offset.x) * Math.abs(velocity.x) > 8000) {
                    paginate(offset.x < 0 ? 1 : -1);
                  }
                }}
                className="absolute inset-0 flex flex-col justify-center p-7 sm:p-12 md:p-16"
              >
                <div
                  className="mb-5 text-lg leading-relaxed text-foreground/85 sm:mb-8 sm:text-2xl md:text-3xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  &ldquo;{testimonials[index].text}&rdquo;
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-sm font-medium text-foreground sm:h-11 sm:w-11">
                    {testimonials[index].author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground sm:text-base">{testimonials[index].author}</p>
                    <p className="text-[10px] tracking-[0.18em] text-muted-foreground uppercase sm:text-xs">{testimonials[index].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between border-t border-white/[0.06] px-6 py-4 sm:px-10 sm:py-5">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-6 bg-foreground sm:w-8" : "w-1.5 bg-white/[0.12]"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => paginate(-1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] transition-all hover:bg-white/[0.05] sm:h-10 sm:w-10"
              >
                <ChevronLeft className="h-4 w-4 text-foreground/60" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] transition-all hover:bg-white/[0.05] sm:h-10 sm:w-10"
              >
                <ChevronRight className="h-4 w-4 text-foreground/60" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CTA ─────────────── */
export function CosmicCTA() {
  return (
    <section className="relative z-10 w-full overflow-hidden py-24 sm:py-48">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,130,200,0.04)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="mb-6 text-4xl font-normal leading-[1.0] text-foreground sm:mb-8 sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Let&apos;s build<br />
            <em className="not-italic text-muted-foreground">something worth it.</em>
          </h2>
          <p className="mx-auto mb-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-lg sm:max-w-xl">
            Whether you need a fast fix, a full product, or an AI-powered system — we&apos;re the team that builds it right, and fast.
          </p>
          <p className="mx-auto mb-10 max-w-md text-xs leading-relaxed text-muted-foreground/50 sm:mb-14 sm:text-sm">
            Just reach out. We&apos;ll take care of the rest — from first message to live product, with you every step.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/#contact"
              className="liquid-glass inline-flex w-full items-center justify-center rounded-full px-10 py-4 text-sm font-medium text-foreground transition-transform hover:scale-[1.03] sm:w-auto sm:px-14 sm:py-5 sm:text-base"
            >
              Start Your Project
            </Link>
            <Link
              href="/#work"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.06] px-10 py-4 text-sm font-medium text-muted-foreground transition-all hover:border-white/[0.1] hover:text-foreground sm:w-auto sm:px-14 sm:py-5 sm:text-base"
            >
              See Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
