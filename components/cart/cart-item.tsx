"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

import ProductPrice from "@/components/commerce/product-price";
import { Button } from "@/components/ui/button";

import { Product } from "@/types/product";
import { useCartStore } from "@/store/cart-store";

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
    <div className="flex gap-6 rounded-3xl border p-6">
      <div className="relative h-32 w-32 overflow-hidden rounded-2xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            {product.category}
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            {product.name}
          </h3>

          <div className="mt-4">
            <ProductPrice price={product.price} />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => decreaseQuantity(product.id)}
            >
              <Minus className="h-4 w-4" />
            </Button>

            <span className="w-8 text-center font-semibold">
              {product.quantity}
            </span>

            <Button
              variant="outline"
              size="icon"
              onClick={() => increaseQuantity(product.id)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="destructive"
            size="icon"
            onClick={() => removeFromCart(product.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}