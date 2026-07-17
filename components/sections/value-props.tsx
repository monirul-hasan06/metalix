import { RefreshCcw, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Container } from "@/components/ui/container";

const values = [
  { icon: Sparkles, title: "Premium fabric", copy: "High-GSM cotton selected for structure and long-term comfort." },
  { icon: ShieldCheck, title: "Quality checked", copy: "Every order is inspected before it leaves our studio." },
  { icon: Truck, title: "Nationwide delivery", copy: "Reliable cash-on-delivery service across Bangladesh." },
  { icon: RefreshCcw, title: "Easy exchange", copy: "Size exchange support within seven days of delivery." },
];

export function ValueProps() {
  return <section className="py-18"><Container><div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">{values.map(({icon: Icon,title,copy}) => <div key={title} className="bg-[#0b0b0c] p-7"><span className="mb-6 grid size-11 place-items-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)]"><Icon size={20} /></span><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/42">{copy}</p></div>)}</div></Container></section>;
}
