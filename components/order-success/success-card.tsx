import { CheckCircle2 } from "lucide-react";

export default function SuccessCard() {
  return (
    <div className="rounded-[40px] border bg-white p-12 text-center shadow-sm">

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
        <CheckCircle2
          size={52}
          className="text-green-600"
        />
      </div>

      <h1 className="mt-8 text-5xl font-semibold">
        Order Confirmed
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-600">
        Thank you for shopping with ShopStack.
        Your order has been placed successfully.
      </p>

    </div>
  );
}