import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  getShowcaseProjectById,
  showcaseProjects,
} from "@/lib/showcase-projects";

export function generateStaticParams() {
  return showcaseProjects.map((project) => ({
    id: String(project.id),
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = getShowcaseProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <section className="bg-[#09090a] px-6 py-16 text-white lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[#b2b7c0] transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d5b06a]">
              Project {project.id}
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-3 text-xl text-[#c5cad3]">{project.subtitle}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#aab1bc]">
              {project.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Premium UI", "Motion-first", "Launch-ready", "Conversion-led"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#e5e7eb]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#111214] p-7">
            <p className="text-sm uppercase tracking-[0.22em] text-[#8d929b]">
              Outcome
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8d929b]">
                  Positioning
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  High-trust launch presence
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8d929b]">
                  Focus
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  Clearer conversion path
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#efe4cf] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-white"
            >
              Start a similar project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[32px] border border-white/10 bg-[#111214]">
          <div className="relative aspect-[16/9]">
            <Image
              src={project.image}
              alt={`${project.title} showcase image`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
