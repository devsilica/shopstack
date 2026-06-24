import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

import ProductImage from "./product-image";
import ProductBadge from "./product-badge";
import Rating from "./rating";
import ProductPrice from "./product-price";
import WishlistButton from "./wishlist-button";
import QuickViewButton from "./quick-view-button";

import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden rounded-3xl border-0 shadow-none">
      <CardContent className="space-y-5 p-0">

        <div className="relative">

          <ProductImage
            src={product.image}
            alt={product.name}
          />

          <div className="absolute left-4 top-4">
            {product.isBestSeller && (
              <ProductBadge label="Best Seller" />
            )}

            {product.isNew && (
              <ProductBadge label="New" />
            )}
          </div>

          <div className="absolute right-4 top-4">
            <WishlistButton />
          </div>

        </div>

        <div className="space-y-3 px-2">

          <p className="text-sm uppercase tracking-wide text-neutral-500">
            {product.category}
          </p>

          <Link
            href={`/products/${product.slug}`}
            className="block text-xl font-semibold"
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

          <QuickViewButton />

        </div>

      </CardContent>
    </Card>
  );
}