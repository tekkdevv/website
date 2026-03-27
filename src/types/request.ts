export type RequestStage =
  | "Submitted"
  | "Reviewing"
  | "Quoted"
  | "Paid"
  | "In Progress"
  | "QA"
  | "Ready"
  | "Delivered";

export interface ActivityLogItem {
  id: string;
  label: string;
  timestamp: string;
}

export interface FilePreview {
  id: string;
  name: string;
  type: string;
  size: string;
}

export interface RequestSummary {
  id: string;
  title: string;
  status: RequestStage;
  techStack: string[];
  urgency: "Standard" | "Rush" | "Emergency";
  submittedAt: string;
  assignedExpert: string;
  estimatedCompletion: string;
  timelineStage: RequestStage;
  activity: ActivityLogItem[];
  files: FilePreview[];
}

