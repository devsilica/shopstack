interface ProductsResultsProps {
  showing: number;
  total: number;
}

export default function ProductsResults({
  showing,
  total,
}: ProductsResultsProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border bg-neutral-50 px-6 py-4">
      <p className="text-sm text-neutral-600">
        Showing{" "}
        <span className="font-semibold text-black">
          {showing}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-black">
          {total}
        </span>{" "}
        products
      </p>
    </div>
  );
}