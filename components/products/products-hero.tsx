import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

export default function ProductsHero() {
  return (
    <Section className="pb-12">
      <Container>
        <div className="max-w-4xl">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-500">
            ShopStack Collection
          </p>

          <h1 className="text-6xl font-semibold tracking-tight lg:text-8xl">
            Discover
            <br />
            Modern Furniture
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Explore premium furniture and home accessories crafted for
            timeless living.
          </p>

        </div>
      </Container>
    </Section>
  );
}