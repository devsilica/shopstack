import { Button } from "@/components/ui/button";

export default function PaymentMethod() {
  return (
    <div className="mt-8 rounded-[32px] border bg-white p-8">
      <h2 className="mb-6 text-3xl font-semibold">
        Payment Method
      </h2>

      <div className="space-y-4">

        <Button
          variant="outline"
          className="w-full justify-start rounded-2xl"
        >
          💳 Credit Card
        </Button>

        <Button
          variant="outline"
          className="w-full justify-start rounded-2xl"
        >
           Apple Pay
        </Button>

        <Button
          variant="outline"
          className="w-full justify-start rounded-2xl"
        >
          PayPal
        </Button>

      </div>
    </div>
  );
}