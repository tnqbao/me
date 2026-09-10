export const gauasCloud = {
  name: "Gauas Cloud",
  subtitle: "Self-hosted Cloud Platform",
  website: "https://cloud.gauas.com",
  description:
    "A self-hosted cloud platform built to explore cloud infrastructure, compute, object storage, container orchestration and distributed systems.",
  technologies: [
    "Golang",
    "Kubernetes",
    "Argo CD",
    "Terraform",
    "Docker",
    "Proxmox",
    "MinIO",
    "Grafana",
    "Next.js",
  ],
  areas: [
    "Self-hosted Kubernetes infrastructure",
    "GitOps using Argo CD",
    "Compute services",
    "Object storage",
    "Container services",
    "Infrastructure provisioning",
    "HPA and RBAC",
    "Application monitoring",
    "Golang backend services",
    "Web management console",
  ],
  repositories: [
    {
      label: "Cloud Platform",
      shortLabel: "Source",
      href: "https://github.com/tnqbao/gauas-cloud",
    },
    {
      label: "Kubernetes Infrastructure",
      shortLabel: "Infrastructure",
      href: "https://github.com/tnqbao/k8s-cluster-management",
    },
    {
      label: "GitOps / Argo CD",
      shortLabel: "GitOps",
      href: "https://github.com/gauas/argocd",
    },
  ],
} as const;
