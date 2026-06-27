import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function SuccessActions() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">

      <Button
        asChild
        size="lg"
        className="rounded-full"
      >
        <Link href="/track-order">
          Track Order
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="rounded-full"
      >
        <Link href="/">
          Continue Shopping
        </Link>
      </Button>

    </div>
  );
}