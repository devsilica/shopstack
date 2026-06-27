import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

export default function TrackingHeader() {
  return (
    <Section className="pb-10">
      <Container>
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Track Order
        </p>

        <h1 className="text-6xl font-semibold lg:text-7xl">
          Your Order Journey
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          Stay updated with your delivery in real time.
        </p>
      </Container>
    </Section>
  );
}