import { CaseStudy } from "@/components/projects/case-study";
import { Section } from "@/components/ui/section";
import { projects } from "@/lib/projects-data";

export default function ProjectsPage() {
  return (
    <Section>
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Project Case Studies
        </h1>
        <p className="mt-4 text-muted">
          A snapshot of how TekDev solves real product and engineering problems
          for growing companies.
        </p>
      </header>

      <div className="mt-12 space-y-8">
        {projects.map((project) => (
          <CaseStudy key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
