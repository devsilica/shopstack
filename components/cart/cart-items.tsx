"use client";

import CartItem from "./cart-item";
import { useCartStore } from "@/store/cart-store";

export default function CartItems() {
  const { items } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border p-12 text-center">
        <h2 className="text-3xl font-semibold">
          Your cart is empty
        </h2>

        <p className="mt-4 text-neutral-500">
          Add some products to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {items.map((product) => (
        <CartItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}