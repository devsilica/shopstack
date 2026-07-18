"use client";

import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import CartItems from "./cart-items";
import OrderSummary from "./order-summary";

interface CartSheetProps {
  children: React.ReactNode;
}

export default function CartSheet({
  children,
}: CartSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full overflow-y-auto sm:max-w-xl"
      >
        <SheetHeader>
          <SheetTitle className="text-2xl">
            Shopping Cart
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 space-y-8">
          <CartItems />

          <OrderSummary />

          <Button
            asChild
            variant="outline"
            className="w-full rounded-2xl"
          >
            <Link href="/cart">
              View Full Cart
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}