import { create } from "zustand";

import { reviews as initialReviews } from "@/data/reviews";
import { Review } from "@/types/review";

interface ReviewStore {
  reviews: Review[];

  addReview: (
    review: Omit<Review, "id" | "date">
  ) => void;
}

export const useReviewStore =
  create<ReviewStore>((set) => ({
    reviews: initialReviews,

    addReview: (review) =>
      set((state) => ({
        reviews: [
          {
            id: crypto.randomUUID(),
            date: "Just now",
            ...review,
          },
          ...state.reviews,
        ],
      })),
  }));