"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { CartItem, Product } from "@/types";

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, size: string, color: string, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      addItem: (product, size, color, quantity = 1) =>
        set((state) => {
          const id = `${product.id}-${size}-${color}`;
          const existing = state.items.find((item) => item.id === id);
          return {
            items: existing
              ? state.items.map((item) => item.id === id ? { ...item, quantity: Math.min(item.quantity + quantity, 10) } : item)
              : [...state.items, { id, product, size, color, quantity }],
            isOpen: true,
          };
        }),
      removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
      updateQuantity: (id, quantity) =>
        set((state) => ({ items: state.items.map((item) => item.id === id ? { ...item, quantity: Math.max(1, Math.min(quantity, 10)) } : item) })),
      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
    }),
    {
      name: "metalix-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
