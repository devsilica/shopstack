export default function OrderSummary() {
  return (
    <div className="mt-10 rounded-[32px] border bg-white p-8">

      <div className="flex justify-between py-3">
        <span>Order Number</span>
        <span>#SS-10294</span>
      </div>

      <div className="flex justify-between py-3">
        <span>Payment</span>
        <span>Successful</span>
      </div>

      <div className="flex justify-between py-3">
        <span>Estimated Delivery</span>
        <span>June 29</span>
      </div>

    </div>
  );
}