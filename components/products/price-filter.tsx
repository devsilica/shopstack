"use client";

interface PriceFilterProps {
  value: number;
  max: number;
  onChange: (value: number) => void;
}

export default function PriceFilter({
  value,
  max,
  onChange,
}: PriceFilterProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        Maximum Price
      </h3>

      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />

      <div className="flex items-center justify-between text-sm text-neutral-500">
        <span>$0</span>
        <span className="font-semibold text-black">
          ${value}
        </span>
      </div>
    </div>
  );
}