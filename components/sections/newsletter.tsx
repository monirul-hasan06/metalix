"use client";

import { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Container } from "@/components/ui/container";

export function Newsletter() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    toast.success("You are on the Metalix list");
  }
  return <section className="py-20 lg:py-28"><Container><div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--accent)] px-6 py-14 text-black sm:px-12 lg:px-16 lg:py-18"><div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(0,0,0,.14),transparent_60%)]" /><div className="relative grid items-end gap-8 lg:grid-cols-[1fr_.8fr]"><div><p className="text-xs font-black uppercase tracking-[.2em]">Members get first access</p><h2 className="mt-3 text-4xl font-black tracking-[-.055em] sm:text-6xl">Join the next drop.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-black/65">New releases, restocks, styling ideas, and member-only offers—without the noise.</p></div><form onSubmit={submit} className="flex rounded-full bg-black p-1.5"><input type="email" required placeholder="Your email address" className="min-w-0 flex-1 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/35" /><button className="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--accent)]" aria-label="Subscribe"><ArrowRight size={18} /></button></form></div></div></Container></section>;
}
