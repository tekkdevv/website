import type { Metadata } from "next";
import { PricingPageContent } from "@/components/marketing/pricing-page";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for websites, web apps, mobile apps, AI/ML, Chrome extensions, HRMS portals and more. Starting from ₹2,000. Written quotes before work begins.",
  alternates: { canonical: "https://tekkdevv.com/pricing" },
  openGraph: {
    title: "Pricing | TekkDevv",
    description: "Transparent pricing for every service. No surprises.",
    url: "https://tekkdevv.com/pricing",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "TekkDevv Pricing" }],
  },
};

export default function PricingPage() {
  return <PricingPageContent />;
}
