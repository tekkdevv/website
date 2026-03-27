import Link from "next/link";
import { Section } from "@/components/ui/section";
import { projects } from "@/lib/projects-data";
import { ProjectCard } from "@/components/projects/project-card";

export function ProjectsPreviewSection() {
  return (
    <Section id="projects">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Proof of work from recent client projects
        </h2>
        <p className="mt-4 text-slate-500">
          Real project outcomes across product engineering, mobile delivery, and
          backend modernization.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:border-gray-400"
        >
          Explore all case studies
        </Link>
      </div>
    </Section>
  );
}
