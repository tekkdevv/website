"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const chapters = [
  {
    titleParts: [
      { text: "Your dream idea.", muted: false },
      { text: " Shipped fast.", muted: true },
    ],
    subtitle:
      "Full stack web apps, AI/ML systems, Android apps, HRMS portals — we build it all, without the wait.",
  },
  {
    titleParts: [
      { text: "Fast ", muted: false },
      { text: "doesn't mean ", muted: true },
      { text: "sloppy.", muted: false },
    ],
    subtitle:
      "We refuse to ship AI-generated trash. Every line is crafted — speed and quality, together.",
  },
  {
    titleParts: [
      { text: "The right balance.", muted: true },
      { text: " Every time.", muted: false },
    ],
    subtitle:
      "We obsess over the product until the user is genuinely satisfied. That's the only bar we know.",
  },
];

export function StoryHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  const chapter1Opacity = useTransform(scrollYProgress, [0, 0.22, 0.3], [1, 1, 0]);
  const chapter2Opacity = useTransform(scrollYProgress, [0.28, 0.36, 0.52, 0.6], [0, 1, 1, 0]);
  const chapter3Opacity = useTransform(scrollYProgress, [0.58, 0.66, 0.78, 0.85], [0, 1, 1, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.82, 0.92], [0, 1]);

  const chapter1Y = useTransform(scrollYProgress, [0, 0.22, 0.3], [0, 0, -30]);
  const chapter2Y = useTransform(scrollYProgress, [0.28, 0.36, 0.52, 0.6], [24, 0, 0, -30]);
  const chapter3Y = useTransform(scrollYProgress, [0.58, 0.66, 0.78, 0.85], [24, 0, 0, -30]);
  const ctaY = useTransform(scrollYProgress, [0.82, 0.92], [24, 0]);

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.32, 0.48]);

  const chapterOpacities = [chapter1Opacity, chapter2Opacity, chapter3Opacity];
  const chapterYs = [chapter1Y, chapter2Y, chapter3Y];

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* Video */}
        <motion.div className="absolute inset-0 z-0" style={{ scale: videoScale, y: videoY }}>
          <video
            autoPlay loop muted playsInline poster="/hero/bg-3.png"
            className="h-full w-full object-cover object-center"
          >
            <source src="/hero/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Overlay */}
        <motion.div className="absolute inset-0 z-[1] bg-black" style={{ opacity: overlayOpacity }} />
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[hsl(201,100%,8%)] via-[hsl(201,100%,8%)]/20 to-transparent" />

        {/* Content — centered */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 pt-20 text-center sm:px-8">
          <div className="mx-auto w-full max-w-5xl">

            {/* Badge */}
            <motion.div
              className="animate-fade-rise mb-8 flex justify-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="liquid-glass inline-flex items-center rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-foreground/80 uppercase sm:px-5 sm:py-2.5 sm:text-xs">
                Software Development Studio
              </span>
            </motion.div>

            {/* Chapters */}
            <div className="relative min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-5 sm:gap-7"
                  style={{ opacity: chapterOpacities[index], y: chapterYs[index] }}
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

              {/* CTA */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center gap-6 sm:gap-8"
                style={{ opacity: ctaOpacity, y: ctaY }}
              >
                <h2
                  className="text-[2.4rem] font-normal leading-[1.0] tracking-[-1.5px] sm:text-5xl sm:tracking-[-2px] md:text-6xl lg:text-7xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  <span className="text-foreground">Let&apos;s build </span>
                  <span className="text-muted-foreground">something worth</span>
                  <span className="text-foreground"> standing for.</span>
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base sm:max-w-xl">
                  Whether it&apos;s a fix, a feature, or a full product — we&apos;re ready.
                </p>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
                  <Link
                    href="/#work"
                    className="liquid-glass inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-foreground transition-transform hover:scale-[1.03] sm:w-auto sm:px-12 sm:py-5 sm:text-base"
                  >
                    See Our Work <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/#contact"
                    className="liquid-glass inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-foreground transition-transform hover:scale-[1.03] sm:w-auto sm:px-12 sm:py-5 sm:text-base"
                  >
                    Start a Project
                  </Link>
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
