import type { Metadata } from "next";
import { ProcessPageContent } from "@/components/marketing/process-page";

export const metadata: Metadata = {
  title: "Our Process",
  description: "How TekDev works — written scope before every project, regular check-ins, documented change management, clean delivery, and 2 months of post-launch support included.",
  alternates: { canonical: "https://tekdev.in/process" },
  openGraph: {
    title: "Our Process | TekDev",
    description: "How we work — no surprises. Written scope, clean delivery, post-launch support.",
    url: "https://tekdev.in/process",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "TekDev Process" }],
  },
};

export default function ProcessPage() {
  return <ProcessPageContent />;
}
