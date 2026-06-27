import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

export default function SearchHero() {
  return (
    <Section className="pb-12">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Search
          </p>

          <h1 className="text-5xl font-semibold tracking-tight lg:text-7xl">
            Find your next favorite piece.
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Browse furniture, lighting, and home accessories curated for
            modern living.
          </p>
        </div>
      </Container>
    </Section>
  );
}