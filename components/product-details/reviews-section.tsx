"use client";

import Container from "@/components/layout/container";

import RatingBreakdown from "./rating-breakdown";
import ReviewCard from "./review-card";
import WriteReview from "./write-review";

import { useReviewStore } from "@/store/review-store";

export default function ReviewsSection() {
  const reviews = useReviewStore(
    (state) => state.reviews
  );

  return (
    <section className="mt-24 pb-24">
      <Container>
        <div className="max-w-6xl">

          <h2 className="mb-10 text-4xl font-semibold">
            Customer Reviews
          </h2>

          <div className="grid gap-12 lg:grid-cols-[340px_1fr]">

            <RatingBreakdown />

            <div className="space-y-6">
              {reviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                />
              ))}
            </div>

          </div>

          <div className="mt-16">
            <WriteReview />
          </div>

        </div>
      </Container>
    </section>
  );
}