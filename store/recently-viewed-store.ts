import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Product } from "@/types/product";

interface RecentlyViewedStore {
  products: Product[];
  addProduct: (product: Product) => void;
  clear: () => void;
}

export const useRecentlyViewedStore =
  create<RecentlyViewedStore>()(
    persist(
      (set, get) => ({
        products: [],

        addProduct: (product) => {
          // Prevent invalid products
          if (!product || !product.id) return;

          const filtered = get().products.filter(
            (item) => item.id !== product.id
          );

          set({
            products: [product, ...filtered].slice(0, 8),
          });
        },

        clear: () =>
          set({
            products: [],
          }),
      }),
      {
        name: "recently-viewed",
      }
    )
  );