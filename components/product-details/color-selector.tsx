"use client";

import { useState } from "react";

interface ColorSelectorProps {
  colors: string[];
}

export default function ColorSelector({
  colors,
}: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-neutral-600">
        Color
      </h3>

      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              selectedColor === color
                ? "border-black bg-black text-white"
                : "border-neutral-300 hover:border-black"
            }`}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}