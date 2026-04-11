"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/container";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Product Engineering Agency
            </p>
            <h1 className="mt-5 text-6xl font-semibold leading-tight tracking-tight text-slate-900 md:text-7xl">
              Build
              <br />
              Better
              <br />
              <span className="text-[#FF6A3D]">Products</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-500">
              TekkDevv partners with ambitious teams to design and ship high-impact
              digital products with clear delivery and premium engineering quality.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/start-project"
                className="inline-flex items-center justify-center rounded-full bg-[#FF6A3D] px-8 py-4 text-sm font-medium text-white shadow-md transition hover:opacity-90"
              >
                Start a Project
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-4 text-sm font-medium text-slate-900 transition hover:bg-white"
              >
                View Case Studies <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
              <span>Enterprise-ready delivery</span>
              <span>Senior product engineers</span>
              <span>Clear weekly reporting</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <div className="mt-6 rounded-xl border border-gray-200 bg-slate-50 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  Sprint health
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                  Fintech Dashboard
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Realtime analytics dashboard built for executive reporting and
                  rapid product decisions.
                </p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-xs text-slate-500">Time to MVP</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">6 weeks</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-xs text-slate-500">Performance gain</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">+75%</p>
                </div>
              </div>
              <div className="mt-5 rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-100">
                <p>deploy/nextjs-dashboard</p>
                <p className="mt-1 text-slate-300">$ npm run build && npm run deploy</p>
                <p className="mt-2 text-emerald-300">Release successful.</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-slate-500">
                  Next.js
                </span>
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-slate-500">
                  TypeScript
                </span>
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-slate-500">
                  AWS
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

