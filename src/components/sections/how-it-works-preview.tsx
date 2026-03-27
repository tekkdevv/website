import { Section } from "@/components/ui/section";
import { Search, ClipboardCheck, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    description: "We align on business goals, users, and success metrics.",
    icon: Search
  },
  {
    title: "Planning",
    description: "Roadmap, architecture, and sprint milestones are defined upfront.",
    icon: ClipboardCheck
  },
  {
    title: "Development",
    description: "Senior engineers execute with weekly demos and transparent progress.",
    icon: Code2
  },
  {
    title: "Launch",
    description: "We ship production-ready software and support post-launch growth.",
    icon: Rocket
  }
];

export function HowItWorksPreviewSection() {
  return (
    <Section id="how-it-works">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          How we work with your team
        </h2>
        <p className="mt-4 text-slate-500">
          A straightforward process designed for clarity, momentum, and reliable
          delivery.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:-translate-y-[4px] hover:shadow-lg"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
              <step.icon className="h-5 w-5" />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
              Step {index + 1}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-3 text-base text-slate-500">{step.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
