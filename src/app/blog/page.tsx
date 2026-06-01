import { ArrowRight, BookOpen, CircuitBoard, FlaskConical, Megaphone, Rocket, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Reveal } from "@/components/Motion";

const categories = [
  ["AI & Technology", CircuitBoard, "Agents, automation, data platforms and applied AI strategy."],
  ["Engineering", FlaskConical, "RCA, metallurgy, reliability, corrosion and inspection thinking."],
  ["Quality Assurance", ShieldCheck, "Compliance systems, audit readiness and process control."],
  ["Inspection", BookOpen, "Field methods, reporting discipline and asset integrity programs."],
  ["Startups", Rocket, "Business models, MVPs, fundraising assets and market validation."],
  ["Business Growth", Megaphone, "Positioning, SEO, campaigns, lead systems and digital marketing."]
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white">
      <Navigation />
      <section className="bg-radial-luxury pt-36">
        <div className="section-shell pb-20">
          <Reveal className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase text-gold">Knowledge Center</p>
            <h1 className="text-5xl font-semibold md:text-7xl">Executive insights for technology-led industrial growth.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-silver">
              Practical intelligence across AI, engineering, quality, inspection, startups, business growth and digital marketing.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section-shell grid gap-5 py-20 md:grid-cols-2 lg:grid-cols-3">
        {categories.map(([title, Icon, body]) => (
          <div key={String(title)} className="premium-border rounded-md p-6">
            <Icon className="mb-6 text-gold" size={30} />
            <p className="text-xl font-semibold">{String(title)}</p>
            <p className="mt-3 min-h-20 text-sm leading-6 text-silver">{String(body)}</p>
            <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-champagne">
              View articles <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </section>
      <section className="bg-[#07111f] py-20">
        <div className="section-shell premium-border rounded-md p-8">
          <p className="text-sm font-semibold uppercase text-gold">Newsletter</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-semibold">Get premium technical and business insights.</h2>
              <p className="mt-3 text-silver">Monthly notes on automation, laboratory modernization, engineering risk and growth systems.</p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row">
              <input className="min-w-72 rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold" placeholder="Email address" />
              <button className="rounded-sm bg-gold px-5 py-3 font-semibold text-obsidian">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
