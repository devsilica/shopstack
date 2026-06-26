"use client";

interface FilterSidebarProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function FilterSidebar({
  categories,
  selected,
  onSelect,
}: FilterSidebarProps) {
  return (
    <aside className="space-y-6 rounded-3xl border p-6">
      <h2 className="text-xl font-semibold">
        Categories
      </h2>

      <div className="space-y-3">
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
    </aside>
  );
}