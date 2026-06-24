import { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export default function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center py-32 text-center">
      <h2 className="text-3xl font-semibold">{title}</h2>

      <p className="mt-4 max-w-md text-neutral-600">
        {description}
      </p>

      {action && <div className="mt-8">{action}</div>}
    </div>
  );
}