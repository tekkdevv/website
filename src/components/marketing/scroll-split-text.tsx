"use client";

import { motion } from "framer-motion";

type ScrollSplitTextProps = {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
};

export function ScrollSplitText({
  text,
  delay = 0,
  duration = 0.8,
  className = "",
  once = true,
}: ScrollSplitTextProps) {
  const words = text.split(" ");

  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="relative inline-block overflow-hidden pb-[0.1em]">
          <motion.span
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once }}
            transition={{
              delay: delay + index * 0.05,
              duration,
              ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
            }}
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
