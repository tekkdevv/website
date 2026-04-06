"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle, Mail, Send, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { BlurIn } from "@/components/marketing/blur-in";
import emailjs from "@emailjs/browser";

// ─── EmailJS Config ────────────────────────────────────────────────────────
const EMAILJS_PUBLIC_KEY  = "nzbgdNdEul6OjPkr7";
const EMAILJS_PRIVATE_KEY = "hGq7kaeQXAQX6yvHm4uyW";
const EMAILJS_SERVICE_ID  = "service_pxi187w";
const EMAILJS_TEMPLATE_ID = "template_3z6jb0w";
// ───────────────────────────────────────────────────────────────────────────

const initialFormState = { name: "", email: "", message: "" };

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setFormData(initialFormState);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
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
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
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
                  disabled={status === "sending"}
                  className="liquid-glass inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-foreground transition-transform hover:scale-[1.03] disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
                {status === "success" && (
                  <p className="flex items-center gap-2 text-sm text-emerald-400">
                    <CheckCircle className="h-4 w-4" />
                    Message sent! We&apos;ll get back to you shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 text-sm text-red-400">
                    <XCircle className="h-4 w-4" />
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            </div>
          </BlurIn>
        </div>
      </div>
    </section>
  );
}
