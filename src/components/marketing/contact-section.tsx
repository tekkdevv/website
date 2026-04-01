"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { MessageCircle, Mail, Send } from "lucide-react";
import { BlurIn } from "@/components/marketing/blur-in";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData(initialFormState);
    }, 2500);
  };

  return (
    <section
      id="contact"
      className="relative z-10 border-t border-white/[0.06] py-10 sm:py-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <BlurIn delay={0} duration={0.6}>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground sm:text-sm">
                Contact
              </p>
              <h2
                className="mt-4 text-3xl font-normal text-foreground md:text-5xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Have a project in mind?{" "}
                <span className="text-muted-foreground">
                  Let&apos;s build it together.
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
                Need a reliable team to fix issues, build new systems, or move
                faster on delivery? Reach out and we&apos;ll help shape the
                right solution.
              </p>

              <div className="mt-8 space-y-4">
                <Link
                  href="mailto:contact@tekdev.dev"
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-foreground/70 transition-colors hover:bg-white/[0.04] hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                  contact@tekdev.dev
                </Link>
                <Link
                  href="https://wa.me/919999999999"
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-foreground/70 transition-colors hover:bg-white/[0.04] hover:text-foreground"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </BlurIn>

          <BlurIn delay={0.15} duration={0.6}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-foreground/70"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:border-white/[0.15] focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-foreground/70"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:border-white/[0.15] focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-foreground/70"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        message: event.target.value,
                      }))
                    }
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:border-white/[0.15] focus:outline-none"
                    placeholder="Tell us what you need built, fixed, or improved."
                  />
                </div>
                <button
                  type="submit"
                  className="liquid-glass inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-foreground transition-transform hover:scale-[1.03] sm:w-auto"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
                {submitted ? (
                  <p className="text-sm text-muted-foreground">
                    Thanks. We&apos;ll get back to you shortly.
                  </p>
                ) : null}
              </form>
            </div>
          </BlurIn>
        </div>
      </div>
    </section>
  );
}
