import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileNav } from "@/components/layout/mobile-nav";
import { CartDrawer } from "@/components/ui/cart-drawer";
import { Providers } from "@/components/providers";


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "Metalix — Made Strong", template: "%s | Metalix" },
  description: "Premium heavyweight streetwear and oversized t-shirts made in Bangladesh.",
  keywords: ["Metalix", "Bangladesh t-shirt", "acid wash t-shirt", "oversized t-shirt", "streetwear"],
  openGraph: { title: "Metalix — Made Strong", description: "Premium heavyweight streetwear made in Bangladesh.", type: "website", images: ["/images/hero-shirt.svg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Providers><AnnouncementBar /><Header /><main>{children}</main><Footer /><MobileNav /><CartDrawer /></Providers></body></html>;
}
