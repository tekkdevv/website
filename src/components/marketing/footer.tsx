import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 lg:flex-row lg:px-12">
        <div className="text-sm text-white/60">© 2026 TekDev. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <Link href="/#work" className="text-sm text-white/60 transition-colors hover:text-white">
            Work
          </Link>
          <Link href="/#services" className="text-sm text-white/60 transition-colors hover:text-white">
            Services
          </Link>
          <Link href="/#contact" className="text-sm text-white/60 transition-colors hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
