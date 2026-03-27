"use client";

import type { RequestSummary as RequestSummaryType } from "@/types/request";
import { CalendarDays, Flame, Layers } from "lucide-react";

interface RequestSummaryProps {
  request: RequestSummaryType;
}

export function RequestSummary({ request }: RequestSummaryProps) {
  const submitted = new Date(request.submittedAt).toLocaleDateString(
    undefined,
    {
      month: "short",
      day: "numeric",
      year: "numeric"
    }
  );

  return (
    <div className="soft-card p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Request summary
        </p>
      </div>
      <div className="space-y-3 text-sm text-foreground">
        <p className="font-semibold text-foreground">{request.title}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          {request.techStack.map((stack) => (
            <span key={stack} className="soft-chip px-2 py-1 text-[11px]">
              {stack}
            </span>
          ))}
        </div>
        <div className="grid gap-3 text-xs text-muted sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary" />
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted/80">
                Submitted
              </p>
              <p>{submitted}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="h-4 w-4 text-primary" />
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted/80">
                Urgency
              </p>
              <p>{request.urgency}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary" />
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted/80">
                Status
              </p>
              <p>{request.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

