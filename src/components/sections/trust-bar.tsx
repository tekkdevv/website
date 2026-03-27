"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Atom, Box, Cloud, Server, Code2, Smartphone } from "lucide-react";

const logos = [
  { label: "React", icon: Atom },
  { label: "Next.js", icon: Box },
  { label: "Node.js", icon: Server },
  { label: "AWS", icon: Cloud },
  { label: "Python", icon: Code2 },
  { label: "Flutter", icon: Smartphone }
];

export function TrustBar() {
  return (
    <Section className="pt-0">
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="text-sm font-medium text-muted">
          Trusted by product teams worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {logos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <motion.span
                key={logo.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.05 * index, duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-slate-500"
              >
                <Icon className="h-4 w-4 text-slate-400" />
                <span className="font-medium">{logo.label}</span>
              </motion.span>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

