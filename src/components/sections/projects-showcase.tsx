"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { showcaseProjects, type ShowcaseProject } from "@/lib/showcase-projects";

type CardConfig = {
  rotate: number;
  desktopX: string;
  desktopY: string;
  zIndex: number;
};

const cardConfigs: CardConfig[] = [
  {
    rotate: -8,
    desktopX: "clamp(-20rem, -19vw, -12rem)",
    desktopY: "clamp(-11rem, -10vw, -6.5rem)",
    zIndex: 1,
  },
  {
    rotate: 6,
    desktopX: "clamp(12rem, 19vw, 20rem)",
    desktopY: "clamp(-11rem, -10vw, -6.5rem)",
    zIndex: 2,
  },
  {
    rotate: -4,
    desktopX: "clamp(-20rem, -19vw, -12rem)",
    desktopY: "clamp(6.5rem, 10vw, 11rem)",
    zIndex: 3,
  },
  {
    rotate: 8,
    desktopX: "clamp(12rem, 19vw, 20rem)",
    desktopY: "clamp(6.5rem, 10vw, 11rem)",
    zIndex: 4,
  },
];

function ShowcaseCard({
  project,
  progress,
  config,
}: {
  project: ShowcaseProject;
  progress: MotionValue<number>;
  config: CardConfig;
}) {
  const translateX = useSpring(
    useTransform(progress, [0, 1], ["0px", config.desktopX]),
    { stiffness: 120, damping: 22, mass: 0.35 }
  );
  const translateY = useSpring(
    useTransform(progress, [0, 1], ["0px", config.desktopY]),
    { stiffness: 120, damping: 22, mass: 0.35 }
  );
  const scale = useSpring(useTransform(progress, [0, 1], [0.8, 1]), {
    stiffness: 120,
    damping: 22,
    mass: 0.35,
  });
  const rotate = useSpring(useTransform(progress, [0, 1], [config.rotate, 0]), {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });
  const opacity = useTransform(progress, [0, 0.2, 1], [1, 1, 1]);
  const imageY = useTransform(progress, [0, 1], ["-3%", "3%"]);
  const blur = useTransform(progress, [0, 0.28, 1], [10, 2, 0]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <motion.div
      style={{
        x: translateX,
        y: translateY,
        scale,
        rotate,
        opacity,
        zIndex: config.zIndex,
        willChange: "transform",
      }}
      className="absolute left-1/2 top-1/2 hidden w-[clamp(260px,32vw,520px)] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-2xl md:block"
    >
      <Link href={`/projects/${project.id}`} className="block">
        <motion.article
          whileHover={{
            scale: 1.05,
            y: -8,
            boxShadow: "0 34px 90px rgba(0, 0, 0, 0.28)",
          }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-2xl border border-black/10 bg-[#f3f0ea] shadow-lg"
        >
          <div className="relative aspect-[1.28/1] overflow-hidden">
            <motion.div style={{ y: imageY, filter }} className="absolute inset-0">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                priority={project.id <= 2}
                className="object-cover"
                sizes="(max-width: 1280px) 42vw, 34rem"
              />
            </motion.div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.05)_38%,rgba(0,0,0,0.72)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{project.title}</h3>
                <p className="mt-1 text-sm text-white/70">{project.subtitle}</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/16 px-4 py-2 text-sm font-medium backdrop-blur-md transition group-hover:bg-white/22">
                View Project
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}

function MobileProjectCard({ project }: { project: ShowcaseProject }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="md:hidden"
    >
      <Link href={`/projects/${project.id}`} className="block">
        <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#111214] shadow-lg">
          <div className="relative aspect-[1.15/1]">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.12)_45%,rgba(0,0,0,0.84)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <h3 className="text-xl font-semibold tracking-[-0.03em]">{project.title}</h3>
              <p className="mt-1 text-sm text-white/70">{project.subtitle}</p>
              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-medium">
                View Project
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export function ProjectsShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.12, 0.22], [1, 1, 0.3]);
  const titleY = useTransform(scrollYProgress, [0, 0.25], [0, -40]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.12, 1], [1, 1, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[240vh] bg-[#f2efe8] text-[#171717]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col px-6 lg:px-10">
          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="pointer-events-none mx-auto max-w-3xl pt-8 text-center md:pt-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7f7a72]">
              Project Showcase
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#121212] md:text-6xl">
              Scroll through a premium stack that opens into the work.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5d5a55] md:text-lg">
              Cards begin layered in the center, then glide into a balanced grid with
              depth, rotation, blur-to-sharp polish, and subtle image parallax.
            </p>
          </motion.div>

          <div className="relative hidden flex-1 items-center justify-center md:flex">
            <div className="relative h-[min(68vh,760px)] w-full max-w-[1120px]">
              <motion.div style={{ opacity: gridOpacity }} className="absolute inset-0">
                {showcaseProjects.map((project, index) => (
                  <ShowcaseCard
                    key={project.id}
                    project={project}
                    progress={scrollYProgress}
                    config={cardConfigs[index]}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 pb-12 md:hidden">
            {showcaseProjects.map((project) => (
              <MobileProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
