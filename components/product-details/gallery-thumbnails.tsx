"use client";

import Image from "next/image";

interface GalleryThumbnailsProps {
  images: string[];
  selectedImage: string;
  onSelect: (image: string) => void;
  productName: string;
}

export default function GalleryThumbnails({
  images,
  selectedImage,
  onSelect,
  productName,
}: GalleryThumbnailsProps) {
  return (
    <div className="mt-5 grid grid-cols-4 gap-4">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onSelect(image)}
          className={`relative aspect-square overflow-hidden rounded-2xl border-2 transition-all ${
            selectedImage === image
              ? "border-black"
              : "border-transparent hover:border-neutral-300"
          }`}
        >
          <Image
            src={image}
            alt={`${productName}-${index}`}
            fill
            className="object-cover"
          />
        </button>
      ))}
    </div>
  );
}