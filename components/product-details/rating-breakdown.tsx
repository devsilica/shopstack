"use client";

import { Star } from "lucide-react";

import { useReviewStore } from "@/store/review-store";

export default function RatingBreakdown() {
  const reviews = useReviewStore(
    (state) => state.reviews
  );

  const totalReviews = reviews.length;

  const average =
    totalReviews === 0
      ? 0
      : (
          reviews.reduce(
            (sum, review) => sum + review.rating,
            0
          ) / totalReviews
        ).toFixed(1);

  const counts = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviews.filter(
      (review) => review.rating === stars
    ).length,
  }));

  return (
    <div className="rounded-3xl border p-8">

      <h2 className="text-5xl font-bold">
        {average}
      </h2>

      <div className="mt-3 flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="mt-3 text-neutral-500">
        Based on {totalReviews} reviews
      </p>

      <div className="mt-8 space-y-4">

        {counts.map((item) => (
          <div
            key={item.stars}
            className="flex items-center gap-4"
          >
            <span className="w-5">
              {item.stars}
            </span>

            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <div className="h-2 flex-1 rounded-full bg-neutral-200">

              <div
                className="h-full rounded-full bg-black"
                style={{
                  width: `${
                    totalReviews
                      ? (item.count / totalReviews) *
                        100
                      : 0
                  }%`,
                }}
              />

            </div>

            <span className="w-6 text-right text-sm text-neutral-500">
              {item.count}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}