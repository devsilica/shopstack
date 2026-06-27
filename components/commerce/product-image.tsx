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
    <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] bg-neutral-100">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
  );
}

























































































































