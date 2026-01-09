import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json([], { status: 200 });
    }

    const collection = await dbConnect("bookings");

    const bookings = await collection
      .find({ user: session.user.email })
      .sort({ date: -1 })
      .toArray();

    const mapped = bookings.map((b) => ({
      ...b,
      id: b._id.toString(),
    }));

    return NextResponse.json(mapped);
  } catch (error) {
    console.error("MY BOOKINGS ERROR 👉", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
