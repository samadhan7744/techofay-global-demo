import { Building2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Reveal } from "@/components/Motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white">
      <Navigation />
      <section className="bg-radial-luxury pt-36">
        <div className="section-shell grid gap-10 pb-20 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase text-gold">Contact</p>
            <h1 className="text-5xl font-semibold md:text-7xl">Start a premium transformation conversation.</h1>
            <p className="mt-6 text-lg leading-8 text-silver">
              Tell us about your AI, engineering, LIMS, software, consulting or digital growth objectives. The team will respond with a structured next step.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                [Mail, "hello@techofayglobal.com"],
                [Phone, "+91 98765 43210"],
                [MapPin, "India headquarters, global delivery"],
                [MessageCircle, "WhatsApp consultation available"]
              ].map(([Icon, text]) => (
                <p key={String(text)} className="flex items-center gap-3 text-silver">
                  <Icon className="text-gold" size={20} /> {String(text)}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <form className="premium-border rounded-md p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold" placeholder="Full name" />
                <input className="rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold" placeholder="Business email" />
                <input className="rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold" placeholder="Company" />
                <input className="rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold" placeholder="Phone / WhatsApp" />
              </div>
              <select className="mt-4 w-full rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold">
                <option>AI & Automation</option>
                <option>Engineering Consulting</option>
                <option>LIMS / Laboratory Automation</option>
                <option>ERP / CRM / Software</option>
                <option>Digital Marketing</option>
                <option>Business Consulting</option>
              </select>
              <textarea className="mt-4 min-h-36 w-full rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold" placeholder="Project goals, timelines and requirements" />
              <button className="mt-4 w-full rounded-sm bg-gold px-5 py-4 font-semibold text-obsidian">Request Consultation</button>
            </form>
          </Reveal>
        </div>
      </section>
      <section className="section-shell grid gap-6 py-20 lg:grid-cols-[1fr_1fr]">
        <div className="premium-border min-h-80 rounded-md p-6">
          <Building2 className="mb-5 text-gold" />
          <h2 className="text-2xl font-semibold">Office Information</h2>
          <p className="mt-3 leading-7 text-silver">Enterprise consulting office, India. Serving global clients through hybrid delivery, remote workshops and on-site engineering support.</p>
        </div>
        <div className="premium-border min-h-80 overflow-hidden rounded-md">
          <iframe
            title="Google Maps preview"
            className="h-full min-h-80 w-full grayscale invert"
            loading="lazy"
            src="https://maps.google.com/maps?q=India&t=&z=4&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </section>
      <a
        href="https://wa.me/919876543210"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-2xl"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle />
      </a>
      <Footer />
    </main>
  );
}
