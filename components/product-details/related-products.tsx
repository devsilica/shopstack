import ProductGrid from "@/components/commerce/product-grid";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import { products } from "@/data/products";

export default function RelatedProducts() {
  return (
    <Section>
      <Container>
        <h2 className="mb-10 text-4xl font-semibold">
          Related Products
        </h2>

        <ProductGrid products={products.slice(0, 4)} />
      </Container>
    </Section>
  );
}