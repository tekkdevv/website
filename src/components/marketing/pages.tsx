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
import { MarketingFooter } from "@/components/marketing/footer";
import { MarketingHero } from "@/components/marketing/hero";
import { MarketingNavigation } from "@/components/marketing/navigation";

const homeStats = [
  { icon: Target, value: "10K+", label: "Active Users" },
  { icon: Rocket, value: "99.9%", label: "Uptime" },
  { icon: Users, value: "500+", label: "Enterprise Clients" },
];

const homeTestimonials = [
  {
    quote:
      "This AI platform transformed how we handle customer inquiries. We've reduced response time by 80% and our customers love it.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
  },
  {
    quote:
      "The automation capabilities are incredible. What used to take our team days now happens in minutes. It's been a game-changer.",
    author: "Michael Chen",
    role: "Operations Director, DataFlow",
  },
  {
    quote:
      "Implementation was seamless and the ROI was immediate. Their support team is exceptional and always there when we need them.",
    author: "Emily Rodriguez",
    role: "CTO, InnovateLabs",
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
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-12">
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

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 md:grid-cols-3">
            {homeStats.map((stat, index) => (
              <BlurIn key={stat.label} delay={0.1 * index} duration={0.6}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/10">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mb-2 text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              </BlurIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <BlurIn delay={0} duration={0.6}>
            <h2 className="mb-16 text-center text-3xl font-medium text-white md:text-4xl">
              Trusted by Industry Leaders
            </h2>
          </BlurIn>

          <div className="grid gap-8 md:grid-cols-3">
            {homeTestimonials.map((testimonial, index) => (
              <BlurIn key={testimonial.author} delay={0.1 * index} duration={0.6}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <p className="mb-6 text-lg leading-relaxed text-white/80">
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

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <BlurIn delay={0} duration={0.6}>
            <h2 className="mb-6 text-3xl font-medium text-white md:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/80">
              Join thousands of businesses already using AI to transform their operations.
            </p>
            <Link
              href="/book-call"
              className="inline-flex items-center rounded-lg bg-white px-8 py-4 font-medium text-black transition-colors hover:bg-white/90"
            >
              Book Your Free Consultation
            </Link>
          </BlurIn>
        </div>
      </section>

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
