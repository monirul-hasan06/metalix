import { Hero } from "@/components/sections/hero";
import { Categories } from "@/components/sections/categories";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { ValueProps } from "@/components/sections/value-props";
import { Lookbook } from "@/components/sections/lookbook";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";

export default function HomePage() {
  return <><Hero /><Categories /><FeaturedProducts /><ValueProps /><Lookbook /><Testimonials /><Newsletter /></>;
}
