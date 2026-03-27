"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";

const links = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/learn", label: "Learn" },
];

export function MarketingNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-transparent backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-white" />
            <span className="text-xl font-medium text-white">AI Automation</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-call"
              className="rounded-full bg-white px-6 py-2 font-medium text-black transition-colors hover:bg-white/90"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
