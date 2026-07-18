"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { toast } from "sonner";

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
      toast.success("Removed from wishlist");
    } else {
      addToWishlist(product);
      toast.success("Added to wishlist");
    }
  }

  return (
    <div className="space-y-4">

      {/* Add to Cart */}

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        <Button
          size="lg"
          className="h-14 w-full rounded-2xl"
          onClick={() => {
            addToCart(product);
            toast.success(`${product.name} added to cart`);
          }}
        >
          <motion.div
            whileTap={{
              rotate: -12,
              scale: 1.2,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
            }}
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
          </motion.div>

          Add to Cart
        </Button>
      </motion.div>

      {/* Buy Now */}

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
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
      </motion.div>

      {/* Wishlist */}

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        <Button
          variant="outline"
          size="lg"
          className="h-14 w-full rounded-2xl"
          onClick={handleWishlist}
        >
          <motion.div
            animate={{
              scale: wished ? [1, 1.3, 1] : 1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <Heart
              className={`mr-2 h-5 w-5 ${
                wished
                  ? "fill-red-500 text-red-500"
                  : ""
              }`}
            />
          </motion.div>

          {wished
            ? "Saved to Wishlist"
            : "Save to Wishlist"}
        </Button>
      </motion.div>

    </div>
  );
}