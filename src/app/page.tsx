import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import {
  ArrowUpRight,
  Cloud,
  Code2,
  Mail,
  Network,
  ServerCog,
  ShieldCheck,
  Terminal,
} from "lucide-react";

const projects = [
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

const skillGroups = [
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

const capabilities = [
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

export default function Home() {
  return (
    <main>
      <div className="background-grid" />
      <div className="background-glow background-glow-one" />
      <div className="background-glow background-glow-two" />

      <Navbar />
      <Hero />
      <About />
      <Expertise />

      <section className="container section" id="projects">
        <div className="section-heading">
          <p>03 / Selected work</p>
          <h2>Practical projects built around real technical problems.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
              key={project.title}
            >
              <div className="project-top">
                <span>0{index + 1}</span>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  <ArrowUpRight size={21} />
                </a>
              </div>

              <div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section" id="skills">
        <div className="section-heading">
          <p>04 / Technical skills</p>
          <h2>Capabilities across security, infrastructure and software.</h2>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article className="skill-group" key={group.title}>
                <div className="skill-group-heading">
                  <Icon size={22} />
                  <h3>{group.title}</h3>
                </div>

                <div className="skills-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container contact-section" id="contact">
        <p className="eyebrow">
          <Mail size={16} />
          Start a conversation
        </p>

        <h2>Looking for someone who understands the entire system?</h2>

        <p>
          I&apos;m open to opportunities across IT support, cybersecurity,
          networking, AWS cloud and software engineering.
        </p>

        <a
          className="primary-button"
          href="mailto:alexagyei196@gmail.com"
        >
          Send me an email
          <ArrowUpRight size={18} />
        </a>
      </section>

      <footer className="container footer">
        <p>© {new Date().getFullYear()} Gamefreak.</p>

        <div>
          <a
            href="https://github.com/ano-nym-ous257"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="#top">Back to top</a>
        </div>
      </footer>
    </main>
  );
}
