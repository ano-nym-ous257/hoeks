import {
  Cloud,
  Network,
  ShieldCheck,
  Terminal,
  type LucideIcon,
} from "lucide-react";

export interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const capabilities: Capability[] = [
  {
    title: "Secure infrastructure",
    icon: ShieldCheck,
    description:
      "Applying security principles to systems, applications, networks and cloud infrastructure.",
  },
  {
    title: "AWS cloud solutions",
    icon: Cloud,
    description:
      "Working with AWS services, identity management, cloud networking and scalable infrastructure concepts.",
  },
  {
    title: "Network operations",
    icon: Network,
    description:
      "Understanding network communication, troubleshooting connectivity and designing reliable network environments.",
  },
  {
    title: "Technical support",
    icon: Terminal,
    description:
      "Diagnosing hardware, operating-system, software and configuration problems across technical environments.",
  },
];
