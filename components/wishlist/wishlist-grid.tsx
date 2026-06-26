"use client";

import ProductGrid from "@/components/commerce/product-grid";
import { useWishlistStore } from "@/store/wishlist-store";
import EmptyWishlist from "./empty-wishlist";

export default function WishlistGrid() {
  const { items } = useWishlistStore();

  if (items.length === 0) {
    return <EmptyWishlist />;
  }

  return <ProductGrid products={items} />;
}