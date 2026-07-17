import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Providers } from "@/components/providers";
import { CartDrawer } from "@/components/ui/cart-drawer";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Metalix — Made Strong",
    template: "%s | Metalix",
  },
  description:
    "Premium heavyweight streetwear and oversized T-shirts made in Bangladesh.",
  keywords: [
    "Metalix",
    "Bangladesh T-shirt",
    "acid wash T-shirt",
    "oversized T-shirt",
    "streetwear",
  ],
  icons: {
    icon: "/images/favicon.svg",
  },
  openGraph: {
    title: "Metalix — Made Strong",
    description: "Premium heavyweight streetwear made in Bangladesh.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/images/hero-shirt.svg",
        width: 1200,
        height: 630,
        alt: "Metalix premium streetwear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metalix — Made Strong",
    description: "Premium heavyweight streetwear made in Bangladesh.",
    images: ["/images/hero-shirt.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileNav />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
