import CollectionFilters from "./collection-filters";

export default function CollectionToolbar() {
  return (
    <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <CollectionFilters />

      <select className="h-11 rounded-xl border px-4">
        <option>Featured</option>
        <option>Newest</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>
  );
}