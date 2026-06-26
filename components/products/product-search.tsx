"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({
  value,
  onChange,
}: ProductSearchProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className="h-12 rounded-2xl pl-12"
      />
    </div>
  );
}