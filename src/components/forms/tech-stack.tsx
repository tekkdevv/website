"use client";

import { UseFormReturn } from "react-hook-form";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const STACK_OPTIONS = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "Flutter",
  "AWS",
  "Docker"
] as const;

interface TechStackProps {
  form: UseFormReturn<any>;
}

export function TechStackSelection({ form }: TechStackProps) {
  const value = (form.watch("techStack") as string[]) ?? [];

  const toggle = (stack: string) => {
    const set = new Set(value);
    if (set.has(stack)) {
      set.delete(stack);
    } else {
      set.add(stack);
    }
    form.setValue("techStack", Array.from(set), { shouldValidate: true });
  };

  return (
    <motion.div
      key="tech-step"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="space-y-4"
    >
      <div>
        <h2 className="text-sm font-semibold text-foreground sm:text-base">
          What stack are you using?
        </h2>
        <p className="mt-1 text-xs text-muted sm:text-sm">
          Select all technologies that are relevant to this request.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {STACK_OPTIONS.map((stack) => {
          const active = value.includes(stack);
          return (
            <button
              key={stack}
              type="button"
              onClick={() => toggle(stack)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition sm:text-sm",
                active
                  ? "border-primary/60 bg-accent/20 text-primary"
                  : "border-gray-200 bg-white text-muted hover:border-primary/30"
              )}
            >
              {stack}
            </button>
          );
        })}
      </div>
      {form.formState.errors.techStack && (
        <p className="text-xs text-primary">
          {String(form.formState.errors.techStack.message)}
        </p>
      )}
    </motion.div>
  );
}

