"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/container";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname() ?? "";

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#09090a]/85 backdrop-blur-xl">
      <Container>
        <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#d5b06a]/40 bg-[#d5b06a]/10 text-xs font-bold text-[#f0ddc0] shadow-sm">
              TD
            </div>
            <span className="text-sm font-semibold tracking-wide text-white sm:text-base">
              TekkDevv
            </span>
          </Link>
          <nav className="hidden items-center justify-center gap-8 text-xs font-medium text-[#a4a9b3] sm:flex sm:text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative transition hover:text-white",
                  (link.href === "/contact"
                    ? pathname.startsWith("/contact")
                    : pathname === "/") &&
                    "text-white after:absolute after:inset-x-0 after:-bottom-2 after:h-px after:bg-[#d5b06a]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/start-project"
              className="hidden rounded-full bg-[#efe4cf] px-6 py-3 text-xs font-medium text-[#111111] transition hover:bg-white sm:inline-flex"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
