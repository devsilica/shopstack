import { Product } from "@/types/product";

interface ProductSpecsProps {
  product: Product;
}

export default function ProductSpecs({
  product,
}: ProductSpecsProps) {
  return (
    <div className="rounded-3xl border p-6">
      <h3 className="mb-6 text-xl font-semibold">
        Specifications
      </h3>

      <div className="space-y-4">

        <SpecRow label="Brand" value={product.brand} />

        <SpecRow label="SKU" value={product.sku} />

        <SpecRow label="Material" value={product.material} />

        <SpecRow
          label="Dimensions"
          value={product.dimensions}
        />

        <SpecRow label="Weight" value={product.weight} />

      </div>
    </div>
  );
}

function SpecRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b pb-3">
      <span className="text-neutral-500">
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>
    </div>
  );
}