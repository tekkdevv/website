"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "@/components/marketing/magnetic";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
];

export function MarketingNavigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.05] bg-[hsl(201,100%,5%)]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* Logo */}
          <Magnetic>
            <Link
              href="/"
              onClick={handleLogoClick}
              className="text-2xl tracking-tight text-foreground sm:text-3xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              TekDev<sup className="text-[10px]">&reg;</sup>
            </Link>
          </Magnetic>

          {/* Desktop: centered pill */}
          <div className="hidden items-center gap-1 rounded-full border border-white/[0.09] bg-white/[0.04] px-2 py-2 backdrop-blur-sm lg:flex">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white/[0.12] text-white shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop: CTA */}
          <div className="hidden lg:block">
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.06] px-5 py-2 text-sm font-medium text-white/80 transition-all hover:border-white/[0.2] hover:bg-white/[0.12] hover:text-white"
              >
                Start a Project
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Magnetic>
          </div>

          {/* Mobile / tablet */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <Link
              href="/contact"
              className="hidden rounded-full border border-white/[0.08] bg-white/[0.05] px-4 py-2 text-sm text-white/80 sm:block"
            >
              Start a Project
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((c) => !c)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04]"
            >
              <span
                className={`absolute flex h-[14px] w-[14px] flex-col items-start justify-center gap-[4.5px] transition-all duration-300 ${
                  open ? "opacity-0 scale-75" : "opacity-100 scale-100"
                }`}
              >
                <span className="h-[1.5px] w-full rounded-full bg-white/70" />
                <span className="h-[1.5px] w-[10px] rounded-full bg-white/50" />
              </span>
              <X
                className={`absolute h-4 w-4 text-white/70 transition-all duration-300 ${
                  open ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Dim backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute inset-x-4 top-[4.5rem] overflow-hidden rounded-2xl border border-white/[0.08] bg-[hsl(201,100%,5%)]/95 p-2 shadow-2xl backdrop-blur-2xl"
            >
              {links.map((link, i) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.18 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors ${
                        isActive
                          ? "bg-white/[0.07] text-white"
                          : "text-white/50 hover:bg-white/[0.03] hover:text-white/80"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: links.length * 0.04, duration: 0.2 }}
                className="mt-1.5 border-t border-white/[0.05] pt-1.5"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/[0.07] px-4 py-3.5 text-[15px] font-medium text-white/80 transition-colors hover:bg-white/[0.12] hover:text-white"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
