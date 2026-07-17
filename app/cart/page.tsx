import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CartPageClient } from "@/components/cart/cart-page-client";

export const metadata: Metadata = { title: "Your Cart" };
export default function CartPage() { return <section className="py-14 lg:py-20"><Container><div className="mb-10"><p className="eyebrow">Review your selection</p><h1 className="page-title">Your cart.</h1></div><CartPageClient /></Container></section>; }
