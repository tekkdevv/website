"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { getRequestById } from "@/lib/mock-data";
import { StatusTimeline } from "@/components/dashboard/status-timeline";
import { ActivityLog } from "@/components/dashboard/activity-log";
import { RequestSummary } from "@/components/dashboard/request-summary";
import { PreviewPanel } from "@/components/dashboard/preview-panel";
import Container from "@/components/ui/container";

export default function TrackDetailPage() {
  const params = useParams();
  const idParam = params?.id;
  const id = typeof idParam === "string" ? idParam : Array.isArray(idParam) ? idParam[0] : "";

  const request = useMemo(() => (id ? getRequestById(id) : undefined), [id]);

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted">
                Request dashboard
              </p>
              <h1 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {request ? request.title : "Request not found"}
              </h1>
              <p className="mt-2 text-xs text-muted sm:text-sm">
                ID:{" "}
                <span className="font-mono text-foreground">
                  {id || "—"}
                </span>
              </p>
            </div>
            {request && (
              <div className="soft-card px-4 py-3 text-xs text-foreground sm:text-sm">
                <p>
                  <span className="text-muted">Assigned expert:</span>{" "}
                  <span className="font-medium text-foreground">
                    {request.assignedExpert}
                  </span>
                </p>
                <p className="mt-1">
                  <span className="text-muted">Estimated completion:</span>{" "}
                  <span className="font-medium text-foreground">
                    {new Date(request.estimatedCompletion).toLocaleString()}
                  </span>
                </p>
              </div>
            )}
          </header>

          {!request ? (
            <div className="soft-card p-6 text-sm text-muted">
              We couldn&apos;t find a request with that ID. Double-check the
              identifier (e.g. <span className="font-mono">TD-4821</span>) and
              try again.
            </div>
          ) : (
            <div className="space-y-6">
              <StatusTimeline currentStage={request.timelineStage} />
              <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
                <div className="space-y-6">
                  <RequestSummary request={request} />
                  <ActivityLog items={request.activity} />
                </div>
                <PreviewPanel files={request.files} />
              </div>
            </div>
          )}
        </motion.div>
      </Container>
    </div>
  );
}

