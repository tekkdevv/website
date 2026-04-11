"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/container";

export default function TrackPage() {
  const router = useRouter();
  const [requestId, setRequestId] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = requestId.trim();
    if (!trimmed) return;
    router.push(`/track/${encodeURIComponent(trimmed)}`);
  };

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-xl space-y-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted">
              Track request
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Check your TekkDevv request status
            </h1>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Paste your request ID to view a live status timeline, activity log,
              and attached files.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="soft-card p-5"
          >
            <label className="block text-xs font-medium text-foreground">
              Request ID
              <input
                value={requestId}
                onChange={(e) => setRequestId(e.target.value)}
                placeholder="e.g. TD-4821"
                className="soft-input mt-2"
              />
            </label>
            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-sm font-medium text-white shadow-lg transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
            >
              Track Request
            </button>
          </form>
        </motion.div>
      </Container>
    </div>
  );
}

