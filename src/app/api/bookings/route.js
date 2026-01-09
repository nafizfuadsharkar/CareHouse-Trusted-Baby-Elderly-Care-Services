import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Booking from "@/models/Booking";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }


  const data = await req.json();
  data.user = session.user.email; // add logged-in user
  data.service = data.serviceId;
  data.date = new Date();

  const collection = await dbConnect("bookings");
  const result = await collection.insertOne(data);

  return NextResponse.json(result);
}
