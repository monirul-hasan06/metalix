"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { useCartStore } from "@/store/cart-store";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=Acid%20Wash", label: "Acid Wash" },
  { href: "/shop?category=Oversized", label: "Oversized" },
  { href: "/about", label: "Our Story" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);
  useEffect(() => setMounted(true), []);
  const count = mounted ? items.reduce((sum, item) => sum + item.quantity, 0) : 0;

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0b0b0c]/90 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between">
        <button className="grid size-10 place-items-center rounded-full hover:bg-white/8 lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu size={20} />
        </button>
        <Link href="/" className="group flex items-center gap-3" aria-label="Metalix home">
          <span className="grid size-9 place-items-center rounded-xl bg-[var(--accent)] font-black text-black">M</span>
          <span>
            <span className="block text-lg font-black tracking-[0.18em]">METALIX</span>
            <span className="hidden text-[9px] uppercase tracking-[0.38em] text-white/45 sm:block">Made Strong</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm font-medium text-white/65 transition hover:text-white">{link.label}</Link>)}
        </nav>
        <div className="flex items-center gap-1">
          <Link href="/shop" className="hidden size-10 place-items-center rounded-full hover:bg-white/8 sm:grid" aria-label="Search products"><Search size={19} /></Link>
          <button className="relative grid size-10 place-items-center rounded-full hover:bg-white/8" onClick={openCart} aria-label={`Open cart with ${count} items`}>
            <ShoppingBag size={19} />
            {count > 0 && <span className="absolute right-0.5 top-0.5 grid min-w-4.5 place-items-center rounded-full bg-[var(--accent)] px-1 text-[10px] font-black text-black">{count}</span>}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div className="fixed inset-0 z-[70] min-h-screen bg-[#0b0b0c] lg:hidden">
          <Container className="flex h-18 items-center justify-between border-b border-white/8">
            <span className="text-lg font-black tracking-[0.18em]">METALIX</span>
            <button className="grid size-10 place-items-center rounded-full bg-white/6" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20} /></button>
          </Container>
          <nav className="flex flex-col px-4 py-8">
            {links.map((link, index) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-white/8 py-5 text-2xl font-bold">
                {link.label}<span className="text-sm text-white/30">0{index + 1}</span>
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-8 rounded-full bg-[var(--accent)] px-6 py-4 text-center font-bold text-black">Contact us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
