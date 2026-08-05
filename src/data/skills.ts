import {
  Cloud,
  Code2,
  Network,
  ServerCog,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    skills: [
      "Threat analysis",
      "Network security",
      "Phishing analysis",
      "Access control",
      "Linux security",
      "Incident response",
      "Vulnerability assessment",
      "Security fundamentals",
    ],
  },
  {
    title: "AWS Cloud",
    icon: Cloud,
    skills: [
      "Amazon EC2",
      "Amazon S3",
      "AWS IAM",
      "Amazon VPC",
      "Cloud networking",
      "Cloud security",
      "AWS CLI",
      "Cloud architecture",
    ],
  },
  {
    title: "Networking",
    icon: Network,
    skills: [
      "TCP/IP",
      "DNS",
      "DHCP",
      "Subnetting",
      "Routing",
      "Switching",
      "Network troubleshooting",
      "Wireshark",
    ],
  },
  {
    title: "IT Support",
    icon: ServerCog,
    skills: [
      "Hardware diagnostics",
      "Operating systems",
      "macOS support",
      "Windows support",
      "Software troubleshooting",
      "Command-line diagnostics",
      "Device configuration",
      "Technical documentation",
    ],
  },
  {
    title: "Software Engineering",
    icon: Code2,
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Git and GitHub",
      "REST APIs",
      "Responsive design",
    ],
  },
];
