interface StatsCardProps {
  title: string;
  value: string;
}

export default function StatsCard({
  title,
  value,
}: StatsCardProps) {
  return (
    <div className="rounded-[28px] border bg-white p-8">
      <p className="text-sm text-neutral-500">
        {title}
      </p>

      <h2 className="mt-4 text-4xl font-semibold">
        {value}
      </h2>
    </div>
  );
}