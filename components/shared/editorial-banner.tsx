import Container from "@/components/layout/container";

interface EditorialBannerProps {
  title: string;
  description: string;
  image: string;
}

export default function EditorialBanner({
  title,
  description,
  image,
}: EditorialBannerProps) {
  return (
    <section className="py-24">
      <Container>
        <div
          className="relative overflow-hidden rounded-3xl bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="bg-black/35 px-10 py-28 text-white md:px-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold md:text-5xl">
                {title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-100">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}