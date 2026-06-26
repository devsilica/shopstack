import Image from "next/image";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function EditorialBanner() {
  return (
    <Section>
      <Container>
        <div className="grid overflow-hidden rounded-[32px] bg-neutral-100 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col justify-center p-10 lg:p-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              Editorial
            </p>

            <h2 className="text-5xl font-semibold leading-tight">
              Designed for
              <br />
              modern living.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
              Timeless furniture and carefully selected essentials that
              transform everyday spaces into inspiring homes.
            </p>

            <Button
              size="lg"
              className="mt-10 w-fit"
            >
              Discover More
            </Button>
          </div>

          {/* Image */}
          <div className="relative min-h-[500px]">
            <Image
              src="/images/editorial/banner-1.jpg"
              alt="Editorial Banner"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}