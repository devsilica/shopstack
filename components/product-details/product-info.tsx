"use client";

import { useEffect } from "react";

import Rating from "@/components/commerce/rating";
import ProductPrice from "@/components/commerce/product-price";
import ProductActions from "./product-actions";

import { Product } from "@/types/product";
import { useRecentlyViewedStore } from "@/store/recently-viewed-store";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  const addProduct = useRecentlyViewedStore(
    (state) => state.addProduct
  );

  useEffect(() => {
    addProduct(product);
  }, [product, addProduct]);

  return (
    <div>
      <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
        {product.category}
      </p>

      <h1 className="mt-3 text-5xl font-semibold">
        {product.name}
      </h1>

      <div className="mt-6">
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

      <p className="mt-8 text-lg leading-8 text-neutral-600">
        {product.description}
      </p>

      <div className="mt-10">
        <ProductActions
          product={product}
        />
      </div>
    </div>
  );
}