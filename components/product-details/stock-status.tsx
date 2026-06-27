import { CheckCircle } from "lucide-react";

interface StockStatusProps {
  inStock: boolean;
  stock: number;
}

export default function StockStatus({
  inStock,
  stock,
}: StockStatusProps) {
  return (
    <div className="rounded-2xl border bg-green-50 p-4">
      <div className="flex items-center gap-2">
        <CheckCircle className="h-5 w-5 text-green-600" />

        <span className="font-medium text-green-700">
          {inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {inStock && (
        <p className="mt-2 text-sm text-green-600">
          {stock} items available
        </p>
      )}
    </div>
  );
}