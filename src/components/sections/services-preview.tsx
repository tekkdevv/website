"use client";

import { Globe, Smartphone, Server, Waypoints, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const services = [
  {
    title: "Web Development",
    icon: Globe,
    bullets: ["Next.js applications", "React component systems", "Performance optimization"]
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    bullets: ["Flutter cross-platform apps", "Native-grade UX polish", "Offline and sync workflows"]
  },
  {
    title: "Backend Systems",
    icon: Server,
    bullets: ["Scalable architecture", "Cloud deployments", "Monitoring and reliability"]
  },
  {
    title: "API Development",
    icon: Waypoints,
    bullets: ["REST and realtime APIs", "API contracts and docs", "Integrations and auth"]
  },
  {
    title: "Performance Optimization",
    icon: Gauge,
    bullets: ["Core Web Vitals improvement", "Rendering and caching tuning", "Bundle size reduction"]
  }
];

export function ServicesPreviewSection() {
  return (
    <Section id="services">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Services built for ambitious product teams
        </h2>
        <p className="mt-4 text-slate-500">
          TekkDevv works as an extension of your team to deliver high-impact
          engineering across web, mobile, and backend systems.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:-translate-y-[4px] hover:shadow-lg"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6A3D]/10 text-[#FF6A3D]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
