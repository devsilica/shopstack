import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Newsletter from "@/components/layout/newsletter";

import Hero from "@/components/marketing/hero";
import FeaturedCollections from "@/components/marketing/featured-collections";
import TrendingProducts from "@/components/marketing/trending-products";
import EditorialBanner from "@/components/marketing/editorial-banner";
import BestSellers from "@/components/marketing/best-sellers";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedCollections />

      <TrendingProducts />

      <EditorialBanner />

      <BestSellers />

      <Newsletter />

      <Footer />
    </>
  );
}