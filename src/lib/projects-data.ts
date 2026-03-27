export type Project = {
  slug: string;
  name: string;
  summary: string;
  techStack: string[];
  clientProblem: string;
  solution: string;
  results: string[];
};

export const projects: Project[] = [
  {
    slug: "relay-ops-dashboard",
    name: "RelayOps Dashboard",
    summary:
      "Built a real-time logistics control center that helped operations teams detect delays before they impacted deliveries.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    clientProblem:
      "The client had fragmented tracking tools and no unified view of incidents, making response times unpredictable.",
    solution:
      "We designed and shipped a single dashboard with live shipment health, alert triage, and role-based workflows.",
    results: [
      "42% faster incident response time",
      "28% reduction in support escalations",
      "Unified visibility for 6 regional teams"
    ]
  },
  {
    slug: "careflow-mobile",
    name: "CareFlow Mobile",
    summary:
      "Delivered a Flutter app for field medical coordinators with offline sync and secure patient intake workflows.",
    techStack: ["Flutter", "Dart", "Firebase", "Cloud Functions", "GCP"],
    clientProblem:
      "Field teams captured data on paper due to poor connectivity and unreliable mobile software.",
    solution:
      "We built an offline-first app with local caching, conflict-safe sync, and encrypted data submission.",
    results: [
      "3x faster on-site intake process",
      "Near-zero data loss in offline conditions",
      "Rollout to 1,200+ monthly active users"
    ]
  },
  {
    slug: "fintrack-api-platform",
    name: "FinTrack API Platform",
    summary:
      "Modernized a fintech backend to support partner integrations with stable APIs and observability baked in.",
    techStack: ["Node.js", "NestJS", "Redis", "Docker", "AWS"],
    clientProblem:
      "Legacy services were brittle, difficult to scale, and blocked enterprise integration deals.",
    solution:
      "We re-architected core services into a modular API platform with caching, queues, and structured monitoring.",
    results: [
      "99.95% API uptime post-migration",
      "55% reduction in p95 response time",
      "Enabled 4 new enterprise partner integrations"
    ]
  }
];
