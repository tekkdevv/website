import type { Metadata } from "next";
import { PricingPageContent } from "@/components/marketing/pricing-page";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for websites, web apps, mobile apps, AI/ML, Chrome extensions, HRMS portals and more. Starting from ₹2,000. Written quotes before work begins.",
  alternates: { canonical: "https://tekdev.in/pricing" },
  openGraph: {
    title: "Pricing | TekDev",
    description: "Transparent pricing for every service. No surprises.",
    url: "https://tekdev.in/pricing",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "TekDev Pricing" }],
  },
};

export default function PricingPage() {
  return <PricingPageContent />;
}
