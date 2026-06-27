"use client";

import PriceFilter from "./price-filter";
import RatingFilter from "./rating-filter";
import BrandFilter from "./brand-filter";
import StockFilter from "./stock-filter";

interface FilterSidebarProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;

  maxPrice: number;
  selectedPrice: number;
  onPriceChange: (value: number) => void;

  rating: number;
  onRatingChange: (rating: number) => void;

  brands: string[];
  selectedBrand: string;
  onBrandChange: (brand: string) => void;

  inStockOnly: boolean;
  onStockChange: (value: boolean) => void;
}

export default function FilterSidebar({
  categories,
  selected,
  onSelect,
  maxPrice,
  selectedPrice,
  onPriceChange,
  rating,
  onRatingChange,
  brands,
  selectedBrand,
  onBrandChange,
  inStockOnly,
  onStockChange,
}: FilterSidebarProps) {
  return (
    <aside className="space-y-10 rounded-3xl border p-6">
      {/* Categories */}

      <div>
        <h2 className="mb-4 text-xl font-semibold">
          Categories
        </h2>

        <div className="space-y-2">
          <button
            onClick={() => onSelect("All")}
            className={`block w-full rounded-xl px-4 py-2 text-left transition ${
              selected === "All"
                ? "bg-black text-white"
                : "hover:bg-neutral-100"
            }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className={`block w-full rounded-xl px-4 py-2 text-left transition ${
                selected === category
                  ? "bg-black text-white"
                  : "hover:bg-neutral-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <PriceFilter
        value={selectedPrice}
        max={maxPrice}
        onChange={onPriceChange}
      />

      <RatingFilter
        value={rating}
        onChange={onRatingChange}
      />

      <BrandFilter
        brands={brands}
        selected={selectedBrand}
        onChange={onBrandChange}
      />

      <StockFilter
        inStockOnly={inStockOnly}
        onChange={onStockChange}
      />
    </aside>
  );
}