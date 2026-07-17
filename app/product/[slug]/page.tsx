import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ProductActions } from "@/components/product/product-actions";
import { ProductGrid } from "@/components/ui/product-grid";
import { formatPrice } from "@/lib/currency";
import { getProductBySlug, products } from "@/data/products";

export function generateStaticParams() { return products.map(product => ({ slug: product.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const product = getProductBySlug(slug); if (!product) return {}; return { title: product.name, description: product.description, openGraph: { images: [product.image] } }; }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = products.filter(item => item.category === product.category && item.id !== product.id).slice(0,4);
  return <><section className="py-10 lg:py-16"><Container><div className="mb-7 flex items-center gap-2 text-xs text-white/35"><Link href="/">Home</Link><ChevronRight size={13} /><Link href="/shop">Shop</Link><ChevronRight size={13} /><span className="text-white/65">{product.name}</span></div><div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16"><div className="grid gap-4 sm:grid-cols-2"><div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white/5 sm:col-span-2"><Image src={product.images[0]} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div>{product.images.slice(1).map((image,index) => <div key={image} className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-white/5"><Image src={image} alt={`${product.name} view ${index+2}`} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover" /></div>)}</div><div className="lg:sticky lg:top-28 lg:h-fit"><p className="eyebrow">{product.category}</p><h1 className="mt-3 text-4xl font-black tracking-[-.05em] sm:text-6xl">{product.name}</h1><div className="mt-4 flex items-center gap-3"><div className="flex text-[var(--accent)]">{[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}</div><span className="text-xs text-white/42">{product.rating} ({product.reviewCount} reviews)</span></div><div className="mt-6 flex items-center gap-3"><span className="text-2xl font-black text-[var(--accent)]">{formatPrice(product.price)}</span>{product.compareAtPrice && <span className="text-lg text-white/30 line-through">{formatPrice(product.compareAtPrice)}</span>}</div><p className="mt-6 text-base leading-8 text-white/48">{product.description}</p><ul className="mt-6 grid gap-3">{product.details.map(detail => <li key={detail} className="flex items-center gap-3 text-sm text-white/58"><span className="grid size-5 place-items-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)]"><Check size={12} /></span>{detail}</li>)}</ul><ProductActions product={product} /><div id="size-guide" className="mt-8 rounded-2xl border border-white/8 bg-white/[.025] p-5"><h2 className="font-bold">Size guidance</h2><p className="mt-2 text-sm leading-6 text-white/42">Choose your regular size for the intended fit. Size down for a cleaner fit or size up for a more relaxed streetwear look.</p></div></div></div></Container></section>{related.length > 0 && <section className="border-t border-white/8 bg-[#0f0f11] py-20"><Container><div className="mb-9"><p className="eyebrow">You may also like</p><h2 className="section-title">More from {product.category}.</h2></div><ProductGrid products={related} /></Container></section>}</>;
}
