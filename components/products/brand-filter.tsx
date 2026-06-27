"use client";

interface BrandFilterProps {
  brands: string[];
  selected: string;
  onChange: (brand: string) => void;
}

export default function BrandFilter({
  brands,
  selected,
  onChange,
}: BrandFilterProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        Brand
      </h3>

      <div className="space-y-2">

        <button
          onClick={() => onChange("All")}
          className={`block w-full rounded-xl px-4 py-2 text-left transition ${
            selected === "All"
              ? "bg-black text-white"
              : "hover:bg-neutral-100"
          }`}
        >
          All Brands
        </button>

        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => onChange(brand)}
            className={`block w-full rounded-xl px-4 py-2 text-left transition ${
              selected === brand
                ? "bg-black text-white"
                : "hover:bg-neutral-100"
            }`}
          >
            {brand}
          </button>
        ))}

      </div>
    </div>
  );
}