import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import ProductGrid from "@/components/commerce/product-grid";

import { products } from "@/data/products";

export default function BestSellers() {
  return (
    <Section>
      <Container>
        <div className="mb-12">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Best Sellers
          </p>

          <h2 className="text-5xl font-semibold tracking-tight">
            Customer favorites.
          </h2>
        </div>

        <ProductGrid
          products={products.filter(
            (product) => product.isBestSeller
          )}
        />
      </Container>
    </Section>
  );
}