import React from "react";
import { getAllReviews } from "@/Services/reviews.service";
import { Star, Quote } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic"; // optional, ensures fresh server fetch

const ReviewsPage = async () => {
  const reviews = await getAllReviews(); // direct DB fetch

  return (
    <section className="relative py-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            Real experiences from people who trusted our care
          </p>
        </div>

        <div>
          <Link
            className="bg-gradient-to-br from-emerald-400 to-emerald-600 px-4 py-3 rounded-2xl font-semibold inline-block my-4"
            href={"/reviews/add-review"}
          >
            Add Your Review
          </Link>
        </div>

        {reviews.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            No reviews available yet
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="group relative bg-white/70 backdrop-blur-md rounded-3xl border border-white/40 shadow-md hover:shadow-xl transition-all duration-300 p-7 flex flex-col"
              >
                <Quote className="absolute top-6 right-6 w-6 h-6 text-emerald-200" />
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow">
                    {review.name?.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      Service ID: {review.serviceId}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {review.rating}/5
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  “{review.comment}”
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsPage;
