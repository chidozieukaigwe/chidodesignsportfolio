import type { Metadata } from "next";
import { ArrowUpRight, CodeXml, Mail, UsersRound } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact | Chido Designs",
  description: "Get in touch with Chido Ukaigwe about AI engineering and collaboration.",
};

const profiles = [
  {
    name: "LinkedIn",
    description: "Connect with me professionally.",
    url: "https://www.linkedin.com/in/chidoukaigwe/",
    icon: UsersRound,
  },
  {
    name: "GitHub",
    description: "Explore my work and code.",
    url: "https://github.com/chidozieukaigwe",
    icon: CodeXml,
  },
];

export default function ContactPage() {
  return (
    <main className="hero-background relative isolate min-h-screen overflow-hidden">
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-6">
        <SiteHeader />
        <section aria-labelledby="contact-title" className="max-w-3xl pb-24 pt-24 sm:pb-32 sm:pt-32">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
            Contact / Get in touch
          </p>
          <h1 id="contact-title" className="mt-6 text-balance text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-6xl">
            Let&apos;s build something <span className="text-slate-400">intelligent.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Have an AI challenge or an idea worth exploring? I&apos;d love to hear
            about it.
          </p>

          <div className="mt-12 rounded-2xl border border-white/10 bg-slate-900/50 p-6 sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/10 text-accent-blue">
              <Mail aria-hidden="true" size={20} />
            </div>
            <h2 className="mt-6 text-xl font-semibold text-white">Send me an email</h2>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              The simplest way to start a conversation.
            </p>
            <a
              href="mailto:chidodesigns@gmail.com"
              className="mt-5 inline-flex max-w-full items-center gap-2 break-all text-base font-medium text-blue-200 transition-colors hover:text-white"
            >
              chidodesigns@gmail.com <ArrowUpRight aria-hidden="true" className="shrink-0" size={16} />
            </a>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {profiles.map(({ name, description, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition-[border-color,box-shadow] hover:border-blue-400/40 hover:shadow-glow"
              >
                <div className="flex items-center justify-between text-accent-blue">
                  <Icon aria-hidden="true" size={20} />
                  <ArrowUpRight aria-hidden="true" size={17} className="text-slate-400 transition-colors group-hover:text-white" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-white">
                  {name} <span className="sr-only">(opens in a new tab)</span>
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
