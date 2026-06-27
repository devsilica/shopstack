import { Input } from "@/components/ui/input";

export default function AddressSettings() {
  return (
    <div className="rounded-[28px] border bg-white p-8">
      <h2 className="mb-6 text-2xl font-semibold">
        Address
      </h2>

      <div className="grid gap-4">
        <Input placeholder="Street Address" />
        <Input placeholder="City" />
        <Input placeholder="Postal Code" />
      </div>
    </div>
  );
}