"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { ProductGrid } from "@/components/ui/product-grid";
import type { Product } from "@/types";

const categories = ["All", "Acid Wash", "Graphic", "Minimal", "Oversized"];

export function ShopClient({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : "All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => {
    const list = products.filter((product) => (category === "All" || product.category === category) && product.name.toLowerCase().includes(query.toLowerCase()));
    return [...list].sort((a,b) => sort === "low" ? a.price-b.price : sort === "high" ? b.price-a.price : sort === "rating" ? b.rating-a.rating : Number(Boolean(b.featured))-Number(Boolean(a.featured)));
  }, [products, category, query, sort]);
  return <div><div className="mb-8 grid gap-4 rounded-[1.5rem] border border-white/8 bg-white/[.025] p-4 lg:grid-cols-[1fr_auto]"><div className="relative"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" className="h-12 w-full rounded-full border border-white/10 bg-[#0b0b0c] pl-11 pr-10 text-sm outline-none transition focus:border-[var(--accent)]" />{query && <button onClick={() => setQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35"><X size={16} /></button>}</div><div className="flex items-center gap-2"><SlidersHorizontal size={17} className="hidden text-white/35 sm:block" /><select value={sort} onChange={(e) => setSort(e.target.value)} className="h-12 flex-1 rounded-full border border-white/10 bg-[#0b0b0c] px-4 text-sm outline-none lg:min-w-48"><option value="featured">Featured</option><option value="rating">Top rated</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div></div><div className="mb-9 flex gap-2 overflow-x-auto pb-2">{categories.map(item => <button key={item} onClick={() => setCategory(item)} className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${category === item ? "bg-[var(--accent)] text-black" : "border border-white/10 bg-white/[.025] text-white/55 hover:text-white"}`}>{item}</button>)}</div><div className="mb-5 flex items-center justify-between text-sm"><p className="text-white/42">{filtered.length} products</p>{(query || category !== "All") && <button onClick={() => {setQuery(""); setCategory("All");}} className="text-[var(--accent)]">Clear filters</button>}</div>{filtered.length ? <ProductGrid products={filtered} /> : <div className="rounded-[2rem] border border-dashed border-white/10 py-24 text-center"><h2 className="text-xl font-bold">No products found</h2><p className="mt-2 text-sm text-white/42">Try a different search or category.</p></div>}</div>;
}
