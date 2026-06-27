import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Newsletter from "@/components/layout/newsletter";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import SuccessCard from "@/components/order-success/success-card";
import OrderSummary from "@/components/order-success/order-summary";
import SuccessActions from "@/components/order-success/success-actions";

export default function OrderSuccessPage() {
  return (
    <>
      <Navbar />

      <Section>
        <Container className="max-w-4xl">

          <SuccessCard />

          <OrderSummary />

          <SuccessActions />

        </Container>
      </Section>

      <Newsletter />

      <Footer />
    </>
  );
}