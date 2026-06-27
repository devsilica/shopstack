import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Newsletter from "@/components/layout/newsletter";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import TrackingHeader from "@/components/track-order/tracking-header";
import TrackingCard from "@/components/track-order/tracking-card";
import TrackingTimeline from "@/components/track-order/tracking-timeline";

export default function TrackOrderPage() {
  return (
    <>
      <Navbar />

      <TrackingHeader />

      <Section className="pt-0">
        <Container className="max-w-5xl">

          <TrackingCard />

          <TrackingTimeline />

        </Container>
      </Section>

      <Newsletter />

      <Footer />
    </>
  );
}