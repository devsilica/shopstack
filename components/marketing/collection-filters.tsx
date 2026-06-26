"use client";

import { Button } from "@/components/ui/button";

const filters = [
  "All",
  "Living Room",
  "Bedroom",
  "Workspace",
  "Dining",
  "Lighting",
];

export default function CollectionFilters() {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={filter === "All" ? "default" : "outline"}
          className="rounded-full"
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}