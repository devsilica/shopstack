import { Button } from "@/components/ui/button";

export default function SecuritySettings() {
  return (
    <div className="rounded-[28px] border bg-white p-8">
      <h2 className="mb-6 text-2xl font-semibold">
        Security
      </h2>

      <Button className="rounded-full">
        Change Password
      </Button>
    </div>
  );
}