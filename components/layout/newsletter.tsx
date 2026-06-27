import Container from "./container";
import Section from "./section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <Section>
      <Container>
        <div className="rounded-[32px] bg-neutral-100 px-8 py-20 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Newsletter
          </p>

          <h2 className="text-5xl font-semibold">
            Stay inspired.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Be the first to discover new collections, exclusive offers
            and carefully curated inspiration.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl gap-4">
            <Input
              placeholder="Enter your email"
              className="h-12"
            />

            <Button size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}