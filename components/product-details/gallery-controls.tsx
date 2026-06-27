"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface GalleryControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function GalleryControls({
  onPrevious,
  onNext,
}: GalleryControlsProps) {
  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        onClick={onPrevious}
        className="absolute left-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 shadow-lg backdrop-blur"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="secondary"
        size="icon"
        onClick={onNext}
        className="absolute right-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 shadow-lg backdrop-blur"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </>
  );
}