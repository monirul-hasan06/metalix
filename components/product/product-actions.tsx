"use client";

import { Check, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Product } from "@/types";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { useCartStore } from "@/store/cart-store";

export function ProductActions({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const add = () => { addItem(product, size, color, quantity); toast.success(`${product.name} added to cart`); };
  return <div className="mt-8"><div><div className="mb-3 flex items-center justify-between"><p className="text-sm font-bold">Choose size</p><a href="#size-guide" className="text-xs text-white/40 underline underline-offset-4">Size guide</a></div><div className="flex flex-wrap gap-2">{product.sizes.map(item => <button key={item} onClick={() => setSize(item)} className={`grid h-11 min-w-12 place-items-center rounded-full border px-3 text-sm font-bold transition ${size === item ? "border-[var(--accent)] bg-[var(--accent)] text-black" : "border-white/12 bg-white/4 text-white/55 hover:text-white"}`}>{item}</button>)}</div></div><div className="mt-6"><p className="mb-3 text-sm font-bold">Colour <span className="font-normal text-white/38">— {color}</span></p><div className="flex flex-wrap gap-2">{product.colors.map(item => <button key={item} onClick={() => setColor(item)} className={`relative rounded-full border px-4 py-2.5 text-sm transition ${color === item ? "border-[var(--accent)] text-white" : "border-white/12 text-white/48"}`}>{color === item && <Check size={13} className="mr-1 inline text-[var(--accent)]" />}{item}</button>)}</div></div><div className="mt-8 flex gap-3"><QuantitySelector value={quantity} onChange={setQuantity} /><button onClick={add} className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[var(--accent)] font-bold text-black transition hover:-translate-y-0.5"><ShoppingBag size={17} /> Add to cart</button></div><p className="mt-4 text-center text-xs text-white/35">Cash on delivery available nationwide</p></div>;
}
