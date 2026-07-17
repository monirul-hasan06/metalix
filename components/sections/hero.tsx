import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(204,255,0,.12),transparent_28%),linear-gradient(180deg,#111113_0%,#0b0b0c_100%)]" />
      <Container className="relative grid min-h-[720px] items-center gap-8 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/60"><span className="size-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--accent)]" /> New season · Drop 01</div>
          <h1 className="text-[clamp(3.35rem,10vw,8.4rem)] font-black leading-[.82] tracking-[-.065em]">MADE<br /><span className="text-[var(--accent)]">STRONG.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/52 sm:text-lg">Premium heavyweight tees engineered for comfort, confidence, and everyday wear. Built in Bangladesh for the streets.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/shop" className="inline-flex h-13 items-center gap-2 rounded-full bg-[var(--accent)] px-7 font-bold text-black transition hover:-translate-y-0.5">Shop the drop <ArrowRight size={18} /></Link><Link href="/about" className="inline-flex h-13 items-center gap-2 rounded-full border border-white/14 bg-white/4 px-7 font-semibold transition hover:bg-white/8">Our story <ArrowDownRight size={18} /></Link></div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/45"><div className="flex items-center gap-2"><div className="flex text-[var(--accent)]">{[1,2,3,4,5].map(i => <Star key={i} size={13} fill="currentColor" />)}</div><span>4.9/5 customer rating</span></div><span>240+ GSM premium cotton</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[620px] self-end lg:mx-0">
          <div className="absolute -inset-10 rounded-full bg-[var(--accent)]/8 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#151517] shadow-2xl"><Image src="/images/hero-shirt.svg" alt="Metalix premium t-shirt" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /><div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/40">Fabric standard</p><p className="mt-1 text-2xl font-black">240+ GSM</p></div></div>
        </div>
      </Container>
    </section>
  );
}
