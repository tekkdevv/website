"use client";

import type { FilePreview } from "@/types/request";
import { motion } from "framer-motion";
import { FileText, ImageIcon, Video, FileCode } from "lucide-react";

interface PreviewPanelProps {
  files: FilePreview[];
}

function getIconForType(type: string) {
  if (type.startsWith("image/")) return ImageIcon;
  if (type.startsWith("video/")) return Video;
  if (type.includes("text") || type.includes("log")) return FileText;
  return FileCode;
}

export function PreviewPanel({ files }: PreviewPanelProps) {
  return (
    <div className="soft-card p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Attachments
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {files.map((file, index) => {
          const Icon = getIconForType(file.type);
          return (
            <motion.div
              key={file.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05, duration: 0.25 }}
              className="flex flex-col rounded-xl border border-gray-200 bg-white px-3 py-3 text-left"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-[11px] text-muted">{file.size}</span>
              </div>
              <p className="mt-2 line-clamp-2 text-xs font-medium text-foreground">
                {file.name}
              </p>
              <p className="mt-1 text-[11px] text-muted">{file.type}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

