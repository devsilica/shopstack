"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import ProductImage from "./product-image";
import ProductBadge from "./product-badge";
import ProductPrice from "./product-price";
import Rating from "./rating";
import WishlistButton from "./wishlist-button";
import QuickView from "./quick-view";

import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
      }}
    >
      <Card className="group overflow-hidden rounded-[28px] border-0 bg-transparent shadow-none">
        <CardContent className="p-0">

          <div className="relative overflow-hidden rounded-[28px]">

            {/* Product Image */}

            <motion.div
              whileHover={{
                scale: 1.06,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              <Link href={`/products/${product.slug}`}>
                <ProductImage
                  src={product.image}
                  alt={product.name}
                />
              </Link>
            </motion.div>

            {/* Dark Overlay */}

            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-all duration-300 group-hover:opacity-100">

              <QuickView product={product}>
                <Button
                  size="lg"
                  className="rounded-2xl"
                >
                  Quick View
                </Button>
              </QuickView>

            </div>

            {/* Badges */}

            <div className="absolute left-5 top-5 flex gap-2">

              {product.isNew && (
                <ProductBadge label="New" />
              )}

              {product.isBestSeller && (
                <ProductBadge label="Best Seller" />
              )}

            </div>

            {/* Wishlist */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileHover={{
                opacity: 1,
                scale: 1,
              }}
              className="absolute right-5 top-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <WishlistButton
                product={product}
              />
            </motion.div>

          </div>

          {/* Product Info */}

          <motion.div
            className="mt-6 space-y-3"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.15,
            }}
            viewport={{
              once: true,
            }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              {product.category}
            </p>

            <Link
              href={`/products/${product.slug}`}
              className="block text-2xl font-semibold transition-colors hover:text-neutral-600"
            >
              {product.name}
            </Link>

            <Rating
              rating={product.rating}
              reviewCount={product.reviewCount}
            />

            <ProductPrice
              price={product.price}
            />
          </motion.div>

        </CardContent>
      </Card>
    </motion.div>
  );
}