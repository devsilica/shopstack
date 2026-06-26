import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Newsletter from "@/components/layout/newsletter";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import WishlistHeader from "@/components/wishlist/wishlist-header";
import WishlistGrid from "@/components/wishlist/wishlist-grid";

export default function WishlistPage() {
  return (
    <>
      <Navbar />

      <WishlistHeader />

      <Section className="pt-0">
        <Container>
          <WishlistGrid />
        </Container>
      </Section>

      <Newsletter />

      <Footer />
    </>
  );
}