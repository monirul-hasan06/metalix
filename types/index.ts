export type Category = "Acid Wash" | "Graphic" | "Minimal" | "Oversized";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  description: string;
  details: string[];
  price: number;
  compareAtPrice?: number;
  image: string;
  images: string[];
  sizes: string[];
  colors: string[];
  badge?: string;
  featured?: boolean;
  stock: number;
  rating: number;
  reviewCount: number;
};

export type CartItem = {
  id: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
};
