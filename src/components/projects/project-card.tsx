"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects-data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-[4px] hover:shadow-lg"
    >
      <div className="mb-5 h-36 rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
          Case Study
        </p>
        <p className="mt-2 text-sm font-medium text-slate-900">{project.name}</p>
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">{project.summary}</p>
      <div className="mt-5 space-y-3 text-sm">
        <p className="text-slate-600">
          <span className="font-semibold text-slate-900">Problem:</span>{" "}
          {project.clientProblem}
        </p>
        <p className="text-slate-600">
          <span className="font-semibold text-slate-900">Solution:</span>{" "}
          {project.solution}
        </p>
        <p className="text-slate-600">
          <span className="font-semibold text-slate-900">Result:</span>{" "}
          {project.results[0]}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-slate-600"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={`/projects#${project.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#FF6A3D] transition hover:opacity-80"
      >
        View Case Study <ArrowUpRight className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}
