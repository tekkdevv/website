"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceSelection } from "@/components/forms/service-selection";
import { TechStackSelection } from "@/components/forms/tech-stack";
import { ProjectDetails } from "@/components/forms/project-details";
import { FileUpload } from "@/components/forms/file-upload";
import { TimelineBudget } from "@/components/forms/timeline-budget";
import { ContactInfo } from "@/components/forms/contact-info";

const formSchema = z.object({
  serviceType: z.string().min(1, "Select a service type."),
  techStack: z.array(z.string()).min(1, "Select at least one technology."),
  title: z.string().min(4, "Add a short project title."),
  description: z.string().min(10, "Share a bit more context."),
  outcome: z.string().min(5, "Describe the desired outcome."),
  files: z.any().optional(),
  urgency: z.enum(["Standard", "Rush", "Emergency"], {
    required_error: "Select an urgency level."
  }),
  budget: z.string().min(1, "Select a budget range."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Enter a valid email."),
  phone: z.string().optional(),
  company: z.string().optional()
});

export type SubmitRequestFormValues = z.infer<typeof formSchema>;

const steps = [
  "Service Type",
  "Tech Stack",
  "Project Details",
  "Files",
  "Timeline & Budget",
  "Contact"
] as const;

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<SubmitRequestFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: "",
      techStack: [],
      title: "",
      description: "",
      outcome: "",
      files: [],
      urgency: "Standard",
      budget: "",
      email: "",
      phone: "",
      company: ""
    },
    mode: "onBlur"
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof SubmitRequestFormValues)[] = [];
    if (currentStep === 0) fieldsToValidate = ["serviceType"];
    if (currentStep === 1) fieldsToValidate = ["techStack"];
    if (currentStep === 2) fieldsToValidate = ["title", "description", "outcome"];
    if (currentStep === 3) fieldsToValidate = [];
    if (currentStep === 4) fieldsToValidate = ["urgency", "budget"];
    if (currentStep === 5) fieldsToValidate = ["email"];

    if (fieldsToValidate.length) {
      const valid = await form.trigger(fieldsToValidate);
      if (!valid) return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit: SubmitHandler<SubmitRequestFormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log("TekkDevv submit request:", data);
    setSubmitted(true);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted">
          Submit a request
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Share what you need shipped
        </h1>
        <p className="text-sm text-muted sm:text-base">
          A short, focused brief is all we need to match you with the right
          expert.
        </p>
      </div>

      <div className="soft-card mb-5 p-4">
        <div className="flex items-center justify-between text-xs text-muted">
          <span>
            Step {currentStep + 1} of {steps.length}
          </span>
          <span>{steps[currentStep]}</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-200">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="soft-card space-y-5 p-5"
      >
        <AnimatePresence mode="wait">
          {currentStep === 0 && <ServiceSelection key="step-0" form={form} />}
          {currentStep === 1 && <TechStackSelection key="step-1" form={form} />}
          {currentStep === 2 && <ProjectDetails key="step-2" form={form} />}
          {currentStep === 3 && <FileUpload key="step-3" form={form} />}
          {currentStep === 4 && <TimelineBudget key="step-4" form={form} />}
          {currentStep === 5 && <ContactInfo key="step-5" form={form} />}
        </AnimatePresence>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-foreground transition hover:border-primary/40 sm:text-sm"
              >
                Back
              </button>
            )}
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              type={currentStep === steps.length - 1 ? "submit" : "button"}
              onClick={currentStep === steps.length - 1 ? undefined : nextStep}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-xs font-medium text-white shadow-lg transition hover:shadow-xl sm:text-sm"
            >
              {currentStep === steps.length - 1 ? "Submit Request" : "Next"}
            </button>
            {submitted && (
              <p className="text-[11px] text-primary sm:text-xs">
                Request captured – check the console for mocked payload.
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

