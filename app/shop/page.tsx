import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { ShopClient } from "@/components/shop/shop-client";
import { products } from "@/data/products";

export const metadata: Metadata = { title: "Shop", description: "Shop Metalix premium t-shirts, acid wash styles, graphic tees, and oversized essentials." };

export default function ShopPage() {
  return <section className="py-14 lg:py-20"><Container><div className="mb-10"><p className="eyebrow">The complete collection</p><h1 className="page-title">Shop Metalix.</h1><p className="mt-4 max-w-xl text-sm leading-7 text-white/45">Premium fabrics, reliable sizing, and strong everyday design.</p></div><Suspense fallback={<div className="py-24 text-center text-white/40">Loading collection…</div>}><ShopClient products={products} /></Suspense></Container></section>;
}
