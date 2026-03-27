"use client";

import { motion } from "framer-motion";

type SplitTextProps = {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
};

export function SplitText({
  text,
  delay = 0,
  duration = 0.6,
  className = "",
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * 0.08,
            duration,
            ease: "easeOut",
          }}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
