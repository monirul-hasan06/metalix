import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ProductGrid } from "@/components/ui/product-grid";
import { featuredProducts } from "@/data/products";

export function FeaturedProducts() {
  return <section className="border-y border-white/8 bg-[#0f0f11] py-20 lg:py-28"><Container><div className="mb-10 flex items-end justify-between"><div><p className="eyebrow">Selected pieces</p><h2 className="section-title">Current favourites.</h2></div><Link href="/shop" className="hidden items-center gap-2 text-sm font-semibold text-white/55 hover:text-white sm:flex">Shop everything <ArrowRight size={17} /></Link></div><ProductGrid products={featuredProducts} /></Container></section>;
}
