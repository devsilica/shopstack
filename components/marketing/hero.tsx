import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <Section className="pt-10 lg:pt-20">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
              Modern Furniture Collection
            </p>

            <h1 className="max-w-2xl text-6xl font-semibold leading-[1.05] tracking-tight lg:text-8xl">
              Furniture
              <br />
              that feels
              <br />
              like home.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
              Discover beautifully crafted furniture and home essentials
              designed for modern living. Timeless design, premium quality,
              and effortless comfort.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button size="lg" asChild>
                <Link href="/collections">
                  Shop Collection
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link href="/products">
                  Explore Products
                </Link>
              </Button>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px]">

              <Image
                src="/images/editorial/hero.jpg"
                alt="Modern Living"
                fill
                priority
                className="object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
}