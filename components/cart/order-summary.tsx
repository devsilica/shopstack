"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { useCartStore } from "@/store/cart-store";

export default function OrderSummary() {
  const { items } = useCartStore();

  const subtotal = items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 100 ? 0 : 20;

  const tax = subtotal * 0.08;

  const total = subtotal + shipping + tax;

  return (
    <div className="rounded-3xl border p-8">

      <h2 className="mb-8 text-2xl font-semibold">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>
            {shipping === 0
              ? "Free"
              : `$${shipping}`}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

      </div>

      <Button
        asChild
        className="mt-8 w-full"
        size="lg"
      >
        <Link href="/checkout">
          Proceed to Checkout
        </Link>
      </Button>

    </div>
  );
}