"use client";

import { UseFormReturn } from "react-hook-form";
import { motion } from "framer-motion";

interface ProjectDetailsProps {
  form: UseFormReturn<any>;
}

export function ProjectDetails({ form }: ProjectDetailsProps) {
  return (
    <motion.div
      key="details-step"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="space-y-4"
    >
      <div>
        <h2 className="text-sm font-semibold text-foreground sm:text-base">
          Tell us about the project
        </h2>
        <p className="mt-1 text-xs text-muted sm:text-sm">
          Share enough context for a senior engineer to understand what “done”
          looks like.
        </p>
      </div>
      <div className="space-y-3">
        <label className="block text-xs font-medium text-foreground">
          Project title
          <input
            {...form.register("title")}
            placeholder="e.g. Stabilize checkout flow on mobile web"
            className="soft-input mt-1.5"
          />
        </label>
        {form.formState.errors.title && (
          <p className="text-xs text-primary">
            {String(form.formState.errors.title.message)}
          </p>
        )}
        <label className="block text-xs font-medium text-foreground">
          Project description
          <textarea
            {...form.register("description")}
            rows={4}
            placeholder="What’s broken or what do you want to ship? Include links to relevant repos, environments, or docs."
            className="soft-input mt-1.5"
          />
        </label>
        {form.formState.errors.description && (
          <p className="text-xs text-primary">
            {String(form.formState.errors.description.message)}
          </p>
        )}
        <label className="block text-xs font-medium text-foreground">
          Expected outcome
          <textarea
            {...form.register("outcome")}
            rows={3}
            placeholder="How will we know this request is successful?"
            className="soft-input mt-1.5"
          />
        </label>
        {form.formState.errors.outcome && (
          <p className="text-xs text-primary">
            {String(form.formState.errors.outcome.message)}
          </p>
        )}
      </div>
    </motion.div>
  );
}

