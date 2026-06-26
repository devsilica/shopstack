import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function QuickActions() {
  return (
    <div className="rounded-[28px] border bg-white p-8">
      <h2 className="mb-6 text-2xl font-semibold">
        Quick Actions
      </h2>

      <div className="space-y-4">
        <Button asChild className="w-full rounded-full">
          <Link href="/orders">View Orders</Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="w-full rounded-full"
        >
          <Link href="/settings">Account Settings</Link>
        </Button>

        <Button
          asChild
          variant="secondary"
          className="w-full rounded-full"
        >
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}