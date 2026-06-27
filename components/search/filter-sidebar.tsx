"use client";

import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "Living Room",
  "Bedroom",
  "Dining",
  "Lighting",
  "Workspace",
];

export default function FilterSidebar() {
  return (
    <aside className="space-y-3">
      <h3 className="text-lg font-semibold">
        Categories
      </h3>

      {categories.map((category) => (
        <Button
          key={category}
          variant="ghost"
          className="w-full justify-start"
        >
          {category}
        </Button>
      ))}
    </aside>
  );
}