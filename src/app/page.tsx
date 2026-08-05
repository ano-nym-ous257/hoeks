import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

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
      <Projects />
      <Skills />

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
