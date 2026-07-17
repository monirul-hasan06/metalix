import Link from "next/link";
import { Camera, MessageCircle, Share2 } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#080809] pt-16 pb-24 lg:pb-8">
      <Container>
        <div className="grid gap-12 border-b border-white/8 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-[var(--accent)] font-black text-black">M</span><span className="text-xl font-black tracking-[0.18em]">METALIX</span></div>
            <p className="max-w-md text-sm leading-7 text-white/52">Premium streetwear made for everyday confidence. Heavyweight fabrics, reliable fits, and designs that stay strong.</p>
            <div className="mt-6 flex gap-2">
              {[Camera, Share2, MessageCircle].map((Icon, i) => <a key={i} href="#" aria-label="Social media" className="grid size-10 place-items-center rounded-full border border-white/10 text-white/60 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"><Icon size={17} /></a>)}
            </div>
          </div>
          <div><h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em]">Explore</h3><div className="grid gap-3 text-sm text-white/52"><Link href="/shop">All products</Link><Link href="/about">Our story</Link><Link href="/contact">Contact</Link><Link href="/cart">Your cart</Link></div></div>
          <div><h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em]">Support</h3><div className="grid gap-3 text-sm text-white/52"><a href="#faq">FAQ</a><Link href="/contact">Delivery & exchange</Link><Link href="/contact">Size help</Link><Link href="/contact">Privacy</Link></div></div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Metalix. All rights reserved.</p><p>Built with Next.js · TypeScript · Tailwind CSS</p></div>
      </Container>
    </footer>
  );
}
