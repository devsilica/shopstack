import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Newsletter from "@/components/layout/newsletter";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import CheckoutHeader from "@/components/checkout/checkout-header";
import CheckoutProgress from "@/components/checkout/checkout-progress";
import ShippingForm from "@/components/checkout/shipping-form";
import DeliveryMethod from "@/components/checkout/delivery-method";
import PaymentMethod from "@/components/checkout/payment-method";
import CheckoutSummary from "@/components/checkout/checkout-summary";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />

      <CheckoutHeader />

      <Section className="pt-0">
        <Container>

          <CheckoutProgress />

          <div className="grid gap-12 lg:grid-cols-[1.7fr_0.8fr]">

            <div>

              <ShippingForm />

              <DeliveryMethod />

              <PaymentMethod />

            </div>

            <CheckoutSummary />

          </div>

        </Container>
      </Section>

      <Newsletter />

      <Footer />
    </>
  );
}