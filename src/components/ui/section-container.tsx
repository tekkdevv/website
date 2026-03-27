"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/container";

type SectionContainerProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  delay?: number;
};

export function SectionContainer({
  id,
  className,
  children,
  delay = 0.1
}: SectionContainerProps) {
  return (
    <section id={id} className={`py-24 ${className ?? ""}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay }}
          className="relative"
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}

