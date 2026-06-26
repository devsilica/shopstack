import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PromoCode() {
  return (
    <div className="rounded-3xl border p-6">

      <h3 className="mb-4 text-lg font-semibold">
        Promo Code
      </h3>

      <div className="flex gap-3">
        <Input placeholder="Enter code" />

        <Button>
          Apply
        </Button>
      </div>

    </div>
  );
}