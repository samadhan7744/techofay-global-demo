import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  CircuitBoard,
  ClipboardCheck,
  Cloud,
  DatabaseZap,
  FileSignature,
  FlaskConical,
  Gauge,
  Globe2,
  Headphones,
  Layers3,
  LockKeyhole,
  MessageCircle,
  Microscope,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  WalletCards
} from "lucide-react";
import Footer from "@/components/Footer";
import HeroGlobe from "@/components/HeroGlobe";
import { MotionDiv, Reveal } from "@/components/Motion";
import Navigation from "@/components/Navigation";

const services = [
  {
    icon: Bot,
    title: "AI & Automation",
    items: ["AI Chatbots", "AI Agents", "Workflow Automation", "Predictive Analytics"],
    metric: "42% cycle-time reduction"
  },
  {
    icon: Gauge,
    title: "Engineering Services",
    items: ["Metallurgical Consulting", "Failure Analysis", "Root Cause Analysis", "Welding Inspection", "Corrosion Engineering", "RBI Solutions"],
    metric: "24/7 technical advisory"
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    items: ["LIMS Development", "Laboratory Automation", "NABL Compliance", "Digital Transformation"],
    metric: "99.9% traceability"
  },
  {
    icon: CircuitBoard,
    title: "Software Development",
    items: ["ERP Solutions", "CRM Solutions", "Web Applications", "Mobile Applications", "SaaS Platforms"],
    metric: "Cloud-native delivery"
  },
  {
    icon: TrendingUp,
    title: "Digital Services",
    items: ["Website Development", "E-Commerce Development", "SEO", "Branding", "Digital Marketing"],
    metric: "Growth systems"
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Consulting",
    items: ["Startup Consulting", "Market Research", "Business Plans", "Financial Modeling"],
    metric: "Investor-ready strategy"
  }
];

const limsFeatures = [
  ["AI Sample Tracking", "Computer-assisted chain-of-custody, predictive TAT alerts and smart routing."],
  ["Blockchain Audit Trail", "Immutable event trails for compliance, accreditation and forensic defensibility."],
  ["Smart Compliance Engine", "NABL, ISO 17025 and internal SOP logic embedded into daily operations."],
  ["Instrument Integration", "Direct ingestion from balances, spectrometers, UTM, microscopy and QA devices."],
  ["Voice-to-LIMS", "Hands-free sample updates, observations and approvals for busy laboratories."],
  ["Real-Time Dashboards", "Executive visibility into workload, quality, utilization and SLA exposure."],
  ["Cloud Platform Architecture", "Secure multi-tenant SaaS with role-based portals and encrypted records."]
];

const portfolio = [
  ["Engineering Projects", "Critical exchanger failure investigation", "Metallurgy, RCA, FEA review", "Risk-ranked remediation plan", "31% maintenance cost avoidance"],
  ["Software Projects", "Enterprise CRM and quotation suite", "Next.js, Node.js, PostgreSQL", "Unified lead-to-cash workflow", "3.4x faster proposal turnaround"],
  ["AI Projects", "AI service desk and agent automation", "LLMs, vector search, workflow orchestration", "Resolved tier-1 requests automatically", "58% support load reduction"],
  ["Laboratory Projects", "LIMS modernization for testing lab", "Cloud LIMS, instrument APIs, dashboards", "Digital sample lifecycle", "97% manual entry reduction"],
  ["Branding Projects", "Premium industrial digital presence", "Web, SEO, content systems, analytics", "Investor-grade corporate identity", "2.8x qualified inquiry lift"]
];

const industries = ["Oil & Gas", "Petrochemicals", "Manufacturing", "Healthcare", "Pharmaceuticals", "Mining", "Laboratories", "Infrastructure", "Food & Agriculture"];

const features = [
  [Headphones, "AI Assistant Chat Widget"],
  [CalendarCheck, "Appointment Booking System"],
  [MessageCircle, "WhatsApp Integration"],
  [Target, "Lead Management System"],
  [Layers3, "CRM Integration"],
  [MailIcon, "Newsletter Subscription"],
  [LockKeyhole, "Client Portal Preview"],
  [BarChart3, "Project Tracking Dashboard"],
  [WalletCards, "Online Payment Gateway"],
  [FileSignature, "Proposal Generator"],
  [ClipboardCheck, "Quotation Request System"]
];

function MailIcon(props: { size?: number; className?: string }) {
  return <DatabaseZap {...props} />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-white">
      <Navigation />
      <section className="relative min-h-screen overflow-hidden bg-radial-luxury pt-24">
        <div className="absolute inset-0 grid-mask opacity-45" />
        <HeroGlobe />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,7,13,.28)_45%,rgba(5,7,13,.92)_86%)]" />
        <div className="section-shell relative z-10 flex min-h-[calc(100vh-96px)] items-center py-16">
          <div className="max-w-4xl">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/10 px-4 py-2 text-sm text-platinum backdrop-blur-xl">
                <Sparkles size={16} className="text-gold" />
                Enterprise AI, engineering intelligence and digital transformation
              </div>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.04] text-white md:text-7xl">
                Transforming Industries Through <span className="gold-text">AI, Engineering & Digital Innovation</span>
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-silver md:text-xl">
                Empowering businesses with AI-powered solutions, engineering excellence, software innovation, laboratory automation, and digital transformation.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link className="group rounded-sm bg-gold px-6 py-4 font-semibold text-obsidian shadow-glow transition hover:bg-champagne" href="/contact">
                  Request Consultation <ArrowRight className="ml-2 inline transition group-hover:translate-x-1" size={18} />
                </Link>
                <Link className="rounded-sm border border-white/18 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/16" href="#services">
                  Explore Services
                </Link>
                <Link className="rounded-sm border border-gold/35 px-6 py-4 font-semibold text-champagne transition hover:bg-gold/10" href="/contact">
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="absolute bottom-16 right-0 hidden w-[420px] grid-cols-2 gap-4 xl:grid">
            {["AI Agents", "LIMS Cloud", "RBI Analytics", "ERP/CRM"].map((label, index) => (
              <MotionDiv
                key={label}
                className="premium-border animate-float rounded-md p-4 shadow-blueglow"
                style={{ animationDelay: `${index * 0.7}s` }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="mb-7 flex items-center justify-between">
                  <Network size={19} className="text-gold" />
                  <span className="text-xs text-silver">LIVE</span>
                </div>
                <p className="font-semibold text-white">{label}</p>
                <p className="mt-2 text-xs leading-5 text-silver">Connected intelligence layer</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-8">
        <div className="section-shell grid gap-6 text-center md:grid-cols-4">
          {[
            ["120+", "Projects delivered"],
            ["14", "Industries served"],
            ["99.9%", "Traceable workflows"],
            ["3.5x", "Average process acceleration"]
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-3xl font-semibold text-white">{value}</p>
              <p className="mt-1 text-sm text-silver">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section-shell py-24">
        <Reveal className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-gold">Enterprise Capabilities</p>
          <h2 className="text-4xl font-semibold md:text-5xl">A single partner for AI, engineering, labs, software and growth.</h2>
          <p className="mt-5 text-lg leading-8 text-silver">Each practice is designed to plug into boardroom strategy, plant-floor realities and digital product execution.</p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title}>
              <MotionDiv className="premium-border h-full rounded-md p-6 transition" whileHover={{ y: -10 }}>
                <service.icon className="mb-6 text-gold" size={32} />
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <span className="rounded-sm bg-white/10 px-3 py-1 text-xs text-champagne">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="grid gap-2">
                  {service.items.map((item) => (
                    <p key={item} className="flex items-center gap-2 text-sm text-silver">
                      <CheckCircle2 size={15} className="text-gold" /> {item}
                    </p>
                  ))}
                </div>
                <div className="mt-7 rounded-sm border border-white/10 bg-white/[0.055] p-3 text-sm text-platinum">{service.metric}</div>
              </MotionDiv>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="lims" className="overflow-hidden bg-[#07111f] py-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase text-gold">Flagship SaaS Product</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Futuristic LIMS platform for high-compliance laboratories.</h2>
            <p className="mt-5 text-lg leading-8 text-silver">A cloud laboratory command center with AI sample intelligence, audit-ready workflows, real-time dashboards and instrument-native automation.</p>
            <div className="mt-8 grid gap-3">
              {limsFeatures.map(([title, body]) => (
                <div key={title} className="flex gap-4 rounded-sm border border-white/10 bg-white/[0.045] p-4">
                  <BadgeCheck className="mt-1 shrink-0 text-gold" size={20} />
                  <div>
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-silver">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="premium-border rounded-md p-4 shadow-blueglow">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-silver">Techofay LIMS Cloud</p>
                  <p className="text-xl font-semibold">Executive Dashboard</p>
                </div>
                <Cloud className="text-gold" />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {["Samples", "Compliance", "SLA Risk"].map((label, index) => (
                  <div key={label} className="rounded-sm bg-white/[0.065] p-4">
                    <p className="text-xs text-silver">{label}</p>
                    <p className="mt-2 text-2xl font-semibold">{["8,426", "99.7%", "04"][index]}</p>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-gold" style={{ width: `${[82, 96, 34][index]}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
                <div className="rounded-sm border border-white/10 bg-[#07111f] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="font-semibold">Live Sample Flow</p>
                    <span className="text-xs text-gold">AI ROUTED</span>
                  </div>
                  <div className="space-y-4">
                    {["Received", "Preparation", "Instrument", "Review", "Certificate"].map((step, index) => (
                      <div key={step} className="flex items-center gap-4">
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-xs">{index + 1}</span>
                        <div className="h-2 flex-1 rounded-full bg-white/10">
                          <div className="h-2 rounded-full bg-gradient-to-r from-cobalt to-gold" style={{ width: `${94 - index * 13}%` }} />
                        </div>
                        <span className="w-24 text-xs text-silver">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-sm border border-white/10 bg-[#07111f] p-5">
                  <p className="mb-5 font-semibold">Compliance Engine</p>
                  <div className="grid gap-3">
                    {["NABL Rules", "Role Access", "E-Signature", "Audit Trail"].map((item) => (
                      <p key={item} className="flex items-center justify-between text-sm text-silver">
                        {item} <ShieldCheck size={16} className="text-gold" />
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="portfolio" className="section-shell py-24">
        <Reveal className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-gold">Case Studies</p>
          <h2 className="text-4xl font-semibold md:text-5xl">Premium project delivery with measurable ROI.</h2>
        </Reveal>
        <div className="grid gap-4">
          {portfolio.map(([type, challenge, stack, solution, roi]) => (
            <Reveal key={type}>
              <div className="premium-border grid gap-5 rounded-md p-6 lg:grid-cols-[.7fr_1fr_1fr_1fr_.8fr]">
                <p className="font-semibold text-white">{type}</p>
                <p className="text-sm leading-6 text-silver"><span className="text-gold">Challenge:</span> {challenge}</p>
                <p className="text-sm leading-6 text-silver"><span className="text-gold">Technology:</span> {stack}</p>
                <p className="text-sm leading-6 text-silver"><span className="text-gold">Solution:</span> {solution}</p>
                <p className="text-sm leading-6 text-platinum"><span className="text-gold">ROI:</span> {roi}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.025] py-24">
        <div className="section-shell">
          <Reveal className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase text-gold">Industries Served</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Built for regulated, asset-heavy and high-growth sectors.</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <MotionDiv key={industry} className="premium-border flex items-center justify-between rounded-md p-5" whileHover={{ x: 6 }}>
                <span className="font-semibold">{industry}</span>
                <ChevronRight className="text-gold" size={18} />
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase text-gold">Trust & Authority</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Boardroom confidence with technical depth.</h2>
            <p className="mt-5 text-lg leading-8 text-silver">Project statistics, success stories, technology partnerships and governance controls are designed into every client engagement.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Industry Certifications", "Global Presence Map", "Technology Partnerships", "Success Stories"].map((item) => (
                <div key={item} className="rounded-sm border border-white/10 bg-white/[0.045] p-4 text-sm text-platinum">
                  <Globe2 className="mb-4 text-gold" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="premium-border rounded-md p-6">
              <p className="text-xl font-semibold">Client Testimonials</p>
              <div className="mt-6 grid gap-4">
                {[
                  "Techofay translated complex engineering risk into an actionable digital operating model.",
                  "Their LIMS approach gave us traceability, dashboards and audit confidence without slowing the lab.",
                  "The AI automation team delivered board-visible efficiency gains within the first quarter."
                ].map((quote, index) => (
                  <div key={quote} className="rounded-sm bg-white/[0.055] p-5">
                    <p className="leading-7 text-platinum">"{quote}"</p>
                    <p className="mt-4 text-sm text-gold">Enterprise Client {index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#07111f] py-24">
        <div className="section-shell">
          <Reveal className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase text-gold">Advanced Digital Features</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Everything required to operate like a modern enterprise.</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([Icon, label]) => (
              <div key={String(label)} className="premium-border rounded-md p-5">
                <Icon className="mb-5 text-gold" size={24} />
                <p className="font-semibold">{String(label)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="premium-border grid items-center gap-8 rounded-md p-8 md:p-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-gold">Investor-ready Growth Partner</p>
            <h2 className="text-4xl font-semibold">Modernize engineering, laboratories and business operations with one premium team.</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-silver">Book a consultation to scope automation opportunities, digital products, QA systems and consulting priorities.</p>
          </div>
          <Link href="/contact" className="rounded-sm bg-gold px-7 py-4 font-semibold text-obsidian shadow-glow transition hover:bg-champagne">
            Start Consultation
          </Link>
        </div>
      </section>
      <Footer />
      <Link
        href="https://wa.me/919876543210"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-2xl"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle />
      </Link>
    </main>
  );
}
