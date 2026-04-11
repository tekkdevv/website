"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Layers3,
  MessageSquare,
  MoveRight,
  Sparkles,
  Star,
} from "lucide-react";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Framer Motion",
  "Node.js",
  "Flutter",
  "AWS",
  "PostgreSQL",
  "Figma",
  "OpenAI",
];

const services = [
  "Product Strategy",
  "Landing Pages",
  "Design Systems",
  "Web Apps",
  "Mobile Experiences",
  "API Architecture",
  "Performance Optimization",
  "Motion Design",
];

const experience = [
  { company: "TekkDevv Studio", role: "Product Engineering Partner", years: "2021-Now" },
  { company: "Nexus Technology", role: "Lead Product Designer", years: "2018-2021" },
  { company: "Quantum Labs", role: "Senior UI Engineer", years: "2015-2018" },
  { company: "Zazzle Commerce", role: "Digital Designer", years: "2012-2015" },
];

const steps = [
  {
    title: "Subscribe",
    description: "Pick an ongoing engagement or reach out for a clearly scoped one-off build.",
  },
  {
    title: "Request",
    description: "Share the product, feature, redesign, or growth page you need help shipping.",
  },
  {
    title: "Receive",
    description: "Get thoughtful design and engineering work with fast iteration and visible progress.",
  },
];

const pricing = [
  {
    title: "Unlimited Design + Dev",
    price: "$6,500",
    cadence: "/ month",
    description:
      "For teams that need a steady stream of product design, UI implementation, and landing page work.",
    highlight: "Best for ongoing product work",
    features: [
      "Unlimited requests in queue",
      "Avg 48 hour updates",
      "Pause or cancel anytime",
      "Multiple brands or products",
      "Frontend implementation support",
    ],
  },
  {
    title: "Single Project",
    price: "Custom",
    cadence: "",
    description:
      "For launches, redesigns, internal tools, or feature builds with a fixed scope and planned milestones.",
    highlight: "Best for one-time engagements",
    features: [
      "Clearly defined scope",
      "Fixed delivery timeline",
      "Milestone-based updates",
      "Three revision rounds",
      "Handoff or launch support",
    ],
  },
];

const testimonials = [
  {
    quote:
      "The redesign made our product feel premium overnight. More importantly, it clarified the journey and improved how prospects understood the value.",
    name: "Emma Kraft",
    title: "CMO, TechVista",
  },
  {
    quote:
      "TekkDevv paired strong product instincts with clean delivery. The result wasn’t just a nicer interface, it was a better business tool.",
    name: "Thomas Weber",
    title: "Co-founder, Zazzle",
  },
  {
    quote:
      "Our website conversion rate improved significantly after the rebuild. The team moved quickly and never made us guess what was happening.",
    name: "Ben Harper",
    title: "CTO, Nexus",
  },
  {
    quote:
      "They brought clarity to a very complex workflow. What used to feel fragmented now feels cohesive, fast, and easy to trust.",
    name: "Michael Wong",
    title: "Data Lead, DataSphere",
  },
];

const faqs = [
  {
    question: "How quickly can a project start?",
    answer:
      "Most engagements can kick off within a few business days once scope and priorities are aligned.",
  },
  {
    question: "What kind of work can I request?",
    answer:
      "Landing pages, product UI, dashboards, design systems, frontend builds, mobile flows, and selected backend/platform work.",
  },
  {
    question: "Do you only design, or do you also build?",
    answer:
      "TekkDevv handles both. The goal is to move from concept to working product without the usual handoff friction.",
  },
  {
    question: "Can we pause an ongoing engagement?",
    answer:
      "Yes. Monthly work is structured to stay flexible, so you can pause or resume around your roadmap needs.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d5b06a]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[#9ca3af]">{description}</p>
    </div>
  );
}

export function PortfolioHome() {
  return (
    <div className="relative overflow-hidden bg-[#0a0a0b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(213,176,106,0.14),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.06),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.02),_transparent_20%)]" />

      <section className="relative border-b border-white/10 pt-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#d7d8db] backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#d5b06a]" />
              Available for April 2026 projects
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-7xl lg:text-[88px]">
              Product design and engineering that actually moves the business.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#b7bcc6]">
              TekkDevv helps brands and product teams launch premium websites,
              conversion-focused experiences, and polished digital products with
              strategy, design, and implementation under one roof.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/start-project"
                className="inline-flex items-center justify-center rounded-full bg-[#efe4cf] px-7 py-4 text-sm font-semibold text-[#111111] transition hover:bg-white"
              >
                Book a discovery call
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white transition hover:bg-white/[0.08]"
              >
                View featured work
                <MoveRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[#c9ccd2]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((index) => (
                    <div
                      key={index}
                      className="h-9 w-9 rounded-full border border-[#0a0a0b] bg-gradient-to-br from-[#d5b06a] to-[#7d6644]"
                    />
                  ))}
                </div>
                <span>99+ happy clients</span>
              </div>
              <div className="flex items-center gap-1 text-[#d5b06a]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-[#c9ccd2]">Premium delivery, clear process</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
            className="lg:justify-self-end"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-[#111214] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(213,176,106,0.18),_transparent_34%)]" />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#d7d8db]">
                  <span>Current focus</span>
                  <span className="rounded-full bg-[#d5b06a]/15 px-3 py-1 text-[#f2dec2]">
                    Conversion systems
                  </span>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-[#17181b] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#8b9099]">
                    Featured build
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    Launch-ready websites that feel high trust on first scroll.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#aab1bc]">
                    Messaging, hierarchy, interaction polish, and frontend quality
                    aligned around one goal: helping serious prospects convert.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Avg project momentum", value: "2x faster" },
                    { label: "Recent launch uplift", value: "+31%" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-[#8b9099]">
                        {item.label}
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0d0e10] p-4 font-mono text-xs text-[#9fa5af]">
                  <p className="text-[#dfe3ea]">launch/tekdev-portfolio</p>
                  <p className="mt-2">$ ship polished interfaces with real product thinking</p>
                  <p className="mt-2 text-[#d5b06a]">status: shipping premium work</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div id="work" className="relative border-b border-white/10">
        <ProjectsShowcase />
      </div>

      <section className="relative border-b border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="rounded-[32px] border border-white/10 bg-[#101113] p-8 md:p-10">
            <p className="max-w-4xl text-2xl leading-relaxed tracking-[-0.03em] text-[#f5f5f2] md:text-4xl">
              “Working with TekkDevv felt like bringing in a senior design and
              engineering partner who understood the business case, not just the
              interface.”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#efe4cf] to-[#9d7c4b]" />
              <div>
                <p className="font-medium text-white">Thomas Weber</p>
                <p className="text-sm text-[#9da3ad]">Co-founder, Zazzle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative border-b border-white/10 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <SectionHeading
            eyebrow="Capabilities"
            title="Services that help ambitious teams move with more clarity."
            description="The reference site leans on breadth and polish, so this version does too: strategy, interface design, implementation, motion, and launch support in one place."
          />
          <div className="space-y-10">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#8d929b]">
                Stack and tools
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {techStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[#e5e7eb]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.05, duration: 0.45 }}
                  className="rounded-[24px] border border-white/10 bg-[#121316] p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-[#d5b06a]/30 bg-[#d5b06a]/10 p-2 text-[#f0ddc0]">
                      <Layers3 className="h-4 w-4" />
                    </div>
                    <h3 className="text-lg font-medium text-white">{service}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#9fa6b2]">
                    Carefully structured to improve perception, usability, and launch readiness.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="rounded-[32px] border border-white/10 bg-[#111214] p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[#8d929b]">
              About TekkDevv
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Designing and building experiences that solve real product problems.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#aab1bc]">
              We focus on the overlap between trust, usability, and execution.
              That means making interfaces look premium, but also making sure the
              product story is clear and the implementation holds up in real use.
            </p>
            <p className="mt-4 text-base leading-8 text-[#aab1bc]">
              The result is work that feels intentional from the first headline to
              the last interaction, with enough technical depth to actually ship.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[32px] border border-white/10 bg-[#111214] p-8">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#efe4cf] to-[#9d7c4b]" />
                <div>
                  <p className="text-xl font-semibold text-white">TekkDevv</p>
                  <p className="text-sm text-[#9ea4ae]">Design-led product engineering</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                {experience.map((item) => (
                  <div
                    key={`${item.company}-${item.role}`}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                  >
                    <div>
                      <p className="font-medium text-white">{item.company}</p>
                      <p className="text-sm text-[#8f959f]">{item.role}</p>
                    </div>
                    <p className="text-sm text-[#d3d6dd]">{item.years}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="relative border-b border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple pricing with room for fast-moving teams."
            description="Clear engagement options inspired by the reference flow: a recurring model for momentum, plus a one-off option for fixed-scope launches."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-[32px] border border-[#d5b06a]/25 bg-[linear-gradient(180deg,_rgba(213,176,106,0.12),_rgba(255,255,255,0.03))] p-8">
              <div className="inline-flex items-center rounded-full border border-[#d5b06a]/30 bg-[#d5b06a]/10 px-4 py-2 text-sm text-[#f2dec2]">
                Slots available
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-white">Hire TekkDevv today</h3>
              <p className="mt-4 text-base leading-8 text-[#d9dde3]">
                Skip the agency bloat and work directly with a team focused on
                product clarity, premium frontend execution, and fast iteration.
              </p>
              <div className="mt-8 space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-[#d5b06a]">
                      0{index + 1}
                    </p>
                    <p className="mt-2 text-lg font-medium text-white">{step.title}</p>
                    <p className="mt-2 text-sm leading-7 text-[#b7bcc6]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {pricing.map((plan, index) => (
                <motion.article
                  key={plan.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className={`rounded-[32px] border p-8 ${
                    index === 0
                      ? "border-[#d5b06a]/30 bg-[#151311]"
                      : "border-white/10 bg-[#111214]"
                  }`}
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-[#d5b06a]">
                    {plan.highlight}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{plan.title}</h3>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-4xl font-semibold tracking-[-0.04em] text-white">
                      {plan.price}
                    </span>
                    {plan.cadence ? (
                      <span className="pb-1 text-sm text-[#9ca3af]">{plan.cadence}</span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#afb5be]">{plan.description}</p>
                  <div className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-[#e5e7eb]">
                        <span className="rounded-full border border-[#d5b06a]/30 bg-[#d5b06a]/10 p-1 text-[#f0ddc0]">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={index === 0 ? "/start-project" : "/contact"}
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                      index === 0
                        ? "bg-[#efe4cf] text-[#111111] hover:bg-white"
                        : "border border-white/12 bg-white/[0.03] text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    {index === 0 ? "Get started" : "Request a quote"}
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say after the work ships."
            description="The reference leans heavily on social proof, so this version adds a broader testimonial wall with the same premium card treatment."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <motion.figure
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className="rounded-[28px] border border-white/10 bg-[#111214] p-7"
              >
                <blockquote className="text-lg leading-8 text-[#f3f4f6]">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#efe4cf] to-[#9d7c4b]" />
                  <div>
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="text-sm text-[#9ca3af]">{item.title}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <SectionHeading
            eyebrow="FAQ"
            title="Your questions, answered."
            description="A tighter FAQ block, styled closer to the reference, to keep decision-making easy for visitors."
          />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group rounded-[24px] border border-white/10 bg-[#111214] p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-medium text-white">
                  {faq.question}
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#aeb4be]">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,_rgba(213,176,106,0.18),_rgba(255,255,255,0.04)_45%,_rgba(17,18,20,1))] p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/20 px-4 py-2 text-sm text-[#ece7dd]">
                <MessageSquare className="h-4 w-4 text-[#d5b06a]" />
                Let’s build something that looks premium and performs like it matters
              </div>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                Ready to turn the site into a stronger sales asset?
              </h2>
              <p className="mt-5 text-base leading-8 text-[#e1e4e8]">
                Start with a discovery conversation and we’ll shape the right
                path, whether that’s a full redesign, a focused build, or a
                higher-converting landing experience.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/start-project"
                className="inline-flex items-center justify-center rounded-full bg-[#efe4cf] px-7 py-4 text-sm font-semibold text-[#111111] transition hover:bg-white"
              >
                Start your project
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-black/20 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/[0.08]"
              >
                Contact TekkDevv
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
