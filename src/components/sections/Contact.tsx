"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  Send,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";

const EMAIL_ADDRESS = "alexagyei196@gmail.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyegzwop";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();

    if (website) {
      return;
    }

    if (!name || !email || !subject || !message) {
      setFormState("error");
      setStatusMessage("Please complete all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormState("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    if (message.length < 20) {
      setFormState("error");
      setStatusMessage("Please include a little more detail in your message.");
      return;
    }

    setFormState("submitting");
    setStatusMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      formElement.reset();
      setFormState("success");
      setStatusMessage(
        "Your message has been sent successfully. I’ll get back to you soon.",
      );
    } catch {
      setFormState("error");
      setStatusMessage(
        "The message could not be sent. Please email me directly instead.",
      );
    }
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

            <a
              href="https://www.linkedin.com/in/alex-agyei-81332a2b3/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn profile</span>
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

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            className="contact-honeypot"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

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

          <button
            className="contact-submit"
            type="submit"
            disabled={formState === "submitting"}
          >
            {formState === "submitting" ? (
              <>
                Sending
                <Loader2 className="contact-submit-spinner" size={18} />
              </>
            ) : formState === "success" ? (
              <>
                Sent
                <CheckCircle2 size={18} />
              </>
            ) : (
              <>
                Send message
                <ArrowUpRight size={18} />
              </>
            )}
          </button>

          {statusMessage ? (
            <p
              className={`contact-form-status contact-form-status-${formState}`}
              role="status"
              aria-live="polite"
            >
              {statusMessage}
            </p>
          ) : null}

          <p className="contact-form-fallback">
            Prefer email?{" "}
            <a href={`mailto:${EMAIL_ADDRESS}`}>
              Contact me directly.
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
