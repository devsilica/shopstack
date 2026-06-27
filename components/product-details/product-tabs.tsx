"use client";

import { Product } from "@/types/product";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabs({
  product,
}: ProductTabsProps) {
  return (
    <Tabs
      defaultValue="description"
      className="mt-24"
    >
      <TabsList className="mb-10 h-14 rounded-2xl bg-neutral-100 p-1">
        <TabsTrigger
          value="description"
          className="rounded-xl px-6"
        >
          Description
        </TabsTrigger>

        <TabsTrigger
          value="specifications"
          className="rounded-xl px-6"
        >
          Specifications
        </TabsTrigger>

        <TabsTrigger
          value="reviews"
          className="rounded-xl px-6"
        >
          Reviews
        </TabsTrigger>

        <TabsTrigger
          value="shipping"
          className="rounded-xl px-6"
        >
          Shipping
        </TabsTrigger>
      </TabsList>

      {/* DESCRIPTION */}

      <TabsContent value="description">
        <div className="max-w-4xl space-y-8">

          <p className="text-lg leading-8 text-neutral-600">
            {product.description}
          </p>

          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              Features
            </h3>

            <ul className="space-y-3">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <span className="h-2 w-2 rounded-full bg-black" />

                  {feature}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </TabsContent>

      {/* SPECIFICATIONS */}

      <TabsContent value="specifications">
        <div className="max-w-3xl rounded-3xl border">

          <SpecRow
            label="Brand"
            value={product.brand}
          />

          <SpecRow
            label="SKU"
            value={product.sku}
          />

          <SpecRow
            label="Material"
            value={product.material}
          />

          <SpecRow
            label="Dimensions"
            value={product.dimensions}
          />

          <SpecRow
            label="Weight"
            value={product.weight}
          />

        </div>
      </TabsContent>

      {/* REVIEWS */}

      <TabsContent value="reviews">
        <div className="max-w-3xl space-y-8">

          <ReviewCard
            name="Sarah Johnson"
            rating="★★★★★"
            review="The quality exceeded my expectations. Extremely comfortable and beautifully finished."
          />

          <ReviewCard
            name="David Smith"
            rating="★★★★☆"
            review="Excellent craftsmanship and easy to assemble. Highly recommended."
          />

        </div>
      </TabsContent>

      {/* SHIPPING */}

      <TabsContent value="shipping">
        <div className="max-w-3xl space-y-6 rounded-3xl border p-8">

          <InfoRow
            title="Free Shipping"
            description="Orders over $100 ship free."
          />

          <InfoRow
            title="Delivery"
            description="Estimated delivery in 3–7 business days."
          />

          <InfoRow
            title="Returns"
            description="30-day hassle-free returns."
          />

          <InfoRow
            title="Warranty"
            description="2-Year manufacturer warranty."
          />

        </div>
      </TabsContent>

    </Tabs>
  );
}

function SpecRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b px-8 py-5 last:border-none">
      <span className="text-neutral-500">
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>
    </div>
  );
}

function ReviewCard({
  name,
  rating,
  review,
}: {
  name: string;
  rating: string;
  review: string;
}) {
  return (
    <div className="rounded-3xl border p-8">
      <h3 className="text-xl font-semibold">
        {name}
      </h3>

      <p className="mt-2 text-yellow-500">
        {rating}
      </p>

      <p className="mt-4 leading-8 text-neutral-600">
        {review}
      </p>
    </div>
  );
}

function InfoRow({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-neutral-600">
        {description}
      </p>
    </div>
  );
}