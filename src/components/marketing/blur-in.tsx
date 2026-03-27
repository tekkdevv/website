"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type BlurInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

export function BlurIn({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: BlurInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
