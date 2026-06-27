interface ProductPriceProps {
  price: number;
}

export default function ProductPrice({
  price,
}: ProductPriceProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-semibold tracking-tight">
        ${price}
      </span>
    </div>
  );
}