"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductSortProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSort({
  value,
  onChange,
}: ProductSortProps) {
  return (
    <Select
      value={value}
      onValueChange={onChange}
    >
      <SelectTrigger className="w-56 rounded-2xl">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="featured">
          Featured
        </SelectItem>

        <SelectItem value="price-low">
          Price: Low to High
        </SelectItem>

        <SelectItem value="price-high">
          Price: High to Low
        </SelectItem>

        <SelectItem value="rating">
          Highest Rated
        </SelectItem>
      </SelectContent>
    </Select>
  );
}