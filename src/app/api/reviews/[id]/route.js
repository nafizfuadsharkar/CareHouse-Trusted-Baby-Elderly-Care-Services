import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json({ message: "Invalid review ID" }, { status: 400 });
  }

  const reviewsCollection = await dbConnect("reviews");
  const review = await reviewsCollection.findOne({ _id: new ObjectId(id) });
  return Response.json({ review, message: "Single Review retrieved" });
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const updatedData = await request.json();

  if (id.length !== 24) {
    return Response.json({ message: "Invalid review ID" }, { status: 400 });
  }

  const filter = { _id: new ObjectId(id) };
  const updateDoc = { $set: updatedData };

  const reviewsCollection = await dbConnect("reviews");
  const review = await reviewsCollection.updateOne(filter, updateDoc);
  return Response.json({ review, message: "Single Review updated" });
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  if (id.length !== 24) {
    return Response.json({ message: "Invalid review ID" }, { status: 400 });
  }
  const reviewsCollection = await dbConnect("reviews");
  const review = await reviewsCollection.deleteOne({ _id: new ObjectId(id) });
  return Response.json({ review, message: "Single Review deleted" });
}
