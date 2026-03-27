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
    <section id="contact" className="border-t border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <BlurIn delay={0} duration={0.6}>
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-white/50">Contact</p>
              <h2 className="mt-4 text-3xl font-medium text-white md:text-5xl">
                Have a project in mind? Let&apos;s build it together.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                Need a reliable team to fix issues, build new systems, or move faster
                on delivery? Reach out and we&apos;ll help shape the right solution.
              </p>

              <div className="mt-8 space-y-4">
                <Link
                  href="mailto:contact@tekdev.dev"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  contact@tekdev.dev
                </Link>
                <Link
                  href="https://wa.me/919999999999"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </BlurIn>

          <BlurIn delay={0.15} duration={0.6}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-white/80">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, name: event.target.value }))
                    }
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/35 focus:border-white/40 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-white/80">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, email: event.target.value }))
                    }
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/35 focus:border-white/40 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-white/80">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, message: event.target.value }))
                    }
                    className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/35 focus:border-white/40 focus:outline-none"
                    placeholder="Tell us what you need built, fixed, or improved."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-white/90"
                >
                  Contact Us
                  <Send className="h-4 w-4" />
                </button>
                {submitted ? (
                  <p className="text-sm text-white/70">
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
