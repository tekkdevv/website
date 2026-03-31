"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileSearch, MessageSquare, Target, Rocket, Sparkles, Check } from "lucide-react";

const homeStats = [
  { value: "50+", label: "Projects Delivered", description: "Successfully shipped across multiple industries." },
  { value: "8x", label: "Faster Delivery", description: "Lean execution without the agency bloat." },
  { value: "24/7", label: "Reliable Support", description: "A technical partner you can actually reach." },
];

export function CosmicBackground() {
  const [stars, setStars] = useState<{id: number, top: string, left: string, size: number, delay: number}[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
    }));
    setStars(newStars);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen bg-[#080a16]">
      <motion.div 
        className="absolute inset-0"
        animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <div className="absolute -left-[10%] top-[20%] h-[1000px] w-[1000px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute right-[0%] bottom-[10%] h-[800px] w-[800px] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute left-[50%] top-[50%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />
        
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 3 + (star.id % 4), delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function AnimatedNumber({ value }: { value: string }) {
  const numericMatch = value.match(/\d+/);
  const numericPart = numericMatch ? parseInt(numericMatch[0]) : 0;
  const suffix = value.replace(numericPart.toString(), "");
  
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
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

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function CosmicStats() {
  return (
    <section className="relative py-24 sm:py-32 z-10 w-full overflow-hidden">
      <div className="absolute left-1/2 top-1/2 z-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[150px] opacity-70" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {homeStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`group flex flex-col items-center text-center sm:items-start sm:text-left ${i > 0 ? "pt-12 sm:pt-0 sm:pl-12" : ""}`}
            >
              <div className="font-serif text-6xl font-medium tracking-tight text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] md:text-7xl">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-xl font-medium text-blue-100/90 mb-2">
                {stat.label}
              </div>
              <p className="max-w-[260px] text-base leading-relaxed text-blue-200/50">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const showcaseProjects = [
  {
    id: 1,
    title: "KYMA",
    category: "AI Agency Platform",
    description: "A complete rebuild of an AI agency's digital presence and lead funnel. Accelerated load times and sharpened premium positioning for higher conversion.",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    result: "+32% qualified inbound leads",
    image: "/images/p1.svg",
    color: "from-blue-600/30 to-cyan-600/30",
  },
  {
    id: 2,
    title: "Essentia",
    category: "Ecommerce Experience",
    description: "An incredibly fluid and reactive storefront optimized for visual merchandising clarity, mobile conversion, and uncompromised speed.",
    tech: ["React", "Shopify Plus", "UI Engineering"],
    result: "40% faster time-to-interactive",
    image: "/images/p3.svg",
    color: "from-emerald-600/30 to-teal-600/30",
  },
];

export function CosmicProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="work" ref={containerRef} className="relative z-10 w-full" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden py-24">
        
        <div className="absolute top-24 left-0 right-0 z-20 px-4 sm:px-6 lg:px-12 pointer-events-none">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <span className="mb-4 inline-block text-[10px] font-medium tracking-[0.2em] text-blue-200/50 uppercase">
                Selected Work
              </span>
              <h2 className="font-serif text-4xl font-medium leading-[1.15] text-white sm:text-5xl md:text-6xl drop-shadow-xl">
                Sleek engineering.<br />Premium execution.
              </h2>
            </motion.div>
          </div>
        </div>

        <div className="relative w-full max-w-6xl mt-32 h-[60vh] lg:h-[70vh] flex items-center justify-center">
          {showcaseProjects.map((project, i) => {
            const targetScale = 1 - (showcaseProjects.length - i) * 0.05;
            const range = [i * 0.5, 1];
            const scale = useTransform(scrollYProgress, range, [1, targetScale]);
            const y = useTransform(scrollYProgress, [i * 0.5 - 0.5, i * 0.5], [i === 0 ? 0 : 800, 0]);
            const rotateX = useTransform(scrollYProgress, [i * 0.5 - 0.5, i * 0.5], [45, 0]);
            const opacity = useTransform(scrollYProgress, [i * 0.5 - 0.1, i * 0.5], [0, 1]);

            return (
              <motion.div
                key={project.id}
                className="absolute top-0 w-full h-full px-4 sm:px-6 lg:px-12 flex items-center justify-center origin-top pointer-events-auto"
                style={{ y: i === 0 ? 0 : y, scale, rotateX: i === 0 ? 0 : rotateX, opacity: i === 0 ? 1 : opacity }}
              >
                <div className="relative w-full h-full max-h-[600px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0f20]/80 backdrop-blur-2xl shadow-2xl flex flex-col md:flex-row shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 pointer-events-none`} />
                  
                  <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center z-10 relative">
                    <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 backdrop-blur-md">
                      <span className="text-[10px] font-medium tracking-wider text-blue-200 uppercase">
                        Case Study
                      </span>
                    </div>
                    <h3 className="mb-4 font-serif text-4xl lg:text-5xl font-medium text-white shadow-black/50 drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="mb-6 text-sm text-blue-300/80 uppercase tracking-widest font-semibold">
                      {project.category}
                    </p>
                    <p className="mb-8 text-base leading-relaxed text-blue-100/90 sm:text-lg">
                      {project.description}
                    </p>
                    
                    <div className="mb-10 space-y-3 border-l-2 border-blue-500/50 pl-6">
                      <p className="text-sm font-semibold text-white tracking-wide">IMPACT: <span className="text-blue-200 font-normal">{project.result}</span></p>
                      <div className="flex flex-wrap gap-2 text-xs text-blue-200/60 font-medium tracking-wide border-t border-white/10 pt-3">
                        {project.tech.map(t => <span key={t}>{t}</span>)}
                      </div>
                    </div>

                    <Link href={`/projects/${project.id}`} className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-white transition-all">
                      <span className="relative">
                        Explore Project
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </div>

                  <div className="hidden md:block w-1/2 relative overflow-hidden bg-black/20 group">
                    <motion.div className="absolute inset-0 bg-gradient-to-t from-[#0c0f20] via-transparent to-transparent z-10 opacity-60" />
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover p-8 mix-blend-lighten transition-transform duration-1000 scale-100 group-hover:scale-110"
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

const agencyServices = [
  {
    title: "Bug Fixing & Debugging",
    description: "Rapid triage and elegant fixes for torn codebases. We solve the unsolvable without halting your momentum.",
    icon: Rocket,
    colSpan: "md:col-span-1",
  },
  {
    title: "Full Product Engineering",
    description: "From blank canvas to high-scale deployment. We build beautiful Next.js apps with meticulous attention to detail.",
    icon: Sparkles,
    colSpan: "md:col-span-2",
  },
  {
    title: "Complex Integrations",
    description: "Connecting third-party platforms flawlessly. Stripe, CRMs, AI models, handled gracefully.",
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
    <section id="services" className="relative z-10 py-32 sm:py-48 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <div className="mx-auto mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 backdrop-blur-md">
            <span className="block text-[10px] font-medium tracking-[0.2em] text-blue-200 uppercase">
              Bespoke Expertise
            </span>
          </div>
          <h2 className="font-serif text-5xl font-medium leading-[1.15] text-white sm:text-6xl md:text-7xl drop-shadow-lg">
            Specialized skills.<br />Zero drama.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agencyServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 sm:p-10 backdrop-blur-sm transition-colors hover:bg-white/[0.04] ${service.colSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 transition-colors duration-500 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 z-0" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-inner transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] group-hover:border-blue-500/30">
                  <service.icon className="h-6 w-6 text-white transition-colors group-hover:text-blue-400" />
                </div>
                <h3 className="mb-4 text-2xl sm:text-3xl font-serif text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-auto text-base text-blue-100/60 leading-relaxed font-light transition-colors group-hover:text-blue-100/90">
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

const processSteps = [
  { icon: MessageSquare, title: "Initial Contact", desc: "Share your constraints, goals, and technical context." },
  { icon: FileSearch, title: "Deep Analysis", desc: "We review codebases, map out technical debt, and find the cleanest path." },
  { icon: Check, title: "Flawless Delivery", desc: "We build, test, and hand over a polished, highly-performant solution." },
];

export function CosmicProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);

  return (
    <section id="process" className="relative z-10 py-32 sm:py-48 w-full" ref={containerRef}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-12">
        <div className="mb-32 text-center">
          <h2 className="font-serif text-6xl font-medium text-white sm:text-7xl">
            Smooth progression.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[39px] top-0 h-full w-[1px] bg-white/10 sm:left-1/2 sm:-ml-[0.5px]" />
          
          <motion.div 
            className="absolute left-[38px] top-0 w-[3px] bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent sm:left-1/2 sm:-ml-[1.5px]" 
            style={{ height, opacity: glowOpacity, boxShadow: "0 0 20px 2px rgba(56,189,248,0.5)" }}
          />

          <div className="flex flex-col gap-32">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.title} className={`relative flex items-center ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                    className="absolute left-[20px] z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/30 bg-[#080a16] shadow-[0_0_30px_rgba(59,130,246,0.8)] sm:left-1/2 sm:-ml-5"
                  >
                    <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm">
                      <step.icon className="h-3 w-3 text-cyan-200" />
                    </div>
                  </motion.div>

                  <div className={`ml-20 sm:ml-0 sm:w-1/2 ${isEven ? "sm:pr-20 text-left sm:text-right" : "sm:pl-20 text-left"}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="group"
                    >
                      <h3 className="mb-4 text-3xl font-serif text-white drop-shadow-xl group-hover:text-blue-200 transition-colors duration-500">{step.title}</h3>
                      <p className="text-xl font-light text-blue-100/50 leading-relaxed group-hover:text-blue-100/90 transition-colors duration-500">{step.desc}</p>
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

const testimonials = [
  { text: "TekDev stepped into a messy codebase, fixed the performance issues, and got our release back on track in days.", author: "Sarah J.", role: "HealthStack" },
  { text: "They felt like a true product partner, not just a dev shop. Clear communication, strong execution, and zero drama.", author: "Michael C.", role: "BrightFlow" },
  { text: "We hired TekDev for bug fixes and ended up trusting them with a full rebuild. The quality was consistently strong.", author: "Emily R.", role: "Northlane" },
];

export function CosmicTestimonials() {
  return (
    <section className="relative z-10 py-32 overflow-hidden w-full sm:py-48">
      <div className="absolute top-[20%] left-1/2 w-full h-[300px] -translate-x-1/2 bg-blue-600/5 blur-[120px] rounded-full point-events-none" />
      
      <div className="mb-24 text-center px-4">
         <h2 className="font-serif text-4xl font-medium text-white sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
           Client Reflections
         </h2>
      </div>

      <div className="relative flex w-full flex-col items-center overflow-hidden py-10">
        <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#080a16] to-transparent sm:w-64" />
        <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#080a16] to-transparent sm:w-64" />

        <div className="flex w-[200%] sm:w-[150%] animate-marquee flex-row gap-8 items-center">
          {[...testimonials, ...testimonials, ...testimonials].map((t, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10, rotateZ: Math.random() > 0.5 ? 1 : -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex w-[350px] sm:w-[450px] shrink-0 flex-col justify-between rounded-[2rem] border border-white/10 bg-[#0c0f20]/60 p-10 backdrop-blur-2xl transition-all shadow-xl hover:shadow-2xl hover:border-white/20 hover:bg-[#0c0f20]/80 h-[280px]"
            >
              <p className="font-serif text-xl sm:text-2xl leading-relaxed text-blue-50/90">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 font-bold text-white shadow-inner">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-white tracking-wide">{t.author}</p>
                  <p className="text-xs text-blue-200/50 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CosmicCTA() {
  return (
    <section className="relative overflow-hidden z-10 py-48 sm:py-64 w-full">
      <div className="absolute left-1/2 top-1/2 z-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_60%)] animate-pulse duration-[8000ms]" />
      <div className="absolute left-1/2 top-1/2 z-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] mix-blend-overlay" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-12">
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 40 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white/5 shadow-[0_0_50px_rgba(255,255,255,0.1)] backdrop-blur-xl border border-white/20"
            >
              <Sparkles className="h-10 w-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </motion.div>
          </div>
          <h2 className="mb-6 font-serif text-6xl font-medium leading-[1.1] text-white sm:text-7xl md:text-8xl drop-shadow-2xl">
            Let's build<br/><span className="italic font-light text-blue-200/90">beautifully.</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-xl font-light leading-relaxed text-blue-100/60 sm:text-2xl">
            Whether you need a fast fix, a new product, or a reliable technical partner, we’re ready.
          </p>
          <Link
            href="/#contact"
            className="group relative inline-flex items-center justify-center rounded-full bg-white px-12 py-5 text-lg font-medium text-[#080a16] shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all overflow-hidden"
          >
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Start Your Project</span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-100 via-white to-blue-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
