import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import OrdersHeader from "@/components/orders/orders-header";
import OrdersTable from "@/components/orders/orders-table";

export default function OrdersPage() {
  return (
    <>
      <Navbar />

      <Section>
        <Container>

          <OrdersHeader />

          <OrdersTable />

        </Container>
      </Section>

      <Footer />
    </>
  );
}