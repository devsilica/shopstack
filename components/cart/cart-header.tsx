import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

export default function CartHeader() {
  return (
    <Section className="pb-10">
      <Container>
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Shopping Cart
        </p>

        <h1 className="text-5xl font-semibold tracking-tight lg:text-7xl">
          Your Cart
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          Review your selected items before proceeding to checkout.
        </p>
      </Container>
    </Section>
  );
}