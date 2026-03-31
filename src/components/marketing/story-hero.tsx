"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const chapters = [
  {
    title: "As the times change...",
    subtitle:
      "The old ways of building software are fading. Welcome to the new era.",
  },
  {
    title: "...you don't need huge teams and days to do things.",
    subtitle:
      "We believe in lean execution and moving fast without breaking things.",
  },
  {
    title: "It can be done very easily.",
    subtitle: "Complex problems, solved with elegant and simple solutions.",
  },
];

export function StoryHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Video transforms — slow zoom as you scroll
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

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
  const chapter1Y = useTransform(scrollYProgress, [0, 0.22, 0.3], [0, 0, -30]);
  const chapter2Y = useTransform(scrollYProgress, [0.28, 0.36, 0.52, 0.6], [40, 0, 0, -30]);
  const chapter3Y = useTransform(scrollYProgress, [0.58, 0.66, 0.78, 0.85], [40, 0, 0, -30]);
  const ctaY = useTransform(scrollYProgress, [0.82, 0.92], [30, 0]);

  // Overlay darkens progressively
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.4, 0.55]);

  const chapterOpacities = [chapter1Opacity, chapter2Opacity, chapter3Opacity];
  const chapterYs = [chapter1Y, chapter2Y, chapter3Y];

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#080a16]">
        {/* Video background with Ken Burns zoom */}
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
            className="h-full w-full object-cover object-center"
          >
            <source src="/hero/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Dynamic overlay */}
        <motion.div
          className="absolute inset-0 z-[1] bg-[#080a16]"
          style={{ opacity: overlayOpacity }}
        />

        {/* Gradient overlays — cosmic feel */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#080a16] via-[#080a16]/30 to-transparent" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#080a16]/60 via-transparent to-transparent" />
        {/* Subtle blue vignette */}
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_40%,#080a16_100%)] opacity-60" />

        {/* Content layer */}
        <div className="relative z-10 flex h-full items-end pb-20 sm:pb-28 lg:pb-32">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
            {/* Badge */}
            <motion.div
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-200/70" />
              <span className="text-xs font-medium tracking-widest text-blue-100/80 uppercase sm:text-sm">
                Premium standard
              </span>
            </motion.div>

            {/* Chapters */}
            <div className="relative min-h-[200px] sm:min-h-[240px]">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex flex-col gap-4"
                  style={{
                    opacity: chapterOpacities[index],
                    y: chapterYs[index],
                  }}
                >
                  <h1 className="max-w-3xl font-serif text-4xl font-medium leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    {chapter.title}
                  </h1>
                  <p className="max-w-lg text-base font-light leading-relaxed text-blue-100/60 sm:text-lg">
                    {chapter.subtitle}
                  </p>
                </motion.div>
              ))}

              {/* CTA */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end gap-6"
                style={{ opacity: ctaOpacity, y: ctaY }}
              >
                <h2 className="max-w-2xl font-serif text-3xl font-medium leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Experience true smoothness.
                </h2>
                <p className="max-w-lg text-base font-light leading-relaxed text-blue-100/60 sm:text-lg">
                  Lean. Fast. Smooth. A premium partnership from the very first
                  line of code.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <Link
                    href="/#work"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-[#080a16] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(200,210,240,0.15)] sm:w-auto"
                  >
                    View Our Work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-8 py-3.5 font-medium text-white backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/10 hover:border-white/25 sm:w-auto"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]),
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-light tracking-[0.25em] text-blue-200/40 uppercase">
              Scroll to explore
            </span>
            <motion.div
              className="h-8 w-[1px] bg-gradient-to-b from-blue-200/50 to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
