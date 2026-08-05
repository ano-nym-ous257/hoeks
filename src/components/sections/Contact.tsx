import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
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
  );
}
