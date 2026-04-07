"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle, Mail, Send, CheckCircle, XCircle, Loader2, Sparkles, ArrowRight } from "lucide-react";
import { BlurIn } from "@/components/marketing/blur-in";
import emailjs from "@emailjs/browser";

// ─── EmailJS Config ────────────────────────────────────────────────────────
const EMAILJS_PUBLIC_KEY  = "nzbgdNdEul6OjPkr7";
const EMAILJS_PRIVATE_KEY = "hGq7kaeQXAQX6yvHm4uyW";
const EMAILJS_SERVICE_ID  = "service_pxi187w";
const EMAILJS_TEMPLATE_ID = "template_3z6jb0w";
// ───────────────────────────────────────────────────────────────────────────

const initialFormState = { name: "", email: "", message: "" };

import { motion, AnimatePresence } from "framer-motion";

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
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 border-t border-white/[0.06] py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <BlurIn delay={0} duration={0.6}>
            <div className="sticky top-32">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-white/50 uppercase">
                <Sparkles className="h-3 w-3" /> Get in touch
              </span>
              <h2
                className="mt-6 text-4xl font-normal leading-[1.1] text-foreground sm:text-5xl md:text-6xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Let’s talk about <br />
                <em className="text-muted-foreground not-italic">your vision.</em>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground/70 sm:text-lg">
                Whether you’re scaling to millions or just starting from scratch, 
                we bring the craft and speed you need to ship world-class software.
              </p>

              <div className="mt-12 space-y-4">
                <Link
                  href="mailto:contact@tekdev.dev"
                  className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all hover:bg-white/[0.04] hover:border-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/40 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-white/30">Email Us</span>
                      <span className="text-sm font-medium text-white/80 group-hover:text-white">contact@tekdev.dev</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          </BlurIn>

          <BlurIn delay={0.15} duration={0.6}>
            <div className="relative min-h-[500px] rounded-none border border-white/[0.08] bg-white/[0.015] p-8 backdrop-blur-2xl sm:p-12 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
              {/* Decorative gradient */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-[100px]" />
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="flex h-full min-h-[400px] flex-col items-center justify-center text-center py-12"
                  >
                    <div className="relative mb-8">
                       <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500/20 blur-xl" />
                       <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10">
                          <CheckCircle className="h-10 w-10 text-emerald-400" />
                       </div>
                    </div>
                    <h3 className="text-3xl font-medium text-white sm:text-4xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
                      Vision Received.
                    </h3>
                    <p className="mt-4 max-w-sm text-base leading-relaxed text-white/50 sm:text-lg">
                      We’ve notified our lead engineers. You can expect a response
                      from us personally within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-medium text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-name"
                          className="text-[10px] font-semibold uppercase tracking-widest text-white/40 ml-1"
                        >
                          Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                          className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-foreground placeholder-white/20 transition-all focus:border-white/20 focus:bg-white/[0.05] focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-email"
                          className="text-[10px] font-semibold uppercase tracking-widest text-white/40 ml-1"
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                          className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-foreground placeholder-white/20 transition-all focus:border-white/20 focus:bg-white/[0.05] focus:outline-none"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-message"
                        className="text-[10px] font-semibold uppercase tracking-widest text-white/40 ml-1"
                      >
                        Tell us about your project
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                        className="w-full resize-none rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-foreground placeholder-white/20 transition-all focus:border-white/20 focus:bg-white/[0.05] focus:outline-none"
                        placeholder="What are we building together?"
                      />
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-none bg-white px-10 py-4 text-sm font-bold text-black transition-all hover:bg-white/90 active:scale-95 disabled:opacity-50 sm:w-auto"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>

                    {status === "error" && (
                      <motion.p 
                        initial={{ opacity: 0, y: 5 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-sm text-red-400 mt-4"
                      >
                        <XCircle className="h-4 w-4" />
                        Something went wrong. Please try again.
                      </motion.p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </BlurIn>
        </div>
      </div>
    </section>
  );
}
