"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";

import ProductPrice from "@/components/commerce/product-price";

import { useCartStore } from "@/store/cart-store";
import { Product } from "@/types/product";

interface CartItemProps {
  product: Product & {
    quantity: number;
  };
}

export default function CartItem({
  product,
}: CartItemProps) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore();

  return (
    <div className="flex gap-6 rounded-3xl border p-5">

      <div className="relative h-32 w-32 overflow-hidden rounded-2xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">

        <div className="flex items-start justify-between">

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              {product.category}
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              {product.name}
            </h3>
          </div>

          <button
            onClick={() => removeFromCart(product.id)}
            className="text-red-500 transition hover:text-red-700"
          >
            <Trash2 size={20} />
          </button>

        </div>

        <ProductPrice price={product.price} />

        <div className="mt-6 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <button
              onClick={() => decreaseQuantity(product.id)}
              className="flex h-10 w-10 items-center justify-center rounded-full border"
            >
              −
            </button>

            <span className="text-lg font-semibold">
              {product.quantity}
            </span>

            <button
              onClick={() => increaseQuantity(product.id)}
              className="flex h-10 w-10 items-center justify-center rounded-full border"
            >
              +
            </button>

          </div>

          <h3 className="text-xl font-semibold">
            $
            {(product.price * product.quantity).toFixed(2)}
          </h3>

        </div>

      </div>

    </div>
  );
}