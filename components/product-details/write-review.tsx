"use client";

import { useState } from "react";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useReviewStore } from "@/store/review-store";

export default function WriteReview() {
  const addReview = useReviewStore(
    (state) => state.addReview
  );

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  function handleSubmit() {
    if (!name.trim() || !comment.trim()) return;

    addReview({
      name,
      comment,
      rating,
    });

    setName("");
    setComment("");
    setRating(5);
  }

  return (
    <div className="rounded-3xl border p-8">
      <h2 className="mb-6 text-2xl font-semibold">
        Write a Review
      </h2>

      <div className="mb-6 flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setRating(index + 1)}
            type="button"
          >
            <Star
              className={`h-6 w-6 ${
                index < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-neutral-300"
              }`}
            />
          </button>
        ))}
      </div>

      <input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        placeholder="Your name"
        className="mb-4 h-12 w-full rounded-2xl border px-4"
      />

      <textarea
        rows={5}
        value={comment}
        onChange={(e) =>
          setComment(e.target.value)
        }
        placeholder="Write your review..."
        className="mb-6 w-full rounded-2xl border p-4"
      />

      <Button
        onClick={handleSubmit}
        className="h-12 rounded-2xl"
      >
        Submit Review
      </Button>
    </div>
  );
}