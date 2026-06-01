import { BriefcaseBusiness, GraduationCap, Upload, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Reveal } from "@/components/Motion";

const openings = [
  ["AI Automation Engineer", "Remote / Hybrid", "LLM agents, workflow automation, API orchestration"],
  ["Metallurgical Consultant", "India", "Failure analysis, RCA, corrosion and inspection advisory"],
  ["LIMS Implementation Specialist", "Hybrid", "Laboratory workflows, compliance and instrument integration"],
  ["Full-Stack Developer", "Remote", "Next.js, Node.js, PostgreSQL and enterprise dashboards"],
  ["Digital Growth Strategist", "Remote", "SEO, paid media, brand systems and B2B funnels"]
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white">
      <Navigation />
      <section className="bg-radial-luxury pt-36">
        <div className="section-shell pb-20">
          <Reveal className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase text-gold">Careers</p>
            <h1 className="text-5xl font-semibold md:text-7xl">Build the future of AI, engineering and digital operations.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-silver">
              Join a multidisciplinary team working across automation, industrial consulting, laboratory technology, software and business transformation.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section-shell grid gap-8 py-20 lg:grid-cols-[1fr_.8fr]">
        <div>
          <h2 className="mb-6 text-3xl font-semibold">Current Openings</h2>
          <div className="grid gap-4">
            {openings.map(([role, location, focus]) => (
              <div key={role} className="premium-border rounded-md p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xl font-semibold">{role}</p>
                    <p className="mt-2 text-sm text-silver">{focus}</p>
                  </div>
                  <span className="rounded-sm border border-gold/30 px-3 py-1 text-sm text-champagne">{location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="premium-border rounded-md p-6">
          <Upload className="mb-5 text-gold" />
          <h2 className="text-2xl font-semibold">Resume Upload</h2>
          <form className="mt-6 grid gap-4">
            <input className="rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold" placeholder="Full name" />
            <input className="rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold" placeholder="Email address" />
            <select className="rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold">
              <option>Career application</option>
              <option>Internship application</option>
            </select>
            <label className="rounded-sm border border-dashed border-gold/35 bg-white/[0.035] p-5 text-sm text-silver">
              Upload resume or portfolio
              <input className="mt-3 block w-full text-sm" type="file" />
            </label>
            <button className="rounded-sm bg-gold px-5 py-3 font-semibold text-obsidian">Submit Application</button>
          </form>
        </aside>
      </section>
      <section className="bg-[#07111f] py-20">
        <div className="section-shell grid gap-4 md:grid-cols-3">
          {[
            [Users, "Join Us", "Work with strategists, engineers, developers and growth leaders."],
            [GraduationCap, "Internships", "Structured learning tracks for AI, software, engineering and marketing."],
            [BriefcaseBusiness, "Leadership", "Own meaningful client outcomes across high-impact enterprise programs."]
          ].map(([Icon, title, body]) => (
            <div key={String(title)} className="premium-border rounded-md p-6">
              <Icon className="mb-5 text-gold" />
              <p className="text-xl font-semibold">{String(title)}</p>
              <p className="mt-3 text-sm leading-6 text-silver">{String(body)}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
