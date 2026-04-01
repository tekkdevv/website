"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const chapters = [
  {
    titleParts: [
      { text: "Your ", muted: false },
      { text: "vision. ", muted: true },
      { text: "Our code.", muted: false },
    ],
    subtitle:
      "We\u2019re a premium software team that builds, fixes, and ships web products for startups and businesses.",
  },
  {
    titleParts: [
      { text: "No bloated teams. ", muted: true },
      { text: "No wasted sprints.", muted: false },
    ],
    subtitle:
      "Lean execution. Clean code. Fast turnaround \u2014 from bug fixes to full product builds.",
  },
  {
    titleParts: [
      { text: "Built to ", muted: false },
      { text: "perform. ", muted: true },
      { text: "Shipped to last.", muted: false },
    ],
    subtitle:
      "Next.js, React, TypeScript, APIs \u2014 engineered with precision for products that actually scale.",
  },
];

export function StoryHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Video transforms — slow zoom as you scroll
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  // Chapter visibility
  const chapter1Opacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.3],
    [1, 1, 0]
  );
  const chapter2Opacity = useTransform(
    scrollYProgress,
    [0.28, 0.36, 0.52, 0.6],
    [0, 1, 1, 0]
  );
  const chapter3Opacity = useTransform(
    scrollYProgress,
    [0.58, 0.66, 0.78, 0.85],
    [0, 1, 1, 0]
  );
  const ctaOpacity = useTransform(scrollYProgress, [0.82, 0.92], [0, 1]);

  // Text Y movement
  const chapter1Y = useTransform(
    scrollYProgress,
    [0, 0.22, 0.3],
    [0, 0, -30]
  );
  const chapter2Y = useTransform(
    scrollYProgress,
    [0.28, 0.36, 0.52, 0.6],
    [24, 0, 0, -30]
  );
  const chapter3Y = useTransform(
    scrollYProgress,
    [0.58, 0.66, 0.78, 0.85],
    [24, 0, 0, -30]
  );
  const ctaY = useTransform(scrollYProgress, [0.82, 0.92], [24, 0]);

  // Minimal overlay — darkens slightly for text readability
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.15, 0.3, 0.45]
  );

  const chapterOpacities = [chapter1Opacity, chapter2Opacity, chapter3Opacity];
  const chapterYs = [chapter1Y, chapter2Y, chapter3Y];

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ scale: videoScale, y: videoY }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero/bg-3.png"
            className="h-full w-full object-cover"
          >
            <source src="/hero/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Minimal overlay — let the video breathe */}
        <motion.div
          className="absolute inset-0 z-[1] bg-black"
          style={{ opacity: overlayOpacity }}
        />

        {/* Bottom gradient only — for text readability */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[hsl(201,100%,8%)] via-transparent to-transparent opacity-90" />

        {/* Content — centered vertically like Velorah */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <div className="mx-auto w-full max-w-7xl">
            {/* Badge */}
            <div className="animate-fade-rise mb-8 flex justify-center">
              <span className="liquid-glass inline-flex items-center rounded-full px-5 py-2.5 text-xs font-medium tracking-[0.2em] text-foreground/80 uppercase sm:text-sm">
                Software Development Studio
              </span>
            </div>

            {/* Chapters — stacked, crossfade */}
            <div className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-6 sm:gap-8"
                  style={{
                    opacity: chapterOpacities[index],
                    y: chapterYs[index],
                  }}
                >
                  <h1
                    className="max-w-5xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {chapter.titleParts.map((part, i) => (
                      <span
                        key={i}
                        className={
                          part.muted ? "text-muted-foreground" : "text-foreground"
                        }
                      >
                        {part.text}
                      </span>
                    ))}
                  </h1>
                  <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {chapter.subtitle}
                  </p>
                </motion.div>
              ))}

              {/* CTA — final chapter */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center gap-8"
                style={{ opacity: ctaOpacity, y: ctaY }}
              >
                <h2
                  className="max-w-4xl text-4xl font-normal leading-[0.95] tracking-[-2px] sm:text-5xl md:text-6xl lg:text-7xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  <span className="text-foreground">Let&apos;s build </span>
                  <span className="text-muted-foreground">
                    something worth
                  </span>
                  <span className="text-foreground"> standing for.</span>
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Whether it&apos;s a fix, a feature, or a full product &mdash;
                  we&apos;re ready.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <Link
                    href="/#work"
                    className="liquid-glass inline-flex w-full items-center justify-center gap-2 rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03] sm:w-auto"
                  >
                    See Our Work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/#contact"
                    className="liquid-glass inline-flex w-full items-center justify-center gap-2 rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03] sm:w-auto"
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
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.06], [1, 0]),
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground/60 uppercase">
              Scroll
            </span>
            <motion.div
              className="h-8 w-[1px] bg-gradient-to-b from-foreground/40 to-transparent"
              animate={{ scaleY: [1, 0.4, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
