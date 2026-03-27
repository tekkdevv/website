"use client";

import { motion } from "framer-motion";
import { STATUS_STAGES } from "@/lib/mock-data";
import type { RequestStage } from "@/types/request";
import { cn } from "@/lib/utils";

interface StatusTimelineProps {
  currentStage: RequestStage;
}

export function StatusTimeline({ currentStage }: StatusTimelineProps) {
  const currentIndex = STATUS_STAGES.indexOf(currentStage);

  return (
    <div className="soft-card p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Status timeline
        </p>
        <p className="text-xs text-muted">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />{" "}
          <span className="ml-1 text-foreground">{currentStage}</span>
        </p>
      </div>

      <div className="relative mt-4 flex items-center justify-between gap-2">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-white/80 via-primary/30 to-white/80" />
        <motion.div
          className="absolute left-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: "0%" }}
          animate={{
            width: `${(currentIndex / (STATUS_STAGES.length - 1)) * 100}%`
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        {STATUS_STAGES.map((stage, index) => {
          const isActive = index <= currentIndex;
          return (
            <div
              key={stage}
              className="relative flex flex-1 flex-col items-center gap-2"
            >
              <motion.div
                className={cn(
                  "z-10 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-[10px] font-semibold",
                  isActive
                    ? "border-primary text-primary"
                    : "border-white/70 text-muted"
                )}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.25 }}
              >
                {index + 1}
              </motion.div>
              <p
                className={cn(
                  "text-[10px] uppercase tracking-[0.18em]",
                  isActive ? "text-foreground" : "text-muted"
                )}
              >
                {stage}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

