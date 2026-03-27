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
import { MarketingHero } from "@/components/marketing/hero";
import { MarketingNavigation } from "@/components/marketing/navigation";

const homeStats = [
  { icon: Target, value: "50+", label: "Projects Delivered" },
  { icon: Rocket, value: "Fast Delivery", label: "Quick turnaround on client work" },
  { icon: Users, value: "Ongoing Support", label: "Reliable help after launch" },
];

const homeTestimonials = [
  {
    quote:
      "TekDev stepped into a messy codebase, fixed the performance issues, and got our release back on track in days.",
    author: "Sarah Johnson",
    role: "Founder, HealthStack",
  },
  {
    quote:
      "They felt like a true product partner, not just a dev shop. Clear communication, strong execution, and zero drama.",
    author: "Michael Chen",
    role: "COO, BrightFlow",
  },
  {
    quote:
      "We hired TekDev for bug fixes and ended up trusting them with a full rebuild. The quality was consistently strong.",
    author: "Emily Rodriguez",
    role: "CTO, Northlane",
  },
];

const showcaseProjects = [
  {
    id: 1,
    title: "KYMA",
    description: "AI agency website and lead funnel rebuilt for faster conversion and sharper premium positioning.",
    tech: "Next.js · TypeScript · Framer Motion",
    result: "Increased qualified inbound by 32%",
    image: "/images/p1.svg",
  },
  {
    id: 2,
    title: "Mugen Studio",
    description: "Portfolio experience refined with better storytelling, motion, and a cleaner service journey.",
    tech: "React · Tailwind · Motion Design",
    result: "Reduced bounce rate by 27%",
    image: "/images/p2.svg",
  },
  {
    id: 3,
    title: "Essentia",
    description: "Ecommerce storefront optimized for performance, merchandising clarity, and mobile conversion.",
    tech: "Next.js · Shopify · UI Engineering",
    result: "Cut load time by 40%",
    image: "/images/p3.svg",
  },
  {
    id: 4,
    title: "Axiom",
    description: "High-impact landing experience for a performance brand with stronger visual hierarchy and launch polish.",
    tech: "React · CMS Integration · Tailwind",
    result: "Lifted engagement by 24%",
    image: "/images/p4.svg",
  },
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
    title: "Workflow Automation",
    description:
      "Create custom workflows that automate your business processes from start to finish. Reduce manual work and eliminate errors.",
    details: [
      "Visual workflow builder",
      "Conditional logic and branching",
      "Multi-step automation chains",
      "Real-time monitoring and alerts",
    ],
  },
  {
    icon: MessageSquare,
    title: "AI Chat Assistant",
    description:
      "Deploy intelligent chatbots that understand context and provide human-like responses to customer queries.",
    details: [
      "Natural language processing",
      "Multi-language support",
      "Custom training on your data",
      "24/7 availability",
    ],
  },
  {
    icon: FileSearch,
    title: "Document Intelligence",
    description:
      "Extract insights from documents automatically. Process invoices, contracts, and reports with AI-powered OCR.",
    details: [
      "Automatic data extraction",
      "Smart categorization",
      "Compliance checking",
      "Bulk processing",
    ],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get deep insights into your data with AI-powered analytics that identify patterns and predict trends.",
    details: [
      "Predictive modeling",
      "Real-time dashboards",
      "Custom reports",
      "Anomaly detection",
    ],
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-grade security with end-to-end encryption, role-based access control, and compliance certifications.",
    details: [
      "SOC 2 Type II certified",
      "GDPR compliant",
      "Single sign-on (SSO)",
      "Audit logs",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description:
      "Seamlessly connect with your existing tools and platforms through our extensive integration library.",
    details: [
      "100+ pre-built integrations",
      "REST API access",
      "Webhook support",
      "Custom connectors",
    ],
  },
];

const learnFeatures = [
  {
    icon: Brain,
    title: "Intelligent Automation",
    description:
      "Leverage advanced AI algorithms to automate repetitive tasks and streamline your workflows with precision and reliability.",
  },
  {
    icon: Sparkles,
    title: "Lightning Fast Processing",
    description:
      "Process thousands of data points in seconds, enabling real-time decision making and rapid business insights.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption and compliance with international data protection standards to keep your information safe.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Harness the power of machine learning to forecast trends and make data-driven decisions with confidence.",
  },
  {
    icon: Users,
    title: "Seamless Integration",
    description:
      "Connect with your existing tools and platforms through our robust API and pre-built integrations.",
  },
  {
    icon: MessageSquare,
    title: "Smart Assistants",
    description:
      "Deploy AI-powered assistants that understand context and provide intelligent responses to complex queries.",
  },
];

const benefits = [
  {
    stat: "90%",
    label: "Time Saved",
    description: "On average, our clients save 90% of time on manual tasks",
  },
  {
    stat: "5x",
    label: "Faster Insights",
    description: "Get actionable insights 5 times faster than traditional methods",
  },
  {
    stat: "99.9%",
    label: "Uptime",
    description: "Enterprise-grade reliability you can count on",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for small teams getting started with AI automation.",
    features: [
      "Up to 10,000 API calls/month",
      "5 automated workflows",
      "Basic analytics dashboard",
      "Email support",
      "1 team member",
      "Standard integrations",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "For growing businesses ready to scale their operations.",
    features: [
      "Up to 100,000 API calls/month",
      "Unlimited workflows",
      "Advanced analytics & reporting",
      "Priority support",
      "Up to 10 team members",
      "All integrations",
      "Custom AI training",
      "Dedicated account manager",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex needs.",
    features: [
      "Unlimited API calls",
      "Unlimited workflows",
      "Enterprise analytics suite",
      "24/7 phone & email support",
      "Unlimited team members",
      "Custom integrations",
      "Advanced security features",
      "SLA guarantee",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
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
    <div className="min-h-screen bg-[#070612]">
      <MarketingNavigation />
      <MarketingHero />

      <section className="border-t border-white/10 py-8 sm:py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {homeStats.map((stat, index) => (
              <BlurIn key={stat.label} delay={0.1 * index} duration={0.6}>
                <div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-left sm:p-5 md:h-full md:flex-col md:items-start md:gap-5 lg:items-center lg:text-center">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 sm:h-14 sm:w-14">
                    <stat.icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-white/60">{stat.label}</div>
                  </div>
                </div>
              </BlurIn>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-white/10 py-10 sm:py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <BlurIn delay={0} duration={0.6}>
            <div className="mb-10 max-w-3xl sm:mb-12 lg:mb-14">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50 sm:text-sm">Selected Work</p>
              <h2 className="mt-4 text-3xl font-medium text-white md:text-5xl">
                Work that proves how we solve real business problems.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-base lg:text-lg">
                A snapshot of recent projects across product builds, redesigns,
                performance improvements, and launch-ready client work.
              </p>
            </div>
          </BlurIn>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {showcaseProjects.map((project, index) => (
              <BlurIn key={project.id} delay={0.08 * index} duration={0.6}>
                <Link
                  href={`/projects/${project.id}`}
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:hover:scale-[1.02]"
                >
                  <div className="relative aspect-[1.35/1] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="space-y-3 p-5 sm:p-6">
                    <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:gap-4">
                      <h3 className="text-xl font-medium text-white sm:text-2xl">{project.title}</h3>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/70 sm:text-xs">
                        Case Study
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/75 sm:text-base">{project.description}</p>
                    <p className="text-sm text-white/55">{project.tech}</p>
                    <p className="text-sm font-medium text-white/90">{project.result}</p>
                  </div>
                </Link>
              </BlurIn>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/10 py-10 sm:py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <BlurIn delay={0} duration={0.6}>
            <div className="mb-10 max-w-3xl sm:mb-12 lg:mb-14">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50 sm:text-sm">Services</p>
              <h2 className="mt-4 text-3xl font-medium text-white md:text-5xl">
                What we do for teams that need dependable execution.
              </h2>
            </div>
          </BlurIn>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
            {agencyServices.map((service, index) => (
              <BlurIn key={service.title} delay={0.08 * index} duration={0.6}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.32)] md:hover:scale-[1.02] sm:p-8">
                  <service.icon className="mb-5 h-10 w-10 text-white" />
                  <h3 className="text-xl font-medium text-white sm:text-2xl">{service.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">{service.description}</p>
                </div>
              </BlurIn>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-white/10 py-10 sm:py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <BlurIn delay={0} duration={0.6}>
            <div className="mb-10 max-w-3xl sm:mb-12 lg:mb-14">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50 sm:text-sm">How It Works</p>
              <h2 className="mt-4 text-3xl font-medium text-white md:text-5xl">
                A straightforward process from first message to final delivery.
              </h2>
            </div>
          </BlurIn>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <BlurIn key={step.title} delay={0.08 * index} duration={0.6}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                  <step.icon className="mb-5 h-10 w-10 text-white" />
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45 sm:text-sm">
                    Step 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-medium text-white sm:text-2xl">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">{step.description}</p>
                </div>
              </BlurIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-10 sm:py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-12">
          <BlurIn delay={0} duration={0.6}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm sm:p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50 sm:text-sm">About TekDev</p>
              <p className="mt-6 text-sm leading-relaxed text-white/80 sm:text-base md:text-xl">
                We&apos;re a client-focused software team that helps startups and
                businesses ship better products, fix complex issues, and move faster with
                confidence. We specialize in modern web builds, integrations, and
                performance-focused engineering that clients can actually rely on.
              </p>
            </div>
          </BlurIn>
        </div>
      </section>

      <section className="border-t border-white/10 py-10 sm:py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <BlurIn delay={0} duration={0.6}>
            <h2 className="mb-10 text-center text-3xl font-medium text-white sm:mb-12 md:text-4xl lg:mb-16">
              What clients say after working with us
            </h2>
          </BlurIn>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {homeTestimonials.map((testimonial, index) => (
              <BlurIn key={testimonial.author} delay={0.1 * index} duration={0.6}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                  <p className="mb-6 text-base leading-relaxed text-white/80 sm:text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-medium text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </div>
              </BlurIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-10 sm:py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-12">
          <BlurIn delay={0} duration={0.6}>
            <h2 className="mb-6 text-3xl font-medium text-white md:text-5xl">
              Have a project in mind? Let&apos;s build it together.
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-white/80 sm:mb-10 sm:text-base lg:text-lg">
              Whether you need a fast fix, a new product, or a more reliable technical partner,
              we&apos;re ready to help.
            </p>
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center rounded-lg bg-white px-8 py-4 font-medium text-black transition-colors hover:bg-white/90 sm:w-auto"
            >
              Contact Us
            </Link>
          </BlurIn>
        </div>
      </section>

      <ContactSection />
      <MarketingFooter />
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
