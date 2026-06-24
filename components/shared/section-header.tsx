import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 flex flex-col gap-4 ${
        centered
          ? "items-center text-center"
          : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={centered ? "max-w-3xl" : "max-w-2xl"}>
        {eyebrow && (
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            {eyebrow}
          </p>
        )}

        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            {description}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}