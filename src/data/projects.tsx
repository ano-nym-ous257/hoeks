import ZoomableImage from "@/components/projects/ZoomableImage";
import type { ReactNode } from "react";

export interface ProjectChapter {
  id: string;
  label: string;
  title: string;
  eyebrow?: string;
  content: ReactNode;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  href: string;
  featured: boolean;
  chapters: ProjectChapter[];
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
    chapters: [
      {
        id: "overview",
        label: "Overview",
        eyebrow: "Fintech · AI-native architecture",
        title: "A payments platform designed around autonomous intelligence.",
        content: (
          <p>
            PaymentFlow AI explores what a global payments platform could
            become when AI is treated as a core operating layer rather than
            an optional feature.
          </p>
        ),
      },
      {
        id: "architecture",
        label: "Architecture",
        eyebrow: "Systems",
        title: "Security, personalization and operations driven by AI.",
        content: (
          <p>
            The project is built around the idea of AI-managed workflows:
            security decisions, dashboard personalization, maintenance,
            updates and operational improvements are designed to be handled
            by intelligent agents with minimal human intervention.
          </p>
        ),
      },
      {
        id: "direction",
        label: "Direction",
        eyebrow: "Long-term vision",
        title: "A fintech system that continuously adapts.",
        content: (
          <p>
            The long-term goal is a fintech experience where customers use
            the platform while AI continuously manages and improves the
            underlying system.
          </p>
        ),
      },
    ],
  },
  {
    title: "Octra Client",
    category: "Web3 · Command Line",
    description:
      "A terminal-based wallet experience focused on account management, blockchain interactions and secure command-line workflows.",
    tags: ["Python", "Web3", "CLI", "Security"],
    href: "https://github.com/ano-nym-ous257/octra",
    featured: false,
    chapters: [
      {
        id: "overview",
        label: "Overview",
        eyebrow: "Web3 · CLI",
        title: "A terminal-first interface for blockchain workflows.",
        content: (
          <p>
            Octra Client focuses on interacting with blockchain functionality
            directly from the command line, keeping wallet and account
            workflows close to the underlying system.
          </p>
        ),
      },
      {
        id: "security",
        label: "Security",
        eyebrow: "Wallet workflows",
        title: "Security belongs in the workflow itself.",
        content: (
          <p>
            The project explores secure account management and command-line
            interactions where sensitive operations need to remain deliberate,
            transparent and controllable.
          </p>
        ),
      },
      {
        id: "direction",
        label: "Direction",
        eyebrow: "Developer tooling",
        title: "Simple interfaces for complex network operations.",
        content: (
          <p>
            The broader direction is to make blockchain operations easier to
            understand and automate without hiding the underlying mechanics.
          </p>
        ),
      },
    ],
  },
  {
    title: "Thru SDK Experiments",
    category: "Systems Engineering",
    description:
      "Low-level development experiments using C, RISC-V tooling and the Thru developer ecosystem.",
    tags: ["C", "RISC-V", "Linux", "Systems"],
    href: "https://github.com/ano-nym-ous257",
    featured: false,
    chapters: [
      {
        id: "overview",
        label: "Overview",
        eyebrow: "Systems · Low level",
        title: "Learning by working closer to the machine.",
        content: (
          <p>
            These experiments explore lower-level development using C,
            RISC-V tooling, Linux and the Thru developer ecosystem.
          </p>
        ),
      },
      {
        id: "tooling",
        label: "Tooling",
        eyebrow: "RISC-V · Developer tooling",
        title: "Building familiarity with the systems underneath.",
        content: (
          <p>
            Working with toolchains and low-level environments provides a
            different perspective on how software is compiled, executed and
            connected to hardware.
          </p>
        ),
      },
      {
        id: "direction",
        label: "Direction",
        eyebrow: "Systems thinking",
        title: "From experimentation toward deeper systems work.",
        content: (
          <p>
            The experiments are part of a broader effort to understand
            software beyond the application layer and become more comfortable
            with the infrastructure underneath it.
          </p>
        ),
      },
    ],
  },

  {
    title: "TechnoCore Agent",
    category: "Agent Infrastructure · Cryptography",
    description:
      "An autonomous agent communication layer built around persistent cryptographic identity, end-to-end messaging, signed messages, owned rooms and scheduled agent activity.",
    tags: [
      "Cryptography",
      "E2E Encryption",
      "Automation",
      "macOS",
      "Python",
      "TechnoCore",
    ],
    href: "https://github.com/flop-labs/technocore-chat",
    featured: false,
    chapters: [
      {
        id: "overview",
        label: "Overview",
        eyebrow: "Agent infrastructure · Cryptographic identity",
        title:
          "Building an autonomous communication layer around cryptographic identity.",
        content: (
          <p>
            TechnoCore explores secure communication infrastructure for
            autonomous agents using persistent identity, encrypted messaging,
            signed messages, owned rooms and automated activity.
          </p>
        ),
      },
      {
        id: "identity",
        label: "Identity",
        eyebrow: "DID · X25519",
        title:
          "A persistent identity with encryption built into the agent.",
        content: (
          <p>
            The agent was given a permanent DID and an X25519 keypair. The
            private key was secured locally while the public encryption key
            was published for peers to use during encrypted communication.
          </p>
        ),
      },
      {
        id: "messaging",
        label: "Messaging",
        eyebrow: "E2E · Mailbox · Encrypted rooms",
        title:
          "The messaging path was exercised end to end.",
        content: (
          <p>
            An E2E delivery payload was generated and the mailbox and
            encrypted-room workflow was exercised using ephemeral
            cryptographic material, keeping the server-side transport
            separate from the encryption keys.
          </p>
        ),
      },
      {
        id: "ownership",
        label: "Ownership",
        eyebrow: "Signed messages · Owned rooms",
        title:
          "Cryptographic signatures make agent actions verifiable.",
        content: (
          <p>
            The agent successfully produced signed messages tied to its
            permanent DID and verified activity inside an owned room. This
            provides a cryptographically verifiable trail for agent actions.
          </p>
        ),
      },
      {
        id: "automation",
        label: "Automation",
        eyebrow: "macOS · launchd · 12-hour heartbeat",
        title:
          "The agent keeps itself active through scheduled execution.",
        content: (
          <p>
            A launchd job was configured to execute a signed agent heartbeat
            every 12 hours. The successful exit code and scheduled interval
            were verified from the macOS launchd service.
          </p>
        ),
      },
      {
        id: "evidence-1",
        label: "Engineering Evidence",
        eyebrow: "Real development and verification output",
        title: "The case study is backed by the actual build process.",
        content: (
          <>
            <p>
              The first two stages cover namespace discovery and persistent
              cryptographic identity.
            </p>

            <div className="project-book-evidence-list">
              <div>
                <span>01</span>
                <ZoomableImage
                  src="/evidence/technocore-room-namespace.png"
                  alt="TechnoCore room namespace discovery terminal output"
                  width={1200}
                  height={675}
                />
                <strong>Room namespace discovery</strong>
              </div>

              <div>
                <span>02</span>
                <ZoomableImage
                  src="/evidence/technocore-x25519-keygen.png"
                  alt="TechnoCore X25519 key generation and file permissions terminal output"
                  width={1200}
                  height={675}
                />
                <strong>X25519 key generation</strong>
              </div>
            </div>
          </>
        ),
      },
      {
        id: "evidence-2",
        label: "Engineering Evidence",
        eyebrow: "Continued verification output",
        title: "Messaging and automation complete the evidence trail.",
        content: (
          <>
            <p>
              The remaining stages cover the end-to-end messaging path and
              signed automated heartbeats.
            </p>

            <div className="project-book-evidence-list">
              <div>
                <span>03</span>
                <ZoomableImage
                  src="/evidence/technocore-e2e-delivery.png"
                  alt="TechnoCore end-to-end delivery generation terminal output"
                  width={1200}
                  height={675}
                />
                <strong>E2E delivery generation</strong>
              </div>

              <div>
                <span>04</span>
                <ZoomableImage
                  src="/evidence/technocore-signed-heartbeat.png"
                  alt="TechnoCore signed heartbeat and launchctl output"
                  width={1200}
                  height={675}
                />
                <strong>Signed heartbeat</strong>
              </div>
            </div>
          </>
        ),
      },
    ],
  },
];
