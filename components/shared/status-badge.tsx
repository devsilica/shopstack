interface StatusBadgeProps {
  children: React.ReactNode;
}

export default function StatusBadge({
  children,
}: StatusBadgeProps) {
  return (
    <span className="rounded-full border px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}