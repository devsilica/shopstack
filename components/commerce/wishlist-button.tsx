"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Product } from "@/types/product";
import { useWishlistStore } from "@/store/wishlist-store";

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

  const wished = isInWishlist(product.id);

  function handleClick() {
    if (wished) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 20,
      }}
    >
      <Button
        variant="secondary"
        size="icon"
        onClick={handleClick}
        className="rounded-full bg-white/90 backdrop-blur-md shadow-lg"
      >
        <motion.div
          animate={{
            scale: wished ? [1, 1.35, 1] : 1,
            rotate: wished ? [0, -12, 12, 0] : 0,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              wished
                ? "fill-red-500 text-red-500"
                : "text-neutral-700"
            }`}
          />
        </motion.div>
      </Button>
    </motion.div>
  );
}