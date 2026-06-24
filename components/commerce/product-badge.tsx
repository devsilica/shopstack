interface ProductBadgeProps {
  label: string;
}

export default function ProductBadge({
  label,
}: ProductBadgeProps) {
  return (
    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium shadow-sm">
      {label}
    </span>
  );
}