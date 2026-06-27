"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  open: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function ImageLightbox({
  images,
  currentIndex,
  open,
  onClose,
  onNext,
  onPrevious,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          onNext();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, onNext, onPrevious]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/95">

      <Button
        variant="secondary"
        size="icon"
        onClick={onClose}
        className="absolute right-6 top-6 z-20 rounded-full"
      >
        <X className="h-5 w-5" />
      </Button>

      <Button
        variant="secondary"
        size="icon"
        onClick={onPrevious}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="secondary"
        size="icon"
        onClick={onNext}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="flex h-full items-center justify-center p-10">
        <div className="relative h-[85vh] w-full max-w-6xl">
          <Image
            src={images[currentIndex]}
            alt="Product"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-sm text-white backdrop-blur">
        {currentIndex + 1} / {images.length}
      </div>

    </div>
  );
}