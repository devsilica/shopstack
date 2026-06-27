"use client";

import Link from "next/link";
import { Heart, Search, ShoppingBag } from "lucide-react";

import Container from "./container";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWishlistStore } from "@/store/wishlist-store";
import { useCartStore } from "@/store/cart-store";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function Navbar() {
  const { items } = useCartStore();

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const { items: wishlistItems } = useWishlistStore();
  const wishlistCount = wishlistItems.length;

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            ShopStack
          </Link>

          {/* Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">
            <Link href="/">Home</Link>

            <Link
              href="/collections"
              className="transition-colors hover:text-neutral-500"
            >
              Collections
            </Link>

            <Link href="/products">
              Products
            </Link>

            <Link href="/search">
              Search
            </Link>
          </nav>

          {/* Right */}

          <div className="flex items-center gap-4">

            <div className="hidden w-72 lg:block">
              <Input
                placeholder="Search products..."
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
            >
              <Search size={20} />
            </Button>

<Button
  variant="ghost"
  size="icon"
  asChild
>
  <Link
    href="/wishlist"
    className="relative"
  >
    <Heart size={20} />

    {wishlistCount > 0 && (
      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-semibold text-white">
        {wishlistCount}
      </span>
    )}
  </Link>
</Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <Link
                href="/cart"
                className="relative"
              >
                <ShoppingBag size={20} />

                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[11px] font-semibold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>
            </Button>

            <Avatar>
              <AvatarImage src="/images/avatars/user-1.jpg" />
              <AvatarFallback>
                SS
              </AvatarFallback>
            </Avatar>

          </div>

        </div>
      </Container>
    </header>
  );
}