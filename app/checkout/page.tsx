import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CheckoutForm } from "@/components/checkout/checkout-form";

export const metadata: Metadata = { title: "Checkout", robots: { index: false, follow: false } };
export default function CheckoutPage() { return <section className="py-14 lg:py-20"><Container><div className="mb-10"><p className="eyebrow">Secure checkout</p><h1 className="page-title">Complete your order.</h1></div><CheckoutForm /></Container></section>; }
