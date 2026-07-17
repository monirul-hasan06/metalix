import Link from "next/link";
import { Container } from "@/components/ui/container";
export default function NotFound() { return <section className="grid min-h-[65vh] place-items-center py-20"><Container className="text-center"><p className="text-8xl font-black text-[var(--accent)]">404</p><h1 className="mt-4 text-3xl font-black">This page left the drop.</h1><p className="mt-3 text-white/42">The page you requested could not be found.</p><Link href="/" className="mt-7 inline-flex rounded-full bg-[var(--accent)] px-7 py-3.5 font-bold text-black">Back home</Link></Container></section>; }
