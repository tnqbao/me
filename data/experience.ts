export type ExperienceProject = {
  name: string;
  description: string;
  href?: string;
  technologies: string[];
  focus: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  technologies: string[];
  projects: ExperienceProject[];
  compact?: boolean;
};

export const experiences: Experience[] = [
  {
    company: "Kamora",
    role: "Software Engineer",
    period: "03/2025 — 09/2026",
    technologies: ["Golang", "Kubernetes", "Docker", "GitHub Actions"],
    projects: [
      {
        name: "DropBall",
        description: "Sports court booking platform for users in Ukraine.",
        href: "https://dropball.app/en",
        technologies: ["Golang", "Kubernetes", "RabbitMQ", "Docker", "GitHub Actions"],
        focus: [
          "Backend APIs",
          "CI workflows",
          "Docker builds",
          "Application environments",
          "Deployment troubleshooting",
          "Slack notifications",
        ],
      },
    ],
  },
  {
    company: "Aivis Technology",
    role: "Backend Engineer · Remote",
    period: "10/2025 — 02/2026",
    technologies: ["Kubernetes", "Argo CD", "Grafana", "Loki", "Tempo"],
    projects: [
      {
        name: "Chilley Wallet",
        description: "Digital wallet and loyalty application.",
        technologies: [
          "Golang",
          "Gin",
          "Kubernetes",
          "Argo CD",
          "Grafana",
          "Loki",
          "Tempo",
          "PostgreSQL",
          "Redis",
          "Kafka",
        ],
        focus: [
          "Kubernetes application environments",
          "Manifests, deployments and services",
          "ConfigMaps and secrets",
          "GitOps and Argo CD synchronization",
          "RED monitoring, logging and tracing",
          "Backend services",
        ],
      },
    ],
  },
  {
    company: "AgilityIO",
    role: "Software Engineer Intern",
    period: "06/2025 — 09/2025",
    technologies: ["JavaScript", "React", "HTML", "CSS", "Kubernetes"],
    projects: [
      {
        name: "Travlog",
        description: "Internship web application project.",
        technologies: ["JavaScript", "React", "HTML", "CSS"],
        focus: [],
      },
      {
        name: "BMI Calculator",
        description: "Focused frontend application built during the internship.",
        technologies: ["JavaScript", "React", "HTML", "CSS"],
        focus: [],
      },
    ],
    compact: true,
  },
];
