"use client";

import { ArrowUpRight, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";

const EMAIL_ADDRESS = "alexagyei196@gmail.com";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "");
    const message = String(form.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
      subject || "Portfolio enquiry",
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    window.location.href = mailto;
  }

  return (
    <section
      className="container section editorial-section contact-editorial-section"
      id="contact"
    >
      <SectionHeading
        number="06"
        label="Contact"
        overline="Opportunities · Collaboration · Technical work"
        title="Let&apos;s build something"
        accent="secure, useful and reliable."
      />

      <div className="contact-console">
        <div className="contact-information">
          <StatusBadge>Available for opportunities</StatusBadge>

          <div>
            <p className="contact-label">Current focus</p>
            <h3>
              Cybersecurity, AWS cloud, networking, IT support and software
              engineering.
            </h3>
          </div>

          <p className="contact-description">
            I&apos;m open to professional opportunities, internships,
            technical collaborations and projects where security,
            infrastructure and software come together.
          </p>

          <div className="contact-details">
            <a href={`mailto:${EMAIL_ADDRESS}`}>
              <Mail size={18} />
              <span>{EMAIL_ADDRESS}</span>
              <ArrowUpRight size={17} />
            </a>

            <a
              href="https://github.com/ano-nym-ous257"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub profile</span>
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="contact-system-note">
            <span>Response protocol</span>
            <p>
              Messages about roles, collaborations and technical projects are
              welcome.
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-header">
            <div>
              <Send size={17} />
              <span>New message</span>
            </div>

            <span>SECURE CHANNEL</span>
          </div>

          <div className="contact-fields">
            <label>
              <span>Name</span>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              <span>Subject</span>
              <input
                name="subject"
                type="text"
                placeholder="Opportunity or project"
                required
              />
            </label>

            <label>
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Tell me about the role, project or idea."
                rows={7}
                required
              />
            </label>
          </div>

          <button className="contact-submit" type="submit">
            {submitted ? "Opening email client" : "Send message"}
            <ArrowUpRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
