"use client";

import { Star } from "lucide-react";

interface RatingFilterProps {
  value: number;
  onChange: (rating: number) => void;
}

const ratings = [5, 4, 3];

export default function RatingFilter({
  value,
  onChange,
}: RatingFilterProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        Rating
      </h3>

      <div className="space-y-3">
        {ratings.map((rating) => (
          <button
            key={rating}
            onClick={() => onChange(rating)}
            className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 transition ${
              value === rating
                ? "bg-black text-white"
                : "hover:bg-neutral-100"
            }`}
          >
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  value === rating
                    ? "fill-white"
                    : "fill-yellow-400 text-yellow-400"
                }`}
              />
            ))}

            <span>& Up</span>
          </button>
        ))}

        <button
          onClick={() => onChange(0)}
          className={`w-full rounded-xl px-3 py-2 text-left transition ${
            value === 0
              ? "bg-black text-white"
              : "hover:bg-neutral-100"
          }`}
        >
          All Ratings
        </button>
      </div>
    </div>
  );
}