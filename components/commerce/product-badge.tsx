interface ProductBadgeProps {
  label: string;
}

export default function ProductBadge({
  label,
}: ProductBadgeProps) {
  return (
    <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold shadow-lg backdrop-blur">
      {label}
    </span>
  );
}