import type { Project } from "@/lib/projects-data";

type CaseStudyProps = {
  project: Project;
};

export function CaseStudy({ project }: CaseStudyProps) {
  return (
    <article
      id={project.slug}
      className="soft-card scroll-mt-28 p-8"
    >
      <h2 className="text-2xl font-semibold text-foreground">{project.name}</h2>
      <p className="mt-3 text-muted">{project.summary}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Client problem
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.clientProblem}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Solution built
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.solution}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Tech stack
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="soft-chip">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Results achieved
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {project.results.map((result) => (
            <li key={result} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
