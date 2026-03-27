"use client";

import { UseFormReturn } from "react-hook-form";
import { motion } from "framer-motion";

const URGENCY_OPTIONS = ["Standard", "Rush", "Emergency"] as const;

const BUDGET_OPTIONS = [
  "< $2k",
  "$2k – $5k",
  "$5k – $10k",
  "$10k – $25k",
  "$25k+"
] as const;

interface TimelineBudgetProps {
  form: UseFormReturn<any>;
}

export function TimelineBudget({ form }: TimelineBudgetProps) {
  return (
    <motion.div
      key="timeline-step"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="space-y-4"
    >
      <div>
        <h2 className="text-sm font-semibold text-foreground sm:text-base">
          Timeline & budget
        </h2>
        <p className="mt-1 text-xs text-muted sm:text-sm">
          A rough sense of urgency and budget helps us scope and match faster.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <p className="text-xs font-medium text-foreground">Urgency</p>
          <div className="flex flex-wrap gap-2">
            {URGENCY_OPTIONS.map((option) => {
              const active = form.watch("urgency") === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() =>
                    form.setValue("urgency", option, { shouldValidate: true })
                  }
                  className={`rounded-full px-3 py-1.5 text-xs font-medium sm:text-sm ${
                    active
                      ? "bg-gradient-to-r from-primary to-accent text-white"
                      : "border border-gray-200 bg-white text-muted hover:border-primary/30"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {form.formState.errors.urgency && (
            <p className="text-xs text-primary">
              {String(form.formState.errors.urgency.message)}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-xs font-medium text-foreground">
            Budget range
            <select
              {...form.register("budget")}
              className="soft-input mt-1.5"
            >
              <option value="">Select a range</option>
              {BUDGET_OPTIONS.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </label>
          {form.formState.errors.budget && (
            <p className="text-xs text-primary">
              {String(form.formState.errors.budget.message)}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

