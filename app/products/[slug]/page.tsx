import { notFound } from "next/navigation";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Newsletter from "@/components/layout/newsletter";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import RecentlyViewed from "@/components/product-details/recently-viewed";

import ProductGallery from "@/components/product-details/product-gallery";
import ProductInfo from "@/components/product-details/product-info";
import ProductTabs from "@/components/product-details/product-tabs";
import RelatedProducts from "@/components/product-details/related-products";
import ReviewsSection from "@/components/product-details/reviews-section";

import { products } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
       <ProductGallery
  images={product.images}
  name={product.name}
/>

     <ProductInfo product={product} />
          </div>
          
<ProductTabs product={product} />

        </Container>
        <RecentlyViewed />

        <ReviewsSection />
        
      </Section>

      <RelatedProducts />

      <Newsletter />

      <Footer />
    </>
  );
}