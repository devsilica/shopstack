import { Button } from "@/components/ui/button";

export default function DeliveryMethod() {
  return (
    <div className="mt-8 rounded-[32px] border bg-white p-8">
      <h2 className="mb-6 text-3xl font-semibold">
        Delivery Method
      </h2>

      <div className="space-y-4">

        <Button
          variant="outline"
          className="w-full justify-start rounded-2xl"
        >
          🚚 Standard Delivery (3–5 Days)
        </Button>

        <Button
          variant="outline"
          className="w-full justify-start rounded-2xl"
        >
          ⚡ Express Delivery (Next Day)
        </Button>

      </div>
    </div>
  );
}