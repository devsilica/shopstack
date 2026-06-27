import { SearchX } from "lucide-react";

export default function EmptyProducts() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border py-24 text-center">
      <SearchX className="mb-6 h-16 w-16 text-neutral-400" />

      <h2 className="text-3xl font-semibold">
        No products found
      </h2>

      <p className="mt-4 max-w-md text-neutral-500">
        Try changing your search term or adjusting your filters.
      </p>
    </div>
  );
}