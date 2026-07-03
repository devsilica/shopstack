"use client";

import ProductGrid from "@/components/commerce/product-grid";
import { useRecentlyViewedStore } from "@/store/recently-viewed-store";

export default function RecentlyViewed() {
  const products = useRecentlyViewedStore(
    (state) => state.products
  );

  const validProducts = products.filter(
    (product) =>
      product &&
      product.id &&
      product.name &&
      product.image
  );

  if (validProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-4xl font-semibold">
          Recently Viewed
        </h2>

        <ProductGrid
          products={validProducts}
        />
      </div>
    </section>
  );
}