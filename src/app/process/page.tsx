import type { Metadata } from "next";
import { ProcessPageContent } from "@/components/marketing/process-page";

export const metadata: Metadata = {
  title: "Our Process",
  description: "How TekkDevv works — written scope before every project, regular check-ins, documented change management, clean delivery, and 2 months of post-launch support included.",
  alternates: { canonical: "https://tekkdevv.com/process" },
  openGraph: {
    title: "Our Process | TekkDevv",
    description: "How we work — no surprises. Written scope, clean delivery, post-launch support.",
    url: "https://tekkdevv.com/process",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "TekkDevv Process" }],
  },
};

export default function ProcessPage() {
  return <ProcessPageContent />;
}
