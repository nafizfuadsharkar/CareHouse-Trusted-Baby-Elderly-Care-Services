"use server";
import { revalidateTag } from "next/cache";
import dbConnect from "@/lib/dbConnect";

export const getAllReviews = async () => {
  const reviewsCollection = await dbConnect("reviews");
  const reviews = await reviewsCollection.find({}).toArray();
  return reviews;
};

export const createReview = async (review) => {
  const reviewsCollection = await dbConnect("reviews");
  const result = await reviewsCollection.insertOne(review);

  revalidateTag("reviews"); // refresh cache if using ISR

  return result;
};
