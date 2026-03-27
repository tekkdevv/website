"use client";

import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { GradientButton } from "@/components/ui/gradient-button";

const projectFormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  company: z.string().min(2, "Please enter your company name."),
  projectType: z.string().min(1, "Please select a project type."),
  techStack: z.string().optional(),
  budgetRange: z.string().min(1, "Please select a budget range."),
  projectDescription: z
    .string()
    .min(20, "Please provide at least 20 characters.")
});

type ProjectFormValues = z.infer<typeof projectFormSchema>;

export function ProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      techStack: "",
      budgetRange: "",
      projectDescription: ""
    }
  });

  const onSubmit = (values: ProjectFormValues) => {
    console.log("Start project form data:", values);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="soft-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            {...register("name")}
            className={inputClass}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            className={inputClass}
            placeholder="you@company.com"
          />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input
            {...register("company")}
            className={inputClass}
            placeholder="Company name"
          />
        </Field>
        <Field label="Project Type" error={errors.projectType?.message}>
          <select {...register("projectType")} className={inputClass}>
            <option value="">Select project type</option>
            <option value="web-app">Web App</option>
            <option value="mobile-app">Mobile App</option>
            <option value="backend-system">Backend System</option>
            <option value="custom-software">Custom Software</option>
          </select>
        </Field>
        <Field label="Tech Stack (Optional)" error={errors.techStack?.message}>
          <input
            {...register("techStack")}
            className={inputClass}
            placeholder="React, Node.js, Flutter..."
          />
        </Field>
        <Field label="Budget Range" error={errors.budgetRange?.message}>
          <select {...register("budgetRange")} className={inputClass}>
            <option value="">Select budget range</option>
            <option value="$10k-$25k">$10k - $25k</option>
            <option value="$25k-$50k">$25k - $50k</option>
            <option value="$50k-$100k">$50k - $100k</option>
            <option value="$100k+">$100k+</option>
          </select>
        </Field>
      </div>

      <Field
        label="Project Description"
        error={errors.projectDescription?.message}
        className="mt-5"
      >
        <textarea
          {...register("projectDescription")}
          rows={6}
          className={inputClass}
          placeholder="Tell us what you are building, goals, timelines, and current challenges."
        />
      </Field>

      <div className="mt-8">
        <GradientButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit Project Details"}
        </GradientButton>
      </div>
    </form>
  );
}

const inputClass =
  "soft-input";

function Field({
  label,
  error,
  children,
  className
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.08em] text-muted">
        {label}
      </span>
      {children}
      {error ? <p className="mt-1 text-xs text-primary">{error}</p> : null}
    </label>
  );
}
