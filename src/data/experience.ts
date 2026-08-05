export interface ExperienceItem {
  period: string;
  title: string;
  area: string;
  status: string;
  description: string;
  highlights: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    period: "2026 — Present",
    title: "PaymentFlow AI",
    area: "Product & Software Engineering",
    status: "Active",
    description:
      "Designing and developing an intelligent payments platform built around secure financial workflows, reusable architecture and AI-driven experiences.",
    highlights: [
      "Next.js and TypeScript application architecture",
      "Authentication and secure workflow planning",
      "AI-agent product design",
      "Responsive web and mobile-focused architecture",
    ],
  },
  {
    period: "2026 — Present",
    title: "AWS Cloud Environment",
    area: "Cloud Infrastructure",
    status: "Active Lab",
    description:
      "Building and documenting practical AWS environments focused on identity, compute, storage, networking and cloud security.",
    highlights: [
      "IAM users, roles and permissions",
      "EC2 compute environments",
      "S3 storage and access controls",
      "VPC and cloud-networking fundamentals",
    ],
  },
  {
    period: "2026 — Present",
    title: "Cybersecurity Analysis Labs",
    area: "Security Operations",
    status: "Active Lab",
    description:
      "Investigating common security threats and documenting defensive analysis, response decisions and security recommendations.",
    highlights: [
      "Phishing and social-engineering analysis",
      "CIA Triad impact assessment",
      "Threat identification and attack vectors",
      "Security reporting and remediation guidance",
    ],
  },
  {
    period: "2026 — Present",
    title: "Network Analysis & Troubleshooting",
    area: "Network Engineering",
    status: "Active Lab",
    description:
      "Working with network communication, addressing, traffic analysis and structured troubleshooting across simulated environments.",
    highlights: [
      "TCP/IP and OSI troubleshooting",
      "DNS, DHCP and subnetting",
      "Routing and switching fundamentals",
      "Packet analysis with Wireshark",
    ],
  },
  {
    period: "2025 — Present",
    title: "Systems Troubleshooting Case Studies",
    area: "IT Support",
    status: "Documented",
    description:
      "Diagnosing and resolving hardware, operating-system and development-environment issues across macOS, Windows and command-line tooling.",
    highlights: [
      "Operating-system recovery and configuration",
      "Hardware and storage upgrades",
      "Software and CLI diagnostics",
      "Technical documentation and root-cause analysis",
    ],
  },
];
