"use client";

import Rating from "@/components/commerce/rating";
import ProductPrice from "@/components/commerce/product-price";

import ProductActions from "./product-actions";
import QuantitySelector from "./quantity-selector";
import ColorSelector from "./color-selector";
import SizeSelector from "./size-selector";
import StockStatus from "./stock-status";
import ProductBenefits from "./product-benefits";
import ProductSpecs from "./product-specs";

import { Product } from "@/types/product";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
          {product.category}
        </p>

        <h1 className="mt-3 text-5xl font-semibold">
          {product.name}
        </h1>

        <div className="mt-4">
          <Rating
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        </div>

        <div className="mt-6">
          <ProductPrice price={product.price} />
        </div>
      </div>

      {/* Description */}

      <p className="text-lg leading-8 text-neutral-600">
        {product.description}
      </p>

      {/* Purchase Options */}

      <div className="space-y-8 border-y py-8">
        <ColorSelector colors={product.colors} />

        <SizeSelector sizes={product.sizes} />

        <QuantitySelector />
      </div>

      {/* Actions */}

      <ProductActions product={product} />

      {/* Stock */}

      <StockStatus
        inStock={product.inStock}
        stock={product.stock}
      />

      {/* Benefits */}

      <ProductBenefits />

      {/* Specifications */}

      <ProductSpecs product={product} />
    </div>
  );
}