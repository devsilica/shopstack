import Image from "next/image";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

const collections = [
  {
    title: "Living Room",
    image: "/images/collections/living-room.jpg",
  },
  {
    title: "Bedroom",
    image: "/images/collections/bedroom.jpg",
  },
  {
    title: "Workspace",
    image: "/images/collections/workspace.jpg",
  },
];

export default function FeaturedCollections() {
  return (
    <Section>
      <Container>
        <div className="mb-12">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Collections
          </p>

          <h2 className="text-5xl font-semibold tracking-tight">
            Curated for every space.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {collections.map((collection) => (
            <div
              key={collection.title}
              className="group overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-2xl font-semibold">
                  {collection.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}