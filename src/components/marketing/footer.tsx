import Link from "next/link";

const footerLinks = [
  { href: "/work",     label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/pricing",  label: "Pricing" },
  { href: "/about",    label: "About" },
  { href: "/process",  label: "Process" },
  { href: "/contact",  label: "Contact" },
];

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/[0.05] py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link
            href="/"
            className="text-2xl tracking-tight text-white/60 transition-colors hover:text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            TekkDevv<sup className="text-[9px]">&reg;</sup>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 transition-colors hover:text-white/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-white/25">© 2026 TekkDevv.</p>
        </div>
      </div>
    </footer>
  );
}
