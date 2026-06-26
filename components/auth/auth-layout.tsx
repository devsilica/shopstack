import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

interface AuthLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function AuthLayout({
  title,
  description,
  children,
}: AuthLayoutProps) {
  return (
    <Section>
      <Container className="max-w-lg">

        <div className="rounded-[36px] border bg-white p-10 shadow-sm">

          <h1 className="text-5xl font-semibold">
            {title}
          </h1>

          <p className="mt-4 text-neutral-600 leading-7">
            {description}
          </p>

          <div className="mt-10">
            {children}
          </div>

        </div>

      </Container>
    </Section>
  );
}