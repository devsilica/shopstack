import { Input } from "@/components/ui/input";

export default function ProfileSettings() {
  return (
    <div className="rounded-[28px] border bg-white p-8">
      <h2 className="mb-6 text-2xl font-semibold">
        Profile
      </h2>

      <div className="grid gap-4">
        <Input placeholder="Full Name" />
        <Input placeholder="Email Address" />
        <Input placeholder="Phone Number" />
      </div>
    </div>
  );
}