import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="flex min-h-20 items-center justify-between gap-4 border-b border-white/[0.07]">
      <Link href="/" className="shrink-0 text-sm font-semibold tracking-tight text-white">
        chido<span className="text-accent-blue">.</span>designs
      </Link>
      <nav aria-label="Main navigation" className="flex items-center gap-3 sm:gap-8">
        <Link href="/about" className="text-sm text-slate-300 transition-colors hover:text-white">
          About
        </Link>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1 text-sm text-slate-300 transition-colors hover:text-white sm:gap-2"
        >
          <span className="hidden sm:inline">Explore projects</span>
          <span className="sm:hidden">Projects</span>
          <ArrowUpRight aria-hidden="true" size={15} />
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-blue-400/40 hover:text-white sm:px-4"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
