"use client";

interface StockFilterProps {
  inStockOnly: boolean;
  onChange: (value: boolean) => void;
}

export default function StockFilter({
  inStockOnly,
  onChange,
}: StockFilterProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        Availability
      </h3>

      <label className="flex cursor-pointer items-center justify-between rounded-xl border p-4 transition hover:bg-neutral-50">
        <span>In Stock Only</span>

        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onChange(e.target.checked)}
          className="h-5 w-5 accent-black"
        />
      </label>
    </div>
  );
}