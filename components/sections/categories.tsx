import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";

const categories = [
  { name: "Acid Wash", image: "/images/collection-acid.svg", copy: "Vintage texture. Modern shape." },
  { name: "Graphic", image: "/images/collection-graphic.svg", copy: "Bold artwork. Strong identity." },
  { name: "Minimal", image: "/images/collection-minimal.svg", copy: "Clean essentials for every day." },
];

export function Categories() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="mb-10 flex items-end justify-between"><div><p className="eyebrow">Shop by mood</p><h2 className="section-title">Find your uniform.</h2></div><Link href="/shop" className="hidden items-center gap-2 text-sm font-semibold text-white/55 hover:text-white sm:flex">View all <ArrowUpRight size={17} /></Link></div>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category, index) => <Link key={category.name} href={`/shop?category=${encodeURIComponent(category.name)}`} className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white/5"><Image src={category.image} alt={category.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6"><span className="mb-4 grid size-10 place-items-center rounded-full border border-white/15 bg-black/25 transition group-hover:bg-[var(--accent)] group-hover:text-black"><ArrowUpRight size={18} /></span><p className="text-3xl font-black">{category.name}</p><p className="mt-1 text-sm text-white/55">{category.copy}</p><span className="absolute right-5 top-5 text-6xl font-black text-white/8">0{index+1}</span></div></Link>)}
        </div>
      </Container>
    </section>
  );
}
