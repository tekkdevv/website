import Container from "@/components/ui/container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090a]">
      <Container>
        <div className="flex flex-col gap-6 py-12 text-sm text-[#9fa5af] md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-semibold tracking-wide text-white">TekDev</p>
            <p className="mt-2 max-w-md leading-7">
              Premium websites and product experiences shaped with strategy,
              design clarity, and strong frontend execution.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/#services" className="transition hover:text-white">
              Services
            </Link>
            <Link href="/#work" className="transition hover:text-white">
              Work
            </Link>
            <Link href="/#pricing" className="transition hover:text-white">
              Pricing
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} TekDev. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
