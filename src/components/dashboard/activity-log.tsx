"use client";

import { motion } from "framer-motion";
import type { ActivityLogItem } from "@/types/request";
import { Clock } from "lucide-react";

interface ActivityLogProps {
  items: ActivityLogItem[];
}

export function ActivityLog({ items }: ActivityLogProps) {
  return (
    <div className="soft-card p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Activity log
        </p>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => {
          const date = new Date(item.timestamp);
          const formatted = date.toLocaleString(undefined, {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          });
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.04, duration: 0.2 }}
              className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2.5"
            >
              <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Clock className="h-3.5 w-3.5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-foreground sm:text-sm">
                  {item.label}
                </p>
                <p className="text-[11px] text-muted">{formatted}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

