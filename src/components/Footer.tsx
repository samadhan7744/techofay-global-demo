import Link from "next/link";
import { Linkedin, Mail, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#03050a] py-12">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-sm border border-gold/40 bg-white/10 font-semibold text-gold">TG</span>
            <div>
              <p className="font-semibold text-white">Techofay Global</p>
              <p className="text-sm text-silver">Engineering intelligence for modern enterprises.</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-6 text-silver">
            AI automation, engineering consulting, LIMS platforms, software products, quality systems and digital growth programs for ambitious organizations.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold text-white">Company</p>
          <div className="grid gap-3 text-sm text-silver">
            <Link href="/#services">Services</Link>
            <Link href="/#lims">LIMS Platform</Link>
            <Link href="/blog">Knowledge Center</Link>
            <Link href="/careers">Careers</Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold text-white">Connect</p>
          <div className="grid gap-3 text-sm text-silver">
            <span className="flex items-center gap-2"><Mail size={16} /> hello@techofayglobal.com</span>
            <span className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><MessageCircle size={16} /> WhatsApp Consultation</span>
            <span className="flex items-center gap-2"><Linkedin size={16} /> LinkedIn / Techofay Global</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
