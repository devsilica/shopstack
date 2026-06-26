"use client";

import { useState } from "react";
import Image from "next/image";

import GalleryControls from "./gallery-controls";
import GalleryThumbnails from "./gallery-thumbnails";
import ImageLightbox from "./image-lightbox";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const selectedImage = images[currentIndex];

  function nextImage() {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }

  function previousImage() {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }

  function selectImage(image: string) {
    const index = images.indexOf(image);

    if (index !== -1) {
      setCurrentIndex(index);
    }
  }

  return (
    <>
      <div className="space-y-5">

        {/* Main Image */}

        <div className="relative aspect-square overflow-hidden rounded-[32px] bg-neutral-100">

          <GalleryControls
            onPrevious={previousImage}
            onNext={nextImage}
          />

          <button
            onClick={() => setLightboxOpen(true)}
            className="relative h-full w-full cursor-zoom-in"
          >
            <Image
              src={selectedImage}
              alt={name}
              fill
              priority
              className="object-cover transition duration-500 hover:scale-110"
            />
          </button>

          {/* Counter */}

          <div className="absolute bottom-5 right-5 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white backdrop-blur">
            {currentIndex + 1} / {images.length}
          </div>

        </div>

        {/* Thumbnails */}

        <GalleryThumbnails
          images={images}
          selectedImage={selectedImage}
          onSelect={selectImage}
          productName={name}
        />

      </div>

     <ImageLightbox
  images={images}
  currentIndex={currentIndex}
  open={lightboxOpen}
  onClose={() => setLightboxOpen(false)}
  onNext={nextImage}
  onPrevious={previousImage}
/>
    </>
  );
}