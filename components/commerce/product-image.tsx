
import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

export default function ProductImage({
  src,
  alt,
}: ProductImageProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-3xl bg-neutral-100">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}



























































































































