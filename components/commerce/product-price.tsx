interface ProductPriceProps {
  price: number;
}

export default function ProductPrice({
  price,
}: ProductPriceProps) {
  return (
    <p className="text-lg font-semibold">
      ${price}
    </p>
  );
}