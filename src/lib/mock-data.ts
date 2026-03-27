import { RequestSummary, RequestStage } from "@/types/request";

export const STATUS_STAGES: RequestStage[] = [
  "Submitted",
  "Reviewing",
  "Quoted",
  "Paid",
  "In Progress",
  "QA",
  "Ready",
  "Delivered"
];

export const mockRequests: RequestSummary[] = [
  {
    id: "TD-4821",
    title: "Fix checkout race condition in Next.js storefront",
    status: "In Progress",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "AWS"],
    urgency: "Rush",
    submittedAt: "2026-03-12T10:12:00.000Z",
    assignedExpert: "Samir Patel",
    estimatedCompletion: "2026-03-18T18:00:00.000Z",
    timelineStage: "In Progress",
    activity: [
      {
        id: "1",
        label: "Request submitted",
        timestamp: "2026-03-12T10:12:00.000Z"
      },
      {
        id: "2",
        label: "Quote created and shared",
        timestamp: "2026-03-12T15:45:00.000Z"
      },
      {
        id: "3",
        label: "Payment received",
        timestamp: "2026-03-13T09:05:00.000Z"
      },
      {
        id: "4",
        label: "Development started",
        timestamp: "2026-03-13T11:22:00.000Z"
      },
      {
        id: "5",
        label: "Reproduced issue in staging",
        timestamp: "2026-03-14T08:10:00.000Z"
      }
    ],
    files: [
      {
        id: "f1",
        name: "checkout-flow-recording.mp4",
        type: "video/mp4",
        size: "18.4 MB"
      },
      {
        id: "f2",
        name: "error-logs-2026-03-11.txt",
        type: "text/plain",
        size: "240 KB"
      },
      {
        id: "f3",
        name: "checkout-sequence-diagram.png",
        type: "image/png",
        size: "1.9 MB"
      }
    ]
  }
];

export function getRequestById(id: string): RequestSummary | undefined {
  return mockRequests.find((req) => req.id.toLowerCase() === id.toLowerCase());
}

