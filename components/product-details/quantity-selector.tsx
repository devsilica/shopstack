"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    setQuantity((prev) => prev + 1);
  }

  function decrease() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-neutral-600">
        Quantity
      </h3>

      <div className="flex w-fit items-center rounded-2xl border border-neutral-200 bg-white p-1 shadow-sm">
        <Button
          variant="ghost"
          size="icon"
          onClick={decrease}
          className="rounded-xl"
        >
          −
        </Button>

        <span className="w-12 text-center text-lg font-semibold">
          {quantity}
        </span>

        <Button
          variant="ghost"
          size="icon"
          onClick={increase}
          className="rounded-xl"
        >
          +
        </Button>
      </div>
    </div>
  );
}