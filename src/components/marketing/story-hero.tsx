"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/marketing/magnetic";

const chapters = [
  {
    titleParts: [
      { text: "We build software", muted: false },
      { text: " that actually works.", muted: true },
    ],
    subtitle:
      "Websites, web applications, Artificial Intelligence systems, Android mobile apps, Human Resource management portals, Chrome browser extensions — fully built by experienced developers, shipped fast, zero generated filler.",
  },
  {
    titleParts: [
      { text: "From ₹5,000 websites", muted: true },
      { text: " to ₹25,000+ platforms.", muted: false },
    ],
    subtitle:
      "Transparent pricing, written scope confirmed before a single line of code is written, and 2 months of free post-launch support on every project. You know exactly what you are getting before we begin.",
  },
  {
    titleParts: [
      { text: "Fast delivery.", muted: false },
      { text: " Real craft.", muted: true },
      { text: " No excuses.", muted: false },
    ],
    subtitle:
      "We move fast because we are experienced — not because we cut corners. Every project ships on schedule, works properly for real users, and comes with documentation so you are never left guessing.",
  },
];

export function StoryHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax #1: only scale — no Y translate (reduces motion values)
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  // Chapter fades only — no Y movement (removes 4 motion values)
  const chapter1Opacity = useTransform(scrollYProgress, [0, 0.18, 0.26], [1, 1, 0]);
  const chapter2Opacity = useTransform(scrollYProgress, [0.24, 0.32, 0.50, 0.58], [0, 1, 1, 0]);
  const chapter3Opacity = useTransform(scrollYProgress, [0.56, 0.64, 0.76, 0.84], [0, 1, 1, 0]);
  const ctaOpacity    = useTransform(scrollYProgress, [0.82, 0.92], [0, 1]);

  const chapterOpacities = [chapter1Opacity, chapter2Opacity, chapter3Opacity];

  return (
    <div ref={containerRef} className="relative h-[280vh]">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* Video — scale parallax only */}
        <motion.div className="absolute inset-0 z-0" style={{ scale: videoScale }}>
          <video
            autoPlay loop muted playsInline poster="/hero/bg-3.png"
            className="h-full w-full object-cover object-center"
          >
            <source src="/hero/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Static overlay — no scroll-driven opacity */}
        <div className="absolute inset-0 z-[1] bg-[#030208]/20" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#030208] via-[#030208]/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 pt-20 text-center sm:px-8">
          <div className="mx-auto w-full max-w-5xl">

            {/* Badge */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="liquid-glass inline-flex items-center rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/80 uppercase sm:px-5 sm:py-2.5 sm:text-xs">
                Software Development Studio
              </span>
            </motion.div>

            {/* Chapters — fade only, no Y */}
            <div className="relative min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-5 sm:gap-7"
                  style={{ opacity: chapterOpacities[index] }}
                >
                  <h1
                    className="text-[2.6rem] font-normal leading-[1.0] tracking-[-1.5px] sm:text-6xl sm:tracking-[-2.46px] md:text-7xl lg:text-8xl"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {chapter.titleParts.map((part, i) => (
                      <span key={i} className={part.muted ? "text-muted-foreground" : "text-foreground"}>
                        {part.text}
                      </span>
                    ))}
                  </h1>
                  <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base sm:max-w-xl">
                    {chapter.subtitle}
                  </p>
                </motion.div>
              ))}

              {/* CTA — fade only */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center gap-6 sm:gap-8"
                style={{ opacity: ctaOpacity }}
              >
                <h2
                  className="text-[2.4rem] font-normal leading-[1.0] tracking-[-1.5px] sm:text-5xl sm:tracking-[-2px] md:text-6xl lg:text-7xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  <span className="text-foreground">Tell us what </span>
                  <span className="text-muted-foreground">you need built.</span>
                  <span className="text-foreground"> We&apos;ll ship it.</span>
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base sm:max-w-xl">
                  Website, web application, Artificial Intelligence tool, Human Resource Management System, Chrome browser extension — whatever it is, we scope it in writing and deliver it.
                </p>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
                  <Magnetic>
                    <Link
                      href="/#work"
                      className="liquid-glass inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-foreground transition-transform hover:scale-[1.03] sm:w-auto sm:px-12 sm:py-5 sm:text-base"
                    >
                      See Our Work <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <Link
                      href="/#contact"
                      className="liquid-glass inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-foreground transition-transform hover:scale-[1.03] sm:w-auto sm:px-12 sm:py-5 sm:text-base"
                    >
                      Start a Project
                    </Link>
                  </Magnetic>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 sm:bottom-8"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.06], [1, 0]) }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] font-medium tracking-[0.3em] text-muted-foreground/50 uppercase sm:text-[10px]">
              Scroll
            </span>
            <motion.div
              className="h-7 w-[1px] bg-gradient-to-b from-foreground/30 to-transparent sm:h-8"
              animate={{ scaleY: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
