import OrderStatus from "./order-status";

interface OrderCardProps {
  id: string;
  date: string;
  total: string;
  status: "Delivered" | "Shipped" | "Processing";
}

export default function OrderCard({
  id,
  date,
  total,
  status,
}: OrderCardProps) {
  return (
    <div className="rounded-[28px] border bg-white p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">{id}</h2>

        <OrderStatus status={status} />
      </div>

      <p className="mt-3 text-neutral-500">{date}</p>

      <p className="mt-2 text-xl font-semibold">
        {total}
      </p>
    </div>
  );
}