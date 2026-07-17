import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ValueProps } from "@/components/sections/value-props";

export const metadata: Metadata = { title: "Our Story", description: "The story and design principles behind Metalix streetwear." };
export default function AboutPage() { return <><section className="py-14 lg:py-20"><Container><div className="grid items-center gap-12 lg:grid-cols-2"><div><p className="eyebrow">Our story</p><h1 className="mt-3 text-5xl font-black tracking-[-.06em] sm:text-7xl">Clothing built<br /><span className="text-[var(--accent)]">to stay strong.</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-white/48">Metalix started with a simple belief: a great T-shirt should feel substantial, fit confidently, and remain part of your rotation for longer than a trend cycle.</p><p className="mt-4 max-w-xl text-base leading-8 text-white/48">We work around heavyweight cotton, practical silhouettes, durable artwork, and small-batch drops. The result is streetwear that feels intentional without trying too hard.</p><Link href="/shop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 font-bold text-black">Explore the collection <ArrowRight size={17} /></Link></div><div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/5"><Image src="/images/story.svg" alt="Metalix apparel design" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div></div></Container></section><ValueProps /></>; }
