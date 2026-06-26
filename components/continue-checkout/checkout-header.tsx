import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

export default function CheckoutHeader() {
  return (
    <Section className="pb-10">
      <Container>
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Checkout
        </p>

        <h1 className="text-5xl font-semibold lg:text-7xl">
          Continue Checkout
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-600">
          Choose how you'd like to continue with your order.
        </p>
      </Container>
    </Section>
  );
}