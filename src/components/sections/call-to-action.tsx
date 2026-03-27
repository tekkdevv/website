"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { GradientButton } from "@/components/ui/gradient-button";
import Link from "next/link";

export function FinalCTASection() {
  return (
    <SectionContainer>
      <div className="soft-card relative overflow-hidden px-6 py-10 text-center sm:px-10 sm:py-14">
        <div className="soft-glow-lavender pointer-events-none absolute inset-0 mx-auto h-72 w-72 rounded-full opacity-70" />
        <div className="relative mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
            Ready to ship
          </p>
          <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Ready to ship your code faster?
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">
            Submit your first request and we&apos;ll match you with an expert in
            your stack, usually in under one business day.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/submit">
              <GradientButton className="px-7 py-2.5 text-sm">
                Submit Your Request
              </GradientButton>
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

