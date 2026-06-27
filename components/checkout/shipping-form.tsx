import { Input } from "@/components/ui/input";

export default function ShippingForm() {
  return (
    <div className="rounded-[32px] border bg-white p-8">
      <h2 className="mb-8 text-3xl font-semibold">
        Shipping Information
      </h2>

      <div className="grid gap-5">

        <Input placeholder="Full Name" />

        <Input placeholder="Email Address" />

        <Input placeholder="Phone Number" />

        <Input placeholder="Street Address" />

        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="City" />
          <Input placeholder="Postal Code" />
        </div>

      </div>
    </div>
  );
}