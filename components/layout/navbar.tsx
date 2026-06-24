"use client";

import Link from "next/link";
import { Search, Heart, ShoppingCart, Moon } from "lucide-react";

import Container from "./container";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-semibold tracking-tight"
          >
            ShopStack
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-600 transition-colors hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Search size={18} />
            <Heart size={18} />
            <ShoppingCart size={18} />
            <Moon size={18} />
          </div>
        </div>
      </Container>
    </header>
  );
}