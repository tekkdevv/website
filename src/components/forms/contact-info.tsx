"use client";

import { UseFormReturn } from "react-hook-form";
import { motion } from "framer-motion";

interface ContactInfoProps {
  form: UseFormReturn<any>;
}

export function ContactInfo({ form }: ContactInfoProps) {
  return (
    <motion.div
      key="contact-step"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="space-y-4"
    >
      <div>
        <h2 className="text-sm font-semibold text-foreground sm:text-base">
          How can we reach you?
        </h2>
        <p className="mt-1 text-xs text-muted sm:text-sm">
          We&apos;ll send your quote, questions, and status updates here.
        </p>
      </div>
      <div className="space-y-3">
        <label className="block text-xs font-medium text-foreground">
          Work email
          <input
            {...form.register("email")}
            type="email"
            placeholder="you@company.com"
            className="soft-input mt-1.5"
          />
        </label>
        {form.formState.errors.email && (
          <p className="text-xs text-primary">
            {String(form.formState.errors.email.message)}
          </p>
        )}
        <label className="block text-xs font-medium text-foreground">
          Phone (optional)
          <input
            {...form.register("phone")}
            type="tel"
            placeholder="+1 555 000 0000"
            className="soft-input mt-1.5"
          />
        </label>
        <label className="block text-xs font-medium text-foreground">
          Company (optional)
          <input
            {...form.register("company")}
            placeholder="e.g. Relay"
            className="soft-input mt-1.5"
          />
        </label>
      </div>
    </motion.div>
  );
}

