import { dbConnect } from "@/lib/dbConnect";

export async function GET() {
  const reviewsCollection = await dbConnect("reviews");
  const reviews = await reviewsCollection.find({}).toArray();

  return Response.json({
    reviews,
    message: "Reviews fetched successfully",
  });
}

export async function POST(request) {
  const reviewsCollection = await dbConnect("reviews");
  const newReview = await request.json();

  const result = await reviewsCollection.insertOne(newReview);

  return Response.json({
    message: "Review added successfully",
    result,
  });
}
