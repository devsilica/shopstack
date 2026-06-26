import Link from "next/link";

import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center justify-center rounded-[32px] border border-dashed py-24 text-center">
      <Heart
        className="mb-6 text-neutral-300"
        size={56}
      />

      <h2 className="text-3xl font-semibold">
        Your wishlist is empty
      </h2>

      <p className="mt-4 max-w-md text-neutral-600">
        Save products you love and they'll appear here.
      </p>

      <Button
        asChild
        className="mt-8"
      >
        <Link href="/collections">
          Explore Products
        </Link>
      </Button>
    </div>
  );
}