import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Lookbook() {
  return <section className="py-20 lg:py-28"><Container><div className="grid overflow-hidden rounded-[2.5rem] border border-white/8 bg-[#121214] lg:grid-cols-2"><div className="relative min-h-[430px]"><Image src="/images/story.svg" alt="Metalix design story" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div><div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16"><p className="eyebrow">Designed with purpose</p><h2 className="mt-3 text-4xl font-black tracking-[-.045em] sm:text-6xl">Not fast fashion.<br /><span className="text-[var(--accent)]">Strong essentials.</span></h2><p className="mt-6 max-w-lg text-base leading-8 text-white/48">We focus on fabric weight, shape, print durability, and clean finishing—so every Metalix piece feels considered from the first wear.</p><Link href="/about" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/14 px-6 py-3.5 text-sm font-bold transition hover:bg-white/8">Read our story <ArrowRight size={17} /></Link></div></div></Container></section>;
}
