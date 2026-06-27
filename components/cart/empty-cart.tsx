import { Button } from "@/components/ui/button";

export default function OrderSummary() {
  return (
    <div className="rounded-3xl border p-8">

      <h2 className="mb-8 text-2xl font-semibold">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$1048</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>$48</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-semibold">
          <span>Total</span>
          <span>$1096</span>
        </div>

      </div>

      <Button className="mt-8 w-full" size="lg">
        Proceed to Checkout
      </Button>

    </div>
  );
}