"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { formatPrice } from "@/lib/currency";
import type { Product } from "@/types";
import { useCartStore } from "@/store/cart-store";

export function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const quickAdd = () => {
    addItem(product, product.sizes[0], product.colors[0]);
    toast.success(`${product.name} added to cart`);
  };
  return (
    <article className="group min-w-0">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#171719]">
        <Link href={`/product/${product.slug}`} className="block h-full">
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
        </Link>
        {product.badge && <span className="absolute left-3 top-3 rounded-full bg-black/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur">{product.badge}</span>}
        <button onClick={() => setLiked(!liked)} className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-black/60 backdrop-blur transition hover:bg-black" aria-label="Add to wishlist"><Heart size={16} className={liked ? "fill-[var(--accent)] text-[var(--accent)]" : ""} /></button>
        <button onClick={quickAdd} className="absolute inset-x-3 bottom-3 flex h-11 translate-y-16 items-center justify-center gap-2 rounded-full bg-[var(--accent)] text-sm font-bold text-black transition duration-300 group-hover:translate-y-0 focus:translate-y-0"><ShoppingBag size={16} /> Quick add</button>
      </div>
      <div className="pt-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0"><p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/38">{product.category}</p><Link href={`/product/${product.slug}`} className="line-clamp-1 font-bold transition hover:text-[var(--accent)]">{product.name}</Link></div>
          <Link href={`/product/${product.slug}`} aria-label="View product" className="mt-1 text-white/35 transition hover:text-white"><ArrowUpRight size={18} /></Link>
        </div>
        <div className="mt-2 flex items-center gap-2"><span className="font-semibold text-[var(--accent)]">{formatPrice(product.price)}</span>{product.compareAtPrice && <span className="text-sm text-white/30 line-through">{formatPrice(product.compareAtPrice)}</span>}</div>
      </div>
    </article>
  );
}
