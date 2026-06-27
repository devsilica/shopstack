"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ProductsSearch() {
  return (
    <div className="relative flex-1">

      <Search
        className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
        size={20}
      />

      <Input
        placeholder="Search products..."
        className="h-14 rounded-full pl-14"
      />

    </div>
  );
}