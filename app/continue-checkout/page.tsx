import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Newsletter from "@/components/layout/newsletter";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import CheckoutHeader from "@/components/continue-checkout/checkout-header";
import CheckoutOptions from "@/components/continue-checkout/checkout-options";
import CheckoutProgress from "@/components/continue-checkout/checkout-progress";

export default function ContinueCheckoutPage() {
  return (
    <>
      <Navbar />

      <CheckoutHeader />

      <Section className="pt-0">
        <Container>

          <CheckoutProgress />

          <CheckoutOptions />

        </Container>
      </Section>

      <Newsletter />

      <Footer />
    </>
  );
}