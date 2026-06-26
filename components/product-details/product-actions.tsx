"use client";

import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";

import { Product } from "@/types/product";

interface ProductActionsProps {
  product: Product;
}

export default function ProductActions({
  product,
}: ProductActionsProps) {
  const { addToCart } = useCartStore();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlistStore();

  const wished = isInWishlist(product.id);

  function handleWishlist() {
    if (wished) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  return (
    <div className="space-y-4">
      <Button
        size="lg"
        className="h-14 w-full rounded-2xl"
        onClick={() => addToCart(product)}
      >
        <ShoppingBag className="mr-2 h-5 w-5" />
        Add to Cart
      </Button>

      <Button
        asChild
        variant="secondary"
        size="lg"
        className="h-14 w-full rounded-2xl"
      >
        <Link href="/checkout">
          Buy Now
        </Link>
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="h-14 w-full rounded-2xl"
        onClick={handleWishlist}
      >
        <Heart
          className={`mr-2 h-5 w-5 ${
            wished
              ? "fill-red-500 text-red-500"
              : ""
          }`}
        />

        {wished
          ? "Saved to Wishlist"
          : "Save to Wishlist"}
      </Button>
    </div>
  );
}