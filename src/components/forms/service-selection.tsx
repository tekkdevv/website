"use client";

import { UseFormReturn } from "react-hook-form";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  "Bug Fix",
  "Feature Development",
  "Optimization",
  "Full Project",
  "Code Review"
] as const;

export type ServiceType = (typeof SERVICE_OPTIONS)[number];

interface ServiceSelectionProps {
  form: UseFormReturn<any>;
}

export function ServiceSelection({ form }: ServiceSelectionProps) {
  const value = form.watch("serviceType") as ServiceType | undefined;

  return (
    <motion.div
      key="service-step"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="space-y-4"
    >
      <div>
        <h2 className="text-sm font-semibold text-foreground sm:text-base">
          What do you need help with?
        </h2>
        <p className="mt-1 text-xs text-muted sm:text-sm">
          Choose the request type that best describes your work.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {SERVICE_OPTIONS.map((option) => {
          const isActive = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => form.setValue("serviceType", option, { shouldValidate: true })}
              className={cn(
                "flex items-start gap-2 rounded-2xl border px-3 py-3 text-left text-xs sm:text-sm",
                isActive
                  ? "border-primary/60 bg-primary/15 text-foreground"
                  : "border-gray-200 bg-white text-muted hover:border-primary/30"
              )}
            >
              <span
                className={cn(
                  "mt-0.5 h-2 w-2 rounded-full",
                  isActive ? "bg-primary" : "bg-muted/60"
                )}
              />
              <span>{option}</span>
            </button>
          );
        })}
      </div>
      {form.formState.errors.serviceType && (
        <p className="text-xs text-primary">
          {String(form.formState.errors.serviceType.message)}
        </p>
      )}
    </motion.div>
  );
}

