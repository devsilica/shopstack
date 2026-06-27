import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CheckoutSummary() {
  return (
    <div className="rounded-[32px] border bg-white p-8 sticky top-28">

      <h2 className="mb-8 text-3xl font-semibold">
        Order Summary
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$1,048</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <hr />

        <div className="flex justify-between text-2xl font-semibold">
          <span>Total</span>
          <span>$1,048</span>
        </div>

      </div>

      <Button
        asChild
        className="mt-10 w-full rounded-full"
        size="lg"
      >
        <Link href="/order-success">
          Place Order
        </Link>
      </Button>

    </div>
  );
}