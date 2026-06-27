import { create } from "zustand";
import { Product } from "@/types/product";

interface WishlistStore {
  items: Product[];

  addToWishlist: (product: Product) => void;

  removeFromWishlist: (id: string) => void;

  isInWishlist: (id: string) => boolean;

  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],

  addToWishlist: (product) =>
    set((state) => {
      if (state.items.some((item) => item.id === product.id)) {
        return state;
      }

      return {
        items: [...state.items, product],
      };
    }),

  removeFromWishlist: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  isInWishlist: (id) =>
    get().items.some((item) => item.id === id),

  clearWishlist: () => set({ items: [] }),
}));