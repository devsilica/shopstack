import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

import ProductImage from "./product-image";
import ProductBadge from "./product-badge";
import ProductPrice from "./product-price";
import Rating from "./rating";
import WishlistButton from "./wishlist-button";

import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden rounded-[28px] border-0 bg-transparent shadow-none">
      <CardContent className="p-0">

        <div className="relative overflow-hidden rounded-[28px]">

          <Link href={`/products/${product.slug}`}>
            <ProductImage
              src={product.image}
              alt={product.name}
            />
          </Link>

          <div className="absolute left-5 top-5 flex gap-2">

            {product.isNew && (
              <ProductBadge label="New" />
            )}

            {product.isBestSeller && (
              <ProductBadge label="Best Seller" />
            )}

          </div>

          <div className="absolute right-5 top-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <WishlistButton product={product} />
          </div>

        </div>

        <div className="mt-6 space-y-3">

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

        </div>

      </CardContent>
    </Card>
  );
}