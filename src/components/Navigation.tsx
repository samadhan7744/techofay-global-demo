import Link from "next/link";

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#lims", label: "LIMS" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" }
];

export default function Navigation() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-obsidian/70 backdrop-blur-2xl">
      <nav className="section-shell flex h-[72px] items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Techofay Global home">
          <span className="grid h-10 w-10 place-items-center rounded-sm border border-gold/40 bg-white/10 font-semibold text-gold shadow-glow">
            TG
          </span>
          <span className="leading-none">
            <span className="block text-sm font-semibold text-white">Techofay Global</span>
            <span className="block text-xs text-silver">AI + Engineering Enterprise</span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-silver transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="rounded-sm border border-gold/50 bg-gold px-4 py-2 text-sm font-semibold text-obsidian shadow-glow transition hover:bg-champagne"
        >
          Request Consultation
        </Link>
      </nav>
    </header>
  );
}
