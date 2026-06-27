import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Newsletter from "@/components/layout/newsletter";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import CartHeader from "@/components/cart/cart-header";
import CartItems from "@/components/cart/cart-items";
import PromoCode from "@/components/cart/promo-code";
import OrderSummary from "@/components/cart/order-summary";

export default function CartPage() {
  return (
    <>
      <Navbar />

      <CartHeader />

      <Section className="pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">

            <div className="space-y-8">
              <CartItems />
              <PromoCode />
            </div>

            <OrderSummary />

          </div>
        </Container>
      </Section>

      <Newsletter />

      <Footer />
    </>
  );
}