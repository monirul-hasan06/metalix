import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";

const reviews = [
  { name: "Rafi Ahmed", location: "Dhaka", text: "The fabric genuinely feels premium and the oversized fit sits exactly how I wanted." },
  { name: "Nafis Rahman", location: "Chattogram", text: "Print quality and finishing are much better than most local tees at this price." },
  { name: "Samiul Islam", location: "Rajshahi", text: "Fast delivery, accurate sizing, and the acid wash colour looks even better in person." },
];

export function Testimonials() {
  return <section className="border-y border-white/8 bg-[#0f0f11] py-20"><Container><div className="mb-10"><p className="eyebrow">Customer notes</p><h2 className="section-title">Worn. Tested. Loved.</h2></div><div className="grid gap-4 lg:grid-cols-3">{reviews.map(review => <figure key={review.name} className="rounded-[2rem] border border-white/8 bg-white/[.025] p-7"><div className="flex text-[var(--accent)]">{[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}</div><blockquote className="mt-6 text-lg font-medium leading-8">“{review.text}”</blockquote><figcaption className="mt-7 text-sm"><strong>{review.name}</strong><span className="ml-2 text-white/35">· {review.location}</span></figcaption></figure>)}</div></Container></section>;
}
