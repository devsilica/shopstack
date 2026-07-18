"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import ProductPrice from "./product-price";
import Rating from "./rating";

import { Product } from "@/types/product";

interface QuickViewProps {
  product: Product;
  children: React.ReactNode;
}

export default function QuickView({
  product,
  children,
}: QuickViewProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent className="max-w-5xl rounded-3xl p-0 overflow-hidden">
        <div className="grid md:grid-cols-2">

          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-10">

            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              {product.category}
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              {product.name}
            </h2>

            <div className="mt-4">
              <Rating
                rating={product.rating}
                reviewCount={product.reviewCount}
              />
            </div>

            <div className="mt-6">
              <ProductPrice
                price={product.price}
              />
            </div>

            <p className="mt-6 leading-8 text-neutral-600">
              {product.description}
            </p>

            <div className="mt-10 space-y-4">

              <Button
                className="w-full h-12 rounded-2xl"
              >
                Add to Cart
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full h-12 rounded-2xl"
              >
                <Link
                  href={`/products/${product.slug}`}
                >
                  View Details
                </Link>
              </Button>

            </div>

          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}