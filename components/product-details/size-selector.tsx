"use client";

import { useState } from "react";

interface SizeSelectorProps {
  sizes: string[];
}

export default function SizeSelector({
  sizes,
}: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-neutral-600">
        Size
      </h3>

      <div className="flex gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`flex h-12 w-12 items-center justify-center rounded-xl border text-sm font-semibold transition-all ${
              selectedSize === size
                ? "border-black bg-black text-white"
                : "border-neutral-300 hover:border-black"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}