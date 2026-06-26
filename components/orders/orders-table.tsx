import OrderCard from "./order-card";

const orders = [
  {
    id: "#SS-10294",
    date: "June 24, 2026",
    total: "$1,048",
    status: "Delivered",
  },
  {
    id: "#SS-10280",
    date: "June 20, 2026",
    total: "$799",
    status: "Shipped",
  },
  {
    id: "#SS-10263",
    date: "June 18, 2026",
    total: "$249",
    status: "Processing",
  },
] as const;

export default function OrdersTable() {
  return (
    <div className="grid gap-6">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          id={order.id}
          date={order.date}
          total={order.total}
          status={order.status}
        />
      ))}
    </div>
  );
}