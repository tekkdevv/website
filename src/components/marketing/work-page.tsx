"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MarketingNavigation } from "@/components/marketing/navigation";
import { MarketingFooter } from "@/components/marketing/footer";
import { CosmicBackground } from "@/components/marketing/home-sections";

const projects = [
  {
    title: "CyberSecurity Train",
    category: "Cybersecurity Learning Platform",
    description:
      "A full-featured cybersecurity training platform built for learners and professionals. Clean UX, structured courses, and fast load times — built from scratch on modern stack.",
    image: "/images/project-cst.jpg",
    url: "https://www.cybersecuritytrain.com/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "The Cyber Seal",
    category: "Cybersecurity Agency",
    description:
      "A premium agency website for a cybersecurity firm. Motion-forward design, strong brand identity, and conversion-optimised layout to establish authority in a competitive space.",
    image: "/images/project-cyberseal.jpg",
    url: "https://www.thecyberseal.com/",
    tech: ["React", "Tailwind CSS", "Motion Design"],
  },
  {
    title: "Fresh Coconuts",
    category: "Local Vendor Web Presence",
    description:
      "A crisp, mobile-first storefront for a local coconut vendor. Proof that good design doesn't require enterprise budgets — every project gets the same care.",
    image: "/images/project-coconut.jpg",
    url: "https://coconut-beta.vercel.app/",
    tech: ["React", "Tailwind CSS", "Vercel"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export function WorkPageContent() {
  return (
    <div className="relative min-h-screen bg-[hsl(201,100%,8%)]">
      <CosmicBackground />
      <MarketingNavigation />

      {/* Hero */}
      <section className="relative z-10 pt-40 pb-20 sm:pt-48 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="liquid-glass inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-foreground/80 mb-6">
              Portfolio
            </span>
            <h1
              className="text-4xl font-normal text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Every project.{" "}
              <span className="text-foreground/50">Built to last.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We take on any scale — from local vendor sites to enterprise
              platforms. No bias, no shortcuts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="relative z-10 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-16">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden"
              >
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  <div className="ml-3 flex-1 rounded-md bg-white/[0.05] px-3 py-1 text-xs text-muted-foreground truncate max-w-xs">
                    {project.url.replace("https://", "")}
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/[0.02]">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        {project.category}
                      </p>
                      <h2
                        className="text-2xl font-normal text-foreground sm:text-3xl"
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                      >
                        {project.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base max-w-2xl">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-foreground/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="sm:ml-6 sm:flex-shrink-0">
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="liquid-glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03]"
                      >
                        Visit Live Site
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 border-t border-white/[0.06] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 text-center">
          <motion.div {...fadeUp}>
            <h2
              className="text-3xl font-normal text-foreground sm:text-4xl md:text-5xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Got a project in mind?
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Tell us what you need — web, mobile, AI, or anything in between.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="liquid-glass inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm text-foreground transition-transform hover:scale-[1.03]"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
