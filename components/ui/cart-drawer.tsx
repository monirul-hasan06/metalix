"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Trash2, X } from "lucide-react";
import { useEffect } from "react";
import { formatPrice } from "@/lib/currency";
import { useCartStore } from "@/store/cart-store";
import { QuantitySelector } from "@/components/ui/quantity-selector";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity } = useCartStore();
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);
  return (
    <div className={`fixed inset-0 z-[80] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      <button className={`absolute inset-0 bg-black/70 transition ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={closeCart} aria-label="Close cart overlay" />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#0d0d0f] transition duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex h-20 items-center justify-between border-b border-white/8 px-5"><div><p className="text-lg font-bold">Your cart</p><p className="text-xs text-white/40">{items.length} product selections</p></div><button onClick={closeCart} className="grid size-10 place-items-center rounded-full bg-white/6" aria-label="Close cart"><X size={19} /></button></div>
        {items.length === 0 ? (
          <div className="grid flex-1 place-items-center px-8 text-center"><div><span className="mx-auto mb-5 grid size-16 place-items-center rounded-full bg-white/6 text-white/35"><ShoppingBag size={26} /></span><h2 className="text-xl font-bold">Your cart is empty</h2><p className="mt-2 text-sm leading-6 text-white/45">Explore our latest drops and add something strong to your rotation.</p><Link href="/shop" onClick={closeCart} className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-black">Start shopping</Link></div></div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto p-5">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4"><div className="relative h-28 w-22 shrink-0 overflow-hidden rounded-2xl bg-white/5"><Image src={item.product.image} alt={item.product.name} fill className="object-cover" sizes="88px" /></div><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-2"><div><Link href={`/product/${item.product.slug}`} onClick={closeCart} className="line-clamp-1 font-bold">{item.product.name}</Link><p className="mt-1 text-xs text-white/42">{item.size} · {item.color}</p></div><button onClick={() => removeItem(item.id)} className="text-white/30 hover:text-red-400" aria-label="Remove item"><Trash2 size={16} /></button></div><div className="mt-4 flex items-center justify-between"><QuantitySelector value={item.quantity} onChange={(quantity) => updateQuantity(item.id, quantity)} /><span className="text-sm font-bold text-[var(--accent)]">{formatPrice(item.product.price * item.quantity)}</span></div></div></div>
              ))}
            </div>
            <div className="border-t border-white/8 p-5"><div className="mb-2 flex justify-between text-sm text-white/55"><span>Subtotal</span><span className="font-bold text-white">{formatPrice(subtotal)}</span></div><p className="mb-5 text-xs text-white/35">Delivery is calculated at checkout.</p><Link href="/checkout" onClick={closeCart} className="flex h-13 items-center justify-center gap-2 rounded-full bg-[var(--accent)] font-bold text-black">Checkout <ArrowRight size={17} /></Link><Link href="/cart" onClick={closeCart} className="mt-3 block text-center text-sm font-semibold text-white/55 hover:text-white">View full cart</Link></div>
          </>
        )}
      </aside>
    </div>
  );
}
