"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { checkoutSchema, type CheckoutValues } from "@/lib/order-schema";
import { formatPrice } from "@/lib/currency";
import { useCartStore } from "@/store/cart-store";

const fieldClass = "h-12 w-full rounded-xl border border-white/10 bg-[#111113] px-4 text-sm outline-none transition placeholder:text-white/25 focus:border-[var(--accent)]";

export function CheckoutForm() {
  const router = useRouter();
  const [success, setSuccess] = useState<string | null>(null);
  const { items, clearCart } = useCartStore();
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const delivery = subtotal >= 2500 ? 0 : 120;
  const total = subtotal + delivery;
  const form = useForm<CheckoutValues>({ resolver: zodResolver(checkoutSchema), defaultValues: { fullName: "", phone: "", email: "", address: "", city: "", notes: "", paymentMethod: "cod", transactionId: "" } });
  const paymentMethod = form.watch("paymentMethod");

  async function onSubmit(values: CheckoutValues) {
    if (!items.length) { toast.error("Your cart is empty"); router.push("/shop"); return; }
    try {
      const response = await fetch("/api/orders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ customer: values, items: items.map(item => ({ slug: item.product.slug, name: item.product.name, size: item.size, color: item.color, quantity: item.quantity, price: item.product.price })), subtotal, delivery, total }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Order failed");
      const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8801700000000";
      const lines = items.map(item => `• ${item.product.name} — ${item.size}, ${item.color} × ${item.quantity}`);
      const text = [`New Metalix order: ${data.orderId}`, "", ...lines, "", `Total: ${formatPrice(total)}`, `Customer: ${values.fullName}`, `Phone: ${values.phone}`, `Address: ${values.address}, ${values.city}`, `Payment: ${values.paymentMethod.toUpperCase()}`].join("\n");
      clearCart();
      setSuccess(data.orderId);
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    } catch (error) { toast.error(error instanceof Error ? error.message : "Could not place order"); }
  }

  if (success) return <div className="rounded-[2rem] border border-[var(--accent)]/25 bg-[var(--accent)]/6 p-8 text-center sm:p-12"><CheckCircle2 className="mx-auto text-[var(--accent)]" size={52} /><h2 className="mt-5 text-3xl font-black">Order received.</h2><p className="mt-3 text-white/50">Your order ID is <strong className="text-white">{success}</strong>. The WhatsApp confirmation has opened in a new tab.</p><button onClick={() => router.push("/shop")} className="mt-7 rounded-full bg-[var(--accent)] px-7 py-3 font-bold text-black">Continue shopping</button></div>;

  return <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8 lg:grid-cols-[1fr_380px]"><div className="space-y-6"><section className="rounded-[2rem] border border-white/8 bg-white/[.025] p-5 sm:p-7"><h2 className="text-xl font-bold">Delivery details</h2><div className="mt-6 grid gap-4 sm:grid-cols-2"><Field label="Full name" error={form.formState.errors.fullName?.message}><input className={fieldClass} placeholder="Your full name" {...form.register("fullName")} /></Field><Field label="Phone number" error={form.formState.errors.phone?.message}><input className={fieldClass} placeholder="01XXXXXXXXX" {...form.register("phone")} /></Field><Field label="Email (optional)" error={form.formState.errors.email?.message}><input className={fieldClass} type="email" placeholder="you@example.com" {...form.register("email")} /></Field><Field label="City / district" error={form.formState.errors.city?.message}><input className={fieldClass} placeholder="Dhaka" {...form.register("city")} /></Field><div className="sm:col-span-2"><Field label="Complete address" error={form.formState.errors.address?.message}><textarea className="min-h-28 w-full rounded-xl border border-white/10 bg-[#111113] p-4 text-sm outline-none transition placeholder:text-white/25 focus:border-[var(--accent)]" placeholder="House, road, area, landmark" {...form.register("address")} /></Field></div><div className="sm:col-span-2"><Field label="Order note (optional)"><textarea className="min-h-24 w-full rounded-xl border border-white/10 bg-[#111113] p-4 text-sm outline-none transition placeholder:text-white/25 focus:border-[var(--accent)]" placeholder="Any special delivery instruction" {...form.register("notes")} /></Field></div></div></section><section className="rounded-[2rem] border border-white/8 bg-white/[.025] p-5 sm:p-7"><h2 className="text-xl font-bold">Payment method</h2><div className="mt-5 grid gap-3">{[["cod","Cash on delivery","Pay when your order arrives"],["bkash","bKash","Send payment and enter the transaction ID"],["nagad","Nagad","Send payment and enter the transaction ID"]].map(([value,title,copy]) => <label key={value} className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition ${paymentMethod === value ? "border-[var(--accent)] bg-[var(--accent)]/5" : "border-white/10"}`}><input type="radio" value={value} {...form.register("paymentMethod")} className="accent-[#ccff00]" /><span><strong className="block text-sm">{title}</strong><span className="text-xs text-white/38">{copy}</span></span></label>)}</div>{paymentMethod !== "cod" && <div className="mt-5 rounded-2xl bg-white/4 p-4"><p className="mb-3 text-xs leading-5 text-white/50">Send the total to <strong className="text-white">{paymentMethod === "bkash" ? process.env.NEXT_PUBLIC_BKASH_NUMBER || "01700000000" : process.env.NEXT_PUBLIC_NAGAD_NUMBER || "01700000000"}</strong>, then enter the transaction ID.</p><Field label="Transaction ID" error={form.formState.errors.transactionId?.message}><input className={fieldClass} placeholder="e.g. 9A7BC12XYZ" {...form.register("transactionId")} /></Field></div>}</section></div><aside className="h-fit rounded-[2rem] border border-white/8 bg-[#111113] p-6 lg:sticky lg:top-28"><h2 className="text-xl font-bold">Your order</h2><div className="mt-5 max-h-64 space-y-4 overflow-y-auto pr-1">{items.map(item => <div key={item.id} className="flex justify-between gap-4 text-sm"><div><p className="font-semibold">{item.product.name} × {item.quantity}</p><p className="mt-1 text-xs text-white/35">{item.size} · {item.color}</p></div><span className="shrink-0 text-white/65">{formatPrice(item.product.price*item.quantity)}</span></div>)}</div><div className="mt-6 space-y-3 border-y border-white/8 py-5 text-sm"><div className="flex justify-between text-white/45"><span>Subtotal</span><span className="text-white">{formatPrice(subtotal)}</span></div><div className="flex justify-between text-white/45"><span>Delivery</span><span className="text-white">{delivery ? formatPrice(delivery) : "Free"}</span></div></div><div className="flex justify-between py-5 text-lg font-bold"><span>Total</span><span className="text-[var(--accent)]">{formatPrice(total)}</span></div><button disabled={form.formState.isSubmitting || !items.length} className="flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] font-bold text-black disabled:opacity-50">{form.formState.isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <>Place order <ArrowRight size={17} /></>}</button><p className="mt-4 flex items-center justify-center gap-2 text-xs text-white/35"><ShieldCheck size={14} /> Secure order validation</p></aside></form>;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-xs font-semibold text-white/58">{label}</span>{children}{error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}</label>;
}
