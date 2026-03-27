import Link from "next/link";
import { Section } from "@/components/ui/section";

export function CTASection() {
  return (
    <Section className="pt-8">
      <div className="rounded-3xl border border-gray-200 bg-white px-6 py-14 text-center sm:px-10">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Ready to build your next product?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-500">
          Tell us what you&apos;re building and we&apos;ll help you scope the
          right execution plan.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/start-project"
            className="inline-flex items-center justify-center rounded-full bg-[#FF6A3D] px-8 py-4 text-sm font-medium text-white shadow-md transition hover:opacity-90"
          >
            Start a Project
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-4 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Section>
  );
}
