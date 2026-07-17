"use client";

import Link from "next/link";
import { Home, Search, ShoppingBag, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/shop", label: "Shop", icon: Search },
  { href: "/cart", label: "Cart", icon: ShoppingBag },
  { href: "/contact", label: "Support", icon: UserRound },
];

export function MobileNav() {
  const pathname = usePathname();
  const count = useCartStore((state) => state.items.reduce((sum, item) => sum + item.quantity, 0));
  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-4 rounded-2xl border border-white/10 bg-[#111113]/94 p-1.5 shadow-2xl backdrop-blur-xl lg:hidden">
      {items.map(({ href, label, icon: Icon }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return <Link key={href} href={href} className={cn("relative flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-medium text-white/45", active && "bg-white/8 text-[var(--accent)]")}><Icon size={18} /><span>{label}</span>{label === "Cart" && count > 0 && <span className="absolute right-4 top-1 grid size-4 place-items-center rounded-full bg-[var(--accent)] text-[9px] font-bold text-black">{count}</span>}</Link>;
      })}
    </nav>
  );
}
