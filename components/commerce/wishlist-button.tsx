"use client";

import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useWishlistStore } from "@/store/wishlist-store";
import { Product } from "@/types/product";

interface WishlistButtonProps {
  product: Product;
}

export default function WishlistButton({
  product,
}: WishlistButtonProps) {
  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlistStore();

  const active = isInWishlist(product.id);

  function handleClick() {
    if (active) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={handleClick}
      className="rounded-full bg-white/90 shadow-md backdrop-blur transition hover:scale-105"
    >
      <Heart
        size={18}
        className={
          active
            ? "fill-red-500 text-red-500"
            : "text-neutral-700"
        }
      />
    </Button>
  );
}