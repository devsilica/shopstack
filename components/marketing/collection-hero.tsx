import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

export default function CollectionHero() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
            Collections
          </p>

          <h1 className="text-6xl font-semibold tracking-tight">
            Curated for modern living.
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Explore thoughtfully selected furniture, lighting and home
            essentials designed to elevate every space.
          </p>
        </div>
      </Container>
    </Section>
  );
}