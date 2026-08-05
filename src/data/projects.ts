export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  href: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "PaymentFlow AI",
    category: "Software Engineering · Fintech",
    description:
      "An intelligent global payments platform designed around adaptive AI agents, secure financial workflows and cross-platform experiences.",
    tags: ["Next.js", "TypeScript", "AI Agents", "Fintech"],
    href: "https://github.com/ano-nym-ous257/paymentflow-ai",
    featured: true,
  },
  {
    title: "Octra Client",
    category: "Web3 · Command Line",
    description:
      "A terminal-based wallet experience focused on account management, blockchain interactions and secure command-line workflows.",
    tags: ["Python", "Web3", "CLI", "Security"],
    href: "https://github.com/ano-nym-ous257/octra",
    featured: false,
  },
  {
    title: "Thru SDK Experiments",
    category: "Systems Engineering",
    description:
      "Low-level development experiments using C, RISC-V tooling and the Thru developer ecosystem.",
    tags: ["C", "RISC-V", "Linux", "Systems"],
    href: "https://github.com/ano-nym-ous257",
    featured: false,
  },
];
