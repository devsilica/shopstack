import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  reviews: number;
}

export default function Rating({
  rating,
  reviews,
}: RatingProps) {
  return (
    <div className="flex items-center gap-2">
      <Star
        size={16}
        className="fill-black text-black"
      />

      <span className="text-sm font-medium">
        {rating}
      </span>

      <span className="text-sm text-neutral-500">
        ({reviews})
      </span>
    </div>
  );
}