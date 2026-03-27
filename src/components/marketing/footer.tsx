import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 lg:flex-row lg:px-12">
        <div className="text-sm text-white/60">© 2024 AI Automation. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <Link href="/features" className="text-sm text-white/60 transition-colors hover:text-white">
            Features
          </Link>
          <Link href="/pricing" className="text-sm text-white/60 transition-colors hover:text-white">
            Pricing
          </Link>
          <Link href="/learn" className="text-sm text-white/60 transition-colors hover:text-white">
            Learn
          </Link>
        </div>
      </div>
    </footer>
  );
}
