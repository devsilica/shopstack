export default function RecentOrders() {
  return (
    <div className="rounded-[28px] border bg-white p-8">
      <h2 className="mb-6 text-2xl font-semibold">
        Recent Orders
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between border-b pb-4">
          <span>#SS-10294</span>
          <span>Delivered</span>
        </div>

        <div className="flex justify-between border-b pb-4">
          <span>#SS-10280</span>
          <span>Shipped</span>
        </div>

        <div className="flex justify-between">
          <span>#SS-10263</span>
          <span>Processing</span>
        </div>
      </div>
    </div>
  );
}