"use client";

import { UseFormReturn } from "react-hook-form";
import { motion } from "framer-motion";
import { ChangeEvent, DragEvent, useState } from "react";
import { Paperclip } from "lucide-react";

interface FileUploadProps {
  form: UseFormReturn<any>;
}

export function FileUpload({ form }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const files: File[] = form.watch("files") || [];

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const next = Array.from(fileList);
    form.setValue("files", next, { shouldValidate: true });
  };

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    handleFiles(event.dataTransfer.files);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFiles(event.target.files);
  };

  return (
    <motion.div
      key="files-step"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="space-y-4"
    >
      <div>
        <h2 className="text-sm font-semibold text-foreground sm:text-base">
          Share any helpful files
        </h2>
        <p className="mt-1 text-xs text-muted sm:text-sm">
          Logs, screenshots, recordings, or docs that give extra context.
        </p>
      </div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDragging(false);
        }}
        onDrop={onDrop}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-4 py-10 text-center ${
          isDragging
            ? "border-primary/60 bg-accent/15"
            : "border-gray-300 bg-white hover:border-primary/40"
        }`}
      >
        <Paperclip className="h-6 w-6 text-primary" />
        <p className="mt-2 text-xs font-medium text-foreground sm:text-sm">
          Drag and drop files here
        </p>
        <p className="mt-1 text-[11px] text-muted">
          or click to browse from your device
        </p>
        <input
          type="file"
          multiple
          onChange={onChange}
          className="mt-4 block text-xs text-muted"
        />
      </div>
      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-medium text-foreground">
            {files.length} file{files.length > 1 ? "s" : ""} selected
          </p>
          <ul className="space-y-1.5 text-[11px] text-muted">
            {files.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-1.5"
              >
                <span className="truncate">{file.name}</span>
                <span className="ml-3 text-muted/80">
                  {(file.size / 1024).toFixed(1)} KB
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}

