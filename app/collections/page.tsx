import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Newsletter from "@/components/layout/newsletter";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import CollectionHero from "@/components/marketing/collection-hero";
import CollectionToolbar from "@/components/marketing/collection-toolbar";

import ProductGrid from "@/components/commerce/product-grid";

import { products } from "@/data/products";

export default function CollectionsPage() {
  return (
    <>
      <Navbar />

      <CollectionHero />

      <Section>
        <Container>
          <CollectionToolbar />

          <ProductGrid products={products} />
        </Container>
      </Section>

      <Newsletter />

      <Footer />
    </>
  );
}