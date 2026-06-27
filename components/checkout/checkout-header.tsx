import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

export default function CheckoutHeader() {
  return (
    <Section className="pb-10">
      <Container>

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Checkout
        </p>

        <h1 className="text-6xl font-semibold tracking-tight lg:text-7xl">
          Secure Checkout
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          Complete your order securely using your preferred payment method.
        </p>

      </Container>
    </Section>
  );
}