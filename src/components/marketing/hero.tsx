"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Hls from "hls.js";
import { ArrowRight, Sparkles } from "lucide-react";
import { BlurIn } from "@/components/marketing/blur-in";
import { SplitText } from "@/components/marketing/split-text";

export function MarketingHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    const video = videoRef.current;
    const videoSrc =
      "https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
    }
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#070612]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover lg:origin-left lg:scale-[1.2]"
        style={{
          marginLeft: "0px",
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,18,0.78)_0%,rgba(7,6,18,0.56)_18%,rgba(7,6,18,0.72)_100%),radial-gradient(circle_at_75%_40%,rgba(255,255,255,0.14),transparent_22%),linear-gradient(90deg,rgba(7,6,18,0.96)_0%,rgba(7,6,18,0.82)_38%,rgba(7,6,18,0.4)_68%,rgba(7,6,18,0.85)_100%)] sm:bg-[radial-gradient(circle_at_75%_40%,rgba(255,255,255,0.14),transparent_22%),linear-gradient(90deg,rgba(7,6,18,0.96)_0%,rgba(7,6,18,0.82)_38%,rgba(7,6,18,0.4)_68%,rgba(7,6,18,0.85)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-[#070612] to-transparent sm:h-40" />

      <div className="relative z-20 flex min-h-[100svh] items-center pt-20 sm:pt-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
              <BlurIn delay={0} duration={0.6}>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-3 py-2 backdrop-blur-sm sm:px-4">
                  <Sparkles className="h-3 w-3 text-white/80" />
                  <span className="text-xs font-medium text-white/80 sm:text-sm">Premium software partner</span>
                </div>
              </BlurIn>

              <h1 className="max-w-4xl text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.2]">
                <SplitText text="We build software" delay={0} duration={0.6} className="block" />
                <SplitText text="that delivers real" delay={0.24} duration={0.6} className="inline" />{" "}
                <SplitText text="results." delay={0.32} duration={0.6} className="inline font-serif italic" />
              </h1>

              <BlurIn delay={0.4} duration={0.6}>
                <p className="max-w-xl text-sm font-normal leading-relaxed text-white/80 sm:text-base md:text-lg">
                  We help startups and businesses build, fix, and scale their
                  software quickly and reliably.
                </p>
              </BlurIn>
            </div>

            <BlurIn delay={0.6} duration={0.6}>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link
                  href="/#work"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-white/90 sm:w-auto"
                >
                  View Our Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white/20 px-8 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30 sm:w-auto"
                >
                  Contact Us
                </Link>
              </div>
            </BlurIn>
          </div>
        </div>
      </div>
    </section>
  );
}
