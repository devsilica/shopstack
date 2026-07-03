import { Star } from "lucide-react";

import { Review } from "@/types/review";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({
  review,
}: ReviewCardProps) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:shadow-md">

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-lg font-semibold">
            {review.name}
          </h3>

          <p className="mt-1 text-sm text-neutral-500">
            {review.date}
          </p>

        </div>

        <div className="flex gap-1">
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star
              key={index}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

      </div>

      <p className="mt-6 leading-8 text-neutral-600">
        {review.comment}
      </p>

    </div>
  );
}