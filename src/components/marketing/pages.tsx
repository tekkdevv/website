import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Brain,
  Calendar,
  Check,
  CheckCircle2,
  Cloud,
  Clock,
  Code2,
  FileSearch,
  Lock,
  MessageSquare,
  Rocket,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { BlurIn } from "@/components/marketing/blur-in";
import { ContactSection } from "@/components/marketing/contact-section";
import { MarketingFooter } from "@/components/marketing/footer";
import { StoryHero } from "@/components/marketing/story-hero";
import { CosmicBackground, TrustStrip, OurStory, CosmicProjects, HomeServices, HomeProcess, CosmicCTA, ClientLogos } from "./home-sections";

import { MarketingNavigation } from "@/components/marketing/navigation";

const homeStats = [
  { icon: Target, value: "Real Deliveries", label: "Focused on business outcomes" },
  { icon: Rocket, value: "Full Stack", label: "Web, Mobile & Extensions" },
  { icon: Users, value: "Direct Dev", label: "Talk to the engineers, no middleman" },
];



const agencyServices = [
  {
    icon: Workflow,
    title: "Bug Fixing & Debugging",
    description: "We diagnose difficult product issues quickly and ship reliable fixes without slowing your roadmap.",
  },
  {
    icon: Cloud,
    title: "Full Project Development",
    description: "From idea to launch, we design and build complete web products and internal tools.",
  },
  {
    icon: MessageSquare,
    title: "API Integrations",
    description: "We connect your product with payment, CRM, analytics, AI, and third-party platforms cleanly.",
  },
  {
    icon: Rocket,
    title: "Code Optimization & Performance",
    description: "We improve speed, reliability, and maintainability so your software performs better under real use.",
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    title: "Contact us",
    description: "Tell us what needs to be built, fixed, or improved.",
  },
  {
    icon: FileSearch,
    title: "We analyze your requirement",
    description: "We review the scope, constraints, and best technical path forward.",
  },
  {
    icon: Check,
    title: "We deliver the solution",
    description: "We build with speed, communicate clearly, and hand over polished work.",
  },
];

const features = [
  {
    icon: Workflow,
    title: "Full-Stack Development",
    description: "We build tailored web and mobile applications with a focus on clean architecture and performance.",
    details: ["Next.js & React expert builds", "TypeScript for reliability", "Scalable backend architecture", "Clean, modern UI/UX"],
  },
  {
    icon: MessageSquare,
    title: "Project Takeovers",
    description: "Inherited a messy codebase? We audit, debug, and stabilize projects in any state.",
    details: ["Comprehensive code audits", "Critical bug fixing", "Performance optimization", "Technical debt reduction"],
  },
];

const learnFeatures = [
  {
    icon: Code2,
    title: "Clean Codebase",
    description:
      "We build with TypeScript and modern frameworks to ensure your codebase is readable, maintainable, and bug-resistant.",
  },
  {
    icon: Sparkles,
    title: "Performance First",
    description:
      "Every project is optimized for Core Web Vitals, ensuring lightning-fast load times and a smooth user experience.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description:
      "From authentication to data storage, we follow industry best practices to keep your application and users safe.",
  },
];

const benefits = [
  {
    stat: "No AI Slop",
    label: "Hand-Crafted Code",
    description: "Every line is written with intent and precision, not generated blindly.",
  },
  {
    stat: "Direct Access",
    label: "Zero Bureaucracy",
    description: "Talk directly to the devs building your product, not an account manager.",
  },
  {
    stat: "Documentation",
    label: "Always in Writing",
    description: "Scope, features, and pricing are locked before work begins.",
  },
];

const pricingPlans = [
  {
    name: "Consultation & Scope",
    price: "Free",
    period: "",
    description: "We review your requirements, audit the codebase, and provide a clear roadmap.",
    features: [
      "Codebase audit",
      "Technical feasibility check",
      "Project scoping",
      "Timeline estimation",
      "Budget breakdown",
    ],
    cta: "Book a Free Call",
    highlighted: true,
  },
  {
    name: "Project Based",
    price: "Custom",
    period: "",
    description: "Fixed-price or milestone-based development for specific features or full builds.",
    features: [
      "Dedicated development",
      "Clear milestones & sign-offs",
      "Weekly progress updates",
      "Staging environments",
      "Post-launch support",
    ],
    cta: "Get a Quote",
    highlighted: false,
  },
];

function BackBar() {
  return (
    <nav className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-12">
        <Link href="/" className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </nav>
  );
}

export function MarketingHomePage() {
  return (
    <div className="relative min-h-screen bg-[hsl(201,100%,8%)]">
      <CosmicBackground />
      <MarketingNavigation />
      <StoryHero />
      <div className="relative z-10 pb-24">
        <TrustStrip />
        <ClientLogos />
        <OurStory />
        <CosmicProjects />
        <HomeServices />
        <HomeProcess />
        <CosmicCTA />
        <ContactSection />
        <MarketingFooter />
      </div>
    </div>
  );
}
export function FeaturesPageContent() {
  return (
    <div className="min-h-screen bg-[#070612]">
      <BackBar />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <BlurIn delay={0} duration={0.6}>
          <div className="mb-20 text-center">
            <h1 className="mb-6 text-4xl font-medium text-white md:text-6xl">
              Features Built for Scale
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/80">
              Everything you need to automate, analyze, and accelerate your business operations.
            </p>
          </div>
        </BlurIn>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <BlurIn key={feature.title} delay={0.1 * index} duration={0.6}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10 md:p-12">
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="mb-3 text-2xl font-medium text-white">{feature.title}</h3>
                    <p className="mb-6 text-lg leading-relaxed text-white/70">
                      {feature.description}
                    </p>
                    <ul className="grid gap-3 md:grid-cols-2">
                      {feature.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-white/80">
                          <div className="h-1.5 w-1.5 rounded-full bg-white" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </BlurIn>
          ))}
        </div>

        <BlurIn delay={0.8} duration={0.6}>
          <div className="mt-20 text-center">
            <h2 className="mb-6 text-3xl font-medium text-white">See It in Action</h2>
            <p className="mb-8 text-lg text-white/80">
              Schedule a personalized demo to see how these features can transform your workflow.
            </p>
            <Link
              href="/book-call"
              className="inline-flex items-center rounded-lg bg-white px-8 py-4 font-medium text-black transition-colors hover:bg-white/90"
            >
              Book Your Demo
            </Link>
          </div>
        </BlurIn>
      </div>
    </div>
  );
}

export function PricingPageContent() {
  return (
    <div className="min-h-screen bg-[#070612]">
      <BackBar />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <BlurIn delay={0} duration={0.6}>
          <div className="mb-20 text-center">
            <h1 className="mb-6 text-4xl font-medium text-white md:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/80">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>
        </BlurIn>

        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <BlurIn key={plan.name} delay={0.1 * index} duration={0.6}>
              <div
                className={`flex h-full flex-col rounded-2xl border bg-white/5 p-8 backdrop-blur-sm ${
                  plan.highlighted ? "scale-105 border-white/30 bg-white/10" : "border-white/10"
                }`}
              >
                {plan.highlighted ? (
                  <div className="mb-4 inline-block w-fit rounded-full bg-white px-3 py-1 text-sm font-medium text-black">
                    Most Popular
                  </div>
                ) : null}
                <h3 className="mb-2 text-2xl font-medium text-white">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/60">{plan.period}</span>
                </div>
                <p className="mb-8 text-white/70">{plan.description}</p>
                <ul className="mb-8 flex-grow space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-white/80">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book-call"
                  className={`block rounded-lg px-6 py-3 text-center font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </BlurIn>
          ))}
        </div>

        <BlurIn delay={0.4} duration={0.6}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-medium text-white">Need a Custom Solution?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Our team can build a tailored plan that perfectly matches your requirements and budget.
            </p>
            <Link
              href="/book-call"
              className="inline-flex items-center rounded-lg bg-white px-8 py-4 font-medium text-black transition-colors hover:bg-white/90"
            >
              Talk to Sales
            </Link>
          </div>
        </BlurIn>
      </div>
    </div>
  );
}

export function LearnPageContent() {
  return (
    <div className="min-h-screen bg-[#070612]">
      <BackBar />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <BlurIn delay={0} duration={0.6}>
          <div className="mb-20 text-center">
            <h1 className="mb-6 text-4xl font-medium text-white md:text-6xl">
              Discover the Power of AI Automation
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/80">
              Transform your business operations with cutting-edge artificial intelligence that learns, adapts, and grows with your needs.
            </p>
          </div>
        </BlurIn>

        <div className="mb-24 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BlurIn key={benefit.label} delay={0.1 * index} duration={0.6}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
                <div className="mb-2 text-5xl font-bold text-white">{benefit.stat}</div>
                <div className="mb-3 text-xl font-medium text-white">{benefit.label}</div>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            </BlurIn>
          ))}
        </div>

        <BlurIn delay={0.3} duration={0.6}>
          <h2 className="mb-12 text-center text-3xl font-medium text-white md:text-4xl">
            Key Features
          </h2>
        </BlurIn>

        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {learnFeatures.map((feature, index) => (
            <BlurIn key={feature.title} delay={0.4 + 0.1 * index} duration={0.6}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10">
                <feature.icon className="mb-4 h-12 w-12 text-white" />
                <h3 className="mb-3 text-xl font-medium text-white">{feature.title}</h3>
                <p className="leading-relaxed text-white/70">{feature.description}</p>
              </div>
            </BlurIn>
          ))}
        </div>

        <BlurIn delay={0.8} duration={0.6}>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-12 text-center backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-medium text-white md:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Join thousands of companies already using our AI platform to accelerate growth and innovation.
            </p>
            <Link
              href="/book-call"
              className="inline-flex items-center rounded-lg bg-white px-8 py-4 font-medium text-black transition-colors hover:bg-white/90"
            >
              Schedule Your Free Consultation
            </Link>
          </div>
        </BlurIn>
      </div>
    </div>
  );
}

type BookCallPageContentProps = {
  submitted: boolean;
  formData: {
    name: string;
    email: string;
    company: string;
    phone: string;
    date: string;
    time: string;
    message: string;
  };
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export function BookCallPageContent({
  submitted,
  formData,
  onSubmit,
  onChange,
}: BookCallPageContentProps) {
  return (
    <div className="min-h-screen bg-[#070612]">
      <BackBar />
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-12">
        <BlurIn delay={0} duration={0.6}>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-medium text-white md:text-5xl">
              Book Your Free Consultation
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              Schedule a personalized demo and discover how our AI platform can transform your business operations.
            </p>
          </div>
        </BlurIn>

        <BlurIn delay={0.2} duration={0.6}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-green-400" />
                <h2 className="mb-2 text-2xl font-medium text-white">Thank You!</h2>
                <p className="text-white/80">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={onChange}
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-white/40 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={onChange}
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-white/40 focus:outline-none"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-white/80">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={onChange}
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-white/40 focus:outline-none"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={onChange}
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-white/40 focus:outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="mb-2 block text-sm font-medium text-white/80">
                      <Calendar className="mr-1 inline h-4 w-4" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={onChange}
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white transition-colors focus:border-white/40 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="mb-2 block text-sm font-medium text-white/80">
                      <Clock className="mr-1 inline h-4 w-4" />
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={onChange}
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white transition-colors focus:border-white/40 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                    What challenges are you looking to solve?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={onChange}
                    className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-white/40 focus:outline-none"
                    placeholder="Tell us about your business needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-white px-6 py-4 font-medium text-black transition-colors hover:bg-white/90"
                >
                  Schedule Your Free Call
                </button>
              </form>
            )}
          </div>
        </BlurIn>
      </div>
    </div>
  );
}
