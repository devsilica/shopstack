import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  reviewCount: number;
}

export default function Rating({
  rating,
  reviewCount,
}: RatingProps) {
  return (
    <div className="flex items-center gap-2">
      <Star
        size={16}
        className="fill-yellow-400 text-yellow-400"
      />

      <span className="text-sm font-medium">
        {rating}
      </span>

      <span className="text-sm text-neutral-500">
        ({reviewCount})
      </span>
    </div>
  );
}