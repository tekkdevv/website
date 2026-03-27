"use client";

import { motion } from "framer-motion";
import { MultiStepForm } from "@/components/forms/multi-step-form";
import Container from "@/components/ui/container";

export default function SubmitPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <MultiStepForm />
        </motion.div>
      </Container>
    </div>
  );
}

