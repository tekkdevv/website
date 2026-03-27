"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GradientButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  asChild?: boolean;
};

export function GradientButton({
  children,
  className,
  ...props
}: GradientButtonProps) {
  return (
    <motion.span
      whileHover={{ y: -1, scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex"
    >
      <button
        type={props.type ?? "button"}
        {...props}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-md transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60",
          className
        )}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    </motion.span>
  );
}

