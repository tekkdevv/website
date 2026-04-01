"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  FileSearch,
  MessageSquare,
  Target,
  Rocket,
  Sparkles,
  Check,
} from "lucide-react";

/* ─────────────── Cosmic Background (subtle, cinematic) ─────────────── */

export function CosmicBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[hsl(201,100%,8%)]">
      {/* Very subtle ambient light — no blobs, no stars, just depth */}
      <div className="absolute -left-[20%] top-[30%] h-[800px] w-[800px] rounded-full bg-blue-900/20 blur-[200px]" />
      <div className="absolute right-[-10%] bottom-[20%] h-[600px] w-[600px] rounded-full bg-indigo-900/15 blur-[180px]" />
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
          const easeOut =
            progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─────────────── Stats ─────────────── */

const homeStats = [
  {
    value: "50+",
    label: "Projects Delivered",
    description: "Successfully shipped across multiple industries.",
  },
  {
    value: "8x",
    label: "Faster Delivery",
    description: "Lean execution without the agency bloat.",
  },
  {
    value: "24/7",
    label: "Reliable Support",
    description: "A technical partner you can actually reach.",
  },
];

export function CosmicStats() {
  return (
    <section className="relative z-10 w-full py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid gap-12 divide-y divide-white/[0.06] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {homeStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              className={`flex flex-col items-center text-center sm:items-start sm:text-left ${
                i > 0 ? "pt-12 sm:pt-0 sm:pl-12" : ""
              }`}
            >
              <div
                className="mb-4 text-6xl font-normal tracking-tight text-foreground md:text-7xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="mb-2 text-lg font-medium text-foreground/80">
                {stat.label}
              </div>
              <p className="max-w-[260px] text-base leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Projects ─────────────── */

const showcaseProjects = [
  {
    id: 1,
    title: "KYMA",
    category: "AI Agency Platform",
    description:
      "A complete rebuild of an AI agency\u2019s digital presence and lead funnel. Accelerated load times and sharpened premium positioning.",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    result: "+32% qualified inbound leads",
    image: "/images/p1.svg",
  },
  {
    id: 2,
    title: "Essentia",
    category: "Ecommerce Experience",
    description:
      "An incredibly fluid storefront optimized for visual merchandising clarity, mobile conversion, and uncompromised speed.",
    tech: ["React", "Shopify Plus", "UI Engineering"],
    result: "40% faster time-to-interactive",
    image: "/images/p3.svg",
  },
];

export function CosmicProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative z-10 w-full"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden py-24">
        {/* Header */}
        <div className="pointer-events-none absolute left-0 right-0 top-24 z-20 px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <span className="mb-4 inline-block text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Selected Work
              </span>
              <h2
                className="text-4xl font-normal leading-[1.15] text-foreground sm:text-5xl md:text-6xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Sleek engineering.
                <br />
                <span className="text-muted-foreground">
                  Premium execution.
                </span>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Stacked cards */}
        <div className="relative mt-32 flex h-[60vh] w-full max-w-6xl items-center justify-center lg:h-[70vh]">
          {showcaseProjects.map((project, i) => {
            const targetScale = 1 - (showcaseProjects.length - i) * 0.05;
            const range = [i * 0.5, 1];
            const scale = useTransform(scrollYProgress, range, [
              1,
              targetScale,
            ]);
            const y = useTransform(
              scrollYProgress,
              [i * 0.5 - 0.5, i * 0.5],
              [i === 0 ? 0 : 800, 0]
            );
            const rotateX = useTransform(
              scrollYProgress,
              [i * 0.5 - 0.5, i * 0.5],
              [45, 0]
            );
            const opacity = useTransform(
              scrollYProgress,
              [i * 0.5 - 0.1, i * 0.5],
              [0, 1]
            );

            return (
              <motion.div
                key={project.id}
                className="pointer-events-auto absolute top-0 flex h-full w-full origin-top items-center justify-center px-4 sm:px-6 lg:px-12"
                style={{
                  y: i === 0 ? 0 : y,
                  scale,
                  rotateX: i === 0 ? 0 : rotateX,
                  opacity: i === 0 ? 1 : opacity,
                }}
              >
                <div className="relative flex h-full max-h-[600px] w-full flex-col overflow-hidden rounded-[2rem] border border-white/[0.06] bg-black/40 backdrop-blur-2xl md:flex-row">
                  {/* Text side */}
                  <div className="relative z-10 flex w-full flex-col justify-center p-8 sm:p-12 md:w-1/2 lg:p-16">
                    <span className="liquid-glass mb-6 inline-flex w-fit rounded-full px-3 py-1.5 text-[10px] font-medium tracking-wider text-foreground/70 uppercase">
                      Case Study
                    </span>
                    <h3
                      className="mb-4 text-4xl font-normal text-foreground lg:text-5xl"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="mb-6 text-sm font-medium tracking-widest text-muted-foreground uppercase">
                      {project.category}
                    </p>
                    <p className="mb-8 text-base leading-relaxed text-foreground/70 sm:text-lg">
                      {project.description}
                    </p>

                    <div className="mb-10 space-y-3 border-l border-white/[0.08] pl-6">
                      <p className="text-sm font-medium tracking-wide text-foreground">
                        IMPACT:{" "}
                        <span className="font-normal text-muted-foreground">
                          {project.result}
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-2 border-t border-white/[0.06] pt-3 text-xs font-medium tracking-wide text-muted-foreground/60">
                        {project.tech.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-foreground transition-all"
                    >
                      <span className="relative">
                        Explore Project
                        <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-foreground transition-all group-hover:w-full" />
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </div>

                  {/* Image side */}
                  <div className="group relative hidden w-1/2 overflow-hidden bg-black/20 md:block">
                    <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full scale-100 object-cover p-8 mix-blend-lighten transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Services ─────────────── */

const agencyServices = [
  {
    title: "Bug Fixing & Debugging",
    description:
      "Rapid triage and elegant fixes for torn codebases. We solve the unsolvable without halting your momentum.",
    icon: Rocket,
    colSpan: "md:col-span-1",
  },
  {
    title: "Full Product Engineering",
    description:
      "From blank canvas to high-scale deployment. We build beautiful Next.js apps with meticulous attention to detail.",
    icon: Sparkles,
    colSpan: "md:col-span-2",
  },
  {
    title: "Complex Integrations",
    description:
      "Connecting third-party platforms flawlessly. Stripe, CRMs, AI models, handled gracefully.",
    icon: Target,
    colSpan: "md:col-span-2",
  },
  {
    title: "Performance Optimization",
    description: "Transforming sluggishness to instantaneous speed.",
    icon: FileSearch,
    colSpan: "md:col-span-1",
  },
];

export function CosmicServices() {
  return (
    <section id="services" className="relative z-10 w-full py-32 sm:py-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <span className="liquid-glass mb-6 inline-flex rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase">
            Bespoke Expertise
          </span>
          <h2
            className="mt-6 text-5xl font-normal leading-[0.95] text-foreground sm:text-6xl md:text-7xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Specialized{" "}
            <em className="not-italic text-muted-foreground">skills.</em>
            <br />
            Zero drama.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {agencyServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/[0.06] bg-white/[0.01] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.03] sm:p-10 ${service.colSpan}`}
            >
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-transform duration-500 group-hover:-translate-y-1">
                  <service.icon className="h-6 w-6 text-foreground/70 transition-colors group-hover:text-foreground" />
                </div>
                <h3
                  className="mb-4 text-2xl text-foreground sm:text-3xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {service.title}
                </h3>
                <p className="mt-auto text-base font-light leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/70">
                  {service.description}
                </p>
              </div>
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
    title: "Initial Contact",
    desc: "Share your constraints, goals, and technical context.",
  },
  {
    icon: FileSearch,
    title: "Deep Analysis",
    desc: "We review codebases, map out technical debt, and find the cleanest path.",
  },
  {
    icon: Check,
    title: "Flawless Delivery",
    desc: "We build, test, and hand over a polished, highly-performant solution.",
  },
];

export function CosmicProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="relative z-10 w-full py-32 sm:py-48"
      ref={containerRef}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-12">
        <div className="mb-32 text-center">
          <h2
            className="text-5xl font-normal text-foreground sm:text-6xl md:text-7xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Smooth{" "}
            <em className="not-italic text-muted-foreground">
              progression.
            </em>
          </h2>
        </div>

        <div className="relative">
          {/* Track line */}
          <div className="absolute left-[39px] top-0 h-full w-[1px] bg-white/[0.06] sm:left-1/2 sm:-ml-[0.5px]" />
          <motion.div
            className="absolute left-[38px] top-0 w-[2px] bg-gradient-to-b from-foreground/40 via-foreground/20 to-transparent sm:left-1/2 sm:-ml-[1px]"
            style={{ height }}
          />

          <div className="flex flex-col gap-32">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`relative flex items-center ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: 0.2,
                    }}
                    className="absolute left-[24px] z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white/[0.1] bg-[hsl(201,100%,8%)] sm:left-1/2 sm:-ml-[15px]"
                  >
                    <step.icon className="h-3.5 w-3.5 text-foreground/60" />
                  </motion.div>

                  {/* Content */}
                  <div
                    className={`ml-20 sm:ml-0 sm:w-1/2 ${
                      isEven
                        ? "text-left sm:pr-20 sm:text-right"
                        : "text-left sm:pl-20"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <h3
                        className="mb-4 text-3xl text-foreground"
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-lg font-light leading-relaxed text-muted-foreground">
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
  {
    text: "TekDev stepped into a messy codebase, fixed the performance issues, and got our release back on track in days.",
    author: "Sarah J.",
    role: "HealthStack",
  },
  {
    text: "They felt like a true product partner, not just a dev shop. Clear communication, strong execution, and zero drama.",
    author: "Michael C.",
    role: "BrightFlow",
  },
  {
    text: "We hired TekDev for bug fixes and ended up trusting them with a full rebuild. The quality was consistently strong.",
    author: "Emily R.",
    role: "Northlane",
  },
];

export function CosmicTestimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      filter: "blur(4px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      filter: "blur(4px)",
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="relative z-10 w-full overflow-hidden py-32 sm:py-48">
      <div className="mb-24 px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="liquid-glass mb-6 inline-flex rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/70 uppercase">
            Testimonials
          </span>
          <h2
            className="mt-6 text-5xl font-normal text-foreground sm:text-6xl md:text-7xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Client{" "}
            <em className="not-italic text-muted-foreground">Reflections.</em>
          </h2>
        </motion.div>
      </div>

      <div className="relative flex h-[500px] w-full items-center justify-center">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
        </div>

        <motion.div 
          className="relative flex h-full w-full max-w-4xl items-center justify-center px-4"
        >
          <div className="relative h-full w-full max-w-[600px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.6 },
                  scale: { duration: 0.6 },
                  filter: { duration: 0.6 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute flex h-full w-full flex-col justify-center rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-10 sm:p-16 backdrop-blur-2xl"
              >
                <div className="mb-10 text-4xl text-muted-foreground/30 font-serif">&ldquo;</div>
                <p
                  className="mb-12 text-2xl leading-relaxed text-foreground/90 sm:text-3xl md:text-4xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {testimonials[index].text}
                </p>
                <div className="flex items-center gap-5 border-t border-white/[0.06] pt-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-lg font-medium text-foreground">
                    {testimonials[index].author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-lg font-medium tracking-wide text-foreground">
                      {testimonials[index].author}
                    </p>
                    <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                      {testimonials[index].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Floating Nav Controls */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4 sm:bottom-12">
          <button
            onClick={() => paginate(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md transition-all hover:border-white/[0.2] hover:bg-white/[0.05]"
          >
            <ArrowRight className="h-5 w-5 rotate-180 text-foreground/60" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-foreground" : "w-1.5 bg-white/[0.1]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md transition-all hover:border-white/[0.2] hover:bg-white/[0.05]"
          >
            <ArrowRight className="h-5 w-5 text-foreground/60" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CTA ─────────────── */

export function CosmicCTA() {
  return (
    <section className="relative z-10 w-full overflow-hidden py-32 sm:py-48">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="mb-8 text-5xl font-normal leading-[0.95] text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Let&apos;s build
            <br />
            <em className="not-italic text-muted-foreground">beautifully.</em>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
            Whether you need a fast fix, a new product, or a reliable technical
            partner, we&apos;re ready.
          </p>
          <Link
            href="/#contact"
            className="liquid-glass inline-flex items-center justify-center rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03]"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
